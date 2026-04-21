import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { AUTHORS_LIST } from "../src/content/authors.js";
import { CATEGORIES_LIST } from "../src/content/categories.js";
import { buildArticleJsonLd, buildArticleUrl } from "../src/lib/schema-builder.js";
import { DEFAULT_IMAGE, getSeo, SEO_ROUTE_KEYS, SITE_URL } from "../src/site/seo.js";
import { applyHtmlSeo } from "./html-seo-utils.mjs";
import { loadContentArticles } from "./load-content.mjs";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const distDir = join(rootDir, "dist");
const baseHtml = await readFile(join(distDir, "index.html"), "utf8");
const articles = await loadContentArticles();

function writeRoute(path, seo) {
  const html = applyHtmlSeo(baseHtml, seo);
  const target = path === "/" ? join(distDir, "index.html") : join(distDir, path.replace(/^\/+/, ""), "index.html");
  return mkdir(dirname(target), { recursive: true }).then(() => writeFile(target, html));
}

const siteRoutes = SEO_ROUTE_KEYS.map((routeKey) => {
  const seo = getSeo(routeKey, "pt-BR");
  return writeRoute(seo.path, seo);
});

const articleRoutes = articles.map((article) => writeRoute(`/conteudos/${article.slug}`, {
  title: `${article.seoTitle || article.title} | JUST`,
  description: article.description,
  canonical: buildArticleUrl(article),
  markdown: `${buildArticleUrl(article)}.md`,
  image: `${SITE_URL}${article.ogImage}`,
  imageAlt: article.title,
  type: "article",
  article,
  robots: "index, follow",
  jsonLd: buildArticleJsonLd(article),
}));

const categoryRoutes = CATEGORIES_LIST.map((category) => writeRoute(`/conteudos/categoria/${category.slug}`, {
  title: `${category.name} | Conteúdos JUST`,
  description: category.description,
  canonical: `${SITE_URL}/conteudos/categoria/${category.slug}`,
  image: DEFAULT_IMAGE,
  imageWidth: "812",
  imageHeight: "499",
  imageAlt: "Logo da JUST",
  robots: "index, follow",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "CollectionPage",
      url: `${SITE_URL}/conteudos/categoria/${category.slug}`,
      name: category.name,
      description: category.description,
      inLanguage: "pt-BR",
    }],
  },
}));

const authorRoutes = AUTHORS_LIST.map((author) => writeRoute(`/autores/${author.slug}`, {
  title: `${author.name} | Autor JUST`,
  description: author.bio,
  canonical: `${SITE_URL}/autores/${author.slug}`,
  image: author.avatar ? `${SITE_URL}${author.avatar}` : DEFAULT_IMAGE,
  imageWidth: author.avatar ? "1200" : "812",
  imageHeight: author.avatar ? "630" : "499",
  imageAlt: author.name,
  robots: "index, follow",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "ProfilePage",
      url: `${SITE_URL}/autores/${author.slug}`,
      name: author.name,
      description: author.bio,
      inLanguage: "pt-BR",
      mainEntity: {
        "@type": "Person",
        name: author.name,
        jobTitle: author.role,
        description: author.bio,
        image: author.avatar ? `${SITE_URL}${author.avatar}` : undefined,
        sameAs: author.linkedin ? [author.linkedin] : [],
      },
    }],
  },
}));

await Promise.all([...siteRoutes, ...articleRoutes, ...categoryRoutes, ...authorRoutes]);

console.log(`Generated SEO HTML for ${SEO_ROUTE_KEYS.length} site routes, ${articles.length} article(s), ${CATEGORIES_LIST.length} category pages and ${AUTHORS_LIST.length} author pages.`);
