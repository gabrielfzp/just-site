# Intercâmbio de cartão: o que é, quanto paga e para onde vai esse dinheiro
Canônica: https://wearejust.it/conteudos/intercambio-de-cartao
Markdown: https://wearejust.it/conteudos/intercambio-de-cartao.md
Site: JUST Fintechs
Autor: Equipe JUST
Categoria: Cartões
Publicado em: 2026-04-23
Atualizado em: 2026-04-23
Tags: intercâmbio, interchange, mdr, emissão de cartão, banking as a service
## Resposta curta
O intercâmbio (interchange, em inglês) é a tarifa que o emissor do cartão recebe toda ve
# Intercâmbio de cartão: o que é, quanto paga e para onde vai esse dinheiro

## Resposta direta

O intercâmbio (interchange, em inglês) é a tarifa que o emissor do cartão recebe toda vez que alguém paga com o cartão dele em um estabelecimento. É a maior fatia do MDR, varia entre 0,5% e 2,2% do valor da transação, e é definida pela bandeira conforme o tipo de cartão e o programa. Para qualquer emissor no arranjo aberto, o intercâmbio é a principal fonte de receita e o número que precisa caber na conta antes de tudo.

## O que é intercâmbio, sem rodeio

Toda vez que um consumidor passa um cartão Visa, Mastercard, Elo ou American Express em uma maquininha, há um fluxo de dinheiro que sai do estabelecimento e se divide entre três atores: o adquirente (dono da maquininha), a bandeira e o emissor do cartão. A parte que vai pro emissor é o intercâmbio.

Esse nome existe porque a transação é um "intercâmbio" entre o banco (ou fintech) do consumidor e o banco (ou adquirente) do estabelecimento. Quem bancou o risco e a relação com o portador do cartão recebe a maior parte da tarifa, porque é quem sustenta o cliente final.

Em termos práticos: quando uma fintech emite um cartão Mastercard e o usuário gasta R$ 100 numa loja, o estabelecimento paga algo como R$ 2 de MDR (taxa da maquininha). Desses R$ 2, cerca de R$ 1,30 a R$ 1,50 volta para o emissor via intercâmbio. O restante fica com o adquirente e a bandeira.

## Por que o intercâmbio existe

Do ponto de vista regulatório e econômico, a lógica é simples. O emissor é quem banca três coisas que o estabelecimento não quer bancar sozinho:

- **Risco de crédito**, se o cartão for de crédito.
- **Risco de fraude**, porque é o emissor quem assume contestações e chargeback em boa parte dos cenários.
- **A relação e o custo de aquisição do cliente**, incluindo cartão físico, logística, atendimento, prevenção a fraude, tokenização em Apple Pay e Google Pay.

Sem intercâmbio, ninguém teria incentivo econômico para emitir cartão em volume. O sistema desaba. Por isso o BACEN e as próprias bandeiras regulam de perto quanto cada programa pode cobrar.

## Como é definido: bandeira, programa e tipo de operação

Quem define a tabela de intercâmbio é a bandeira. Cada uma publica sua tabela e atualiza de tempos em tempos, respeitando os tetos que o BACEN impõe para certos produtos (como pré-pago e débito).

A tabela depende de três eixos principais:

- **Produto**: crédito, débito, pré-pago, voucher (alimentação e refeição).
- **Público**: consumidor (pessoa física) ou comercial (CNPJ, cartões corporativos e empresariais).
- **Forma de captura**: presencial, contactless, cartão não presente (e-commerce, tokenizado).

A Mastercard, por exemplo, publica a tabela completa num PDF público. A Visa também. Qualquer emissor sério consulta diretamente a fonte antes de projetar receita.

## Faixas típicas de intercâmbio no Brasil

Essa tabela consolida o que a gente vê na prática hoje, incluindo os tetos regulatórios já em vigor.

| Produto | Público | Intercâmbio típico |
|---|---|---|
| Débito | Consumidor | 0,5% a 0,8% (teto regulatório de 0,5% para débito em 2022 foi flexibilizado, mas o mercado opera nessa faixa) |
| Pré-pago | Consumidor | Até 0,7% (teto regulatório do BACEN desde 2023) |
| Crédito | Consumidor Standard | 1,4% a 1,6% |
| Crédito | Consumidor Gold, Platinum | 1,6% a 1,8% |
| Crédito | Consumidor Black | 1,8% a 2,0% |
| Crédito | Comercial (corporativo, empresarial) | 1,6% a 2,2% |
| Voucher (alimentação, refeição) | Trabalhador | 1,0% a 2,5% (novo programa recente) |

Atenção: esses números são aproximações de faixa e mudam conforme a bandeira, o programa e incentivos comerciais pontuais. Use sempre a tabela publicada pela bandeira na hora de modelar o negócio.

## O impacto do teto de 7% no pré-pago

Um ponto que muita fintech ainda não digeriu é a circular do BACEN de 2023 que limitou o intercâmbio de pré-pago a 0,7% (o número "7%" virou taquigrafia interna, mas o decimal está lá).

Antes dessa mudança, cartão pré-pago pagava intercâmbio próximo ao de crédito (1,0% a 1,3%), o que explicava por que tanta operação subia com estrutura de pré-pago: era barato de operar e rendia bem. Depois do teto, o pré-pago ficou com rentabilidade parecida com débito. Quem tinha modelo ancorado só em intercâmbio de pré-pago precisou repensar tudo.

O reflexo imediato foi o migrar em massa para crédito colateralizado (modelo XP, onde o investimento do cliente lastreia o limite) ou para voucher, onde a margem volta a caber.

## Para onde o intercâmbio vai dentro da sua operação

Se você é emissor direto (tem licença de instituição de pagamento e contrato próprio com a bandeira), o intercâmbio cai integral na sua conta. Sem intermediário.

Se você opera via BIN Sponsor (que é o caso da maioria das fintechs e programas corporativos), o intercâmbio cai primeiro na conta do Banking as a Service (BaaS) que é o sponsor. O BaaS então repassa para você conforme o contrato. O mercado opera em dois modelos principais:

- **Repasse 100% do intercâmbio** e cobrança de tarifas unitárias fixas (por conta ativa, por transação, por KYC). Modelo mais transparente.
- **Repasse parcial do intercâmbio** (o BaaS retém 5% a 20% como take rate) com tarifas unitárias menores. Modelo que compensa quem tem baixo volume.

Se seu BaaS não te mostrou exatamente como o intercâmbio é repassado, pede. Esse é dinheiro seu por direito e precisa estar no contrato preto no branco.

## Quanto o intercâmbio realmente vira margem

Aqui é onde muita fintech se ilude. O intercâmbio parece gordo no primeiro cálculo e vai derretendo conforme você empilha custo.

Vamos simular um usuário típico de cartão de crédito pessoa física, gastando R$ 2.000 por mês com cartão standard emitido via BaaS no arranjo aberto:

| Item | Valor |
|---|---|
| TPV mensal | R$ 2.000 |
| Intercâmbio bruto (1,5%) | R$ 30,00 |
| Custo de bandeira (0,3% do TPV) | R$ 6,00 |
| Tarifa de conta ativa do BaaS | R$ 1,20 |
| Processamento de transação (assumindo 15 transações) | R$ 0,90 |
| Antifraude | R$ 0,75 |
| Impostos sobre a receita (15%) | R$ 4,50 |
| **Margem líquida por usuário ativo** | **R$ 16,65** |

Dezesseis reais e sessenta e cinco centavos por usuário ativo é uma operação saudável. Mas precisa de escala para cobrir os custos fixos (fee mínimo do BaaS, setup, time interno, compliance, logística). Em geral, abaixo de 20 a 30 mil usuários ativos, qualquer fintech de arranjo aberto queima dinheiro até o breakeven.

Por isso a gente na JUST repete pros clientes que chegam pra conversar: se você não tem uma visão de escala massiva, arranjo aberto pode não ser o caminho. Um [cartão private label](/conteudos/cartao-private-label) ou um [cartão bandeirado](/conteudos/cartao-bandeirado-o-que-e) com modelo B2B podem rentabilizar melhor com base menor.

## Como as bandeiras remuneram incentivos adicionais

Fora do intercâmbio da tabela base, as bandeiras oferecem incentivos que aumentam a receita por transação em cenários específicos:

- **Contactless (por aproximação)**: acréscimo típico de 0,05 ponto percentual sobre o intercâmbio da transação. Faz sentido porque contactless reduz fraude e aumenta frequência.
- **Cartão não presente (e-commerce e tokenizado)**: acréscimo de 0,05 a 0,10 ponto percentual para cartões com autenticação forte (3DS, tokenização).
- **Acordos comerciais por volume**: quando uma operação chega a volumes relevantes, dá para negociar diretamente com a bandeira migrar ou manter base em troca de bônus, subsídio a cartões físicos, verba de marketing. Isso costuma acontecer a partir de 100 mil cartões ativos em vista no contrato.

Cartão black tem intercâmbio maior (1,8% a 2,0%), mas carrega custo mensal de manutenção cobrado pela bandeira. Só faz sentido se o perfil do usuário compensar esse custo com ticket e frequência.

## Onde muita gente erra

Três erros clássicos que a gente vê no mercado:

**Usar intercâmbio bruto para projetar P&L.** Ignora imposto, take rate do BaaS, custo de bandeira e tarifas unitárias. Margem projetada infla 40% ou mais.

**Assumir que o usuário vai transacionar tudo no cartão.** Na prática, com Pix fortalecido, boa parte dos usuários de conta digital usa cartão para fração do que imagina. Um usuário que deveria transacionar R$ 2.000/mês costuma transacionar R$ 500 a R$ 800.

**Não monitorar migração regulatória.** O teto de pré-pago pegou várias operações no contrapé. Quem não tem um compliance rodando cria uma modelagem com premissa que vira ilegal no ano seguinte.

## FAQ

**O que é intercâmbio em cartão de crédito?**

É a tarifa que o emissor do cartão recebe a cada transação, pagar por quem aceitou o cartão. No Brasil, fica entre 1,4% e 2,2% em crédito, dependendo do programa e do público.

**Quem paga o intercâmbio?**

O estabelecimento comercial, embutido no MDR (a taxa da maquininha). O estabelecimento paga o MDR para o adquirente, que repassa uma fatia para a bandeira e a maior fatia para o emissor via intercâmbio.

**Qual é a diferença entre intercâmbio e MDR?**

O MDR é a tarifa total que o estabelecimento paga por transação. O intercâmbio é uma das três fatias que compõem o MDR (as outras duas são a remuneração da bandeira e a margem do adquirente). O intercâmbio costuma ser 60% a 70% do MDR.

**Qual é o intercâmbio de cartão pré-pago no Brasil?**

Desde 2023, o BACEN limitou o intercâmbio de pré-pago a 0,7% do valor da transação, mesmo teto aplicado ao débito.

**Quanto rende intercâmbio para um cartão comercial?**

Cartões emitidos para CNPJ (corporativo ou empresarial) têm intercâmbio entre 1,6% e 2,2% em crédito. A faixa maior existe porque o comportamento de uso é mais previsível, o ticket é maior e o risco é menor.

**Posso receber intercâmbio direto da bandeira ou preciso de BaaS?**

Para receber direto da bandeira, você precisa ter licença de emissor de moeda eletrônica (IP) no BACEN e contrato assinado com a bandeira. A maioria das operações hoje opera via [BIN Sponsor](/conteudos/bin-sponsor-o-que-e) de um BaaS, que centraliza licença e homologação e repassa o intercâmbio com desconto de suas tarifas.

**Intercâmbio paga imposto?**

Sim. No Brasil, a receita de intercâmbio é tributada pelos regimes normais da empresa (lucro real, presumido ou Simples Nacional), e o BaaS geralmente repassa o valor já líquido de impostos dele na fonte. Você precisa tributar na ponta também.

**O intercâmbio muda se o cartão for tokenizado (Apple Pay, Google Pay)?**

Não diretamente. O intercâmbio segue a tabela do produto. Mas cartão tokenizado tem custo adicional da Apple (cerca de 0,15% por transação mais uma tarifa mensal por cartão ativo) que precisa ser subtraído da margem.

**Como negociar incentivos com a bandeira?**

Incentivos comerciais (verba de marketing, subsídio a plástico, bônus por migração) só aparecem quando você tem volume ou projeção de volume relevante. Abaixo de 50 mil cartões ativos, não perca tempo tentando. Com volume, converse via seu BaaS, que tem o contrato direto, ou monte uma reunião trilateral.

**Existe intercâmbio para transações internacionais?**

Sim, e ele é geralmente maior (2% a 3%). A contrapartida é o custo de câmbio cobrado pela bandeira, que fica com o spread. A margem líquida para o emissor em transação internacional nem sempre é maior que a doméstica, depende da estrutura.

## Próximo passo

Se você está modelando uma operação de cartão e quer entender se o intercâmbio cabe nos seus custos, vale rodar a simulação com a tabela real da bandeira. Se precisar de ajuda para entender qual programa faz sentido ou como projetar a receita, [fale com a JUST](/contato). A gente monta essa conta com você.
