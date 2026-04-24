---
brief: 013
slug: como-solicitar-bin-iin-abnt
cluster: emissao-cartao
type: satellite
author: gabriel-pires
termo_alvo: como solicitar bin abnt
title: "Como solicitar um BIN/IIN para arranjo fechado no Brasil: o caminho da ABNT"
meta_description: "Para emitir cartão em arranjo fechado no Brasil, o BIN (Bank Identification Number) é registrado junto à ABNT seguindo a ISO/IEC 7812-1. Entenda o processo, o custo, o prazo e quando esse caminho faz sentido."
canonical: /conteudos/como-solicitar-bin-iin-abnt
og_image: /og/como-solicitar-bin-iin-abnt.png
categoria: Cartões
data_publicacao: 2026-04-23
data_modificacao: 2026-04-23
reading_time: 10
tags:
  - bin
  - iin
  - abnt
  - iso 7812
  - arranjo fechado
  - emissão de cartão
---

# Como solicitar um BIN/IIN para arranjo fechado no Brasil: o caminho da ABNT

## Resposta direta

Para operações de cartão em arranjo fechado no Brasil, o registro do BIN (Bank Identification Number) e IIN (Issuer Identification Number) é feito diretamente junto à ABNT, que atua como Registration Authority do padrão ISO/IEC 7812-1. O processo envolve contato formal com a ABNT, preenchimento do formulário oficial (em inglês, no padrão internacional) e aguardo da aprovação. Custa entre R$ 3.000 e R$ 5.000, leva em torno de 30 dias e resulta em um identificador único de 6 ou 8 dígitos usado nos cartões da sua própria rede. Para arranjo aberto (cartões bandeirados Visa, Mastercard, Elo), o caminho é outro: o registro do BIN passa pela bandeira e envolve homologação técnica específica, não por solicitação direta à ABNT.

## O que é BIN e o que é IIN

Os dois termos se confundem e muita gente usa como sinônimos. Tecnicamente têm origens diferentes.

**BIN (Bank Identification Number)** é o termo histórico. Surgiu quando praticamente só bancos emitiam cartões. São os primeiros 6 dígitos do número impresso no cartão, que identificam quem emitiu aquele plástico.

**IIN (Issuer Identification Number)** é o termo moderno e oficial da norma ISO/IEC 7812-1. Com a expansão da emissão para fintechs, companhias de benefícios e varejistas, "Bank" ficou ultrapassado. Hoje o IIN é o termo tecnicamente correto, e a norma está em transição de 6 para 8 dígitos.

Na prática, no Brasil e no mundo, se usa BIN e IIN como sinônimos. Esse artigo segue essa convenção.

Os dígitos do IIN identificam o emissor do cartão no sistema global de pagamentos. Sem IIN registrado, o roteamento de transações não consegue encontrar quem emitiu o cartão. É o equivalente a um domínio no DNS: sem ele, ninguém sabe pra onde mandar o pacote.

## Arranjo fechado vs arranjo aberto: dois caminhos diferentes

Antes de entrar no passo a passo, vale deixar claro em qual cenário esse caminho via ABNT se aplica.

- **Arranjo fechado (foco deste artigo).** O emissor controla toda a cadeia, cria sua própria bandeira proprietária e credencia a rede de estabelecimentos que vai aceitar o cartão. O BIN precisa ser único no sistema global de identificação para não colidir com outros emissores. É para esse caso que o registro direto junto à ABNT faz sentido, seguindo a ISO/IEC 7812-1. Empresas que operam [private label](/conteudos/cartao-private-label), frota própria ou programas proprietários usam esse caminho.
- **Arranjo aberto (Visa, Mastercard, Elo, American Express).** O emissor precisa de um BIN alocado pela bandeira, não solicitado diretamente à ABNT. O processo passa por contrato com a bandeira, homologação técnica, PCI DSS, integração com a rede global da bandeira. A bandeira cuida do registro do BIN nos sistemas internacionais dela. Se você vai emitir cartão Visa ou Mastercard, não é pela ABNT que o BIN é liberado, é pela bandeira (ou pelo seu [BIN Sponsor](/conteudos/bin-sponsor-o-que-e), que já tem essa estrutura).

O resto deste artigo descreve o fluxo via ABNT, aplicável a arranjo fechado.

## Quando você precisa de BIN próprio em arranjo fechado

Nem toda operação em arranjo fechado precisa solicitar BIN próprio à ABNT. A regra geral:

- Se você opera via [BIN Sponsor](/conteudos/bin-sponsor-o-que-e) (tanto em bandeira aberta quanto em arranjo fechado suportado pelo sponsor), não precisa. Você usa o BIN do sponsor.
- Se você emite [cartão private label](/conteudos/cartao-private-label) em rede própria e não usa sponsor, precisa. O BIN próprio identifica seus cartões no seu ecossistema e garante que o identificador não conflite com outros no mundo.
- Se você tem um arranjo de pagamento próprio que interopera com outros sistemas (credenciadores, aceitadores terceiros), precisa. O IIN é o que permite roteamento entre sistemas.

Na maioria das operações de fintech que começam hoje, o caminho é via sponsor, e não é necessário solicitar BIN diretamente. Private labels grandes e operações proprietárias que não passam por sponsor dependem de BIN registrado via ABNT.

## A ABNT como autoridade de registro

No mundo, a ISO/IEC 7812-1 delega o controle dos registros para Registration Authorities nacionais. Nos Estados Unidos, é a American Bankers Association (ABA). No Brasil, é a Associação Brasileira de Normas Técnicas (ABNT).

A ABNT tem um papel administrativo no processo. Recebe o pedido, valida o candidato, atribui um identificador único e comunica a aprovação ao sistema internacional. Não faz supervisão regulatória. Não analisa modelo de negócio. Não precisa aprovação do BACEN como pré-requisito (embora o BACEN tenha que autorizar a operação como um todo quando o caso exige).

Quem registra BIN junto à ABNT recebe um número único que ninguém mais no mundo vai poder usar. É uma atribuição global, administrada localmente.

Um ponto prático: o canal de contato da ABNT para essa solicitação não é publicado de forma visível no site, o processo depende do contato correto com a área técnica responsável pelo registro de IIN. Operações que nunca passaram por isso costumam perder semanas tentando achar a porta certa. A gente na JUST conduz esse processo regularmente para clientes, então se você estiver nessa etapa, [fale com a gente](/contato) que orientamos o fluxo inicial sem custo.

## O passo a passo do processo

O fluxo prático é esse:

### Passo 1: Contato inicial com a ABNT

O primeiro movimento é abrir o contato formal com a área técnica da ABNT responsável pelo registro de IIN. Na mensagem, a empresa informa o interesse em solicitar um identificador e pede o formulário oficial de aplicação.

A resposta da ABNT costuma vir em poucos dias úteis. Vem com o formulário de aplicação (em inglês, no padrão internacional) e com orientações de pagamento da taxa. Quem já fez esse processo antes passa por aqui em uma semana. Quem nunca fez costuma travar, porque o canal de contato não está exposto publicamente. Em caso de dúvida, a gente pode orientar como proceder, [é só nos chamar](/contato).

### Passo 2: Preenchimento do formulário

O formulário é o "Application/Agreement for Issuer Identification Number" padrão ISO/IEC 7812-1. É em inglês porque é o mesmo documento usado em qualquer país do mundo.

Pede as seguintes informações principais:

- Nome legal completo da organização requerente.
- Endereço físico da organização.
- Endereço para correspondência, se diferente.
- Contato principal: nome e sobrenome.
- Número de telefone.
- E-mail.
- VAT ou equivalente fiscal (CNPJ, no Brasil).
- Indústria principal. O formulário lista opções (Airline, Entertainment, Banking/Financial, Healthcare, Merchandising/Retail, Technology, Telecommunications, Other).
- Descrição breve do negócio do requerente.
- Descrição breve de como o cartão será usado.
- Se a organização já tem algum IIN fora desse sistema (indica caso a organização já opere em outros países com IIN separado).
- Data prevista de primeiro uso do IIN.
- Quantos IINs você pretende registrar (uma organização pode ter mais de um se justificar o uso).
- Compromisso de que o IIN será usado em conformidade com a ISO/IEC 7812.
- Se o uso será doméstico e internacional, ou só doméstico (fechado).
- O formulário precisa ser assinado por representante legal da organização.

### Passo 3: Pagamento da taxa

A ABNT cobra taxa pelo processo, que varia no tempo e dependendo do número de IINs solicitados. A faixa que o mercado costuma praticar é entre R$ 3.000 e R$ 5.000 para o primeiro IIN. IINs adicionais na mesma solicitação podem ter desconto.

O pagamento costuma ser feito por depósito bancário ou boleto. A confirmação do pagamento é o gatilho para o processamento do pedido.

### Passo 4: Aprovação e entrega do IIN

A ABNT analisa o pedido. Se tudo está correto, atribui um número único e envia de volta ao requerente. O tempo médio é de 30 dias corridos, podendo variar conforme carga da ABNT no período.

O que chega na aprovação:

- O número do IIN atribuído.
- Certificado oficial (em inglês).
- Instruções para comunicação do uso ao sistema internacional.

A partir daí, o IIN é seu. Tecnicamente, ele está disponível para ser usado imediatamente na identificação dos cartões que você vai emitir. Na prática, ainda há passos adicionais.

## O que muitas operações esquecem

Quatro coisas que a gente vê travando o processo de BIN:

- **Primeira: pedir o IIN antes de ter clareza do modelo de cartão.** Registrar BIN sem saber se vai ser pré-pago, débito ou crédito, ou sem saber se vai ser bandeira aberta ou fechada, leva a IIN mal utilizado ou a necessidade de pedir outro depois. Faça o planejamento do produto antes do pedido.
- **Segunda: negligenciar a homologação na bandeira.** O IIN na mão não basta se o cartão não passa na maquininha. A homologação tem suas próprias regras e seu prazo, muitas vezes mais longo do que o registro do IIN em si.
- **Terceira: esquecer do registro interno na processadora.** A processadora de cartão (sua ou de terceiros) precisa ser configurada para reconhecer o IIN e encaminhar transações corretamente. Erro comum de quem delega demais: assumir que alguém vai fazer isso sozinho.
- **Quarta: não manter documentação atualizada.** Quando a empresa muda razão social, endereço, estrutura societária, o registro na ABNT precisa ser atualizado. Manter isso organizado evita problemas em auditorias futuras.

## FAQ

**O que é BIN de cartão?**

BIN (Bank Identification Number) é o conjunto dos 6 ou 8 primeiros dígitos do número do cartão. Identifica a instituição emissora. É a chave que permite o roteamento de transações no sistema global de pagamentos.

**Qual é a diferença entre BIN e IIN?**

BIN é o termo histórico. IIN (Issuer Identification Number) é o termo moderno e oficial da norma ISO/IEC 7812-1. Ambos se referem ao mesmo conjunto de dígitos. Hoje é uma terminologia dupla, com IIN sendo tecnicamente correto e BIN sendo comum no dia a dia.

**Quanto custa solicitar um BIN no Brasil?**

O custo direto na ABNT fica entre R$ 3.000 e R$ 5.000 por IIN. Incluindo homologação em bandeira, integração técnica e setup operacional, o custo total para ter um BIN funcional vai de R$ 170 mil a R$ 830 mil.

**Quanto tempo leva para receber um BIN?**

O processo na ABNT leva em torno de 30 dias corridos. Considerando homologação em bandeira e integração, pode levar de 3 a 6 meses no total até o primeiro cartão em produção.

**Preciso de BIN próprio para emitir cartão?**

Não necessariamente. Se você opera via BIN Sponsor em bandeira aberta, usa o BIN do sponsor. Só precisa de BIN próprio se quer emitir cartão com arranjo fechado próprio, se quer ser emissor direto em bandeira aberta, ou se tem arranjo proprietário que interopera com outros.

**Posso registrar mais de um BIN?**

Sim. Uma organização pode registrar múltiplos IINs se justificar o uso (múltiplas marcas, múltiplos programas, múltiplos países). Na solicitação inicial à ABNT, basta indicar quantos quer.

**O que é ISO/IEC 7812?**

É a norma internacional que define o padrão de numeração de cartões de identificação. A parte 1 da norma define o sistema de IIN. A parte 2 trata de procedimentos de registro. A ISO/IEC 7812 é o padrão seguido pela Visa, Mastercard, American Express, Elo, Discover e bandeiras regionais em todo o mundo.

**O BIN de 6 dígitos está sendo descontinuado?**

Sim. A transição de 6 para 8 dígitos começou em 2017 e está em fase final. BINs novos já são atribuídos em 8 dígitos. BINs antigos de 6 dígitos continuam válidos, mas os sistemas estão sendo atualizados para tratar o IIN como de 8 dígitos por padrão.

**Preciso de autorização do BACEN para registrar BIN?**

Não. O registro do IIN na ABNT é processo administrativo independente do BACEN. Porém, a operação que usará o BIN pode precisar de autorização do BACEN, conforme a [Resolução BCB 150/2021](/conteudos/resolucao-bcb-150-2021).

**Posso usar o BIN registrado em outro país?**

Depende da bandeira e do tipo de uso. O IIN é um identificador global, mas o uso efetivo em rede internacional exige homologação específica da bandeira. Cartões em arranjo fechado geralmente ficam restritos ao Brasil.

**Esse processo na ABNT vale para cartão Visa ou Mastercard?**

Não. Para cartão de arranjo aberto (Visa, Mastercard, Elo, American Express), o BIN é alocado pela própria bandeira no processo de homologação do emissor, não solicitado diretamente à ABNT. Se você opera via [BIN Sponsor](/conteudos/bin-sponsor-o-que-e), o sponsor já tem o BIN alocado com a bandeira e você usa o dele. O caminho via ABNT descrito aqui é o padrão para arranjo fechado.

**Como começar o contato com a ABNT?**

O canal correto da ABNT para registro de IIN não é publicado de forma aberta no site deles. Operações que nunca passaram por isso costumam travar nessa etapa. A gente na JUST orienta clientes que estão nesse caminho. Se você está começando o processo, [fale com a gente](/contato) que indicamos a porta certa.

## Próximo passo

Se você está estruturando uma operação de cartão em arranjo fechado e precisa solicitar BIN próprio, a JUST orienta o processo junto à ABNT e ajuda a desenhar a estrutura completa de emissão. Para quem opera em arranjo aberto, a gente conecta com o caminho via bandeira ou BIN Sponsor adequado ao modelo. [Fale com a gente](/contato) para uma análise inicial.
