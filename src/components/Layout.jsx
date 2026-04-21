import { useEffect, useState } from "react";
import { Btn, JustLogo, ProductIcon, PRODUCT_COLORS, T, T18N, useLang } from "../site/shared.jsx";

function LangToggle({ mobile = false, lang, setLang }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4, marginLeft: mobile ? 0 : 8 }}>
      {["pt-BR", "en"].map((l) => (
        <button key={l} onClick={() => setLang(l)} style={{
          padding: "5px 10px", borderRadius: 6, fontSize: 11, fontWeight: 700,
          cursor: "pointer", border: `1px solid ${lang === l ? "rgba(244,85,70,0.4)" : "rgba(255,255,255,0.1)"}`,
          background: lang === l ? "rgba(244,85,70,0.1)" : "transparent",
          color: lang === l ? T.cta : "rgba(242,244,248,0.4)",
          transition: "all 0.2s", letterSpacing: "0.03em",
        }}>{l === "pt-BR" ? "PT" : "EN"}</button>
      ))}
    </div>
  );
}

// HEADER
// ========================================
export function Header({ page, setPage, lang }) {
  const { setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const tr = T18N[lang] || T18N["pt-BR"];
  const isContentPage = page === "conteudos" || page === "autores" || page.startsWith("conteudos/") || page.startsWith("autores/");
  const solidHeader = isContentPage || scrolled || mobileOpen;
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const nav = (p) => { setPage(p); setDropOpen(false); setMobileOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const isActive = (p) => p === "conteudos" ? isContentPage : page === p;
  const lnk = (p) => ({
    color: isActive(p) ? T.cta : "rgba(242,244,248,0.8)",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: "8px 14px",
    transition: "color 0.2s",
  });

  const solucoes = [
    { key: "beneficios", label: tr.products.beneficios.name, desc: tr.products.beneficios.headerDesc, color: PRODUCT_COLORS.beneficios.accent },
    { key: "frotas", label: tr.products.frotas.name, desc: tr.products.frotas.headerDesc, color: PRODUCT_COLORS.frotas.accent },
    { key: "banking", label: tr.products.banking.name, desc: tr.products.banking.headerDesc, color: PRODUCT_COLORS.banking.accent },
    { key: "despesas", label: tr.products.despesas.name, desc: tr.products.despesas.headerDesc, color: PRODUCT_COLORS.despesas.accent },
    { key: "antecipacao", label: tr.products.antecipacao.name, desc: tr.products.antecipacao.headerDesc, color: PRODUCT_COLORS.antecipacao.accent },
    { key: "sob-demanda", label: tr.products["sob-demanda"].name, desc: tr.products["sob-demanda"].headerDesc, color: PRODUCT_COLORS["sob-demanda"].accent },
    { key: "sentinel", label: tr.products.sentinel.name, desc: tr.products.sentinel.headerDesc, color: PRODUCT_COLORS.sentinel.accent },
  ];

  return (
    <>
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, height: 72, display: "flex", alignItems: "center",
      justifyContent: "space-between", padding: "0 48px",
      background: solidHeader ? "rgba(15,17,43,0.97)" : "transparent",
      backdropFilter: solidHeader ? "blur(16px)" : "none",
      borderBottom: solidHeader ? `1px solid ${T.borderLight}` : "1px solid transparent",
      transition: "all 0.35s ease", zIndex: 100,
    }}>
      <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }} onClick={() => nav("home")}>
        <JustLogo height={36} />
      </div>

      {/* Desktop nav - hidden on mobile via CSS */}
      <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 2 }}>
        <button style={lnk("home")} onClick={() => nav("home")}>{tr.nav.home}</button>
        <div style={{ position: "relative" }} onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
          <button style={lnk("solucoes")}>{tr.nav.products} &#9662;</button>
          {dropOpen && (
            <div style={{
              position: "absolute", top: "100%", left: -20, background: "rgba(15,17,43,0.98)",
              border: `1px solid ${T.borderLight}`, borderRadius: 14, padding: "12px 8px",
              minWidth: 320, backdropFilter: "blur(20px)", boxShadow: "0 20px 60px rgba(0,0,0,0.4)", zIndex: 200,
            }}>
              {solucoes.map((s) => (
                <button key={s.key} onClick={() => nav(s.key)} style={{
                  display: "flex", alignItems: "center", gap: 12, width: "100%", textAlign: "left",
                  padding: "10px 14px", background: "none", border: "none", color: T.textLight,
                  fontSize: 14, cursor: "pointer", borderRadius: 10, transition: "background 0.15s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "none"}
                >
                  <ProductIcon productKey={s.key} size={32} showCard />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13, color: T.textLight }}>{s.label}</div>
                    <div style={{ fontSize: 11, color: T.textMuted, marginTop: 2, fontWeight: 400 }}>{s.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
        <button style={lnk("stack")} onClick={() => nav("stack")}>{tr.nav.technology}</button>
        <button style={lnk("cases")} onClick={() => nav("cases")}>{tr.nav.cases}</button>
        <button style={lnk("conteudos")} onClick={() => nav("conteudos")}>{tr.nav.content}</button>
        <button style={lnk("sobre")} onClick={() => nav("sobre")}>{tr.nav.about}</button>
        <LangToggle lang={lang} setLang={setLang} />
        <Btn onClick={() => nav("contato")} size="sm" style={{ marginLeft: 8 }}>{tr.nav.contact}</Btn>
      </nav>

      {/* Mobile hamburger - shown on mobile via CSS */}
      <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} style={{
        display: "none", alignItems: "center", justifyContent: "center",
        background: "none", border: "none", cursor: "pointer", padding: 8,
        color: T.textLight, width: 40, height: 40,
      }}>
        {mobileOpen ? (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        )}
      </button>
    </header>

    {/* Mobile nav overlay */}
    {mobileOpen && (
      <div className="mobile-nav-overlay" style={{
        position: "fixed", top: 72, left: 0, right: 0, bottom: 0,
        background: "rgba(15,17,43,0.98)", backdropFilter: "blur(20px)",
        zIndex: 99, display: "flex", flexDirection: "column",
        padding: "24px 24px", overflowY: "auto",
      }}>
        <button onClick={() => nav("home")} style={{ ...lnk("home"), fontSize: 16, padding: "14px 0", textAlign: "left", width: "100%" }}>{tr.nav.home}</button>
        <div style={{ borderTop: `1px solid ${T.borderLight}`, margin: "4px 0" }} />
        <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(242,244,248,0.3)", textTransform: "uppercase", letterSpacing: "0.06em", padding: "12px 0 4px" }}>{tr.nav.products}</div>
        {solucoes.map((s) => (
          <button key={s.key} onClick={() => nav(s.key)} style={{
            display: "flex", alignItems: "center", gap: 10, width: "100%", textAlign: "left",
            padding: "12px 8px", background: "none", border: "none", color: T.textLight,
            fontSize: 15, cursor: "pointer", borderRadius: 8,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
            {s.label}
          </button>
        ))}
        <div style={{ borderTop: `1px solid ${T.borderLight}`, margin: "8px 0" }} />
        <button onClick={() => nav("stack")} style={{ ...lnk("stack"), fontSize: 16, padding: "14px 0", textAlign: "left", width: "100%" }}>{tr.nav.technology}</button>
        <button onClick={() => nav("cases")} style={{ ...lnk("cases"), fontSize: 16, padding: "14px 0", textAlign: "left", width: "100%" }}>{tr.nav.cases}</button>
        <button onClick={() => nav("conteudos")} style={{ ...lnk("conteudos"), fontSize: 16, padding: "14px 0", textAlign: "left", width: "100%" }}>{tr.nav.content}</button>
        <button onClick={() => nav("sobre")} style={{ ...lnk("sobre"), fontSize: 16, padding: "14px 0", textAlign: "left", width: "100%" }}>{tr.nav.about}</button>
        <div style={{ marginTop: 16, marginBottom: 8 }}>
          <Btn onClick={() => nav("contato")} style={{ width: "100%", textAlign: "center" }}>{tr.nav.contact}</Btn>
        </div>
        <LangToggle mobile lang={lang} setLang={setLang} />
      </div>
    )}
    </>
  );
}

// ========================================
// FOOTER
// ========================================
export function Footer({ setPage, lang }) {
  const tr = (T18N[lang] || T18N["pt-BR"]).footer;
  const trProducts = (T18N[lang] || T18N["pt-BR"]).products;
  const trNav = (T18N[lang] || T18N["pt-BR"]).nav;
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const fl = { color: "rgba(242,244,248,0.4)", fontSize: 13, cursor: "pointer", background: "none", border: "none", display: "block", lineHeight: 2.4, transition: "color 0.2s" };
  return (
    <footer style={{ background: T.footerBg, padding: "80px 48px 40px", borderTop: `1px solid ${T.borderLight}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
        <div>
          <div style={{ marginBottom: 20 }}>
            <JustLogo height={30} />
          </div>
          <p style={{ fontSize: 13, color: "rgba(242,244,248,0.35)", lineHeight: 1.7, maxWidth: 260 }}>
            {tr.tagline}
          </p>
        </div>
        <div>
          <h4 style={{ color: "rgba(242,244,248,0.6)", fontSize: 11, fontWeight: 600, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>{tr.productsLabel}</h4>
          {[["beneficios"],["frotas"],["banking"],["despesas"],["antecipacao"],["sob-demanda"],["sentinel"]].map(([k]) =>
            <button key={k} style={{ ...fl, display: "flex", alignItems: "center", gap: 8 }} onClick={() => nav(k)}>
              <ProductIcon productKey={k} size={18} />
              {trProducts[k]?.name || k}
            </button>
          )}
        </div>
        <div>
          <h4 style={{ color: "rgba(242,244,248,0.6)", fontSize: 11, fontWeight: 600, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>{tr.companyLabel}</h4>
          {[["sobre", trNav.about],["cases","Cases"],["stack", trNav.technology],["conteudos", trNav.content],["contato", tr.contactLabel]].map(([k,l]) =>
            <button key={k} style={fl} onClick={() => nav(k)}>{l}</button>
          )}
        </div>
        <div>
          <h4 style={{ color: "rgba(242,244,248,0.6)", fontSize: 11, fontWeight: 600, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>{tr.contactLabel}</h4>
          <a href="mailto:contato@wearejust.it" style={{ ...fl, textDecoration: "none" }}>contato@wearejust.it</a>
          <span style={{ ...fl, cursor: "default", lineHeight: 1.6, marginBottom: 8 }}>{"Condomínio Praça Capital"}{"\n"}{"Av. José Rocha Bomfim, 214 - Edifício Madri"}{"\n"}{"Campinas - SP"}</span>
          <span style={{ ...fl, cursor: "default", lineHeight: 1.6, marginBottom: 10 }}>{"Cubo Itaú"}{"\n"}{"Alameda Vicente Pinzón, 54 - Vila Olímpia"}{"\n"}{"São Paulo - SP"}</span>
          <a href="https://www.linkedin.com/company/wearejust-it" target="_blank" rel="noopener noreferrer" style={{ ...fl, textDecoration: "none" }}>LinkedIn &rarr;</a>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "40px auto 0", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ display: "flex", gap: 48, marginBottom: 24, flexWrap: "wrap" }}>
          <div>
            <p style={{ fontSize: 10, color: "rgba(242,244,248,0.2)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, fontWeight: 600 }}>{tr.ecosystem}</p>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <img src={`${import.meta.env.BASE_URL}logos/cubo-itau.png`} alt="Cubo Itaú" style={{ height: 24, width: "auto", opacity: 0.2 }} />
              <img src={`${import.meta.env.BASE_URL}logos/abfintechs.png`} alt="ABFintechs" style={{ height: 16, width: "auto", opacity: 0.2 }} />
              <img src={`${import.meta.env.BASE_URL}logos/abstartups.png`} alt="ABStartups" style={{ height: 18, width: "auto", opacity: 0.2, filter: "brightness(0) invert(1)" }} />
              <img src={`${import.meta.env.BASE_URL}logos/finscale.svg`} alt="Finscale" style={{ height: 14, width: "auto", opacity: 0.2 }} />
            </div>
          </div>
          <div>
            <p style={{ fontSize: 10, color: "rgba(242,244,248,0.2)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, fontWeight: 600 }}>{tr.techPartners}</p>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <img src={`${import.meta.env.BASE_URL}logos/aws-partner.png`} alt="AWS" style={{ height: 20, width: "auto", opacity: 0.2, filter: "brightness(0) invert(1)" }} />
              <img src={`${import.meta.env.BASE_URL}logos/swap.svg`} alt="Swap" style={{ height: 16, width: "auto", opacity: 0.2, filter: "invert(1)" }} />
              <img src={`${import.meta.env.BASE_URL}logos/evertec.svg`} alt="Evertec" style={{ height: 16, width: "auto", opacity: 0.2 }} />
              <img src={`${import.meta.env.BASE_URL}logos/fiserv.png`} alt="Fiserv" style={{ height: 16, width: "auto", opacity: 0.2, filter: "brightness(0) invert(1)" }} />
              <img src={`${import.meta.env.BASE_URL}logos/linx.png`} alt="Linx" style={{ height: 16, width: "auto", opacity: 0.2, filter: "brightness(0) invert(1)" }} />
            </div>
          </div>
        </div>
        <p style={{ fontSize: 11, color: "rgba(242,244,248,0.18)", lineHeight: 1.7, marginBottom: 24 }}>{tr.legal}</p>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          <p style={{ fontSize: 12, color: "rgba(242,244,248,0.2)" }}>{tr.rights}</p>
          <button
            onClick={() => nav("privacidade")}
            style={{
              fontSize: 12,
              color: "rgba(242,244,248,0.35)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = T.textLight; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(242,244,248,0.35)"; }}
          >
            {tr.privacy}
          </button>
        </div>
      </div>
    </footer>
  );
}

// ========================================
