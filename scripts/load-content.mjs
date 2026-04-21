import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import matter from "gray-matter";
import { AUTHORS } from "../src/content/authors.js";
import { CATEGORIES } from "../src/content/categories.js";
import { getReadingTime } from "../src/lib/reading-time.js";

export const rootDir = new URL("..", import.meta.url).pathname;
export const srcArticlesDir = join(rootDir, "src/content/articles");
export const publicOgDir = join(rootDir, "public/og");
export const distDir = join(rootDir, "dist");

function slugify(value = "") {
  return String(value)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

function cleanHeading(value) {
  return value.replace(/<[^>]+>/g, "").replace(/[`*_#]/g, "").trim();
}

function extractToc(content) {
  return [...content.matchAll(/^##\s+(.+)$/gm)].map((match) => {
    const title = cleanHeading(match[1]);
    return { id: slugify(title), title };
  });
}

function normalizeDate(value) {
  if (!value) return "";
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value);
}

export async function loadContentArticles() {
  const files = (await readdir(srcArticlesDir)).filter((file) => file.endsWith(".mdx"));

  const articles = await Promise.all(files.map(async (file) => {
    const raw = await readFile(join(srcArticlesDir, file), "utf8");
    const parsed = matter(raw);
    const data = parsed.data;
    const slug = data.slug || file.replace(/\.mdx$/, "");
    const author = AUTHORS[data.author] || AUTHORS["time-just"];
    const category = CATEGORIES[data.category] || CATEGORIES["meios-de-pagamento"];

    return {
      ...data,
      slug,
      file,
      raw: parsed.content,
      title: data.title || slug,
      description: data.description || "",
      category,
      categorySlug: category.slug,
      author,
      publishedAt: normalizeDate(data.publishedAt),
      updatedAt: normalizeDate(data.updatedAt || data.publishedAt),
      readingTime: Number(data.readingTime) || getReadingTime(parsed.content),
      tags: data.tags || [],
      faqs: data.faqs || [],
      toc: extractToc(parsed.content),
      ogImage: data.ogImage || `/og/${slug}.png`,
    };
  }));

  return articles.sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)));
}
