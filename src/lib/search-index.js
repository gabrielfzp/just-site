import Fuse from "fuse.js";
import { ARTICLES } from "./content-loader.js";

const fuse = new Fuse(ARTICLES, {
  threshold: 0.34,
  ignoreLocation: true,
  keys: [
    { name: "title", weight: 0.45 },
    { name: "description", weight: 0.25 },
    { name: "tags", weight: 0.15 },
    { name: "category.name", weight: 0.15 },
  ],
});

export function searchArticles(query) {
  const term = String(query || "").trim();
  if (!term) return ARTICLES;
  return fuse.search(term).map((result) => result.item);
}
