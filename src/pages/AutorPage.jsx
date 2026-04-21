import { useEffect } from "react";
import { ArticleCard } from "../components/content/ArticleCard.jsx";
import { AuthorBadge } from "../components/content/AuthorBadge.jsx";
import { getAuthorBySlug } from "../content/authors.js";
import { getArticlesByAuthor } from "../lib/content-loader.js";
import { applySeo } from "../site/seo.js";
import { getAuthorSeo } from "../site/content-seo.js";
import { CONTENT_T, T } from "../site/shared.jsx";

export default function AutorPage({ slug }) {
  const author = getAuthorBySlug(slug);
  const articles = getArticlesByAuthor(slug);

  useEffect(() => {
    if (author) applySeo(getAuthorSeo(author), "pt-BR");
  }, [author]);

  if (!author) {
    return (
      <section style={{ minHeight: "70vh", padding: "150px 48px", background: CONTENT_T.bg }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h1 style={{ color: CONTENT_T.navy, fontSize: 44, marginBottom: 16 }}>Autor não encontrado</h1>
          <a href="/conteudos" style={{ color: T.cta, fontWeight: 700 }}>Voltar para conteúdos</a>
        </div>
      </section>
    );
  }

  return (
    <section style={{ minHeight: "100vh", padding: "142px 48px 96px", background: CONTENT_T.bg }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <a href="/conteudos" style={{ color: T.cta, textDecoration: "none", fontSize: 13, fontWeight: 700 }}>← Conteúdos</a>
        <div style={{ margin: "28px 0 22px" }}>
          <AuthorBadge author={author} />
        </div>
        <p style={{ color: CONTENT_T.mutedStrong, fontSize: 18, lineHeight: 1.65, maxWidth: 760, marginBottom: 18 }}>{author.bio}</p>
        {author.linkedin && (
          <a
            href={author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 42,
              padding: "0 16px",
              borderRadius: 8,
              background: CONTENT_T.surfaceWarm,
              border: "1px solid rgba(244,85,70,0.22)",
              color: T.cta,
              fontSize: 14,
              fontWeight: 800,
              textDecoration: "none",
              marginBottom: 44,
            }}
          >
            Acessar LinkedIn
          </a>
        )}
        <h2 style={{ color: CONTENT_T.navy, fontSize: 30, marginBottom: 22 }}>Conteúdos relacionados</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
          {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </div>
    </section>
  );
}
