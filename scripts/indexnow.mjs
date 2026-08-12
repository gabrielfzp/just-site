/**
 * Avisa o Bing (IndexNow) sobre as URLs publicadas.
 *
 * O indice do Bing e o que o ChatGPT consulta (~87% das citacoes batem com o
 * topo dele), entao rastreamento fresco ali vale mais que no proprio Google
 * para aparecer em resposta de IA. Roda apos o deploy confirmar que o HTML
 * novo esta no ar; falha aqui nunca derruba o deploy, so avisa.
 */
import { readFile } from "node:fs/promises";

const CHAVE = "34889563a2b9eb93dc77edf879bf5046";
const HOST = "wearejust.it";

const xml = await readFile(new URL("../dist/sitemap.xml", import.meta.url), "utf8");
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urls.length) {
  console.error("[indexnow] sitemap sem URLs; nada enviado");
  process.exit(0);
}

const resp = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: CHAVE,
    keyLocation: `https://${HOST}/${CHAVE}.txt`,
    urlList: urls,
  }),
});

// 200 e 202 sao aceite; qualquer outra coisa merece aparecer no log do deploy
console.log(`[indexnow] ${urls.length} URLs enviadas; resposta ${resp.status}`);
if (!resp.ok && resp.status !== 202) {
  console.error("[indexnow] corpo:", (await resp.text()).slice(0, 300));
}
