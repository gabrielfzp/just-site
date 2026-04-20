import { Btn, EcosystemAnimation, HeroOrbital, Metric, ProductIcon, ProductMockup, PRODUCT_COLORS, Reveal, SectionTitle, T, T18N, Tag } from "../site/shared.jsx";

export default function CasesPage({ setPage, lang }) {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const tr = (T18N[lang] || T18N["pt-BR"]).cases;
  const CASE_COLORS = [PRODUCT_COLORS.beneficios.accent, PRODUCT_COLORS.frotas.accent, PRODUCT_COLORS.beneficios.accent, PRODUCT_COLORS.antecipacao.accent];
  const cases = tr.casesList.map((c, i) => ({ ...c, color: CASE_COLORS[i] }));
  return (
    <div>
      <section style={{ background: `linear-gradient(160deg, ${T.primary}, ${T.darkAlt}, ${T.secondary})`, padding: "170px 48px 100px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Reveal><Tag>{tr.tag}</Tag></Reveal>
          <Reveal delay={0.1}><h1 style={{ fontSize: 48, fontWeight: 700, color: T.textLight, lineHeight: 1.1, margin: "16px 0" }}>{tr.h1}</h1></Reveal>
        </div>
      </section>
      <section style={{ background: T.primary, padding: "80px 48px", borderBottom: `1px solid ${T.borderLight}` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          <Metric prefix="R$" value={4} suffix="bi+" label={tr.tpvLabel} />
          <Metric value={30} suffix="M+" label={tr.txLabel} delay={0.08} />
          <Metric value={500} suffix="k+" label={tr.usersLabel} delay={0.16} />
          <Metric value={15} suffix="+" label={tr.clientsLabel} delay={0.24} />
        </div>
      </section>
      <section style={{ background: T.primary, padding: "100px 48px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>
          {cases.map((c, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 32, padding: 36, borderRadius: 16, background: `${c.color}05`, border: `1px solid ${c.color}12`, alignItems: "center" }}>
                <div>
                  <Tag color={c.color}>{c.tag}</Tag>
                  <p style={{ fontSize: 12, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", margin: "10px 0 4px", letterSpacing: "0.04em" }}>{c.name}</p>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: T.textLight, lineHeight: 1.2 }}>{c.headline}</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {c.items.map((item, j) => (
                    <span key={j} style={{ padding: "8px 14px", borderRadius: 8, background: `${c.color}10`, color: c.color, fontSize: 13, fontWeight: 500 }}>&#10003; {item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section style={{ background: `linear-gradient(135deg, ${T.primary}, ${T.secondary})`, padding: "100px 48px", textAlign: "center" }}>
        <Reveal><h2 style={{ fontSize: 36, fontWeight: 700, color: T.textLight, marginBottom: 24 }}>{tr.cta}</h2></Reveal>
        <Reveal delay={0.1}><Btn onClick={() => nav("contato")}>{tr.ctaBtn}</Btn></Reveal>
      </section>
    </div>
  );
}


