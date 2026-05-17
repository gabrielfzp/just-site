import { canonicalUrl, DEFAULT_IMAGE, SITE_URL } from "./seo.js";
import { buildArticleJsonLd, buildArticleUrl } from "../lib/schema-builder.js";
import { buildHubFaqEntries } from "../content/hub-faq.js";

const HUB_DESCRIPTION = "Guias técnicos e operacionais sobre produtos financeiros digitais, emissão de cartões, BaaS, regulação BACEN e antifraude. Conteúdo escrito por quem opera a infraestrutura de pagamentos da JUST.";

export function buildContentHubJsonLd(articles = []) {
  const url = canonicalUrl("/conteudos");
  const organizationId = `${SITE_URL}/#organization`;

  const blogPost = articles.map((article) => ({
    "@type": "BlogPosting",
    "@id": `${buildArticleUrl(article)}#article`,
    headline: article.title,
    description: article.description,
    url: buildArticleUrl(article),
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: { "@type": "Person", name: article.author?.name || "JUST" },
    articleSection: article.category?.name,
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${url}#blog` },
  }));

  const graph = [
    {
      "@type": "Blog",
      "@id": `${url}#blog`,
      url,
      name: "Conteúdos JUST",
      description: HUB_DESCRIPTION,
      inLanguage: "pt-BR",
      publisher: { "@id": organizationId },
      blogPost,
    },
  ];

  const faqEntries = buildHubFaqEntries(articles);
  if (faqEntries.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqEntries.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function getContentHubSeo(articles = []) {
  return {
    title: "Conteúdos JUST | Guias sobre produtos financeiros digitais",
    description: "Guias, análises e materiais técnicos sobre cartões, meios de pagamento, BaaS, benefícios, frotas, antifraude e produtos financeiros digitais.",
    canonical: canonicalUrl("/conteudos"),
    path: "/conteudos",
    robots: "index, follow",
    image: DEFAULT_IMAGE,
    jsonLd: buildContentHubJsonLd(articles),
  };
}

export function getArticleSeo(article) {
  const title = article.seoTitle || article.title;
  return {
    title,
    description: article.description,
    canonical: buildArticleUrl(article),
    path: `/conteudos/${article.slug}`,
    robots: "index, follow",
    image: `${SITE_URL}${article.ogImage}`,
    markdown: `${SITE_URL}/conteudos/${article.slug}.md`,
    type: "article",
    article,
    jsonLd: buildArticleJsonLd(article),
  };
}

export function getCategorySeo(category) {
  return {
    title: `${category.name} | Conteúdos JUST`,
    description: category.description,
    canonical: canonicalUrl(`/conteudos/categoria/${category.slug}`),
    path: `/conteudos/categoria/${category.slug}`,
    robots: "index, follow",
    image: DEFAULT_IMAGE,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": `${canonicalUrl(`/conteudos/categoria/${category.slug}`)}#webpage`,
          url: canonicalUrl(`/conteudos/categoria/${category.slug}`),
          name: category.name,
          description: category.description,
          inLanguage: "pt-BR",
        },
      ],
    },
  };
}

export function getAuthorSeo(author) {
  return {
    title: `${author.name} | Autor JUST`,
    description: author.bio,
    canonical: canonicalUrl(`/autores/${author.slug}`),
    path: `/autores/${author.slug}`,
    robots: "index, follow",
    image: DEFAULT_IMAGE,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfilePage",
          "@id": `${canonicalUrl(`/autores/${author.slug}`)}#webpage`,
          url: canonicalUrl(`/autores/${author.slug}`),
          name: author.name,
          description: author.bio,
          inLanguage: "pt-BR",
        },
        {
          "@type": "Person",
          "@id": `${canonicalUrl(`/autores/${author.slug}`)}#person`,
          name: author.name,
          jobTitle: author.role,
          description: author.bio,
        },
      ],
    },
  };
}
