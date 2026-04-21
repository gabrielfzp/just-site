import { DEFAULT_IMAGE, SITE_DESCRIPTION, SITE_KNOWS_ABOUT, SITE_NAME, SITE_SAME_AS, SITE_URL } from "../site/seo.js";

export function buildArticleUrl(article) {
  return `${SITE_URL}/conteudos/${article.slug}`;
}

export function buildArticleSchema(article) {
  const url = buildArticleUrl(article);
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.description,
    image: `${SITE_URL}${article.ogImage}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: "pt-BR",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${url}#webpage` },
    author: { "@type": "Person", name: article.author.name, url: `${SITE_URL}/autores/${article.author.slug}` },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: DEFAULT_IMAGE },
    },
    articleSection: article.category?.name,
    keywords: article.tags?.join(", "),
    abstract: article.answer || article.description,
    isAccessibleForFree: true,
    citation: (article.sources || []).map((source) => source.url),
  };
}

export function buildBreadcrumbSchema(article) {
  const items = [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "Conteúdos", item: `${SITE_URL}/conteudos` },
  ];

  if (article.category) {
    items.push({
      name: article.category.name,
      item: `${SITE_URL}/conteudos/categoria/${article.category.slug}`,
    });
  }

  items.push({ name: article.title, item: buildArticleUrl(article) });

  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function buildFAQSchema(faqs = []) {
  if (!faqs.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function buildPersonSchema(author) {
  if (!author) return null;
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/autores/${author.slug}#person`,
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    image: author.avatar ? `${SITE_URL}${author.avatar}` : undefined,
    sameAs: author.linkedin ? [author.linkedin] : [],
  };
}

export function buildHowToSchema(howTo) {
  if (!howTo?.steps?.length) return null;
  return {
    "@type": "HowTo",
    name: howTo.name,
    description: howTo.description,
    step: howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function buildArticleJsonLd(article) {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: DEFAULT_IMAGE,
      description: SITE_DESCRIPTION,
      sameAs: SITE_SAME_AS,
      knowsAbout: SITE_KNOWS_ABOUT,
      areaServed: "BR",
    },
    {
      "@type": "WebPage",
      "@id": `${buildArticleUrl(article)}#webpage`,
      url: buildArticleUrl(article),
      name: article.title,
      description: article.description,
      inLanguage: "pt-BR",
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    buildArticleSchema(article),
    buildBreadcrumbSchema(article),
    buildPersonSchema(article.author),
    buildFAQSchema(article.faqs),
    buildHowToSchema(article.howTo),
  ].filter(Boolean);

  return { "@context": "https://schema.org", "@graph": graph };
}
