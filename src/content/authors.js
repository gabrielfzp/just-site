export const AUTHORS = {
  "equipe-just": {
    slug: "equipe-just",
    name: "Equipe JUST",
    role: "Equipe editorial e técnica da JUST",
    bio: "Conteúdos produzidos pela equipe da JUST com foco em cartões, regulação, arquitetura de pagamentos e operação de produtos financeiros digitais.",
    linkedin: "https://www.linkedin.com/company/wearejust-it",
  },
  "gabriel-pires": {
    slug: "gabriel-pires",
    name: "Gabriel Pires",
    role: "Founder & CEO da JUST",
    bio: "Especialista em produtos financeiros digitais, meios de pagamento e plataformas financeiras modulares.",
    linkedin: "https://www.linkedin.com/in/gabrielfzp/",
    avatar: "/authors/gabriel-pires.jpeg",
    avatarPosition: "40% 25%",
    avatarScale: 2.05,
  },
  "time-just": {
    slug: "time-just",
    name: "Time JUST",
    role: "Equipe de produto e tecnologia",
    bio: "Especialistas da JUST em arquitetura, operação e evolução de produtos financeiros digitais.",
    linkedin: "https://www.linkedin.com/company/wearejust-it",
  },
};

export const AUTHORS_LIST = Object.values(AUTHORS);

export function getAuthorBySlug(slug) {
  return AUTHORS[slug] || null;
}
