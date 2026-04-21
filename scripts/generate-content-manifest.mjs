import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { loadContentArticles, rootDir } from "./load-content.mjs";

const articles = await loadContentArticles();
const manifest = articles.map((article) => ({
  slug: article.slug,
  file: article.file,
  title: article.title,
  seoTitle: article.seoTitle || "",
  description: article.description,
  categorySlug: article.category.slug,
  cluster: article.cluster || "",
  type: article.type || "",
  authorSlug: article.author.slug,
  publishedAt: article.publishedAt,
  updatedAt: article.updatedAt,
  readingTime: article.readingTime,
  answer: article.answer || "",
  tags: article.tags,
  faqs: article.faqs,
  sources: article.sources || [],
  howTo: article.howTo || null,
  toc: article.toc,
  featured: Boolean(article.featured),
  ogImage: article.ogImage,
}));

const target = join(rootDir, "src/content/generated/articles.js");
await mkdir(dirname(target), { recursive: true });
await writeFile(
  target,
  `export const ARTICLE_MANIFEST = ${JSON.stringify(manifest, null, 2)};\n`,
);

console.log(`Generated content manifest with ${manifest.length} article(s).`);
