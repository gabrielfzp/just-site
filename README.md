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
