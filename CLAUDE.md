# JUST Site — Contexto do Projeto

## Visão Geral
Site institucional da JUST (marketing/produto). React 19 + Vite 7 + React Router 7. SPA publicada no GitHub Pages com domínio customizado `wearejust.it`.

## Stack
- **Framework**: React 19
- **Build**: Vite 7
- **Roteamento**: React Router DOM 7 (BrowserRouter, rotas limpas via `useNavigate`)
- **i18n**: Solução própria — objeto `T18N` exportado de `src/site/shared.jsx`, hook `useLang()` via `LangContext`, toggle persistido em localStorage (`just-lang`) e URL `?lang=`
- **SEO**: `src/site/seo.js` com `PAGE_SEO` por rota e função `applySeo()` chamada no `useEffect` de cada página
- **Estilo**: Inline styles com design tokens no objeto `T` exportado de `shared.jsx`, sem CSS framework
- **Deploy**: GitHub Pages, branch `gh-pages`, domínio `wearejust.it` (CNAME)

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
    └── PrivacyPage.jsx       # Política de privacidade
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

## Padrão i18n
Todo texto visível vive no objeto `T18N` em `src/site/shared.jsx`.

Para adicionar uma nova string:
1. Adicionar chave em `T18N["pt-BR"].secao`
2. Adicionar tradução equivalente em `T18N["en"].secao`
3. No componente: `const { lang } = useLang(); const tr = (T18N[lang] || T18N["pt-BR"]).secao;`
4. Usar `{tr.chave}` no JSX

**Regra**: nunca hardcodar strings em português diretamente nos componentes. Arrays de dados (timeline, cases, security cards, comparisons, FAQs, hybrid features) também vivem no T18N.

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

## Deploy para GitHub Pages
```bash
npm run build
cp CNAME dist/CNAME
git push origin HEAD:gh-pages --force   # a partir de um branch com o dist/ commitado
```

Branch de desenvolvimento: `teste-visual`
Branch de produção (GitHub Pages): `gh-pages`

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
