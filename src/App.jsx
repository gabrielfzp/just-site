import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, useNavigate, useLocation } from "react-router-dom";
import { CONTENT_T, ErrorBoundary, LangContext, T } from "./site/shared.jsx";
import { applySeo, getSeo } from "./site/seo.js";
import { Header, Footer } from "./components/Layout.jsx";
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
    const qs = new URLSearchParams(location.search).toString();
    const target = (p === "home" ? "/" : `/${p}`) + (qs ? "?" + qs : "");
    navigate(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const routeKey = location.pathname.replace(/^\/+|\/+$/g, "") || "home";
  const segments = routeKey === "home" ? [] : routeKey.split("/");
  const page = segments[0] || "home";

  useEffect(() => {
    const contentRoute = routeKey === "conteudos" || routeKey.startsWith("conteudos/") || routeKey.startsWith("autores/");
    if (!contentRoute) applySeo(getSeo(routeKey, lang), lang);
  }, [routeKey, lang]);

  const render = () => {
    if (routeKey === "home") return <HomePage setPage={setPage} lang={lang} />;
    if (routeKey === "sobre") return <SobrePage setPage={setPage} lang={lang} />;
    if (routeKey === "stack") return <ErrorBoundary><StackPage setPage={setPage} lang={lang} /></ErrorBoundary>;
    if (routeKey === "cases") return <CasesPage setPage={setPage} lang={lang} />;
    if (routeKey === "contato") return <ContatoPage lang={lang} />;
    if (routeKey === "privacidade") return <PrivacyPage lang={lang} />;
    if (routeKey === "sentinel") return <SentinelPage setPage={setPage} lang={lang} />;
    if (routeKey === "conteudos") return <ConteudosPage />;
    if (segments[0] === "conteudos" && segments[1] === "categoria") return <CategoriaPage slug={segments[2]} />;
    if (segments[0] === "conteudos" && segments[1]) return <ArticlePage slug={segments[1]} />;
    if (segments[0] === "autores" && segments[1]) return <AutorPage slug={segments[1]} />;
    if (SOL[routeKey]) return <SolutionPage setPage={setPage} config={SOL[routeKey]} lang={lang} />;
    return <HomePage setPage={setPage} lang={lang} />;
  };

  return (
    <LangContext.Provider value={{ lang, setLang: changeLang }}>
        <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", background: T.primary, minHeight: "100vh", WebkitFontSmoothing: "antialiased" }}>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html, body { overflow-x: hidden; width: 100%; }
          ::selection { background: rgba(244,85,70,0.3); }
          input:focus, textarea:focus, select:focus { border-color: ${T.cta} !important; }
          button:focus { outline: none; }

@media (max-width: 900px) {
  .desktop-nav { display: none !important; }
  .mobile-menu-btn { display: flex !important; }
  header { padding: 0 20px !important; }
  .depara-row {
    grid-template-columns: 1fr 36px 1fr !important;
    gap: 0 !important;
  }
}
@media (max-width: 520px) {
  .depara-row {
    grid-template-columns: 1fr 28px 1fr !important;
  }
}
@media (max-width: 900px) {
  .hero-grid > div:last-child {
    display: none !important;
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
.content-article {
  font-size: 18px;
  line-height: 1.78;
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
