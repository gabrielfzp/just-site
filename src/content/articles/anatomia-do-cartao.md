---
brief: 014
slug: anatomia-do-cartao
cluster: emissao-cartao
type: satellite
author: gabriel-pires
termo_alvo: anatomia do cartão pan cvv chip emv
title: "Anatomia do cartão: o que são PAN, BIN, CVV, chip EMV e trilha magnética"
meta_description: "O cartão físico tem vários componentes técnicos: PAN, BIN, CVV, chip EMV, trilha magnética, NFC e data de expiração. Entenda o que cada um faz, por que existe e como conversam entre si."
canonical: /conteudos/anatomia-do-cartao
og_image: /og/anatomia-do-cartao.png
categoria: Cartões
data_publicacao: 2026-04-23
data_modificacao: 2026-04-23
reading_time: 12
tags:
  - cartão
  - pan
  - cvv
  - chip emv
  - trilha magnética
  - nfc
---

# Anatomia do cartão: o que são PAN, BIN, CVV, chip EMV e trilha magnética

## Resposta direta

Um cartão de pagamento físico é composto por vários elementos técnicos, cada um com função específica. O PAN (Primary Account Number) é o número de 16 dígitos que identifica o cartão. Os primeiros 6 ou 8 dígitos são o BIN (Bank Identification Number), que identificam o emissor. O CVV é o código de segurança, e existe em versões diferentes (CVV1 na trilha magnética, CVV2 impresso no verso, CVV3 dinâmico em alguns cartões). O chip EMV é o circuito integrado que armazena dados criptografados para compras presenciais. A trilha magnética é o legado, padronizado pela ISO/IEC 7813. O NFC (contactless) é a antena para aproximação.

## Por que vale entender a anatomia do cartão

Se você vai emitir cartão, conhecer cada parte não é luxo. É o que separa quem faz uma operação bem feita de quem fica refém do fornecedor.

Vamos percorrer o cartão de fora pra dentro.

## O PAN: o número principal

PAN é Primary Account Number. É aquele número de 16 dígitos que fica gravado na frente do cartão. Tecnicamente não é um número arbitrário. Ele é estruturado em três blocos, conforme a norma ISO/IEC 7812:

- **Dígitos 1 a 6 (ou 1 a 8, na norma atualizada): BIN/IIN.** Identificam quem emitiu o cartão. É o [BIN que se registra na ABNT](/conteudos/como-solicitar-bin-iin-abnt).
- **Dígitos 7 a 15 (ou 9 a 15): Identificador único do cartão.** É o número específico daquele cartão dentro do emissor. Geralmente é um sequencial, mas pode ter lógica interna para identificar produto, série, data de emissão.
- **Dígito 16: Dígito verificador.** Calculado pelo [algoritmo de LUHN](/conteudos/algoritmo-luhn-cartao). Serve para detectar erros de digitação. Não é um dígito de segurança, é um dígito de consistência.

Quando alguém tenta gerar um PAN aleatoriamente, a chance de o dígito verificador bater é de 1 em 10. Por isso o LUHN é usado desde os anos 1950. É um filtro simples que evita que erros triviais de digitação virem transações erradas.

O PAN inteiro é público no sentido de que está impresso no cartão. Mas o uso do PAN isolado geralmente não é suficiente pra autorizar uma transação. Você precisa casar com outros elementos (data de expiração, CVV, senha).

## BIN: quem emitiu o cartão

O BIN (Bank Identification Number), como já vimos, são os primeiros 6 ou 8 dígitos do PAN. É o que permite o roteamento de transações. Quando você passa o cartão numa maquininha, o adquirente lê o BIN, consulta uma tabela global, identifica a bandeira e o emissor, e roteia a transação para a rede certa.

Cada bandeira tem faixas de BIN reservadas. Visa começa geralmente com 4. Mastercard com 5 (ou 2 em alguns programas novos). American Express com 34 ou 37. Elo com faixas específicas atribuídas à bandeira nacional.

Isso explica o "truque" que muita gente percebe sem entender: ao olhar os primeiros dígitos de um cartão, dá pra saber a bandeira antes mesmo de ver o logo. Mas esse é só o primeiro filtro. O BIN completo identifica também o emissor específico, que pode ser o banco, a fintech ou o programa.

## CVV: o código de segurança

Aqui mora uma confusão clássica. Muita gente acha que o CVV é só aquele código de 3 dígitos no verso do cartão. Na verdade, existem múltiplos CVVs.

**CVV1 (também chamado CVC1, CVN1).** É gerado pelo emissor e gravado na trilha magnética do cartão. Nunca é visível ao portador. Serve para autenticação em transações presenciais com tarja magnética. Quando o cartão é passado na maquininha, o CVV1 é lido e enviado na autorização. Se o CVV1 não bate com o esperado, a transação é negada. Isso dificulta clonagem simples de cartão.

**CVV2 (ou CVC2, CVN2).** É o famoso código de 3 dígitos impresso no verso. Em cartões Amex, são 4 dígitos na frente. Serve para autenticar transações em cartão não presente (e-commerce, telefone). Não está na trilha magnética. Não está no chip. A ideia é que só quem tem o cartão físico em mãos pode fornecer o CVV2. Se alguém roubou só o PAN e a data de expiração (via scraping ou phishing, por exemplo), sem o CVV2 não consegue fazer uma compra online na maioria dos merchants.

**CVV3 (dinâmico).** Em alguns cartões modernos, especialmente os premium, existe um display no cartão que exibe um CVV3 que muda a cada poucas horas. Criptograficamente gerado, torna quase impossível fraudar mesmo que alguém veja o cartão por alguns segundos. No Brasil, ainda é raro.

Nenhum dos CVVs é criptográfico por design, mas cada um cumpre um filtro contra um tipo de fraude específico. Um bom sistema antifraude combina CVV com outras assinaturas (IP, geolocalização, histórico de uso) para decidir autorização.

## Chip EMV: o circuito integrado

EMV significa Europay, Mastercard, Visa. São as três bandeiras que se uniram nos anos 1990 para criar um padrão único de cartão com chip. A Europay depois foi absorvida pela Mastercard, mas o nome ficou.

O chip EMV é aquele quadradinho dourado na frente do cartão. Ele armazena dados criptografados do cartão e do emissor. Quando inserido na maquininha, troca mensagens com o POS, gera um criptograma único para aquela transação, e só libera a compra se o criptograma for validado pela processadora.

A grande diferença entre chip EMV e trilha magnética é que o chip gera um criptograma único por transação. Isso significa que, mesmo se alguém gravar o dado gerado naquela compra, não consegue replicar a mesma transação depois. Já a tarja magnética tem dados estáticos, que podem ser copiados com um skimmer e reutilizados.

Por isso, cartões com chip são exponencialmente mais seguros que cartões só com tarja. Hoje, em praticamente todo o mundo, o chip é mandatório para cartões de bandeira aberta. Fraude com tarja magnética caiu mais de 80% depois da adoção ampla do EMV.

Em operações de [arranjo fechado](/conteudos/cartao-private-label), o chip EMV às vezes é dispensado porque o escopo de uso é controlado e o risco de fraude é menor. O custo do chip (R$ 7 a R$ 12 por cartão na produção, mais R$ 5 mil a R$ 10 mil por mês em contratos de tecnologia para leitura) não compensa em todos os cenários.

## Trilha magnética: o legado que ainda persiste

A trilha magnética (magnetic stripe) é a faixa preta ou marrom no verso do cartão. Foi o primeiro padrão de armazenamento de dados em cartão de pagamento, inventado nos anos 1960.

Tecnicamente, a trilha magnética padrão ISO/IEC 7813 tem três faixas:

| Trilha | Conteúdo | Uso |
|---|---|---|
| 1 | PAN, nome do portador, data de expiração, código de serviço | Historicamente usada em cartões da indústria aérea |
| 2 | PAN, data de expiração, código de serviço, CVV1 | Mais usada em cartões bancários no Brasil |
| 3 | Conteúdo opcional, customizável por instituição | Raramente usada |

A trilha magnética é o caminho mais barato e simples para emitir cartão. Uma tiragem de plástico com só tarja magnética custa entre R$ 0,50 e R$ 2,00 por unidade, contra R$ 7 a R$ 12 com chip EMV.

O problema é a segurança. Trilha magnética é copiável com equipamento barato (skimmer). Por isso as bandeiras abertas obrigam chip EMV em todos os cartões emitidos hoje. Em arranjos fechados, onde a rede é controlada, tarja magnética ainda é aceitável.

O Brasil, assim como Europa e boa parte da Ásia, migrou para chip EMV bem antes dos Estados Unidos. Os americanos só adotaram EMV em massa a partir de 2015.

## NFC e contactless

NFC (Near Field Communication) é a tecnologia que permite pagamento por aproximação. O cartão tem uma antena interna que se comunica com o POS sem contato físico. A maioria dos cartões bandeirados emitidos hoje tem NFC.

Contactless é funcionalmente parecido com chip EMV. O cartão gera criptograma único por transação, só que a conexão é via rádio em vez de contato físico.

Vantagens do contactless:

- Rapidez. Transação acontece em menos de 1 segundo.
- Desgaste menor do cartão. Sem atrito físico.
- Compatível com carteiras digitais (Apple Pay, Google Pay, Samsung Pay), que usam o mesmo padrão NFC.

Desvantagens:

- Custo adicional. Cartão com NFC custa mais caro na produção (R$ 2 a R$ 4 a mais por unidade). Infra de POS com contactless também tem custo de adequação (R$ 20 mil a R$ 30 mil por mês em alguns contratos de tecnologia de leitura).

Em arranjos fechados, NFC é menos comum. O ganho de velocidade não compensa o custo adicional quando a operação é contida.

## Data de expiração

Simples, mas merece atenção. A data de expiração (MM/AA) indica até quando o cartão é válido. Depois disso, o cartão precisa ser reemitido.

Função técnica:

- **Autenticação adicional.** Em compras não presentes, o merchant pede a data junto com o PAN e CVV2. Trio de dados.
- **Controle de ciclo.** Cartões expirados são automaticamente bloqueados na autorização. Se alguém tenta usar um cartão depois da data, o emissor nega.
- **Gerenciamento de risco.** O emissor reemite o cartão periodicamente, o que dá chance de atualizar chips, substituir cartões perdidos, atualizar CVVs.

A validade padrão de um cartão varia de 3 a 5 anos. Cartões premium às vezes são emitidos com validade mais longa, cartões de benefício corporativo às vezes com validade mais curta alinhada ao contrato de trabalho.

## Nome do portador

Impresso na frente, abaixo do PAN. Não tem função técnica de autenticação direta na maioria dos sistemas. Mas cumpre funções:

- **Identificação visual.** Em compras presenciais, o comerciante pode pedir o documento do portador pra conferir se o nome bate com o cartão.
- **Branding.** Cartões empresariais podem ter o nome da empresa junto com o do funcionário.
- **Relacionamento.** Cartão com nome personaliza a experiência do cliente.

O nome tem limite de caracteres que varia por bandeira. Visa e Mastercard geralmente aceitam até 26 caracteres. Nome muito longo é truncado ou abreviado.

## Outros elementos do cartão físico

Alguns elementos adicionais que aparecem em cartões:

- **Dados do emissor.** Impressos no verso, identificam a instituição legalmente responsável. Útil para o portador saber quem contatar em caso de problema.
- **Texto livre.** Espaço para informações adicionais: número de atendimento, canais de suporte, avisos sobre uso. Varia por emissor.
- **Hologramas.** Algumas bandeiras exigem holograma específico (Visa tem a pomba voadora, Mastercard tem os círculos sobrepostos). Elemento anti-falsificação visual.
- **Elementos táteis.** Algumas jurisdições exigem elementos em relevo, incluindo em Braille, para acessibilidade.
- **Código de serviço.** Três dígitos armazenados na trilha magnética, indicam tipo de cartão (crédito, débito, pré-pago), se é internacional, se permite PIN.

## Quanto custa cada elemento na produção

Pra dar uma ordem de grandeza:

| Elemento | Custo adicional por cartão |
|---|---|
| Plástico padrão com tarja magnética | R$ 0,50 a R$ 2,00 |
| Chip EMV | R$ 7,00 a R$ 12,00 adicional |
| Antena NFC (contactless) | R$ 2,00 a R$ 4,00 adicional |
| Hologramas e elementos de segurança | R$ 1,00 a R$ 3,00 adicional |
| Plástico premium (metal, transparente) | R$ 30,00 a R$ 80,00 vs padrão |
| Personalização (embossing, gravação a laser) | R$ 2,00 a R$ 5,00 |
| Embalagem (cartão em caixa, carta personalizada) | R$ 3,00 a R$ 10,00 |

Quem está modelando operação de cartão precisa somar esses itens ao custo total. Um cartão completo bandeirado com chip, NFC e embalagem padrão fica entre R$ 12 e R$ 25 por unidade. Cartão premium metálico com embalagem sofisticada facilmente passa de R$ 100.

## FAQ

**O que é PAN em cartão?**

PAN (Primary Account Number) é o número principal do cartão, aquele de 16 dígitos impresso na frente. Identifica unicamente cada cartão no sistema de pagamentos.

**Qual é a diferença entre CVV1 e CVV2?**

CVV1 é o código gravado na trilha magnética, usado em transações presenciais. Nunca é visível ao portador. CVV2 é o código de 3 dígitos impresso no verso (ou 4 dígitos na frente, em cartões Amex), usado em transações não presentes (e-commerce). Tem funções diferentes e atende ataques diferentes.

**Chip EMV é mais seguro que tarja magnética?**

Sim. Chip EMV gera criptograma único por transação, tornando clonagem muito mais difícil. Tarja magnética tem dados estáticos, que podem ser copiados com skimmer e reutilizados. Por isso, bandeiras abertas mundialmente hoje obrigam chip EMV.

**O que é NFC no cartão?**

NFC (Near Field Communication) é a tecnologia de comunicação por aproximação. Uma antena dentro do cartão permite pagamento por aproximação do POS, sem precisar inserir o cartão. É a mesma tecnologia usada em Apple Pay, Google Pay e Samsung Pay.

**Por que o cartão tem data de expiração?**

A data de expiração serve como autenticação adicional (junto com PAN e CVV2), como controle de ciclo (permite reemitir cartões periodicamente) e como gerenciamento de risco. Cartões vencidos são bloqueados automaticamente na autorização.

**O que são as trilhas magnéticas do cartão?**

A trilha magnética segue o padrão ISO/IEC 7813 e tem 3 faixas. A trilha 1 armazena PAN, nome e data de expiração. A trilha 2 armazena PAN, data de expiração, código de serviço e CVV1. A trilha 3 é opcional e raramente usada. A trilha 2 é a mais usada em cartões bancários no Brasil.

**Por que o último dígito do cartão é um dígito verificador?**

O último dígito do PAN é calculado pelo algoritmo de LUHN para permitir detecção de erros de digitação. Se alguém digita o número errado, o dígito verificador não bate e o sistema rejeita antes mesmo de tentar a transação. Não é segurança, é consistência.

**Posso ter cartão só virtual sem cartão físico?**

Sim. Cartões virtuais são emitidos apenas digitalmente, com PAN, data de expiração e CVV2, sem plástico correspondente. São usados em compras online. Algumas fintechs (como Caju, Nubank Rewards) operam só com virtual em alguns cenários. A economia é significativa: zero custo de produção e logística.

**Qual é a diferença entre cartão físico e tokenizado?**

Cartão físico é o plástico com PAN gravado. Cartão tokenizado é a versão do mesmo cartão carregada em carteira digital (Apple Pay, Google Pay). A tokenização substitui o PAN por um token diferente por dispositivo, aumentando a segurança. Um único cartão pode ter múltiplos tokens ativos ao mesmo tempo (um no celular, outro no relógio, outro no laptop).

**Quantos dígitos tem um cartão?**

A maioria dos cartões tem 16 dígitos no PAN. Amex usa 15 dígitos. Diners Club histórico usa 14. A norma ISO/IEC 7812 permite de 13 a 19 dígitos, mas a convenção global é 16.

## Próximo passo

Se você está estruturando operação de cartão e precisa escolher os elementos do produto (chip ou só tarja, com NFC ou sem, plástico padrão ou premium), a JUST ajuda a desenhar a configuração que faz sentido para o seu caso de uso e orçamento. [Fale com a gente](/contato).
