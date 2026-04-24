# Ciclo de vida de uma transação de cartão: da autorização ao desfazimento
Canônica: https://wearejust.it/conteudos/ciclo-de-vida-transacao-cartao
Markdown: https://wearejust.it/conteudos/ciclo-de-vida-transacao-cartao.md
Site: JUST Fintechs
Autor: Gabriel Pires
Categoria: Tecnologia
Publicado em: 2026-04-23
Atualizado em: 2026-04-23
Tags: transação de cartão, autorização, desfazimento, chargeback, processamento
## Resposta curta
Toda transação de cartão percorre um ciclo com cinco etapas principais: pré-autori
# Ciclo de vida de uma transação de cartão: da autorização ao desfazimento

## Resposta direta

Toda transação de cartão percorre um ciclo com cinco etapas principais: pré-autorização (opcional), autorização, confirmação, desfazimento (se necessário) e arquivo de conciliação transacional diário. Cada etapa tem sua mensagem específica, suas validações e seu papel no fluxo. Entender o ciclo é a diferença entre quem apenas usa a infraestrutura de cartões e quem consegue depurar problemas, otimizar fluxos e garantir que as transações da operação cheguem corretamente ao estabelecimento.

## Por que o ciclo existe

Uma transação de cartão parece simples do lado do usuário: passa o cartão, aprova, pronto. Do lado do emissor, não é bem assim.

Entre o momento em que o usuário apresenta o cartão e o estabelecimento recebe o dinheiro, passam potencialmente semanas. Durante esse tempo, o sistema precisa lidar com:

- Falhas de comunicação entre POS e emissor.
- Cancelamentos e estornos solicitados pelo estabelecimento.
- Revisões de transações suspeitas.
- Conciliação entre o que foi autorizado e o que foi efetivamente capturado.
- Contestações do usuário (chargeback).

Se todo esse trabalho acontecesse em uma única mensagem "compra aprovada", o sistema seria frágil. Qualquer erro depois da aprovação deixaria dinheiro solto em lugar nenhum.

Por isso as bandeiras desenharam o ciclo em múltiplas etapas. Cada uma cumpre uma função específica e permite recuperação de erros sem perda de informação.

## Etapa 1: Pré-autorização (opcional)

A pré-autorização é uma etapa opcional que valida a operação antes de confirmar a venda. Ela bloqueia um valor no saldo ou limite do cartão sem ainda consumir o dinheiro.

Cenários clássicos de pré-autorização:

- **Check-in em hotel.** O hotel pré-autoriza um valor estimado (diárias mais extras) no momento do check-in. O dinheiro fica bloqueado. Se o hóspede não usa o valor todo, o hotel libera o restante no checkout. Se usa mais, captura o valor total.
- **Aluguel de carro.** Similar ao hotel. Pré-autoriza um valor de garantia, libera o que não foi usado.
- **Combustível em bomba automática.** Alguns postos pré-autorizam um valor máximo antes de liberar a bomba. Se o tanque não enche o valor todo, libera o restante.

Pré-autorização valida:

- Se o cartão está ativo.
- Se tem saldo ou limite disponível.
- Se o bloqueio do valor pré-autorizado é possível.

A mensagem é uma requisição de autorização específica (tipicamente MTI 0100 na ISO 8583, diferente da 0200 de compra). O emissor responde com 0110 de aprovação ou negativa.

A pré-autorização tem um prazo de validade (geralmente 5 a 30 dias). Se não for capturada dentro do prazo, o valor é liberado automaticamente. Esse prazo é definido pela bandeira e pelo tipo de programa.

## Etapa 2: Autorização

A autorização é a etapa mais conhecida. É quando o usuário passa o cartão e o sistema decide se aprova ou não.

A mensagem 0200 é enviada do POS para o emissor (via adquirente e bandeira em arranjo aberto, ou direto em arranjo fechado). O emissor valida vários itens:

- **Integridade do usuário.** O usuário pode usar esse cartão? O cartão está ativo, não está bloqueado, não foi reportado como perdido ou roubado?
- **Integridade do cartão.** O cartão usado na compra é genuíno? O criptograma EMV bate? O CVV (CVV1 para presencial, CVV2 para e-commerce) foi informado corretamente? PIN digitado corretamente?
- **Verificação do criptograma EMV.** Em compras com chip ou contactless, o POS envia um criptograma com os dados da transação criptografados. Esse criptograma é validado pela processadora do emissor (ou pelo EMV as a Service contratado). Se não bate, a transação é negada.
- **Saldo ou limite disponível.** Há saldo para débito ou limite para crédito que cubra o valor da compra?
- **Regras de negócio adicionais.** Por exemplo, em cartão de combustível, o valor por transação está dentro do permitido por motorista? A categoria do estabelecimento é elegível? Para cartão benefício, o MCC (Merchant Category Code) do estabelecimento está na lista de aceites?
- **Verificação de duplicidade.** A mesma transação não está sendo enviada duas vezes por erro?
- **Antifraude.** O padrão de uso bate com o perfil do usuário? Transação em outra cidade logo depois de uma no bairro usual levanta flag. Valor muito alto para o perfil também. Transação fora do horário de uso típico também. Operações mais sofisticadas aplicam machine learning em tempo real.

Se todas as validações passam, o emissor responde 0210 com código 00 (aprovado) e um código de autorização (o famoso número que aparece no comprovante). Se alguma falha, responde 0210 com código de recusa (51 para saldo insuficiente, 54 para cartão vencido, etc).

A partir dessa aprovação, a transação fica em status pendente. Ela não está totalmente concluída ainda. Falta a etapa 3.

## Etapa 3: Confirmação

Depois que o emissor aprovou e o POS recebeu a resposta, o POS precisa confirmar ao emissor que a transação foi realmente concretizada no estabelecimento. Essa confirmação fecha o ciclo.

A lógica é a seguinte. Imagine que o POS recebe a aprovação mas, antes de imprimir o comprovante, a energia do estabelecimento cai. A venda não se completou. O emissor está com o valor bloqueado no cartão do usuário (aprovou a transação), mas o estabelecimento não faturou.

Se o POS, ao voltar à energia, simplesmente ignora o que aconteceu, o dinheiro fica bloqueado no cartão do usuário indefinidamente. Ruim.

Por isso, o POS deve enviar uma mensagem de confirmação (MTI específico, geralmente via 0220 ou variante) indicando que aquela transação foi efetivamente capturada. Se essa mensagem chega, o emissor finaliza o lançamento. Se não chega no prazo, o emissor assume que a transação foi abortada e libera o valor.

Em chip EMV, a confirmação também serve para enviar o criptograma de resposta final (ARPC) do emissor de volta ao chip, fechando o ciclo de segurança.

## Etapa 4: Desfazimento (reversal)

O desfazimento acontece quando a autorização foi enviada mas a resposta não chegou ao POS. Isso pode acontecer por:

- Falha de comunicação entre POS e emissor durante a resposta.
- Timeout no POS antes de a resposta chegar.
- Erro de software que aborta o processo no meio.

Quando isso acontece, o POS não sabe se a transação foi aprovada ou não. Pode ser que o emissor aprovou e o dinheiro está bloqueado. Pode ser que nem chegou. O POS precisa assumir cenário de incerteza.

A forma de lidar é enviar uma mensagem de desfazimento (MTI 0420 na ISO 8583). Essa mensagem diz ao emissor: "se você aprovou a transação tal, desfaça". O emissor procura a transação no histórico. Se encontrou e estava aprovada, desfaz. Se não encontrou, simplesmente responde 0430 informando que não havia nada a desfazer.

O desfazimento é um recurso de segurança contra estado inconsistente. Sem ele, falhas de comunicação gerariam valores bloqueados fantasma.

## Etapa 5: Arquivo de conciliação transacional diário

Ao final de cada dia operacional, a entidade responsável pelo meio de captura (adquirente, POS, TEF) envia ao emissor um arquivo listando todas as transações capturadas naquele dia. Esse arquivo serve para:

- **Conferir que o que foi autorizado está sendo capturado.** Transações aprovadas que não aparecem no arquivo de conciliação podem ter sido abortadas. O emissor libera o valor bloqueado.
- **Confirmar transações pendentes.** Transações aprovadas mas sem confirmação podem ser confirmadas via arquivo.
- **Base para liquidação financeira.** É com base nesse arquivo que o emissor sabe quanto pagar ao estabelecimento no ciclo de liquidação.

Esse arquivo é a fonte da verdade contábil. Discrepâncias entre o que o POS registrou e o que o emissor autorizou aparecem aqui. Operações maduras têm processo automatizado de reconciliação que lê o arquivo, cruza com transações autorizadas, e gera alertas para discrepâncias.

Em arranjo fechado, quem gera esse arquivo é a própria operação (já que controla os dois lados). Em arranjo aberto, o arquivo vem do adquirente ou TEF.

## Outros eventos do ciclo

Além das 5 etapas principais, algumas mensagens pontuais podem acontecer:

- **Estorno ou cancelamento (MTI 0400/0410).** Enviado pelo próprio estabelecimento quando cancela uma venda (erro de caixa, devolução do cliente). O valor é liberado no cartão do usuário e o emissor ajusta a liquidação.
- **Consulta de saldo.** Alguns tipos de cartão (pré-pago, voucher) permitem que o usuário consulte saldo no POS ou caixa eletrônico. É uma mensagem separada, com validação sem movimentação.
- **Chargeback.** Quando o usuário contesta a transação ao emissor (diz que não reconhece, diz que é fraude, diz que mercadoria não chegou), o emissor pode abrir um chargeback. Essa disputa é arbitrada pela bandeira entre o emissor e o adquirente, seguindo regras específicas. O chargeback pode durar de 45 a 120 dias para ser resolvido.
- **Fees, taxas, ajustes.** Ajustes pontuais (por exemplo, correção de valor, aplicação de tarifa) também seguem mensagens específicas.

## Status possíveis de uma transação

Juntando tudo, uma transação pode estar em vários estados:

| Status | Descrição | Ação possível |
|---|---|---|
| Pendente de autorização | Mensagem enviada mas sem resposta | Aguardar resposta ou timeout |
| Aprovada pendente de confirmação | Autorizada mas sem confirmação | Aguardar confirmação ou desfazer |
| Aprovada confirmada | Ciclo completo | Aguardar liquidação |
| Negada | Emissor recusou | Nenhuma (oferecer outro meio) |
| Desfeita | Reversal enviado | Liberar valor bloqueado |
| Estornada | Estorno enviado pelo estabelecimento | Liberar valor ao usuário |
| Em chargeback | Contestada pelo usuário | Disputa entre partes |
| Liquidada | Dinheiro pago ao estabelecimento | Ciclo encerrado |

Operações maduras monitoram a distribuição desses status em tempo real. Muitas transações em status "pendente de confirmação" indicam problema no meio de captura. Muitos chargebacks indicam problema de fraude ou de experiência com o estabelecimento.

## O que dá errado no mundo real

Alguns erros clássicos que toda operação de cartão enfrenta em algum momento:

- **Autorização sem captura.** Transação é aprovada, usuário vê o valor bloqueado no cartão, mas o estabelecimento não recebe porque o POS não confirmou corretamente. A resolução passa por identificar a transação no arquivo de conciliação e processar manualmente.
- **Captura sem autorização.** Menos comum, mas pode acontecer em offline mode. O POS capturou uma venda sem autorização prévia. O emissor pode negar a captura no ciclo seguinte, e o estabelecimento fica sem receber.
- **Estorno duplicado.** O estabelecimento cancela uma venda duas vezes por engano. Usuário recebe o valor de volta duas vezes. Ajuste manual necessário.
- **Chargeback fraudulento.** Usuário contesta uma compra legítima alegando que não reconhece. Emissor precisa comprovar a legitimidade para o adquirente. Se não comprovar, perde o chargeback e o estabelecimento perde a venda.
- **Timeout sistêmico.** Quando muitas transações passam por timeout, indica problema na infra. Pode ser lentidão na processadora, problema na rede da bandeira, ou falha no próprio POS. Investigação cruzada necessária.

## Como monitorar a saúde do ciclo

Para quem opera cartão, acompanhar métricas do ciclo é crítico:

- **Taxa de aprovação.** Percentual de 0200 aprovadas sobre o total de requisições. Abaixo de 90% indica problema (falsos positivos no antifraude, regras de negócio mal configuradas, problemas de saldo).
- **Tempo médio de autorização.** Tempo entre 0200 e 0210. Acima de 2 segundos indica lentidão; acima de 5 segundos indica problema crítico.
- **Taxa de desfazimento.** Percentual de 0420 sobre total de autorizações. Acima de 2% indica problemas de infraestrutura ou de POS.
- **Taxa de chargeback.** Transações contestadas em relação ao volume. Acima de 1% indica problema de fraude ou qualidade de serviço; acima de 3% pode levar a sanções da bandeira.
- **Diferença entre autorizado e capturado.** Valor autorizado no dia vs valor que aparece no arquivo de conciliação. Diferenças consistentes indicam bug em alguma ponta.

## FAQ

**O que é autorização de cartão?**

Autorização é a etapa em que o emissor valida se uma transação pode ser aprovada. Valida integridade do cartão e do usuário, saldo disponível, criptograma EMV, regras de negócio e antifraude. A resposta vem em segundos.

**Qual é a diferença entre autorização e confirmação?**

Autorização é a aprovação inicial (ou negativa) do emissor. Confirmação é a mensagem enviada depois pelo POS indicando que a transação foi efetivamente concluída no estabelecimento. Sem confirmação, o emissor pode eventualmente liberar o valor bloqueado.

**O que é desfazimento em cartão?**

Desfazimento (reversal) é a mensagem enviada quando o POS não recebeu resposta da autorização. Serve para pedir ao emissor que desfaça a transação, se ela foi aprovada mas não se concretizou no estabelecimento.

**O que é pré-autorização?**

Pré-autorização é uma etapa opcional que bloqueia um valor no cartão sem consumi-lo. Usada em hotéis, aluguel de carros e combustível. O valor é capturado ou liberado depois, conforme o uso real.

**O que é NSU?**

NSU (Número de Documento Único) é o identificador único de uma transação junto à bandeira. Aparece no comprovante e serve para referência em consultas, ajustes e disputas. Diferente do código de autorização, que é gerado pelo emissor.

**O que acontece quando minha transação não é confirmada?**

O valor bloqueado no cartão fica pendente por um tempo (tipicamente 7 a 30 dias). Se o emissor não recebe confirmação nem mensagem de desfazimento, eventualmente libera o valor. O estabelecimento não recebe pela venda.

**Chargeback faz parte do ciclo de vida?**

Chargeback é um evento excepcional dentro do ciclo. Pode acontecer até 120 dias depois da transação, se o usuário contesta junto ao emissor. Se o chargeback é perdido, o estabelecimento fica sem o valor.

**O que é arquivo de conciliação transacional?**

É o arquivo enviado ao final de cada dia com todas as transações capturadas pelo meio de captura. Serve como fonte da verdade para liquidação financeira e para reconciliar autorizações com capturas efetivas.

**Como o ciclo é diferente em arranjo fechado?**

Em [arranjo fechado](/conteudos/arranjo-aberto-vs-arranjo-fechado), toda a cadeia (emissor, captura, processamento) está sob a mesma operação. O ciclo tem as mesmas etapas, mas com menos atores. Mensagens podem ser internalizadas sem passar por bandeira ou adquirente externo.

**Onde posso aprender mais sobre o ciclo?**

O padrão [ISO 8583](/conteudos/iso-8583-protocolo-cartoes) define formalmente os tipos de mensagem e os fluxos. As bandeiras publicam documentação técnica para emissores homologados. BaaS e processadoras também têm documentação detalhada do ciclo para seus clientes.

## Próximo passo

Se você está montando operação de cartão e precisa garantir que o ciclo de vida das transações está bem implementado, a JUST ajuda a desenhar os fluxos e monitorar métricas críticas. [Fale com a gente](/contato).
