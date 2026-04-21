import { AuthorBadge } from "./AuthorBadge.jsx";
import { InlineCTA } from "./InlineCTA.jsx";
import { CONTENT_T } from "../../site/shared.jsx";

export function ArticleFooter({ article }) {
  return (
    <footer style={{ marginTop: 48, paddingTop: 36, borderTop: `1px solid ${CONTENT_T.border}` }}>
      <InlineCTA
        title="Quer aplicar isso no seu produto financeiro?"
        text="A JUST ajuda empresas a desenhar, construir e operar produtos financeiros white-label com arquitetura modular."
        href="/contato"
        label="Conversar com especialista"
      />
      <div style={{ padding: 24, borderRadius: 8, border: `1px solid ${CONTENT_T.border}`, background: CONTENT_T.surfaceSoft }}>
        <AuthorBadge author={article.author} />
        <p style={{ color: CONTENT_T.mutedStrong, fontSize: 14, lineHeight: 1.7, marginTop: 14 }}>{article.author.bio}</p>
      </div>
    </footer>
  );
}
