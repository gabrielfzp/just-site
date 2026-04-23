# Funds-in em cartões: como funciona a recarga e quais tarifas cobrar
Canônica: https://wearejust.it/conteudos/funds-in-cartoes-recarga-tarifas
Markdown: https://wearejust.it/conteudos/funds-in-cartoes-recarga-tarifas.md
Site: JUST Fintechs
Autor: Equipe JUST
Categoria: Operações
Publicado em: 2026-04-23
Atualizado em: 2026-04-23
Tags: funds in, recarga, cartão, tarifas, arranjo fechado
## Resposta curta
Funds-in é o processo de entrada de dinheiro em uma conta associada a um cartão, para que ele possa ser usado em pagamentos. Em cartões pré-pagos, a recarga acontece antes do uso, via boleto ou Pix. Em cartões pós-pagos (incluindo crédito e adiantamento salarial), a cobrança acontece depois do uso. Cada modelo tem estrutura de tarifação própria: emissão de cartão (R$ 5 a R$ 20), manutenção recorrente (R$ 1 a R$ 20 por mês), tarifa variável de recarga (0% a 3%) e tarifa de uso (pode ser positiva ou negativa). A estrutura correta depende do tipo de produto: benefício, gestão de frota, gestão de despesas, convênio salarial ou premiação.
# Funds-in em cartões: como funciona a recarga e quais tarifas cobrar

## Resposta direta

Funds-in é o processo de entrada de dinheiro em uma conta associada a um cartão, para que ele possa ser usado em pagamentos. Em cartões pré-pagos, a recarga acontece antes do uso, via boleto ou Pix. Em cartões pós-pagos (incluindo crédito e adiantamento salarial), a cobrança acontece depois do uso. Cada modelo tem estrutura de tarifação própria: emissão de cartão (R$ 5 a R$ 20), manutenção recorrente (R$ 1 a R$ 20 por mês), tarifa variável de recarga (0% a 3%) e tarifa de uso (pode ser positiva ou negativa). A estrutura correta depende do tipo de produto: benefício, gestão de frota, gestão de despesas, convênio salarial ou premiação.

## O que é funds-in na prática

Em operações de [arranjo fechado](/conteudos/arranjo-aberto-vs-arranjo-fechado), o dinheiro que o usuário gasta com o cartão não vem do nada. Ele foi depositado em algum lugar: uma conta de pagamento interna, uma carteira digital, um saldo associado ao cartão.

Funds-in é o termo técnico para o movimento de entrada desse dinheiro. É o passo que transforma uma conta vazia em uma conta com saldo usável.

Na operação, funds-in é tão importante quanto autorização de transação. Sem funds-in eficiente, o cartão fica inútil. Sem controle de funds-in, fica vulnerável a fraude (por exemplo, alguém consegue depositar e gastar sem que o depósito seja confirmado).

## Dois modelos: pré-pago e pós-pago

A diferença entre pré e pós-pago define toda a arquitetura de funds-in.

**Pré-pago (recarga).** O usuário ou empresa deposita o dinheiro antes do uso. O saldo é creditado na conta associada ao cartão, e o usuário gasta até o limite do que carregou. Quando acaba, precisa recarregar de novo.

Comum em: cartões de benefício corporativo, cartões de vale-cultura, cartões de presente, cartões de premiação.

Risco: praticamente zero para o emissor. O dinheiro já está na conta antes do gasto. Não há exposição a inadimplência.

**Pós-pago.** O usuário recebe um limite de crédito. Usa o cartão e o pagamento (pela empresa pagadora ou pelo próprio usuário) acontece depois.

Comum em: cartões de gestão de frota (a empresa paga depois com base no uso), cartões de gestão de despesas corporativas (a empresa reembolsa depois), cartões de convênio salarial (o valor é descontado em folha), cartões de crédito tradicionais (o usuário paga a fatura).

Risco: médio a alto, dependendo do volume. Exposição a inadimplência. Necessidade de análise de crédito ou limite.

O modelo pré-pago é mais simples de operar, mas mais complicado de usar (usuário precisa se preocupar em recarregar). O modelo pós-pago é mais conveniente, mas exige infraestrutura de crédito.

## Como o dinheiro entra: boleto, Pix e afins

As formas de funds-in mais comuns no Brasil:

**Boleto bancário.** Tradicional, mas ainda importante. O usuário ou empresa acessa a plataforma, solicita a recarga, recebe um boleto, paga no banco. O valor é creditado na conta quando o boleto é compensado (D+1 útil, em média). Útil para empresas que preferem pagamento por boleto (fluxo fiscal integrado).

**Pix.** Crescendo rapidamente como padrão. O usuário solicita recarga, recebe uma chave Pix ou um QR Code, paga. O valor é creditado em segundos. Reduz fricção e é mais barato para a operação.

**TED.** Usado em volumes grandes, mas está sendo substituído pelo Pix. Ainda aparece em operações corporativas que processam recargas em lote por transferência bancária.

**Débito automático.** Algumas operações permitem configurar débito automático da conta bancária do usuário ou empresa em datas fixas. Útil para benefícios recorrentes.

**Cartão de crédito.** Menos comum, mas algumas operações permitem recarregar saldo com cartão de crédito (pagando a tarifa correspondente).

A maioria das operações em 2026 oferece Pix como padrão, boleto como alternativa para quem precisa, e TED para volumes grandes B2B.

## Providers de cobrança e recarga

Para emitir boleto e receber Pix, uma operação de arranjo fechado pode usar:

**Bancos tradicionais via CNAB.** Bradesco, Itaú, Santander, Banco do Brasil. Integração via CNAB 240 ou CNAB 400 (layouts de arquivo), ou via API moderna. Boa opção para operações que já têm relacionamento bancário estabelecido.

**Banking as a Service especializado em cobrança.** Transfeera, Celcoin, Dock. Oferecem API única para emitir boleto, receber Pix, TED, saque, tudo sob uma mesma plataforma. Mais rápidos de integrar, cobrança por transação processada.

A escolha entre banco tradicional e BaaS depende do porte da operação:

Operações pequenas (até 10 mil transações/mês): BaaS costuma ser mais econômico e rápido.

Operações grandes (acima de 100 mil transações/mês): banco tradicional pode oferecer melhor pricing, mas exige negociação e contrato específico.

## A estrutura de tarifas em funds-in

Aqui é onde a operação decide como monetizar. As tarifas aplicáveis variam por tipo de produto.

### Emissão de cartão

Cobrada no ato da emissão de um novo cartão para o usuário.

**Valor típico: R$ 5 a R$ 20 por cartão.**

Aplicável em: benefícios, premiação, gestão de frota, gestão de despesas, convênio salarial.

Em programas de benefício (especialmente vale-refeição e vale-alimentação regulados), a primeira via costuma ser isenta por regulação ou prática de mercado. Segunda via pode ser cobrada.

### Emissão de segunda via ou demais vias

Quando o usuário perde, quebra ou pede troca do cartão.

**Valor típico: R$ 5 a R$ 20 por cartão.**

Aplicável: igual à emissão.

Em benefícios, primeira via costuma isenta, segunda via cobrada para desincentivar pedidos abusivos.

### Manutenção recorrente

Cobrada mensalmente por conta ou por cartão ativo.

**Valor típico: R$ 1 a R$ 20 por mês.**

Varia muito por produto:

Gestão de despesas corporativas: tende a ficar em R$ 15 a R$ 20/mês. Alto valor agregado ao cliente empresa.

Convênio salarial: tende a ficar em R$ 1 a R$ 3/mês. Produto commoditizado.

Benefícios: varia de zero (custo absorvido pelo empregador no MDR) a R$ 5-10/mês em programas premium.

Premiação: geralmente custo zero para o usuário, custo embutido no valor-presente.

### Tarifa variável de recarga

Percentual aplicado sobre o valor recarregado, no ato da recarga.

**Valor típico: 0% a 3%.**

Aplicável principalmente em:

Benefícios: tipicamente isento (regulação e concorrência impõem).

Premiação: tende a cobrar 1% a 3% sobre o valor, como fonte de receita.

Gestão de frota: pode cobrar pequena tarifa sobre o valor recarregado pela empresa.

### Tarifa de uso

Aplicada sobre o valor efetivamente gastado pelo usuário. Pode ser positiva (desconto para o emissor/empregador) ou negativa (bônus ou cashback).

**Valor típico: -3% a +2%.**

Aplicável:

Benefícios: não pode ter taxa negativa (regulação veda cashback em vale-refeição e vale-alimentação).

Gestão de frota e convênio salarial: podem aplicar tarifa positiva sobre o valor usado.

Premiação: pode aplicar tarifa negativa (cashback como incentivo de uso).

## Tabela consolidada por produto

| Produto | Emissão | Manutenção | Recarga % | Uso % |
|---|---|---|---|---|
| Benefícios (vale-alimentação, vale-refeição) | Isento primeira via | R$ 0 a R$ 10/mês | 0% | 0% (não pode negativa) |
| Premiação (gift card) | Cobrado (R$ 5-20) | Não cobra | 1% a 3% | 0% a 3% (pode aplicar cashback negativo como bônus) |
| Gestão de frota | Cobrado (R$ 5-20) | R$ 10 a R$ 20/mês | 0% a 1% | 0% a 1% |
| Gestão de despesas corporativas | Cobrado (R$ 10-20) | R$ 15 a R$ 20/mês | 0% | 0% a 1% |
| Convênio salarial | Cobrado (R$ 5-10) | R$ 1 a R$ 3/mês | 0% | 0% a 1% |

Esses valores são médias de mercado. Cada operação ajusta conforme positioning, concorrência e custo interno.

## Emissão de nota fiscal

Ponto importante que muita operação esquece: na recarga, o emissor pode precisar emitir nota fiscal.

**Em benefícios (PAT e similares),** a emissão de NF é obrigatória por regulação trabalhista. O empregador precisa da nota para comprovar a concessão do benefício.

**Em premiação,** a nota também costuma ser obrigatória para fins tributários do empregador ou patrocinador.

**Em gestão de frota e despesas corporativas,** a nota pode ser opcional, dependendo do modelo contratual.

**Em cartões de pessoa física (convênio salarial),** geralmente não precisa.

A emissão de NF tem impacto operacional e tributário. Quem opera arranjo fechado precisa ter processo de emissão automatizado, integrado ao funds-in.

## Atenção: funds-in e custódia de recursos

Quando dinheiro entra em uma conta de cartão, esse dinheiro é custodiado pelo emissor até ser gasto. Custódia de recursos de terceiros é tema regulatório sensível no Brasil.

Pela regulação BACEN, recursos de conta pré-paga devem ficar em contas segregadas, em instituições financeiras autorizadas, e parte (ou totalidade) pode precisar ser aplicada em títulos públicos específicos.

Isso gera dois pontos práticos:

**Rendimento do float.** O dinheiro aplicado em títulos públicos rende. Esse rendimento é [receita de float](/conteudos/receita-de-float-emissao-cartoes) e pode ser apropriado pelo emissor (ou repassado pela instituição de pagamento que gerencia).

**Obrigações de compliance.** A custódia exige reportes regulares ao BACEN, auditorias, reservas mínimas. Não é operação que pode ser feita de forma informal.

Em operações via BaaS, o BaaS assume a maior parte dessas obrigações regulatórias. Em operações com licença própria ou em arranjos fechados maiores, a operação gerencia tudo diretamente.

## Erros comuns em funds-in

**Cobrar tarifa em produto regulado.** Cobrar tarifa de manutenção em vale-alimentação pode gerar problema regulatório e comercial. Conheça as regras do produto específico antes de definir tarifação.

**Ignorar emissão de nota fiscal.** Gera problema tributário para o cliente empregador e pode inviabilizar o produto.

**Subestimar custo de processamento de recargas.** Cada emissão de boleto ou Pix tem custo (R$ 0,10 a R$ 1,50 por transação, dependendo do provedor). Em volumes altos, esse custo vira item material de P&L.

**Não monitorar falhas de recarga.** Pix pago pelo empregador mas não creditado na conta do usuário é um incidente. Sem monitoramento ativo, passa despercebido até virar reclamação.

## FAQ

**O que é funds-in em cartão?**

Funds-in é o processo de entrada de dinheiro em uma conta associada a um cartão. Em pré-pago, a recarga antes do uso. Em pós-pago, a estruturação do limite de crédito ou do fluxo de cobrança pós-uso.

**Qual é a diferença entre pré-pago e pós-pago?**

Pré-pago: o dinheiro entra antes do uso. Sem risco de inadimplência. Usado em benefícios, premiação. Pós-pago: o dinheiro entra depois do uso (fatura, cobrança em folha). Exige análise de crédito. Usado em gestão de frota, despesas corporativas, cartão de crédito.

**Como funciona a recarga via Pix?**

O usuário ou empresa solicita a recarga, recebe uma chave Pix ou QR Code, paga. O valor é creditado em segundos. Hoje é o método mais rápido e econômico para a maioria das operações.

**Qual é a tarifa padrão de emissão de cartão?**

R$ 5 a R$ 20 por cartão. Em benefícios regulados (vale-alimentação, vale-refeição), a primeira via é isenta. Segunda via pode ser cobrada.

**Posso cobrar tarifa em cartão de benefício?**

Depende do benefício. Em vale-alimentação e vale-refeição regulados pelo PAT, há restrições sobre o que pode ser cobrado. Em benefícios flexíveis ou programas próprios da empresa, há mais flexibilidade. Sempre consulte regulação específica.

**O que é tarifa variável de recarga?**

É um percentual aplicado sobre o valor recarregado, cobrado no ato da recarga. Comum em programas de premiação (1% a 3%), raro em benefícios (0%).

**Quem paga as tarifas de funds-in: o empregador ou o usuário?**

Depende do modelo. Em benefícios corporativos, costuma ser o empregador. Em convênio salarial, pode ser o próprio usuário (desconto em folha). Em premiação e gestão de frota, o patrocinador do programa.

**A recarga via boleto ainda faz sentido em 2026?**

Sim, para empresas que preferem pagamento por boleto para integração com sistema fiscal. É menos ágil que Pix mas ainda usado, especialmente em B2B de grandes volumes.

**Posso usar cartão de crédito para recarregar saldo?**

Algumas operações permitem, mas é raro. Geralmente o fluxo é boleto, Pix ou TED. Cartão de crédito para recarga traz complicação de chargeback e vira raramente.

**Quem emite nota fiscal na recarga?**

O emissor do cartão (você, se está montando a operação). A nota é sobre as tarifas de serviço cobradas. O valor principal da recarga não costuma gerar nota fiscal (é só transferência de recurso entre contas). Consulte seu contador para cada produto.

## Próximo passo

Se você está estruturando operação de cartão em arranjo fechado e precisa desenhar o fluxo de funds-in e a estrutura de tarifas, a JUST ajuda a modelar o modelo correto para o seu tipo de produto. [Fale com a gente](/contato).
