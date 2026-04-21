import { SITE_URL } from "../src/site/seo.js";
import { loadContentArticles } from "./load-content.mjs";

const articles = await loadContentArticles();
const urls = [
  `${SITE_URL}/conteudos`,
  ...articles.map((article) => `${SITE_URL}/conteudos/${article.slug}`),
];

console.log("Search engine notification dry run.");
console.log(`Sitemap: ${SITE_URL}/sitemap.xml`);
console.log(`URLs prepared for IndexNow/Bing: ${urls.length}`);
console.log("Configure credentials before enabling network submission in deploy.");
