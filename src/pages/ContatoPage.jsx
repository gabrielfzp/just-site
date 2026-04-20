import { useState } from "react";
import { Btn, EcosystemAnimation, HeroOrbital, Metric, ProductIcon, ProductMockup, PRODUCT_COLORS, Reveal, SectionTitle, T, T18N, Tag } from "../site/shared.jsx";

export default function ContatoPage({ lang }) {
  const tr = (T18N[lang] || T18N["pt-BR"]).contato;
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ nome: "", email: "", empresa: "", telefone: "", produto: "", projeto: "" });
  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyJYv9kn-XdIosgb7awl5cXLnjE-XT1fWe-5XlVWq5KAVnf6Ol4UwPG_pCnspPoZ9Q0/exec";

  const handleSubmit = async () => {
    setError("");
    if (!form.nome || !form.email || !form.empresa || !form.produto) {
      setError(tr.errorRequired);
      return;
    }
    setSending(true);
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          empresa: form.empresa,
          telefone: form.telefone || "Não informado",
          produto: form.produto,
          projeto: form.projeto || "Não informado",
        }),
      });
      setSent(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(tr.errorSend);
    } finally {
      setSending(false);
    }
  };

  const [openFaq, setOpenFaq] = useState(null);
  const faqs = tr.faqs;
  return (
    <div>
      <section style={{ background: `linear-gradient(160deg, ${T.primary}, ${T.darkAlt})`, padding: "170px 48px 80px", textAlign: "center" }}>
        <Reveal><h1 style={{ fontSize: 44, fontWeight: 700, color: T.textLight, marginBottom: 12 }}>{tr.h1}</h1></Reveal>
        <Reveal delay={0.1}><p style={{ fontSize: 17, color: T.textMutedLight }}>{tr.subtitle}</p></Reveal>
      </section>
      <section style={{ background: T.primary, padding: "80px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 60 }}>
          {!sent ? (
            <Reveal>
              <div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  {[{ l: tr.nameLabel, t: "text", k: "nome" }, { l: tr.emailLabel, t: "email", k: "email" }, { l: tr.companyLabel, t: "text", k: "empresa" }, { l: tr.phoneLabel, t: "tel", k: "telefone" }].map((f, i) => (
                    <div key={i}>
                      <label style={{ display: "block", fontSize: 12, color: T.textMuted, marginBottom: 5, fontWeight: 500 }}>{f.l}</label>
                      <input type={f.t} value={form[f.k]} onChange={handleChange(f.k)} style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: `1px solid ${T.borderLight}`, background: "rgba(255,255,255,0.04)", color: T.textLight, fontSize: 14, outline: "none" }} />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 12, color: T.textMuted, marginBottom: 5, fontWeight: 500 }}>{tr.productLabel}</label>
                  <select value={form.produto} onChange={handleChange("produto")} style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: `1px solid ${T.borderLight}`, background: "rgba(255,255,255,0.04)", color: T.textLight, fontSize: 14 }}>
                    <option value="">{tr.productPlaceholder}</option>
                    {["JUST Benefits", "JUST Fleet", "JUST Banking", "JUST Expense", "JUST Credit", "JUST Custom", "Ainda não sei"].map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: 12, color: T.textMuted, marginBottom: 5, fontWeight: 500 }}>{tr.projectLabel}</label>
                  <textarea rows={3} value={form.projeto} onChange={handleChange("projeto")} placeholder={tr.projectPlaceholder} style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: `1px solid ${T.borderLight}`, background: "rgba(255,255,255,0.04)", color: T.textLight, fontSize: 14, resize: "vertical", outline: "none" }} />
                </div>
                {error && <p style={{ color: T.cta, fontSize: 13, marginBottom: 12 }}>{error}</p>}
                <Btn onClick={handleSubmit} disabled={sending} style={{ width: "100%", opacity: sending ? 0.7 : 1, cursor: sending ? "wait" : "pointer" }}>{sending ? tr.sendingBtn : tr.submitBtn}</Btn>
              </div>
            </Reveal>
          ) : (
            <Reveal><div style={{ textAlign: "center", padding: "60px 0" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: `${T.cta}15`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 28, color: T.cta }}>&#10003;</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: T.textLight, marginBottom: 8 }}>{tr.successTitle}</h3>
              <p style={{ fontSize: 15, color: T.textMuted }}>{tr.successMsg}</p>
            </div></Reveal>
          )}
          <Reveal delay={0.15} direction="right">
            <div style={{ paddingTop: 8 }}>
              {[{ l: tr.emailLabel2, v: "contato@wearejust.it" }, { l: tr.whatsappLabel, v: "+55 11 97187-4759", href: "https://wa.me/5511971874759?text=Ola%2C%20acessei%20o%20site%20da%20JUST%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto." }, { l: tr.locationLabel, v: "São Paulo, SP" }, { l: tr.hoursLabel, v: tr.hours }].map((info) => (
                <div key={info.l} style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 11, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4, fontWeight: 600 }}>{info.l}</div>
                  {info.href ? (
                    <a href={info.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, color: T.textLight, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                      {info.v} <span style={{ fontSize: 12, color: "#25D366" }}>&#x2197;</span>
                    </a>
                  ) : (
                    <div style={{ fontSize: 15, color: T.textLight }}>{info.v}</div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section style={{ background: T.darkAlt, padding: "80px 48px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: T.textLight, marginBottom: 28, textAlign: "center" }}>{tr.faqTitle}</h2>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: `1px solid ${T.borderLight}`, marginBottom: 8 }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", padding: "14px 0", background: "none", border: "none", cursor: "pointer", color: T.textLight, fontSize: 15, fontWeight: 500, textAlign: "left" }}>
                {f.q} <span style={{ transform: openFaq === i ? "rotate(180deg)" : "none", transition: "0.3s" }}>&#9662;</span>
              </button>
              {openFaq === i && <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6, padding: "0 0 14px" }}>{f.a}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


