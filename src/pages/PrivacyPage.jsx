import { Btn, EcosystemAnimation, HeroOrbital, Metric, ProductIcon, ProductMockup, PRODUCT_COLORS, Reveal, SectionTitle, T, T18N, Tag } from "../site/shared.jsx";

export default function PrivacyPage({ lang }) {
  const tr = (T18N[lang] || T18N["pt-BR"]).privacy;
  return (
    <div>
      <section style={{ background: `linear-gradient(160deg, ${T.primary}, ${T.darkAlt}, ${T.secondary})`, padding: "170px 48px 92px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal><Tag>{tr.tag}</Tag></Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontSize: 52, fontWeight: 700, color: T.textLight, lineHeight: 1.08, margin: "16px 0 18px", letterSpacing: "-0.025em" }}>
              {tr.h1}
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p style={{ fontSize: 18, color: T.textMutedLight, lineHeight: 1.65, maxWidth: 720 }}>
              {tr.subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <div style={{
              display: "inline-flex",
              gap: 10,
              alignItems: "center",
              marginTop: 26,
              padding: "10px 14px",
              borderRadius: 8,
              border: `1px solid ${T.borderLight}`,
              background: "rgba(255,255,255,0.035)",
              color: T.textMutedLight,
              fontSize: 13,
            }}>
              <span style={{ color: "rgba(242,244,248,0.4)" }}>{tr.updatedLabel}</span>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: T.cta }} />
              <strong style={{ color: T.textLight, fontWeight: 600 }}>{tr.updatedAt}</strong>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ background: T.bgOffwhite, padding: "88px 48px" }}>
        <div className="privacy-grid" style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "280px minmax(0, 1fr)", gap: 56, alignItems: "start" }}>
          <aside className="privacy-aside" style={{ position: "sticky", top: 110 }}>
            <div style={{ padding: 28, borderRadius: 8, background: "#fff", border: "1px solid rgba(15,17,43,0.08)" }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: T.primary, marginBottom: 12 }}>{tr.introTitle}</h2>
              <p style={{ fontSize: 14, color: "rgba(15,17,43,0.62)", lineHeight: 1.7, marginBottom: 20 }}>{tr.intro[0]}</p>
              <div style={{ height: 1, background: "rgba(15,17,43,0.08)", marginBottom: 20 }} />
              <p style={{ fontSize: 12, color: "rgba(15,17,43,0.45)", lineHeight: 1.6 }}>
                {tr.updatedLabel}: {tr.updatedAt}
              </p>
            </div>
          </aside>

          <article style={{ minWidth: 0 }}>
            <Reveal>
              <div style={{ padding: 36, borderRadius: 8, background: "#fff", border: "1px solid rgba(15,17,43,0.08)", marginBottom: 18 }}>
                <p style={{ fontSize: 16, color: "rgba(15,17,43,0.72)", lineHeight: 1.8, marginBottom: 18 }}>{tr.intro[0]}</p>
                <p style={{ fontSize: 16, color: "rgba(15,17,43,0.72)", lineHeight: 1.8 }}>{tr.intro[1]}</p>
              </div>
            </Reveal>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {tr.sections.map((section, i) => (
                <Reveal key={section.title} delay={Math.min(i * 0.03, 0.18)}>
                  <section style={{ padding: 36, borderRadius: 8, background: "#fff", border: "1px solid rgba(15,17,43,0.08)" }}>
                    <h2 style={{ fontSize: 22, fontWeight: 700, color: T.primary, lineHeight: 1.25, marginBottom: 18 }}>{section.title}</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {section.body.map((paragraph) => (
                        <p key={paragraph} style={{ fontSize: 15, color: "rgba(15,17,43,0.68)", lineHeight: 1.75 }}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <section style={{ marginTop: 18, padding: 36, borderRadius: 8, background: T.primary, border: `1px solid ${T.borderLight}` }}>
                <h2 style={{ fontSize: 24, fontWeight: 700, color: T.textLight, marginBottom: 12 }}>{tr.contactTitle}</h2>
                <p style={{ fontSize: 15, color: T.textMutedLight, lineHeight: 1.7, maxWidth: 640, marginBottom: 18 }}>{tr.contactText}</p>
                <a href={`mailto:${tr.contactEmail}`} style={{ color: T.cta, fontSize: 16, fontWeight: 700, textDecoration: "none" }}>
                  {tr.contactEmail}
                </a>
              </section>
            </Reveal>
          </article>
        </div>
      </section>
    </div>
  );
}


