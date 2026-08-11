/**
 * JUST Radar - SDK de identidade first-party.
 *
 * Três decisões que explicam quase todo o arquivo:
 *
 * 1. NADA é gravado antes da escolha do visitante. Enquanto ele não decidiu,
 *    os eventos vão embora anônimos (o servidor só incrementa um contador por
 *    dia) e nenhum localStorage é tocado. Banner que já gravou identificador
 *    "só pra não perder o dado" é banner decorativo.
 *
 * 2. O contexto de chegada (referrer, UTM, click ids, página de entrada) fica
 *    em MEMÓRIA desde o primeiro instante. Se a pessoa aceitar 20 segundos
 *    depois, a atribuição da sessão continua correta sem ter persistido nada
 *    antes da hora. É o que evita a escolha falsa entre "respeitar o
 *    consentimento" e "saber de onde o lead veio".
 *
 * 3. O corpo vai como text/plain de propósito. Com application/json o POST
 *    deixa de ser "simples" e ganha um preflight OPTIONS a cada lote — e é
 *    justamente no descarregar da página que esse round-trip extra faz o
 *    último evento da sessão se perder.
 */

const env = import.meta.env || {};
/** Vazio desliga o SDK inteiro. É assim que localhost e builds sem a variável
 *  simplesmente não coletam, em vez de estourar erro em cada página. */
const ENDPOINT = (env.VITE_IDENTITY_URL || "").replace(/\/$/, "");

const CHAVE_CONSENT = "just_consent";
const CHAVE_SID = "just_sid";
const CHAVE_SID_EM = "just_sid_em";
const CHAVE_REF = "just_ref";
const SESSAO_MS = 30 * 60 * 1000;

const CLICK_IDS = ["gclid", "gbraid", "wbraid", "fbclid", "msclkid", "ttclid", "li_fat_id"];

let fila = [];
let timer = null;
let contexto = null;
let iniciado = false;
let inicioPagina = Date.now();
let marcosScroll = new Set();
let refCode = null;
let ouvintesConsent = [];

function temNavegador() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function ativo() {
  return temNavegador() && Boolean(ENDPOINT);
}

/** localStorage quebra em modo privado antigo e com cookies bloqueados. Todo
 *  acesso passa por aqui para uma falha de storage nunca derrubar a página. */
function ler(chave) {
  try {
    return window.localStorage.getItem(chave);
  } catch {
    return null;
  }
}

function gravar(chave, valor) {
  try {
    window.localStorage.setItem(chave, valor);
  } catch {
    /* sem storage: o SDK segue funcionando, só perde continuidade de sessão */
  }
}

function apagar(chave) {
  try {
    window.localStorage.removeItem(chave);
  } catch {
    /* idem */
  }
}

export function consentimento() {
  const v = ler(CHAVE_CONSENT);
  return v === "concedido" || v === "negado" ? v : null;
}

function dispositivo() {
  const l = Math.max(window.screen?.width || 0, window.innerWidth || 0);
  if (l && l < 768) return "mobile";
  if (l && l < 1180) return "tablet";
  return "desktop";
}

/** Lido uma única vez, no carregamento: é o estado de chegada da sessão. */
function capturarContexto() {
  const params = new URLSearchParams(window.location.search);
  const clickIds = {};
  for (const chave of CLICK_IDS) {
    const valor = params.get(chave);
    if (valor) clickIds[chave] = valor;
  }

  const utm = {
    fonte: params.get("utm_source") || undefined,
    meio: params.get("utm_medium") || undefined,
    campanha: params.get("utm_campaign") || undefined,
    conteudo: params.get("utm_content") || undefined,
    termo: params.get("utm_term") || undefined,
  };

  // referrer interno não é origem: sem isto toda navegação entre páginas do
  // próprio site apareceria como "veio de wearejust.it"
  let referrer = document.referrer || undefined;
  if (referrer) {
    try {
      if (new URL(referrer).hostname === window.location.hostname) referrer = undefined;
    } catch {
      referrer = undefined;
    }
  }

  return {
    referrer,
    utm: Object.values(utm).some(Boolean) ? utm : undefined,
    clickIds: Object.keys(clickIds).length ? clickIds : undefined,
    dispositivo: dispositivo(),
    idioma: navigator.language,
  };
}

function sessaoAtual() {
  const sid = ler(CHAVE_SID);
  const em = Number(ler(CHAVE_SID_EM) || 0);
  if (!sid || !em || Date.now() - em > SESSAO_MS) return null;
  return sid;
}

function tocarSessao(sid) {
  if (sid) gravar(CHAVE_SID, sid);
  gravar(CHAVE_SID_EM, String(Date.now()));
}

async function despachar(eventos, viaBeacon) {
  const consent = consentimento() || "negado";
  const corpo = JSON.stringify({
    consent,
    sid: consent === "concedido" ? sessaoAtual() || undefined : undefined,
    ctx: contexto || undefined,
    eventos,
  });

  const url = `${ENDPOINT}/c/e`;

  // no descarregamento da página o fetch normal é cancelado; sendBeacon
  // sobrevive. Blob de text/plain mantém a requisição "simples" (sem preflight).
  if (viaBeacon && navigator.sendBeacon) {
    try {
      navigator.sendBeacon(url, new Blob([corpo], { type: "text/plain;charset=UTF-8" }));
      return;
    } catch {
      /* cai no fetch abaixo */
    }
  }

  try {
    const resp = await fetch(url, {
      method: "POST",
      credentials: "include",
      keepalive: true,
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body: corpo,
    });
    if (!resp.ok) return;
    const dados = await resp.json().catch(() => ({}));
    if (dados.sid) tocarSessao(dados.sid);
  } catch {
    /* coletor fora do ar nunca pode quebrar o site */
  }
}

/** Devolve a promessa do envio: quem precisa de ordem (o código de
 *  referência precisa do cookie já gravado) tem como esperar. */
function escoar(viaBeacon = false) {
  if (!fila.length) return Promise.resolve();
  const lote = fila.splice(0, 40);
  clearTimeout(timer);
  timer = null;
  return despachar(lote, viaBeacon);
}

export function justTrack(nome, props = {}) {
  if (!ativo() || !iniciado) return;
  if (!/^[a-z][a-z0-9_]{1,47}$/.test(nome)) return;

  const limpos = Object.fromEntries(
    Object.entries(props).filter(([, v]) => v !== undefined && v !== null && v !== ""),
  );

  fila.push({ nome, ts: new Date().toISOString(), url: window.location.href, props: limpos });

  if (fila.length >= 10) escoar();
  else if (!timer) timer = setTimeout(() => escoar(), 1500);
}

/** Página nova numa SPA: o relógio e os marcos de rolagem recomeçam. */
export function justPageView(titulo) {
  if (!ativo()) return;
  inicioPagina = Date.now();
  marcosScroll = new Set();
  justTrack("page_view", { title: titulo || document.title });
}

function observarScroll() {
  const aoRolar = () => {
    const altura = document.documentElement.scrollHeight - window.innerHeight;
    if (altura <= 0) return;
    const pct = ((window.scrollY || 0) / altura) * 100;
    for (const marco of [50, 90]) {
      if (pct >= marco && !marcosScroll.has(marco)) {
        marcosScroll.add(marco);
        justTrack(`scroll_${marco}`);
      }
    }
  };
  window.addEventListener("scroll", aoRolar, { passive: true });
}

function observarSaida() {
  const sair = () => {
    if (document.visibilityState !== "hidden") return;
    justTrack("page_exit", { segundos: Math.round((Date.now() - inicioPagina) / 1000) });
    escoar(true);
  };
  document.addEventListener("visibilitychange", sair);
  window.addEventListener("pagehide", sair);
}

/**
 * Carimba o link do WhatsApp com o código de referência.
 *
 * O site converte por WhatsApp, não por formulário: sem este elo, a ponta que
 * vira negócio ficaria fora do grafo. Roda em fase de captura para alterar o
 * href antes de qualquer handler do React, e o navegador lê o href no momento
 * da navegação — depois deste ajuste.
 */
function observarWhatsApp() {
  document.addEventListener(
    "click",
    (evento) => {
      if (!refCode) return;
      const ancora = evento.target?.closest?.("a[href]");
      if (!ancora) return;
      const href = ancora.getAttribute("href") || "";
      if (!href.includes("wa.me") && !href.includes("api.whatsapp.com")) return;
      if (href.includes(refCode)) return;

      try {
        const url = new URL(href, window.location.origin);
        const texto = url.searchParams.get("text") || "";
        url.searchParams.set("text", `${texto}\n\n[ref ${refCode}]`);
        ancora.setAttribute("href", url.toString());
      } catch {
        /* href exótico: melhor perder o código que quebrar o link */
      }
    },
    true,
  );
}

async function buscarRefCode() {
  if (consentimento() !== "concedido") return;
  const cache = ler(CHAVE_REF);
  if (cache) {
    refCode = cache;
    return;
  }
  try {
    const resp = await fetch(`${ENDPOINT}/c/ref`, { method: "POST", credentials: "include" });
    if (!resp.ok || resp.status === 204) return;
    const dados = await resp.json();
    if (dados.codigo) {
      refCode = dados.codigo;
      gravar(CHAVE_REF, dados.codigo);
    }
  } catch {
    /* sem código, o WhatsApp continua funcionando normalmente */
  }
}

export function refCodeAtual() {
  return refCode;
}

/** Envia um lead e amarra pessoa + empresa ao navegador. */
export async function justLead(dados) {
  if (!ativo()) return { ok: false };
  try {
    const resp = await fetch(`${ENDPOINT}/c/lead`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body: JSON.stringify(dados),
    });
    return resp.ok ? await resp.json() : { ok: false };
  } catch {
    return { ok: false };
  }
}

export function aoMudarConsentimento(fn) {
  ouvintesConsent.push(fn);
}

/**
 * Registra a escolha do visitante.
 *
 * Recusar depois de ter aceitado apaga de verdade: chama /c/apagar, que
 * derruba visitante, sessões, eventos e códigos em cascata, e limpa o estado
 * local. Consentimento que só para de coletar, sem apagar o que já coletou,
 * é meia-verdade.
 */
export async function definirConsentimento(valor) {
  const anterior = consentimento();
  gravar(CHAVE_CONSENT, valor);

  if (valor === "negado") {
    apagar(CHAVE_SID);
    apagar(CHAVE_SID_EM);
    apagar(CHAVE_REF);
    refCode = null;
    if (anterior === "concedido" && ativo()) {
      try {
        await fetch(`${ENDPOINT}/c/apagar`, { method: "POST", credentials: "include" });
      } catch {
        /* o servidor pode estar fora; a coleta local já parou de qualquer forma */
      }
    }
  }

  if (valor === "concedido") {
    justPageView();
    // ESPERA o primeiro envio: é ele que faz o servidor emitir o cookie de
    // identidade. Sem aguardar, /c/ref chegaria antes do cookie existir,
    // responderia 204 e a pessoa sairia sem código justamente na visita em
    // que aceitou — que é quando ela costuma clicar no WhatsApp.
    await escoar();
    await buscarRefCode();
  }

  for (const fn of ouvintesConsent) fn(valor);
}

export function initJustId() {
  if (!ativo() || iniciado) return;
  iniciado = true;
  contexto = capturarContexto();
  inicioPagina = Date.now();

  observarScroll();
  observarSaida();
  observarWhatsApp();
  if (consentimento() === "concedido") {
    tocarSessao(null);
    void buscarRefCode();
  }
}
