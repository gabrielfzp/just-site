# Spec Técnica — Infra `/conteudos` (Fase 1)

Spec da implementação da infraestrutura técnica que hospeda a Central de Conteúdos dentro do projeto `just-site/`.

**Escopo desta fase**: tornar publicável um artigo em URL própria com SEO completo (title, description, canonical, OG, JSON-LD), página de listagem, autor, busca e geração de HTML estático pós-build. NÃO inclui o conteúdo dos artigos (isso é Fase 2, ver `03-content/BACKLOG.md`).

## 1. Stack e decisões técnicas

| Decisão | Valor | Motivo |
|---|---|---|
| Formato de conteúdo | MDX | Permite `<CTA />`, `<TabelaComparativa />` embutidos. Reuso com tipagem. |
| Plugin MDX | `@mdx-js/rollup` + `remark-frontmatter` + `remark-gfm` | Padrão Vite + suporte GFM (tabelas, checkboxes) |
| Frontmatter | `gray-matter` | Parse de YAML |
| Geração HTML estático | Script `scripts/generate-seo-pages.mjs` pós-build | Gera HTML SEO institucional e de conteúdo no mesmo fluxo |
| Busca | `fuse.js` client-side | Até 50 artigos é suficiente. Evita custo de Algolia. |
| Listagem | `ConteudosPage.jsx` | Novo componente em `src/pages/` |
| Template | `ArticlePage.jsx` | Novo componente em `src/pages/` |
| OG image | Script `@vercel/og` ou Satori no build | Geração automática por artigo |
| Sitemap | Regenerado no build, escreve `public/sitemap.xml` | Inclui todas URLs de conteúdo |

## 2. Estrutura de arquivos a criar

```
just-site/
├── src/
│   ├── content/                              [NOVO]
│   │   ├── articles/
│   │   │   └── cartao-private-label.mdx      [Fase 2]
│   │   ├── authors.js                        [NOVO]
│   │   └── categories.js                     [NOVO]
│   │
│   ├── lib/                                  [NOVO]
│   │   ├── content-loader.js                 Carrega e parseia MDX
│   │   ├── reading-time.js                   Calcula tempo de leitura
│   │   ├── search-index.js                   Gera índice Fuse.js
│   │   └── schema-builder.js                 Monta JSON-LD por artigo
│   │
│   ├── pages/
│   │   ├── ConteudosPage.jsx                 [NOVO] Listagem
│   │   ├── ArticlePage.jsx                   [NOVO] Template de artigo
│   │   ├── CategoriaPage.jsx                 [NOVO] Listagem por categoria
│   │   └── AutorPage.jsx                     [NOVO] Página do autor
│   │
│   ├── components/
│   │   ├── content/                          [NOVO]
│   │   │   ├── ArticleCard.jsx
│   │   │   ├── ArticleTOC.jsx
│   │   │   ├── ArticleHeader.jsx
│   │   │   ├── ArticleFooter.jsx
│   │   │   ├── AuthorBadge.jsx
│   │   │   ├── RelatedArticles.jsx
│   │   │   ├── ContentSearch.jsx
│   │   │   ├── FAQBlock.jsx
│   │   │   └── InlineCTA.jsx
│   │   └── Layout.jsx                        [UPDATE] adicionar link pra /conteudos
│   │
│   ├── site/
│   │   ├── seo.js                            [UPDATE] adicionar PAGE_SEO pra /conteudos
│   │   └── shared.jsx                        [UPDATE] T18N com strings da central
│   │
│   └── App.jsx                               [UPDATE] adicionar rotas
│
├── scripts/
│   ├── generate-seo-pages.mjs                [UPDATE] HTML estático por página, artigo, categoria e autor
│   ├── generate-article-images.mjs           [NOVO] Imagens internas de artigos
│   ├── generate-sitemap.mjs                  [NOVO ou UPDATE] incluir conteúdos
│   ├── generate-og-images.mjs                [NOVO] OG image por artigo
│   └── notify-search-engines.mjs             [NOVO] IndexNow + GSC ping
│
├── public/
│   ├── og/                                   [NOVO] OG images geradas
│   └── conteudos/                            [NOVO] assets de artigos
│
└── vite.config.js                            [UPDATE] plugin MDX + hook pós-build
```

## 3. Dependências a instalar

```bash
npm install @mdx-js/rollup remark-frontmatter remark-gfm rehype-slug rehype-autolink-headings gray-matter fuse.js @vercel/og satori reading-time
```

## 4. Rotas (React Router)

Adicionar em `App.jsx`:

```jsx
<Route path="/conteudos" element={<ConteudosPage />} />
<Route path="/conteudos/categoria/:slug" element={<CategoriaPage />} />
<Route path="/conteudos/:slug" element={<ArticlePage />} />
<Route path="/autores/:slug" element={<AutorPage />} />
```

Atualizar `seo.js` com entries:

```js
PAGE_SEO.conteudos = { title: "...", description: "...", canonical: "/conteudos" }
PAGE_SEO["conteudos.article"] = (slug, data) => ({ ... })
```

## 5. Formato MDX

Exemplo de `src/content/articles/cartao-private-label.mdx`:

```mdx
---
title: "Cartão private label: o guia completo para emitir o seu"
description: "..."
slug: "cartao-private-label"
category: "Meios de pagamento"
cluster: "private-label"
type: "pillar"
author: "gabriel-pires"
publishedAt: "2026-05-01"
updatedAt: "2026-05-01"
readingTime: 14
featured: true
ogImage: "/og/cartao-private-label.png"
---

import { InlineCTA } from '@/components/content/InlineCTA'
import { FAQBlock } from '@/components/content/FAQBlock'

## O que é um cartão private label

Conteúdo normal em markdown...

<InlineCTA
  text="Quer estruturar seu private label?"
  href="/produtos/antecipacao"
  variant="primary"
/>

## FAQ

<FAQBlock items={[
  { q: "O que é...?", a: "..." },
]} />
```

## 6. Componentes-chave

### `ConteudosPage.jsx`

Listagem principal. Seções:
- Hero: título + subtítulo + busca
- Destaque: featured article
- Grid: últimos artigos (paginado, 12 por página)
- Barra lateral: categorias + autores + tags populares

### `ArticlePage.jsx`

Template de artigo. Layout:
- Breadcrumb (Home > Conteúdos > Categoria > Título)
- Header: título, categoria, autor, datas, reading time
- TOC (sticky desktop, collapsible mobile)
- Corpo (MDX renderizado)
- Footer: autor expandido, compartilhamento social
- Related articles (3 do mesmo cluster)
- CTA final pra produto

### `ArticleTOC.jsx`

Extrai H2s do MDX no build, renderiza como lista com âncoras. Destaca H2 ativo conforme scroll.

### `ContentSearch.jsx`

Fuse.js com índice gerado no build. Busca em título, description, tags, categoria. Debounce 300ms.

## 7. Schema builder

`src/lib/schema-builder.js` expõe:

```js
buildArticleSchema(article)      // JSON-LD Article
buildBreadcrumbSchema(article)   // BreadcrumbList
buildFAQSchema(article.faqs)     // FAQPage
buildHowToSchema(article.howTo)  // HowTo
buildPersonSchema(author)        // Person (autor)
```

Cada artigo injeta os schemas relevantes no `<head>` via `applySeo()` existente.

## 8. Geração de HTML estático

`scripts/generate-seo-pages.mjs` roda após `vite build`. Faz:

1. Lê todos `.mdx` em `src/content/articles/`
2. Para cada artigo:
   a. Monta HTML com meta tags + OG + JSON-LD completos
   b. Renderiza o conteúdo MDX
   c. Salva em `dist/conteudos/[slug]/index.html`
3. Regenera `dist/sitemap.xml` com todas URLs

**Motivo**: o site é SPA mas precisa de HTML estático por URL pra crawlers. Padrão já estabelecido em `just-site/` pras páginas SEO.

## 9. OG image generator

`scripts/generate-og-images.mjs`:

1. Para cada artigo sem `og/[slug].png`:
   a. Usa Satori pra renderizar template React → SVG
   b. Converte SVG → PNG 1200x630 via resvg
   c. Salva em `public/og/[slug].png`
2. Template: gradient JUST + logo + título do artigo + categoria

## 10. Sitemap

`scripts/generate-sitemap.mjs` produz:

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- páginas existentes -->
  <url>
    <loc>https://wearejust.it/conteudos</loc>
    <lastmod>2026-04-20</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- 1 entry por artigo -->
  <url>
    <loc>https://wearejust.it/conteudos/cartao-private-label</loc>
    <lastmod>[updatedAt]</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

## 11. Pings pós-publicação

`scripts/notify-search-engines.mjs`:

1. **Google**: submete sitemap via Indexing API (ou fallback ping em `google.com/ping?sitemap=...`)
2. **IndexNow**: POST `https://api.indexnow.org/indexnow` com lista de URLs novas
3. **Bing Webmaster**: submete sitemap

Roda após deploy pro GitHub Pages.

## 12. i18n

A central é **pt-BR only** por 12 meses (decisão em `STRATEGY.md`). Mesmo assim:

- Toggle de idioma no header continua visível fora de `/conteudos/*`
- Em páginas de conteúdo, toggle pode ficar oculto ou redirecionar pra `/conteudos` em en com mensagem "Content hub coming soon in English"
- `<link rel="alternate" hreflang="pt-BR">` obrigatório
- Strings de UI da central (botões, placeholders) vivem em `T18N.conteudos.*` respeitando o padrão do site

## 13. Performance

- Lazy-load das imagens do corpo (native `loading="lazy"`)
- Code splitting: `ConteudosPage` e `ArticlePage` em chunks separados via `React.lazy`
- Índice de busca gerado no build, não em runtime
- MDX pré-compilado no build, não parseado em runtime
- `prefetch` nos links de artigos relacionados

## 14. Analytics

Eventos a rastrear (GA4 ou substituto):

- `article_view`: slug, cluster, author
- `article_scroll_depth`: 25%, 50%, 75%, 100%
- `article_toc_click`: H2 destino
- `article_cta_click`: posição, destino
- `article_related_click`: slug destino
- `content_search`: query

## 15. Checklist de entrega (Fase 1)

### Infra básica
- [ ] Dependências instaladas
- [ ] Rotas configuradas em `App.jsx`
- [ ] `PAGE_SEO` atualizado em `seo.js`
- [ ] MDX plugin configurado em `vite.config.js`
- [ ] Estrutura de pastas criada (`src/content/`, `src/lib/`, etc)

### Componentes
- [ ] `ConteudosPage.jsx` renderizando listagem
- [ ] `ArticlePage.jsx` renderizando artigo MDX
- [ ] `AutorPage.jsx` renderizando perfil de autor
- [ ] `CategoriaPage.jsx` filtrando por categoria
- [ ] `ContentSearch` funcional com Fuse.js
- [ ] `ArticleTOC` sticky desktop + mobile collapse
- [ ] `FAQBlock`, `InlineCTA`, `RelatedArticles`, `AuthorBadge` funcionando

### SEO
- [ ] Meta tags completas por artigo
- [ ] JSON-LD Article + BreadcrumbList em todo artigo
- [ ] JSON-LD FAQPage em pilares
- [ ] JSON-LD HowTo quando aplicável
- [ ] OG images geradas automaticamente
- [ ] Sitemap regenerado no build
- [ ] Script de notify-search-engines funcional

### Listagem
- [ ] Busca client-side operacional
- [ ] Filtro por categoria
- [ ] Filtro por autor
- [ ] Paginação (se >12 artigos)
- [ ] Featured article destacado

### Geração estática
- [ ] Script `generate-seo-pages.mjs` produz HTML por artigo
- [ ] HTML estático tem todas meta tags (validar com view-source)
- [ ] Deploy no GitHub Pages funciona (rotas SPA via 404.html ou similar)

### Navegação
- [ ] Link pra `/conteudos` no header
- [ ] Link pra `/conteudos` no footer
- [ ] Breadcrumb em toda página de conteúdo

### Qualidade
- [ ] Rich Results Test passando pra pilar de exemplo
- [ ] Lighthouse SEO score >95 em artigo de exemplo
- [ ] Lighthouse Performance score >85
- [ ] Sem erros de console
- [ ] Responsive mobile testado
- [ ] Dark mode (se aplicável ao site) funcionando

### Documentação
- [ ] README do `just-site/` atualizado com seção "Central de Conteúdos"
- [ ] CLAUDE.md do `just-site/` atualizado com padrões de conteúdo

## 16. Critério de aceite

Fase 1 está concluída quando:

1. Existe uma URL `wearejust.it/conteudos` que lista artigos publicados.
2. Existe uma URL de artigo, como `wearejust.it/conteudos/cartao-private-label`, renderizando MDX completo com HTML estático, meta tags, JSON-LD e OG image.
3. Rich Results Test do Google valida Article + BreadcrumbList + FAQPage.
4. Sitemap inclui as novas URLs.
5. Header e footer linkam pra `/conteudos`.
6. Build completo roda em menos de 60s.
7. Deploy no GitHub Pages funciona com rotas SPA.

Após aceite, abre-se Fase 2: escrever o pilar 001.

## 17. Estimativa

| Etapa | Tempo |
|---|---|
| Setup MDX + dependências | 0.5 dia |
| Rotas + PAGE_SEO | 0.5 dia |
| ConteudosPage + listagem + busca | 1 dia |
| ArticlePage + TOC + componentes MDX | 1.5 dia |
| AutorPage + CategoriaPage | 0.5 dia |
| Schema builder + aplicação | 1 dia |
| Script de geração HTML estático | 1 dia |
| OG image generator | 0.5 dia |
| Sitemap + notify-search-engines | 0.5 dia |
| QA + ajustes + deploy | 1 dia |
| **Total** | **8 dias-dev** |

## 18. Riscos técnicos

- **MDX + SPA + HTML estático**: a combinação exige atenção na hora de pré-renderizar. Testar com 1 artigo de ponta a ponta antes de escalar.
- **GitHub Pages e rotas dinâmicas**: o site já usa `404.html` pra SPA redirect. Validar que `/conteudos/[slug]` funciona no deploy.
- **App.jsx gigante**: hoje o projeto tem App.jsx monolítico (~5000 linhas). Esta fase é boa oportunidade pra extrair rotas pra `src/pages/` (parte já foi feita, completar).
- **Bundle size**: MDX + Fuse.js podem crescer o bundle. Manter code splitting rigoroso.
- **Build time**: geração de OG images pode ser lenta. Considerar cache por hash do artigo.
