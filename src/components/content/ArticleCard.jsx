import { CONTENT_T, T } from "../../site/shared.jsx";

export function ArticleCard({ article, featured = false }) {
  if (!article) return null;
  return (
    <article
      className={`article-card ${featured ? "article-card-featured" : ""}`}
      role="link"
      tabIndex={0}
      onClick={(event) => {
        if (event.target.closest("a")) return;
        window.location.href = `/conteudos/${article.slug}`;
      }}
      onKeyDown={(event) => {
        if (event.target.closest("a")) return;
        if (event.key === "Enter") window.location.href = `/conteudos/${article.slug}`;
      }}
      style={{
      display: "block",
      minHeight: featured ? 300 : 260,
      padding: featured ? 34 : 26,
      borderRadius: 8,
      background: featured ? `linear-gradient(145deg, ${CONTENT_T.surfaceWarm}, #ffffff)` : CONTENT_T.surface,
      border: featured ? "1px solid rgba(244,85,70,0.22)" : `1px solid ${CONTENT_T.border}`,
      boxShadow: featured ? "0 18px 46px rgba(16,36,63,0.08)" : "0 10px 30px rgba(16,36,63,0.04)",
      cursor: "pointer",
      transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.borderColor = "rgba(244,85,70,0.35)";
      e.currentTarget.style.boxShadow = "0 18px 44px rgba(16,36,63,0.1)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.borderColor = featured ? "rgba(244,85,70,0.22)" : CONTENT_T.border;
      e.currentTarget.style.boxShadow = featured ? "0 18px 46px rgba(16,36,63,0.08)" : "0 10px 30px rgba(16,36,63,0.04)";
    }}
    >
      <div style={{ color: T.cta, fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
        {article.category.name}
      </div>
      <h2 style={{ fontSize: featured ? 34 : 24, lineHeight: 1.12, marginBottom: 14 }}>
        <a href={`/conteudos/${article.slug}`} style={{ color: CONTENT_T.navy, textDecoration: "none" }}>{article.title}</a>
      </h2>
      <p style={{ color: CONTENT_T.mutedStrong, fontSize: 15, lineHeight: 1.65, marginBottom: 22 }}>
        {article.description}
      </p>
      <div className="article-card-meta" style={{ display: "flex", flexWrap: "wrap", gap: 12, color: CONTENT_T.muted, fontSize: 13 }}>
        <span>{article.author.name}</span>
        {article.author.linkedin && (
          <>
            <span>•</span>
            <a
              href={article.author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: T.cta, fontWeight: 800, textDecoration: "none" }}
            >
              LinkedIn
            </a>
          </>
        )}
        <span>•</span>
        <span>{article.readingTime} min de leitura</span>
        <span>•</span>
        <span>Atualizado em {new Date(`${article.updatedAt}T00:00:00`).toLocaleDateString("pt-BR")}</span>
      </div>
    </article>
  );
}
