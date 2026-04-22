import React from "react";
import { Btn, EcosystemAnimation, HeroOrbital, Metric, ProductIcon, ProductMockup, PRODUCT_COLORS, Reveal, SectionTitle, T, T18N, Tag } from "../site/shared.jsx";

// HOME PAGE v2 - Platform positioning
// ========================================
export default function HomePage({ setPage, lang }) {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const tr = (T18N[lang] || T18N["pt-BR"]).home;
  const trProd = (T18N[lang] || T18N["pt-BR"]).products;
  const justPillars = lang === "en" ? [
    ["01", "Weeks, not months.", "A stack that is 70% to 80% ready and already running in production. You bring the brand, journey and rules. Go live in weeks, not years."],
    ["02", "Freedom by design.", "Multi-provider architecture. Change provider, BaaS partner or business rule without rebuilding the product."],
    ["03", "Your product. Not ours.", "We design the journey, rules and visual layer around your business logic. The code is ours; the product is yours."],
  ] : [
    ["01", "Semanas, não meses.", "Stack com 70 a 80% pronta e em produção. Você entra com marca, jornada e regras. Go-live em semanas, não anos."],
    ["02", "Liberdade por design.", "Arquitetura multi-provider. Troque de provedor, BaaS ou regra de negócio, sem reescrever o produto."],
    ["03", "Seu produto. Não o nosso.", "Desenhamos jornada, regras e visual a partir da sua lógica de negócio. O código é nosso; o produto é seu."],
  ];

  // steps data removed - now inline in Process timeline section

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="section-hero" style={{
        background: `linear-gradient(135deg, ${T.primary} 54%, #263450 100%)`,
        borderBottom: `1px solid ${T.borderLight}`,
        padding: "140px 48px 80px", position: "relative", overflow: "hidden",
      }}>
        {/* Ambient glow effects */}
        <div style={{ position: "absolute", top: "15%", right: "10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(108,92,231,0.07), transparent 70%)", borderRadius: "50%", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(244,85,70,0.05), transparent 70%)", borderRadius: "50%", filter: "blur(60px)" }} />

        <div className="hero-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", position: "relative", zIndex: 2 }}>
          <div>
            <Reveal>
              <div className="hero-eyebrow">
                <Tag>{tr.heroTag}</Tag>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="hero-title" style={{ fontSize: 70, fontWeight: 800, color: T.textLight, lineHeight: 1.06, letterSpacing: "-0.035em", margin: "20px 0" }}>
                {tr.heroLine1}<br />{tr.heroLine2}<br /><span style={{ color: "rgba(242,244,248,0.68)" }}>{tr.heroLine3}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.25}>
              <p style={{ fontSize: 18, color: T.textMutedLight, lineHeight: 1.6, maxWidth: 480, marginBottom: 36 }}>
                {tr.heroSubtitle}
              </p>
              <div className="flow-steps-row" style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 36, flexWrap: "wrap" }}>
                {[{ num: "1", label: tr.step1 }, { num: "2", label: tr.step2 }].map((step, i) => (
                  <React.Fragment key={step.label}>
                    {i > 0 && (
                      <div className="flow-arrow-icon" style={{ display: "flex", alignItems: "center", padding: "0 6px", color: "rgba(242,244,248,0.15)" }}>
                        <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
                          <path d="M1 7h20M17 1l5 6-5 6" stroke="rgba(242,244,248,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                    <div className="flow-step-item" style={{
                      display: "flex", alignItems: "center", gap: 10,
                      padding: "8px 14px", borderRadius: 24,
                      background: "transparent",
                      border: "1px solid rgba(255,255,255,0.14)",
                    }}>
                      <span className="step-num-box" style={{
                        width: 18, height: 18, borderRadius: "50%",
                        background: "transparent",
                        border: "1px solid rgba(255,255,255,0.14)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 10, fontWeight: 600, color: "rgba(242,244,248,0.68)", fontFamily: "ui-monospace, monospace",
                      }}>{step.num}</span>
                      <span className="step-label-text" style={{ fontSize: 13, fontWeight: 500, color: "rgba(242,244,248,0.68)", letterSpacing: "0.01em" }}>{step.label}</span>
                    </div>
                  </React.Fragment>
                ))}
                <div className="flow-arrow-icon" style={{ display: "flex", alignItems: "center", padding: "0 6px", color: "rgba(242,244,248,0.15)" }}>
                  <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
                    <path d="M1 7h20M17 1l5 6-5 6" stroke="rgba(242,244,248,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div
                  className="flow-step-lance"
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "8px 14px", borderRadius: 24,
                    background: "rgba(244,85,70,0.06)",
                    border: `1px solid ${T.cta}`,
                    boxShadow: "none",
                    cursor: "pointer", position: "relative", overflow: "hidden",
                  }}
                  onMouseEnter={() => {
                    const el = document.getElementById("orbitalWrapper");
                    if (el) el.classList.add("lance-active");
                  }}
                  onMouseLeave={() => {
                    const el = document.getElementById("orbitalWrapper");
                    if (el) el.classList.remove("lance-active");
                  }}
                >
                  <span className="step-num-box" style={{
                    width: 18, height: 18, borderRadius: "50%",
                    background: T.cta,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 600, color: "#fff", fontFamily: "ui-monospace, monospace",
                  }}>3</span>
                  <span className="step-label-text" style={{ fontSize: 13, fontWeight: 500, color: T.textLight, letterSpacing: "0.01em", position: "relative", zIndex: 1 }}>{tr.step3}</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="hero-cta-row" style={{ display: "flex", gap: 12 }}>
                <Btn onClick={() => nav("contato")}>{tr.cta1}</Btn>
                <Btn primary={false} onClick={() => nav("cases")}>{tr.cta2}</Btn>
              </div>
            </Reveal>
          </div>

          {/* Hero visual: Orbital product icons */}
          <Reveal delay={0.2} direction="right">
            <HeroOrbital trProd={trProd} />
          </Reveal>
        </div>
      </section>

      {/* ===== SOCIAL PROOF BAR ===== */}
      <section className="section-social-proof" style={{ background: T.primary, borderTop: `1px solid ${T.borderLight}`, borderBottom: `1px solid ${T.borderLight}`, padding: "28px 48px" }}>
        <Reveal>
          <div className="social-proof-bar" style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", fontSize: 11, fontWeight: 500, color: "rgba(242,244,248,0.25)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>
              {tr.ecosystemLabel}
            </div>
            <div className="social-logos" style={{ display: "flex", gap: 40, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
              <img className="partner-logo" src={`${import.meta.env.BASE_URL}logos/finscale.svg`} alt="Finscale" style={{ height: 28, width: "auto", opacity: 0.3, transition: "opacity 0.3s" }} />
              <img className="partner-logo" src={`${import.meta.env.BASE_URL}logos/abfintechs.png`} alt="ABFintechs" style={{ height: 32, width: "auto", opacity: 0.3, transition: "opacity 0.3s" }} />
              <img className="partner-logo" src={`${import.meta.env.BASE_URL}logos/abstartups.png`} alt="ABStartups" style={{ height: 38, width: "auto", opacity: 0.55, filter: "brightness(0) invert(1)", transition: "opacity 0.3s" }} />
              <img className="partner-logo" src={`${import.meta.env.BASE_URL}logos/cubo-itau.png`} alt="Cubo Itaú" style={{ height: 48, width: "auto", opacity: 0.3, transition: "opacity 0.3s" }} />
              <img className="partner-logo" src={`${import.meta.env.BASE_URL}logos/aws-partner.png`} alt="AWS Partner" style={{ height: 42, width: "auto", opacity: 0.55, filter: "brightness(0) invert(1)", transition: "opacity 0.3s" }} />
              <img className="partner-logo" src={`${import.meta.env.BASE_URL}logos/fiserv.png`} alt="Fiserv" style={{ height: 32, width: "auto", opacity: 0.55, filter: "brightness(0) invert(1)", transition: "opacity 0.3s" }} />
              <img className="partner-logo" src={`${import.meta.env.BASE_URL}logos/linx.png`} alt="Linx" style={{ height: 34, width: "auto", opacity: 0.55, filter: "brightness(0) invert(1)", transition: "opacity 0.3s" }} />
              <img className="partner-logo" src={`${import.meta.env.BASE_URL}logos/swap.svg`} alt="Swap" style={{ height: 32, width: "auto", opacity: 0.3, filter: "invert(1)", transition: "opacity 0.3s" }} />
              <img className="partner-logo" src={`${import.meta.env.BASE_URL}logos/evertec.svg`} alt="Evertec" style={{ height: 32, width: "auto", opacity: 0.3, transition: "opacity 0.3s" }} />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===== WHY JUST ===== */}
      <section className="section-why-just" style={{ background: T.primary, padding: "120px 48px", borderBottom: `1px solid ${T.borderLight}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ marginBottom: 72 }}>
              <div style={{ marginBottom: 28 }}>
                <Tag>{tr.deparaTag}</Tag>
              </div>
              <h2 className="why-just-title" style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.035em", color: T.textLight, maxWidth: 980 }}>
                {lang === "en" ? "What changes" : "O que muda"}<br />
                <span style={{ color: "rgba(242,244,248,0.68)" }}>{lang === "en" ? "when you build with us." : "operando com a gente."}</span>
              </h2>
            </div>
          </Reveal>

          <div className="just-pillars-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", borderTop: `1px solid ${T.borderLight}`, borderBottom: `1px solid ${T.borderLight}` }}>
            {justPillars.map(([number, title, body], i) => (
              <Reveal key={number} delay={i * 0.08}>
                <div className="just-pillar" style={{
                  minHeight: 300,
                  padding: "36px 28px 40px",
                  borderRight: i < justPillars.length - 1 ? `1px solid ${T.borderLight}` : "none",
                  position: "relative",
                }}>
                  <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: T.cta, letterSpacing: "0.1em", marginBottom: 42 }}>
                    § {number}
                  </div>
                  <h3 style={{ fontSize: 36, lineHeight: 1.05, letterSpacing: "-0.035em", color: T.textLight, fontWeight: 800, marginBottom: 28 }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(242,244,248,0.68)", maxWidth: 360 }}>
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS BENTO GRID ===== */}
      <section className="section-products" style={{ background: T.primary, padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle tag={tr.productsTag} title={tr.productsTitle} subtitle={tr.productsSubtitle} />

          <div className="bento-grid">
            {[
              { key: "beneficios", size: "wide", label: "JUST Benefits", title: "Benefícios flexíveis com\narranjo customizável", badge: "Arranjo aberto, fechado ou híbrido", color: PRODUCT_COLORS.beneficios.accent, colorLight: "#A29BFE" },
              { key: "frotas", size: "narrow", label: "JUST Fleet", title: "Controle financeiro\npor veículo", badge: "Abastecimento + pedágio com integrações nativas", color: PRODUCT_COLORS.frotas.accent, colorLight: "#55EFC4" },
              { key: "banking", size: "narrow", label: "JUST Banking", title: "Conta, cartão e PIX\ncom sua marca", badge: "Conta + cartão + PIX sobre BaaS regulado", color: PRODUCT_COLORS.banking.accent, colorLight: "#74B9FF" },
              { key: "despesas", size: "wide", label: "JUST Expense", title: "Cartões corporativos com\npolíticas inteligentes", badge: "Políticas inteligentes + conciliação automática", color: PRODUCT_COLORS.despesas.accent, colorLight: "#FAB1A0" },
              { key: "antecipacao", size: "wide", label: "JUST Credit", title: "Produtos de crédito\nsob medida", badge: "Private label, antecipação e recebíveis", color: PRODUCT_COLORS.antecipacao.accent, colorLight: "#FFEAA7" },
              { key: "sob-demanda", size: "narrow", label: "JUST Custom", title: "Produto sob medida?\nConstruimos.", badge: "Sob medida", color: PRODUCT_COLORS["sob-demanda"].accent, colorLight: "#B2BEC3" },
            ].map((card, i) => (
              <Reveal key={card.key} delay={i * 0.06}>
                <div
                  className="bento-card"
                  data-size={card.size}
                  onClick={() => nav(card.key)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Visual area */}
                  <div style={{
                    position: "relative", flex: 1, minHeight: 200,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    overflow: "hidden", padding: 32,
                    background: `linear-gradient(145deg, ${card.color}0F, ${card.color}05)`,
                  }}>
                    {/* Neon icon card */}
                    <div className="bento-icon-card" style={{
                      position: "absolute", zIndex: 2, top: 20, right: card.size === "wide" ? 24 : 20,
                      width: 44, height: 44, borderRadius: 12,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: `linear-gradient(145deg, ${card.color}26, rgba(10,12,31,0.9))`,
                      border: `1px solid ${card.color}4D`,
                      boxShadow: `0 0 16px ${card.color}1A`,
                      backdropFilter: "blur(4px)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}>
                      <ProductIcon productKey={card.key} size={24} />
                    </div>
                    {/* Mockup frame */}
                    <div style={{
                      position: "relative", zIndex: 1, width: "100%",
                      maxWidth: card.size === "wide" ? 480 : 240,
                      aspectRatio: card.size === "wide" ? "2/1" : "16/10",
                      borderRadius: 10,
                      border: "1px solid rgba(255,255,255,0.06)",
                      background: "rgba(0,0,0,0.35)",
                      padding: 14, display: "flex", flexDirection: "column", gap: 8,
                      backdropFilter: "blur(8px)",
                    }}>
                      <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
                        {[1,2,3].map(d => <div key={d} style={{ width: 6, height: 6, borderRadius: "50%", background: card.color, opacity: 0.4 }} />)}
                      </div>
                      <div style={{ height: 5, width: card.size === "wide" ? "45%" : "55%", borderRadius: 3, background: card.color, opacity: 0.15 }} />
                      {card.size === "wide" ? (
                        <>
                          <div style={{ display: "flex", gap: 6, flex: 1 }}>
                            <div style={{ flex: 1, borderRadius: 6, background: card.color, opacity: 0.08 }} />
                            <div style={{ flex: 1.5, borderRadius: 6, background: card.color, opacity: 0.08 }} />
                          </div>
                          <div style={{ height: 5, width: "50%", borderRadius: 3, background: card.color, opacity: 0.15 }} />
                        </>
                      ) : (
                        <div style={{ flex: 1, borderRadius: 6, background: card.color, opacity: 0.08 }} />
                      )}
                    </div>
                    {/* Stat badge */}
                    <div style={{
                      position: "absolute", zIndex: 2, bottom: 16, left: card.size === "wide" ? 20 : 16,
                      padding: "6px 12px", borderRadius: 8, fontSize: 11, fontWeight: 600,
                      background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.08)",
                      backdropFilter: "blur(4px)", whiteSpace: "nowrap", color: card.colorLight,
                    }}>
                      <span style={{ opacity: 0.5 }}>&#9679;</span> {card.badge}
                    </div>
                  </div>
                  {/* Content area */}
                  <div style={{
                    padding: "24px 28px 28px", display: "flex",
                    justifyContent: "space-between", alignItems: "flex-end", gap: 16,
                  }}>
                    <div>
                      <div style={{
                        display: "inline-flex", alignItems: "center", gap: 7,
                        fontSize: 12, fontWeight: 600, marginBottom: 10,
                        color: card.color, opacity: 0.7,
                      }}>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: card.color }} />
                        {card.label}
                      </div>
                      <div style={{
                        fontSize: card.size === "wide" ? 22 : 20, fontWeight: 700,
                        color: "#f2f4f8", lineHeight: 1.3, letterSpacing: "-0.01em",
                        whiteSpace: "pre-line",
                      }}>
                        {card.title}
                      </div>
                    </div>
                    <div className="bento-arrow-btn" style={{
                      width: 40, height: 40, borderRadius: "50%",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, transition: "all 0.3s ease",
                    }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M10 5l3 3-3 3" stroke="rgba(255,255,255,0.35)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      
      {/* ===== CARD ARRANGEMENTS ===== */}
      <section className="section-cards" style={{ background: T.darkAlt, padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle tag={tr.cardsTag} title={<>{tr.cardsTitle}<br /><span style={{ color: "rgba(242,244,248,0.68)" }}>{tr.cardsGradient}</span></>} subtitle={tr.cardsSubtitle} center />

          <div className="cards-grid">
            {/* LEFT: Bandeirado */}
            <Reveal>
              <div className="card-option">
                <div className="card-visual" style={{ background: "linear-gradient(160deg, rgba(108,92,231,0.04), transparent)" }}>
                  <div className="physical-card bandeirado">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div className="card-chip-gold"><div className="chip-lines" /></div>
                      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" style={{ opacity: 0.3 }}><path d="M2 2h5v4H2zM8 2h5v4H8zM2 8h5v4H2zM8 8h5v4H8z" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8"/></svg>
                    </div>
                    <div className="card-number">&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 4832</div>
                    <div className="card-bottom">
                      <div>
                        <div className="card-holder">Titular</div>
                        <div className="card-holder-name">MARIA C SANTOS</div>
                      </div>
                      <div className="mc-logo">
                        <div className="mc-circle red" />
                        <div className="mc-circle yellow" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-info">
                  <div className="card-type-label" style={{ color: "#6C5CE7" }}>
                    <span className="dot" style={{ background: "#6C5CE7" }} />
                    {tr.cardsOpenLabel}
                  </div>
                  <h3>{tr.cardsOpenTitle}</h3>
                  <ul className="features-list">
                    {tr.cardsOpenFeatures.map((f, i) => (
                      <li key={i}>
                        <span className="check" style={{ background: "rgba(108,92,231,0.1)", border: "1px solid rgba(108,92,231,0.25)" }}>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 5l2 2 3.5-3.5" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Center divider */}
            <div className="center-divider">
              <div className="divider-line" />
              <div className="divider-badge">{tr.cardsOr}</div>
              <div className="divider-line" />
            </div>

            {/* RIGHT: Private Label */}
            <Reveal delay={0.1}>
              <div className="card-option">
                <div className="card-visual" style={{ background: "linear-gradient(160deg, rgba(0,184,148,0.04), transparent)" }}>
                  <div className="physical-card privatelabel">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div className="card-chip-gold"><div className="chip-lines" /></div>
                      <div className="pl-brand">
                        <div className="pl-brand-icon">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L2 5.5v5L8 14l6-3.5v-5L8 2z" stroke="#00B894" strokeWidth="1.5" fill="none" opacity="0.8" strokeLinejoin="round"/><circle cx="8" cy="8" r="2" stroke="#55EFC4" strokeWidth="1" opacity="0.6"/></svg>
                        </div>
                        <span className="pl-brand-text">SuaMarca</span>
                      </div>
                    </div>
                    <div className="card-number">&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 7291</div>
                    <div className="card-bottom">
                      <div>
                        <div className="card-holder">Titular</div>
                        <div className="card-holder-name">JOAO P OLIVEIRA</div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3L3 7v6l7 4 7-4V7l-7-4z" stroke="rgba(0,184,148,0.4)" strokeWidth="1.3" fill="none" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-info">
                  <div className="card-type-label" style={{ color: "#00B894" }}>
                    <span className="dot" style={{ background: "#00B894" }} />
                    {tr.cardsClosedLabel}
                  </div>
                  <h3>{tr.cardsClosedTitle}</h3>
                  <ul className="features-list">
                    {tr.cardsClosedFeatures.map((f, i) => (
                      <li key={i}>
                        <span className="check" style={{ background: "rgba(0,184,148,0.1)", border: "1px solid rgba(0,184,148,0.25)" }}>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 5l2 2 3.5-3.5" stroke="#00B894" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Hybrid section */}
          <Reveal delay={0.15}>
            <div className="hybrid-section">
              <div className="hybrid-inner">
                <div className="hybrid-layout">
                  <div className="hybrid-content">
                    <div className="hybrid-exclusive-tag">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1l1.76 3.57L13 5.27l-3 2.93.71 4.13L7 10.27l-3.71 2.06.71-4.13-3-2.93 4.24-.7L7 1z" fill="#f45546" opacity="0.9"/></svg>
                      {tr.cardsPioneer}
                    </div>
                    <h3 className="hybrid-title">
                      {tr.cardsHybridTitle.split("\n").map((l, i) => <React.Fragment key={i}>{l}{i === 0 && <br />}</React.Fragment>)}<span className="gradient-text">{tr.cardsHybridGradient}</span>
                    </h3>
                    <p className="hybrid-description">
                      {tr.cardsHybridDesc}
                    </p>
                    <div className="hybrid-features">
                      {tr.hybridFeatures.map((hf, i) => (
                        <div key={i} className="hybrid-feature">
                          <div className={`hybrid-feature-icon ${["purple","green","red"][i]}`}>
                            {i === 0 && <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2v8" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round"/></svg>}
                            {i === 1 && <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2v8" stroke="#00B894" strokeWidth="1.5" strokeLinecap="round"/></svg>}
                            {i === 2 && <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="#f45546" strokeWidth="1.5" strokeLinecap="round"/></svg>}
                          </div>
                          <span className="hybrid-feature-text"><strong>{hf.bold}</strong>{hf.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="hybrid-visual">
                    <div className="hybrid-card-stack">
                      {/* Back card: bandeirado */}
                      <div className="physical-card bandeirado">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                          <div className="card-chip-gold"><div className="chip-lines" /></div>
                        </div>
                        <div className="card-number">&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 4832</div>
                        <div className="card-bottom">
                          <div>
                            <div className="card-holder">Titular</div>
                            <div className="card-holder-name">MARIA C SANTOS</div>
                          </div>
                          <div className="mc-logo">
                            <div className="mc-circle red" />
                            <div className="mc-circle yellow" />
                          </div>
                        </div>
                      </div>
                      {/* Front card: private label */}
                      <div className="physical-card privatelabel">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                          <div className="card-chip-gold"><div className="chip-lines" /></div>
                          <div className="pl-brand">
                            <div className="pl-brand-icon">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L2 5.5v5L8 14l6-3.5v-5L8 2z" stroke="#00B894" strokeWidth="1.5" fill="none" opacity="0.8" strokeLinejoin="round"/><circle cx="8" cy="8" r="2" stroke="#55EFC4" strokeWidth="1" opacity="0.6"/></svg>
                            </div>
                            <span className="pl-brand-text">SuaMarca</span>
                          </div>
                        </div>
                        <div className="card-number">&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 7291</div>
                        <div className="card-bottom">
                          <div>
                            <div className="card-holder">Titular</div>
                            <div className="card-holder-name">JOAO P OLIVEIRA</div>
                          </div>
                          <div style={{ display: "flex", alignItems: "center" }}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3L3 7v6l7 4 7-4V7l-7-4z" stroke="rgba(0,184,148,0.4)" strokeWidth="1.3" fill="none" strokeLinejoin="round"/></svg>
                          </div>
                        </div>
                      </div>
                      {/* Merge glow */}
                      <div className="hybrid-merge-badge">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                          <path d="M7 11h8" stroke="#f45546" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M11 7v8" stroke="#f45546" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section-process" style={{ background: T.darkAlt, padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <Reveal>
              <Tag>{tr.processTag}</Tag>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 style={{ fontSize: 44, fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.025em", color: T.textLight }}>
                {tr.processTitle}<br /><span style={{ color: "rgba(242,244,248,0.68)" }}>{tr.processGradient}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontSize: 17, color: T.textMutedLight, lineHeight: 1.6, marginTop: 16, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
                {tr.processSubtitle}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
          <div className="process-timeline">

            {/* Step 1: Discovery */}
              <div className="process-step">
                <div className="step-indicator">
                  <div className="step-number" style={{ background: "#1a1120", border: "1.5px solid rgba(244,85,70,0.35)", color: "#f45546", boxShadow: "inset 0 0 12px rgba(244,85,70,0.08)" }}>01</div>
                </div>
                <div className="step-content">
                  <h3 className="step-title">{tr.process1Title}</h3>
                  <p className="step-desc">{tr.process1Desc}</p>
                  <div className="step-details">
                    <span className="step-tag" style={{ background: "rgba(244,85,70,0.06)", color: "rgba(244,85,70,0.6)" }}>Modelo de negocio</span>
                    <span className="step-tag" style={{ background: "rgba(244,85,70,0.06)", color: "rgba(244,85,70,0.6)" }}>Requisitos técnicos</span>
                    <span className="step-tag" style={{ background: "rgba(244,85,70,0.06)", color: "rgba(244,85,70,0.6)" }}>Cronograma</span>
                  </div>
                </div>
                <div className="step-visual" style={{ background: "linear-gradient(160deg, rgba(244,85,70,0.03), transparent)" }}>
                  <div className="discovery-visual">
                    <div className="disc-question">
                      <div className="disc-dot" style={{ background: "rgba(244,85,70,0.5)" }} />
                      <div className="disc-bar" style={{ width: "65%", background: "#f45546" }} />
                    </div>
                    <div className="disc-answer">
                      <div className="disc-pill" style={{ background: "rgba(244,85,70,0.08)", border: "1px solid rgba(244,85,70,0.2)", color: "rgba(244,85,70,0.7)" }}>Benefícios</div>
                      <div className="disc-pill" style={{ background: "rgba(108,92,231,0.08)", border: "1px solid rgba(108,92,231,0.2)", color: "rgba(108,92,231,0.7)" }}>Híbrido</div>
                    </div>
                    <div className="disc-question">
                      <div className="disc-dot" style={{ background: "rgba(244,85,70,0.5)" }} />
                      <div className="disc-bar" style={{ width: "80%", background: "#f45546" }} />
                    </div>
                    <div className="disc-answer">
                      <div className="disc-pill" style={{ background: "rgba(0,184,148,0.08)", border: "1px solid rgba(0,184,148,0.2)", color: "rgba(0,184,148,0.7)" }}>Swap (BaaS)</div>
                      <div className="disc-pill" style={{ background: "rgba(0,184,148,0.08)", border: "1px solid rgba(0,184,148,0.2)", color: "rgba(0,184,148,0.7)" }}>Sitef</div>
                    </div>
                    <div className="disc-question">
                      <div className="disc-dot" style={{ background: "rgba(244,85,70,0.5)" }} />
                      <div className="disc-bar" style={{ width: "50%", background: "#f45546" }} />
                    </div>
                  </div>
                </div>
              </div>

            {/* Step 2: Arquitetura */}
              <div className="process-step">
                <div className="step-indicator">
                  <div className="step-number" style={{ background: "#120f22", border: "1.5px solid rgba(108,92,231,0.35)", color: "#6C5CE7", boxShadow: "inset 0 0 12px rgba(108,92,231,0.08)" }}>02</div>
                </div>
                <div className="step-content">
                  <h3 className="step-title">{tr.process2Title}</h3>
                  <p className="step-desc">{tr.process2Desc}</p>
                  <div className="step-details">
                    <span className="step-tag" style={{ background: "rgba(108,92,231,0.06)", color: "rgba(108,92,231,0.6)" }}>Modulos ativados</span>
                    <span className="step-tag" style={{ background: "rgba(108,92,231,0.06)", color: "rgba(108,92,231,0.6)" }}>Sua marca</span>
                    <span className="step-tag" style={{ background: "rgba(108,92,231,0.06)", color: "rgba(108,92,231,0.6)" }}>Regras de negocio</span>
                  </div>
                </div>
                <div className="step-visual" style={{ background: "linear-gradient(160deg, rgba(108,92,231,0.03), transparent)" }}>
                  <div className="arq-visual">
                    <div className="arq-block arq-block-ready">Core</div>
                    <div className="arq-block arq-block-ready">Cartões</div>
                    <div className="arq-block arq-block-ready">Auth</div>
                    <div className="arq-block arq-block-ready">Regras</div>
                    <div className="arq-block arq-block-config">Custom</div>
                    <div className="arq-block arq-block-ready">App</div>
                  </div>
                  <div className="arq-progress">
                    <div className="arq-bar-bg"><div className="arq-bar-fill" /></div>
                    <span className="arq-label">75% pronto</span>
                  </div>
                </div>
              </div>

            {/* Step 3: Integracao */}
              <div className="process-step">
                <div className="step-indicator">
                  <div className="step-number" style={{ background: "#0c1620", border: "1.5px solid rgba(0,184,148,0.35)", color: "#00B894", boxShadow: "inset 0 0 12px rgba(0,184,148,0.08)" }}>03</div>
                </div>
                <div className="step-content">
                  <h3 className="step-title">{tr.process3Title}</h3>
                  <p className="step-desc">{tr.process3Desc}</p>
                  <div className="step-details">
                    <span className="step-tag" style={{ background: "rgba(0,184,148,0.06)", color: "rgba(0,184,148,0.6)" }}>BaaS conectado</span>
                    <span className="step-tag" style={{ background: "rgba(0,184,148,0.06)", color: "rgba(0,184,148,0.6)" }}>Testes E2E</span>
                    <span className="step-tag" style={{ background: "rgba(0,184,148,0.06)", color: "rgba(0,184,148,0.6)" }}>Homologação</span>
                  </div>
                </div>
                <div className="step-visual" style={{ background: "linear-gradient(160deg, rgba(0,184,148,0.03), transparent)" }}>
                  <div className="int-visual">
                    <div className="int-row">
                      <div className="int-node int-node-just">JUST Core</div>
                      <div className="int-line" />
                      <div className="int-node int-node-provider">Swap</div>
                    </div>
                    <div className="int-row">
                      <div className="int-node int-node-just">Autorizador</div>
                      <div className="int-line" />
                      <div className="int-node int-node-provider">Sitef</div>
                    </div>
                    <div className="int-row">
                      <div className="int-node int-node-just">Gateway</div>
                      <div className="int-line" />
                      <div className="int-node int-node-provider">Rede Compras</div>
                    </div>
                    <div className="int-status">
                      <div className="int-status-dot" />
                      <span className="int-status-text">3/3 integracoes ativas</span>
                    </div>
                  </div>
                </div>
              </div>

            {/* Step 4: Operacao */}
              <div className="process-step">
                <div className="step-indicator">
                  <div className="step-number" style={{ background: "#0e1820", border: "1.5px solid rgba(39,174,96,0.35)", color: "#27AE60", boxShadow: "inset 0 0 12px rgba(39,174,96,0.08)" }}>04</div>
                </div>
                <div className="step-content">
                  <h3 className="step-title">{tr.process4Title}</h3>
                  <p className="step-desc">{tr.process4Desc}</p>
                  <div className="step-details">
                    <span className="step-tag" style={{ background: "rgba(39,174,96,0.06)", color: "rgba(39,174,96,0.6)" }}>Monitoramento</span>
                    <span className="step-tag" style={{ background: "rgba(39,174,96,0.06)", color: "rgba(39,174,96,0.6)" }}>Suporte</span>
                    <span className="step-tag" style={{ background: "rgba(39,174,96,0.06)", color: "rgba(39,174,96,0.6)" }}>Evolução</span>
                  </div>
                </div>
                <div className="step-visual" style={{ background: "linear-gradient(160deg, rgba(39,174,96,0.03), transparent)" }}>
                  <div className="op-visual">
                    <div className="op-topbar">
                      <div className="op-dot" style={{ background: "#27AE60" }} />
                      <div className="op-dot" style={{ background: "rgba(255,255,255,0.15)" }} />
                      <div className="op-dot" style={{ background: "rgba(255,255,255,0.15)" }} />
                    </div>
                    <div className="op-metrics">
                      <div className="op-metric">
                        <div className="op-metric-label">TPV mensal</div>
                        <div className="op-metric-value" style={{ color: "#27AE60" }}>R$2.4M</div>
                      </div>
                      <div className="op-metric">
                        <div className="op-metric-label">Uptime</div>
                        <div className="op-metric-value" style={{ color: "rgba(242,244,248,0.7)" }}>99.9%</div>
                      </div>
                    </div>
                    <div className="op-status-bar">
                      <div className="op-status-dot" />
                      <span className="op-status-text">Todos os servicos operacionais</span>
                    </div>
                  </div>
                </div>
              </div>

          </div>
          </Reveal>

          {/* Summary bar */}
          <Reveal delay={0.5}>
            <div className="process-summary">
              <div className="summary-item">
                <div className="summary-icon" style={{ background: "rgba(244,85,70,0.08)", border: "1px solid rgba(244,85,70,0.15)" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="#f45546" strokeWidth="1.5" /><path d="M9 5v4l3 2" stroke="#f45546" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </div>
                <div className="summary-text">
                  <strong>{tr.summary1}</strong>
                  {tr.summary1sub}
                </div>
              </div>
              <div className="summary-divider" />
              <div className="summary-item">
                <div className="summary-icon" style={{ background: "rgba(0,184,148,0.08)", border: "1px solid rgba(0,184,148,0.15)" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9.5l4 4 8-8" stroke="#00B894" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div className="summary-text">
                  <strong>{tr.summary2}</strong>
                  {tr.summary2sub}
                </div>
              </div>
              <div className="summary-divider" />
              <div className="summary-item">
                <div className="summary-icon" style={{ background: "rgba(108,92,231,0.08)", border: "1px solid rgba(108,92,231,0.15)" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2v14M2 9h14" stroke="#6C5CE7" strokeWidth="1.8" strokeLinecap="round" /></svg>
                </div>
                <div className="summary-text">
                  <strong>{tr.summary3}</strong>
                  {tr.summary3sub}
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ===== METRICS ===== */}
      <section className="section-metrics" style={{ background: T.primary, padding: "80px 48px", borderTop: `1px solid rgba(255,255,255,0.04)`, borderBottom: `1px solid rgba(255,255,255,0.04)` }}>
        <Reveal>
          <div className="metrics-grid" style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
            <div className="metric-item" style={{ textAlign: "center", padding: "32px 24px", position: "relative" }}>
              <div style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-0.03em", color: "rgba(242,244,248,0.85)", lineHeight: 1, marginBottom: 10 }}>
                <span style={{ fontSize: 24, fontWeight: 600, color: "rgba(242,244,248,0.4)", marginRight: 2 }}>R$</span>4<span style={{ fontSize: 24, fontWeight: 600, color: "rgba(242,244,248,0.4)", marginLeft: 2 }}>bi+</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "rgba(242,244,248,0.3)", letterSpacing: "0.03em" }}>{tr.metricsTPV}</div>
            </div>
            <div className="metric-item" style={{ textAlign: "center", padding: "32px 24px", position: "relative", borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-0.03em", color: "rgba(242,244,248,0.85)", lineHeight: 1, marginBottom: 10 }}>
                30<span style={{ fontSize: 24, fontWeight: 600, color: "rgba(242,244,248,0.4)", marginLeft: 2 }}>M+</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "rgba(242,244,248,0.3)", letterSpacing: "0.03em" }}>{tr.metricsTX}</div>
            </div>
            <div className="metric-item" style={{ textAlign: "center", padding: "32px 24px", position: "relative", borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-0.03em", color: "rgba(242,244,248,0.85)", lineHeight: 1, marginBottom: 10 }}>
                500<span style={{ fontSize: 24, fontWeight: 600, color: "rgba(242,244,248,0.4)", marginLeft: 2 }}>k+</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "rgba(242,244,248,0.3)", letterSpacing: "0.03em" }}>{tr.metricsUsers}</div>
            </div>
            <div className="metric-item" style={{ textAlign: "center", padding: "32px 24px", position: "relative", borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-0.03em", color: "rgba(242,244,248,0.85)", lineHeight: 1, marginBottom: 10 }}>
                15<span style={{ fontSize: 24, fontWeight: 600, color: "rgba(242,244,248,0.4)", marginLeft: 2 }}>+</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "rgba(242,244,248,0.3)", letterSpacing: "0.03em" }}>{tr.metricsClients}</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===== CASES PREVIEW ===== */}
      <section className="section-cases" style={{ background: T.darkAlt, padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <Reveal>
              <Tag>{tr.casesTag}</Tag>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 style={{ fontSize: 44, fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.025em", color: T.textLight }}>
                {tr.casesTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontSize: 17, color: T.textMutedLight, lineHeight: 1.6, marginTop: 16, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
                {tr.casesSubtitle}
              </p>
            </Reveal>
          </div>

          <div className="cases-grid">

            {/* Case 1: eFleet */}
            <Reveal delay={0.1}>
              <div className="case-card">
                <div className="case-video">
                  <iframe
                    src="https://www.youtube.com/embed/rngBWxLvsNw?rel=0&modestbranding=1"
                    title="eFleet - Case JUST"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="case-content">
                  <div className="case-products">
                    <span className="product-badge" style={{ background: "rgba(0,184,148,0.08)", color: "#00B894", border: "1px solid rgba(0,184,148,0.15)" }}>
                      <svg viewBox="0 0 44 44" fill="none"><rect x="8" y="10" width="20" height="26" rx="3" stroke="#00B894" strokeWidth="2" fill="none" opacity="0.9" /><rect x="12" y="14" width="12" height="8" rx="1.5" stroke="#55EFC4" strokeWidth="1.5" fill="none" opacity="0.6" /><path d="M28 16h4a3 3 0 0 1 3 3v10a2 2 0 0 1-2 2h-1" stroke="#00B894" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.7" /><circle cx="33" cy="26" r="2" stroke="#00B894" strokeWidth="1.5" fill="none" opacity="0.5" /><line x1="8" y1="36" x2="28" y2="36" stroke="#55EFC4" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" /></svg>
                      Fleet
                    </span>
                  </div>
                  <p className="case-name">eFleet</p>
                  <h3 className="case-headline">Gestão de Frota com abastecimento e pagamento de pedágio</h3>
                  <div className="case-metrics">
                    <span className="case-metric" style={{ background: "rgba(0,184,148,0.06)", color: "#00B894" }}>5+ anos de parceria</span>
                    <span className="case-metric" style={{ background: "rgba(0,184,148,0.06)", color: "#00B894" }}>R$250M+ processamento/ano</span>
                    <span className="case-metric" style={{ background: "rgba(0,184,148,0.06)", color: "#00B894" }}>10+ módulos integrados</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Case 2: Viasoft Pay */}
            <Reveal delay={0.2}>
              <div className="case-card">
                <div className="case-video">
                  <iframe
                    src="https://www.youtube.com/embed/dr_fzCkw7Z8?rel=0&modestbranding=1"
                    title="ViasoftPay - Case JUST"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="case-content">
                  <div className="case-products">
                    <span className="product-badge" style={{ background: "rgba(108,92,231,0.08)", color: "#6C5CE7", border: "1px solid rgba(108,92,231,0.15)" }}>
                      <svg viewBox="0 0 44 44" fill="none"><rect x="5" y="10" width="34" height="24" rx="4" stroke="#6C5CE7" strokeWidth="2" fill="none" opacity="0.9" /><rect x="10" y="16" width="7" height="5" rx="1.2" stroke="#A29BFE" strokeWidth="1.5" fill="none" opacity="0.7" /><line x1="10" y1="26" x2="22" y2="26" stroke="#A29BFE" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" /><line x1="10" y1="29" x2="17" y2="29" stroke="#A29BFE" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" /><circle cx="33" cy="27" r="3" stroke="#6C5CE7" strokeWidth="1.5" fill="none" opacity="0.6" /><circle cx="30" cy="27" r="3" stroke="#6C5CE7" strokeWidth="1.5" fill="none" opacity="0.4" /></svg>
                      Benefits
                    </span>
                    <span className="product-badge" style={{ background: "rgba(225,112,85,0.08)", color: "#E17055", border: "1px solid rgba(225,112,85,0.15)" }}>
                      <svg viewBox="0 0 44 44" fill="none"><path d="M10 6h24v32l-4-3-4 3-4-3-4 3-4-3-4 3V6z" stroke="#E17055" strokeWidth="2" fill="none" opacity="0.9" strokeLinejoin="round" /><line x1="16" y1="14" x2="28" y2="14" stroke="#FAB1A0" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" /><line x1="16" y1="19" x2="28" y2="19" stroke="#FAB1A0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" /><line x1="16" y1="24" x2="24" y2="24" stroke="#FAB1A0" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" /><circle cx="28" cy="24" r="2" fill="#E17055" opacity="0.5" /></svg>
                      Expense
                    </span>
                  </div>
                  <p className="case-name">Viasoft Pay</p>
                  <h3 className="case-headline">Benefícios e Despesas Corporativas com Arranjo Híbrido</h3>
                  <div className="case-metrics">
                    <span className="case-metric" style={{ background: "rgba(108,92,231,0.06)", color: "#6C5CE7" }}>100k+ usuários</span>
                    <span className="case-metric" style={{ background: "rgba(108,92,231,0.06)", color: "#6C5CE7" }}>R$500M+ processamento/ano</span>
                    <span className="case-metric" style={{ background: "rgba(108,92,231,0.06)", color: "#6C5CE7" }}>45 dias zero-to-production</span>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="section-cta" style={{ background: `linear-gradient(160deg, ${T.darkAlt}, ${T.secondary})`, padding: "120px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, background: "radial-gradient(circle, rgba(244,85,70,0.06), transparent)", borderRadius: "50%", filter: "blur(80px)" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <Reveal>
            <h2 style={{ fontSize: 44, fontWeight: 700, color: T.textLight, marginBottom: 16, letterSpacing: "-0.02em" }}>{tr.ctaFinalTitle}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontSize: 17, color: T.textMutedLight, maxWidth: 480, margin: "0 auto 36px" }}>
              {tr.ctaFinalSubtitle}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Btn onClick={() => nav("contato")} size="lg">{tr.ctaFinalBtn}</Btn>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

// ========================================
