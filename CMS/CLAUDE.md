# CMS JUST — Central de Conteúdos

Esta pasta documenta a estratégia, implementação e produção da **Central de Conteúdos SEO** da JUST, publicada em `wearejust.it/conteudos`.

Objetivo: construir autoridade temática em meios de pagamento, BaaS, cartões, benefícios, frotas e antifraude, gerando tráfego orgânico qualificado que converta em demanda comercial.

## Mapa de navegação por intenção

| Se você quer... | Leia |
|---|---|
| Entender a estratégia, ordem de clusters, decisões | [`01-strategy/STRATEGY.md`](01-strategy/STRATEGY.md) |
| Ver dados brutos de SERP, priorização de termos | [`01-strategy/keyword-research-2026-04.md`](01-strategy/keyword-research-2026-04.md) |
| Seguir padrões editoriais, schema, tom, estrutura | [`01-strategy/editorial-standards.md`](01-strategy/editorial-standards.md) |
| Implementar a infra técnica `/conteudos` no site | [`02-implementation/infra-spec.md`](02-implementation/infra-spec.md) |
| Ver pipeline de artigos, prioridades, status | [`03-content/BACKLOG.md`](03-content/BACKLOG.md) |
| Escrever o próximo artigo | `03-content/briefs/NNN-slug.md` + `editorial-standards.md` |
| Ver artigos já publicados com metadata | `03-content/published/` |

## Por tarefa

**Você é um redator escrevendo um artigo novo:**
1. Leia [`03-content/BACKLOG.md`](03-content/BACKLOG.md) e pegue o próximo com status `ready-to-write`
2. Leia o brief em `03-content/briefs/NNN-slug.md`
3. Leia [`01-strategy/editorial-standards.md`](01-strategy/editorial-standards.md)
4. Escreva o artigo respeitando estrutura H1/H2, FAQ, CTAs e links internos do brief
5. Atualize o BACKLOG com status `in-review`

**Você é um dev implementando a infra `/conteudos`:**
1. Leia [`02-implementation/infra-spec.md`](02-implementation/infra-spec.md)
2. Leia o [`CLAUDE.md`](../CLAUDE.md) do projeto para contexto do stack
3. Siga o checklist de entrega ao final do spec

**Você é um PM/estrategista validando direção:**
1. Leia [`01-strategy/STRATEGY.md`](01-strategy/STRATEGY.md)
2. Revise [`03-content/BACKLOG.md`](03-content/BACKLOG.md) pra ver execução vs plano

## Regras duras

- Todo conteúdo é em **pt-BR**. Versão em inglês não entra nos primeiros 12 meses.
- Todo brief segue o template de [`01-strategy/editorial-standards.md`](01-strategy/editorial-standards.md).
- Toda publicação atualiza o sitemap e dispara ping Google Search Console + IndexNow.
- Todo artigo tem autor nominal (não "JUST" genérico). Validação técnica é interna, sem pessoa pública adicional.
- Toda decisão de mudança de estratégia entra em [`01-strategy/STRATEGY.md`](01-strategy/STRATEGY.md) na seção "Histórico de decisões".

## Status atual (atualizar a cada marco)

- **Fase 0 (descoberta e research)**: concluída em 2026-04-20
- **Fase 1 (infra `/conteudos`)**: implementada localmente em 2026-04-20; pendente validação externa Rich Results/deploy
- **Fase 2 (pilar + 3 satélites do cluster Private Label)**: brief 001 pronto, 002-004 pendentes
- **Cluster ativo**: Private Label
