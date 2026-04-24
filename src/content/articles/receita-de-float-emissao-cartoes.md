---
brief: 009
slug: receita-de-float-emissao-cartoes
cluster: arranjo-aberto
type: satellite
author: gabriel-pires
termo_alvo: receita de float cartão
title: "Receita de float em emissão de cartões: o dinheiro parado que rende enquanto espera"
meta_description: "Receita de float é o rendimento que a instituição de pagamento ganha enquanto o dinheiro da transação espera liquidar. Entenda como funciona, quanto rende e por que isso deve ser repassado a você emissor."
canonical: /conteudos/receita-de-float-emissao-cartoes
og_image: /og/receita-de-float-emissao-cartoes.png
categoria: Cartões
data_publicacao: 2026-04-23
data_modificacao: 2026-04-23
reading_time: 9
tags:
  - float
  - receita de float
  - emissão de cartão
  - banking as a service
  - tesouraria
---

# Receita de float em emissão de cartões: o dinheiro parado que rende enquanto espera

## Resposta direta

Receita de float é o rendimento financeiro que uma instituição de pagamento gera ao investir, em títulos públicos seguros, o dinheiro que fica parado nas contas enquanto espera ser liquidado para o estabelecimento comercial. Em operações de cartão de crédito com liquidação em 28 dias (D+28), o float pode chegar a 1% a 1,5% do TPV mensal a títulos da Selic. É receita legítima do emissor e deve ser repassada pelo BaaS ao cliente que contratou o BIN Sponsor.

## O que é float, na prática

Quando você paga uma compra de R$ 100 no cartão de crédito, o estabelecimento não recebe os R$ 100 no dia seguinte. Recebe geralmente em 28 dias corridos (D+28), no modelo padrão de cartão de crédito à vista no Brasil. Esse prazo existe porque a bandeira, o adquirente, a instituição de pagamento e o sistema como um todo trabalham com janelas de liquidação padronizadas.

Durante esses 28 dias, o dinheiro sai da conta do consumidor (ou da fatura dele, no caso de crédito), passa pela bandeira, passa pelo adquirente, passa pela instituição de pagamento do emissor, e em algum momento aterriza na conta do estabelecimento.

Enquanto o dinheiro está parado em algum ponto desse fluxo, ele não está rendendo para o dono final. Está rendendo para quem o tem em custódia naquele instante. É isso que a gente chama de float.

No Brasil, onde a Selic anual hoje está perto de 10% ao ano, o dinheiro em custódia rende de forma consistente em títulos públicos de curto prazo (Tesouro Selic, DI, operações compromissadas). Quem tem R$ 100 milhões em float ganha R$ 800 mil a R$ 900 mil por mês, só por ter o dinheiro passando pela conta. É receita de verdade.

## Por que o float existe

O float nasce da assimetria entre a janela de pagamento do consumidor e a janela de recebimento do estabelecimento. Em cartão de crédito, essa assimetria é grande:

- O consumidor paga a fatura em datas fixas (normalmente mensal), mas a transação aconteceu em qualquer dia do ciclo.
- O estabelecimento quer receber o quanto antes, mas a janela padrão é D+28.

A adquirente antecipa o pagamento ao estabelecimento (via recebível), cobrando uma taxa que compensa o risco. Essa antecipação é o que sustenta o modelo comercial de Stone, Cielo e Rede hoje. Mesmo assim, a liquidação formal da transação segue o calendário da bandeira.

No meio desse fluxo, o dinheiro aterrissa temporariamente em contas de instituições de pagamento. Cada parada gera um float. Quem tem a conta em custódia nessa parada rende o dinheiro ali.

Em cartão pré-pago e débito, o prazo de liquidação é D+2 (dois dias úteis). O float existe, mas é muito menor. Em cartão de crédito, D+28, o float é relevante.

## Quanto rende: a matemática

Vamos fazer a conta com números realistas. Imagine uma fintech que emite cartões de crédito, tem 30 mil cartões ativos, ticket médio mensal por usuário de R$ 1.500. Resulta em TPV mensal de R$ 45 milhões.

O prazo médio de liquidação é D+28. Isso significa que, a qualquer momento, há aproximadamente 28 dias de TPV parado em diferentes pontos do fluxo. Considerando a conta da instituição de pagamento que sustenta o emissor, o saldo médio parado pode ser de 15 a 25 dias de TPV, dependendo da estrutura contratual.

Usando 20 dias como média:

- R$ 45 milhões mensais = R$ 1,5 milhão de TPV diário.
- R$ 1,5 milhão × 20 dias = R$ 30 milhões em saldo médio parado na conta da instituição de pagamento.

Com Selic a 10% ao ano (aproximadamente 0,8% ao mês), o rendimento desses R$ 30 milhões é de R$ 240 mil por mês. Isso é só rendimento financeiro. Sem nenhuma atividade comercial adicional.

Em base anual, são R$ 2,88 milhões de receita de float para essa operação. Dependendo do contrato com o BaaS, essa receita é repassada em 50% a 100% para a fintech.

Para uma operação de 30 mil cartões, isso muda o P&L de forma material. Em cartão de crédito com liquidação longa, o float é a segunda fonte de receita mais importante, logo depois do intercâmbio.

## Quem é dono do float

Aqui é onde a conversa contratual fica crítica.

Juridicamente, o float é gerado na conta da instituição de pagamento que está com o dinheiro em custódia. Regulatoriamente, essa instituição pode investir o float em títulos públicos seguros, respeitando as exigências do BACEN sobre reservas e liquidez.

Comercialmente, o float é considerado receita do emissor. Quem assumiu o risco de emitir o cartão, quem bancou a relação com o cliente, quem bancou os custos operacionais, esse é quem tem direito à receita gerada pelo dinheiro que passa pelo cartão dele.

Na prática, em uma operação via [BIN Sponsor](/conteudos/bin-sponsor-o-que-e), o float é gerado na conta do BaaS (sponsor). O BaaS então repassa o float ao cliente que contratou o BIN, via contrato.

O problema é que muita fintech nem sabe que tem direito a esse repasse. Assina contrato com o BaaS, foca no intercâmbio, e deixa de pegar a receita de float na mesa. Em operações de crédito relevantes, são centenas de milhares de reais por ano ficando no BaaS em vez de ir para a fintech.

Se você contratou BaaS e não tem cláusula clara de repasse de float, levanta a mão, chama seu account e pergunta. Isso é dinheiro seu.

## Como o float é repassado

Os modelos comerciais mais comuns no mercado:

- **Repasse integral (100% do float).** O BaaS repassa ao emissor 100% do rendimento financeiro gerado em cima do saldo em custódia. Geralmente, o BaaS cobra uma tarifa de administração em troca, ou uma taxa unitária já embutida nas outras tarifas. É o modelo mais transparente.
- **Repasse parcial (50% a 80% do float).** O BaaS retém uma parcela (20% a 50%) como remuneração pelo serviço de gestão do float. Em troca, pode oferecer tarifas unitárias menores nos outros serviços.
- **Sem repasse de float (0%).** Alguns contratos (em geral mais antigos ou com BaaS menos transparentes) não têm cláusula de repasse. Todo o float fica com o BaaS. Se você está em um contrato assim, renegocie.

A frequência do repasse é geralmente mensal. O cálculo é feito com base no saldo médio diário da conta, aplicando a rentabilidade líquida dos investimentos que o BaaS fez no período. O BaaS deve dar visibilidade do cálculo mensal.

## Quando o float importa mais

O float é material em cenários específicos:

- **Cartão de crédito com D+28.** Já cobrimos acima. É o cenário clássico de float relevante. Quanto maior o ticket médio e a frequência de uso, maior o saldo parado e maior o float.
- **Operações com saldo mantido em conta.** Algumas operações (contas digitais, wallets corporativas, cartões com saldo pré-carregado) mantêm valores parados em conta por tempos variáveis. Esse saldo também gera float.
- **Voucher e benefícios corporativos com carregamento mensal.** O empregador deposita R$ 800 por funcionário no início do mês. Parte desse saldo é gasta ao longo do mês, mas sempre há um saldo residual. Em uma base de 100 mil funcionários, isso é um estoque permanente de dezenas de milhões de reais em float.
- **Antecipação de recebíveis integrada.** Quando a fintech também atua como adquirente ou sub-adquirente, o float se soma ao spread da antecipação. Os dois se potencializam. É o modelo que alimenta Stone e Cielo no lado da adquirência.

## Quando o float não importa

Em cartões pré-pago sem saldo mantido e em operações de débito puro (D+2), o float é quase irrelevante. Você vai ter rendimento de 0,05% a 0,1% do TPV mensal. Em uma operação pequena, isso pode ser menos de R$ 10 mil ao mês. Não move ponteiro.

Em operações com baixa recorrência e baixo ticket, o float também perde peso. Se o usuário usa o cartão uma vez por mês com ticket de R$ 100, o saldo parado médio é pequeno e o float gerado é irrisório.

Por isso a gente na JUST insiste com clientes que estão em arranjo aberto: olhar o float como função direta de duas variáveis, prazo de liquidação e TPV. Se você tem crédito e escala, o float é receita relevante. Se você tem débito e operação pequena, o float é rodapé.

## Como negociar repasse de float com o BaaS

Três pontos práticos para ter em mão antes da conversa:

Primeiro, calcule quanto de float sua operação está gerando. Use a fórmula: TPV mensal × (prazo médio de liquidação / 30) × Selic mensal. Traga o número para a mesa. BaaS não vai ajudar se você não souber quanto está na mesa.

Segundo, peça detalhamento da cláusula atual. Se o contrato não cita float explicitamente, presuma que o BaaS está embolsando 100% até prova em contrário. Abra a pauta.

Terceiro, negocie antes de migrar em volume. Em operação pequena, seu poder de barganha é baixo. Conforme você cresce, o BaaS tem incentivo a manter você em vez de perder para concorrência. O momento de renegociar cláusula de float é quando você tem 20 mil, 50 mil, 100 mil cartões ativos. Antes disso, foque no produto.

## Impactos fiscais

Ponto importante e pouco falado: float é receita financeira, não operacional. Isso muda o tratamento tributário.

No Brasil, receita financeira é tributada pelo IRPJ e CSLL conforme o regime da empresa (lucro real ou presumido). PIS e COFINS incidem em alíquotas diferentes de receita de serviços. Em lucro real, receita financeira é tributada a 0,65% de PIS e 4% de COFINS, enquanto receita de serviços é 1,65% de PIS e 7,6% de COFINS. Em lucro presumido, a alíquota é similar a PJ com PIS/COFINS cumulativos.

O BaaS pode repassar o float já líquido dos impostos dele (retidos na fonte) ou bruto, e você paga os impostos na sua ponta. Dependendo da estrutura, muda quanto entra efetivamente no caixa. Alinhe com seu contador antes de assinar.

## FAQ

**O que é receita de float em cartão?**

É o rendimento financeiro gerado quando dinheiro de transações de cartão fica parado em conta aguardando liquidação. A instituição de pagamento investe esse saldo em títulos públicos e o rendimento é receita do emissor (repassada pelo BaaS, se o modelo for BIN Sponsor).

**Quanto rende o float de uma operação de cartão?**

Em cartão de crédito com D+28, o float rende aproximadamente 1% a 1,5% do TPV mensal a títulos da Selic atual (10% ao ano). Em débito e pré-pago, o float é muito menor, perto de 0,05% a 0,1% do TPV.

**Quem recebe o float: o emissor ou o BaaS?**

Comercialmente, o float é receita do emissor (a fintech que contratou o BIN Sponsor). O BaaS gerencia o dinheiro e repassa a receita via contrato. Se sua operação está via BaaS, confira se o contrato tem cláusula clara de repasse de float.

**Float rende Selic?**

Rende aproximadamente Selic líquida (descontando taxa de administração dos investimentos e impostos na fonte, se houver). O BaaS investe o saldo em títulos públicos de curto prazo (Tesouro Selic, DI, compromissadas) que seguem de perto a Selic.

**Por que o prazo de liquidação é D+28?**

D+28 é o padrão para cartão de crédito à vista no Brasil, estabelecido pelas bandeiras e adquirentes. Crédito parcelado tem liquidação em múltiplos de 30 dias por parcela. Débito e pré-pago liquidam em D+2. Pix liquida em tempo real, sem float.

**O float pode substituir o intercâmbio como receita principal?**

Em operações muito grandes de crédito com D+28, o float pode se aproximar de 30% a 50% da receita do intercâmbio. Dificilmente substitui, mas é uma fonte complementar relevante. Em operações de débito e pré-pago, o float é marginal.

**Operações com Pix geram float?**

Pix liquida em tempo real (segundos). O float gerado por transação Pix é desprezível. Em operações que combinam Pix e cartão, o float vem quase inteiramente do lado cartão.

**Como calcular o float da minha operação?**

Fórmula simplificada: TPV mensal × (prazo médio de liquidação em dias / 30 dias) × (Selic anual / 12). Ajuste conforme o percentual de saldo que efetivamente permanece em custódia (depende da estrutura contratual).

**O que acontece se o BaaS não repassar o float?**

Você está deixando receita legítima na mesa. Em operações pequenas, o valor pode ser marginal. Em operações grandes, pode ser centenas de milhares de reais por ano. Sempre formalize a cláusula de repasse antes de assinar o contrato com o BaaS.

## Próximo passo

Se você está modelando uma operação de cartão e quer entender o impacto do float no seu P&L, vale rodar a conta completa com os prazos de liquidação, Selic atual e percentual de repasse do BaaS. A JUST ajuda fintechs e empresas a estruturar essa modelagem. [Fale com a gente](/contato) para desenhar o cenário do seu negócio.
