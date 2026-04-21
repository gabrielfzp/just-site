# JUST Site

Site institucional da JUST em React 19 + Vite 7.

## Desenvolvimento

Via Docker:

```bash
~/Documents/Claude/infra/scripts/project.sh up sitejust
```

Acesse `http://sitejust.localhost`.

Via host direto:

```bash
npm run dev
```

Acesse `http://localhost:5175`.

Não rode Docker e host direto ao mesmo tempo, porque ambos usam a porta `5175`.

## Build

```bash
npm run build
```

O build gera:

- HTML estático das páginas institucionais.
- HTML estático da Central de Conteúdos, artigos, categorias e autores.
- Imagens Open Graph dos artigos.
- Sitemap atualizado.
- `llms.txt` e versões Markdown dos artigos.

## SEO, Analytics e LLMO

O site tem suporte opcional a GA4, Plausible, verificações de Search Console/Bing e eventos de conversão.

Crie um `.env` local a partir de `.env.example`:

```bash
cp .env.example .env
```

Variáveis:

- `VITE_GA4_ID`: Measurement ID do GA4, exemplo `G-XXXXXXXXXX`.
- `VITE_PLAUSIBLE_DOMAIN`: domínio no Plausible, exemplo `wearejust.it`.
- `VITE_PLAUSIBLE_SRC`: script do Plausible. Use o padrão se não houver proxy próprio.
- `VITE_GOOGLE_SITE_VERIFICATION`: token da meta tag do Google Search Console.
- `VITE_BING_SITE_VERIFICATION`: token da meta tag do Bing Webmaster.

Eventos enviados quando analytics estiver configurado:

- `contact_page_view`: visita em `/contato`.
- `contact_cta_click`: clique em CTAs para contato.
- `contact_form_submit`: envio de formulário.
- `contact_form_error`: erro no formulário.
- `whatsapp_click`: clique no WhatsApp.
- `author_linkedin_click`: clique no LinkedIn do autor.
- `company_linkedin_click`: clique no LinkedIn da empresa.
- `article_view`: visualização de artigo.
- `article_read_progress`: leitura em 25%, 50%, 75% e 100%.
- `llm_referral`: visita referenciada por ChatGPT, Perplexity, Claude, Gemini, Copilot ou similares.

## Central de Conteúdos

A Central de Conteúdos SEO fica em `/conteudos` e usa artigos em MDX com frontmatter.

Arquivos principais:

- `src/content/articles/*.mdx`: artigos publicados.
- `src/content/authors.js`: autores.
- `src/content/categories.js`: categorias editoriais.
- `src/content/generated/articles.js`: manifest gerado antes do build.
- `src/pages/ConteudosPage.jsx`: listagem principal.
- `src/pages/ArticlePage.jsx`: template de artigo.
- `scripts/generate-content-manifest.mjs`: gera metadados estáticos dos artigos.
- `scripts/generate-seo-pages.mjs`: gera HTML SEO das páginas institucionais e de conteúdo.
- `scripts/generate-article-images.mjs`: gera imagens internas de artigos.
- `scripts/generate-og-images.mjs`: gera imagens Open Graph 1200x630.
- `scripts/generate-sitemap.mjs`: atualiza `public/sitemap.xml` e `dist/sitemap.xml`.

Para adicionar artigo:

1. Criar um `.mdx` em `src/content/articles/`.
2. Preencher frontmatter com `title`, `description`, `slug`, `category`, `author`, `publishedAt`, `updatedAt`, `tags` e `faqs` quando houver.
3. Rodar `npm run build`.
4. Conferir `dist/conteudos/[slug]/index.html`, OG image em `public/og/[slug].png` e entrada no sitemap.

## Deploy

```bash
npm run build
cp CNAME dist/CNAME
git push origin HEAD:gh-pages --force
```
