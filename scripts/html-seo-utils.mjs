export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function escapeAttr(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}

export function replaceOrInsert(html, pattern, replacement) {
  if (pattern.test(html)) return html.replace(pattern, replacement);
  return html.replace("</head>", `    ${replacement}\n  </head>`);
}

export function updateMetaName(html, name, content) {
  const tag = `<meta name="${name}" content="${escapeAttr(content)}" />`;
  return replaceOrInsert(html, new RegExp(`<meta name="${name}" content="[^"]*"\\s*/?>`), tag);
}

export function updateMetaProperty(html, property, content) {
  const tag = `<meta property="${property}" content="${escapeAttr(content)}" />`;
  return replaceOrInsert(html, new RegExp(`<meta property="${property}" content="[^"]*"\\s*/?>`), tag);
}

export function updateCanonical(html, href) {
  return replaceOrInsert(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${escapeAttr(href)}" />`,
  );
}

export function updateMarkdownAlternate(html, href) {
  const pattern = /<link rel="alternate" type="text\/markdown" href="[^"]*"\s*\/?>/;
  if (!href) return html.replace(new RegExp(`\\s*${pattern.source}`, "g"), "");
  return replaceOrInsert(html, pattern, `<link rel="alternate" type="text/markdown" href="${escapeAttr(href)}" />`);
}

export function withManagedSeoBlock(html, seo) {
  const jsonLd = JSON.stringify(seo.jsonLd).replace(/</g, "\\u003c");
  const block = [
    "<!-- JUST route SEO -->",
    `<link rel="alternate" hreflang="pt-BR" href="${escapeAttr(seo.canonical)}" />`,
    `<link rel="alternate" hreflang="x-default" href="${escapeAttr(seo.canonical)}" />`,
    `<script id="just-jsonld" type="application/ld+json">${jsonLd}</script>`,
    "<!-- /JUST route SEO -->",
  ].join("\n    ");

  const blockPattern = /    <!-- JUST route SEO -->[\s\S]*?<!-- \/JUST route SEO -->\n?/;
  if (blockPattern.test(html)) return html.replace(blockPattern, `    ${block}\n`);
  return html.replace("</head>", `    ${block}\n  </head>`);
}

export function applyHtmlSeo(baseHtml, seo) {
  let html = baseHtml;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`);
  html = updateMetaName(html, "description", seo.description);
  html = updateMetaName(html, "robots", seo.robots || "index, follow");
  html = updateMetaName(html, "twitter:title", seo.title);
  html = updateMetaName(html, "twitter:description", seo.description);
  html = updateMetaName(html, "twitter:image", seo.image);
  html = updateMetaProperty(html, "og:title", seo.title);
  html = updateMetaProperty(html, "og:type", seo.type || "website");
  html = updateMetaProperty(html, "og:description", seo.description);
  html = updateMetaProperty(html, "og:url", seo.canonical);
  html = updateMetaProperty(html, "og:image", seo.image);
  html = updateMetaProperty(html, "og:image:width", seo.imageWidth || "1200");
  html = updateMetaProperty(html, "og:image:height", seo.imageHeight || "630");
  html = updateMetaProperty(html, "og:image:alt", seo.imageAlt || "JUST");
  if (seo.article) {
    html = updateMetaProperty(html, "article:published_time", seo.article.publishedAt);
    html = updateMetaProperty(html, "article:modified_time", seo.article.updatedAt);
    html = updateMetaProperty(html, "article:author", seo.article.author?.name || "");
    html = updateMetaProperty(html, "article:section", seo.article.category?.name || "");
    html = html.replace(/\s*<meta property="article:tag" content="[^"]*"\s*\/?>/g, "");
    const tags = (seo.article.tags || [])
      .map((tag) => `    <meta property="article:tag" content="${escapeAttr(tag)}" />`)
      .join("\n");
    if (tags) html = html.replace("</head>", `${tags}\n  </head>`);
  }
  html = updateCanonical(html, seo.canonical);
  html = updateMarkdownAlternate(html, seo.markdown);
  html = withManagedSeoBlock(html, seo);

  return html;
}
