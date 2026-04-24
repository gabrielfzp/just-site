# Algoritmo de LUHN: como funciona a validação do número do cartão
Canônica: https://wearejust.it/conteudos/algoritmo-luhn-cartao
Markdown: https://wearejust.it/conteudos/algoritmo-luhn-cartao.md
Site: JUST Fintechs
Autor: Gabriel Pires
Categoria: Tecnologia
Publicado em: 2026-04-23
Atualizado em: 2026-04-23
Tags: algoritmo luhn, validação cartão, iso 7812, tecnologia
## Resposta curta
O algoritmo de LUHN, também chamado de mod 10, é o método usado para validar números de cartões de crédito, CPF, IMEI e outros identificadores numéricos. Criado em 1954 por Hans Peter Luhn, engenheiro da IBM, foi patenteado em 1960 e padroni
# Algoritmo de LUHN: como funciona a validação do número do cartão

## Resposta direta

O algoritmo de LUHN, também chamado de mod 10, é o método usado para validar números de cartões de crédito, CPF, IMEI e outros identificadores numéricos. Criado em 1954 por Hans Peter Luhn, engenheiro da IBM, foi patenteado em 1960 e padronizado pela ISO/IEC 7812. O último dígito do número é um dígito verificador calculado a partir dos demais. Se alguém digita o número errado, o verificador não bate e o sistema rejeita antes mesmo de tentar a transação. É um algoritmo de consistência, não de segurança. Ele detecta erros de digitação, mas não impede fraude.

## O contexto que fez o algoritmo nascer

Em 1954, quando Hans Peter Luhn trabalhava na IBM, o mundo estava começando a lidar com identificadores numéricos em massa. Os primeiros cartões de crédito tinham acabado de surgir (o Diners Club é de 1950). Código de barras era futuro distante. Preencher formulários à mão era o padrão.

O problema era simples: pessoas cometem erros ao digitar números longos. Um número de 16 dígitos é difícil de escrever sem equívoco. Se esses números vão alimentar sistemas automatizados, um erro simples (trocar 6 por 9, inverter dígitos) pode virar transação errada, cobrança em conta errada, identificador em cliente errado.

Luhn desenhou um algoritmo barato computacionalmente e simples de verificar mentalmente (em teoria), que detecta os erros de digitação mais comuns: um único dígito errado, ou a inversão de dois dígitos consecutivos.

A patente foi registrada em 1960, e desde então o algoritmo está em uso ininterrupto.

## Como o algoritmo funciona

A lógica é a seguinte:

- A partir do dígito mais à direita (o último dígito do número), percorre-se o número da direita para a esquerda.
- Cada segundo dígito (o penúltimo, o antepenúltimo do antepenúltimo, e assim por diante) é multiplicado por 2.
- Se a multiplicação resulta em número de dois dígitos (por exemplo, 8 × 2 = 16), soma-se os dígitos do resultado (1 + 6 = 7). Ou, equivalente, subtrai-se 9 (16 - 9 = 7).
- Os demais dígitos (os que não foram multiplicados) ficam como estão.
- Soma-se todos os valores resultantes.
- Se a soma final é divisível por 10 (termina em 0), o número é válido pelo LUHN. Caso contrário, é inválido.

## Exemplo passo a passo

Vamos mostrar com o número fictício 4539 1488 0343 6467, um exemplo clássico de cartão Visa válido:

Percorrendo da direita para a esquerda, dobrando o segundo dígito:

| Posição (direita para esquerda) | Dígito | Operação | Resultado |
|---|---|---|---|
| 1 | 7 | manter | 7 |
| 2 | 6 | × 2 = 12, somar dígitos = 3 | 3 |
| 3 | 4 | manter | 4 |
| 4 | 6 | × 2 = 12, somar dígitos = 3 | 3 |
| 5 | 3 | manter | 3 |
| 6 | 4 | × 2 = 8 | 8 |
| 7 | 3 | manter | 3 |
| 8 | 0 | × 2 = 0 | 0 |
| 9 | 8 | manter | 8 |
| 10 | 8 | × 2 = 16, somar dígitos = 7 | 7 |
| 11 | 4 | manter | 4 |
| 12 | 1 | × 2 = 2 | 2 |
| 13 | 9 | manter | 9 |
| 14 | 3 | × 2 = 6 | 6 |
| 15 | 5 | manter | 5 |
| 16 | 4 | × 2 = 8 | 8 |

Soma: 7 + 3 + 4 + 3 + 3 + 8 + 3 + 0 + 8 + 7 + 4 + 2 + 9 + 6 + 5 + 8 = 80

80 é divisível por 10. O número é válido pelo LUHN.

Se alguém digitar esse cartão com um erro simples (por exemplo, trocar o último 7 por 8, ficando 4539 1488 0343 6468), a soma seria 81. Não é divisível por 10. O sistema rejeita a entrada antes mesmo de consultar o cartão no sistema bancário.

## Por que dobra um sim, um não

A escolha de dobrar cada segundo dígito (em vez de todos) não é arbitrária. Luhn fez essa escolha para cobrir dois tipos de erro muito comuns:

- **Erro de um único dígito.** Se você digita um número e um único dígito está errado, o algoritmo detecta. Isso porque mudar um dígito por 1 (ex: 6 por 7) muda a soma em 1 ou 2 (dependendo de estar ou não em posição de dobrar), e isso faz a soma deixar de ser divisível por 10.
- **Inversão de dois dígitos adjacentes.** Se você inverte dois dígitos consecutivos (ex: digita 61 em vez de 16), o algoritmo detecta na maioria dos casos. Se todos os dígitos fossem dobrados, a inversão não seria pega; se nenhum fosse, também não. A alternância um sim/um não faz o algoritmo ser sensível a essa classe de erro.

Há uma pequena classe de erros que o LUHN não detecta (como inverter 09 por 90, que mantém a mesma soma). Mas esses casos são raros na prática.

## Quais números usam LUHN

Vários identificadores numéricos adotam LUHN:

- **Números de cartão de crédito.** Visa, Mastercard, Elo, American Express, Discover, Diners, JCB, Maestro e todas as bandeiras que seguem ISO/IEC 7812. O último dígito do PAN é o verificador LUHN.
- **IMEI (International Mobile Equipment Identity).** Todo celular tem um IMEI único. O último dígito é verificador LUHN.
- **CPF brasileiro.** O CPF brasileiro usa um algoritmo similar (mas com variações que o distinguem do LUHN puro). A lógica de verificador no final é a mesma.
- **CNPJ brasileiro.** Também usa verificador similar.
- Outros identificadores também usam lógica parecida: número de conta corrente em alguns bancos, números de prontuário médico, identificadores de produto.

Sempre que você vê um identificador numérico com dígito verificador no final, há boa chance de ser LUHN ou variação próxima.

## Implementação em pseudocódigo

Para quem está implementando validação em aplicação:

```
função validar_luhn(numero):
    soma = 0
    dobrar = falso
    para cada digito do número, da direita para a esquerda:
        se dobrar:
            dobrado = digito * 2
            se dobrado > 9:
                dobrado = dobrado - 9
            soma = soma + dobrado
        senão:
            soma = soma + digito
        dobrar = não dobrar
    retornar (soma módulo 10) == 0
```

Implementações em bibliotecas de todas as linguagens modernas (Python, Java, JavaScript, Go, Rust) estão disponíveis. Raramente é necessário reimplementar do zero.

## O que o LUHN não faz

Aqui é onde muita gente confunde. LUHN é algoritmo de consistência, não de segurança.

**LUHN não impede fraude.** Se alguém conhece um número válido de cartão, consegue usar. LUHN só valida que o número está consistente consigo mesmo, não que o cartão é do portador legítimo.

**LUHN não criptografa nada.** O número não é protegido pelo LUHN. Os dados do cartão continuam precisando ser criptografados em trânsito e em repouso, conforme padrões como PCI DSS.

**LUHN não garante que o cartão existe.** Um número pode passar pelo LUHN e não ser de um cartão emitido. O sistema precisa consultar o emissor para saber se o cartão existe e está ativo.

**LUHN não garante saldo.** Validação do LUHN é o primeiro passo. Depois o sistema precisa fazer autorização junto ao emissor para saber se tem saldo para a compra.

A confusão mais comum é achar que, se o LUHN passa, o cartão é válido e seguro. Não é. LUHN é só o pré-filtro: rejeita números malformados antes de gastar recursos consultando sistemas externos.

## Por que o LUHN ainda é usado em 2026

Três razões:

- **Simplicidade computacional.** Validação do LUHN demora microssegundos. Mesmo em cenários de altíssimo volume, não é gargalo.
- **Poder de detecção alto para os erros mais comuns.** Um dígito errado, dois dígitos invertidos. Esses dois casos cobrem a grande maioria dos erros humanos de digitação.
- **Inércia institucional e compatibilidade global.** Todos os sistemas do mundo estão preparados para LUHN. Mudar para outro algoritmo exigiria coordenar emissor, bandeira, adquirente, processadora. Custo astronômico, benefício marginal.

Então mesmo passado 70 anos, o algoritmo continua sendo usado exatamente como em 1960.

## A ISO/IEC 7812 e a padronização

A norma que padroniza globalmente o uso do LUHN em cartões é a ISO/IEC 7812 (a mesma que define [BIN e IIN](/conteudos/como-solicitar-bin-iin-abnt)). A norma define:

- Comprimento total do número do cartão (de 8 a 19 dígitos).
- Estrutura em três partes: IIN, identificador único do cartão, dígito verificador.
- Uso do algoritmo de LUHN para o dígito verificador.
- Procedimentos de registro e gestão de IINs.

A ISO/IEC 7812 é o alicerce de como cartões funcionam mundialmente.

## Casos de uso prático do LUHN em aplicação

Para quem desenvolve software que lida com cartões, LUHN aparece em:

- **Validação de formulário no frontend.** Antes de enviar ao backend, o form valida que o número preenchido passa no LUHN. Erro de digitação é capturado imediatamente, sem chamada HTTP.
- **Validação no backend antes de chamada externa.** Mesmo que o frontend valide, o backend deve validar de novo antes de fazer requisição à processadora ou BaaS. Evita chamadas desnecessárias e reduz logs de erro.
- **Geração de números de cartão para testes.** Em ambiente de desenvolvimento, times usam geradores que criam PANs válidos por LUHN para testar fluxos. Esses números não correspondem a cartões reais mas passam na validação local.
- **Análise de fraude.** Um padrão de tentativas com muitos números que falham no LUHN indica script automatizado tentando números aleatórios. Monitoramento dessa taxa ajuda a detectar ataques.

## FAQ

**O que é o algoritmo de LUHN?**

É o método usado para validar números de cartões de crédito, IMEI, CPF e outros identificadores numéricos. O último dígito é um verificador calculado a partir dos demais. Se o cálculo bate, o número é consistente.

**Quem criou o algoritmo de LUHN?**

Hans Peter Luhn, engenheiro da IBM, criou o algoritmo em 1954. Foi patenteado em 1960 (patente US 2,950,048). Está em domínio público desde o vencimento da patente.

**LUHN garante que um cartão é seguro?**

Não. LUHN valida consistência, não segurança. Um número pode passar no LUHN e ser inválido, ser de cartão cancelado, ser fraudado. É só o primeiro filtro.

**Qual é a diferença entre LUHN e mod 10?**

É o mesmo algoritmo. "Mod 10" é o nome técnico (módulo 10, porque a verificação final é se a soma é divisível por 10). "LUHN" é o nome que homenageia o criador. Em inglês, costuma ser escrito como "Luhn algorithm" ou "modulus 10 algorithm".

**CPF usa LUHN?**

CPF usa algoritmo similar (com verificador no final) mas não é LUHN puro. O algoritmo do CPF tem suas próprias regras de cálculo e dois dígitos verificadores em vez de um. A lógica é similar, a implementação é diferente.

**Posso gerar um cartão válido usando LUHN?**

Você pode gerar um número que passa na validação LUHN. Não vai ser um cartão real. Em ambientes de teste, é útil gerar números válidos por LUHN para testar fluxos sem usar cartões reais. Para fazer transação real, precisa de cartão emitido por instituição autorizada.

**LUHN funciona com cartões de débito?**

Sim. Cartões de débito seguem o mesmo padrão ISO/IEC 7812 que cartões de crédito. O PAN de 16 dígitos tem dígito verificador LUHN no final, independentemente de ser crédito, débito ou pré-pago.

**Posso implementar LUHN em qualquer linguagem?**

Sim, o algoritmo é trivial de implementar. Bibliotecas prontas existem em Python (creditcard), JavaScript (luhn), Java (Apache Commons Validator), Go (luhn), Rust (luhn). Raramente você precisa reimplementar.

**LUHN detecta todos os erros de digitação?**

Detecta a grande maioria: um único dígito trocado, inversão de dois dígitos consecutivos. Não detecta alguns casos raros como inversão de "09" com "90" (ambos têm a mesma soma após o cálculo). Para esses casos, outros mecanismos (consulta à bandeira) entram.

**O último dígito do cartão é sempre verificador LUHN?**

Em cartões que seguem ISO/IEC 7812, sim. Isso inclui praticamente todas as bandeiras globais relevantes. Alguns cartões proprietários internos (cartões de programa fechado não homologado internacionalmente) podem ter outra lógica, mas é exceção.

## Próximo passo

Se você está construindo aplicação que lida com cartões e precisa validar números corretamente, o LUHN é a primeira linha de defesa. Combinar LUHN com validações adicionais (formato do número por bandeira, comprimento correto, BIN registrado) garante que os números inválidos são rejeitados antes de gastar recurso em chamadas externas. Para arquiteturas de pagamento mais completas, [fale com a JUST](/contato).
