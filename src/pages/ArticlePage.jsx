import { useEffect } from "react";
import { ArticleFooter } from "../components/content/ArticleFooter.jsx";
import { ArticleHeader } from "../components/content/ArticleHeader.jsx";
import { ArticleTOC } from "../components/content/ArticleTOC.jsx";
import { FAQBlock } from "../components/content/FAQBlock.jsx";
import { InlineCTA } from "../components/content/InlineCTA.jsx";
import { RelatedArticles } from "../components/content/RelatedArticles.jsx";
import { getArticleBySlug, getRelatedArticles } from "../lib/content-loader.js";
import { applySeo } from "../site/seo.js";
import { getArticleSeo } from "../site/content-seo.js";
import { CONTENT_T, T } from "../site/shared.jsx";
import { trackEvent } from "../lib/analytics.js";

const mdxComponents = {
  InlineCTA,
  FAQBlock,
};

export default function ArticlePage({ slug }) {
  const article = getArticleBySlug(slug);
  const related = getRelatedArticles(article);

  useEffect(() => {
    if (article) applySeo(getArticleSeo(article), "pt-BR");
  }, [article]);

  useEffect(() => {
    if (!article) return undefined;
    const trackedMilestones = new Set();

    trackEvent("article_view", {
      slug: article.slug,
      cluster: article.cluster,
      category: article.categorySlug,
      type: article.type,
    });

    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (documentHeight <= 0) return;
      const progress = Math.min(100, Math.round((window.scrollY / documentHeight) * 100));
      [25, 50, 75, 100].forEach((milestone) => {
        if (progress >= milestone && !trackedMilestones.has(milestone)) {
          trackedMilestones.add(milestone);
          trackEvent("article_read_progress", {
            slug: article.slug,
            cluster: article.cluster,
            category: article.categorySlug,
            milestone,
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [article]);

  if (!article) {
    return (
      <section style={{ minHeight: "70vh", padding: "150px 48px", background: CONTENT_T.bg }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h1 style={{ color: CONTENT_T.navy, fontSize: 44, marginBottom: 16 }}>Conteúdo não encontrado</h1>
          <p style={{ color: CONTENT_T.muted, marginBottom: 24 }}>O artigo que você tentou acessar não existe ou ainda não foi publicado.</p>
          <a href="/conteudos" style={{ color: T.cta, fontWeight: 700 }}>Voltar para conteúdos</a>
        </div>
      </section>
    );
  }

  const ArticleComponent = article.Component;

  return (
    <div style={{ background: CONTENT_T.bg, minHeight: "100vh" }}>
      <ArticleHeader article={article} />
      <section style={{ padding: "72px 48px 104px", background: CONTENT_T.bg }}>
        <div className="article-layout" style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "260px minmax(0, 1fr)", gap: 54, alignItems: "start" }}>
          <ArticleTOC items={article.toc} />
          <main>
            {article.answer && (
              <section
                className="answer-box"
                aria-labelledby="resposta-curta"
                style={{
                  border: `1px solid ${CONTENT_T.border}`,
                  borderLeft: `4px solid ${CONTENT_T.red}`,
                  borderRadius: 8,
                  padding: "24px 26px",
                  marginBottom: 34,
                  background: "#ffffff",
                  boxShadow: "0 14px 34px rgba(16,36,63,0.06)",
                }}
              >
                <h2 id="resposta-curta" style={{ color: CONTENT_T.navy, fontSize: 22, lineHeight: 1.25, marginBottom: 10 }}>Resposta curta</h2>
                <p style={{ color: CONTENT_T.text, fontSize: 17, lineHeight: 1.7, margin: 0 }}>{article.answer}</p>
              </section>
            )}
            <article className="content-article" style={{ color: CONTENT_T.text }}>
              <ArticleComponent components={mdxComponents} />
            </article>
            {!!article.sources?.length && (
              <section
                className="source-box"
                aria-labelledby="fontes-referencia"
                style={{
                  borderTop: `1px solid ${CONTENT_T.border}`,
                  marginTop: 42,
                  paddingTop: 26,
                }}
              >
                <h2 id="fontes-referencia" style={{ color: CONTENT_T.navy, fontSize: 22, lineHeight: 1.25, marginBottom: 14 }}>Fontes de referência</h2>
                <ul style={{ display: "grid", gap: 10, paddingLeft: 18 }}>
                  {article.sources.map((source) => (
                    <li key={source.url} style={{ color: CONTENT_T.text, lineHeight: 1.6 }}>
                      <a href={source.url} target="_blank" rel="noopener noreferrer" style={{ color: CONTENT_T.red, fontWeight: 700, textUnderlineOffset: 3 }}>
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            <ArticleFooter article={article} />
            <RelatedArticles articles={related} />
          </main>
        </div>
      </section>
    </div>
  );
}
