import { useEffect, useState } from "react";
import { CONTENT_T, T } from "../../site/shared.jsx";

export function ArticleTOC({ items = [] }) {
  const [active, setActive] = useState(items[0]?.id || "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!items.length) return undefined;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-120px 0px -70% 0px", threshold: 0.01 });

    items.forEach((item) => {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  const list = (
    <ol style={{ listStyle: "none", display: "grid", gap: 10, margin: 0, padding: 0 }}>
      {items.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`} style={{
            color: active === item.id ? T.cta : CONTENT_T.mutedStrong,
            fontSize: 13,
            lineHeight: 1.45,
            textDecoration: "none",
            fontWeight: active === item.id ? 700 : 500,
          }}>{item.title}</a>
        </li>
      ))}
    </ol>
  );

  return (
    <aside style={{ position: "sticky", top: 104 }}>
      <button onClick={() => setOpen(!open)} className="toc-mobile-toggle" style={{
        display: "none",
        width: "100%",
        padding: "12px 14px",
        borderRadius: 8,
        border: `1px solid ${CONTENT_T.border}`,
        background: CONTENT_T.surfaceSoft,
        color: CONTENT_T.navy,
        fontWeight: 700,
        marginBottom: 12,
      }}>
        Índice do artigo
      </button>
      <div className="toc-panel" style={{
        padding: 20,
        borderRadius: 8,
        border: `1px solid ${CONTENT_T.border}`,
        background: CONTENT_T.surfaceSoft,
        display: open ? "block" : undefined,
      }}>
        <p style={{ color: CONTENT_T.muted, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 800, marginBottom: 14 }}>Neste artigo</p>
        {list}
      </div>
    </aside>
  );
}
