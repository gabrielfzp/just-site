import { Btn, EcosystemAnimation, HeroOrbital, Metric, ProductIcon, ProductMockup, PRODUCT_COLORS, Reveal, SectionTitle, T, T18N, Tag } from "../site/shared.jsx";

export default function SolutionPage({ setPage, config, lang }) {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const tr = (T18N[lang] || T18N["pt-BR"]).solution;
  const pc = PRODUCT_COLORS[config.key] || PRODUCT_COLORS.beneficios;
  return (
    <div>
      <section style={{ background: `linear-gradient(160deg, ${T.primary}, ${T.darkAlt})`, padding: "170px 48px 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <Reveal><div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <ProductIcon productKey={config.key} size={36} showCard />
              <Tag color={pc.accent}>{pc.label}</Tag>
            </div></Reveal>
            <Reveal delay={0.1}><h1 style={{ fontSize: 44, fontWeight: 700, color: T.textLight, lineHeight: 1.1, marginBottom: 16 }}>{config.title}</h1></Reveal>
            <Reveal delay={0.2}><p style={{ fontSize: 17, color: T.textMutedLight, lineHeight: 1.6, marginBottom: 32 }}>{config.subtitle}</p></Reveal>
            <Reveal delay={0.3}><Btn onClick={() => nav("contato")}>{tr.ctaBtn}</Btn></Reveal>
          </div>
          <Reveal delay={0.2} direction="right">
            <ProductMockup color={pc.accent} label={pc.label} productKey={config.key} style={{ maxWidth: 500 }} />
          </Reveal>
        </div>
      </section>
      <section style={{ background: T.primary, padding: "100px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionTitle title={tr.modelsTitle} center />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[config.model1, config.model2].map((m, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ padding: 32, borderRadius: 14, background: `${pc.accent}05`, border: `1px solid ${pc.accent}12` }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: T.textLight, marginBottom: 10 }}>{m.title}</h3>
                  <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6 }}>{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: T.darkAlt, padding: "100px 48px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <SectionTitle title={tr.capabilitiesTitle} center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {config.capabilities.map((c, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{ textAlign: "center", padding: "20px 14px", borderRadius: 10, background: `${pc.accent}06`, border: `1px solid ${pc.accent}10`, fontSize: 14, fontWeight: 500, color: T.textLight }}>
                  {c}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: `linear-gradient(135deg, ${T.primary}, ${T.secondary})`, padding: "100px 48px", textAlign: "center" }}>
        <Reveal><h2 style={{ fontSize: 36, fontWeight: 700, color: T.textLight, marginBottom: 24 }}>{tr.ctaTitle}</h2></Reveal>
        <Reveal delay={0.1}><Btn onClick={() => nav("contato")}>{tr.ctaBtn}</Btn></Reveal>
      </section>
    </div>
  );
}

// ========================================

