import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { getSeo, SEO_ROUTE_KEYS } from "../src/site/seo.js";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const distDir = join(rootDir, "dist");
const baseHtml = await readFile(join(distDir, "index.html"), "utf8");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}

function replaceOrInsert(html, pattern, replacement) {
  if (pattern.test(html)) return html.replace(pattern, replacement);
  return html.replace("</head>", `    ${replacement}\n  </head>`);
}

function updateMetaName(html, name, content) {
  const tag = `<meta name="${name}" content="${escapeAttr(content)}" />`;
  return replaceOrInsert(html, new RegExp(`<meta name="${name}" content="[^"]*"\\s*/?>`), tag);
}

function updateMetaProperty(html, property, content) {
  const tag = `<meta property="${property}" content="${escapeAttr(content)}" />`;
  return replaceOrInsert(html, new RegExp(`<meta property="${property}" content="[^"]*"\\s*/?>`), tag);
}

function updateCanonical(html, href) {
  return replaceOrInsert(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${escapeAttr(href)}" />`,
  );
}

function withManagedSeoBlock(html, seo) {
  const block = [
    "<!-- JUST route SEO -->",
    `<link rel="alternate" hreflang="pt-BR" href="${escapeAttr(seo.canonical)}" />`,
    `<link rel="alternate" hreflang="x-default" href="${escapeAttr(seo.canonical)}" />`,
    `<script id="just-jsonld" type="application/ld+json">${escapeHtml(JSON.stringify(seo.jsonLd))}</script>`,
    "<!-- /JUST route SEO -->",
  ].join("\n    ");

  const blockPattern = /    <!-- JUST route SEO -->[\s\S]*?<!-- \/JUST route SEO -->\n?/;
  if (blockPattern.test(html)) return html.replace(blockPattern, `    ${block}\n`);
  return html.replace("</head>", `    ${block}\n  </head>`);
}

function renderRouteHtml(routeKey) {
  const seo = getSeo(routeKey, "pt-BR");
  let html = baseHtml;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`);
  html = updateMetaName(html, "description", seo.description);
  html = updateMetaName(html, "robots", seo.robots);
  html = updateMetaName(html, "twitter:title", seo.title);
  html = updateMetaName(html, "twitter:description", seo.description);
  html = updateMetaName(html, "twitter:image", seo.image);
  html = updateMetaProperty(html, "og:title", seo.title);
  html = updateMetaProperty(html, "og:description", seo.description);
  html = updateMetaProperty(html, "og:url", seo.canonical);
  html = updateMetaProperty(html, "og:image", seo.image);
  html = updateMetaProperty(html, "og:image:alt", "Logo da JUST");
  html = updateCanonical(html, seo.canonical);
  html = withManagedSeoBlock(html, seo);

  return { html, path: seo.path };
}

for (const routeKey of SEO_ROUTE_KEYS) {
  const { html, path } = renderRouteHtml(routeKey);
  const target = path === "/" ? join(distDir, "index.html") : join(distDir, path.slice(1), "index.html");

  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html);
}

console.log(`Generated SEO HTML for ${SEO_ROUTE_KEYS.length} routes.`);
