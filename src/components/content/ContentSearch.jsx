import { useEffect, useMemo, useState } from "react";
import { searchArticles } from "../../lib/search-index.js";
import { ArticleCard } from "./ArticleCard.jsx";
import { CONTENT_T } from "../../site/shared.jsx";

export function ContentSearch({ onResults }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchArticles(query), [query]);

  useEffect(() => {
    if (onResults) onResults(results, query);
  }, [onResults, query, results]);

  return (
    <div>
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
      {query && (
        <div style={{ marginTop: 20, display: "grid", gap: 14 }}>
          {results.map((article) => <ArticleCard key={article.slug} article={article} />)}
          {!results.length && <p style={{ color: CONTENT_T.mutedStrong }}>Nenhum conteúdo encontrado para essa busca.</p>}
        </div>
      )}
    </div>
  );
}
