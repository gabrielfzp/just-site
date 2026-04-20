import { Btn, EcosystemAnimation, HeroOrbital, Metric, ProductIcon, ProductMockup, PRODUCT_COLORS, Reveal, SectionTitle, T, T18N, Tag } from "../site/shared.jsx";

// SOBRE PAGE
// ========================================
export default function SobrePage({ setPage, lang }) {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const tr = (T18N[lang] || T18N["pt-BR"]).sobre;
  const timeline = tr.timeline;
  return (
    <div>
      <section style={{ background: `linear-gradient(160deg, ${T.primary}, ${T.darkAlt}, ${T.secondary})`, padding: "170px 48px 100px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Reveal><Tag>{tr.tag}</Tag></Reveal>
          <Reveal delay={0.1}><h1 style={{ fontSize: 48, fontWeight: 700, color: T.textLight, lineHeight: 1.1, margin: "16px 0" }}>{tr.h1}</h1></Reveal>
          <Reveal delay={0.2}><p style={{ fontSize: 18, color: T.textMutedLight, lineHeight: 1.6 }}>{tr.intro}</p></Reveal>
        </div>
      </section>
      <section style={{ background: T.primary, padding: "120px 48px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <SectionTitle tag={tr.tesesTag} title={tr.tesesTitle} center />
          <Reveal>
            <div style={{ maxWidth: 700, margin: "0 auto" }}>
              <p style={{ fontSize: 16, color: T.textMutedLight, lineHeight: 1.75, marginBottom: 20 }}>{tr.tesesP1}</p>
              <p style={{ fontSize: 16, color: T.textMutedLight, lineHeight: 1.75, marginBottom: 20 }}>{tr.tesesP2}</p>
              <p style={{ fontSize: 16, color: T.textMutedLight, lineHeight: 1.75 }}>{tr.tesesP3}</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section style={{ background: T.darkAlt, padding: "100px 48px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <SectionTitle tag={tr.principiosTag} title={tr.principiosTitle} center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { t: tr.p1Title, d: tr.p1Desc },
              { t: tr.p2Title, d: tr.p2Desc },
              { t: tr.p3Title, d: tr.p3Desc },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ padding: 32, borderRadius: 14, background: "rgba(255,255,255,0.025)", border: `1px solid ${T.borderLight}` }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: T.textLight, marginBottom: 10 }}>{p.t}</h3>
                  <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6 }}>{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: T.primary, padding: "120px 48px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <SectionTitle tag={tr.trajetoriaTag} title={tr.trajetoriaTitle} center />
          <div style={{ position: "relative", paddingLeft: 40 }}>
            <div style={{ position: "absolute", left: 11, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${T.cta}60, ${T.secondary}40)` }} />
            {timeline.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ marginBottom: 36, position: "relative" }}>
                  <div style={{ position: "absolute", left: -34, top: 5, width: 10, height: 10, borderRadius: "50%", background: T.cta, boxShadow: `0 0 12px ${T.cta}40` }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: T.cta, letterSpacing: "0.04em" }}>{t.y}</span>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: T.textLight, margin: "4px 0 6px" }}>{t.t}</h3>
                  <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6 }}>{t.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: T.primary, padding: "100px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionTitle tag={tr.liderancaTag} title={tr.liderancaTitle} />
          <Reveal>
            <div className="about-founder">
              <div className="about-avatar">GP</div>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: T.textLight, marginBottom: 4 }}>Gabriel Pires</h3>
                <span style={{ fontSize: 13, color: T.cta, fontWeight: 600, letterSpacing: "0.03em" }}>Founder & CEO</span>
                <p style={{ fontSize: 15, color: T.textMutedLight, lineHeight: 1.75, marginTop: 16 }}>Mais de 15 anos de experiência na criação de produtos financeiros, com atuação em projetos nacionais e internacionais. Liderou times responsáveis por plataformas que hoje atendem milhões de usuários em produção.</p>
                <p style={{ fontSize: 15, color: T.textMutedLight, lineHeight: 1.75, marginTop: 10 }}>Essa experiência prática molda a forma como a JUST trabalha: foco em entrega, precisão técnica e responsabilidade sobre o que vai para o ar.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="about-team-card">
              <h3 style={{ fontSize: 20, fontWeight: 700, color: T.textLight, marginBottom: 14 }}>Um time orientado a resultado</h3>
              <p style={{ fontSize: 15, color: T.textMutedLight, lineHeight: 1.75, marginBottom: 12 }}>~20 profissionais com experiência real em meios de pagamento, banking e plataformas financeiras digitais. 100% remoto, com estrutura enxuta e foco total em entrega.</p>
              <p style={{ fontSize: 15, color: T.textMutedLight, lineHeight: 1.75 }}>Não somos um time de experimentação. Somos um time de execução. Trabalhamos próximos ao cliente, assumindo responsabilidade pelo produto e tomando decisões com base no que precisa funcionar.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section style={{ background: T.darkAlt, padding: "100px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <Reveal><h3 style={{ fontSize: 13, color: T.cta, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>{tr.commitment}</h3></Reveal>
          <Reveal delay={0.1}><h2 style={{ fontSize: 36, fontWeight: 700, color: T.textLight, lineHeight: 1.15, marginBottom: 20 }}>{tr.commitmentTitle}</h2></Reveal>
          <Reveal delay={0.2}><p style={{ fontSize: 16, color: T.textMutedLight, lineHeight: 1.75 }}>{tr.commitmentDesc}</p></Reveal>
        </div>
      </section>
      <section style={{ background: `linear-gradient(135deg, ${T.primary}, ${T.secondary})`, padding: "100px 48px", textAlign: "center" }}>
        <Reveal><h2 style={{ fontSize: 36, fontWeight: 700, color: T.textLight, marginBottom: 24 }}>{tr.cta}</h2></Reveal>
        <Reveal delay={0.1}><Btn onClick={() => nav("contato")}>{tr.ctaBtn}</Btn></Reveal>
      </section>
    </div>
  );
}

// ========================================
// STACK, CASES, CONTATO, SOLUTION pages
// (Keeping same structure as v1 but with updated tokens and product colors)
// ========================================

