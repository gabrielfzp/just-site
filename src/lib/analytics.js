import { justPageView, justTrack, consentimento, consentimentoAds } from "./just-id.js";

const env = import.meta.env || {};

const GA4_ID = env.VITE_GA4_ID || "";
/** Vazio = sem Meta Pixel. */
const META_PIXEL_ID = env.VITE_META_PIXEL_ID || "";
/**
 * Tag do Google Ads (AW-XXXXXXXXX), separada da do GA4.
 *
 * Dá para fazer remarketing só com o vínculo GA4 ↔ Ads, mas a tag própria é
 * o que permite público por página específica e conversão medida no Ads, sem
 * depender de o vínculo estar configurado do outro lado.
 */
const GOOGLE_ADS_ID = env.VITE_GOOGLE_ADS_ID || "";
/**
 * LinkedIn Insight Tag.
 *
 * Para B2B é a plataforma que segmenta por cargo, setor e porte da empresa,
 * ou seja, pelo ICP e não por interesse declarado. Vazio mantém tudo
 * desligado, igual ao pixel da Meta.
 */
const LINKEDIN_PARTNER_ID = env.VITE_LINKEDIN_PARTNER_ID || "";

/**
 * Nossos eventos traduzidos para o vocabulário padrão da Meta.
 *
 * Sem isso o pixel só veria PageView, e público de remarketing viraria "quem
 * entrou no site", sem distinguir quem olhou produto de quem pediu contato.
 * Evento padrão também é o que a Meta usa para otimizar entrega.
 */
/**
 * Conversões do LinkedIn: nosso evento -> id numérico da conversão no
 * Campaign Manager. Preenchido pelas variáveis VITE_LI_CONV_*; sem elas o
 * evento simplesmente não é enviado, em vez de disparar com id inválido.
 */
const LINKEDIN_CONVERSOES = Object.fromEntries(
  [
    ["contact_form_submit", env.VITE_LI_CONV_LEAD],
    ["whatsapp_click", env.VITE_LI_CONV_CONTATO],
  ].filter(([, id]) => id),
);

const META_EVENTOS = {
  whatsapp_click: "Contact",
  contact_form_submit: "Lead",
  contact_cta_click: "InitiateCheckout",
  contact_page_view: "ViewContent",
  article_view: "ViewContent",
};

const LLM_REFERRERS = [
  "chatgpt.com",
  "chat.openai.com",
  "perplexity.ai",
  "claude.ai",
  "gemini.google.com",
  "copilot.microsoft.com",
  "you.com",
  "phind.com",
];

let analyticsReady = false;
let llmReferralTracked = false;
/** o init do pixel já mandou o PageView desta página; o próximo é do router */
let pixelContouAPagina = false;

/**
 * Identificador do evento, compartilhado entre navegador e servidor.
 *
 * É ele que permite ligar a Conversions API sem dobrar a contagem: a Meta
 * recebe o mesmo evento duas vezes, vê o mesmo id e descarta a segunda. Sem
 * isso, cada conversão contaria em dobro e o algoritmo passaria a otimizar
 * para um número que não existe.
 */
function novoEventId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

function canUseBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function isLocalhost() {
  if (!canUseBrowser()) return false;
  const { hostname } = window.location;
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname.endsWith(".localhost");
}

function appendScript(id, attrs) {
  if (!canUseBrowser() || document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  Object.entries(attrs).forEach(([key, value]) => {
    if (value === true) script.setAttribute(key, "");
    else if (value) script.setAttribute(key, value);
  });
  document.head.appendChild(script);
}

function normalizePath(path) {
  if (path) return path;
  if (!canUseBrowser()) return "/";
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

function cleanProps(props = {}) {
  return Object.fromEntries(
    Object.entries(props).filter(([, value]) => value !== undefined && value !== null && value !== ""),
  );
}

export function initAnalytics() {
  if (!canUseBrowser() || analyticsReady) return;
  analyticsReady = true;

  if (isLocalhost()) {
    console.info("[analytics] desativado em localhost");
    return;
  }

  if (GA4_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtagFallback() {
      window.dataLayer.push(arguments);
    };

    // Consent Mode v2 ANTES de qualquer config: o default precisa estar na
    // dataLayer quando a tag carrega, senão o GA4 já gravou cookie antes de
    // saber a resposta e o banner vira enfeite. Negado por padrão; com
    // analytics_storage negado o GA4 ainda manda ping sem cookie, o que
    // mantém a contagem agregada sem criar identificador.
    const concedido = consentimento() === "concedido";
    window.gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
      functionality_storage: "denied",
      personalization_storage: "denied",
      security_storage: "granted",
      wait_for_update: 500,
    });
    if (concedido) aplicarConsentimentoGA4("concedido", consentimentoAds() === "concedido");

    window.gtag("js", new Date());
    window.gtag("config", GA4_ID, { send_page_view: false });
    // tag do Ads no mesmo gtag: uma carga de script, dois destinos
    if (GOOGLE_ADS_ID) window.gtag("config", GOOGLE_ADS_ID);
    appendScript("ga4-script", {
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`,
    });
  }

  // visitante que já aceitou numa visita anterior: o pixel sobe junto
  initMetaPixel();
  initLinkedIn();
}

/**
 * Propaga a escolha do visitante para o GA4.
 *
 * Medição e publicidade viajam separadas porque são escolhas separadas no
 * banner: aceitar ser reconhecido não é aceitar ser perseguido por anúncio.
 * Mandar tudo junto faria as chaves da segunda camada virarem enfeite.
 */
export function aplicarConsentimentoGA4(valor, ads = valor === "concedido") {
  if (!canUseBrowser() || typeof window.gtag !== "function") return;
  const medicao = valor === "concedido" ? "granted" : "denied";
  const publicidade = valor === "concedido" && ads ? "granted" : "denied";
  window.gtag("consent", "update", {
    ad_storage: publicidade,
    ad_user_data: publicidade,
    ad_personalization: publicidade,
    analytics_storage: medicao,
    functionality_storage: medicao,
    personalization_storage: medicao,
  });
}

/**
 * Um evento, dois destinos.
 *
 * O GA4 responde "quantos"; o Radar responde "quem". Emitir nos dois a partir
 * da MESMA chamada é o que impede as duas medições de divergirem — foi assim
 * que o site passou 30 dias mandando evento pro GA4 sem nenhum page_view.
 */
export function trackEvent(name, props = {}) {
  if (!canUseBrowser()) return;
  const limpos = cleanProps(props);
  if (typeof window.gtag === "function") {
    window.gtag("event", name, limpos);
  }
  // Meta só recebe o que tem tradução: mandar nome interno como evento
  // customizado polui o Events Manager e não otimiza nada
  // LinkedIn: só os eventos que viram conversão lá. O id numérico vem da
  // aba Conversões do Campaign Manager e é diferente por conversão, então
  // ele mora em env em vez de constante: muda sem tocar no código.
  const conversaoLi = LINKEDIN_CONVERSOES[name];
  if (conversaoLi && typeof window.lintrk === "function") {
    window.lintrk("track", { conversion_id: conversaoLi });
  }

  const padrao = META_EVENTOS[name];
  if (padrao && typeof window.fbq === "function") {
    const eventID = novoEventId();
    window.fbq("track", padrao, limpos, { eventID });
    // o MESMO id vai ao nosso coletor, que repete o evento pelo servidor
    justTrack(name, limpos, { evento: padrao, id: eventID });
    return;
  }

  justTrack(name, limpos);
}

/**
 * Produtos do site. Página de produto vira ViewContent com o nome do produto,
 * que é o que permite público "olhou Banking" em vez de só "olhou o site" —
 * a diferença entre remarketing útil e remarketing genérico.
 */
const PRODUTOS = ["banking", "beneficios", "frotas", "despesas", "antecipacao", "sob-demanda"];

export function trackPageView(path, title) {
  if (!canUseBrowser()) return;

  // o Radar recebe a página independente do GA4: são dois sistemas, e um
  // fora do ar não pode cegar o outro
  justPageView(title);

  if (typeof window.fbq === "function") {
    const rota = window.location.pathname.replace(/^\/+|\/+$/g, "").split("/").pop() || "home";
    const produto = PRODUTOS.find((p) => p === rota);
    // sem esta guarda a primeira página contava duas vezes: uma no init do
    // pixel e outra aqui, inflando a métrica logo na porta de entrada
    if (pixelContouAPagina) pixelContouAPagina = false;
    else window.fbq("track", "PageView", {}, { eventID: novoEventId() });
    if (produto) {
      const eventID = novoEventId();
      window.fbq(
        "track",
        "ViewContent",
        { content_category: "produto", content_name: produto },
        { eventID },
      );
      justTrack("meta_view_content", { produto }, { evento: "ViewContent", id: eventID });
    }
  }

  if (typeof window.gtag !== "function" || !GA4_ID) return;
  const pagePath = normalizePath(path);

  // Era `gtag("config", ...)` a cada rota, e config REPETIDO nao emite
  // page_view quando o config inicial tem send_page_view:false. Resultado
  // medido em producao: screenPageViews = 0 e zero eventos page_view em 30
  // dias, ou seja, nenhuma pagina de entrada e nenhum funil.
  // Em SPA o page_view e um EVENTO explicito, um por rota.
  window.gtag("event", "page_view", {
    page_location: `${window.location.origin}${pagePath}`,
    page_title: title || document.title,
    page_referrer: document.referrer || undefined,
  });
}

/** SHA-256 em hex. Exige contexto seguro (https ou localhost). */
async function sha256Hex(texto) {
  if (!window.crypto?.subtle) return null;
  const dados = new TextEncoder().encode(texto);
  const buf = await window.crypto.subtle.digest("SHA-256", dados);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Enhanced Conversions for Leads.
 *
 * Manda ao Google o email do lead com HASH, nunca em claro, para ele casar a
 * conversão com o clique no anúncio mesmo quando o cookie não sobreviveu. É o
 * que faz a campanha aprender com quem virou lead de verdade, em vez de
 * aprender com cliques.
 *
 * Só roda com consentimento: sem ad_user_data concedido, o hash não sai daqui.
 */
export async function marcarConversaoIdentificada({ email, telefone } = {}) {
  if (!canUseBrowser() || typeof window.gtag !== "function") return;
  // Enhanced Conversions alimenta o Ads: depende do consentimento de publicidade
  if (consentimentoAds() !== "concedido") return;

  const dados = {};
  if (email) {
    const hash = await sha256Hex(email.trim().toLowerCase());
    if (hash) dados.sha256_email_address = hash;
  }
  if (telefone) {
    // E.164 sem sinais: o Google descarta o dado se o formato não bater
    const digitos = telefone.replace(/\D/g, "");
    if (digitos.length >= 10) {
      const e164 = digitos.startsWith("55") ? `+${digitos}` : `+55${digitos}`;
      const hash = await sha256Hex(e164);
      if (hash) dados.sha256_phone_number = hash;
    }
  }

  if (Object.keys(dados).length) window.gtag("set", "user_data", dados);
}

/**
 * Meta Pixel, para remarketing no Instagram.
 *
 * Carregado APÓS o aceite e nunca antes: o pixel grava cookie de terceira
 * parte no primeiro instante em que existe, então incluí-lo no HTML e "só não
 * disparar" não respeitaria a recusa. Vazio em VITE_META_PIXEL_ID mantém tudo
 * desligado — hoje é esse o caso, e os canos ficam prontos para quando houver
 * campanha.
 */
/**
 * Carrega o Insight Tag. Só depois do aceite de publicidade, nunca antes: a
 * tag do LinkedIn grava cookie no primeiro instante em que carrega.
 */
export function initLinkedIn() {
  if (!canUseBrowser() || !LINKEDIN_PARTNER_ID || isLocalhost()) return;
  if (consentimentoAds() !== "concedido" || window.lintrk) return;

  window._linkedin_partner_id = LINKEDIN_PARTNER_ID;
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(LINKEDIN_PARTNER_ID);

  window.lintrk = function (a, b) {
    window.lintrk.q.push([a, b]);
  };
  window.lintrk.q = [];

  appendScript("linkedin-insight", {
    async: true,
    src: "https://snap.licdn.com/li/js/liTag.js",
  });
}

export function initMetaPixel() {
  if (!canUseBrowser() || !META_PIXEL_ID || isLocalhost()) return;
  // pixel é publicidade, não medição: exige o consentimento específico
  if (consentimentoAds() !== "concedido" || window.fbq) return;

  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
    t = b.createElement(e); t.async = !0; t.src = v;
    s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

  window.fbq("init", META_PIXEL_ID);
  // o PageView de abertura sai daqui porque, quando a pessoa aceita no meio
  // da visita, não haverá outro trackPageView até ela trocar de rota
  window.fbq("track", "PageView");
  pixelContouAPagina = true;
}

export function maybeTrackLlmReferral(path) {
  if (!canUseBrowser() || llmReferralTracked || !document.referrer) return;
  let referrer;
  try {
    referrer = new URL(document.referrer);
  } catch {
    return;
  }
  const source = LLM_REFERRERS.find((domain) => referrer.hostname.includes(domain));
  if (!source) return;

  llmReferralTracked = true;
  // `source` NAO pode ser nome de parametro: o GA4 o trata como parametro de
  // ATRIBUICAO e ele reescreve a origem da sessao.
  trackEvent("llm_referral", {
    llm: source,
    referrer: document.referrer,
    landing_path: normalizePath(path),
  });
}
