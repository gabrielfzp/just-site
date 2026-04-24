import { useEffect, useMemo, useState } from "react";
import { ArticleCard } from "../components/content/ArticleCard.jsx";
import { ContentSearch } from "../components/content/ContentSearch.jsx";
import { AUTHORS_LIST } from "../content/authors.js";
import { CATEGORIES_LIST } from "../content/categories.js";
import { ARTICLES, FEATURED_ARTICLE } from "../lib/content-loader.js";
import { searchArticles } from "../lib/search-index.js";
import { applySeo } from "../site/seo.js";
import { getContentHubSeo } from "../site/content-seo.js";
import { CONTENT_T, T } from "../site/shared.jsx";

export default function ConteudosPage() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    applySeo(getContentHubSeo(), "pt-BR");
  }, []);

  const searching = Boolean(query.trim());
  const searchResults = useMemo(() => searchArticles(query), [query]);
  const latestArticles = ARTICLES.filter((article) => article.slug !== FEATURED_ARTICLE?.slug);

  return (
    <div style={{ background: CONTENT_T.bg, minHeight: "100vh" }}>
      <section className="content-hub-hero" style={{ padding: "142px 48px 72px", background: CONTENT_T.band, borderBottom: `1px solid ${CONTENT_T.border}` }}>
        <div className="content-hub-hero-grid" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 54, alignItems: "start" }}>
          <div>
            <div className="content-hub-kicker" style={{ color: T.cta, fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>Central de Conteúdos</div>
            <h1 className="content-hub-title" style={{ color: CONTENT_T.navy, fontSize: 58, lineHeight: 1.03, letterSpacing: "-0.025em", maxWidth: 780, marginBottom: 22 }}>Guias para construir produtos financeiros melhores.</h1>
            <p className="content-hub-subtitle" style={{ color: CONTENT_T.mutedStrong, fontSize: 18, lineHeight: 1.65, maxWidth: 680 }}>Estratégia, tecnologia e operação para cartões, meios de pagamento, BaaS, benefícios, frotas e antifraude.</p>
          </div>
          <ContentSearch onResults={setQuery} />
        </div>
      </section>

      <section className="content-hub-body" style={{ padding: "72px 48px 96px", background: CONTENT_T.bg }}>
        <div className="content-hub-layout" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 1fr) 280px", gap: 44 }}>
          <main>
            {searching ? (
              <>
                <div style={{ marginBottom: 22 }}>
                  <p className="content-section-label" style={{ color: CONTENT_T.muted, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Busca ativa</p>
                  <h2 className="content-list-title" style={{ color: CONTENT_T.navy, fontSize: 34, marginBottom: 10 }}>Resultados para &quot;{query.trim()}&quot;</h2>
                  <p style={{ color: CONTENT_T.mutedStrong, fontSize: 15, lineHeight: 1.6 }}>
                    {searchResults.length ? `${searchResults.length} conteúdo(s) encontrado(s).` : "Nenhum conteúdo encontrado para essa busca."}
                  </p>
                </div>
                <div className="content-card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
                  {searchResults.map((article) => <ArticleCard key={article.slug} article={article} />)}
                </div>
              </>
            ) : (
              <>
                {FEATURED_ARTICLE && (
                  <div className="content-featured" style={{ marginBottom: 46 }}>
                    <p className="content-section-label" style={{ color: CONTENT_T.muted, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>Destaque</p>
                    <ArticleCard article={FEATURED_ARTICLE} featured />
                  </div>
                )}

                <h2 className="content-list-title" style={{ color: CONTENT_T.navy, fontSize: 34, marginBottom: 22 }}>Últimos conteúdos</h2>
                <div className="content-card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
                  {(latestArticles.length ? latestArticles : ARTICLES).map((article) => <ArticleCard key={article.slug} article={article} />)}
                </div>
              </>
            )}
          </main>

          <aside className="content-sidebar" style={{ display: "grid", gap: 28, alignContent: "start" }}>
            <div className="content-sidebar-card" style={{ padding: 22, borderRadius: 8, background: CONTENT_T.surfaceSoft, border: `1px solid ${CONTENT_T.border}` }}>
              <h3 style={{ color: CONTENT_T.navy, fontSize: 17, marginBottom: 14 }}>Categorias</h3>
              <div style={{ display: "grid", gap: 10 }}>
                {CATEGORIES_LIST.map((category) => (
                  <a key={category.slug} href={`/conteudos/categoria/${category.slug}`} style={{ color: CONTENT_T.mutedStrong, textDecoration: "none", fontSize: 14 }}>{category.name}</a>
                ))}
              </div>
            </div>

            <div className="content-sidebar-card" style={{ padding: 22, borderRadius: 8, background: CONTENT_T.surfaceSoft, border: `1px solid ${CONTENT_T.border}` }}>
              <h3 style={{ color: CONTENT_T.navy, fontSize: 17, marginBottom: 14 }}>Autores</h3>
              <div style={{ display: "grid", gap: 10 }}>
                {AUTHORS_LIST.map((author) => (
                  <a key={author.slug} href={`/autores/${author.slug}`} style={{ color: CONTENT_T.mutedStrong, textDecoration: "none", fontSize: 14 }}>{author.name}</a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
