import { Btn, EcosystemAnimation, HeroOrbital, Metric, ProductIcon, ProductMockup, PRODUCT_COLORS, Reveal, SectionTitle, T, T18N, Tag } from "../site/shared.jsx";

// SENTINEL PAGE
// ========================================
export default function SentinelPage({ setPage, lang }) {
  const tr = (T18N[lang] || T18N["pt-BR"]).sentinel;
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const pc = PRODUCT_COLORS.sentinel;

  const benefits = [
    { title: tr.b1Title, desc: tr.b1Desc, icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={pc.accent} strokeWidth="1.8"/><path d="M12 7v5l3 2" stroke={pc.accent} strokeWidth="1.8" strokeLinecap="round"/><circle cx="12" cy="12" r="1.5" fill={pc.accent} opacity="0.4"/></svg>
    )},
    { title: tr.b2Title, desc: tr.b2Desc, icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="12" rx="10" ry="5" stroke={pc.accent} strokeWidth="1.8"/><ellipse cx="12" cy="12" rx="10" ry="5" stroke={pc.accent} strokeWidth="1.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="5" stroke={pc.accent} strokeWidth="1.8" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="2" fill={pc.accent} opacity="0.6"/></svg>
    )},
    { title: tr.b3Title, desc: tr.b3Desc, icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 17l4-4 3 3 7-9 4 4" stroke={pc.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 20h18" stroke={pc.accent} strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/></svg>
    )},
    { title: tr.b4Title, desc: tr.b4Desc, icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke={pc.accent} strokeWidth="1.8"/><path d="M9 12l2 2 4-4" stroke={pc.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 9h18" stroke={pc.accent} strokeWidth="1.2" opacity="0.3"/></svg>
    )},
  ];

  const techIcons = [
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke={pc.accent} strokeWidth="1.8"/><path d="M8 12h2l2-4 2 8 2-4h2" stroke={pc.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke={pc.accent} strokeWidth="1.8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" stroke={pc.accent} strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/></svg>,
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><polyline points="17 1 21 5 17 9" stroke={pc.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 11V9a4 4 0 0 1 4-4h14" stroke={pc.accent} strokeWidth="1.8" strokeLinecap="round"/><polyline points="7 23 3 19 7 15" stroke={pc.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 13v2a4 4 0 0 1-4 4H3" stroke={pc.accent} strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/></svg>,
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke={pc.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke={pc.accent} strokeWidth="1.8" strokeLinecap="round"/></svg>,
  ];

  return (
    <div>
      {/* ===== HERO ===== */}
      <section style={{ background: `linear-gradient(160deg, #060910, ${T.primary} 50%, #0a1515)`, padding: "170px 48px 100px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", right: "8%", width: 500, height: 500, background: `radial-gradient(circle, ${pc.accent}08, transparent 70%)`, borderRadius: "50%", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 400, height: 400, background: `radial-gradient(circle, ${pc.accent}05, transparent 70%)`, borderRadius: "50%", filter: "blur(60px)" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 2 }}>
          <div>
            <Reveal>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 100, fontSize: 11, fontWeight: 700, background: `${pc.accent}15`, border: `1px solid ${pc.accent}30`, color: pc.accent, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="4" stroke={pc.accent} strokeWidth="1.2"/><circle cx="5" cy="5" r="1.5" fill={pc.accent}/></svg>
                  {tr.heroTag}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 100, fontSize: 10, fontWeight: 700, background: "rgba(108,92,231,0.1)", border: "1px solid rgba(108,92,231,0.25)", color: "#a29bfe", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="2" fill="#a29bfe" opacity="0.7"/><path d="M6 1v2M6 9v2M1 6h2M9 6h2" stroke="#a29bfe" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/></svg>
                  {tr.heroAiTag}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 style={{ fontSize: 48, fontWeight: 800, color: T.textLight, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 20 }}>
                <span style={{ background: `linear-gradient(135deg, #fff, ${pc.accent})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{tr.h1}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontSize: 17, color: T.textMutedLight, lineHeight: 1.65, marginBottom: 36, maxWidth: 480 }}>{tr.heroSubtitle}</p>
            </Reveal>
            <Reveal delay={0.3}>
              <Btn onClick={() => nav("contato")} size="lg">{tr.heroCta}</Btn>
            </Reveal>
          </div>
          <Reveal delay={0.2} direction="right">
            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 380 }}>
              {/* Shield visual */}
              <div style={{ position: "relative", width: 280, height: 320 }}>
                <svg viewBox="0 0 280 320" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
                  <path d="M140 20L40 60v80c0 80 50 140 100 160 50-20 100-80 100-160V60L140 20z" stroke={pc.accent} strokeWidth="1.5" fill={`${pc.accent}05`} opacity="0.8" strokeLinejoin="round"/>
                  <path d="M140 40L60 72v68c0 65 40 112 80 130 40-18 80-65 80-130V72L140 40z" stroke={pc.accent} strokeWidth="1" fill={`${pc.accent}08`} opacity="0.5" strokeLinejoin="round"/>
                </svg>
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, paddingTop: 20 }}>
                  <ProductIcon productKey="sentinel" size={64} showCard />
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", padding: "0 40px" }}>
                    {[
                      { label: "< 100ms", color: pc.accent },
                      { label: "6M+ Transações", color: "#a29bfe" },
                      { label: "GPU NVIDIA", color: "#74b9ff" },
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 12px", borderRadius: 8, background: "rgba(0,0,0,0.3)", border: `1px solid ${item.color}20` }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                        <span style={{ fontSize: 12, fontWeight: 600, color: item.color }}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== O QUE E ===== */}
      <section style={{ background: T.primary, padding: "100px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Reveal><SectionTitle tag={lang === "en" ? "What it is" : "O que é"} title={tr.whatTitle} center /></Reveal>
          <Reveal delay={0.1}><p style={{ fontSize: 16, color: T.textMutedLight, lineHeight: 1.75 }}>{tr.whatText}</p></Reveal>
        </div>
      </section>

      {/* ===== BENEFICIOS ===== */}
      <section style={{ background: T.darkAlt, padding: "100px 48px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <SectionTitle title={tr.benefitsTitle} center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {benefits.map((b, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ padding: "32px", borderRadius: 16, background: `${pc.accent}05`, border: `1px solid ${pc.accent}12`, display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: `${pc.accent}10`, border: `1px solid ${pc.accent}20`, flexShrink: 0 }}>
                    {b.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: T.textLight, marginBottom: 8, lineHeight: 1.3 }}>{b.title}</h3>
                    <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.65 }}>{b.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECNOLOGIA ===== */}
      <section style={{ background: T.primary, padding: "100px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionTitle title={tr.techTitle} subtitle={tr.techSubtitle} center />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {tr.techBullets.map((bullet, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 24px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: `1px solid ${pc.accent}12` }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: `${pc.accent}08`, border: `1px solid ${pc.accent}15`, flexShrink: 0 }}>
                    {techIcons[i]}
                  </div>
                  <span style={{ fontSize: 15, fontWeight: 500, color: T.textLight }}>{bullet}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARA QUEM E ===== */}
      <section style={{ background: T.darkAlt, padding: "100px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <SectionTitle title={tr.forWhoTitle} center />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {tr.forWhoItems.map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 24px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: `1px solid rgba(255,255,255,0.05)` }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: `${pc.accent}10`, border: `1px solid ${pc.accent}20`, flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke={pc.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{ fontSize: 15, color: T.textMutedLight, lineHeight: 1.5 }}>{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATUS / ROADMAP ===== */}
      <section style={{ background: T.primary, padding: "100px 48px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Reveal>
            <div style={{ padding: 40, borderRadius: 20, background: `linear-gradient(135deg, ${pc.accent}06, ${pc.accent}02)`, border: `1px solid ${pc.accent}20` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: pc.accent, boxShadow: `0 0 12px ${pc.accent}60` }} />
                <h2 style={{ fontSize: 24, fontWeight: 700, color: T.textLight }}>{tr.statusTitle}</h2>
              </div>
              <p style={{ fontSize: 16, color: T.textMutedLight, lineHeight: 1.75, marginBottom: 28 }}>{tr.statusText}</p>
              <Btn onClick={() => nav("contato")} primary>{tr.statusCta}</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section style={{ background: `linear-gradient(135deg, ${T.darkAlt}, #0a1515)`, padding: "100px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 400, background: `radial-gradient(circle, ${pc.accent}07, transparent)`, borderRadius: "50%", filter: "blur(80px)" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <Reveal><h2 style={{ fontSize: 40, fontWeight: 700, color: T.textLight, marginBottom: 16, letterSpacing: "-0.02em" }}>{tr.ctaFinal}</h2></Reveal>
          <Reveal delay={0.1}><Btn onClick={() => nav("contato")} size="lg">{tr.ctaFinalBtn}</Btn></Reveal>
        </div>
      </section>
    </div>
  );
}

// ========================================

