import { useEffect } from "react";
import { ArticleCard } from "../components/content/ArticleCard.jsx";
import { getCategoryBySlug } from "../content/categories.js";
import { getArticlesByCategory } from "../lib/content-loader.js";
import { applySeo } from "../site/seo.js";
import { getCategorySeo } from "../site/content-seo.js";
import { CONTENT_T, T } from "../site/shared.jsx";

export default function CategoriaPage({ slug }) {
  const category = getCategoryBySlug(slug);
  const articles = getArticlesByCategory(slug);

  useEffect(() => {
    if (category) applySeo(getCategorySeo(category), "pt-BR");
  }, [category]);

  if (!category) {
    return (
      <section style={{ minHeight: "70vh", padding: "150px 48px", background: CONTENT_T.bg }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h1 style={{ color: CONTENT_T.navy, fontSize: 44, marginBottom: 16 }}>Categoria não encontrada</h1>
          <a href="/conteudos" style={{ color: T.cta, fontWeight: 700 }}>Voltar para conteúdos</a>
        </div>
      </section>
    );
  }

  return (
    <section style={{ minHeight: "100vh", padding: "142px 48px 96px", background: CONTENT_T.bg }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <a href="/conteudos" style={{ color: T.cta, textDecoration: "none", fontSize: 13, fontWeight: 700 }}>← Conteúdos</a>
        <h1 style={{ color: CONTENT_T.navy, fontSize: 54, lineHeight: 1.05, margin: "24px 0 18px" }}>{category.name}</h1>
        <p style={{ color: CONTENT_T.mutedStrong, fontSize: 18, lineHeight: 1.65, maxWidth: 760, marginBottom: 44 }}>{category.description}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
          {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </div>
    </section>
  );
}
