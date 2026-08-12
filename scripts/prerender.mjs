/**
 * Renderiza o app React em HTML no build e injeta dentro do #root de cada
 * rota ja escrita por generate-seo-pages.mjs.
 *
 * Sem isso o nginx da Kaleo entrega `<body><div id="root"></div></body>`: o
 * <head> vem completo, o corpo vem vazio, e o Google arquiva a pagina como
 * "detectada, mas nao indexada".
 *
 * Roda DEPOIS de generate-seo-pages.mjs, nunca antes: o que ele injeta e o
 * corpo, e as tags de <head> daquele script precisam ja estar no arquivo.
 */
import { readFile, readdir, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const distDir = join(rootDir, "dist");

const ALVO_ROOT = '<div id="root"></div>';
const TAMANHO_MINIMO = 2000;

async function listarHtmlDeRota(dir) {
  const entradas = await readdir(dir, { withFileTypes: true });
  const arquivos = [];
  for (const entrada of entradas) {
    const caminho = join(dir, entrada.name);
    if (entrada.isDirectory()) {
      arquivos.push(...(await listarHtmlDeRota(caminho)));
    } else if (entrada.name === "index.html") {
      arquivos.push(caminho);
    }
  }
  return arquivos;
}

function rotaDoArquivo(arquivo) {
  const relativo = relative(distDir, arquivo).split(sep).slice(0, -1).join("/");
  // o host estatico serve esses arquivos sempre com barra final; a location do
  // StaticRouter precisa bater com a do navegador para a hidratacao fechar
  return relativo ? `/${relativo}/` : "/";
}

const servidor = await createServer({
  root: rootDir,
  logLevel: "warn",
  appType: "custom",
  server: { middlewareMode: true, hmr: false, watch: null },
});

const falhas = [];

try {
  const { renderizarRota } = await servidor.ssrLoadModule("/src/entry-server.jsx");
  const arquivos = (await listarHtmlDeRota(distDir)).sort();

  let renderizadas = 0;
  let puladas = 0;

  for (const arquivo of arquivos) {
    const rota = rotaDoArquivo(arquivo);
    const htmlBase = await readFile(arquivo, "utf8");

    // paginas de alias so existem para mandar o visitante embora com
    // meta refresh e ficam em noindex: corpo nelas seria conteudo duplicado
    if (/<meta http-equiv="refresh"/.test(htmlBase)) {
      puladas += 1;
      continue;
    }

    if (!htmlBase.includes(ALVO_ROOT)) {
      falhas.push(`${rota}: nao achei ${ALVO_ROOT} no HTML`);
      continue;
    }

    let corpo;
    try {
      const resultado = await renderizarRota(rota);
      if (resultado.erros.length) {
        falhas.push(`${rota}: ${resultado.erros.map((e) => e.message).join(" | ")}`);
        continue;
      }
      corpo = resultado.html;
    } catch (erro) {
      falhas.push(`${rota}: ${erro.message}`);
      continue;
    }

    if (corpo.length < TAMANHO_MINIMO) {
      falhas.push(`${rota}: corpo renderizado com apenas ${corpo.length} bytes`);
      continue;
    }

    await writeFile(arquivo, htmlBase.replace(ALVO_ROOT, `<div id="root">${corpo}</div>`));
    renderizadas += 1;
  }

  console.log(`Pre-renderizadas ${renderizadas} rota(s); ${puladas} alias com redirect ignorado(s).`);
} finally {
  await servidor.close();
}

if (falhas.length) {
  console.error(`\nERRO: ${falhas.length} rota(s) sem HTML renderizado:`);
  falhas.forEach((falha) => console.error(`  - ${falha}`));
  process.exit(1);
}
