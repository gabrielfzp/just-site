import { CONTENT_T, T } from "../../site/shared.jsx";

export function AuthorBadge({ author, label = "Autor", compact = false }) {
  if (!author) return null;
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <a href={`/autores/${author.slug}`} aria-label={`Ver conteúdos de ${author.name}`} style={{ textDecoration: "none" }}>
        <div style={{
          width: compact ? 34 : 44,
          height: compact ? 34 : 44,
          borderRadius: "50%",
          background: author.avatar ? CONTENT_T.surface : "linear-gradient(135deg, #f45546, #6C5CE7)",
          color: T.textLight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: compact ? 12 : 14,
          flexShrink: 0,
          overflow: "hidden",
          border: author.avatar ? `1px solid ${CONTENT_T.borderStrong}` : "none",
        }}>
          {author.avatar ? (
            <img
              src={author.avatar}
              alt={author.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: author.avatarPosition || "center",
                transform: author.avatarScale ? `scale(${author.avatarScale})` : undefined,
                transformOrigin: author.avatarPosition || "center",
                display: "block",
              }}
            />
          ) : author.name.split(" ").slice(0, 2).map((part) => part[0]).join("")}
        </div>
      </a>
      <span>
        <span style={{ display: "block", color: CONTENT_T.muted, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{label}</span>
        <a href={`/autores/${author.slug}`} style={{ display: "block", color: CONTENT_T.navy, fontSize: compact ? 13 : 15, fontWeight: 800, textDecoration: "none" }}>{author.name}</a>
        {!compact && <span style={{ display: "block", color: CONTENT_T.mutedStrong, fontSize: 13, marginTop: 2 }}>{author.role}</span>}
        {author.linkedin && (
          <a
            href={author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              width: "fit-content",
              color: T.cta,
              fontSize: compact ? 12 : 13,
              fontWeight: 800,
              marginTop: 6,
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
        )}
      </span>
    </div>
  );
}
