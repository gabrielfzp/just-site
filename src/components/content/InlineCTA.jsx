import { Btn, CONTENT_T } from "../../site/shared.jsx";
import { trackEvent } from "../../lib/analytics.js";

export function InlineCTA({ title = "Quer estruturar esse projeto?", text, href = "/contato", label = "Fale com a JUST" }) {
  return (
    <aside style={{
      margin: "36px 0",
      padding: 28,
      borderRadius: 8,
      background: CONTENT_T.surfaceWarm,
      border: "1px solid rgba(244,85,70,0.22)",
    }}>
      <h3 style={{ color: CONTENT_T.navy, fontSize: 24, lineHeight: 1.2, marginBottom: 10 }}>{title}</h3>
      {text && <p style={{ color: CONTENT_T.mutedStrong, fontSize: 16, lineHeight: 1.65, marginBottom: 22 }}>{text}</p>}
      <Btn onClick={() => {
        trackEvent("contact_cta_click", {
          source: "inline_cta",
          label,
          href,
          from_path: window.location.pathname,
        });
        window.location.href = href;
      }}>{label}</Btn>
    </aside>
  );
}
