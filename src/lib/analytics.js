const env = import.meta.env || {};

const GA4_ID = env.VITE_GA4_ID || "";
const PLAUSIBLE_DOMAIN = env.VITE_PLAUSIBLE_DOMAIN || "";
const PLAUSIBLE_SRC = env.VITE_PLAUSIBLE_SRC || "https://plausible.io/js/pa-tnQg-2tE0DrOZj9nGuskh.js";

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
let plausibleFirstPageViewSkipped = false;

function canUseBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
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

function hasScriptWithSrc(src) {
  if (!canUseBrowser() || !src) return false;
  return Array.from(document.scripts).some((script) => script.src === src);
}

function setupPlausibleQueue() {
  window.plausible = window.plausible || function plausibleFallback() {
    window.plausible.q = window.plausible.q || [];
    window.plausible.q.push(arguments);
  };
  window.plausible.init = window.plausible.init || function plausibleInit(options) {
    window.plausible.o = options || {};
  };
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

  if (PLAUSIBLE_SRC || PLAUSIBLE_DOMAIN) {
    setupPlausibleQueue();
    window.plausible.init();

    if (!hasScriptWithSrc(PLAUSIBLE_SRC)) appendScript("plausible-script", {
      defer: true,
      "data-domain": PLAUSIBLE_DOMAIN || undefined,
      src: PLAUSIBLE_SRC,
    });
  }

  if (GA4_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtagFallback() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA4_ID, { send_page_view: false });
    appendScript("ga4-script", {
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`,
    });
  }
}

export function trackEvent(name, props = {}) {
  if (!canUseBrowser()) return;
  const eventProps = cleanProps(props);

  if (typeof window.plausible === "function") {
    window.plausible(name, { props: eventProps });
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", name, eventProps);
  }
}

export function trackPageView(path, title) {
  if (!canUseBrowser()) return;
  const pagePath = normalizePath(path);
  const pageUrl = `${window.location.origin}${pagePath}`;
  const pageTitle = title || document.title;

  if (typeof window.plausible === "function") {
    const hasStaticSnippet = hasScriptWithSrc(PLAUSIBLE_SRC);
    if (hasStaticSnippet && !plausibleFirstPageViewSkipped) {
      plausibleFirstPageViewSkipped = true;
    } else {
      window.plausible("pageview", { u: pageUrl });
    }
  }

  if (typeof window.gtag === "function" && GA4_ID) {
    window.gtag("config", GA4_ID, {
      page_path: pagePath,
      page_location: pageUrl,
      page_title: pageTitle,
    });
  }
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
  trackEvent("llm_referral", {
    source,
    referrer: document.referrer,
    landing_path: normalizePath(path),
  });
}
