import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { AUTHORS_LIST } from "../src/content/authors.js";
import { CATEGORIES_LIST } from "../src/content/categories.js";
import { canonicalUrl, PAGE_SEO, SEO_ROUTE_KEYS } from "../src/site/seo.js";
import { distDir, loadContentArticles, rootDir } from "./load-content.mjs";

const today = "2026-04-20";
const articles = await loadContentArticles();

const urls = [
  ...SEO_ROUTE_KEYS.map((key) => ({
    loc: canonicalUrl(PAGE_SEO[key].path),
    lastmod: today,
    changefreq: key === "home" ? "weekly" : key === "conteudos" ? "daily" : "monthly",
    priority: key === "home" ? "1.0" : key === "conteudos" ? "0.9" : "0.8",
  })),
  ...articles.map((article) => ({
    loc: canonicalUrl(`/conteudos/${article.slug}`),
    lastmod: article.updatedAt || today,
    changefreq: "monthly",
    priority: "0.8",
  })),
  ...CATEGORIES_LIST.map((category) => ({
    loc: canonicalUrl(`/conteudos/categoria/${category.slug}`),
    lastmod: today,
    changefreq: "weekly",
    priority: "0.6",
  })),
  ...AUTHORS_LIST.map((author) => ({
    loc: canonicalUrl(`/autores/${author.slug}`),
    lastmod: today,
    changefreq: "monthly",
    priority: "0.4",
  })),
];

const uniqueUrls = urls.filter((url, index, list) => list.findIndex((item) => item.loc === url.loc) === index);
const body = uniqueUrls.map((url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

await writeFile(join(rootDir, "public/sitemap.xml"), xml);
await mkdir(distDir, { recursive: true });
await writeFile(join(distDir, "sitemap.xml"), xml);

console.log(`Generated sitemap with ${uniqueUrls.length} URL(s).`);
