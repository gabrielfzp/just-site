import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { SITE_NAME, SITE_URL } from "../src/site/seo.js";
import { distDir, loadContentArticles, rootDir } from "./load-content.mjs";

function stripTags(value = "") {
  return String(value).replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function markdownArticleUrl(article) {
  return `${SITE_URL}/conteudos/${article.slug}.md`;
}

function articleUrl(article) {
  return `${SITE_URL}/conteudos/${article.slug}`;
}

function cleanMdxBody(content = "") {
  return content
    .replace(
      /<figure>\s*<img[\s\S]*?src="([^"]+)"[\s\S]*?alt="([^"]*)"[\s\S]*?\/>\s*<figcaption>([\s\S]*?)<\/figcaption>\s*<\/figure>/g,
      (_, src, alt, caption) => `![${alt}](${src})\n\n_${stripTags(caption)}_`,
    )
    .replace(/<[^>\n]+\/>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function renderArticleMarkdown(article) {
  const sources = (article.sources || [])
    .map((source) => `- [${source.label}](${source.url})`)
    .join("\n");

  return [
    `# ${article.title}`,
    "",
    `Canônica: ${articleUrl(article)}`,
    `Markdown: ${markdownArticleUrl(article)}`,
    `Site: ${SITE_NAME}`,
    `Autor: ${article.author.name}`,
    `Categoria: ${article.category.name}`,
    `Publicado em: ${article.publishedAt}`,
    `Atualizado em: ${article.updatedAt}`,
    `Tags: ${(article.tags || []).join(", ")}`,
    "",
    "## Resposta curta",
    "",
    article.answer || article.description,
    "",
    cleanMdxBody(article.raw),
    "",
    sources ? "## Fontes de referência" : "",
    "",
    sources,
    "",
  ].filter(Boolean).join("\n");
}

const articles = await loadContentArticles();
const UTF8_BOM = "\uFEFF";

for (const article of articles) {
  const content = `${UTF8_BOM}${renderArticleMarkdown(article)}\n`;
  const publicTarget = join(rootDir, "public/conteudos", `${article.slug}.md`);
  const distTarget = join(distDir, "conteudos", `${article.slug}.md`);

  await mkdir(dirname(publicTarget), { recursive: true });
  await mkdir(dirname(distTarget), { recursive: true });
  await writeFile(publicTarget, content);
  await writeFile(distTarget, content);
}

console.log(`Generated markdown alternates for ${articles.length} article(s).`);
