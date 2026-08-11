/**
 * JUST Radar - SDK de identidade first-party.
 *
 * Três decisões que explicam quase todo o arquivo:
 *
 * 1. NADA que sobreviva à visita é gravado sem consentimento. A visita continua
 *    sendo medida por inteiro (páginas, sequência, tempo de tela), mas a sessão
 *    mora no sessionStorage: morre quando a aba fecha, sem cookie e sem
 *    identificador entre visitas. Medir audiência e rastrear pessoa são coisas
 *    diferentes, e a diferença está exatamente aqui.
 *
 *    O aceite é lembrado no dispositivo; a recusa, só na aba. Quem recusa é
 *    perguntado de novo na próxima visita (decisão do Gabriel), mas recarregar
 *    a página não repergunta.
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
/**
 * A RECUSA vive só na aba, o aceite vive no dispositivo.
 *
 * Assimetria proposital: quem aceita é lembrado; quem recusa é perguntado de
 * novo na próxima visita. Recarregar a página não pergunta de novo (o
 * sessionStorage sobrevive ao reload), só abrir o site outra vez.
 */
const CHAVE_RECUSA = "just_consent_sessao";
/** Publicidade é escolha separada: quem aceita ser reconhecido não
 *  necessariamente aceita ser perseguido por anúncio. */
const CHAVE_ADS = "just_consent_ads";
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
/** Chave da sessão anônima no sessionStorage (morre junto com a aba). */
const CHAVE_SID_ANON = "just_sid_sessao";
/** URL da página corrente, para o page_exit ser atribuído à tela certa. */
let urlPagina = null;

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

/**
 * sessionStorage: morre com a aba, sobrevive ao recarregamento.
 *
 * É o que faz a sessão anônima parar de se multiplicar a cada F5 (três
 * recarregamentos viravam três "visitas") sem gravar nada que sobreviva à
 * visita.
 */
function lerSessao(chave) {
  try {
    return window.sessionStorage.getItem(chave);
  } catch {
    return null;
  }
}

function gravarSessao(chave, valor) {
  try {
    window.sessionStorage.setItem(chave, valor);
  } catch {
    /* sem sessionStorage: cai no comportamento antigo, sessão por carregamento */
  }
}

export function consentimento() {
  // aceite é lembrado entre visitas; recusa, só dentro da aba
  const aceite = ler(CHAVE_CONSENT);
  if (aceite === "concedido") return "concedido";
  return lerSessao(CHAVE_RECUSA) === "negado" ? "negado" : null;
}

/** Consentimento de publicidade (Meta Pixel, remarketing do Google). */
export function consentimentoAds() {
  const v = ler(CHAVE_ADS);
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

/** Cookie _fbp, criado pelo pixel. É o sinal que a Meta mais usa para casar
 *  o evento do servidor com o do navegador. */
function lerFbp() {
  const m = document.cookie.match(/(?:^|;\s*)_fbp=([^;]+)/);
  return m ? m[1] : undefined;
}

/** fbc: derivado do fbclid da URL. É o que liga a conversão ao anúncio
 *  clicado; sem ele a Meta sabe que houve conversão, não de qual anúncio. */
function montarFbc() {
  const fbclid = new URLSearchParams(window.location.search).get("fbclid");
  if (!fbclid) {
    const m = document.cookie.match(/(?:^|;\s*)_fbc=([^;]+)/);
    return m ? m[1] : undefined;
  }
  return `fb.1.${Date.now()}.${fbclid}`;
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
  // null = ainda não respondeu. Vai como "pendente", não como "negado": para
  // a coleta os dois são idênticos (nada persistente), mas no painel a
  // diferença é tudo — chamar silêncio de recusa fez o Radar reportar 53% de
  // recusa num site onde quase ninguém chegou a clicar no banner.
  const consent = consentimento() || "pendente";
  const corpo = JSON.stringify({
    consent,
    // com consentimento a sessão persiste entre carregamentos; sem ele, vive
    // apenas na memória desta aba
    sid: (consent === "concedido" ? sessaoAtual() : lerSessao(CHAVE_SID_ANON)) || undefined,
    // lidos aqui, não na carga da página: o _fbp só passa a existir depois
    // que o visitante aceita e o pixel inicializa
    ctx: contexto ? { ...contexto, fbp: lerFbp(), fbc: montarFbc() } : undefined,
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
    if (!dados.sid) return;
    if (consent === "concedido") tocarSessao(dados.sid);
    else gravarSessao(CHAVE_SID_ANON, dados.sid);
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

export function justTrack(nome, props = {}, meta) {
  if (!ativo() || !iniciado) return;
  if (!/^[a-z][a-z0-9_]{1,47}$/.test(nome)) return;

  const limpos = Object.fromEntries(
    Object.entries(props).filter(([, v]) => v !== undefined && v !== null && v !== ""),
  );

  enfileirar(nome, limpos, window.location.href, meta);
}

function enfileirar(nome, props, url, meta) {
  fila.push({ nome, ts: new Date().toISOString(), url, props, ...(meta ? { meta } : {}) });
  if (fila.length >= 10) escoar();
  else if (!timer) timer = setTimeout(() => escoar(), 1500);
}

/**
 * Fecha a tela anterior.
 *
 * Numa SPA, trocar de rota não descarrega nada, então sem isto o tempo de
 * tela só seria registrado ao fechar a aba: a pessoa que lê três páginas
 * apareceria com tempo em uma só. A URL vai explícita porque, quando isto
 * roda, window.location já é a página NOVA.
 */
function fecharTela() {
  if (!urlPagina) return;
  const segundos = Math.round((Date.now() - inicioPagina) / 1000);
  if (segundos >= 1) enfileirar("page_exit", { segundos }, urlPagina);
  urlPagina = null;
}

/** Página nova numa SPA: fecha a anterior, zera o relógio e a rolagem. */
export function justPageView(titulo) {
  if (!ativo()) return;
  fecharTela();
  inicioPagina = Date.now();
  marcosScroll = new Set();
  urlPagina = window.location.href;
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
    fecharTela();
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
export async function definirConsentimento(valor, ads = valor) {
  const anterior = consentimento();
  if (valor === "concedido") gravar(CHAVE_CONSENT, valor);
  // publicidade só pode existir com medição: sem identificador não há a quem
  // atribuir o anúncio, então aceitar ads e recusar medição é incoerente
  gravar(CHAVE_ADS, valor === "concedido" ? ads : "negado");

  if (valor === "negado") {
    apagar(CHAVE_SID);
    apagar(CHAVE_SID_EM);
    apagar(CHAVE_REF);
    apagar(CHAVE_CONSENT);
    refCode = null;
    // a recusa fica na aba: na próxima visita perguntamos de novo
    gravarSessao(CHAVE_RECUSA, "negado");
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
