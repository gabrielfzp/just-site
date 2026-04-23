# ISO 8583: o protocolo que sustenta bilhões de transações de cartão no mundo
Canônica: https://wearejust.it/conteudos/iso-8583-protocolo-cartoes
Markdown: https://wearejust.it/conteudos/iso-8583-protocolo-cartoes.md
Site: JUST Fintechs
Autor: Gabriel Pires
Categoria: Tecnologia
Publicado em: 2026-04-23
Atualizado em: 2026-04-23
Tags: iso 8583, protocolo, cartão, processamento de transações, tecnologia
## Resposta curta
ISO 8583 é o padrão internacional de mensageria transacional para cartões de pagamento, publicado pela primeira ve
# ISO 8583: o protocolo que sustenta bilhões de transações de cartão no mundo

## Resposta direta

ISO 8583 é o padrão internacional de mensageria transacional para cartões de pagamento, publicado pela primeira vez em 1987 e atualizado em 1993 e 2003. Define como informações de uma transação (compra, cancelamento, consulta de saldo) são formatadas, transmitidas e interpretadas entre emissor, bandeira e adquirente. Ainda hoje, décadas depois, é o protocolo por trás de praticamente toda transação de cartão no mundo, incluindo Visa, Mastercard, Elo, American Express. Pode rodar sobre TCP/IP com mensagens binárias ou sobre HTTP com JSON/XML em implementações modernas.

## Por que um padrão de 1987 ainda está no centro do sistema

Em tecnologia, durar quase 40 anos na ativa é raro. A ISO 8583 dura porque foi bem projetada para o problema dela.

Ela resolve um problema simples: como emissor, bandeira e adquirente, rodando em empresas diferentes em países diferentes, podem conversar sobre uma mesma transação em linguagem comum, sem perda de informação, sem ambiguidade, com velocidade suficiente para o usuário não sentir demora.

A elegância da solução está no formato compacto baseado em bits. Em uma época de conexões lentas e caras, cada byte transmitido contava. A ISO 8583 empacota tudo que é necessário para uma transação em menos de 1 KB de dados, muitas vezes em menos de 200 bytes. O POS na loja pede autorização, a bandeira roteia, o emissor responde, tudo em menos de 2 segundos.

Décadas depois, mesmo com a largura de banda disponível hoje, o protocolo continua sustentando o padrão. As bandeiras investiram bilhões em sistemas baseados em ISO 8583, e mudar seria trocar o alicerce do mundo dos pagamentos.

## Como funciona a estrutura da mensagem

Uma mensagem ISO 8583 é composta de três partes:

**Header (cabeçalho).** Contém metadados opcionais sobre a mensagem. Pode variar por implementação.

**MTI (Message Type Indicator).** Quatro dígitos que identificam o tipo da mensagem. Por exemplo, 0200 é uma requisição de compra, 0210 é a resposta. Mais adiante detalho os MTIs principais.

**Data Elements (bits de dados).** É a estrutura que carrega as informações da transação. Até 128 "bits" (na versão de 1987) ou até 192 bits (nas versões mais recentes), cada um carregando um dado específico.

Cada bit corresponde a um campo específico definido na norma:

| Bit | Campo | Exemplo |
|---|---|---|
| 2 | PAN (número do cartão) | 5642570404782927 |
| 3 | Código de processamento | 000000 (compra) |
| 4 | Valor da transação | 000000010000 (R$ 100,00) |
| 7 | Data e hora da transmissão | 0514130434 (14 de maio, 13:04:34) |
| 11 | STAN (Systems Trace Audit Number) | 051413 |
| 12 | Horário local | 130434 |
| 13 | Data local | 0514 |
| 14 | Data de expiração | 3112 (dezembro/2031) |
| 32 | Identificação da instituição aquirente | 002073 |
| 37 | Número de referência da transação | 567134101183 |
| 42 | Identificação do estabelecimento (card acceptor) | 000000000000001 |
| 48 | Dados adicionais | Varia |
| 49 | Código de moeda | 986 (BRL) |
| 52 | PIN criptografado | Criptograma |
| 55 | Dados do chip EMV | Criptograma EMV |
| 61 | Dados pessoais do usuário | Varia |
| 120 | Reservado | Varia |

A lista real tem dezenas de campos. Cada implementação escolhe quais bits usa, conforme necessidade.

Um bitmap no início da seção de dados indica quais bits estão presentes na mensagem. Se o bit 4 está ligado no bitmap, significa que o campo "valor da transação" está incluído. Se está desligado, não está. Isso permite que a mensagem transmita só o que é necessário, economizando tamanho.

## Os MTIs principais

Os Message Type Indicators (MTIs) são os quatro dígitos que definem o tipo da mensagem. Cada dígito tem significado:

Primeiro dígito: versão do protocolo (0 = ISO 8583-1987, 1 = ISO 8583-1993, 2 = ISO 8583-2003).

Segundo dígito: classe da mensagem (autorização, financeira, reversal, consulta).

Terceiro dígito: função (requisição, resposta, notificação).

Quarto dígito: origem (emissor, adquirente, outros).

Os códigos que aparecem no dia a dia de uma operação de cartão:

| Código | Significado |
|---|---|
| 0100 | Requisição de autorização |
| 0110 | Resposta de autorização |
| 0200 | Requisição de compra (financeira, com captura) |
| 0210 | Resposta de compra |
| 0400 | Requisição de cancelamento ou estorno |
| 0410 | Resposta de cancelamento ou estorno |
| 0420 | Requisição de desfazimento (reversal) |
| 0430 | Resposta de desfazimento |
| 0800 | Requisição de administração (keep alive, atualização de chaves) |
| 0810 | Resposta de administração |

Uma transação completa vai gerar pelo menos duas mensagens: a requisição e a resposta. Em casos de timeout ou de falha de comunicação, aparecem as mensagens de desfazimento (0420/0430).

## Ciclo de vida da mensagem

Vamos percorrer o fluxo de uma compra típica para deixar palpável:

1. O POS lê o cartão (chip, tarja ou contactless) e monta uma mensagem 0200 contendo PAN, valor, data/hora, identificação do estabelecimento, STAN e criptograma EMV (se for chip).

2. A mensagem é enviada para a processadora ou diretamente para a bandeira. A rota depende da topologia do arranjo. Em arranjo aberto, vai para o adquirente primeiro, que envia para a bandeira, que envia para o emissor. Em arranjo fechado, pode ir direto para a processadora do emissor.

3. A processadora ou emissor recebe a 0200, valida: cartão ativo, saldo suficiente, criptograma bate, transação não duplicada, regras de negócio atendidas, antifraude ok.

4. Monta a resposta 0210 com código de autorização (00 = aprovado) ou código de erro (por exemplo 51 = saldo insuficiente).

5. A resposta viaja pela mesma rota de volta até o POS.

6. O POS recebe a 0210, imprime o comprovante, libera a venda.

7. Em alguns casos, especialmente com chip EMV, o POS manda uma mensagem de confirmação adicional para o emissor, indicando que a transação foi de fato concluída no estabelecimento.

Se entre o passo 5 e 6 algo der errado (cabo desconecta, POS reinicia), o POS pode enviar uma 0420 (reversal) para desfazer a transação que nunca foi efetivada no estabelecimento.

Todo esse fluxo em menos de 2 segundos, em situação normal.

## TCP/IP Socket: o modo clássico

A forma tradicional de transmitir mensagens ISO 8583 é via socket TCP/IP. As duas partes (por exemplo, adquirente e emissor) mantêm conexão persistente, e as mensagens trafegam pela conexão no formato binário bits-em-campos definido pela norma.

Vantagens do modo socket:

Performance máxima. Mensagens têm overhead mínimo e são transmitidas direto.

Baixa latência. Conexão persistente evita handshakes repetidos.

Compatibilidade com sistemas legados. Bandeiras e grandes adquirentes operam assim há décadas.

Desvantagens:

Complexidade de implementação. Requer conhecimento do formato bit a bit, do bitmap, do parseamento de campos. Não é trivial para times que não têm experiência.

Debugging difícil. Mensagens são binárias, legíveis só com ferramentas específicas. Erro comum de programador é montar a mensagem errada e levar horas para identificar.

Infra mais específica. Precisa de balanceador TCP, gestão de conexões persistentes, monitoramento específico.

## HTTP com JSON ou XML: o modo moderno

Implementações mais recentes usam HTTP (geralmente HTTPS) para transmitir as mesmas informações da ISO 8583, mas estruturadas em JSON ou XML. Os campos (bits) viram atributos nomeados.

Exemplo simplificado em JSON:

```json
{
  "CODMSG": "0200",
  "BIT_02": "5642570404782927",
  "BIT_03": "000000",
  "BIT_04": "000000010000",
  "BIT_07": "0514130434",
  "BIT_11": "051413",
  "BIT_12": "130434",
  "BIT_42": "000000000000001"
}
```

A resposta vem em formato similar, com CODMSG 0210.

Vantagens do modo HTTP:

Legibilidade. JSON é texto humano-readable. Debug fica muito mais simples.

Ecossistema moderno. Toda ferramenta de API management, API gateway, monitoring, tracing fala HTTP nativamente.

Implementação mais rápida. Times de engenharia modernos já dominam HTTP/REST, não precisam aprender o formato bit a bit.

Compatível com arquiteturas serverless. Rodar em Lambda, Cloud Run ou similares fica muito mais fácil.

Desvantagens:

Overhead maior. HTTP tem headers, handshakes, campos nomeados. Uma mensagem que em binário tem 200 bytes pode ter 2 KB em JSON.

Latência ligeiramente maior. Parse de JSON é mais lento que parse de bits. Embora em 2026 a diferença seja na casa de milissegundos, ainda importa em volume grande.

Nem toda bandeira aceita. Visa e Mastercard mantêm operação core em socket. Elo aceita HTTP em alguns canais. Para emissor novo, é provável que o canal com a bandeira seja socket.

## Criptografia: ISO 9564 e 3DES

A ISO 8583 em si não define criptografia. Os dados trafegam "em claro" quanto ao formato. A criptografia de dados sensíveis é feita em camadas paralelas:

**PIN criptografado.** O PIN do usuário nunca vai em claro pela rede. É criptografado usando o padrão ISO 9564 format 0, com algoritmo 3DES (Triple DES). A chave de criptografia é negociada entre POS e emissor via processo de key exchange, usando chaves mestras que nunca saem do hardware de segurança (HSM).

**Criptograma EMV.** Gerado pelo chip no momento da transação, usando chaves internas do chip e dados da transação. Vai no bit 55 da mensagem ISO 8583. Valida que a transação de fato veio de um cartão genuíno e não foi replicada.

**PAN criptografado (opcional).** Algumas implementações modernas criptografam o próprio PAN durante o transporte, usando tokenização ou point-to-point encryption (P2PE). Reduz superfície de ataque contra vazamento.

A combinação desses mecanismos, somada à segurança de transporte (TLS no HTTP ou VPN no socket), torna o sistema resistente contra interceptação, replay e forjamento de transações.

## Por que entender ISO 8583 importa para quem monta operação de cartão

Três razões práticas:

**Integração com processadora e bandeira.** Se você vai contratar BaaS ou processadora, boa parte da documentação técnica deles fala em termos da ISO 8583. Entender o que são BIT_02, BIT_04, BIT_07 poupa dias de aprendizado no onboarding.

**Debug de problemas.** Em algum momento, vai aparecer transação que não funciona. "Código 51", "Código 05", "Resposta 14". Esses códigos vêm da ISO 8583. Saber ler os códigos de resposta acelera a resolução.

**Decisão de arquitetura.** Se sua operação vai operar via socket ou HTTP, isso afeta tecnologia, time, custo de infra. A escolha não é trivial e depende do parceiro.

Para operações em arranjo aberto, a escolha não é de quem contrata (o socket geralmente é obrigatório pelo BaaS ou bandeira). Para operações em arranjo fechado com protocolo próprio, é decisão de arquitetura do emissor, e HTTP/JSON é o caminho moderno.

## Códigos de resposta mais comuns

Para encerrar, os códigos de resposta (bit 39) que aparecem mais frequentemente na vida real:

| Código | Significado |
|---|---|
| 00 | Transação aprovada |
| 01 | Consultar emissor |
| 04 | Reter cartão (suspeita de fraude) |
| 05 | Não aprovada (motivo genérico) |
| 12 | Transação inválida |
| 13 | Valor inválido |
| 14 | Número de cartão inválido |
| 51 | Saldo ou limite insuficiente |
| 54 | Cartão vencido |
| 57 | Transação não permitida para o cartão |
| 58 | Transação não permitida no terminal |
| 61 | Excede limite diário |
| 62 | Cartão restrito |
| 65 | Excede frequência de uso |
| 75 | Limite de tentativas de PIN excedido |
| 91 | Emissor indisponível |
| 96 | Erro de sistema |

Cada um tem tratamento recomendado. Código 51 (saldo insuficiente), por exemplo, o estabelecimento pode perguntar se o cliente quer usar outro cartão. Código 04 (reter cartão) teoricamente indica que o estabelecimento deve confiscar o cartão (na prática, raramente acontece). Código 91 (emissor indisponível) aponta falha sistêmica e pode exigir contingência.

## FAQ

**O que é ISO 8583?**

ISO 8583 é o padrão internacional de mensageria transacional para cartões de pagamento, publicado em 1987 e atualizado em 1993 e 2003. Define como informações de uma transação são formatadas e transmitidas entre emissor, bandeira e adquirente.

**Por que um protocolo de 1987 ainda é usado?**

Porque foi bem projetado para o problema que resolve e porque mudar o padrão exigiria coordenar bandeiras, emissores e adquirentes do mundo todo. Os investimentos em sistemas baseados em ISO 8583 são incalculáveis, e o protocolo continua atendendo bem.

**Qual é a diferença entre 0200 e 0420?**

0200 é uma requisição de compra. 0420 é uma requisição de desfazimento (reversal), usada quando a transação foi solicitada mas não foi possível concluir no estabelecimento (por exemplo, timeout na resposta). 0420 pede ao emissor que desfaça o que foi autorizado.

**O que significa o bit 39 em ISO 8583?**

Bit 39 é o campo do código de resposta. Indica se a transação foi aprovada (00), negada por saldo (51), negada por cartão vencido (54), e assim por diante. É o principal campo para entender o que aconteceu com a transação.

**ISO 8583 usa TCP/IP ou HTTP?**

Originalmente socket TCP/IP, com mensagens binárias. Implementações modernas também aceitam HTTP com JSON ou XML, que preserva a mesma estrutura lógica de campos (bits) mas em formato texto. Depende da implementação da bandeira ou processadora.

**Qual é a diferença entre autorização e confirmação?**

Autorização é a aprovação inicial da transação (0200/0210), onde o emissor valida se o cartão tem saldo e se a transação pode ser feita. Confirmação é uma mensagem adicional enviada após a autorização, indicando que a transação de fato se concretizou no estabelecimento. Em chip EMV, essa confirmação é importante para fechar o ciclo.

**O que é STAN?**

STAN (Systems Trace Audit Number) é um identificador de 6 dígitos que aparece no bit 11 da mensagem. Serve como identificador único dentro de uma sessão entre dois sistemas, permitindo correlacionar requisições e respostas. É gerado pelo originador da transação.

**ISO 8583 criptografa os dados?**

Não em si mesmo. A ISO 8583 define a estrutura da mensagem, não a criptografia. A criptografia vem em camadas paralelas: PIN criptografado com ISO 9564 format 0 usando 3DES, criptograma EMV gerado pelo chip, e criptografia de transporte (TLS, VPN).

**Posso implementar ISO 8583 em aplicação moderna?**

Sim. Há bibliotecas open source em várias linguagens (Python, Java, Go, JavaScript) que implementam o parseamento da ISO 8583. Para operações novas, o caminho comum é usar essas bibliotecas quando a integração é com bandeira ou processadora que exige socket.

**Quando uma operação precisa implementar ISO 8583 diretamente?**

Quando é emissor direto em bandeira aberta (Visa, Mastercard, Elo), quando é adquirente, ou quando é processadora independente. Para quem opera via [BIN Sponsor](/conteudos/bin-sponsor-o-que-e) ou BaaS, o parceiro implementa a ISO 8583 no back-end e expõe APIs REST para o emissor. Então você não precisa lidar com o protocolo diretamente.

## Próximo passo

Se você está estruturando uma operação de cartão e precisa entender como se conectar tecnicamente à bandeira ou processadora, a JUST ajuda a desenhar a arquitetura e intermedia homologações técnicas com fornecedores. [Fale com a gente](/contato).
