# Backlog de Conteúdo

Pipeline ativo de artigos da Central de Conteúdos. Atualizar a cada mudança de status.

## Legenda de status

| Status | Significado |
|---|---|
| `briefing` | Brief ainda sendo montado |
| `ready-to-write` | Brief pronto, aguardando redator |
| `writing` | Redator trabalhando |
| `in-review` | Revisor técnico avaliando |
| `ready-to-publish` | Aprovado, aguardando publicação |
| `published` | No ar |
| `paused` | Pausado |

## Cluster ativo: Private Label

### Pilar

| # | Slug | Tipo | Termo alvo | Dificuldade | Brief | Status |
|---|---|---|---|---|---|---|
| 001 | `cartao-private-label` | pillar | cartão private label | MÉDIA | [001](briefs/001-cartao-private-label.md) | published |

### Satélites

| # | Slug | Tipo | Termo alvo | Dificuldade | Brief | Status |
|---|---|---|---|---|---|---|
| 002 | `white-label-vs-private-label` | satellite | white label vs private label | MÉDIA | [002](briefs/002-white-label-vs-private-label.md) | ready-to-write |
| 003 | `cartao-bandeirado-o-que-e` | satellite | cartão bandeirado | MÉDIA | [003](briefs/003-cartao-bandeirado-o-que-e.md) | ready-to-write |
| 004 | `diferenca-cartao-corporativo-empresarial` | satellite | diferença cartão corporativo e empresarial | MÉDIA | [004](briefs/004-diferenca-cartao-corporativo-empresarial.md) | ready-to-write |

### Ordem de publicação recomendada

1. **001** (pilar) — primeiro, porque satélites linkam pra ele
2. **002** (white label vs private label) — comparativo direto, captura cauda de decisão
3. **003** (cartão bandeirado) — conceitual, amplia universo semântico
4. **004** (diferença corporativo vs empresarial) — tráfego informacional, pivot comercial

**Cadência sugerida**: 1 artigo a cada 10 dias. Cluster inteiro publicado em ~40 dias.

## Próximos clusters (não ativos)

### Antifraude

Ativação prevista: após 60 dias do pilar 001 publicado, com análise de GSC.

Pipeline pré-planejado:
- Pilar: `antifraude-transacional`
- Satélites: `risk-score-antifraude`, `motor-antifraude-cartao`, `autorizacao-transacao-tempo-real`

Racional: alinha com lançamento recente do Sentinel, SERP de pares diretos (Dock, QI Tech, Transfeera).

### Frotas

Ativação prevista: após 120 dias ou conforme sinal de GSC.

Pipeline pré-planejado:
- Pilar: `cartao-frota-como-funciona`
- Satélites: `cartao-abastecimento-empresarial`, `cartao-frota-pequena-empresa`

Racional: SERP pt-BR contaminada por Portugal, espaço aberto.

## Publicados

| Slug | URL publicada | Publicado em | Cluster | Tipo | Termo inicial | Metadata |
|---|---|---|---|---|---|---|
| `cartao-private-label` | `https://wearejust.it/conteudos/cartao-private-label` | 2026-04-20 | private-label | pillar | cartão private label | [metadata](published/cartao-private-label.md) |

Quando publicar, mover pra `03-content/published/[slug].md` com metadata:

```yaml
---
slug: "..."
publishedUrl: "https://wearejust.it/conteudos/..."
publishedAt: "..."
cluster: "..."
type: "pillar | satellite"
initialKeyword: "..."
---

## Performance (atualizar mensalmente)

| Mês | Impressões | Cliques | Posição média | Conversões |
|-----|------------|---------|---------------|------------|
```

## Regras do backlog

1. Todo artigo tem número sequencial (001, 002...). Jamais reutilizar.
2. Mudança de status = atualizar esta tabela E o brief correspondente.
3. Satélites não saem de `briefing` sem o pilar estar `ready-to-publish` ou publicado.
4. Se um artigo for descartado, manter linha com status `paused` e nota explicando motivo.
5. Novos clusters entram como seção separada, sem se misturar ao cluster ativo.

## Decisões registradas

### 2026-04-20
- Cluster Private Label escolhido como primeiro. Detalhes em `01-strategy/STRATEGY.md`.
- Satélites 002, 003, 004 priorizados com base em dificuldade MÉDIA e suporte semântico ao pilar.
- Ordem de publicação definida: pilar → comparativo → conceitual → decisional.
- Briefs 002, 003, 004 escritos e movidos para `ready-to-write`. Redator pode puxar qualquer um na ordem recomendada.
