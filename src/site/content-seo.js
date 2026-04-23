import { canonicalUrl, DEFAULT_IMAGE, SITE_URL } from "./seo.js";
import { buildArticleJsonLd, buildArticleUrl } from "../lib/schema-builder.js";

export function getContentHubSeo() {
  return {
    title: "Conteúdos JUST | Guias sobre produtos financeiros digitais",
    description: "Guias, análises e materiais técnicos sobre cartões, meios de pagamento, BaaS, benefícios, frotas, antifraude e produtos financeiros digitais.",
    canonical: canonicalUrl("/conteudos"),
    path: "/conteudos",
    robots: "index, follow",
    image: DEFAULT_IMAGE,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": `${canonicalUrl("/conteudos")}#webpage`,
          url: canonicalUrl("/conteudos"),
          name: "Conteúdos JUST",
          description: "Central de Conteúdos SEO da JUST.",
          inLanguage: "pt-BR",
        },
      ],
    },
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
