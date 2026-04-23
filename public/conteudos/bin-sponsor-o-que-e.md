# BIN Sponsor: o que é e como viabilizar sua emissão de cartão sem licença própria
Canônica: https://wearejust.it/conteudos/bin-sponsor-o-que-e
Markdown: https://wearejust.it/conteudos/bin-sponsor-o-que-e.md
Site: JUST Fintechs
Autor: Gabriel Pires
Categoria: Cartões
Publicado em: 2026-04-23
Atualizado em: 2026-04-23
Tags: bin sponsor, banking as a service, emissão de cartão, arranjo aberto, licença bacen
## Resposta curta
BIN Sponsor é o serviço em que uma instituição financeira autori
# BIN Sponsor: o que é e como viabilizar sua emissão de cartão sem licença própria

## Resposta direta

BIN Sponsor é o serviço em que uma instituição financeira autorizada pelo BACEN e homologada por Visa, Mastercard ou Elo cede o uso de sua licença e do BIN (os seis primeiros dígitos do cartão) para que uma empresa possa emitir cartões sem precisar ter licença própria nem contrato direto com a bandeira. É como alugar a infraestrutura regulatória e técnica de outro. Reduz drasticamente o tempo e o custo de colocar uma operação de cartão de pé.

## O que é BIN e por que ele importa

Antes de explicar o BIN Sponsor, precisa entender o que é BIN.

BIN significa Bank Identification Number. São os primeiros seis dígitos (ou oito, na transição que está rolando agora) do número de um cartão. Esse número identifica quem é a instituição emissora do cartão. Cada emissor tem um (ou vários) BIN registrado junto à bandeira.

Quando um cartão é passado em uma maquininha, a bandeira usa o BIN para rotear a transação até o emissor correto. É o BIN que permite que uma transação feita em Manaus chegue em segundos ao sistema de um emissor em São Paulo. Sem BIN, não há roteamento. Sem roteamento, não há cartão.

Quem controla o BIN controla a emissão. E controlar o BIN é caro. Precisa de:

- Licença de Instituição de Pagamento (IP) emitida pelo BACEN, tipo Emissor de Moeda Eletrônica ou Emissor de Instrumento de Pagamento Pós-pago.
- Contrato direto com Visa, Mastercard ou Elo, que envolve homologação técnica, depósito de garantia, compliance e SLA.
- Estrutura operacional de processamento de transações, prevenção a fraude, liquidação financeira e atendimento.

Para uma fintech nascente, montar tudo isso do zero pode custar entre R$ 5 milhões e R$ 15 milhões e levar de 12 a 24 meses. É caminho quase inviável na primeira fase.

## O que é BIN Sponsor

BIN Sponsor é o modelo em que uma empresa que já tem todo esse aparato (licença, contrato com bandeira, BIN registrado, estrutura técnica) sub-aloca o uso dessa estrutura para outras empresas emitirem cartão dentro do BIN dela.

Na prática, funciona assim. Imagine que a JUST é um BIN Sponsor (é um dos serviços que a gente presta hoje). Uma startup de gestão de despesas corporativas chega e quer emitir cartões para seus clientes. Em vez de montar a estrutura do zero, ela contrata a JUST. A JUST usa seu BIN Mastercard registrado e emite os cartões da fintech por baixo dele. Os cartões rodam em qualquer maquininha do Brasil, aceitam Apple Pay, tokenizam, tudo. Mas quem está autorizando a transação no back-end é a estrutura do sponsor.

O cliente final, o portador do cartão, nem fica sabendo. O cartão tem a marca da fintech contratante. O aplicativo é da fintech. A experiência é da fintech. A licença, o BIN e a liquidação acontecem por trás com o sponsor.

Esse modelo encurta o caminho de meses para semanas. Encurta o orçamento de milhões para centenas de milhares de reais em setup. Encurta a estrutura de compliance para algo gerenciável por uma fintech com 10 pessoas.

## Quem oferece BIN Sponsor no Brasil

O serviço quase sempre vem acoplado a uma oferta de Banking as a Service (BaaS). BaaS é um termo guarda-chuva que inclui várias ofertas: emissão de cartão, conta digital, Pix, TED, motor de crédito, KYC, antifraude. BIN Sponsor é uma dessas frentes.

Os BaaS brasileiros que oferecem BIN Sponsor hoje costumam operar em uma ou mais das seguintes bandeiras: Mastercard (a mais comum), Visa (crescendo), Elo (relevante para vale e voucher). Cada um tem um perfil de programa preferido. Alguns focam em pré-pago (antes do teto de 0,7%), outros em crédito colateralizado, outros em voucher de alimentação.

Antes de escolher sponsor, precisa checar três coisas: em que bandeiras eles operam, que programas conseguem implementar, e qual é o take rate deles sobre intercâmbio.

## O que está incluído (e o que não está)

Um BIN Sponsor competente fornece, no mínimo:

Licença IP ativa junto ao BACEN, com auditorias em dia e histórico limpo.

Contrato com a bandeira, cobrindo o programa escolhido (crédito consumidor standard, crédito comercial, pré-pago voucher, etc.).

Processamento de transações, que inclui autorizar ou negar em tempo real, registrar, contabilizar e liquidar.

Infraestrutura de API para que a fintech contratante possa emitir cartão, bloquear, desbloquear, consultar saldo, extrato, e realizar qualquer operação via software.

KYC e antifraude, incluindo validação de CPF, biometria facial, análise de risco em tempo real nas transações.

Suporte à produção e logística de cartão físico (embolsamento, envio), geralmente via parceiros homologados.

Emissão de cartão virtual e tokenização em Apple Pay, Google Pay e Samsung Pay.

O que normalmente não está incluso:

A experiência do cliente final (app, site, onboarding, atendimento). Isso é responsabilidade da fintech contratante.

Os benefícios comerciais e campanhas (cashback, milhas, programa de fidelidade). Também da contratante.

A estratégia de aquisição, ativação e retenção de usuários. Da contratante.

O plano de negócio, obviamente. Da contratante.

O BIN Sponsor cuida da infraestrutura. A fintech cuida do produto.

## Quanto custa um BIN Sponsor

O modelo comercial típico combina três tipos de cobrança.

**Setup único**, que varia de R$ 50 mil a R$ 500 mil conforme complexidade do programa, número de funcionalidades e negociação. Cobre homologação na bandeira, configuração de ambiente, integração de API.

**Tarifas unitárias** por conta ativa, transação, evento de KYC, emissão de cartão físico e virtual. Aqui mora a maior parte do custo corrente. Os valores típicos:

| Tarifa | Faixa típica |
|---|---|
| Conta ativa (por mês) | R$ 0,60 a R$ 1,50 |
| Transação processada | R$ 0,02 a R$ 0,10 |
| KYC simples | R$ 1,50 a R$ 3,00 |
| KYC com biometria | R$ 2,50 a R$ 4,50 |
| Cartão físico (produção) | R$ 8,00 a R$ 20,00 |
| Logística (envio) | R$ 5,00 a R$ 25,00 |
| Tarifa de bandeira (% do TPV) | 0,20% a 0,40% |

**Take rate sobre intercâmbio**, que é um percentual que o sponsor pode reter da receita de intercâmbio antes de repassar. Varia de 0% (modelo tarifário puro) a 20% (modelo com tarifas unitárias reduzidas).

Alguns sponsors também cobram fee mínimo mensal. É o valor mínimo que a fintech vai pagar no mês, independentemente de quantos clientes ativos tiver. Tipicamente entre R$ 10 mil e R$ 50 mil. Esse fee mínimo pesa nos primeiros meses, quando a base ainda é pequena.

## Sponsor vs emissão direta: quando migrar

Não existe regra única, mas o padrão que a gente na JUST vê é o seguinte:

**Comece com sponsor.** A não ser que você já seja um banco ou uma fintech com R$ 100 milhões de caixa e dois anos de pista regulatória, começar pelo sponsor é o caminho econômico e operacional correto. Evita investimento alto antes de validar o modelo.

**Considere emissão direta quando a base cruzar 300 mil cartões ativos ou R$ 300 milhões de TPV mensal.** Nesse volume, o take rate e as tarifas unitárias do sponsor começam a pesar mais do que o custo de ter licença própria.

**Negocie com o sponsor antes de migrar.** Se você tem volume, o sponsor tem incentivo para reduzir take rate e tarifas unitárias em vez de perder o cliente. Muitas operações que ameaçam migrar acabam ganhando desconto e ficando no sponsor por mais alguns anos.

Mesmo migrando para licença própria, muitas operações mantêm um BIN Sponsor para programas específicos ou geografias específicas. É um modelo híbrido que preserva flexibilidade.

## O que olhar antes de assinar com um sponsor

Cinco pontos que a gente sempre checa em due diligence de sponsor para clientes:

Primeiro, a saúde financeira e regulatória do sponsor. Se o sponsor tomar descredenciamento do BACEN ou da bandeira, a fintech que depende dele fica em pé engessado. Olhe os últimos balanços, as auditorias divulgadas, o histórico de multas.

Segundo, a granularidade do contrato. Take rate, fee mínimo, tarifas unitárias, cláusulas de exclusividade, prazo de permanência, multa rescisória, SLA de uptime, SLA de suporte. Tudo precisa estar claro. Cláusula ambígua em contrato de BaaS é dor de cabeça garantida depois.

Terceiro, a API e o SDK. Peça documentação técnica, sandbox, exemplos de implementação. Um sponsor com API ruim vai fazer sua equipe de engenharia sofrer.

Quarto, o modelo de repasse de intercâmbio e float. Precisa estar escrito, com frequência (mensal é o padrão), com detalhamento por transação. Se o sponsor resiste a mostrar o cálculo detalhado, é sinal amarelo.

Quinto, a roadmap da plataforma. O que já está pronto, o que está em desenvolvimento, o que é mentira. Fale com outros clientes do sponsor antes de assinar. Se o sponsor não quer te dar referências, sinal vermelho.

## Limites do modelo

O sponsor não resolve tudo. Algumas coisas ele não te entrega:

**Autonomia regulatória.** Você depende do sponsor para seguir com sua operação. Se o sponsor muda a política, muda a tarifa, ou cancela um programa, você é impactado.

**Negociação direta com a bandeira.** Incentivos comerciais (verba de marketing, subsídio a plástico) geralmente passam pelo sponsor. Você pode puxar a conversa, mas não negocia sozinho.

**Flexibilidade total de produto.** O que o sponsor oferece é o que você pode vender. Se o sponsor não tem programa de cartão black, você não emite cartão black. Se ele não suporta cartão virtual multiuso, você não emite. Precisa casar com o que ele tem.

Para quem está avaliando entre BIN Sponsor e [arranjo fechado private label](/conteudos/cartao-private-label), a diferença é ainda mais radical: private label não precisa nem de sponsor nem de bandeira, porque é ecossistema fechado. Cada modelo resolve um problema diferente. Vale comparar os dois antes de decidir.

## FAQ

**O que significa BIN no cartão?**

BIN é Bank Identification Number, os seis (ou oito) primeiros dígitos do número do cartão. Identifica o emissor e é usado pela bandeira para rotear transações até quem emitiu aquele cartão.

**Precisa ter licença do BACEN para operar via BIN Sponsor?**

Não. A licença é do sponsor, que é uma instituição de pagamento autorizada pelo BACEN. A fintech contratante usa a licença do sponsor e não precisa ter a sua própria.

**Qual é a diferença entre BIN Sponsor e Banking as a Service?**

BIN Sponsor é um serviço específico dentro de uma oferta maior de Banking as a Service. BaaS é um guarda-chuva que inclui conta digital, Pix, TED, motor de crédito e muito mais. BIN Sponsor cobre especificamente a emissão de cartão com a licença e o BIN do sponsor.

**Posso ter BIN Sponsor em mais de uma bandeira?**

Sim. Muitas fintechs contratam sponsor em Mastercard e Visa, por exemplo, para oferecer escolha ao cliente ou para aproveitar incentivos comerciais diferentes. Pode ser o mesmo sponsor (se ele operar em múltiplas bandeiras) ou sponsors diferentes.

**BIN Sponsor serve para emitir cartão corporativo?**

Sim. Todos os sponsors relevantes do mercado brasileiro suportam programas corporativos (cartão comercial e empresarial), que inclusive têm intercâmbio mais atraente que crédito consumidor. Para operações B2B, é o caminho mais comum.

**O que é sub-BIN?**

Quando um emissor que já tem BIN registrado sub-aloca parte do numeração dele para outra empresa, cria-se um sub-BIN. É um nível a mais de intermediação. Mais comum em modelos de revenda ou white label onde a cadeia é maior.

**Posso migrar de sponsor sem trocar os cartões emitidos?**

Depende. Se você migra de sponsor mas continua na mesma bandeira, na maioria dos casos precisa reemitir os cartões porque o BIN muda. Existem poucos casos de portabilidade de BIN entre sponsors, e nenhum padrão de mercado. Planeje a migração considerando custo de reemissão.

**BIN Sponsor oferece antifraude?**

Sim. Todos os sponsors relevantes incluem antifraude básico (regras, machine learning, monitoramento em tempo real) no pacote. Alguns permitem acoplar soluções de antifraude de terceiros com regras customizadas.

**Quanto tempo leva para ter cartão emitido via sponsor?**

Do fechamento do contrato ao primeiro cartão emitido em produção, 6 a 16 semanas em média. Depende de complexidade do programa, prontidão da equipe de engenharia da fintech e homologação na bandeira. Programas novos demoram mais que renovação de programas existentes.

**Como saber se um sponsor é confiável?**

Olhe histórico regulatório (multas, advertências, auditorias), base de clientes atual (quem mais está emitindo com ele e faz tempo) e saúde financeira (balanços, rounds de investimento, tempo de operação). Nunca fique preso a um único sponsor como fornecedor crítico sem due diligence.

## Próximo passo

Se você está avaliando montar uma operação de cartão e quer entender se BIN Sponsor é o caminho certo para o seu modelo, a JUST ajuda fintechs e empresas a estruturarem a operação desde a modelagem até o go-live. [Fale com a gente](/contato) e a gente monta a conta com você.
