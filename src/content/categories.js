export const CATEGORIES = {
  cartoes: {
    slug: "cartoes",
    name: "Cartões",
    description: "Guias sobre emissão, arranjos, tarifas, BIN, bandeiras e economia de produtos de cartão.",
  },
  regulacao: {
    slug: "regulacao",
    name: "Regulação",
    description: "Conteúdos sobre BACEN, SPB, autorizações e regras que moldam operações de pagamento no Brasil.",
  },
  tecnologia: {
    slug: "tecnologia",
    name: "Tecnologia",
    description: "Artigos técnicos sobre protocolos, mensageria, validação e arquitetura de pagamentos.",
  },
  "arranjo-fechado": {
    slug: "arranjo-fechado",
    name: "Arranjo Fechado",
    description: "Materiais sobre operação, aceitação, TEF, POS próprio e desenho de programas fechados.",
  },
  operacoes: {
    slug: "operacoes",
    name: "Operações",
    description: "Guias sobre conciliação, recarga, tarifação e rotinas operacionais de programas de cartões.",
  },
  "meios-de-pagamento": {
    slug: "meios-de-pagamento",
    name: "Meios de pagamento",
    description: "Guias sobre cartões, arranjos, autorização, emissão, processamento e operação de pagamentos.",
  },
  "beneficios-flexiveis": {
    slug: "beneficios-flexiveis",
    name: "Benefícios flexíveis",
    description: "Conteúdos sobre programas de benefícios, saldos, regras de uso e cartões corporativos.",
  },
  frotas: {
    slug: "frotas",
    name: "Frotas",
    description: "Materiais sobre gestão financeira de frotas, abastecimento, pedágio e redes de aceitação.",
  },
  baas: {
    slug: "baas",
    name: "BaaS e banking",
    description: "Artigos sobre banking as a service, contas digitais, PIX, emissão e provedores regulados.",
  },
  antifraude: {
    slug: "antifraude",
    name: "Antifraude",
    description: "Conteúdos sobre risk score, autorização em tempo real e prevenção de fraude transacional.",
  },
  "gestao-de-gastos-pj": {
    slug: "gestao-de-gastos-pj",
    name: "Gestão de gastos PJ",
    description: "Guias sobre cartões corporativos, despesas empresariais, controle por política e reconciliação financeira.",
  },
};

export const CATEGORIES_LIST = Object.values(CATEGORIES);

export function getCategoryBySlug(slug) {
  return CATEGORIES[slug] || null;
}
