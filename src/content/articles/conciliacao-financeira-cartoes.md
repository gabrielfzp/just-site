---
brief: 018
slug: conciliacao-financeira-cartoes
cluster: arranjo-fechado
type: satellite
author: gabriel-pires
termo_alvo: conciliação financeira cartões
title: "Conciliação financeira de cartões: como funciona e quanto custa para o emissor"
meta_description: "Conciliação financeira é o processo em que o estabelecimento compara o que vendeu no cartão com o que recebeu. Entenda as plataformas (Conciliadora, Equals, Nexera, BoaVista), os custos de homologação e por que o serviço pode virar barreira de credenciamento."
canonical: /conteudos/conciliacao-financeira-cartoes
og_image: /og/conciliacao-financeira-cartoes.png
categoria: Operações
data_publicacao: 2026-04-23
data_modificacao: 2026-04-23
reading_time: 10
tags:
  - conciliação financeira
  - cartão
  - arranjo fechado
  - operações
---

# Conciliação financeira de cartões: como funciona e quanto custa para o emissor

## Resposta direta

Conciliação financeira é o processo em que um estabelecimento comercial compara as transações de cartão que realizou com os valores que efetivamente recebeu, depois de descontar tarifas e ajustes. Em operações com grandes redes varejistas (supermercados, postos de combustível, grandes redes de varejo), essa conciliação costuma ser feita via plataformas especializadas como Conciliadora, Equals, Nexera e BoaVista. Cada plataforma exige homologação específica do emissor, com custo entre R$ 5.000 e R$ 50.000 por homologação. Não oferecer conciliação pode se tornar barreira de credenciamento em estabelecimentos de médio e grande porte.

## Por que conciliação existe

Um supermercado grande processa milhões de transações por mês. Cada uma tem um valor, uma taxa, um prazo de liquidação, eventualmente um estorno, um chargeback. A área financeira do supermercado precisa fechar o caixa e garantir que tudo que foi vendido em cartão foi efetivamente recebido.

Fazer isso manualmente é inviável. Em volumes grandes, erros de centavos por transação viram milhões por mês em discrepância acumulada. E tem fraude: um POS mal configurado, uma transação perdida, um estorno não processado, qualquer um pode causar perda.

A conciliação financeira automatiza essa verificação. O estabelecimento recebe, diariamente ou periodicamente, um arquivo da bandeira ou do emissor listando todas as transações processadas, os valores, as tarifas aplicadas, o valor líquido a receber. Plataformas de conciliação cruzam esse arquivo com os registros do PDV (frente de caixa) do estabelecimento e alertam qualquer divergência.

Para pequenas operações, conciliação manual ou por planilha resolve. Para operações de R$ 10 milhões/mês para cima, é obrigatório.

## Onde a conciliação entra no ciclo

Depois que uma transação passa pelo [ciclo de vida completo](/conteudos/ciclo-de-vida-transacao-cartao) (autorização, confirmação, liquidação), o emissor consolida as transações capturadas e gera um arquivo de conciliação para o estabelecimento.

Esse arquivo vem em dois momentos tipicamente:

**No dia seguinte à transação.** Traz os dados da venda: valor bruto, data, cartão usado (mascarado), código de autorização, NSU. O estabelecimento pode conciliar com o que o PDV registrou no caixa.

**No dia seguinte à liquidação.** Traz os dados financeiros: valor líquido recebido, tarifas descontadas, data de liquidação efetiva. O estabelecimento pode conciliar com o extrato bancário.

Entre esses dois momentos existe um gap de prazo (D+2 para débito/pré-pago, D+28 para crédito à vista). Na prática, uma operação de grande porte lida com centenas de milhares de transações em diferentes fases do ciclo simultaneamente. Sem automação de conciliação, fica ingovernável.

## As principais plataformas de conciliação no Brasil

Quatro plataformas concentram a maior parte do mercado brasileiro de conciliação de cartões:

**Conciliadora (Grupo Boticário).** Uma das mais usadas. Focada em cruzar dados de múltiplos emissores e adquirentes com sistemas internos dos estabelecimentos. Oferece dashboards e alertas em tempo real.

**Equals.** Especializada em conciliação e análise financeira para grandes varejistas. Tem forte penetração em supermercados e redes de franquia.

**Grupo Nexera.** Empresa brasileira de tecnologia financeira, oferece conciliação e serviços correlatos.

**BoaVista.** Parte do grupo de serviços financeiros, atua em conciliação e análise de recebíveis.

Além dessas quatro, há dezenas de plataformas menores especializadas em nicho (por exemplo, conciliação para franquias de fast food, conciliação para redes de farmácia). Cada mercado tem jogador dominante local.

## O que é homologação em plataforma de conciliação

Para que um estabelecimento use uma plataforma de conciliação com um emissor específico, o emissor precisa estar homologado nessa plataforma. Homologação aqui significa:

O emissor envia à plataforma a especificação do arquivo (layout, formato, campos, periodicidade).

A plataforma adapta o parser dela para ler esse formato.

Os dois testam troca de arquivos com volume real.

A plataforma publica o emissor como "disponível" para clientes dela.

Cada plataforma tem seu protocolo e seu layout de arquivo. Não há padrão único. Emissor que quer ser aceito em múltiplas plataformas precisa homologar em cada uma separadamente.

**Custo por homologação: R$ 5.000 a R$ 50.000**, dependendo da plataforma e da complexidade da integração. Em alguns casos, há custo anual de manutenção também.

**Tempo de homologação: 30 a 120 dias**, dependendo do cronograma da plataforma e da adaptação necessária.

## Por que isso pode virar barreira de credenciamento

Imagine o cenário: você estruturou uma operação de cartão em arranjo fechado, chegou num grande supermercado para oferecer seu produto. A área de compras está interessada. Passa para a área financeira validar. A área financeira pergunta:

"Seu sistema de conciliação se integra com qual plataforma?"

Se você responde "nenhuma", a área financeira vai dizer que não pode credenciar porque não consegue reconciliar os valores. Credenciar sem conciliação é risco operacional. Eles preferem recusar.

É por isso que oferecer integração com as principais plataformas de conciliação não é luxo em arranjo fechado voltado para grandes redes. É pré-requisito comercial.

Para arranjo fechado voltado a pequenos estabelecimentos, a conciliação costuma ser feita pelo próprio portal do emissor (o estabelecimento acessa e baixa o extrato). A homologação em plataforma profissional só vira necessária a partir de certo porte.

## Como o arquivo de conciliação é enviado

Dois formatos dominantes:

**Troca de arquivos (o mais comum).** O emissor gera um arquivo diário no layout da plataforma e o entrega via SFTP, FTP seguro, ou diretório compartilhado. A plataforma consome o arquivo automaticamente.

Vantagens: simples, não exige infra permanentemente disponível, baixo overhead técnico.

Desvantagens: latência (sempre D+1 mínimo), troubleshoot mais difícil.

**Integração por API.** O emissor expõe endpoints que a plataforma consulta. Conciliação pode ser quase em tempo real.

Vantagens: latência baixa, possibilidade de drill-down transação por transação, mais flexibilidade.

Desvantagens: requer infra sempre disponível, mais complexo de implementar e monitorar.

Em 2026, a tendência é migração para API. Arquivos continuam dominando o legado porque as plataformas ainda sustentam os dois modos.

## O que vai no arquivo de conciliação

Campos típicos:

**Identificação da transação.** Data, hora, NSU, código de autorização.

**Dados do cartão (mascarado).** Primeiros 6 dígitos, últimos 4 dígitos. Não vai PAN completo por questão de segurança (PCI DSS).

**Dados financeiros.** Valor bruto, tarifas aplicadas, valor líquido.

**Dados de liquidação.** Data de vencimento, data de liquidação efetiva, conta bancária destino.

**Tipo de transação.** Compra, estorno, chargeback, ajuste.

**Status.** Capturada, liquidada, cancelada, em disputa.

O layout pode ter 20, 50 ou 100 campos, dependendo do nível de detalhe. Plataformas mais sofisticadas pedem mais campos para análises mais profundas.

## O papel do hub de conciliação

Quando um emissor quer estar em múltiplas plataformas de conciliação sem fazer múltiplas homologações independentes, algumas empresas oferecem o serviço de hub de conciliação. A JUST oferece esse serviço como parte da infraestrutura para arranjo fechado.

Como funciona: o emissor se homologa uma única vez com o hub. O hub traduz e envia os arquivos para todas as plataformas de conciliação suportadas. Vantagens:

Um único processo de homologação inicial, que depois dá acesso a múltiplas plataformas.

Manutenção centralizada: se uma plataforma muda layout, o hub ajusta, sem trabalho para o emissor.

Redução de custo total ao longo do tempo.

Desvantagem: mais uma camada de dependência na cadeia.

É uma decisão pragmática: se a operação vai usar só 1-2 plataformas, homologação direta faz sentido. Se precisa cobrir 4-5 ou mais, um hub compensa.

## Custos totais da conciliação

Juntando tudo, o custo de oferecer conciliação numa operação de arranjo fechado:

| Item | Faixa |
|---|---|
| Homologação em 1 plataforma | R$ 5.000 a R$ 50.000 |
| Homologação em 4 plataformas (para cobrir grandes redes) | R$ 40.000 a R$ 200.000 |
| Manutenção anual por plataforma | R$ 5.000 a R$ 30.000 |
| Hub de conciliação (alternativa) | R$ 10.000 a R$ 50.000 setup + mensalidade |
| Desenvolvimento interno de geração de arquivos | R$ 50.000 a R$ 200.000 |

Para operações em arranjo fechado com foco em grandes redes, conciliação facilmente consome R$ 100 mil a R$ 300 mil entre setup e primeiro ano. Não é item marginal.

## Erros comuns

**Adiar homologação até que o grande varejista peça.** Quando o varejista pede, já é tarde. A homologação leva meses e trava a negociação comercial. O certo é se homologar antes, como capability para vender.

**Homologar sem volume para sustentar.** Alguns emissores se homologam e depois percebem que não têm volume suficiente para cobrir o custo anual. Homologue em plataforma quando já tem ou está a caminho de ter clientes que usam aquela plataforma.

**Ignorar ajustes pós-liquidação.** Conciliação não termina no arquivo diário. Ajustes (chargebacks, estornos tardios) aparecem dias ou semanas depois. Processo de conciliação precisa prever reconciliação contínua, não pontual.

**Não monitorar divergências.** Muitas operações geram arquivo, enviam à plataforma e acreditam que "deu certo". Monitoramento ativo de divergências entre autorizado, capturado, liquidado é o que transforma conciliação em valor real.

## FAQ

**O que é conciliação financeira em cartão?**

É o processo em que um estabelecimento comercial compara as transações de cartão que realizou com os valores que efetivamente recebeu, depois de tarifas e ajustes. Serve para detectar erros, fraudes e discrepâncias no fluxo financeiro.

**Quais são as principais plataformas de conciliação no Brasil?**

Conciliadora (Grupo Boticário), Equals, Grupo Nexera e BoaVista são as quatro com maior penetração. Existem também plataformas menores especializadas em nichos específicos.

**Quanto custa homologar em uma plataforma de conciliação?**

Entre R$ 5.000 e R$ 50.000 por plataforma, mais manutenção anual de R$ 5.000 a R$ 30.000. Homologar em 4 plataformas para cobrir grandes redes pode custar R$ 40.000 a R$ 200.000.

**Quanto tempo leva para homologar?**

Entre 30 e 120 dias, dependendo da plataforma e da complexidade. Inclui desenvolvimento do parser específico, testes com volume real e publicação.

**Preciso me homologar em alguma plataforma se não vendo para grandes varejistas?**

Não necessariamente. Para pequenos estabelecimentos, conciliação costuma ser feita pelo portal do próprio emissor. Plataformas profissionais viram necessidade a partir de um porte em que o estabelecimento tem volume que justifica o custo de ferramenta externa.

**Conciliação é obrigatória regulatoriamente?**

Não há obrigação regulatória específica de usar plataforma externa. A obrigação é contábil: toda empresa precisa conciliar o que recebe. Como conciliar fica a critério da empresa. Plataformas automatizam essa obrigação.

**Arquivo de conciliação é o mesmo arquivo de liquidação?**

Não exatamente. Arquivo de conciliação pode trazer dados da transação (dia seguinte à compra) e da liquidação (dia seguinte ao pagamento). Em algumas operações, os dois são unificados; em outras, são separados.

**Posso usar só integração por API sem arquivo?**

Sim, se a plataforma suportar. Cada vez mais plataformas aceitam integração por API. Em 2026, ainda é comum ter os dois métodos, mas a migração para API está acontecendo.

**Hub de conciliação vale a pena?**

Se você vai cobrir 3 ou mais plataformas, sim. Um hub centraliza o esforço de homologação inicial e manutenção. Se cobre só 1-2 plataformas, homologação direta tende a ser mais econômica.

**Quem paga pela homologação: o emissor ou o estabelecimento?**

Tipicamente o emissor. É custo de estrutura para que ele possa ser aceito em estabelecimentos que usam aquela plataforma. O estabelecimento geralmente paga à plataforma uma mensalidade separada pelo serviço de conciliação que recebe.

## Próximo passo

Se você está estruturando operação de cartão em arranjo fechado e precisa montar a conciliação para atender grandes varejistas, a JUST oferece hub de conciliação que centraliza homologações em múltiplas plataformas. [Fale com a gente](/contato) para entender como funciona.
