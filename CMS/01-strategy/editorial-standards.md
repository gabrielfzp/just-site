# Padrões Editoriais — Central de Conteúdos JUST

Padrões reusáveis aplicáveis a **todo artigo** publicado em `/conteudos`. Briefs individuais (`03-content/briefs/NNN-*.md`) complementam com especificidades do tema.

## 1. Frontmatter obrigatório

Todo artigo em markdown começa com este bloco YAML:

```yaml
---
title: "Título completo do artigo (até 60 chars no title tag)"
description: "Meta description até 155 chars, respondendo a dor principal"
slug: "slug-kebab-case"
category: "Meios de pagamento"
cluster: "private-label"
type: "pillar"
author: "gabriel-pires"
publishedAt: "2026-04-20"
updatedAt: "2026-04-20"
readingTime: 14
featured: false
ogImage: "/og/nome-do-arquivo.png"
---
```

Campos:

| Campo | Valores possíveis | Obrigatório |
|---|---|---|
| `type` | `pillar`, `satellite`, `quick-answer` | Sim |
| `cluster` | `private-label`, `antifraude`, `frotas`, `beneficios`, `pagamentos`, `baas` | Sim |
| `author` | slug da pasta `/autores/` | Sim |
| `category` | categoria visível na listagem | Sim |
| `featured` | destaque na home da central | Não (default `false`) |

## 2. Estrutura de artigo pilar

Todo pilar deve ter:

1. **Intro (150-250 palavras)**: responde a pergunta principal nos 2 primeiros parágrafos. Inclui promessa do artigo.
2. **Índice navegável (TOC)**: lista de H2s com âncoras.
3. **8-12 H2s** cobrindo todas as dúvidas do PAA + entidades semânticas do cluster.
4. **Tabelas comparativas** sempre que comparação fizer sentido (mínimo 1).
5. **Seção "Como fazer" com HowTo schema** se o artigo ensina um processo.
6. **FAQ final (8-12 perguntas)** com FAQPage schema.
7. **Autor** visível no topo e rodapé, com link pra `/autores/[slug]`.
8. **CTA final** pra produto da JUST (específico do tema).
9. **Artigos relacionados** (3 satélites do cluster).

**Tamanho alvo**: 3.000-3.500 palavras.

## 3. Estrutura de artigo satélite

Mais enxuto que o pilar:

1. **Intro (100-150 palavras)**
2. **Índice** (se >5 H2s)
3. **5-8 H2s**
4. **1 tabela comparativa ou tabela de dados**
5. **FAQ curto (5-7 perguntas)**
6. **Autor nominal**
7. **1 CTA contextual**
8. **Link obrigatório pro pilar do cluster**

**Tamanho alvo**: 1.500-2.500 palavras.

## 4. Tom e voz

- **Pragmático e direto**. Zero floreio corporativo.
- **Honesto sobre desvantagens**. Sempre incluir seção de trade-offs ou contra-indicações.
- **Números reais** quando possível. Se não houver, dizer "faixa típica" em vez de inventar.
- **Cite fontes** (leis, resoluções BCB, ABECS) para reforçar E-E-A-T.
- **Sem jargão sem explicação**. Se usa BIN, explica BIN.
- **2ª pessoa** (você) pra aproximação, evitando "o leitor" ou "o usuário".
- **Presente do indicativo** como default. Evitar futuro hipotético.
- **Frases curtas**. Parágrafos de 2-4 linhas.

### Glossário de termos e ortografia padrão

| Termo | Grafia correta |
|---|---|
| BACEN | sempre maiúsculo |
| BaaS | assim (não BAAS nem baas no meio de frase) |
| Pix | com P maiúsculo, resto minúsculo |
| cartão private label | minúsculas, sem hífen |
| white label | minúsculas, 2 palavras |
| co-branded | com hífen |
| Resolução BCB 150/21 | assim, não BACEN 150 |
| Lei 12.865/13 | com pontos e barra |
| PAT (Programa de Alimentação do Trabalhador) | sigla + explicação na primeira aparição |
| KYC / PLD-FT | sigla + explicação na primeira aparição |

### Evitar

- "Revolucionário", "inovador", "cutting-edge"
- "No mundo de hoje", "cada vez mais", "diariamente"
- Exclamações
- Em dash (—); usar hífen (-) ou dois pontos (:) ou vírgula
- "Nossa solução", "nosso produto" em artigos neutros; só em CTAs
- Emojis no corpo do artigo
- Primeira pessoa do plural ("nós") fora de CTAs

## 5. Links internos

### Regras

- **Todo artigo linka pro pilar do seu cluster** (se não for o pilar).
- **Todo artigo linka pra ≥1 página de produto** com anchor text natural.
- **Anchor text sempre descritivo**, nunca "clique aqui" ou "saiba mais".
- **Links externos** (leis, BACEN, ABECS): `target="_blank" rel="noopener"` + ideal com `rel="nofollow"` se for concorrente.

### Mapa de URLs do site

| Página | URL |
|---|---|
| Home | `/` |
| JUST Benefits | `/produtos/beneficios` |
| JUST Fleet | `/produtos/frotas` |
| JUST Banking | `/produtos/banking` |
| JUST Expense | `/produtos/despesas` |
| JUST Credit (inclui private label) | `/produtos/antecipacao` |
| JUST Custom | `/produtos/sob-demanda` |
| Sentinel (antifraude) | `/sentinel` |
| Tecnologia | `/tecnologia` |
| Cases | `/cases` |
| Sobre | `/sobre` |
| Contato | `/contato` |

### URLs da central de conteúdo

- Listagem: `/conteudos`
- Artigo: `/conteudos/[slug]`
- Categoria: `/conteudos/categoria/[slug]`
- Autor: `/autores/[slug]`

## 6. Schema.org

### Obrigatório em todo artigo

- **`Article`**: headline, author (Person), datePublished, dateModified, publisher (Organization JUST), image, articleSection
- **`BreadcrumbList`**: Home > Conteúdos > [Categoria] > [Artigo]

### Obrigatório em pilares

- **`FAQPage`**: todas as perguntas do bloco FAQ
- **`Person`** (author): nome, foto, jobTitle, sameAs (LinkedIn, site)

### Condicional

- **`HowTo`**: quando há seção "Como fazer X em N etapas"
- **`VideoObject`**: se houver vídeo incorporado
- **`ImageObject`**: pra diagramas relevantes com legenda

## 7. FAQ padrão

Perguntas devem ser **queries reais**, não inventadas. Fontes:

1. PAA (People Also Ask) da SERP do termo alvo
2. Google autocomplete
3. "Related searches" no rodapé da SERP
4. AnswerThePublic (quando disponível)

Respostas:

- 40-80 palavras cada
- Primeira frase responde direto
- Segunda/terceira frase dá contexto ou exemplo
- Evita CTA interno (CTA vai no corpo do artigo)

## 8. CTAs contextuais

Três posições máximas por pilar. Nunca no primeiro terço do artigo.

| Posição | Trigger | Formato |
|---|---|---|
| Após seção técnica pesada | Leitor sobrecarregado | "Quer conversar sobre o seu caso? [Fale com o time JUST](contato)" |
| Após seção prescritiva | Leitor decidindo | "A JUST opera [produto X]. [Conheça](/produtos/...)" |
| Após case / exemplo | Leitor convencido | "Veja como empresas do seu setor usam. [Cases](/cases)" |

**Proibido**: CTA no título, no índice, na intro, no primeiro H2.

## 9. Autoria e E-E-A-T

Toda publicação precisa ter:

- **Autor nominal** com página `/autores/[slug]`, foto profissional, bio de 3-5 linhas, `sameAs` pra LinkedIn.
- **Revisor técnico nominal** citado no bloco "Revisado por: [Nome]" com data.
- **Disclosure** ao final em artigos comerciais: "A JUST é [o que é]. Este artigo reflete nossa visão e pode conter referências aos nossos produtos."

Autores válidos iniciais:
- `gabriel-pires` (CEO) — pilares e artigos estratégicos
- (expandir conforme o time for sendo mapeado)

## 10. SEO técnico obrigatório

No HTML estático gerado por artigo:

- [ ] `<title>` (até 60 chars)
- [ ] `<meta name="description">` (até 155 chars)
- [ ] `<link rel="canonical">`
- [ ] `<meta property="og:title">`
- [ ] `<meta property="og:description">`
- [ ] `<meta property="og:image">` (1200x630)
- [ ] `<meta property="og:type" content="article">`
- [ ] `<meta property="og:url">`
- [ ] `<meta name="twitter:card" content="summary_large_image">`
- [ ] `<meta property="article:published_time">`
- [ ] `<meta property="article:modified_time">`
- [ ] `<meta property="article:author">`
- [ ] `<meta property="article:section">` (categoria)
- [ ] `<meta property="article:tag">` (múltiplas)
- [ ] `<link rel="alternate" hreflang="pt-BR">` (sem versão en por 12 meses)
- [ ] JSON-LD Article
- [ ] JSON-LD BreadcrumbList
- [ ] JSON-LD FAQPage (se pilar)
- [ ] JSON-LD HowTo (se aplicável)
- [ ] Sitemap atualizado
- [ ] Ping Google Search Console (Indexing API ou submissão de sitemap)
- [ ] Ping IndexNow (Bing/Yandex)

## 11. Imagens e assets

- **Formato**: preferir AVIF, fallback WebP, fallback PNG.
- **Largura máxima**: 1600px. Servir `srcset` com 400/800/1200/1600.
- **Alt text obrigatório**: descritivo, com keyword onde natural.
- **Localização**: `/public/conteudos/[slug]/` pra assets do artigo.
- **OG image**: `/public/og/[slug].png` (1200x630), gerada no build ou manualmente.
- **Diagramas**: preferir SVG inline pra manter crawlabilidade.

## 12. Checklist de publicação

Antes de fazer merge do PR do artigo:

- [ ] Frontmatter completo
- [ ] Estrutura H1/H2 seguindo o brief
- [ ] FAQ com ≥8 perguntas (pilar) ou ≥5 (satélite)
- [ ] Tabela comparativa presente
- [ ] Links internos pro pilar do cluster e pra ≥1 página de produto
- [ ] Autor configurado
- [ ] OG image gerada e commitada
- [ ] Schema JSON-LD validado (Rich Results Test)
- [ ] Meta description testada no preview SERP
- [ ] Imagens otimizadas e com alt text
- [ ] Tamanho alvo atingido
- [ ] Revisão ortográfica (português brasileiro)
- [ ] Entidades semânticas do cluster presentes (ver brief específico)
- [ ] CTA posicionado conforme regras
- [ ] BACKLOG atualizado com status `in-review`

## 13. Checklist pós-publicação

Até 24h após publicação:

- [ ] URL acessível com canonical correto
- [ ] HTML estático tem todas meta tags (view-source)
- [ ] JSON-LD validado no Rich Results Test
- [ ] Sitemap atualizado
- [ ] Submissão manual no Google Search Console
- [ ] IndexNow disparado
- [ ] Compartilhamento em LinkedIn do CEO (amplificação social)
- [ ] BACKLOG atualizado com status `published` e URL
- [ ] Entrada criada em `03-content/published/[slug].md` com metadata
