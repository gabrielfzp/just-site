import { useEffect, useState } from "react";
import { CONTENT_T } from "../../site/shared.jsx";

export function ContentSearch({ onResults }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (onResults) onResults(query);
  }, [onResults, query]);

  return (
    <div className="content-search">
      <label style={{ display: "block", color: CONTENT_T.muted, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 800, marginBottom: 10 }}>Buscar conteúdo</label>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Private label, BaaS, antifraude..."
        style={{
          width: "100%",
          height: 48,
          borderRadius: 8,
          border: `1px solid ${CONTENT_T.borderStrong}`,
          background: CONTENT_T.surface,
          color: CONTENT_T.navy,
          padding: "0 16px",
          fontSize: 15,
          outline: "none",
        }}
      />
    </div>
  );
}
