import { justPageView, justTrack, consentimento } from "./just-id.js";

const env = import.meta.env || {};

const GA4_ID = env.VITE_GA4_ID || "";
/** Vazio = sem Meta Pixel. Hoje é o caso: o cano fica pronto, desligado. */
const META_PIXEL_ID = env.VITE_META_PIXEL_ID || "";

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
    if (concedido) aplicarConsentimentoGA4("concedido");

    window.gtag("js", new Date());
    window.gtag("config", GA4_ID, { send_page_view: false });
    appendScript("ga4-script", {
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`,
    });
  }

  // visitante que já aceitou numa visita anterior: o pixel sobe junto
  initMetaPixel();
}

/** Propaga a escolha do visitante para o GA4 (e, por tabela, para o Ads). */
export function aplicarConsentimentoGA4(valor) {
  if (!canUseBrowser() || typeof window.gtag !== "function") return;
  const estado = valor === "concedido" ? "granted" : "denied";
  window.gtag("consent", "update", {
    ad_storage: estado,
    ad_user_data: estado,
    ad_personalization: estado,
    analytics_storage: estado,
    functionality_storage: estado,
    personalization_storage: estado,
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
  justTrack(name, limpos);
}

export function trackPageView(path, title) {
  if (!canUseBrowser()) return;

  // o Radar recebe a página independente do GA4: são dois sistemas, e um
  // fora do ar não pode cegar o outro
  justPageView(title);

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
  if (consentimento() !== "concedido") return;

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
export function initMetaPixel() {
  if (!canUseBrowser() || !META_PIXEL_ID || isLocalhost()) return;
  if (consentimento() !== "concedido" || window.fbq) return;

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
  window.fbq("track", "PageView");
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
