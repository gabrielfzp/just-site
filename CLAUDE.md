# JUST Site — Contexto do Projeto

## Visão Geral
Site institucional da JUST (marketing/produto). React 19 + Vite 7 + React Router 7. SPA servida pela **VPS Kaleo** (nginx) no domínio `wearejust.it`.

## Stack
- **Framework**: React 19
- **Build**: Vite 7
- **Roteamento**: React Router DOM 7 (BrowserRouter, rotas limpas via `useNavigate`)
- **i18n**: Solução própria — objeto `T18N` exportado de `src/site/shared.jsx`, hook `useLang()` via `LangContext`, toggle persistido em localStorage (`just-lang`) e URL `?lang=`
- **SEO**: `src/site/seo.js` com `PAGE_SEO` por rota e função `applySeo()` chamada no `useEffect` de cada página
- **Estilo**: Inline styles com design tokens no objeto `T` exportado de `shared.jsx`, sem CSS framework
- **Deploy**: VPS Kaleo (nginx, `/var/www/wearejust`) via `./scripts/deploy-site.sh`

## Estrutura de Arquivos
```
src/
├── App.jsx                  # Orquestrador: rotas, lang state, layout, ErrorBoundary
├── main.jsx                 # Entry point
├── index.css                # Reset global mínimo
│
├── site/
│   ├── shared.jsx           # Tudo compartilhado: T18N, LangContext, useLang, T (tokens),
│   │                        # componentes base (Btn, Tag, Reveal, Metric, SectionTitle,
│   │                        # JustLogo, ProductIcon, PRODUCT_COLORS, ErrorBoundary)
│   └── seo.js               # PAGE_SEO por rota, applySeo(), getSeo(), SITE_URL
│
├── data/
│   └── solutions.js         # SOL — config dos 6 produtos (título, subtitle, models,
│                            # capabilities) usado por SolutionPage e SentinelPage
│
├── content/
│   ├── articles/            # Artigos MDX da Central de Conteúdos
│   ├── authors.js           # Autores nominais
│   ├── categories.js        # Categorias editoriais
│   └── generated/articles.js # Manifest gerado antes do build
│
├── components/
│   └── Layout.jsx           # Header (nav, LangToggle, mobile menu) + Footer
│                            # Importa de shared.jsx e recebe lang/setLang via props
│
└── pages/
    ├── HomePage.jsx          # Hero orbital, comparisons, cards, process, cases preview
    ├── SolutionPage.jsx      # Página de produto dinâmica (usa SOL[key])
    ├── SentinelPage.jsx      # Página dedicada do produto Sentinel
    ├── StackPage.jsx         # Tecnologia: plataforma, integrações, segurança
    ├── CasesPage.jsx         # Cases com métricas e cards
    ├── SobrePage.jsx         # Sobre: tese, princípios, timeline, liderança
    ├── ContatoPage.jsx       # Formulário (Google Apps Script) + FAQ
    ├── PrivacyPage.jsx       # Política de privacidade
    ├── ConteudosPage.jsx     # Central de Conteúdos
    ├── ArticlePage.jsx       # Template de artigo MDX
    ├── CategoriaPage.jsx     # Listagem por categoria
    └── AutorPage.jsx         # Perfil de autor
```

## Páginas e Rotas
| Rota | Componente | Chave SEO |
|------|-----------|-----------|
| `/` | `HomePage` | `home` |
| `/produtos/:key` | `SolutionPage` | `solution.[key]` |
| `/tecnologia` | `StackPage` | `stack` |
| `/cases` | `CasesPage` | `cases` |
| `/sobre` | `SobrePage` | `sobre` |
| `/contato` | `ContatoPage` | `contato` |
| `/sentinel` | `SentinelPage` | `sentinel` |
| `/privacidade` | `PrivacyPage` | `privacy` |
| `/conteudos` | `ConteudosPage` | `conteudos` |
| `/conteudos/:slug` | `ArticlePage` | artigo |
| `/conteudos/categoria/:slug` | `CategoriaPage` | categoria |
| `/autores/:slug` | `AutorPage` | autor |

## Padrão i18n
Todo texto visível vive no objeto `T18N` em `src/site/shared.jsx`.

Para adicionar uma nova string:
1. Adicionar chave em `T18N["pt-BR"].secao`
2. Adicionar tradução equivalente em `T18N["en"].secao`
3. No componente: `const { lang } = useLang(); const tr = (T18N[lang] || T18N["pt-BR"]).secao;`
4. Usar `{tr.chave}` no JSX

**Regra**: nunca hardcodar strings em português diretamente nos componentes. Arrays de dados (timeline, cases, security cards, comparisons, FAQs, hybrid features) também vivem no T18N.

## Analytics e medição

Duas camadas, uma chamada só. `trackEvent`/`trackPageView` em `src/lib/analytics.js` emitem **para o GA4 e para o JUST Radar ao mesmo tempo** — o GA4 responde "quantos", o Radar responde "quem". Foi a divergência entre dois caminhos separados que fez o site passar 30 dias sem nenhum `page_view`.

### GA4
Propriedade `G-ZLGE23K7KT`, ativa desde 2026-08-10. ID em `VITE_GA4_ID` (gitignored), entra no bundle no build.

- gtag injetado dinamicamente com `send_page_view: false`. Em SPA o page view é um **evento explícito** por rota (`gtag("event","page_view",…)`), não `config` repetido — `config` repetido simplesmente não emite nada quando o inicial tem `send_page_view:false`. Por isso, na Medição Otimizada, "alterações de página com base no histórico do navegador" fica **desligada**.
- **Consent Mode v2**: o `consent default` é enviado com tudo negado ANTES da tag carregar, e atualizado no aceite. Sem cookie até o visitante decidir.
- **Guard de localhost**: em `localhost`, `127.0.0.1` e `*.localhost` o GA4 não inicializa.
- Nunca use `source` como nome de parâmetro: o GA4 o trata como parâmetro de **atribuição** e ele reescreve a origem da sessão. Use `link_label`.
- Plausible removido em ago/2026. Não reintroduzir.

### JUST Radar (identidade first-party)
SDK em `src/lib/just-id.js`, coletor em `https://i.wearejust.it` (`VITE_IDENTITY_URL`; vazio desliga tudo).

- Cookie `just_vid` emitido **pelo servidor**, HttpOnly, 400 dias. Cookie criado por JS morreria em 7 dias no Safari.
- **Nada é gravado antes da escolha.** Recusa mantém só contagem agregada anônima; aceite depois de recusar não existe sem apagar o que havia.
- O contexto de chegada (referrer, UTM, click ids) fica em memória desde o load, então aceitar 20s depois preserva a atribuição sem ter persistido nada antes da hora.
- Corpo vai como `text/plain` para evitar preflight — é o que faz o último evento da sessão não se perder no unload.
- **Código de referência no WhatsApp**: o SDK carimba `[ref JX-XXXX]` no texto pré-preenchido. É o elo que amarra a conversa (canal que mais converte) à navegação.
- Banner: `src/components/ConsentBanner.jsx`. Os dois botões têm o mesmo peso visual de propósito.

### Mídia
- **Enhanced Conversions**: `marcarConversaoIdentificada()` manda email/telefone com SHA-256 no envio do formulário. Só com consentimento.
- **Meta Pixel**: `VITE_META_PIXEL_ID` (hoje vazio = desligado). Carrega só após o aceite, nunca antes.

Eventos: `page_view`, `page_exit`, `scroll_50`, `scroll_90`, `contact_form_submit`, `contact_form_error`, `contact_cta_click`, `contact_page_view`, `whatsapp_click`, `author_linkedin_click`, `company_linkedin_click`, `article_view`, `article_read_progress`, `llm_referral`.

## Como Rodar

### Via Docker (recomendado)
```bash
~/Documents/Claude/infra/scripts/project.sh up sitejust
# Acesse: http://sitejust.localhost
```

### Via host direto
```bash
npm run dev
# Acesse: http://localhost:5175
```

> **Gotcha de porta**: nunca rodar container e `npm run dev` ao mesmo tempo — ambos querem a porta 5175. Escolha um ou outro. Para usar Docker, derruba o processo nativo primeiro.

## Central de Conteúdos

A Central de Conteúdos SEO está documentada em `CMS/` e publicada em `/conteudos`.

Padrões técnicos:
- Artigos ficam em `src/content/articles/*.mdx`.
- Metadados vivem no frontmatter do artigo.
- Autores vivem em `src/content/authors.js`.
- Categorias vivem em `src/content/categories.js`.
- Antes do build, `scripts/generate-content-manifest.mjs` gera `src/content/generated/articles.js`.
- Após o build, scripts geram imagens OG, HTML estático por rota de conteúdo e sitemap.

Ao criar ou alterar artigos, rode:

```bash
npm run build
```

URLs esperadas:
- `/conteudos`
- `/conteudos/[slug]`
- `/conteudos/categoria/[slug]`
- `/autores/[slug]`

Regra editorial: conteúdo em pt-BR nos primeiros 12 meses. Não criar versão EN para artigos ainda.

## Deploy

```bash
./scripts/deploy-site.sh "mensagem do commit"
```

**Produção é a Kaleo**: VPS dedicada, `179.198.124.84`, nginx servindo
`/var/www/wearejust`, alias `ssh kaleo`. O DNS de `wearejust.it` aponta para
ela, e é o `rsync` do script que publica o build.

O mesmo build também é espelhado no branch `gh-pages`, que hoje serve apenas
como **reserva fria para rollback de DNS** — nenhum visitante é atendido por
ele enquanto o DNS estiver na Kaleo. Enquanto os dois destinos existirem,
deploy parcial é pior que nenhum: o rollback serviria conteúdo velho sem
ninguém perceber. Por isso o script para no primeiro erro.

A Kaleo também roda o **shipper da Temso** (`temso-shipper.service`), que
envia logs de crawler para o painel de AI visibility. O IP do visitante só
sai quando o user-agent é crawler conhecido (map no nginx): visitante humano
tem o IP suprimido antes de qualquer envio, conforme a política do site.

O script antigo `deploy-gh-pages.sh` continua existindo só como referência.

**Use o script, não os comandos à mão.** Ele existe por causa de duas quebras
reais em produção, as duas silenciosas:

1. `git commit -a` **não adiciona arquivo novo**. Como os bundles têm hash no
   nome, todo build gera nomes novos: o commit levava só as remoções e o site
   ficava sem JS.
2. `rsync -a` compara **tamanho + mtime**. O `index.html` novo tem exatamente
   o mesmo tamanho do antigo (mudam 8 caracteres do hash lá dentro) e o
   `git worktree add` costuma escrever no mesmo segundo do build — então o
   rsync pulava o arquivo e publicava o HTML velho apontando para um bundle
   inexistente. Site inteiro em 404 no JS.

O script usa `--checksum`, `git add -A` e **aborta antes do push** se algum
HTML referenciar asset ausente.

Branch de desenvolvimento: `teste-visual`
Branch `gh-pages`: espelho do build para rollback, não é a produção.

## Infraestrutura Docker
Arquivos no projeto:
- `Dockerfile.dev` — Node 20, `npx vite --host 0.0.0.0 --port 5175`
- `docker-compose.yml` — standalone, sem binding de host
- `docker-compose.traefik.yml` — override com rota `sitejust.localhost → 5175`

Referências em `~/Documents/Claude/infra/`:
- `scripts/project.sh` — case `sitejust`, aceita path absoluto (primeiro projeto fora de `/Devs/`)
- `portal/projects.json` — entry com stack, comandos e notas de conflito de porta
- `portal/icons/sitejust.svg` — ícone âmbar com globo institucional (120x120)
- `PORTS.md` — porta 5175 reservada para Site JUST
