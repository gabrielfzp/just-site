/**
 * Entrada de renderizacao estatica. Roda no Node, durante o build, com os
 * mesmos componentes que o visitante recebe: o HTML que o Google le e o HTML
 * que o React hidrata sao gerados pela mesma fonte.
 */
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router";
import { AppContent } from "./App.jsx";

function lerFluxo(stream) {
  return new Promise((resolve, reject) => {
    let texto = "";
    stream.setEncoding("utf8");
    stream.on("data", (parte) => { texto += parte; });
    stream.on("error", reject);
    stream.on("end", () => resolve(texto));
  });
}

export async function renderizarRota(rota) {
  const erros = [];

  // prerenderToNodeStream (e nao renderToString) porque as rotas de conteudo
  // entram por lazy(): o renderToString sincrono devolveria o fallback do
  // Suspense em vez do artigo.
  const { prelude } = await prerenderToNodeStream(
    <StaticRouter location={rota}>
      <AppContent />
    </StaticRouter>,
    {
      onError(erro) {
        erros.push(erro);
      },
    },
  );

  const html = await lerFluxo(prelude);
  return { html, erros };
}
