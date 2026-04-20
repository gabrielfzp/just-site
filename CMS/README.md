# CMS — Central de Conteúdos JUST

Repositório de estratégia, briefs e documentação da Central de Conteúdos SEO publicada em `wearejust.it/conteudos`.

## Estrutura

```
CMS/
├── CLAUDE.md                              Mapa da pasta (agente carrega auto)
├── README.md                              Este arquivo
│
├── 01-strategy/
│   ├── STRATEGY.md                        Tese, clusters, tiers, decisões
│   ├── keyword-research-2026-04.md        Dados brutos de SERP (6 clusters)
│   └── editorial-standards.md             Padrões editoriais reusáveis
│
├── 02-implementation/
│   └── infra-spec.md                      Spec técnica da Fase 1
│
└── 03-content/
    ├── BACKLOG.md                         Pipeline de artigos
    ├── briefs/                            Briefs editoriais por artigo
    │   └── 001-cartao-private-label.md    Pilar 1 (Private Label)
    └── published/                         Artigos publicados + metadata
```

## Status consolidado

| Item | Status | Última atualização |
|---|---|---|
| Keyword research dos 6 clusters | Concluído | 2026-04-20 |
| Decisão do primeiro cluster | Private Label | 2026-04-20 |
| Brief do pilar 001 | Pronto | 2026-04-20 |
| Briefs dos satélites 002-004 | Pendente | — |
| Infra `/conteudos` (Fase 1) | Pendente | — |
| Primeiro artigo publicado | Pendente | — |

## Cluster ativo

**Private Label** — pilar e 3 satélites em pipeline. Detalhes em [`03-content/BACKLOG.md`](03-content/BACKLOG.md).

## Próximos marcos

1. Validar volumes no Keyword Planner (Gabriel, 10 min)
2. Implementar infra `/conteudos` (dev, 1-2 semanas)
3. Escrever pilar 001 com base no brief (redator, 1 semana)
4. Publicar pilar + submeter Search Console + IndexNow
5. Detalhar briefs 002, 003, 004
6. Publicar satélites ao longo de 30 dias
7. Medir por 60-90 dias no GSC antes de expandir cluster

## Conexões

- **Projeto do site**: [`../`](../) (React 19 + Vite 7 + React Router 7)
- **CLAUDE.md do site**: [`../CLAUDE.md`](../CLAUDE.md)
- **Domínio em produção**: https://wearejust.it
- **Deploy**: GitHub Pages branch `gh-pages`
