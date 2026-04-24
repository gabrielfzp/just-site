import { AuthorBadge } from "./AuthorBadge.jsx";
import { CONTENT_T, T } from "../../site/shared.jsx";

export function ArticleHeader({ article }) {
  return (
    <header className="article-page-header" style={{ padding: "138px 48px 64px", background: CONTENT_T.band, borderBottom: `1px solid ${CONTENT_T.border}` }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <nav className="article-breadcrumbs" style={{ color: CONTENT_T.muted, fontSize: 13, marginBottom: 28 }}>
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 8px" }}>/</span>
          <a href="/conteudos" style={{ color: "inherit", textDecoration: "none" }}>Conteúdos</a>
          <span style={{ margin: "0 8px" }}>/</span>
          <a href={`/conteudos/categoria/${article.category.slug}`} style={{ color: T.cta, textDecoration: "none" }}>{article.category.name}</a>
        </nav>
        <div className="article-category-kicker" style={{ color: T.cta, fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>{article.category.name}</div>
        <h1 className="article-page-title" style={{ color: CONTENT_T.navy, fontSize: 56, lineHeight: 1.03, letterSpacing: "-0.02em", maxWidth: 900, marginBottom: 22 }}>{article.title}</h1>
        <p className="article-page-description" style={{ color: CONTENT_T.mutedStrong, fontSize: 19, lineHeight: 1.65, maxWidth: 760, marginBottom: 32 }}>{article.description}</p>
        <div className="article-page-meta" style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
          <AuthorBadge author={article.author} />
          <div style={{ color: CONTENT_T.muted, fontSize: 13, lineHeight: 1.7 }}>
            <div>Atualizado em {new Date(`${article.updatedAt}T00:00:00`).toLocaleDateString("pt-BR")}</div>
            <div>{article.readingTime} min de leitura</div>
          </div>
        </div>
      </div>
    </header>
  );
}
