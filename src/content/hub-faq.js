export const HUB_FAQ_SELECTION = [
  { articleSlug: "cartao-private-label", faqIndex: 0 },
  { articleSlug: "bin-sponsor-o-que-e", faqIndex: 0 },
  { articleSlug: "arranjo-aberto-vs-arranjo-fechado", faqIndex: 0 },
  { articleSlug: "quanto-custa-emitir-cartao", faqIndex: 0 },
  { articleSlug: "mdr-taxa-maquininha", faqIndex: 0 },
  { articleSlug: "intercambio-de-cartao", faqIndex: 0 },
  { articleSlug: "tef-pos-van-pos-proprio", faqIndex: 0 },
  { articleSlug: "risco-sistemico-bacen-arranjos", faqIndex: 0 },
  { articleSlug: "receita-de-float-emissao-cartoes", faqIndex: 0 },
  { articleSlug: "como-solicitar-bin-iin-abnt", faqIndex: 0 },
];

export const HUB_PILLAR_GROUPS = [
  {
    id: "emissao",
    name: "Emissão de cartões e modelos comerciais",
    description: "Como funcionam private label, white label, BIN Sponsor e cartão corporativo. Quanto custa, quando vale e como desenhar.",
    categorySlugs: ["cartoes", "meios-de-pagamento", "arranjo-fechado", "gestao-de-gastos-pj"],
  },
  {
    id: "regulacao",
    name: "Regulação BACEN e compliance",
    description: "Resoluções 150/2021 e 246, classificação de risco sistêmico, autorizações e obrigações de arranjos de pagamento.",
    categorySlugs: ["regulacao"],
  },
  {
    id: "tecnologia",
    name: "Tecnologia, protocolos e operação",
    description: "ISO 8583, ciclo de vida transacional, algoritmo LUHN, conciliação financeira, funds-in e meios de captura.",
    categorySlugs: ["tecnologia", "operacoes"],
  },
];

export function buildHubFaqEntries(articles) {
  const map = Object.fromEntries(articles.map((article) => [article.slug, article]));
  return HUB_FAQ_SELECTION
    .map(({ articleSlug, faqIndex }) => {
      const article = map[articleSlug];
      const faq = article?.faqs?.[faqIndex];
      if (!article || !faq) return null;
      return {
        question: faq.q,
        answer: faq.a,
        articleTitle: article.title,
        articleSlug: article.slug,
      };
    })
    .filter(Boolean);
}

export function groupArticlesByPillar(articles) {
  return HUB_PILLAR_GROUPS
    .map((group) => ({
      ...group,
      articles: articles.filter((article) => group.categorySlugs.includes(article.categorySlug)),
    }))
    .filter((group) => group.articles.length > 0);
}
