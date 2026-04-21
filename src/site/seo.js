export const SITE_URL = "https://wearejust.it";
export const SITE_BRAND_NAME = "JUST";
export const SITE_NAME = "JUST Fintechs";
export const SITE_DESCRIPTION = "Crie sua fintech com a JUST: plataformas white-label para cartões, banking, benefícios, frotas, despesas e crédito, prontas para operar em escala.";
export const DEFAULT_IMAGE = `${SITE_URL}/logo-just.png`;
export const SITE_SAME_AS = [
  "https://www.linkedin.com/company/wearejust-it",
];
export const SITE_KNOWS_ABOUT = [
  "produtos financeiros digitais",
  "cartões private label",
  "cartões white label",
  "banking as a service",
  "meios de pagamento",
  "gestão de despesas corporativas",
  "benefícios flexíveis",
  "antifraude transacional",
];

const env = import.meta.env || {};
const VERIFICATION_META = [
  { name: "google-site-verification", content: env.VITE_GOOGLE_SITE_VERIFICATION },
  { name: "msvalidate.01", content: env.VITE_BING_SITE_VERIFICATION },
].filter((item) => item.content);

export const PAGE_SEO = {
  home: {
    path: "/",
    title: {
      "pt-BR": "JUST Fintechs | Plataforma de Produtos Financeiros",
      en: "JUST Fintechs | Financial Product Platform",
    },
    description: {
      "pt-BR": SITE_DESCRIPTION,
      en: "Launch your fintech with JUST: white-label platforms for cards, banking, benefits, fleet, expenses and credit, ready to operate at scale.",
    },
  },
  sobre: {
    path: "/sobre",
    title: {
      "pt-BR": "Sobre a JUST | Produtos financeiros digitais",
      en: "About JUST | Digital financial products",
    },
    description: {
      "pt-BR": "Conheça a JUST, a empresa que transforma estratégia financeira em produtos digitais prontos para operar com segurança, escala e governança.",
      en: "Meet JUST, the company turning financial strategy into digital products ready to operate with security, scale and governance.",
    },
  },
  stack: {
    path: "/stack",
    title: {
      "pt-BR": "Tecnologia JUST | Stack para produtos financeiros",
      en: "JUST Technology | Stack for financial products",
    },
    description: {
      "pt-BR": "Arquitetura modular para produtos financeiros: integrações multi-provider, segurança, observabilidade, APIs e componentes prontos para escala.",
      en: "Modular architecture for financial products: multi-provider integrations, security, observability, APIs and scale-ready components.",
    },
  },
  cases: {
    path: "/cases",
    title: {
      "pt-BR": "Cases JUST | Produtos financeiros em operação",
      en: "JUST Cases | Financial products in operation",
    },
    description: {
      "pt-BR": "Veja cases de produtos financeiros construídos e operados pela JUST em benefícios, frotas, banking, despesas e soluções white-label.",
      en: "Explore financial products built and operated by JUST across benefits, fleet, banking, expenses and white-label solutions.",
    },
  },
  contato: {
    path: "/contato",
    title: {
      "pt-BR": "Contato | JUST",
      en: "Contact | JUST",
    },
    description: {
      "pt-BR": "Fale com a JUST para avaliar, desenhar e lançar seu produto financeiro digital white-label com tecnologia modular e operação especializada.",
      en: "Contact JUST to evaluate, design and launch your white-label digital financial product with modular technology and specialized operations.",
    },
  },
  privacidade: {
    path: "/privacidade",
    title: {
      "pt-BR": "Política de Privacidade | JUST",
      en: "Privacy Policy | JUST",
    },
    description: {
      "pt-BR": "Entenda como a JUST trata dados pessoais em seus canais digitais, comerciais e de relacionamento.",
      en: "Understand how JUST handles personal data across its digital, commercial and relationship channels.",
    },
  },
  sentinel: {
    path: "/sentinel",
    title: {
      "pt-BR": "JUST Sentinel | Antifraude em tempo real",
      en: "JUST Sentinel | Real-time fraud detection",
    },
    description: {
      "pt-BR": "Sentinel é a camada antifraude da JUST: risk scoring em tempo real para autorização de cartões, com modelos proprietários treinados em milhões de transações.",
      en: "Sentinel is JUST's anti-fraud layer: real-time risk scoring for card authorization, with proprietary models trained on millions of transactions.",
    },
    serviceType: "Fraud detection",
  },
  conteudos: {
    path: "/conteudos",
    title: "Conteúdos JUST | Guias sobre produtos financeiros digitais",
    description: "Guias, análises e materiais técnicos sobre cartões, meios de pagamento, BaaS, benefícios, frotas, antifraude e produtos financeiros white-label.",
  },
  beneficios: {
    path: "/beneficios",
    title: "JUST Benefits | Benefícios flexíveis white-label",
    description: "Plataforma white-label para benefícios flexíveis com múltiplos saldos, regras customizáveis, arranjos aberto, fechado ou híbrido e controle operacional.",
    serviceType: "Employee benefits financial platform",
  },
  frotas: {
    path: "/frotas",
    title: "JUST Fleet | Gestão financeira de frotas",
    description: "Produto financeiro para gestão de frotas com controle por veículo, abastecimento, pedágio, manutenção, regras em tempo real e conciliação.",
    serviceType: "Fleet financial management platform",
  },
  banking: {
    path: "/banking",
    title: "JUST Banking | Banking digital white-label",
    description: "Banking digital white-label para empresas com conta, cartão, PIX, transferências e funcionalidades bancárias integradas ao seu produto.",
    serviceType: "White-label banking platform",
  },
  despesas: {
    path: "/despesas",
    title: "JUST Expense | Despesas corporativas com controle",
    description: "Cartões corporativos e gestão de despesas com políticas, limites, conciliação, relatórios e controle financeiro em tempo real.",
    serviceType: "Corporate expense management platform",
  },
  antecipacao: {
    path: "/antecipacao",
    title: "JUST Credit | Crédito e antecipação white-label",
    description: "Produtos de crédito white-label, private label, antecipação e recebíveis integrados ao seu negócio com governança e compliance.",
    serviceType: "White-label credit platform",
  },
  "sob-demanda": {
    path: "/sob-demanda",
    title: "JUST Custom | Produtos financeiros sob demanda",
    description: "Projetos de produtos financeiros sob demanda, com arquitetura customizada, integrações multi-provider e operação preparada para escala.",
    serviceType: "Custom financial product development",
  },
};

export const SEO_ROUTE_KEYS = Object.keys(PAGE_SEO);

export function localized(value, lang) {
  if (!value || typeof value === "string") return value || "";
  return value[lang] || value["pt-BR"] || value.en || "";
}

function routeFor(page) {
  return PAGE_SEO[page] || PAGE_SEO.home;
}

function absoluteUrl(path) {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}

function upsertMeta(selector, attrs) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement("meta");
    document.head.appendChild(node);
  }
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
}

function upsertLink(selector, attrs) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement("link");
    document.head.appendChild(node);
  }
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
}

function removeNode(selector) {
  document.head.querySelector(selector)?.remove();
}

function applyVerificationMeta() {
  VERIFICATION_META.forEach((meta) => {
    upsertMeta(`meta[name='${meta.name}']`, { name: meta.name, content: meta.content });
  });
}

function upsertJsonLd(data) {
  let node = document.getElementById("just-jsonld");
  if (!node) {
    node = document.createElement("script");
    node.id = "just-jsonld";
    node.type = "application/ld+json";
    document.head.appendChild(node);
  }
  node.textContent = JSON.stringify(data);
}

function buildJsonLd({ title, description, canonical, path, route }) {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const graph = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: SITE_BRAND_NAME,
      url: SITE_URL,
      logo: DEFAULT_IMAGE,
      description: SITE_DESCRIPTION,
      sameAs: SITE_SAME_AS,
      knowsAbout: SITE_KNOWS_ABOUT,
      areaServed: "BR",
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: SITE_NAME,
      alternateName: [SITE_BRAND_NAME, "wearejust.it"],
      url: SITE_URL,
      publisher: { "@id": organizationId },
      inLanguage: "pt-BR",
    },
    {
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: title,
      description,
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      inLanguage: "pt-BR",
    },
  ];

  if (route.serviceType) {
    graph.push({
      "@type": "Service",
      "@id": `${canonical}#service`,
      name: title.replace(" | JUST", "").replace("JUST | ", ""),
      serviceType: route.serviceType,
      description,
      provider: { "@id": organizationId },
      areaServed: "BR",
      url: canonical,
    });
  }

  if (path === "/") {
    graph.push({
      "@type": "ItemList",
      "@id": `${SITE_URL}/#services`,
      name: "Produtos financeiros JUST",
      itemListElement: SEO_ROUTE_KEYS
        .filter((key) => PAGE_SEO[key].serviceType)
        .map((key, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(PAGE_SEO[key].path),
          name: localized(PAGE_SEO[key].title, "pt-BR"),
        })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function getSeo(page, lang) {
  const route = routeFor(page);
  const isKnownRoute = Boolean(PAGE_SEO[page]);
  const path = isKnownRoute ? route.path : "/";
  const canonical = absoluteUrl(path);
  const title = localized(route.title, lang);
  const description = localized(route.description, lang);

  return {
    title,
    description,
    canonical,
    path,
    robots: isKnownRoute ? "index, follow" : "noindex, follow",
    image: DEFAULT_IMAGE,
    route,
    jsonLd: buildJsonLd({ title, description, canonical, path, route }),
  };
}

export function applySeo(seo, lang) {
  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  document.title = seo.title;

  upsertMeta("meta[name='description']", { name: "description", content: seo.description });
  upsertMeta("meta[name='robots']", { name: "robots", content: seo.robots });
  upsertMeta("meta[property='og:site_name']", { property: "og:site_name", content: SITE_NAME });
  upsertMeta("meta[property='og:type']", { property: "og:type", content: seo.type || "website" });
  upsertMeta("meta[property='og:locale']", { property: "og:locale", content: lang === "en" ? "en_US" : "pt_BR" });
  upsertMeta("meta[property='og:title']", { property: "og:title", content: seo.title });
  upsertMeta("meta[property='og:description']", { property: "og:description", content: seo.description });
  upsertMeta("meta[property='og:url']", { property: "og:url", content: seo.canonical });
  upsertMeta("meta[property='og:image']", { property: "og:image", content: seo.image });
  upsertMeta("meta[property='og:image:width']", { property: "og:image:width", content: "812" });
  upsertMeta("meta[property='og:image:height']", { property: "og:image:height", content: "499" });
  upsertMeta("meta[property='og:image:alt']", { property: "og:image:alt", content: "Logo da JUST" });
  upsertMeta("meta[name='twitter:card']", { name: "twitter:card", content: "summary_large_image" });
  upsertMeta("meta[name='twitter:title']", { name: "twitter:title", content: seo.title });
  upsertMeta("meta[name='twitter:description']", { name: "twitter:description", content: seo.description });
  upsertMeta("meta[name='twitter:image']", { name: "twitter:image", content: seo.image });
  applyVerificationMeta();
  if (seo.article) {
    upsertMeta("meta[property='article:published_time']", { property: "article:published_time", content: seo.article.publishedAt });
    upsertMeta("meta[property='article:modified_time']", { property: "article:modified_time", content: seo.article.updatedAt });
    upsertMeta("meta[property='article:author']", { property: "article:author", content: seo.article.author?.name || "" });
    upsertMeta("meta[property='article:section']", { property: "article:section", content: seo.article.category?.name || "" });
    document.head.querySelectorAll("meta[property='article:tag']").forEach((node) => node.remove());
    (seo.article.tags || []).forEach((tag) => {
      const node = document.createElement("meta");
      node.setAttribute("property", "article:tag");
      node.setAttribute("content", tag);
      document.head.appendChild(node);
    });
  }
  upsertLink("link[rel='canonical']", { rel: "canonical", href: seo.canonical });
  if (seo.markdown) {
    upsertLink("link[rel='alternate'][type='text/markdown']", { rel: "alternate", type: "text/markdown", href: seo.markdown });
  } else {
    removeNode("link[rel='alternate'][type='text/markdown']");
  }
  upsertLink("link[rel='alternate'][hreflang='pt-BR']", { rel: "alternate", hreflang: "pt-BR", href: seo.canonical });
  upsertLink("link[rel='alternate'][hreflang='x-default']", { rel: "alternate", hreflang: "x-default", href: seo.canonical });
  upsertJsonLd(seo.jsonLd);
}
