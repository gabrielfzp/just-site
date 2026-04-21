import { CONTENT_T } from "../../site/shared.jsx";

export function FAQBlock({ items = [] }) {
  if (!items.length) return null;
  return (
    <div style={{ display: "grid", gap: 14, margin: "26px 0 8px" }}>
      {items.map((item) => (
        <details key={item.q} style={{
          border: `1px solid ${CONTENT_T.border}`,
          borderRadius: 8,
          background: CONTENT_T.surfaceSoft,
          padding: "16px 18px",
        }}>
          <summary style={{ cursor: "pointer", color: CONTENT_T.navy, fontWeight: 700, fontSize: 16 }}>{item.q}</summary>
          <p style={{ color: CONTENT_T.text, marginTop: 12, lineHeight: 1.7, fontSize: 15 }}>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
