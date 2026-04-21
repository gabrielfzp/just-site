import { ArticleCard } from "./ArticleCard.jsx";
import { CONTENT_T } from "../../site/shared.jsx";

export function RelatedArticles({ articles = [] }) {
  if (!articles.length) return null;
  return (
    <section style={{ marginTop: 64 }}>
      <h2 style={{ color: CONTENT_T.navy, fontSize: 30, lineHeight: 1.2, marginBottom: 22 }}>Continue lendo</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
        {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
      </div>
    </section>
  );
}
