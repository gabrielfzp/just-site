import { AUTHORS, getAuthorBySlug } from "../content/authors.js";
import { CATEGORIES, getCategoryBySlug } from "../content/categories.js";
import { ARTICLE_MANIFEST } from "../content/generated/articles.js";

const articleModules = import.meta.glob("../content/articles/*.mdx", { eager: true });

function normalizeArticle(data) {
  const modulePath = `../content/articles/${data.file}`;
  const Component = articleModules[modulePath]?.default;
  const author = getAuthorBySlug(data.authorSlug) || AUTHORS["time-just"];
  const category = getCategoryBySlug(data.categorySlug) || CATEGORIES["meios-de-pagamento"];

  return {
    ...data,
    Component,
    category,
    categorySlug: category.slug,
    author,
    authorSlug: author.slug,
  };
}

export const ARTICLES = ARTICLE_MANIFEST
  .map((article) => normalizeArticle(article))
  .sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)));

export const FEATURED_ARTICLE = ARTICLES.find((article) => article.featured) || ARTICLES[0] || null;

export function getArticleBySlug(slug) {
  return ARTICLES.find((article) => article.slug === slug) || null;
}

export function getArticlesByCategory(categorySlug) {
  return ARTICLES.filter((article) => article.categorySlug === categorySlug);
}

export function getArticlesByAuthor(authorSlug) {
  return ARTICLES.filter((article) => article.authorSlug === authorSlug);
}

export function getRelatedArticles(article, limit = 3) {
  if (!article) return [];
  const sameCluster = ARTICLES.filter((item) => item.slug !== article.slug && item.cluster === article.cluster);
  const sameCategory = ARTICLES.filter((item) => item.slug !== article.slug && item.categorySlug === article.categorySlug);
  return [...sameCluster, ...sameCategory]
    .filter((item, index, list) => list.findIndex((candidate) => candidate.slug === item.slug) === index)
    .slice(0, limit);
}
