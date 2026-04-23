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

const CATEGORY_ALIASES = {
  "cartões": "cartoes",
  cartoes: "cartoes",
  "meios de pagamento": "meios-de-pagamento",
  "meios-de-pagamento": "meios-de-pagamento",
  regulação: "regulacao",
  regulacao: "regulacao",
  tecnologia: "tecnologia",
  "arranjo fechado": "arranjo-fechado",
  "arranjo-fechado": "arranjo-fechado",
  operações: "operacoes",
  operacoes: "operacoes",
};

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

function normalizeCategorySlug(value) {
  const raw = String(value || "").trim();
  if (!raw) return "meios-de-pagamento";
  const normalized = raw
    .normalize("NFD")
    .replace(/\p{Diacritic}+/gu, "")
    .toLowerCase();
  return CATEGORY_ALIASES[normalized] || slugify(normalized);
}

function normalizeCanonicalPath(value, slug) {
  if (!value) return `/conteudos/${slug}`;
  const path = String(value).trim();
  if (!path) return `/conteudos/${slug}`;
  if (path.startsWith("http://") || path.startsWith("https://")) {
    try {
      return new URL(path).pathname.replace(/\/+$/, "") || `/conteudos/${slug}`;
    } catch {
      return `/conteudos/${slug}`;
    }
  }
  return `/${path.replace(/^\/+/, "").replace(/\/+$/, "")}`;
}

function extractSection(content, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = content.match(new RegExp(`^##\\s+${escaped}\\s*\\n([\\s\\S]*?)(?=^##\\s+|\\Z)`, "im"));
  return match?.[1]?.trim() || "";
}

function stripMarkdownInline(value = "") {
  return String(value)
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_~>#]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractAnswer(content) {
  return stripMarkdownInline(extractSection(content, "Resposta direta"));
}

function extractFaqs(content) {
  const section = extractSection(content, "FAQ");
  if (!section) return [];

  const matches = [...section.matchAll(/\*\*(.+?)\*\*\s*\n+([\s\S]*?)(?=\n\*\*.+?\*\*\s*\n|\Z)/g)];
  return matches
    .map((match) => ({
      q: stripMarkdownInline(match[1]),
      a: stripMarkdownInline(match[2]),
    }))
    .filter((faq) => faq.q && faq.a);
}

export async function loadContentArticles() {
  const files = (await readdir(srcArticlesDir)).filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));

  const articles = await Promise.all(files.map(async (file) => {
    const raw = await readFile(join(srcArticlesDir, file), "utf8");
    const parsed = matter(raw);
    const data = parsed.data;
    const slug = data.slug || file.replace(/\.(md|mdx)$/, "");
    const authorSlug = data.author || "equipe-just";
    const categorySlug = normalizeCategorySlug(data.category || data.categoria);
    const author = AUTHORS[authorSlug] || AUTHORS["equipe-just"] || AUTHORS["time-just"];
    const category = CATEGORIES[categorySlug] || CATEGORIES["meios-de-pagamento"];
    const canonicalPath = normalizeCanonicalPath(data.canonical, slug);
    const answer = data.answer || extractAnswer(parsed.content);
    const faqs = Array.isArray(data.faqs) && data.faqs.length ? data.faqs : extractFaqs(parsed.content);

    return {
      ...data,
      slug,
      file,
      raw: parsed.content,
      title: data.title || slug,
      seoTitle: data.seoTitle || "",
      description: data.description || data.meta_description || "",
      answer,
      category,
      categorySlug: category.slug,
      author,
      authorSlug: author.slug,
      canonicalPath,
      publishedAt: normalizeDate(data.publishedAt || data.data_publicacao),
      updatedAt: normalizeDate(data.updatedAt || data.data_modificacao || data.publishedAt || data.data_publicacao),
      readingTime: Number(data.readingTime || data.reading_time) || getReadingTime(parsed.content),
      tags: data.tags || [],
      faqs,
      toc: extractToc(parsed.content),
      ogImage: data.ogImage || data.og_image || `/og/${slug}.png`,
      cluster: data.cluster || "",
      type: data.type || "",
      sources: data.sources || [],
      howTo: data.howTo || null,
      featured: Boolean(data.featured),
    };
  }));

  return articles.sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)));
}
