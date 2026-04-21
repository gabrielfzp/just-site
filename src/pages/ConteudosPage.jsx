import { useEffect, useState } from "react";
import { ArticleCard } from "../components/content/ArticleCard.jsx";
import { ContentSearch } from "../components/content/ContentSearch.jsx";
import { AUTHORS_LIST } from "../content/authors.js";
import { CATEGORIES_LIST } from "../content/categories.js";
import { ARTICLES, FEATURED_ARTICLE } from "../lib/content-loader.js";
import { applySeo } from "../site/seo.js";
import { getContentHubSeo } from "../site/content-seo.js";
import { CONTENT_T, T } from "../site/shared.jsx";

export default function ConteudosPage() {
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    applySeo(getContentHubSeo(), "pt-BR");
  }, []);

  const latestArticles = ARTICLES.filter((article) => article.slug !== FEATURED_ARTICLE?.slug);

  return (
    <div style={{ background: CONTENT_T.bg, minHeight: "100vh" }}>
      <section style={{ padding: "142px 48px 72px", background: CONTENT_T.band, borderBottom: `1px solid ${CONTENT_T.border}` }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 54, alignItems: "end" }}>
          <div>
            <div style={{ color: T.cta, fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>Central de Conteúdos</div>
            <h1 style={{ color: CONTENT_T.navy, fontSize: 58, lineHeight: 1.03, letterSpacing: "-0.025em", maxWidth: 780, marginBottom: 22 }}>Guias para construir produtos financeiros melhores.</h1>
            <p style={{ color: CONTENT_T.mutedStrong, fontSize: 18, lineHeight: 1.65, maxWidth: 680 }}>Estratégia, tecnologia e operação para cartões, meios de pagamento, BaaS, benefícios, frotas e antifraude.</p>
          </div>
          <ContentSearch onResults={(_, query) => setSearching(Boolean(query.trim()))} />
        </div>
      </section>

      <section style={{ padding: "72px 48px 96px", background: CONTENT_T.bg }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 1fr) 280px", gap: 44 }}>
          <main>
            {!searching && FEATURED_ARTICLE && (
              <div style={{ marginBottom: 46 }}>
                <p style={{ color: CONTENT_T.muted, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>Destaque</p>
                <ArticleCard article={FEATURED_ARTICLE} featured />
              </div>
            )}

            {!searching && (
              <>
                <h2 style={{ color: CONTENT_T.navy, fontSize: 34, marginBottom: 22 }}>Últimos conteúdos</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
                  {(latestArticles.length ? latestArticles : ARTICLES).map((article) => <ArticleCard key={article.slug} article={article} />)}
                </div>
              </>
            )}
          </main>

          <aside style={{ display: "grid", gap: 28, alignContent: "start" }}>
            <div style={{ padding: 22, borderRadius: 8, background: CONTENT_T.surfaceSoft, border: `1px solid ${CONTENT_T.border}` }}>
              <h3 style={{ color: CONTENT_T.navy, fontSize: 17, marginBottom: 14 }}>Categorias</h3>
              <div style={{ display: "grid", gap: 10 }}>
                {CATEGORIES_LIST.map((category) => (
                  <a key={category.slug} href={`/conteudos/categoria/${category.slug}`} style={{ color: CONTENT_T.mutedStrong, textDecoration: "none", fontSize: 14 }}>{category.name}</a>
                ))}
              </div>
            </div>

            <div style={{ padding: 22, borderRadius: 8, background: CONTENT_T.surfaceSoft, border: `1px solid ${CONTENT_T.border}` }}>
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
