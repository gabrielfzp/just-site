import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, useNavigate, useLocation } from "react-router-dom";
import { CONTENT_T, ErrorBoundary, LangContext, T } from "./site/shared.jsx";
import { applySeo, getSeo } from "./site/seo.js";
import { Header, Footer } from "./components/Layout.jsx";
import { initAnalytics, maybeTrackLlmReferral, trackEvent, trackPageView } from "./lib/analytics.js";
import HomePage from "./pages/HomePage.jsx";
import SobrePage from "./pages/SobrePage.jsx";
import StackPage from "./pages/StackPage.jsx";
import CasesPage from "./pages/CasesPage.jsx";
import ContatoPage from "./pages/ContatoPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import SolutionPage from "./pages/SolutionPage.jsx";
import SentinelPage from "./pages/SentinelPage.jsx";
import { SOL } from "./data/solutions.js";

const ConteudosPage = lazy(() => import("./pages/ConteudosPage.jsx"));
const ArticlePage = lazy(() => import("./pages/ArticlePage.jsx"));
const CategoriaPage = lazy(() => import("./pages/CategoriaPage.jsx"));
const AutorPage = lazy(() => import("./pages/AutorPage.jsx"));

const ROUTE_ALIASES = {
  tecnologia: "stack",
  "politica-de-privacidade": "privacidade",
  "produtos/beneficios": "beneficios",
  "produtos/frotas": "frotas",
  "produtos/banking": "banking",
  "produtos/despesas": "despesas",
  "produtos/antecipacao": "antecipacao",
  "produtos/sob-demanda": "sob-demanda",
  "authors/gabriel-pires": "autores/gabriel-pires",
  "authors/time-just": "autores/time-just",
};

// MAIN APP
// ========================================
function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const [lang, setLang] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("lang") || localStorage.getItem("just-lang") || "pt-BR";
  });

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("just-lang", newLang);
    const params = new URLSearchParams(location.search);
    if (newLang !== "pt-BR") { params.set("lang", newLang); } else { params.delete("lang"); }
    const qs = params.toString();
    navigate(location.pathname + (qs ? "?" + qs : ""), { replace: true });
  };

  const setPage = (p) => {
    if (p === "contato") {
      trackEvent("contact_cta_click", {
        source: "internal_navigation",
        from_path: location.pathname,
      });
    }
    const qs = new URLSearchParams(location.search).toString();
    const target = (p === "home" ? "/" : `/${p}`) + (qs ? "?" + qs : "");
    navigate(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const routeKey = location.pathname.replace(/^\/+|\/+$/g, "") || "home";
  const resolvedRouteKey = ROUTE_ALIASES[routeKey] || routeKey;
  const segments = resolvedRouteKey === "home" ? [] : resolvedRouteKey.split("/");
  const page = segments[0] || "home";

  useEffect(() => {
    const contentRoute = resolvedRouteKey === "conteudos" || resolvedRouteKey.startsWith("conteudos/") || resolvedRouteKey.startsWith("autores/");
    if (!contentRoute) applySeo(getSeo(resolvedRouteKey, lang), lang);
  }, [resolvedRouteKey, lang]);

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    const path = `${location.pathname}${location.search}${location.hash}`;
    trackPageView(path);
    maybeTrackLlmReferral(path);
    if (location.pathname === "/contato") {
      trackEvent("contact_page_view", { path });
    }
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    const handleTrackedClick = (event) => {
      const anchor = event.target.closest?.("a[href]");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      const label = anchor.textContent?.trim().slice(0, 80) || anchor.getAttribute("aria-label") || "";

      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        trackEvent("whatsapp_click", {
          source: anchor.title || label || "link",
          from_path: location.pathname,
        });
        return;
      }

      if (href === "/contato" || href.startsWith("/contato?")) {
        trackEvent("contact_cta_click", {
          source: label || "link",
          from_path: location.pathname,
        });
        return;
      }

      if (href.includes("linkedin.com/in/")) {
        trackEvent("author_linkedin_click", {
          source: label || "linkedin",
          from_path: location.pathname,
          href,
        });
        return;
      }

      if (href.includes("linkedin.com/company/")) {
        trackEvent("company_linkedin_click", {
          source: label || "linkedin",
          from_path: location.pathname,
          href,
        });
      }
    };

    document.addEventListener("click", handleTrackedClick);
    return () => document.removeEventListener("click", handleTrackedClick);
  }, [location.pathname]);

  const render = () => {
    if (resolvedRouteKey === "home") return <HomePage setPage={setPage} lang={lang} />;
    if (resolvedRouteKey === "sobre") return <SobrePage setPage={setPage} lang={lang} />;
    if (resolvedRouteKey === "stack") return <ErrorBoundary><StackPage setPage={setPage} lang={lang} /></ErrorBoundary>;
    if (resolvedRouteKey === "cases") return <CasesPage setPage={setPage} lang={lang} />;
    if (resolvedRouteKey === "contato") return <ContatoPage lang={lang} />;
    if (resolvedRouteKey === "privacidade") return <PrivacyPage lang={lang} />;
    if (resolvedRouteKey === "sentinel") return <SentinelPage setPage={setPage} lang={lang} />;
    if (resolvedRouteKey === "conteudos") return <ConteudosPage />;
    if (segments[0] === "conteudos" && segments[1] === "categoria") return <CategoriaPage slug={segments[2]} />;
    if (segments[0] === "conteudos" && segments[1]) return <ArticlePage slug={segments[1]} />;
    if (segments[0] === "autores" && segments[1]) return <AutorPage slug={segments[1]} />;
    if (SOL[resolvedRouteKey]) return <SolutionPage setPage={setPage} config={SOL[resolvedRouteKey]} lang={lang} />;
    return <HomePage setPage={setPage} lang={lang} />;
  };

  return (
    <LangContext.Provider value={{ lang, setLang: changeLang }}>
        <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", background: T.primary, minHeight: "100vh", WebkitFontSmoothing: "antialiased" }}>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html, body { overflow-x: hidden; width: 100%; background: #0f112b; }
          ::selection { background: rgba(244,85,70,0.3); }
          input:focus, textarea:focus, select:focus { border-color: ${T.cta} !important; }
          button:focus { outline: none; }
          .desktop-nav .nav-link:hover { color: ${T.textLight} !important; }
          .desktop-nav .nav-link-active::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: -15px;
            width: 26px;
            height: 1px;
            transform: translateX(-50%);
            background: ${T.cta};
            border-radius: 999px;
          }
          .hero-title-mobile { display: none; }
          .hero-title-desktop { display: inline; }

@media (max-width: 900px) {
  .desktop-nav { display: none !important; }
  .mobile-menu-btn { display: flex !important; }
  header { padding: 0 20px !important; }
  .depara-row {
    grid-template-columns: minmax(0, 1fr) 36px minmax(0, 1fr) !important;
    gap: 0 !important;
  }
  .depara-labels,
  .comp-row {
    grid-template-columns: minmax(0, 1fr) 36px minmax(0, 1fr) !important;
  }
  .comp-row > div {
    min-width: 0 !important;
  }
  .comp-row h4,
  .comp-row p {
    overflow-wrap: anywhere !important;
  }
}
@media (max-width: 520px) {
  .depara-row {
    grid-template-columns: minmax(0, 1fr) 28px minmax(0, 1fr) !important;
  }
  .depara-labels,
  .comp-row {
    grid-template-columns: minmax(0, 1fr) 28px minmax(0, 1fr) !important;
  }
  .depara-labels span {
    font-size: 10px !important;
    padding: 7px 10px !important;
  }
  .comp-row > div {
    padding: 16px 10px !important;
    gap: 9px !important;
  }
  .comp-row h4 {
    font-size: 12px !important;
    line-height: 1.35 !important;
  }
}
@media (max-width: 900px) {
  .hero-grid > div:last-child {
    display: none !important;
  }
  .section-hero {
    min-height: auto !important;
    display: flex !important;
    align-items: flex-start !important;
    padding: 116px 28px 46px !important;
  }
  .hero-grid {
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 0 !important;
    width: 100% !important;
    min-height: auto !important;
    align-items: start !important;
  }
  .hero-grid > div:first-child {
    width: 100% !important;
    max-width: 680px !important;
    min-width: 0 !important;
    min-height: auto !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start !important;
    padding-top: 0 !important;
  }
  .hero-eyebrow span {
    font-size: 12px !important;
    padding: 8px 16px !important;
    letter-spacing: 0.1em !important;
  }
  .hero-title {
    font-size: clamp(58px, 9.4vw, 70px) !important;
    line-height: 1.02 !important;
    letter-spacing: -0.055em !important;
    margin: 28px 0 22px !important;
    width: 100% !important;
    max-width: 100% !important;
    overflow-wrap: break-word !important;
  }
  .hero-grid p {
    max-width: 34ch !important;
    font-size: 17px !important;
    line-height: 1.58 !important;
    margin-bottom: 28px !important;
  }
  .flow-steps-row {
    display: none !important;
  }
  .hero-cta-row {
    flex-wrap: wrap !important;
    gap: 14px !important;
  }
  .hero-cta-row button {
    font-size: 15px !important;
    padding: 14px 24px !important;
  }
  .section-social-proof {
    padding: 28px 24px 40px !important;
  }
  .section-why-just {
    padding: 84px 28px !important;
  }
  .why-just-title {
    font-size: clamp(58px, 9.4vw, 70px) !important;
    line-height: 1.02 !important;
    letter-spacing: -0.055em !important;
  }
  .just-pillars-grid {
    grid-template-columns: 1fr !important;
  }
  .just-pillar {
    min-height: auto !important;
    padding: 30px 0 34px !important;
    border-right: none !important;
    border-bottom: 1px solid ${T.borderLight} !important;
  }
  .just-pillars-grid > div:last-child .just-pillar {
    border-bottom: none !important;
  }
  .just-pillar h3 {
    font-size: 34px !important;
  }
  .social-logos {
    display: grid !important;
    grid-template-columns: repeat(3, minmax(72px, 1fr)) !important;
    gap: 22px 18px !important;
    max-width: 380px !important;
    margin: 0 auto !important;
    justify-items: center !important;
    align-items: center !important;
  }
  .social-logos .partner-logo {
    width: 86px !important;
    height: 26px !important;
    max-width: 100% !important;
    object-fit: contain !important;
  }
  .site-footer {
    padding: 58px 24px 34px !important;
  }
  .site-footer-main {
    grid-template-columns: 1fr 1fr !important;
    gap: 38px 34px !important;
  }
  .site-footer-brand {
    grid-column: 1 / -1 !important;
    text-align: center !important;
  }
  .site-footer-brand p {
    max-width: 420px !important;
    margin: 0 auto !important;
    font-size: 15px !important;
    line-height: 1.7 !important;
  }
  .site-footer-main h4 {
    margin-bottom: 14px !important;
  }
  .site-footer-products button {
    align-items: center !important;
    gap: 10px !important;
    line-height: 1.45 !important;
    max-width: 100% !important;
  }
  .site-footer-company button,
  .site-footer-contact a,
  .site-footer-contact span {
    font-size: 14px !important;
    line-height: 1.75 !important;
  }
  .site-footer-contact {
    grid-column: 1 / -1 !important;
  }
  .site-footer-bottom {
    margin-top: 36px !important;
  }
  .site-footer-partners {
    justify-content: center !important;
    gap: 24px 34px !important;
  }
  .site-footer-partner-group {
    text-align: center !important;
  }
  .site-footer-partner-logos {
    justify-content: center !important;
    flex-wrap: wrap !important;
    gap: 16px !important;
  }
  .privacy-grid {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
  }
  .privacy-aside {
    position: static !important;
  }
  .article-layout {
    grid-template-columns: 1fr !important;
  }
  .toc-mobile-toggle {
    display: block !important;
  }
  .toc-panel {
    display: none;
  }
}
@media (max-width: 520px) {
  .section-hero {
    min-height: auto !important;
    padding: 104px 24px 42px !important;
  }
  .hero-grid {
    min-height: auto !important;
  }
  .hero-grid > div:first-child {
    min-height: auto !important;
    padding-top: 0 !important;
  }
  .hero-eyebrow span {
    font-size: 12px !important;
    padding: 8px 15px !important;
    letter-spacing: 0.09em !important;
  }
  .hero-title {
    font-size: clamp(46px, 12.6vw, 50px) !important;
    line-height: 0.98 !important;
    letter-spacing: -0.058em !important;
    margin: 30px 0 22px !important;
    width: 100% !important;
    max-width: calc(100vw - 48px) !important;
    overflow-wrap: break-word !important;
  }
  .hero-title-desktop {
    display: none !important;
  }
  .hero-title-mobile {
    display: inline !important;
  }
  .hero-grid p {
    font-size: 16px !important;
    line-height: 1.55 !important;
    max-width: 33ch !important;
    margin-bottom: 26px !important;
  }
  .hero-cta-row {
    display: grid !important;
    grid-template-columns: 1fr !important;
    gap: 10px !important;
    max-width: 306px !important;
  }
  .hero-cta-row button {
    width: 100% !important;
    justify-content: center !important;
    padding: 13px 22px !important;
  }
  .section-social-proof {
    padding: 24px 24px 42px !important;
  }
  .section-why-just {
    padding: 76px 24px !important;
  }
  .why-just-title {
    font-size: clamp(52px, 13.8vw, 59px) !important;
    line-height: 1.03 !important;
    letter-spacing: -0.058em !important;
  }
  .just-pillar {
    padding: 28px 0 32px !important;
  }
  .just-pillar h3 {
    font-size: 30px !important;
    margin-bottom: 18px !important;
  }
  .just-pillar p {
    font-size: 15px !important;
  }
  .social-logos {
    grid-template-columns: repeat(3, minmax(64px, 1fr)) !important;
    gap: 22px 14px !important;
    max-width: 330px !important;
  }
  .social-logos .partner-logo {
    width: 72px !important;
    height: 22px !important;
    max-width: 100% !important;
  }
  .site-footer {
    padding: 56px 24px 32px !important;
  }
  .site-footer-main {
    grid-template-columns: 1fr !important;
    gap: 32px !important;
    text-align: center !important;
  }
  .site-footer-products button {
    justify-content: center !important;
    margin: 0 auto !important;
    width: fit-content !important;
  }
  .site-footer-company button {
    margin: 0 auto !important;
  }
  .site-footer-contact {
    text-align: center !important;
  }
  .site-footer-contact a,
  .site-footer-contact span {
    margin-left: auto !important;
    margin-right: auto !important;
    max-width: 300px !important;
    white-space: pre-line !important;
  }
  .site-footer-partners {
    flex-direction: column !important;
    align-items: center !important;
  }
  .site-footer-partner-group {
    width: 100% !important;
  }
  .site-footer-bottom-row {
    flex-direction: column !important;
    justify-content: center !important;
    text-align: center !important;
  }
}
.content-article {
  font-size: 18px;
  line-height: 1.78;
}
.content-article h1 {
  display: none;
}
.content-article h2 {
  color: ${CONTENT_T.navy};
  font-size: 34px;
  line-height: 1.18;
  margin: 52px 0 18px;
  scroll-margin-top: 112px;
}
.content-article h3 {
  color: ${CONTENT_T.navy};
  font-size: 24px;
  line-height: 1.25;
  margin: 36px 0 14px;
}
.content-article h2 a,
.content-article h3 a {
  color: inherit;
  text-decoration: none;
}
.content-article p,
.content-article li {
  color: ${CONTENT_T.text};
}
.content-article p {
  margin: 0 0 22px;
}
.content-article a {
  color: ${CONTENT_T.red};
  font-weight: 700;
  text-underline-offset: 3px;
}
.content-article figure {
  margin: 34px 0;
}
.content-article figure img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
  border: 1px solid ${CONTENT_T.border};
  box-shadow: 0 18px 46px rgba(16,36,63,0.08);
}
.content-article figcaption {
  margin-top: 10px;
  color: ${CONTENT_T.muted};
  font-size: 13px;
  line-height: 1.45;
}
.content-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0;
  overflow: hidden;
  border-radius: 8px;
}
.content-article th,
.content-article td {
  border: 1px solid ${CONTENT_T.border};
  padding: 14px 16px;
  text-align: left;
}
.content-article th {
  color: ${CONTENT_T.navy};
  background: ${CONTENT_T.surfaceSoft};
}
.content-article td {
  color: ${CONTENT_T.text};
  background: #ffffff;
}
@media (max-width: 900px) {
  .content-hub-hero {
    padding: 118px 28px 56px !important;
  }
  .content-hub-hero-grid {
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 32px !important;
    align-items: start !important;
  }
  .content-hub-title {
    font-size: clamp(44px, 11.4vw, 58px) !important;
    line-height: 1.02 !important;
    max-width: 9ch !important;
    margin-bottom: 20px !important;
  }
  .content-hub-subtitle {
    font-size: 17px !important;
    line-height: 1.6 !important;
    max-width: 36ch !important;
  }
  .content-search {
    width: 100% !important;
    max-width: 520px !important;
  }
  .content-hub-body {
    padding: 54px 28px 80px !important;
  }
  .content-hub-layout {
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 34px !important;
  }
  .content-hub-layout > main {
    min-width: 0 !important;
  }
  .content-sidebar {
    order: -1 !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 16px !important;
  }
  .content-sidebar-card {
    padding: 18px !important;
  }
  .article-card {
    min-height: auto !important;
    padding: 24px !important;
    width: 100% !important;
    max-width: 100% !important;
    overflow: hidden !important;
  }
  .article-card h2 {
    font-size: 23px !important;
    line-height: 1.14 !important;
    max-width: 100% !important;
    overflow-wrap: anywhere !important;
  }
  .article-card h2 a {
    display: block !important;
    max-width: 100% !important;
    overflow-wrap: anywhere !important;
  }
  .article-card-featured h2 {
    font-size: 30px !important;
    line-height: 1.1 !important;
  }
}
@media (max-width: 520px) {
  .content-hub-hero {
    padding: 106px 24px 44px !important;
    overflow: hidden !important;
  }
  .content-hub-hero-grid,
  .content-hub-layout {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
  }
  .content-hub-kicker {
    font-size: 11px !important;
    letter-spacing: 0.09em !important;
    margin-bottom: 16px !important;
  }
  .content-hub-title {
    font-size: clamp(42px, 12vw, 48px) !important;
    max-width: 8.5ch !important;
  }
  .content-hub-subtitle {
    font-size: 16px !important;
    max-width: 25ch !important;
  }
  .content-hub-body {
    padding: 44px 24px 72px !important;
    overflow: hidden !important;
  }
  .content-hub-layout {
    gap: 30px !important;
  }
  .content-sidebar {
    order: 0 !important;
    grid-template-columns: 1fr !important;
    gap: 14px !important;
  }
  .content-featured {
    margin-bottom: 38px !important;
  }
  .content-section-label {
    margin-bottom: 12px !important;
  }
  .content-list-title {
    font-size: 28px !important;
  }
  .content-card-grid {
    grid-template-columns: minmax(0, 1fr) !important;
  }
  .article-card {
    padding: 22px !important;
    width: calc(100vw - 48px) !important;
    max-width: calc(100vw - 48px) !important;
  }
  .article-card h2,
  .article-card-featured h2 {
    display: block !important;
    font-size: 20px !important;
    line-height: 1.2 !important;
    width: min(100%, 24ch) !important;
    max-width: 24ch !important;
    min-width: 0 !important;
    overflow-wrap: anywhere !important;
  }
  .article-card h2 a {
    display: inline !important;
    min-width: 0 !important;
  }
  .article-card p {
    font-size: 14px !important;
  }
  .article-card-meta {
    gap: 8px 10px !important;
    font-size: 12px !important;
    line-height: 1.5 !important;
  }
  .content-search,
  .content-search input {
    max-width: 100% !important;
    min-width: 0 !important;
  }
}
`}</style>
        <Header page={page} setPage={setPage} lang={lang} />
        <main>
          <Suspense fallback={<div style={{ minHeight: "80vh", background: T.primary }} />}>
            {render()}
          </Suspense>
        </main>
        <Footer setPage={setPage} lang={lang} />
        {page !== "contato" && (
          <a
            href="https://wa.me/5511971874759?text=Ola%2C%20acessei%20o%20site%20da%20JUST%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            title="Fale conosco pelo WhatsApp"
            style={{
              position: "fixed", bottom: 24, right: 24, width: 48, height: 48,
              borderRadius: "50%", background: "#25D366", display: "flex",
              alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
              zIndex: 1000, transition: "transform 0.2s ease, box-shadow 0.2s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.08)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(37,211,102,0.35)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.25)"; }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        )}
      </div>
    </LangContext.Provider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
