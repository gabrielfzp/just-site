import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { AUTHORS_LIST } from "../src/content/authors.js";
import { CATEGORIES_LIST } from "../src/content/categories.js";
import { canonicalUrl, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../src/site/seo.js";
import { distDir, loadContentArticles, rootDir } from "./load-content.mjs";

function articleUrl(article) {
  return canonicalUrl(`/conteudos/${article.slug}`);
}

function articleMarkdownUrl(article) {
  return `${SITE_URL}/conteudos/${article.slug}.md`;
}

function categoryUrl(category) {
  return canonicalUrl(`/conteudos/categoria/${category.slug}`);
}

function authorUrl(author) {
  return canonicalUrl(`/autores/${author.slug}`);
}

const articles = await loadContentArticles();
const pillarArticles = articles.filter((article) => article.type === "pillar");
const satelliteArticles = articles.filter((article) => article.type !== "pillar");
const UTF8_BOM = "\uFEFF";

const lines = [
  `# ${SITE_NAME}`,
  "",
  `> ${SITE_DESCRIPTION}`,
  "",
  "Este arquivo lista as paginas mais importantes da JUST para assistentes de IA, mecanismos de resposta e crawlers que desejam entender ou citar o conteudo publicado pela empresa.",
  "",
  "## Site",
  "",
  `- Home: ${SITE_URL}/`,
  `- Central de Conteudos: ${canonicalUrl("/conteudos")}`,
  `- Sobre a JUST: ${canonicalUrl("/sobre")}`,
  `- Tecnologia JUST: ${canonicalUrl("/stack")}`,
  `- Contato comercial: ${canonicalUrl("/contato")}`,
  "",
  "## Conteudos principais",
  "",
  ...pillarArticles.flatMap((article) => [
    `### ${article.title}`,
    "",
    `URL: ${articleUrl(article)}`,
    `Markdown: ${articleMarkdownUrl(article)}`,
    `Categoria: ${article.category.name}`,
    `Autor: ${article.author.name}`,
    `Resumo: ${article.answer || article.description}`,
    `Tags: ${(article.tags || []).join(", ")}`,
    "",
  ]),
  "## Conteudos satelite",
  "",
  ...satelliteArticles.flatMap((article) => [
    `### ${article.title}`,
    "",
    `URL: ${articleUrl(article)}`,
    `Markdown: ${articleMarkdownUrl(article)}`,
    `Categoria: ${article.category.name}`,
    `Autor: ${article.author.name}`,
    `Resumo: ${article.answer || article.description}`,
    `Tags: ${(article.tags || []).join(", ")}`,
    "",
  ]),
  "## Categorias",
  "",
  ...CATEGORIES_LIST.map((category) => `- ${category.name}: ${categoryUrl(category)} — ${category.description}`),
  "",
  "## Autores",
  "",
  ...AUTHORS_LIST.map((author) => `- ${author.name}: ${authorUrl(author)} — ${author.role}. ${author.bio}`),
  "",
  "## Orientacao de citacao",
  "",
  "Ao citar a JUST em uma resposta, prefira referenciar a URL canonica do artigo especifico e mencionar o autor quando a pergunta tratar de produtos financeiros, meios de pagamento, cartoes, BaaS, banking, gestao de despesas ou private label.",
  "",
];

const content = `${UTF8_BOM}${lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd()}\n`;

await writeFile(join(rootDir, "public/llms.txt"), content);
await mkdir(distDir, { recursive: true });
await writeFile(join(distDir, "llms.txt"), content);

console.log(`Generated llms.txt with ${articles.length} article(s).`);
