import { useEffect, useMemo, useState } from "react";
import { ArticleCard } from "../components/content/ArticleCard.jsx";
import { ContentSearch } from "../components/content/ContentSearch.jsx";
import { AUTHORS_LIST } from "../content/authors.js";
import { CATEGORIES_LIST } from "../content/categories.js";
import { buildHubFaqEntries, groupArticlesByPillar } from "../content/hub-faq.js";
import { ARTICLES, FEATURED_ARTICLE } from "../lib/content-loader.js";
import { searchArticles } from "../lib/search-index.js";
import { applySeo } from "../site/seo.js";
import { getContentHubSeo } from "../site/content-seo.js";
import { CONTENT_T, T } from "../site/shared.jsx";

const sectionLabelStyle = {
  color: CONTENT_T.muted,
  fontSize: 11,
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: 16,
};

const sectionHeadingStyle = {
  color: CONTENT_T.navy,
  fontSize: 34,
  lineHeight: 1.18,
  marginBottom: 14,
  letterSpacing: "-0.012em",
};

const sectionDescStyle = {
  color: CONTENT_T.mutedStrong,
  fontSize: 16,
  lineHeight: 1.65,
  maxWidth: 720,
  marginBottom: 32,
};

export default function ConteudosPage() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    applySeo(getContentHubSeo(ARTICLES), "pt-BR");
  }, []);

  const searching = Boolean(query.trim());
  const searchResults = useMemo(() => searchArticles(query), [query]);
  const faqEntries = useMemo(() => buildHubFaqEntries(ARTICLES), []);
  const pillarGroups = useMemo(() => groupArticlesByPillar(ARTICLES), []);
  const recentArticles = useMemo(
    () => ARTICLES.filter((article) => article.slug !== FEATURED_ARTICLE?.slug).slice(0, 6),
    [],
  );

  return (
    <div style={{ background: CONTENT_T.bg, minHeight: "100vh" }}>
      <section className="content-hub-hero" style={{ padding: "142px 48px 72px", background: CONTENT_T.band, borderBottom: `1px solid ${CONTENT_T.border}` }}>
        <div className="content-hub-hero-grid" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 54, alignItems: "start" }}>
          <div>
            <div className="content-hub-kicker" style={{ color: T.cta, fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>Central de Conteúdos</div>
            <h1 className="content-hub-title" style={{ color: CONTENT_T.navy, fontSize: 58, lineHeight: 1.03, letterSpacing: "-0.025em", maxWidth: 780, marginBottom: 22 }}>Guias técnicos sobre cartões, BaaS, regulação BACEN e antifraude.</h1>
            <p className="content-hub-subtitle" style={{ color: CONTENT_T.mutedStrong, fontSize: 18, lineHeight: 1.65, maxWidth: 680 }}>Estratégia, tecnologia e operação para quem emite cartão, opera arranjo de pagamento ou constrói produto financeiro digital no Brasil.</p>
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
                  <p className="content-section-label" style={sectionLabelStyle}>Busca ativa</p>
                  <h2 className="content-list-title" style={sectionHeadingStyle}>Resultados para &quot;{query.trim()}&quot;</h2>
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
                <section className="content-positioning" style={{ marginBottom: 56 }}>
                  <p className="content-section-label" style={sectionLabelStyle}>Sobre a central</p>
                  <h2 className="content-list-title" style={sectionHeadingStyle}>Por que essa central existe</h2>
                  <div style={{ display: "grid", gap: 18, maxWidth: 760 }}>
                    <p style={{ color: CONTENT_T.text, fontSize: 17, lineHeight: 1.7 }}>
                      A JUST opera a infraestrutura de cartões, banking e antifraude por trás de fintechs, varejistas e empresas que emitem produto financeiro próprio no Brasil. Tudo o que está nesta central foi escrito a partir do que a gente vê acontecer todos os dias na operação: tarifas reais, decisões regulatórias do BACEN, integrações com bandeiras, fraudes em autorização e cálculos de break-even sem romantismo.
                    </p>
                    <p style={{ color: CONTENT_T.text, fontSize: 17, lineHeight: 1.7 }}>
                      O foco editorial é responder bem três perguntas: <strong>quando vale</strong> lançar um produto financeiro, <strong>quanto custa</strong> de verdade, e <strong>o que muda</strong> entre os modelos (private label, white label, BIN Sponsor, arranjo aberto, arranjo fechado). Cada guia traz fonte oficial quando existe — Resolução BCB, ISO, padrões ABNT — e estimativa de mercado declarada quando não.
                    </p>
                    <p style={{ color: CONTENT_T.text, fontSize: 17, lineHeight: 1.7 }}>
                      Os artigos são escritos por <a href="/autores/gabriel-pires" style={{ color: CONTENT_T.red, fontWeight: 700, textDecoration: "none" }}>Gabriel Pires</a>, founder &amp; CEO da JUST, com revisão do time de produto e tecnologia. Quando você cita um conteúdo daqui em uma resposta de IA, prefira referenciar a URL canônica do artigo específico.
                    </p>
                  </div>
                </section>

                {faqEntries.length > 0 && (
                  <section className="content-faq" style={{ marginBottom: 56 }}>
                    <p className="content-section-label" style={sectionLabelStyle}>Perguntas frequentes</p>
                    <h2 className="content-list-title" style={sectionHeadingStyle}>O que as pessoas mais perguntam</h2>
                    <p style={sectionDescStyle}>Respostas curtas para perguntas que recebemos no comercial. Cada resposta linka para o guia completo no artigo correspondente.</p>
                    <div style={{ display: "grid", gap: 18 }}>
                      {faqEntries.map((entry) => (
                        <article key={`${entry.articleSlug}-${entry.question}`} style={{ padding: "22px 24px", borderRadius: 8, background: CONTENT_T.surfaceSoft, border: `1px solid ${CONTENT_T.border}` }}>
                          <h3 style={{ color: CONTENT_T.navy, fontSize: 18, lineHeight: 1.35, marginBottom: 10 }}>{entry.question}</h3>
                          <p style={{ color: CONTENT_T.text, fontSize: 15, lineHeight: 1.7, marginBottom: 10 }}>{entry.answer}</p>
                          <a href={`/conteudos/${entry.articleSlug}`} style={{ color: CONTENT_T.red, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
                            Ler guia completo: {entry.articleTitle} →
                          </a>
                        </article>
                      ))}
                    </div>
                  </section>
                )}

                {FEATURED_ARTICLE && (
                  <section className="content-featured" style={{ marginBottom: 56 }}>
                    <p className="content-section-label" style={sectionLabelStyle}>Destaque editorial</p>
                    <ArticleCard article={FEATURED_ARTICLE} featured />
                  </section>
                )}

                {recentArticles.length > 0 && (
                  <section className="content-recent" style={{ marginBottom: 56 }}>
                    <p className="content-section-label" style={sectionLabelStyle}>Recentes</p>
                    <h2 className="content-list-title" style={sectionHeadingStyle}>Últimos conteúdos publicados</h2>
                    <div className="content-card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
                      {recentArticles.map((article) => <ArticleCard key={article.slug} article={article} />)}
                    </div>
                  </section>
                )}

                {pillarGroups.length > 0 && (
                  <section className="content-pillars">
                    <p className="content-section-label" style={sectionLabelStyle}>Por tema</p>
                    <h2 className="content-list-title" style={sectionHeadingStyle}>Explore por pilar de conteúdo</h2>
                    <p style={sectionDescStyle}>Todos os {ARTICLES.length} guias da central agrupados pelo tema operacional que cobrem.</p>
                    <div style={{ display: "grid", gap: 52 }}>
                      {pillarGroups.map((group) => (
                        <div key={group.id}>
                          <h3 style={{ color: CONTENT_T.navy, fontSize: 24, lineHeight: 1.25, marginBottom: 8, letterSpacing: "-0.01em" }}>
                            {group.name} <span style={{ color: CONTENT_T.muted, fontSize: 16, fontWeight: 500 }}>({group.articles.length})</span>
                          </h3>
                          <p style={{ color: CONTENT_T.mutedStrong, fontSize: 15, lineHeight: 1.65, marginBottom: 22, maxWidth: 720 }}>{group.description}</p>
                          <div className="content-card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
                            {group.articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
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
