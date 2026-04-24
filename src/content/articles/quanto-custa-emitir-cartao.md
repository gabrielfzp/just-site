---
brief: 011
slug: quanto-custa-emitir-cartao
cluster: arranjo-aberto
type: satellite
author: gabriel-pires
termo_alvo: quanto custa emitir cartão
title: "Quanto custa emitir cartão no Brasil: CAPEX, OPEX e break-even sem romantismo"
meta_description: "Guia completo dos custos reais de emissão de cartão no Brasil: setup, tarifas unitárias, custos de bandeira, plástico e logística. Com projeção de break-even e cenários por modelo."
canonical: /conteudos/quanto-custa-emitir-cartao
og_image: /og/quanto-custa-emitir-cartao.png
categoria: Cartões
data_publicacao: 2026-04-23
data_modificacao: 2026-04-23
reading_time: 13
tags:
  - custo emissão cartão
  - capex
  - break-even
  - banking as a service
  - fintech
---

# Quanto custa emitir cartão no Brasil: CAPEX, OPEX e break-even sem romantismo

## Resposta direta

Emitir cartão no Brasil via BIN Sponsor (o caminho mais comum hoje) envolve um setup inicial de R$ 100 mil a R$ 500 mil, um fee mínimo mensal entre R$ 10 mil e R$ 50 mil nos primeiros meses, e custos unitários por conta, transação e KYC que somam entre R$ 2,50 e R$ 6 por usuário ativo por mês. A produção de cartão físico custa R$ 10 a R$ 25 por unidade (incluindo plástico, embolsamento e logística). O break-even típico acontece entre 30 mil e 80 mil cartões ativos, no horizonte de 12 a 24 meses.

## Antes dos números: o que está na conta

O custo de emitir cartão não é uma linha única. É um empilhamento de quatro camadas distintas:

- **CAPEX inicial.** O que você paga para começar. Setup com BaaS, homologação na bandeira, integração de API, primeira tiragem de plástico se for cartão físico, adequações regulatórias, consultoria jurídica.
- **Custos fixos mensais.** O que você paga independentemente de quantos usuários tem. Fee mínimo do BaaS, time interno (produto, engenharia, operações, compliance), infraestrutura, jurídico.
- **Custos variáveis por usuário ou transação.** O que você paga em função da operação. Conta ativa, processamento de transação, KYC, antifraude, bandeira, tokenização em carteiras digitais.
- **Custos de produção física.** Plástico, embolsamento, logística para envio ao usuário.

Cada camada tem sua lógica, sua negociação e seu impacto no P&L. Não vamos abordar só o custo bruto. Vamos mostrar a dinâmica de como tudo isso interage e em que ponto a conta começa a fechar.

## CAPEX: o que custa começar

Vamos detalhar o setup inicial de uma operação de cartão bandeirado via BIN Sponsor.

| Item | Faixa típica |
|---|---|
| Setup com BaaS (integração, homologação, sandbox) | R$ 50.000 a R$ 300.000 |
| Homologação na bandeira (Mastercard, Visa ou Elo) | R$ 20.000 a R$ 80.000 |
| Integração de API (time interno ou parceiro) | R$ 80.000 a R$ 400.000 |
| Primeira tiragem de plástico (5.000 a 20.000 cartões) | R$ 50.000 a R$ 400.000 |
| Consultoria jurídica (contrato, compliance inicial) | R$ 30.000 a R$ 100.000 |
| Adequação regulatória interna | R$ 20.000 a R$ 100.000 |
| **Total CAPEX inicial** | **R$ 250.000 a R$ 1.380.000** |

A faixa é larga porque depende de complexidade do programa, volume inicial, se a operação é B2B ou B2C, e do poder de barganha com os fornecedores. Operações mais simples (cartão pré-pago corporativo para empresa de um nicho específico) ficam na ponta baixa. Operações mais ambiciosas (cartão de crédito consumidor com programa de recompensas) ficam na ponta alta.

Se a operação for em [arranjo fechado private label](/conteudos/cartao-private-label), o CAPEX costuma ser menor: entre R$ 100 mil e R$ 500 mil. Não tem homologação na bandeira, a estrutura tecnológica é mais simples.

Se a operação for com licença própria de instituição de pagamento (sem BaaS), o CAPEX explode: entre R$ 5 milhões e R$ 15 milhões. É outra categoria. Só faz sentido para operação já validada, com volume garantido.

## Custos fixos mensais: o peso do pré-escala

Enquanto a operação não chega a volume, os custos fixos pesam desproporcionalmente. Este é o motivo principal de muitas operações quebrarem antes de atingir break-even.

| Item | Faixa típica mensal |
|---|---|
| Fee mínimo do BaaS | R$ 10.000 a R$ 50.000 |
| Time interno (8 a 20 pessoas iniciais) | R$ 80.000 a R$ 400.000 |
| Infraestrutura (cloud, monitoring, CRM, ferramentas) | R$ 5.000 a R$ 30.000 |
| Jurídico e compliance (retainer ou externo) | R$ 10.000 a R$ 30.000 |
| Marketing e aquisição | R$ 50.000 a R$ 500.000 (variável) |
| **Total custos fixos (sem marketing)** | **R$ 105.000 a R$ 510.000** |

Marketing fica de fora desse somatório porque depende da estratégia. Pode ser zero (crescimento orgânico, B2B via sales) ou meio milhão por mês (campanhas agressivas de aquisição B2C).

O fee mínimo do BaaS é uma cláusula que merece atenção. BaaS cobra fee mínimo justamente porque sabe que operação pequena não gera receita suficiente em tarifas unitárias para cobrir o custo dele. Em uma operação com 3 mil usuários ativos, o fee mínimo representa o maior item de custo do BaaS. Conforme a base cresce, o fee mínimo dilui.

## Custos variáveis: por usuário e por transação

Aqui é onde mora a matemática do unit economics. Cada usuário ativo na sua base custa uma quantia fixa por mês, e cada transação dele gera um custo adicional.

Vamos modelar um usuário típico: ativo, faz 15 transações no mês, TPV mensal de R$ 2.000.

| Item | Custo unitário | Custo mensal por usuário ativo |
|---|---|---|
| Conta ativa (BaaS) | R$ 1,20 | R$ 1,20 |
| Processamento de transação | R$ 0,06 × 15 transações | R$ 0,90 |
| Antifraude | R$ 0,05 × 15 transações | R$ 0,75 |
| KYC (amortizado, a cada 6 meses) | R$ 3,00 / 6 meses | R$ 0,50 |
| Tarifa de bandeira (% do TPV) | 0,30% × R$ 2.000 | R$ 6,00 |
| Apple Pay (se usuário tokenizar) | 0,15% × R$ 2.000 + R$ 0,40 | R$ 3,40 |
| **Custo variável mensal por usuário ativo** | | **R$ 12,75** |

Isso considerando um usuário que usa Apple Pay. Sem Apple Pay, o custo cai para R$ 9,35. Com uso intensivo (30 transações) e Apple Pay, sobe para R$ 16.

## Custos físicos: produção e logística de plástico

Se sua operação inclui cartão físico (quase toda operação B2C e a maioria das B2B inclui), aparece um custo adicional de produção.

| Item | Faixa típica |
|---|---|
| Plástico (cartão padrão) | R$ 3,00 a R$ 8,00 |
| Plástico premium (metal, transparente, cores especiais) | R$ 15,00 a R$ 80,00 |
| Embolsamento (personalização e envelope) | R$ 2,00 a R$ 5,00 |
| Carta personalizada (opcional) | R$ 0,50 a R$ 3,00 |
| Logística (envio ao usuário) | R$ 5,00 a R$ 25,00 |
| **Total produção e envio (cartão padrão)** | **R$ 10,50 a R$ 41,00** |

Em média, uma operação padrão opera com R$ 15 a R$ 20 por cartão enviado. Operações premium (cartão metálico, entrega em caixa de luxo) chegam a R$ 80 ou mais por cartão.

Um ponto importante: cartões físicos têm reposição. A média de mercado é que cada usuário pede 0,5 cartão novo por ano (perda, roubo, expiração). Então o custo anual de plástico por usuário é aproximadamente 1,5× o custo do primeiro cartão.

## O intercâmbio: receita que cobre isso

Antes de chegar no break-even, precisa fechar o lado da receita. O [intercâmbio](/conteudos/intercambio-de-cartao) é a receita principal. Para o mesmo usuário-tipo com TPV de R$ 2.000 mensais:

| Item | Valor mensal |
|---|---|
| Intercâmbio bruto (1,5% do TPV) | R$ 30,00 |
| Float (crédito D+28, Selic 10% ao ano) | R$ 13,50 |
| Tarifa de serviço (se aplicável) | R$ 0,00 a R$ 15,00 |
| **Receita mensal por usuário ativo** | **R$ 43,50 (sem tarifa) a R$ 58,50** |

A margem contribuição por usuário ativo fica entre:

Receita R$ 43,50 - Custo variável R$ 12,75 = **R$ 30,75 por mês por usuário ativo**.

Com 10 mil usuários ativos, isso gera R$ 307.500 de margem contribuição mensal. Para cobrir custos fixos de R$ 200 mil mais custos de marketing e reposição de plástico, precisa crescer. Com 30 mil usuários ativos, margem contribuição passa de R$ 900 mil mensais, o que absorve custos fixos e começa a gerar lucro operacional.

## A matemática do break-even

Juntando tudo, uma operação típica de cartão de crédito consumidor via BaaS, cenário médio:

| Linha | Valor |
|---|---|
| Custos fixos mensais | R$ 200.000 |
| Custos variáveis por usuário ativo | R$ 12,75 |
| Receita por usuário ativo | R$ 43,50 |
| Margem contribuição por usuário ativo | R$ 30,75 |
| Break-even em usuários ativos | R$ 200.000 / R$ 30,75 ≈ 6.500 |

Mas esse cálculo assume que cada usuário é ativo desde o dia 1. Na realidade, a taxa de ativação costuma ser entre 40% e 70%. Então, para ter 6.500 ativos, precisa ter base total de 10.000 a 16.000 usuários cadastrados. E isso depende de quantos meses de operação, porque ativação cresce ao longo do tempo.

Considerando curva realista de ativação e ramp de aquisição, o break-even operacional de uma fintech típica de cartão acontece entre 12 e 24 meses, com base total entre 30 mil e 80 mil usuários. Tudo antes disso é queima de caixa em busca de escala.

Para quem não tem capital para sustentar esse ciclo, a conta simplesmente não fecha. É o motivo principal de muitas operações terminarem em consolidação ou encerramento no primeiro ano.

## Cenários por modelo

A matemática muda conforme o modelo de cartão. Três cenários para comparar:

| Modelo | Break-even estimado | Tempo típico |
|---|---|---|
| Cartão de crédito consumidor via BaaS | 30.000 a 80.000 ativos | 12 a 24 meses |
| Cartão pré-pago corporativo B2B | 5.000 a 15.000 usuários | 6 a 18 meses |
| Cartão private label (arranjo fechado) | 3.000 a 10.000 usuários | 6 a 12 meses |
| Cartão de crédito com licença própria | 150.000+ ativos | 24 a 48 meses |
| Cartão voucher (alimentação/refeição) | 10.000 a 30.000 usuários | 9 a 18 meses |

Esses números são médias de mercado, não promessas. Cada operação tem variações importantes. O ponto é mostrar que o modelo de negócio define o perfil de break-even. Não dá para comparar um cartão private label de benefício corporativo com um cartão de crédito consumidor bandeirado. São jogos diferentes.

## Erros que disparam o custo

Cinco erros que a gente na JUST vê em quase toda operação que falha ou atrasa o break-even:

- **Superestimar ativação.** Projetar 80% de ativação quando o mercado opera em 50% faz a conta fechar no papel mas não no caixa. A ativação é a variável mais subestimada em business plan de cartão.
- **Não renegociar o fee mínimo do BaaS.** Fechar contrato de BaaS com fee mínimo de R$ 50 mil sem ter garantia de escala rápida pode quebrar a operação antes dela começar. Negociar fee mínimo menor no primeiro ano, com escalonamento conforme a base cresce, é uma prática de mercado.
- **Escolher o programa errado.** Operar em pré-pago achando que vai ganhar intercâmbio de crédito. Operar em crédito consumidor para um público que pedia corporativo. Programa errado compromete a rentabilidade unitária para sempre.
- **Subestimar reposição de plástico.** Muita operação projeta 1 cartão por usuário para a vida inteira. No mundo real, é 1,3 a 1,5. Isso adiciona 30% a 50% ao custo de plástico anual.
- **Ignorar fraude e chargeback.** Em operações novas, fraude pode consumir 0,5% a 2% do TPV se não houver antifraude bem calibrado. Perdas por chargeback são custo real, recai sobre o emissor.

## Como a JUST ajuda nessa conta

Se você chegou até aqui e está montando a projeção da sua operação de cartão, o próximo passo é botar os números reais na mesa. A JUST trabalha com fintechs e empresas que querem estruturar operação de cartão e ajuda a desenhar o P&L, escolher o programa certo, negociar com BaaS, e montar o plano de break-even.

Em breve, vamos lançar uma calculadora pública que permite simular o cenário da sua operação em poucos cliques. Por enquanto, se você quer fazer essa conta com mais precisão, [fale com a gente](/contato) e a gente monta junto.

## FAQ

**Quanto custa para começar a emitir cartão no Brasil?**

Via BIN Sponsor (modelo mais comum), o CAPEX inicial fica entre R$ 250.000 e R$ 1.400.000 dependendo da complexidade. Via licença própria, entre R$ 5 milhões e R$ 15 milhões.

**Qual é o fee mínimo mensal de um BaaS?**

Varia de R$ 10.000 a R$ 50.000 no mercado brasileiro. Pode ser menor em operações de nicho, maior em operações com programas customizados ou volume garantido.

**Quantos cartões preciso para chegar ao break-even?**

Depende do modelo. Para cartão de crédito consumidor via BaaS, entre 30 mil e 80 mil ativos. Para pré-pago corporativo, entre 5 mil e 15 mil. Para private label em arranjo fechado, entre 3 mil e 10 mil.

**Quanto tempo até o break-even?**

Entre 12 e 24 meses para a maioria das operações bem planejadas. Mais rápido para private label ou B2B com alto ticket. Mais lento para operações de crédito consumidor com licença própria.

**Quanto custa produzir um cartão físico?**

Plástico padrão com embolsamento e envio: R$ 10 a R$ 25. Plástico premium (metal ou design especial): R$ 30 a R$ 100. Considere reposição de 0,5 cartão por usuário por ano.

**Qual o custo mensal por usuário ativo?**

Entre R$ 2,50 e R$ 16 em custos variáveis, dependendo da frequência de uso, se usa Apple Pay, e do volume transacionado.

**Posso começar sem cartão físico?**

Sim. Cartão virtual e cartão tokenizado (para Apple Pay, Google Pay) já dão boa experiência em boa parte dos casos de uso. Muitas operações começam só com virtual e oferecem físico como premium ou opt-in.

**Qual é o custo de não usar BaaS e ter licença própria?**

Setup inicial entre R$ 5 milhões e R$ 15 milhões, time de 30+ pessoas, prazo de go-live de 12 a 24 meses, e obrigações regulatórias diretas do BACEN. Só faz sentido com operação validada e volume garantido.

**O setup com BaaS é negociável?**

Sim. Todos os itens (setup, fee mínimo, take rate, tarifas unitárias) são negociáveis. Seu poder de barganha depende de volume projetado, exclusividade, tempo de contrato e prontidão técnica.

**Como estimar quanto a minha operação vai custar antes de fechar contrato?**

Use as faixas desse guia como referência, converse com dois ou três BaaS diferentes para benchmark de preço, e monte uma planilha com CAPEX, custos fixos, variáveis, produção de plástico e projeção de receita. A conta só fecha quando você projeta 12 a 24 meses à frente.

## Próximo passo

Se você está modelando uma operação de cartão e precisa de ajuda para desenhar o P&L completo, calcular o break-even e escolher o caminho certo (arranjo aberto, private label, licença própria), a JUST estrutura esse trabalho com você. [Fale com a gente](/contato).
