export const ARTICLE_MANIFEST = [
  {
    "slug": "algoritmo-luhn-cartao",
    "file": "algoritmo-luhn-cartao.md",
    "title": "Algoritmo de LUHN: como funciona a validação do número do cartão",
    "seoTitle": "",
    "description": "O algoritmo de LUHN, criado em 1954 pela IBM, é o método que valida se o número de um cartão é consistente. Funciona em cartões de crédito, CPF, IMEI. Entenda o cálculo passo a passo, a ISO/IEC 7812 e por que o algoritmo é de consistência, não de segurança.",
    "categorySlug": "tecnologia",
    "cluster": "tecnologia-pagamentos",
    "type": "satellite",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-23",
    "updatedAt": "2026-04-23",
    "readingTime": 9,
    "answer": "O algoritmo de LUHN, também chamado de mod 10, é o método usado para validar números de cartões de crédito, CPF, IMEI e outros identificadores numéricos. Criado em 1954 por Hans Peter Luhn, engenheiro da IBM, foi patenteado em 1960 e padroni",
    "tags": [
      "algoritmo luhn",
      "validação cartão",
      "iso 7812",
      "tecnologia"
    ],
    "faqs": [
      {
        "q": "O que é o algoritmo de LUHN?",
        "a": "É o método usado para validar números de cartões de crédito, IMEI, CPF e outros identificadores numéricos. O último dígito é um verificador calculado a partir dos demais. Se o cálculo bate, o número é consistente."
      },
      {
        "q": "Quem criou o algoritmo de LUHN?",
        "a": "Hans Peter Luhn, engenheiro da IBM, criou o algoritmo em 1954. Foi patenteado em 1960 (patente US 2,950,048). Está em domínio público desde o vencimento da patente."
      },
      {
        "q": "LUHN garante que um cartão é seguro?",
        "a": "Não. LUHN valida consistência, não segurança. Um número pode passar no LUHN e ser inválido, ser de cartão cancelado, ser fraudado. É só o primeiro filtro."
      },
      {
        "q": "Qual é a diferença entre LUHN e mod 10?",
        "a": "É o mesmo algoritmo. \"Mod 10\" é o nome técnico (módulo 10, porque a verificação final é se a soma é divisível por 10). \"LUHN\" é o nome que homenageia o criador. Em inglês, costuma ser escrito como \"Luhn algorithm\" ou \"modulus 10 algorithm\"."
      }
    ],
    "sources": [],
    "howTo": null,
    "toc": [
      {
        "id": "resposta-direta",
        "title": "Resposta direta"
      },
      {
        "id": "o-contexto-que-fez-o-algoritmo-nascer",
        "title": "O contexto que fez o algoritmo nascer"
      },
      {
        "id": "como-o-algoritmo-funciona",
        "title": "Como o algoritmo funciona"
      },
      {
        "id": "exemplo-passo-a-passo",
        "title": "Exemplo passo a passo"
      },
      {
        "id": "por-que-dobra-um-sim-um-não",
        "title": "Por que dobra um sim, um não"
      },
      {
        "id": "quais-números-usam-luhn",
        "title": "Quais números usam LUHN"
      },
      {
        "id": "implementação-em-pseudocódigo",
        "title": "Implementação em pseudocódigo"
      },
      {
        "id": "o-que-o-luhn-não-faz",
        "title": "O que o LUHN não faz"
      },
      {
        "id": "por-que-o-luhn-ainda-é-usado-em-2026",
        "title": "Por que o LUHN ainda é usado em 2026"
      },
      {
        "id": "a-iso-iec-7812-e-a-padronização",
        "title": "A ISO/IEC 7812 e a padronização"
      },
      {
        "id": "casos-de-uso-prático-do-luhn-em-aplicação",
        "title": "Casos de uso prático do LUHN em aplicação"
      },
      {
        "id": "faq",
        "title": "FAQ"
      },
      {
        "id": "próximo-passo",
        "title": "Próximo passo"
      }
    ],
    "featured": false,
    "ogImage": "/og/algoritmo-luhn-cartao.png"
  },
  {
    "slug": "anatomia-do-cartao",
    "file": "anatomia-do-cartao.md",
    "title": "Anatomia do cartão: o que são PAN, BIN, CVV, chip EMV e trilha magnética",
    "seoTitle": "",
    "description": "O cartão físico tem vários componentes técnicos: PAN, BIN, CVV, chip EMV, trilha magnética, NFC e data de expiração. Entenda o que cada um faz, por que existe e como conversam entre si.",
    "categorySlug": "cartoes",
    "cluster": "emissao-cartao",
    "type": "satellite",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-23",
    "updatedAt": "2026-04-23",
    "readingTime": 12,
    "answer": "Um cartão de pagamento físico é composto por vários elementos técnicos, cada um com função específica. O PAN (Primary Account Number) é o número de 16 dígitos que identifica o cartão. Os primeiros 6 ou 8 dígitos são o BIN (Bank Identification Number), que identificam o emissor. O CVV é o código de segurança, e existe em versões diferentes (CVV1 na trilha magnética, CVV2 impresso no verso, CVV3 dinâmico em alguns cartões). O chip EMV é o circuito integrado que arma",
    "tags": [
      "cartão",
      "pan",
      "cvv",
      "chip emv",
      "trilha magnética",
      "nfc"
    ],
    "faqs": [
      {
        "q": "O que é PAN em cartão?",
        "a": "PAN (Primary Account Number) é o número principal do cartão, aquele de 16 dígitos impresso na frente. Identifica unicamente cada cartão no sistema de pagamentos."
      },
      {
        "q": "Qual é a diferença entre CVV1 e CVV2?",
        "a": "CVV1 é o código gravado na trilha magnética, usado em transações presenciais. Nunca é visível ao portador. CVV2 é o código de 3 dígitos impresso no verso (ou 4 dígitos na frente, em cartões Amex), usado em transações não presentes (e-commerce). Tem funções diferentes e atende ataques diferentes."
      }
    ],
    "sources": [],
    "howTo": null,
    "toc": [
      {
        "id": "resposta-direta",
        "title": "Resposta direta"
      },
      {
        "id": "por-que-vale-entender-a-anatomia-do-cartão",
        "title": "Por que vale entender a anatomia do cartão"
      },
      {
        "id": "o-pan-o-número-principal",
        "title": "O PAN: o número principal"
      },
      {
        "id": "bin-quem-emitiu-o-cartão",
        "title": "BIN: quem emitiu o cartão"
      },
      {
        "id": "cvv-o-código-de-segurança",
        "title": "CVV: o código de segurança"
      },
      {
        "id": "chip-emv-o-circuito-integrado",
        "title": "Chip EMV: o circuito integrado"
      },
      {
        "id": "trilha-magnética-o-legado-que-ainda-persiste",
        "title": "Trilha magnética: o legado que ainda persiste"
      },
      {
        "id": "nfc-e-contactless",
        "title": "NFC e contactless"
      },
      {
        "id": "data-de-expiração",
        "title": "Data de expiração"
      },
      {
        "id": "nome-do-portador",
        "title": "Nome do portador"
      },
      {
        "id": "outros-elementos-do-cartão-físico",
        "title": "Outros elementos do cartão físico"
      },
      {
        "id": "quanto-custa-cada-elemento-na-produção",
        "title": "Quanto custa cada elemento na produção"
      },
      {
        "id": "faq",
        "title": "FAQ"
      },
      {
        "id": "próximo-passo",
        "title": "Próximo passo"
      }
    ],
    "featured": false,
    "ogImage": "/og/anatomia-do-cartao.png"
  },
  {
    "slug": "arranjo-aberto-vs-arranjo-fechado",
    "file": "arranjo-aberto-vs-arranjo-fechado.md",
    "title": "Arranjo aberto vs arranjo fechado: qual modelo de cartão faz sentido para sua operação",
    "seoTitle": "",
    "description": "Arranjo aberto e arranjo fechado são os dois modelos que o BACEN reconhece para operações de cartão. Entenda as diferenças, a matemática de cada um e como escolher o que faz sentido para sua empresa.",
    "categorySlug": "cartoes",
    "cluster": "arranjo-aberto",
    "type": "satellite",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-23",
    "updatedAt": "2026-04-23",
    "readingTime": 12,
    "answer": "Arranjo aberto é o modelo em que múltiplos emissores, bandeiras e adquirentes participam de um mesmo ecossistema padroni",
    "tags": [
      "arranjo aberto",
      "arranjo fechado",
      "private label",
      "cartão bandeirado",
      "emissão de cartão"
    ],
    "faqs": [
      {
        "q": "Qual é o melhor: arranjo aberto ou arranjo fechado?",
        "a": "Não existe \"melhor\" em absoluto. Arranjo aberto é melhor para operações com visão de escala e aceitação ampla. Arranjo fechado é melhor para operações com caso de uso específico, margem alta por transação e necessidade de controle."
      }
    ],
    "sources": [],
    "howTo": null,
    "toc": [
      {
        "id": "resposta-direta",
        "title": "Resposta direta"
      },
      {
        "id": "a-diferença-na-essência",
        "title": "A diferença na essência"
      },
      {
        "id": "comparativo-prático",
        "title": "Comparativo prático"
      },
      {
        "id": "quando-faz-sentido-o-arranjo-aberto",
        "title": "Quando faz sentido o arranjo aberto"
      },
      {
        "id": "quando-faz-sentido-o-arranjo-fechado",
        "title": "Quando faz sentido o arranjo fechado"
      },
      {
        "id": "a-matemática-dos-dois-modelos",
        "title": "A matemática dos dois modelos"
      },
      {
        "id": "a-matemática-do-breakeven",
        "title": "A matemática do breakeven"
      },
      {
        "id": "exige-credenciamento-compliance",
        "title": "Exige credenciamento? Compliance?"
      },
      {
        "id": "híbridos-são-normais",
        "title": "Híbridos são normais"
      },
      {
        "id": "framework-de-decisão",
        "title": "Framework de decisão"
      },
      {
        "id": "faq",
        "title": "FAQ"
      },
      {
        "id": "próximo-passo",
        "title": "Próximo passo"
      }
    ],
    "featured": false,
    "ogImage": "/og/arranjo-aberto-vs-arranjo-fechado.png"
  },
  {
    "slug": "bin-sponsor-o-que-e",
    "file": "bin-sponsor-o-que-e.md",
    "title": "BIN Sponsor: o que é e como viabilizar sua emissão de cartão sem licença própria",
    "seoTitle": "",
    "description": "BIN Sponsor é o modelo que permite emitir cartão no Brasil sem ter licença do BACEN nem contrato direto com a bandeira. Entenda como funciona, quando faz sentido e o que precisa olhar antes de assinar.",
    "categorySlug": "cartoes",
    "cluster": "arranjo-aberto",
    "type": "satellite",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-23",
    "updatedAt": "2026-04-23",
    "readingTime": 11,
    "answer": "BIN Sponsor é o serviço em que uma instituição financeira autori",
    "tags": [
      "bin sponsor",
      "banking as a service",
      "emissão de cartão",
      "arranjo aberto",
      "licença bacen"
    ],
    "faqs": [
      {
        "q": "O que significa BIN no cartão?",
        "a": "BIN é Bank Identification Number, os seis (ou oito) primeiros dígitos do número do cartão. Identifica o emissor e é usado pela bandeira para rotear transações até quem emitiu aquele cartão."
      }
    ],
    "sources": [],
    "howTo": null,
    "toc": [
      {
        "id": "resposta-direta",
        "title": "Resposta direta"
      },
      {
        "id": "o-que-é-bin-e-por-que-ele-importa",
        "title": "O que é BIN e por que ele importa"
      },
      {
        "id": "o-que-é-bin-sponsor",
        "title": "O que é BIN Sponsor"
      },
      {
        "id": "quem-oferece-bin-sponsor-no-brasil",
        "title": "Quem oferece BIN Sponsor no Brasil"
      },
      {
        "id": "o-que-está-incluído-e-o-que-não-está",
        "title": "O que está incluído (e o que não está)"
      },
      {
        "id": "quanto-custa-um-bin-sponsor",
        "title": "Quanto custa um BIN Sponsor"
      },
      {
        "id": "sponsor-vs-emissão-direta-quando-migrar",
        "title": "Sponsor vs emissão direta: quando migrar"
      },
      {
        "id": "o-que-olhar-antes-de-assinar-com-um-sponsor",
        "title": "O que olhar antes de assinar com um sponsor"
      },
      {
        "id": "limites-do-modelo",
        "title": "Limites do modelo"
      },
      {
        "id": "faq",
        "title": "FAQ"
      },
      {
        "id": "próximo-passo",
        "title": "Próximo passo"
      }
    ],
    "featured": false,
    "ogImage": "/og/bin-sponsor-o-que-e.png"
  },
  {
    "slug": "ciclo-de-vida-transacao-cartao",
    "file": "ciclo-de-vida-transacao-cartao.md",
    "title": "Ciclo de vida de uma transação de cartão: da autorização ao desfazimento",
    "seoTitle": "",
    "description": "Toda transação de cartão segue um ciclo: pré-autorização, autorização, confirmação, desfazimento e arquivo de conciliação. Entenda cada etapa, as validações que acontecem em cada uma e por que entender esse fluxo é crítico para quem opera cartões.",
    "categorySlug": "tecnologia",
    "cluster": "tecnologia-pagamentos",
    "type": "satellite",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-23",
    "updatedAt": "2026-04-23",
    "readingTime": 11,
    "answer": "Toda transação de cartão percorre um ciclo com cinco etapas principais: pré-autori",
    "tags": [
      "transação de cartão",
      "autorização",
      "desfazimento",
      "chargeback",
      "processamento"
    ],
    "faqs": [],
    "sources": [],
    "howTo": null,
    "toc": [
      {
        "id": "resposta-direta",
        "title": "Resposta direta"
      },
      {
        "id": "por-que-o-ciclo-existe",
        "title": "Por que o ciclo existe"
      },
      {
        "id": "etapa-1-pré-autorização-opcional",
        "title": "Etapa 1: Pré-autorização (opcional)"
      },
      {
        "id": "etapa-2-autorização",
        "title": "Etapa 2: Autorização"
      },
      {
        "id": "etapa-3-confirmação",
        "title": "Etapa 3: Confirmação"
      },
      {
        "id": "etapa-4-desfazimento-reversal",
        "title": "Etapa 4: Desfazimento (reversal)"
      },
      {
        "id": "etapa-5-arquivo-de-conciliação-transacional-diário",
        "title": "Etapa 5: Arquivo de conciliação transacional diário"
      },
      {
        "id": "outros-eventos-do-ciclo",
        "title": "Outros eventos do ciclo"
      },
      {
        "id": "status-possíveis-de-uma-transação",
        "title": "Status possíveis de uma transação"
      },
      {
        "id": "o-que-dá-errado-no-mundo-real",
        "title": "O que dá errado no mundo real"
      },
      {
        "id": "como-monitorar-a-saúde-do-ciclo",
        "title": "Como monitorar a saúde do ciclo"
      },
      {
        "id": "faq",
        "title": "FAQ"
      },
      {
        "id": "próximo-passo",
        "title": "Próximo passo"
      }
    ],
    "featured": false,
    "ogImage": "/og/ciclo-de-vida-transacao-cartao.png"
  },
  {
    "slug": "como-solicitar-bin-iin-abnt",
    "file": "como-solicitar-bin-iin-abnt.md",
    "title": "Como solicitar um BIN/IIN no Brasil: o passo a passo da ABNT",
    "seoTitle": "",
    "description": "Solicitar um BIN (Bank Identification Number) no Brasil passa pela ABNT, segue a ISO/IEC 7812-1 e leva 30 dias. Entenda o processo completo, o custo e quando você realmente precisa de um BIN próprio.",
    "categorySlug": "cartoes",
    "cluster": "emissao-cartao",
    "type": "satellite",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-23",
    "updatedAt": "2026-04-23",
    "readingTime": 10,
    "answer": "No Brasil, o registro de BIN (Bank Identification Number) e IIN (Issuer Identification Number) é controlado pela ABNT, que atua como Registration Authority do padrão ISO/IEC 7812-1. O processo envolve enviar e-mail à ABNT, preencher o formulário oficial (em inglês, no padrão internacional) e aguardar aprovação. Custa entre R$ 3.000 e R$ 5.000, leva em torno de 30 dias e resulta em um identificador único de 6 ou 8 dígitos que sua empresa pode usar para emitir cartões próprios, com bandeira própria ou homologados em bandeiras abertas.",
    "tags": [
      "bin",
      "iin",
      "abnt",
      "iso 7812",
      "emissão de cartão"
    ],
    "faqs": [
      {
        "q": "O que é BIN de cartão?",
        "a": "BIN (Bank Identification Number) é o conjunto dos 6 ou 8 primeiros dígitos do número do cartão. Identifica a instituição emissora. É a chave que permite o roteamento de transações no sistema global de pagamentos."
      },
      {
        "q": "Qual é a diferença entre BIN e IIN?",
        "a": "BIN é o termo histórico. IIN (Issuer Identification Number) é o termo moderno e oficial da norma ISO/IEC 7812-1. Ambos se referem ao mesmo conjunto de dígitos. Hoje é uma terminologia dupla, com IIN sendo tecnicamente correto e BIN sendo comum no dia a dia."
      },
      {
        "q": "Quanto custa solicitar um BIN no Brasil?",
        "a": "O custo direto na ABNT fica entre R$ 3.000 e R$ 5.000 por IIN. Incluindo homologação em bandeira, integração técnica e setup operacional, o custo total para ter um BIN funcional vai de R$ 170 mil a R$ 830 mil."
      },
      {
        "q": "Quanto tempo leva para receber um BIN?",
        "a": "O processo na ABNT leva em torno de 30 dias corridos. Considerando homologação em bandeira e integração, pode levar de 3 a 6 meses no total até o primeiro cartão em produção."
      },
      {
        "q": "Preciso de BIN próprio para emitir cartão?",
        "a": "Não necessariamente. Se você opera via BIN Sponsor em bandeira aberta, usa o BIN do sponsor. Só precisa de BIN próprio se quer emitir cartão com arranjo fechado próprio, se quer ser emissor direto em bandeira aberta, ou se tem arranjo proprietário que interopera com outros."
      }
    ],
    "sources": [],
    "howTo": null,
    "toc": [
      {
        "id": "resposta-direta",
        "title": "Resposta direta"
      },
      {
        "id": "o-que-é-bin-e-o-que-é-iin",
        "title": "O que é BIN e o que é IIN"
      },
      {
        "id": "quando-você-precisa-de-bin-próprio",
        "title": "Quando você precisa de BIN próprio"
      },
      {
        "id": "a-abnt-como-autoridade-de-registro",
        "title": "A ABNT como autoridade de registro"
      },
      {
        "id": "o-passo-a-passo-do-processo",
        "title": "O passo a passo do processo"
      },
      {
        "id": "transição-de-6-para-8-dígitos",
        "title": "Transição de 6 para 8 dígitos"
      },
      {
        "id": "custos-totais-para-ter-um-bin-funcionando",
        "title": "Custos totais para ter um BIN funcionando"
      },
      {
        "id": "alternativas-se-você-não-quer-ou-não-precisa-do-bin-próprio",
        "title": "Alternativas se você não quer ou não precisa do BIN próprio"
      },
      {
        "id": "o-que-muitas-operações-esquecem",
        "title": "O que muitas operações esquecem"
      },
      {
        "id": "faq",
        "title": "FAQ"
      },
      {
        "id": "próximo-passo",
        "title": "Próximo passo"
      }
    ],
    "featured": false,
    "ogImage": "/og/como-solicitar-bin-iin-abnt.png"
  },
  {
    "slug": "conciliacao-financeira-cartoes",
    "file": "conciliacao-financeira-cartoes.md",
    "title": "Conciliação financeira de cartões: como funciona e quanto custa para o emissor",
    "seoTitle": "",
    "description": "Conciliação financeira é o processo em que o estabelecimento compara o que vendeu no cartão com o que recebeu. Entenda as plataformas (Conciliadora, Equals, Nexera, BoaVista), os custos de homologação e por que o serviço pode virar barreira de credenciamento.",
    "categorySlug": "operacoes",
    "cluster": "arranjo-fechado",
    "type": "satellite",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-23",
    "updatedAt": "2026-04-23",
    "readingTime": 10,
    "answer": "Conciliação financeira é o processo em que um estabelecimento comercial compara as transações de cartão que reali",
    "tags": [
      "conciliação financeira",
      "cartão",
      "arranjo fechado",
      "operações"
    ],
    "faqs": [],
    "sources": [],
    "howTo": null,
    "toc": [
      {
        "id": "resposta-direta",
        "title": "Resposta direta"
      },
      {
        "id": "por-que-conciliação-existe",
        "title": "Por que conciliação existe"
      },
      {
        "id": "onde-a-conciliação-entra-no-ciclo",
        "title": "Onde a conciliação entra no ciclo"
      },
      {
        "id": "as-principais-plataformas-de-conciliação-no-brasil",
        "title": "As principais plataformas de conciliação no Brasil"
      },
      {
        "id": "o-que-é-homologação-em-plataforma-de-conciliação",
        "title": "O que é homologação em plataforma de conciliação"
      },
      {
        "id": "por-que-isso-pode-virar-barreira-de-credenciamento",
        "title": "Por que isso pode virar barreira de credenciamento"
      },
      {
        "id": "como-o-arquivo-de-conciliação-é-enviado",
        "title": "Como o arquivo de conciliação é enviado"
      },
      {
        "id": "o-que-vai-no-arquivo-de-conciliação",
        "title": "O que vai no arquivo de conciliação"
      },
      {
        "id": "o-papel-do-hub-de-conciliação",
        "title": "O papel do hub de conciliação"
      },
      {
        "id": "custos-totais-da-conciliação",
        "title": "Custos totais da conciliação"
      },
      {
        "id": "erros-comuns",
        "title": "Erros comuns"
      },
      {
        "id": "faq",
        "title": "FAQ"
      },
      {
        "id": "próximo-passo",
        "title": "Próximo passo"
      }
    ],
    "featured": false,
    "ogImage": "/og/conciliacao-financeira-cartoes.png"
  },
  {
    "slug": "funds-in-cartoes-recarga-tarifas",
    "file": "funds-in-cartoes-recarga-tarifas.md",
    "title": "Funds-in em cartões: como funciona a recarga e quais tarifas cobrar",
    "seoTitle": "",
    "description": "Funds-in é o processo de entrada de dinheiro em um cartão pré-pago ou na conta associada. Entenda os modelos (pré-pago vs pós-pago), as formas de cobrança (boleto, Pix) e a tabela de tarifas típicas do mercado brasileiro.",
    "categorySlug": "operacoes",
    "cluster": "arranjo-fechado",
    "type": "satellite",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-23",
    "updatedAt": "2026-04-23",
    "readingTime": 10,
    "answer": "Funds-in é o processo de entrada de dinheiro em uma conta associada a um cartão, para que ele possa ser usado em pagamentos. Em cartões pré-pagos, a recarga acontece antes do uso, via boleto ou Pix. Em cartões pós-pagos (incluindo crédito e adiantamento salarial), a cobrança acontece depois do uso. Cada modelo tem estrutura de tarifação própria: emissão de cartão (R$ 5 a R$ 20), manutenção recorrente (R$ 1 a R$ 20 por mês), tarifa variável de recarga (0% a 3%) e tarifa de uso (pode ser positiva ou negativa). A estrutura correta depende do tipo de produto: benefício, gestão de frota, gestão de despesas, convênio salarial ou premiação.",
    "tags": [
      "funds in",
      "recarga",
      "cartão",
      "tarifas",
      "arranjo fechado"
    ],
    "faqs": [
      {
        "q": "O que é funds-in em cartão?",
        "a": "Funds-in é o processo de entrada de dinheiro em uma conta associada a um cartão. Em pré-pago, a recarga antes do uso. Em pós-pago, a estruturação do limite de crédito ou do fluxo de cobrança pós-uso."
      },
      {
        "q": "Qual é a diferença entre pré-pago e pós-pago?",
        "a": "Pré-pago: o dinheiro entra antes do uso. Sem risco de inadimplência. Usado em benefícios, premiação. Pós-pago: o dinheiro entra depois do uso (fatura, cobrança em folha). Exige análise de crédito. Usado em gestão de frota, despesas corporativas, cartão de crédito."
      },
      {
        "q": "Como funciona a recarga via Pix?",
        "a": "O usuário ou empresa solicita a recarga, recebe uma chave Pix ou QR Code, paga. O valor é creditado em segundos. Hoje é o método mais rápido e econômico para a maioria das operações."
      },
      {
        "q": "Qual é a tarifa padrão de emissão de cartão?",
        "a": "R$ 5 a R$ 20 por cartão. Em benefícios regulados (vale-alimentação, vale-refeição), a primeira via é isenta. Segunda via pode ser cobrada."
      },
      {
        "q": "Posso cobrar tarifa em cartão de benefício?",
        "a": "Depende do benefício. Em vale-alimentação e vale-refeição regulados pelo PAT, há restrições sobre o que pode ser cobrado. Em benefícios flexíveis ou programas próprios da empresa, há mais flexibilidade. Sempre consulte regulação específica."
      },
      {
        "q": "O que é tarifa variável de recarga?",
        "a": "É um percentual aplicado sobre o valor recarregado, cobrado no ato da recarga. Comum em programas de premiação (1% a 3%), raro em benefícios (0%)."
      }
    ],
    "sources": [],
    "howTo": null,
    "toc": [
      {
        "id": "resposta-direta",
        "title": "Resposta direta"
      },
      {
        "id": "o-que-é-funds-in-na-prática",
        "title": "O que é funds-in na prática"
      },
      {
        "id": "dois-modelos-pré-pago-e-pós-pago",
        "title": "Dois modelos: pré-pago e pós-pago"
      },
      {
        "id": "como-o-dinheiro-entra-boleto-pix-e-afins",
        "title": "Como o dinheiro entra: boleto, Pix e afins"
      },
      {
        "id": "providers-de-cobrança-e-recarga",
        "title": "Providers de cobrança e recarga"
      },
      {
        "id": "a-estrutura-de-tarifas-em-funds-in",
        "title": "A estrutura de tarifas em funds-in"
      },
      {
        "id": "tabela-consolidada-por-produto",
        "title": "Tabela consolidada por produto"
      },
      {
        "id": "emissão-de-nota-fiscal",
        "title": "Emissão de nota fiscal"
      },
      {
        "id": "atenção-funds-in-e-custódia-de-recursos",
        "title": "Atenção: funds-in e custódia de recursos"
      },
      {
        "id": "erros-comuns-em-funds-in",
        "title": "Erros comuns em funds-in"
      },
      {
        "id": "faq",
        "title": "FAQ"
      },
      {
        "id": "próximo-passo",
        "title": "Próximo passo"
      }
    ],
    "featured": false,
    "ogImage": "/og/funds-in-cartoes-recarga-tarifas.png"
  },
  {
    "slug": "intercambio-de-cartao",
    "file": "intercambio-de-cartao.md",
    "title": "Intercâmbio de cartão: o que é, quanto paga e para onde vai esse dinheiro",
    "seoTitle": "",
    "description": "Entenda o intercâmbio (interchange), a principal receita do emissor de cartão. Como funciona, quanto paga por bandeira e programa, e por que essa tarifa define se sua operação sustenta.",
    "categorySlug": "cartoes",
    "cluster": "arranjo-aberto",
    "type": "satellite",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-23",
    "updatedAt": "2026-04-23",
    "readingTime": 11,
    "answer": "O intercâmbio (interchange, em inglês) é a tarifa que o emissor do cartão recebe toda ve",
    "tags": [
      "intercâmbio",
      "interchange",
      "mdr",
      "emissão de cartão",
      "banking as a service"
    ],
    "faqs": [
      {
        "q": "O que é intercâmbio em cartão de crédito?",
        "a": "É a tarifa que o emissor do cartão recebe a cada transação, pagar por quem aceitou o cartão. No Brasil, fica entre 1,4% e 2,2% em crédito, dependendo do programa e do público."
      },
      {
        "q": "Quem paga o intercâmbio?",
        "a": "O estabelecimento comercial, embutido no MDR (a taxa da maquininha). O estabelecimento paga o MDR para o adquirente, que repassa uma fatia para a bandeira e a maior fatia para o emissor via intercâmbio."
      },
      {
        "q": "Qual é a diferença entre intercâmbio e MDR?",
        "a": "O MDR é a tarifa total que o estabelecimento paga por transação. O intercâmbio é uma das três fatias que compõem o MDR (as outras duas são a remuneração da bandeira e a margem do adquirente). O intercâmbio costuma ser 60% a 70% do MDR."
      },
      {
        "q": "Qual é o intercâmbio de cartão pré-pago no Brasil?",
        "a": "Desde 2023, o BACEN limitou o intercâmbio de pré-pago a 0,7% do valor da transação, mesmo teto aplicado ao débito."
      },
      {
        "q": "Quanto rende intercâmbio para um cartão comercial?",
        "a": "Cartões emitidos para CNPJ (corporativo ou empresarial) têm intercâmbio entre 1,6% e 2,2% em crédito. A faixa maior existe porque o comportamento de uso é mais previsível, o ticket é maior e o risco é menor."
      }
    ],
    "sources": [],
    "howTo": null,
    "toc": [
      {
        "id": "resposta-direta",
        "title": "Resposta direta"
      },
      {
        "id": "o-que-é-intercâmbio-sem-rodeio",
        "title": "O que é intercâmbio, sem rodeio"
      },
      {
        "id": "por-que-o-intercâmbio-existe",
        "title": "Por que o intercâmbio existe"
      },
      {
        "id": "como-é-definido-bandeira-programa-e-tipo-de-operação",
        "title": "Como é definido: bandeira, programa e tipo de operação"
      },
      {
        "id": "faixas-típicas-de-intercâmbio-no-brasil",
        "title": "Faixas típicas de intercâmbio no Brasil"
      },
      {
        "id": "o-impacto-do-teto-de-7-no-pré-pago",
        "title": "O impacto do teto de 7% no pré-pago"
      },
      {
        "id": "para-onde-o-intercâmbio-vai-dentro-da-sua-operação",
        "title": "Para onde o intercâmbio vai dentro da sua operação"
      },
      {
        "id": "quanto-o-intercâmbio-realmente-vira-margem",
        "title": "Quanto o intercâmbio realmente vira margem"
      },
      {
        "id": "como-as-bandeiras-remuneram-incentivos-adicionais",
        "title": "Como as bandeiras remuneram incentivos adicionais"
      },
      {
        "id": "onde-muita-gente-erra",
        "title": "Onde muita gente erra"
      },
      {
        "id": "faq",
        "title": "FAQ"
      },
      {
        "id": "próximo-passo",
        "title": "Próximo passo"
      }
    ],
    "featured": false,
    "ogImage": "/og/intercambio-de-cartao.png"
  },
  {
    "slug": "iso-8583-protocolo-cartoes",
    "file": "iso-8583-protocolo-cartoes.md",
    "title": "ISO 8583: o protocolo que sustenta bilhões de transações de cartão no mundo",
    "seoTitle": "",
    "description": "A ISO 8583 é o padrão internacional de mensageria para transações de cartão. Entenda como funciona o formato de bits, os códigos de mensagem (0200, 0400, 0800), as opções TCP/IP e HTTP, e por que esse protocolo de 1987 ainda domina o mercado.",
    "categorySlug": "tecnologia",
    "cluster": "tecnologia-pagamentos",
    "type": "satellite",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-23",
    "updatedAt": "2026-04-23",
    "readingTime": 12,
    "answer": "ISO 8583 é o padrão internacional de mensageria transacional para cartões de pagamento, publicado pela primeira ve",
    "tags": [
      "iso 8583",
      "protocolo",
      "cartão",
      "processamento de transações",
      "tecnologia"
    ],
    "faqs": [],
    "sources": [],
    "howTo": null,
    "toc": [
      {
        "id": "resposta-direta",
        "title": "Resposta direta"
      },
      {
        "id": "por-que-um-padrão-de-1987-ainda-está-no-centro-do-sistema",
        "title": "Por que um padrão de 1987 ainda está no centro do sistema"
      },
      {
        "id": "como-funciona-a-estrutura-da-mensagem",
        "title": "Como funciona a estrutura da mensagem"
      },
      {
        "id": "os-mtis-principais",
        "title": "Os MTIs principais"
      },
      {
        "id": "ciclo-de-vida-da-mensagem",
        "title": "Ciclo de vida da mensagem"
      },
      {
        "id": "tcp-ip-socket-o-modo-clássico",
        "title": "TCP/IP Socket: o modo clássico"
      },
      {
        "id": "http-com-json-ou-xml-o-modo-moderno",
        "title": "HTTP com JSON ou XML: o modo moderno"
      },
      {
        "id": "criptografia-iso-9564-e-3des",
        "title": "Criptografia: ISO 9564 e 3DES"
      },
      {
        "id": "por-que-entender-iso-8583-importa-para-quem-monta-operação-de-cartão",
        "title": "Por que entender ISO 8583 importa para quem monta operação de cartão"
      },
      {
        "id": "códigos-de-resposta-mais-comuns",
        "title": "Códigos de resposta mais comuns"
      },
      {
        "id": "faq",
        "title": "FAQ"
      },
      {
        "id": "próximo-passo",
        "title": "Próximo passo"
      }
    ],
    "featured": false,
    "ogImage": "/og/iso-8583-protocolo-cartoes.png"
  },
  {
    "slug": "mdr-taxa-maquininha",
    "file": "mdr-taxa-maquininha.md",
    "title": "MDR: o que é a taxa da maquininha e como ela se divide no arranjo aberto",
    "seoTitle": "",
    "description": "O MDR é a taxa que o estabelecimento paga em cada venda com cartão. Entenda como ela se compõe, para onde vai cada pedaço e por que o emissor, a bandeira e o adquirente têm incentivos diferentes.",
    "categorySlug": "cartoes",
    "cluster": "arranjo-aberto",
    "type": "satellite",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-23",
    "updatedAt": "2026-04-23",
    "readingTime": 10,
    "answer": "MDR (Merchant Discount Rate) é a taxa total que um estabelecimento comercial paga à adquirente a cada venda com cartão. No arranjo aberto, o MDR se divide em três pedaços: o intercâmbio, que vai para o emissor do cartão; a tarifa de bandeira, que remunera Visa, Mastercard, Elo ou American Express; e a margem do adquirente, dono da maquininha. No Brasil, o MDR médio em crédito fica entre 2% e 3% e em débito entre 1% e 2%.",
    "tags": [
      "mdr",
      "taxa da maquininha",
      "intercâmbio",
      "adquirência",
      "emissão de cartão"
    ],
    "faqs": [
      {
        "q": "O que é MDR em cartão de crédito?",
        "a": "MDR (Merchant Discount Rate) é a taxa que o estabelecimento comercial paga por cada venda feita com cartão. Em crédito à vista, fica em média entre 2% e 3%. Em crédito parcelado, pode chegar a 4%. Em débito, entre 1% e 2%."
      },
      {
        "q": "Qual é a diferença entre MDR e intercâmbio?",
        "a": "O MDR é a taxa total que o estabelecimento paga. O intercâmbio é a fatia do MDR que vai para o emissor do cartão. O MDR também inclui a tarifa da bandeira e a margem do adquirente. Intercâmbio costuma ser 60% a 70% do MDR total."
      },
      {
        "q": "Quem define o valor do MDR?",
        "a": "O valor do MDR é negociado entre o adquirente (dono da maquininha) e o estabelecimento. Como intercâmbio e tarifa de bandeira são fixados por tabelas, a negociação acontece na margem do adquirente. Lojistas grandes conseguem MDR muito menor que pequenos comerciantes."
      },
      {
        "q": "O MDR é o mesmo para crédito e débito?",
        "a": "Não. Em crédito, o MDR é maior porque o emissor assume risco e o adquirente antecipa pagamento em 28 dias. Em débito, o MDR é menor porque a liquidação é mais rápida e o teto de intercâmbio do BACEN é mais baixo."
      },
      {
        "q": "Pix tem MDR?",
        "a": "Não no formato tradicional. Pix direto entre pessoas físicas é gratuito. Pix entre pessoa jurídica e pessoa física pode ter tarifa negociada com o banco ou instituição de pagamento. Os meios de pagamento baseados em Pix (como Pix garantido e Pix automático) podem ter tarifas variáveis. Em média, bem abaixo do MDR de cartão."
      }
    ],
    "sources": [],
    "howTo": null,
    "toc": [
      {
        "id": "resposta-direta",
        "title": "Resposta direta"
      },
      {
        "id": "o-que-é-o-mdr",
        "title": "O que é o MDR"
      },
      {
        "id": "como-o-mdr-se-divide-no-arranjo-aberto",
        "title": "Como o MDR se divide no arranjo aberto"
      },
      {
        "id": "por-que-cada-ator-tem-interesses-diferentes",
        "title": "Por que cada ator tem interesses diferentes"
      },
      {
        "id": "quem-define-o-mdr",
        "title": "Quem define o MDR"
      },
      {
        "id": "mdr-vs-intercâmbio-a-confusão-que-custa-projeção-errada",
        "title": "MDR vs intercâmbio: a confusão que custa projeção errada"
      },
      {
        "id": "onde-o-mdr-está-indo",
        "title": "Onde o MDR está indo"
      },
      {
        "id": "como-isso-afeta-quem-está-modelando-uma-operação-de-cartão",
        "title": "Como isso afeta quem está modelando uma operação de cartão"
      },
      {
        "id": "faq",
        "title": "FAQ"
      },
      {
        "id": "próximo-passo",
        "title": "Próximo passo"
      }
    ],
    "featured": false,
    "ogImage": "/og/mdr-taxa-maquininha.png"
  },
  {
    "slug": "quanto-custa-emitir-cartao",
    "file": "quanto-custa-emitir-cartao.md",
    "title": "Quanto custa emitir cartão no Brasil: CAPEX, OPEX e break-even sem romantismo",
    "seoTitle": "",
    "description": "Guia completo dos custos reais de emissão de cartão no Brasil: setup, tarifas unitárias, custos de bandeira, plástico e logística. Com projeção de break-even e cenários por modelo.",
    "categorySlug": "cartoes",
    "cluster": "arranjo-aberto",
    "type": "satellite",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-23",
    "updatedAt": "2026-04-23",
    "readingTime": 13,
    "answer": "Emitir cartão no Brasil via BIN Sponsor (o caminho mais comum hoje) envolve um setup inicial de R$ 100 mil a R$ 500 mil, um fee mínimo mensal entre R$ 10 mil e R$ 50 mil nos primeiros meses, e custos unitários por conta, transação e KYC que somam entre R$ 2,50 e R$ 6 por usuário ativo por mês. A produção de cartão físico custa R$ 10 a R$ 25 por unidade (incluindo plástico, embolsamento e logística). O break-even típico acontece entre 30 mil e 80 mil cartões ativos, no hori",
    "tags": [
      "custo emissão cartão",
      "capex",
      "break-even",
      "banking as a service",
      "fintech"
    ],
    "faqs": [
      {
        "q": "Quanto custa para começar a emitir cartão no Brasil?",
        "a": "Via BIN Sponsor (modelo mais comum), o CAPEX inicial fica entre R$ 250.000 e R$ 1.400.000 dependendo da complexidade. Via licença própria, entre R$ 5 milhões e R$ 15 milhões."
      }
    ],
    "sources": [],
    "howTo": null,
    "toc": [
      {
        "id": "resposta-direta",
        "title": "Resposta direta"
      },
      {
        "id": "antes-dos-números-o-que-está-na-conta",
        "title": "Antes dos números: o que está na conta"
      },
      {
        "id": "capex-o-que-custa-começar",
        "title": "CAPEX: o que custa começar"
      },
      {
        "id": "custos-fixos-mensais-o-peso-do-pré-escala",
        "title": "Custos fixos mensais: o peso do pré-escala"
      },
      {
        "id": "custos-variáveis-por-usuário-e-por-transação",
        "title": "Custos variáveis: por usuário e por transação"
      },
      {
        "id": "custos-físicos-produção-e-logística-de-plástico",
        "title": "Custos físicos: produção e logística de plástico"
      },
      {
        "id": "o-intercâmbio-receita-que-cobre-isso",
        "title": "O intercâmbio: receita que cobre isso"
      },
      {
        "id": "a-matemática-do-break-even",
        "title": "A matemática do break-even"
      },
      {
        "id": "cenários-por-modelo",
        "title": "Cenários por modelo"
      },
      {
        "id": "erros-que-disparam-o-custo",
        "title": "Erros que disparam o custo"
      },
      {
        "id": "como-a-just-ajuda-nessa-conta",
        "title": "Como a JUST ajuda nessa conta"
      },
      {
        "id": "faq",
        "title": "FAQ"
      },
      {
        "id": "próximo-passo",
        "title": "Próximo passo"
      }
    ],
    "featured": false,
    "ogImage": "/og/quanto-custa-emitir-cartao.png"
  },
  {
    "slug": "receita-de-float-emissao-cartoes",
    "file": "receita-de-float-emissao-cartoes.md",
    "title": "Receita de float em emissão de cartões: o dinheiro parado que rende enquanto espera",
    "seoTitle": "",
    "description": "Receita de float é o rendimento que a instituição de pagamento ganha enquanto o dinheiro da transação espera liquidar. Entenda como funciona, quanto rende e por que isso deve ser repassado a você emissor.",
    "categorySlug": "cartoes",
    "cluster": "arranjo-aberto",
    "type": "satellite",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-23",
    "updatedAt": "2026-04-23",
    "readingTime": 9,
    "answer": "Receita de float é o rendimento financeiro que uma instituição de pagamento gera ao investir, em títulos públicos seguros, o dinheiro que fica parado nas contas enquanto espera ser liquidado para o estabelecimento comercial. Em operações de cartão de crédito com liquidação em 28 dias (D+28), o float pode chegar a 1% a 1,5% do TPV mensal a títulos da Selic. É receita legítima do emissor e deve ser repassada pelo BaaS ao cliente que contratou o BIN Sponsor.",
    "tags": [
      "float",
      "receita de float",
      "emissão de cartão",
      "banking as a service",
      "tesouraria"
    ],
    "faqs": [
      {
        "q": "O que é receita de float em cartão?",
        "a": "É o rendimento financeiro gerado quando dinheiro de transações de cartão fica parado em conta aguardando liquidação. A instituição de pagamento investe esse saldo em títulos públicos e o rendimento é receita do emissor (repassada pelo BaaS, se o modelo for BIN Sponsor)."
      },
      {
        "q": "Quanto rende o float de uma operação de cartão?",
        "a": "Em cartão de crédito com D+28, o float rende aproximadamente 1% a 1,5% do TPV mensal a títulos da Selic atual (10% ao ano). Em débito e pré-pago, o float é muito menor, perto de 0,05% a 0,1% do TPV."
      },
      {
        "q": "Quem recebe o float: o emissor ou o BaaS?",
        "a": "Comercialmente, o float é receita do emissor (a fintech que contratou o BIN Sponsor). O BaaS gerencia o dinheiro e repassa a receita via contrato. Se sua operação está via BaaS, confira se o contrato tem cláusula clara de repasse de float."
      }
    ],
    "sources": [],
    "howTo": null,
    "toc": [
      {
        "id": "resposta-direta",
        "title": "Resposta direta"
      },
      {
        "id": "o-que-é-float-na-prática",
        "title": "O que é float, na prática"
      },
      {
        "id": "por-que-o-float-existe",
        "title": "Por que o float existe"
      },
      {
        "id": "quanto-rende-a-matemática",
        "title": "Quanto rende: a matemática"
      },
      {
        "id": "quem-é-dono-do-float",
        "title": "Quem é dono do float"
      },
      {
        "id": "como-o-float-é-repassado",
        "title": "Como o float é repassado"
      },
      {
        "id": "quando-o-float-importa-mais",
        "title": "Quando o float importa mais"
      },
      {
        "id": "quando-o-float-não-importa",
        "title": "Quando o float não importa"
      },
      {
        "id": "como-negociar-repasse-de-float-com-o-baas",
        "title": "Como negociar repasse de float com o BaaS"
      },
      {
        "id": "impactos-fiscais",
        "title": "Impactos fiscais"
      },
      {
        "id": "faq",
        "title": "FAQ"
      },
      {
        "id": "próximo-passo",
        "title": "Próximo passo"
      }
    ],
    "featured": false,
    "ogImage": "/og/receita-de-float-emissao-cartoes.png"
  },
  {
    "slug": "resolucao-bcb-150-2021",
    "file": "resolucao-bcb-150-2021.md",
    "title": "Resolução BCB 150/2021: quando um arranjo de pagamento precisa de autorização do BACEN",
    "seoTitle": "",
    "description": "A Resolução BCB 150/2021 define quais arranjos de pagamento estão dispensados de autorização do BACEN e quais obrigações permanecem. Entenda os critérios, limites e o que muda na prática.",
    "categorySlug": "regulacao",
    "cluster": "regulacao-pagamentos",
    "type": "satellite",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-23",
    "updatedAt": "2026-04-23",
    "readingTime": 11,
    "answer": "A Resolução BCB 150/2021 lista os arranjos de pagamento que ficam dispensados de autori",
    "tags": [
      "resolução bcb 150",
      "bacen",
      "arranjo de pagamento",
      "spb",
      "regulação"
    ],
    "faqs": [],
    "sources": [],
    "howTo": null,
    "toc": [
      {
        "id": "resposta-direta",
        "title": "Resposta direta"
      },
      {
        "id": "o-que-é-um-arranjo-de-pagamento",
        "title": "O que é um arranjo de pagamento"
      },
      {
        "id": "por-que-a-resolução-existe",
        "title": "Por que a resolução existe"
      },
      {
        "id": "os-três-grupos-dispensados-de-autorização",
        "title": "Os três grupos dispensados de autorização"
      },
      {
        "id": "as-obrigações-que-permanecem-mesmo-dispensando-autorização",
        "title": "As obrigações que permanecem mesmo dispensando autorização"
      },
      {
        "id": "quando-deixa-de-caber-e-precisa-pedir-autorização",
        "title": "Quando deixa de caber e precisa pedir autorização"
      },
      {
        "id": "o-que-isso-significa-para-quem-monta-uma-operação-de-cartão",
        "title": "O que isso significa para quem monta uma operação de cartão"
      },
      {
        "id": "comparativo-autorização-vs-dispensa",
        "title": "Comparativo: autorização vs dispensa"
      },
      {
        "id": "exemplos-de-arranjos-e-suas-classificações",
        "title": "Exemplos de arranjos e suas classificações"
      },
      {
        "id": "o-que-não-estava-na-resolução-e-virou-peça-chave-depois",
        "title": "O que não estava na resolução e virou peça-chave depois"
      },
      {
        "id": "faq",
        "title": "FAQ"
      },
      {
        "id": "próximo-passo",
        "title": "Próximo passo"
      }
    ],
    "featured": false,
    "ogImage": "/og/resolucao-bcb-150-2021.png"
  },
  {
    "slug": "risco-sistemico-bacen-arranjos",
    "file": "risco-sistemico-bacen-arranjos.md",
    "title": "Risco sistêmico do BACEN: quando um arranjo de pagamento entra no radar crítico",
    "seoTitle": "",
    "description": "O BACEN classifica arranjos de pagamento conforme o risco sistêmico que representam. Entenda os critérios, o que muda quando um arranjo é considerado sistemicamente importante, e por que essa classificação define estrutura, custo e obrigações do emissor.",
    "categorySlug": "regulacao",
    "cluster": "regulacao-pagamentos",
    "type": "satellite",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-23",
    "updatedAt": "2026-04-23",
    "readingTime": 10,
    "answer": "Risco sistêmico é o conceito que o BACEN usa para classificar arranjos de pagamento que, se falharem, podem comprometer a estabilidade do sistema financeiro nacional. Arranjos sistemicamente importantes precisam de autori",
    "tags": [
      "risco sistêmico",
      "bacen",
      "arranjo de pagamento",
      "spb",
      "regulação"
    ],
    "faqs": [
      {
        "q": "O que é risco sistêmico em arranjo de pagamento?",
        "a": "É o conceito de que uma falha naquele arranjo pode comprometer a estabilidade do sistema financeiro como um todo. O BACEN usa essa classificação para decidir o nível de regulação aplicável a cada arranjo."
      }
    ],
    "sources": [],
    "howTo": null,
    "toc": [
      {
        "id": "resposta-direta",
        "title": "Resposta direta"
      },
      {
        "id": "o-que-é-risco-sistêmico",
        "title": "O que é risco sistêmico"
      },
      {
        "id": "como-o-bacen-avalia-risco-sistêmico",
        "title": "Como o BACEN avalia risco sistêmico"
      },
      {
        "id": "o-que-muda-quando-um-arranjo-é-sistêmico",
        "title": "O que muda quando um arranjo é sistêmico"
      },
      {
        "id": "o-que-muda-quando-um-arranjo-é-não-sistêmico",
        "title": "O que muda quando um arranjo é não sistêmico"
      },
      {
        "id": "quando-o-arranjo-cresce-e-muda-de-categoria",
        "title": "Quando o arranjo cresce e muda de categoria"
      },
      {
        "id": "comparativo-dispensado-vs-autorizado",
        "title": "Comparativo: dispensado vs autorizado"
      },
      {
        "id": "exemplos-reais-no-brasil",
        "title": "Exemplos reais no Brasil"
      },
      {
        "id": "como-saber-se-sua-operação-é-considerada-sistêmica",
        "title": "Como saber se sua operação é considerada sistêmica"
      },
      {
        "id": "o-que-fazer-quando-o-risco-sistêmico-se-aproxima",
        "title": "O que fazer quando o risco sistêmico se aproxima"
      },
      {
        "id": "faq",
        "title": "FAQ"
      },
      {
        "id": "próximo-passo",
        "title": "Próximo passo"
      }
    ],
    "featured": false,
    "ogImage": "/og/risco-sistemico-bacen-arranjos.png"
  },
  {
    "slug": "tef-pos-van-pos-proprio",
    "file": "tef-pos-van-pos-proprio.md",
    "title": "TEF, POS VAN e POS Próprio: como escolher o meio de captura para seu cartão",
    "seoTitle": "",
    "description": "Em arranjo fechado, escolher o meio de captura define custo, velocidade de implementação e alcance da rede. Entenda TEF, POS VAN, POS próprio e terminal web, com providers e custos reais.",
    "categorySlug": "arranjo-fechado",
    "cluster": "arranjo-fechado",
    "type": "satellite",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-23",
    "updatedAt": "2026-04-23",
    "readingTime": 12,
    "answer": "Em operação de cartão em arranjo fechado, o meio de captura é o equipamento ou aplicação que interliga o cartão ao estabelecimento comercial. As quatro opções principais são: POS próprio (maquininha da sua operação), POS VAN (uso da maquininha de terceiros via value aggregated network), TEF (transferência eletrônica de fundos integrada a sistemas fiscais) e terminal web (aplicação de captura baseada em navegador). Cada um tem custos, pra",
    "tags": [
      "tef",
      "pos",
      "meio de captura",
      "arranjo fechado",
      "cartão"
    ],
    "faqs": [
      {
        "q": "O que é TEF em cartão?",
        "a": "TEF (Transferência Eletrônica de Fundos) é o modelo em que o sistema fiscal do estabelecimento (PDV, ERP) se integra diretamente ao processador de pagamentos. É o padrão em grandes redes varejistas como supermercados e postos de combustível."
      }
    ],
    "sources": [],
    "howTo": null,
    "toc": [
      {
        "id": "resposta-direta",
        "title": "Resposta direta"
      },
      {
        "id": "por-que-o-meio-de-captura-importa",
        "title": "Por que o meio de captura importa"
      },
      {
        "id": "pos-próprio-a-maquininha-da-sua-operação",
        "title": "POS Próprio: a maquininha da sua operação"
      },
      {
        "id": "pos-van-usando-maquininha-de-terceiros",
        "title": "POS VAN: usando maquininha de terceiros"
      },
      {
        "id": "tef-o-padrão-das-grandes-redes-varejistas",
        "title": "TEF: o padrão das grandes redes varejistas"
      },
      {
        "id": "terminal-web-a-rota-mais-leve",
        "title": "Terminal Web: a rota mais leve"
      },
      {
        "id": "comparativo-qual-escolher",
        "title": "Comparativo: qual escolher"
      },
      {
        "id": "framework-de-escolha",
        "title": "Framework de escolha"
      },
      {
        "id": "o-que-a-gente-na-just-costuma-recomendar",
        "title": "O que a gente na JUST costuma recomendar"
      },
      {
        "id": "erros-comuns-que-a-gente-vê",
        "title": "Erros comuns que a gente vê"
      },
      {
        "id": "faq",
        "title": "FAQ"
      },
      {
        "id": "próximo-passo",
        "title": "Próximo passo"
      }
    ],
    "featured": false,
    "ogImage": "/og/tef-pos-van-pos-proprio.png"
  },
  {
    "slug": "teto-intercambio-pre-pago",
    "file": "teto-intercambio-pre-pago.md",
    "title": "Teto de 0,7% no intercâmbio de pré-pago: o que mudou e como recalibrar sua operação",
    "seoTitle": "",
    "description": "Em 2023, o BACEN limitou o intercâmbio de cartão pré-pago a 0,7%. Entenda o que mudou, como afetou o mercado e o que fazer se sua operação estava ancorada no modelo antigo de pré-pago.",
    "categorySlug": "regulacao",
    "cluster": "arranjo-aberto",
    "type": "satellite",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-23",
    "updatedAt": "2026-04-23",
    "readingTime": 9,
    "answer": "Em abril de 2023, o BACEN publicou a Resolução BCB 246, que limitou o intercâmbio de cartões pré-pagos a 0,7% sobre o valor da transação. Antes dessa mudança, o intercâmbio de pré-pago variava entre 1,0% e 1,5%, quase no nível do cartão de crédito. A nova regra tornou pré-pago e débito economicamente equivalentes e forçou muitas operações a repensarem o modelo.",
    "tags": [
      "pré-pago",
      "intercâmbio",
      "bacen",
      "regulação",
      "cartão"
    ],
    "faqs": [
      {
        "q": "Qual é o teto atual do intercâmbio de pré-pago?",
        "a": "Desde abril de 2024, o BACEN limita o intercâmbio de pré-pago doméstico a 0,5% em transações presenciais e 0,7% em transações não presenciais (e-commerce), com média ponderada de 0,5% ao longo de 12 meses."
      }
    ],
    "sources": [],
    "howTo": null,
    "toc": [
      {
        "id": "resposta-direta",
        "title": "Resposta direta"
      },
      {
        "id": "o-contexto-por-que-o-teto-foi-imposto",
        "title": "O contexto: por que o teto foi imposto"
      },
      {
        "id": "o-impacto-direto-no-mercado",
        "title": "O impacto direto no mercado"
      },
      {
        "id": "o-que-significa-0-7-ou-0-5-na-prática",
        "title": "O que significa 0,7% (ou 0,5%) na prática"
      },
      {
        "id": "os-caminhos-de-recalibragem",
        "title": "Os caminhos de recalibragem"
      },
      {
        "id": "como-o-teto-mudou-a-negociação-com-baas",
        "title": "Como o teto mudou a negociação com BaaS"
      },
      {
        "id": "o-que-isso-significa-para-quem-está-começando-agora",
        "title": "O que isso significa para quem está começando agora"
      },
      {
        "id": "o-que-vem-por-aí",
        "title": "O que vem por aí"
      },
      {
        "id": "faq",
        "title": "FAQ"
      },
      {
        "id": "próximo-passo",
        "title": "Próximo passo"
      }
    ],
    "featured": false,
    "ogImage": "/og/teto-intercambio-pre-pago.png"
  },
  {
    "slug": "cartao-bandeirado-o-que-e",
    "file": "cartao-bandeirado-o-que-e.mdx",
    "title": "Cartão bandeirado: o que é, como funciona e quais existem no Brasil",
    "seoTitle": "Cartão bandeirado: o que é e como funciona",
    "description": "O que é cartão bandeirado, como funciona a autorização, quem são as bandeiras no Brasil e qual a diferença para o não-bandeirado. Guia técnico simples.",
    "categorySlug": "meios-de-pagamento",
    "cluster": "private-label",
    "type": "satellite",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-20",
    "updatedAt": "2026-04-20",
    "readingTime": 8,
    "answer": "Cartão bandeirado é o cartão que carrega uma bandeira como Visa, Mastercard, Elo ou Amex e trafega em um arranjo de pagamento aberto. A bandeira não é o banco emissor: ela conecta emissor, adquirente e estabelecimento para permitir aceitação ampla.",
    "tags": [
      "cartão-bandeirado",
      "bandeiras",
      "Visa",
      "Mastercard",
      "Elo",
      "arranjo-aberto",
      "BaaS"
    ],
    "faqs": [
      {
        "q": "O que significa cartão bandeirado?",
        "a": "É um cartão que carrega o logo de uma bandeira, como Visa, Mastercard, Elo, Amex, Hipercard ou Cabal, e trafega pelo arranjo de pagamento aberto dessa bandeira. A bandeira conecta o banco emissor e o adquirente que atende o estabelecimento, permitindo aceitação ampla."
      },
      {
        "q": "Qual a diferença entre bandeira e banco emissor?",
        "a": "Bandeira é a rede, como Visa ou Mastercard. Banco emissor é quem deu o cartão e cobra do portador, como Itaú ou Nubank. No mesmo cartão aparecem os dois nomes porque são papéis diferentes: o emissor dá o crédito e o plástico, a bandeira garante o trilho de aceitação."
      },
      {
        "q": "Quais são as principais bandeiras no Brasil?",
        "a": "Visa e Mastercard lideram em aceitação global e nacional. Elo é a principal bandeira brasileira, resultado de joint venture entre Banco do Brasil, Bradesco e Caixa. Hipercard é do Itaú. American Express atende nicho premium. Cabal atua no cooperativismo de crédito."
      },
      {
        "q": "Todo cartão de crédito é bandeirado?",
        "a": "Não. Existem cartões de crédito sem bandeira, chamados private label, que funcionam só na rede do emissor, como Pernambucanas, Renner e Riachuelo. São cartões de crédito operados em arranjo fechado, sob a Lei 12.865/2013, mas sem Visa ou Mastercard envolvidas."
      },
      {
        "q": "É possível emitir cartão sem bandeira?",
        "a": "Sim. O private label é exatamente isso: cartão sem bandeira, aceito só na rede do próprio emissor, sem fees de bandeira e sem MDR em transações internas. Em troca, a aceitação é restrita. Para programas de fidelização de base engajada, costuma ser vantajoso."
      },
      {
        "q": "Quanto custa para uma empresa licenciar uma bandeira?",
        "a": "Varia por bandeira, categoria e volume esperado. Há fees iniciais de certificação e fees recorrentes por cartão ativo e por transação. Empresas não-bancárias normalmente acessam bandeira via BaaS licenciada em vez de contratar direto com a bandeira."
      },
      {
        "q": "Como uma fintech consegue emitir cartão bandeirado?",
        "a": "Há dois caminhos. O primeiro é virar IP autorizada pelo BACEN e licenciar a bandeira diretamente, processo que leva meses e custa centenas de milhares de reais. O segundo, mais comum, é contratar uma BaaS que já é emissora e licenciada."
      },
      {
        "q": "Cartão bandeirado é o mesmo que cartão de crédito?",
        "a": "Não. Bandeirado significa que o cartão tem bandeira e trafega em arranjo aberto, mas ele pode ser de crédito, débito, pré-pago ou múltiplos saldos. O mais comum no imaginário popular é o crédito bandeirado, mas a lógica do arranjo aberto vale para todas as funções."
      }
    ],
    "sources": [
      {
        "label": "Planalto - Lei 12.865/2013",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12865.htm"
      },
      {
        "label": "Banco Central do Brasil - Arranjos de pagamentos integrantes do SPB",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/arranjosintegrantesspb"
      },
      {
        "label": "Banco Central do Brasil - Perguntas frequentes sobre arranjos de pagamento",
        "url": "https://www.bcb.gov.br/meubc/faqs/s/arranjo-de-pagamentos"
      }
    ],
    "howTo": null,
    "toc": [
      {
        "id": "resposta-direta-cartão-bandeirado-em-uma-frase",
        "title": "Resposta direta: cartão bandeirado em uma frase"
      },
      {
        "id": "o-que-é-um-cartão-bandeirado",
        "title": "O que é um cartão bandeirado"
      },
      {
        "id": "como-funciona-uma-transação-com-cartão-bandeirado",
        "title": "Como funciona uma transação com cartão bandeirado"
      },
      {
        "id": "principais-bandeiras-de-cartão-no-brasil",
        "title": "Principais bandeiras de cartão no Brasil"
      },
      {
        "id": "cartão-bandeirado-vs-não-bandeirado",
        "title": "Cartão bandeirado vs não-bandeirado"
      },
      {
        "id": "tipos-de-cartão-bandeirado",
        "title": "Tipos de cartão bandeirado"
      },
      {
        "id": "quem-pode-emitir-cartão-bandeirado-no-brasil",
        "title": "Quem pode emitir cartão bandeirado no Brasil"
      },
      {
        "id": "vantagens-e-limitações-do-cartão-bandeirado",
        "title": "Vantagens e limitações do cartão bandeirado"
      },
      {
        "id": "perguntas-frequentes",
        "title": "Perguntas frequentes"
      }
    ],
    "featured": false,
    "ogImage": "/og/cartao-bandeirado-o-que-e.png"
  },
  {
    "slug": "cartao-private-label",
    "file": "cartao-private-label.mdx",
    "title": "Cartão private label: o guia completo para emitir o seu em 2026",
    "seoTitle": "Cartão private label: guia completo para emitir o seu",
    "description": "Como funciona, quanto custa, o que diz o BACEN e quando vale lançar um cartão private label próprio. Guia pragmático para empresas.",
    "categorySlug": "meios-de-pagamento",
    "cluster": "private-label",
    "type": "pillar",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-20",
    "updatedAt": "2026-04-20",
    "readingTime": 14,
    "answer": "Cartão private label é um cartão de pagamento sem bandeira aberta, aceito apenas na rede do próprio emissor. Ele costuma fazer sentido quando a empresa tem base recorrente, quer capturar margem em transações on-us e aceita assumir mais controle operacional, risco de fraude e, quando houver crédito, risco de inadimplência.",
    "tags": [
      "private-label",
      "cartões",
      "BaaS",
      "varejo",
      "emissão",
      "cooperativas",
      "associações"
    ],
    "faqs": [
      {
        "q": "O que é um cartão private label?",
        "a": "É um cartão de pagamento emitido por uma empresa para uso restrito à sua própria rede, operado em arranjo de pagamento fechado conforme a Lei 12.865/2013. Não tem bandeira aberta como Visa ou Mastercard. O emissor, a processadora e a rede aceitadora são do mesmo grupo econômico."
      },
      {
        "q": "Qual a diferença entre cartão private label, white label e co-branded?",
        "a": "Private label é cartão da casa, sem bandeira, aceito só na rede do emissor. White label é cartão com bandeira Visa ou Mastercard vendido com a marca do cliente. Co-branded é cartão bandeirado que divide marca entre emissor e parceiro, com aceitação ampla."
      },
      {
        "q": "Preciso ser banco ou ter autorização do BACEN para emitir um cartão private label?",
        "a": "Depende do volume e do desenho do arranjo. Operações abaixo dos limites regulatórios podem operar sem autorização formal do arranjo. O emissor também pode contratar uma BaaS autorizada, mantendo a marca no produto sem virar Instituição de Pagamento."
      },
      {
        "q": "Quanto custa lançar um cartão private label?",
        "a": "Via BaaS, a faixa típica de CAPEX fica entre R$ 50 mil e R$ 300 mil, dependendo de customização e integrações. OPEX mensal depende de volume, antifraude e PDD. Ser IP própria pode custar de R$ 500 mil a R$ 2 milhões."
      },
      {
        "q": "Em quanto tempo um cartão private label entra em operação?",
        "a": "Via BaaS, um programa costuma entrar em piloto entre 3 e 6 meses, dependendo das integrações. Caminho próprio, com autorização regulatória, pode levar de 12 a 18 meses. Programas pré-pagos simples podem ir ao ar em cerca de 90 dias."
      },
      {
        "q": "Cartão private label pode ser de crédito, pré-pago ou débito?",
        "a": "Pode ser de crédito ou pré-pago. Débito puro em arranjo fechado é raro no Brasil porque geralmente não há vantagem técnica sobre pré-pago. Também existem modelos híbridos com múltiplos saldos, comuns em benefícios e programas corporativos."
      },
      {
        "q": "Como funciona a cobrança em um cartão private label?",
        "a": "No crédito, o portador recebe fatura mensal com compras à vista ou parceladas. No pré-pago, ele usa saldo carregado previamente. A cobrança e a conciliação ficam dentro do ecossistema do emissor, simplificando a operação e reduzindo custos."
      },
      {
        "q": "Quais são os riscos do cartão private label para o lojista?",
        "a": "Os principais riscos são inadimplência e PDD no crédito, capital imobilizado, fraude transacional com chargeback a cargo do emissor e investimento em uma base sem engajamento suficiente. O desenho do programa precisa mitigar esses riscos desde o piloto."
      },
      {
        "q": "Cartão private label serve para pequeno varejo ou só para grandes redes?",
        "a": "Serve para negócios com base ativa e recorrente, não apenas para grandes redes. Uma operação menor com nicho fiel pode funcionar bem. Já uma rede grande, mas com base fria e baixa frequência, pode não sustentar a economia do programa."
      },
      {
        "q": "Cooperativas e associações podem emitir cartão private label?",
        "a": "Podem. Em muitos casos, o modelo se encaixa bem porque a base é engajada, tem recorrência e pode usar uma rede de parceiros específica. Cooperativas de crédito, associações de classe e clubes setoriais são exemplos sub-explorados."
      }
    ],
    "sources": [
      {
        "label": "Planalto - Lei 12.865/2013",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12865.htm"
      },
      {
        "label": "Banco Central do Brasil - Arranjos de pagamento não integrantes do SPB",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/arranjosnaointegrantesspb"
      },
      {
        "label": "Banco Central do Brasil - Perguntas frequentes sobre arranjos de pagamento",
        "url": "https://www.bcb.gov.br/meubc/faqs/s/arranjo-de-pagamentos"
      }
    ],
    "howTo": {
      "name": "Como emitir um cartão private label em 6 etapas",
      "description": "Processo para validar, desenhar, integrar, testar e escalar um programa de cartão private label.",
      "steps": [
        {
          "name": "Validar hipótese de negócio e volume mínimo",
          "text": "Projete base ativa, GMV on-us, ticket médio, inadimplência e breakeven antes de qualquer integração."
        },
        {
          "name": "Escolher BaaS parceira vs caminho próprio",
          "text": "Decida se o objetivo é operar via parceiro regulado ou construir estrutura própria como Instituição de Pagamento."
        },
        {
          "name": "Desenhar o produto",
          "text": "Defina se o cartão será pré-pago, crédito, híbrido ou com múltiplos saldos conforme o caso de uso."
        },
        {
          "name": "Integrar ERP, POS, e-commerce e app",
          "text": "Mapeie integrações críticas e teste autorização, saldo, extrato, checkout e conciliação antes do piloto."
        },
        {
          "name": "Rodar piloto com base controlada",
          "text": "Teste com 500 a 2.000 portadores por 60 a 90 dias, acompanhando ativação, falhas, NPS e inadimplência."
        },
        {
          "name": "Fazer go-live e escalar",
          "text": "Abra a base progressivamente quando os KPIs do piloto estiverem dentro das faixas esperadas."
        }
      ]
    },
    "toc": [
      {
        "id": "o-que-é-um-cartão-private-label-e-o-que-não-é",
        "title": "O que é um cartão private label (e o que não é)"
      },
      {
        "id": "como-funciona-um-cartão-private-label-na-prática",
        "title": "Como funciona um cartão private label na prática"
      },
      {
        "id": "o-que-diz-o-bacen-sobre-cartões-private-label",
        "title": "O que diz o BACEN sobre cartões private label"
      },
      {
        "id": "quanto-custa-emitir-um-cartão-private-label",
        "title": "Quanto custa emitir um cartão private label"
      },
      {
        "id": "vantagens-reais-do-private-label",
        "title": "Vantagens reais do private label"
      },
      {
        "id": "desvantagens-e-riscos-que-ninguém-te-conta",
        "title": "Desvantagens e riscos que ninguém te conta"
      },
      {
        "id": "como-emitir-um-cartão-private-label-em-6-etapas",
        "title": "Como emitir um cartão private label em 6 etapas"
      },
      {
        "id": "quando-private-label-não-é-a-resposta",
        "title": "Quando private label NÃO é a resposta"
      },
      {
        "id": "além-do-varejo-casos-onde-private-label-é-sub-explorado",
        "title": "Além do varejo: casos onde private label é sub-explorado"
      },
      {
        "id": "exemplos-de-cartões-private-label-no-brasil",
        "title": "Exemplos de cartões private label no Brasil"
      },
      {
        "id": "matriz-de-decisão-qual-modelo-escolher",
        "title": "Matriz de decisão: qual modelo escolher"
      },
      {
        "id": "perguntas-frequentes-sobre-cartão-private-label",
        "title": "Perguntas frequentes sobre cartão private label"
      }
    ],
    "featured": true,
    "ogImage": "/og/cartao-private-label.png"
  },
  {
    "slug": "diferenca-cartao-corporativo-empresarial",
    "file": "diferenca-cartao-corporativo-empresarial.mdx",
    "title": "Diferença entre cartão corporativo e empresarial: o que realmente muda",
    "seoTitle": "Diferença entre cartão corporativo e empresarial",
    "description": "Cartão corporativo e empresarial são sinônimos na prática, mas existem diferenças reais de responsabilidade, controle e contabilização. Entenda quando cada modelo faz sentido.",
    "categorySlug": "gestao-de-gastos-pj",
    "cluster": "private-label",
    "type": "satellite",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-20",
    "updatedAt": "2026-04-20",
    "readingTime": 8,
    "answer": "No Brasil, cartão corporativo e cartão empresarial costumam ser nomes comerciais para produtos PJ parecidos. A diferença real aparece no contrato e na operação: responsabilidade pela dívida, aval dos sócios, limite, controle por política, integração com ERP e forma de contabilização.",
    "tags": [
      "cartão-corporativo",
      "cartão-empresarial",
      "gestão-de-gastos",
      "private-label",
      "BaaS"
    ],
    "faqs": [
      {
        "q": "Cartão empresarial e corporativo são a mesma coisa?",
        "a": "Na maior parte dos casos, sim. A distinção varia por emissor, não pela regulação. O que diferencia produtos de verdade é responsabilidade pela dívida, controle de gasto, integração com ERP e forma de contabilização."
      },
      {
        "q": "Cartão corporativo exige aval dos sócios?",
        "a": "Depende do rating de crédito da empresa. Em PME padrão, o aval dos sócios é comum. Em empresas maiores, com histórico consolidado e demonstrativos fortes, é possível negociar responsabilidade exclusiva da PJ."
      },
      {
        "q": "Qual a diferença no limite entre empresarial e corporativo?",
        "a": "Não há fronteira oficial. Cartões empresariais de banco costumam operar de R$ 10 mil a R$ 500 mil. Cartões corporativos podem chegar a vários milhões, mas o nome do produto depende do emissor e não define sozinho o limite."
      },
      {
        "q": "Cartão corporativo gera nota fiscal?",
        "a": "O cartão em si não gera nota fiscal. Cada compra gera a nota do fornecedor. O emissor fornece fatura com CNPJ da empresa, que pode ser usada como comprovante contábil, mas não substitui a nota fiscal da transação."
      },
      {
        "q": "Cartão corporativo pode ser usado para despesa pessoal?",
        "a": "Em tese, não. Na prática, empresas sem controle preventivo sofrem com uso indevido. Produtos modernos reduzem esse risco com bloqueios por MCC, limites por portador, horário, geolocalização e regras de aprovação."
      },
      {
        "q": "Posso emitir cartão corporativo com a marca da minha empresa?",
        "a": "Sim. Via parceria BaaS, uma empresa pode emitir cartão corporativo com marca própria, bandeira Visa ou Mastercard e regras customizadas. A licença regulatória fica com a parceira, e a experiência pode ser white-label."
      },
      {
        "q": "Qual modelo é mais barato para empresa de 50 funcionários?",
        "a": "Depende do uso. Se a maior parte do gasto é em categorias controláveis, um produto com reconciliação automática pode pagar o investimento em poucos meses. Se o volume é baixo e a classificação é simples, cartão empresarial tradicional resolve."
      },
      {
        "q": "Faz sentido combinar cartão bandeirado e private label?",
        "a": "Faz quando a empresa tem malha de fornecedores estruturada. Private label cobre compras recorrentes com fornecedores homologados; bandeirado cobre despesas gerais. É um desenho comum para empresas de médio porte que querem controle e flexibilidade."
      }
    ],
    "sources": [
      {
        "label": "Planalto - Lei 12.865/2013",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12865.htm"
      },
      {
        "label": "Banco Central do Brasil - Arranjos de pagamentos integrantes do SPB",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/arranjosintegrantesspb"
      },
      {
        "label": "Banco Central do Brasil - Perguntas frequentes sobre arranjos de pagamento",
        "url": "https://www.bcb.gov.br/meubc/faqs/s/arranjo-de-pagamentos"
      }
    ],
    "howTo": null,
    "toc": [
      {
        "id": "resposta-direta",
        "title": "Resposta direta"
      },
      {
        "id": "a-confusão-dos-termos",
        "title": "A confusão dos termos"
      },
      {
        "id": "o-que-muda-de-verdade-entre-os-produtos-pj",
        "title": "O que muda de verdade entre os produtos PJ"
      },
      {
        "id": "responsabilidade-a-diferença-que-mexe-no-bolso",
        "title": "Responsabilidade: a diferença que mexe no bolso"
      },
      {
        "id": "controle-de-gasto-onde-a-tecnologia-aparece",
        "title": "Controle de gasto: onde a tecnologia aparece"
      },
      {
        "id": "contabilização-e-reconciliação",
        "title": "Contabilização e reconciliação"
      },
      {
        "id": "private-label-corporativo-terceira-opção",
        "title": "Private label corporativo: terceira opção"
      },
      {
        "id": "quando-usar-cada-modelo",
        "title": "Quando usar cada modelo"
      },
      {
        "id": "faq",
        "title": "FAQ"
      }
    ],
    "featured": false,
    "ogImage": "/og/diferenca-cartao-corporativo-empresarial.png"
  },
  {
    "slug": "white-label-vs-private-label",
    "file": "white-label-vs-private-label.mdx",
    "title": "White label vs private label: qual modelo de cartão escolher em 2026",
    "seoTitle": "White label vs private label: qual cartão escolher",
    "description": "Diferenças reais entre cartão white label e private label: custo, regulação, aceitação, risco e quando cada modelo vale a pena. Análise sem viés.",
    "categorySlug": "meios-de-pagamento",
    "cluster": "private-label",
    "type": "satellite",
    "authorSlug": "gabriel-pires",
    "publishedAt": "2026-04-20",
    "updatedAt": "2026-04-20",
    "readingTime": 9,
    "answer": "White label é um cartão bandeirado vendido com a marca do cliente e emitido por banco ou IP parceira; private label é um cartão sem bandeira, aceito apenas na rede do emissor. O primeiro compra aceitação ampla e velocidade regulatória, o segundo troca alcance por margem, controle de dados e maior captura econômica dentro da própria rede.",
    "tags": [
      "white-label",
      "private-label",
      "cartões",
      "BaaS",
      "emissão",
      "comparativo"
    ],
    "faqs": [
      {
        "q": "Qual a diferença entre cartão white label e private label?",
        "a": "White label é bandeirado e tem aceitação ampla, emitido por banco ou IP parceiro com a marca do cliente. Private label é sem bandeira, aceito só na rede do próprio emissor, operado em arranjo fechado sob a Lei 12.865/2013. O primeiro troca margem por alcance, o segundo troca alcance por margem."
      },
      {
        "q": "White label é sempre bandeirado?",
        "a": "Sim, no uso corrente do mercado brasileiro. White label pressupõe bandeira, como Visa, Mastercard, Elo ou Amex, e aceitação ampla. Se não tem bandeira, não é white label: é private label ou outro modelo fechado."
      },
      {
        "q": "Private label precisa de autorização do BACEN?",
        "a": "Depende do volume. Operações abaixo dos thresholds da Resolução BCB 150/2021 não exigem autorização formal do arranjo. Acima, sim. Em nenhum caso o emissor precisa virar IP para lançar um private label: contratar BaaS autorizada é o caminho mais comum."
      },
      {
        "q": "Qual modelo tem menor custo de lançamento?",
        "a": "Via BaaS, os dois lançam em faixas parecidas. Private label costuma ter CAPEX menor porque elimina fee de bandeira. White label compensa com aceitação ampla, que acelera uso. Qual compensa mais depende de volume on-us projetado, não só do custo inicial."
      },
      {
        "q": "White label serve para programa de benefícios?",
        "a": "Na maioria dos casos, sim. Programas de benefício flexível usam bandeira com MCC específicos para controlar onde o saldo pode ser gasto. Isso exige arranjo aberto ou híbrido. Arranjo puramente fechado limita o uso a parceiros cadastrados."
      },
      {
        "q": "Co-branded é diferente de white label?",
        "a": "Sim. Co-branded é cartão bandeirado com duas marcas, como banco e parceiro. White label é cartão bandeirado com a marca do cliente, emitido por banco ou IP parceiro. A diferença prática é quem aparece no cartão e como o risco é dividido."
      },
      {
        "q": "Posso migrar de um modelo para outro?",
        "a": "Pode, mas custa tempo e dinheiro. Migração exige reemissão de cartões, reconfiguração de BIN, comunicação com a base e integração nova. Em geral, operações começam com o modelo que cabe na fase atual e reavaliam em 24 a 36 meses."
      },
      {
        "q": "Qual modelo dá mais dado sobre o portador?",
        "a": "Private label dá mais controle do dado, porque o arranjo é fechado e o emissor é o dono da operação. White label compartilha dado com banco ou IP parceiro conforme contrato e regulação. LGPD se aplica nos dois casos."
      }
    ],
    "sources": [
      {
        "label": "Planalto - Lei 12.865/2013",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12865.htm"
      },
      {
        "label": "Banco Central do Brasil - Arranjos de pagamentos integrantes do SPB",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/arranjosintegrantesspb"
      },
      {
        "label": "Banco Central do Brasil - Arranjos de pagamento não integrantes do SPB",
        "url": "https://www.bcb.gov.br/estabilidadefinanceira/arranjosnaointegrantesspb"
      }
    ],
    "howTo": null,
    "toc": [
      {
        "id": "resumo-em-60-segundos-qual-é-qual",
        "title": "Resumo em 60 segundos: qual é qual"
      },
      {
        "id": "o-que-é-um-cartão-white-label",
        "title": "O que é um cartão white label"
      },
      {
        "id": "o-que-é-um-cartão-private-label",
        "title": "O que é um cartão private label"
      },
      {
        "id": "principais-diferenças-entre-white-label-e-private-label",
        "title": "Principais diferenças entre white label e private label"
      },
      {
        "id": "quando-escolher-white-label",
        "title": "Quando escolher white label"
      },
      {
        "id": "quando-escolher-private-label",
        "title": "Quando escolher private label"
      },
      {
        "id": "quanto-custa-cada-modelo",
        "title": "Quanto custa cada modelo"
      },
      {
        "id": "e-o-co-branded-onde-ele-se-encaixa",
        "title": "E o co-branded? Onde ele se encaixa"
      },
      {
        "id": "matriz-de-decisão-por-cenário-de-negócio",
        "title": "Matriz de decisão por cenário de negócio"
      },
      {
        "id": "como-a-just-opera-os-dois-modelos",
        "title": "Como a JUST opera os dois modelos"
      },
      {
        "id": "perguntas-frequentes",
        "title": "Perguntas frequentes"
      }
    ],
    "featured": false,
    "ogImage": "/og/white-label-vs-private-label.png"
  }
];
