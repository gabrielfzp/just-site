/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect, useRef, useMemo } from "react";

// I18N — Language Context & Translations
// ========================================
export const LangContext = React.createContext({ lang: "pt-BR", setLang: () => {} });
export const useLang = () => React.useContext(LangContext);

export const T18N = {
  "pt-BR": {
    nav: {
      home: "Home", products: "Produtos", technology: "Tecnologia",
      cases: "Cases", content: "Conteúdos", about: "Sobre", contact: "Fale Conosco",
    },
    footer: {
      tagline: "Plataforma de produtos financeiros digitais. Tecnologia pronta para operar, escalar e evoluir.",
      productsLabel: "Produtos", companyLabel: "Empresa", contactLabel: "Contato",
      ecosystem: "Ecossistema e associações", techPartners: "Parceiros tecnológicos",
      legal: "A JUST desenvolve e integra a tecnologia que viabiliza produtos financeiros digitais. Quando o projeto envolve serviços regulados, a operação financeira é realizada por instituições parceiras autorizadas, conforme o desenho regulatório aplicável.",
      rights: "© 2026 JUST. Todos os direitos reservados.", privacy: "Política de Privacidade",
    },
    home: {
      heroTag: "Plataforma de produtos financeiros",
      heroLine1: "Sua fintech.", heroLine2: "Pronta para operar",
      heroLine3: "em semanas, não meses.",
      heroSubtitle: "Plataformas financeiras completas, com tecnologia modular e integrações prontas para escalar.",
      step1: "Configure", step2: "Personalize", step3: "Lance",
      cta1: "Fale com um especialista", cta2: "Ver cases",
      ecosystemLabel: "Ecossistema e parceiros",
      deparaTag: "Por que a JUST",
      deparaTitle: "O que muda quando você\nopera com a gente.",
      deparaWithout: "Sem a JUST", deparaWith: "Com a JUST",
      productsTag: "Produtos",
      productsTitle: "Módulos prontos para cada\nvertical do seu negócio.",
      productsSubtitle: "Cada produto opera de forma independente ou combinada. White-label completo.",
      cardsTag: "Arranjos de cartão",
      cardsTitle: "Bandeirado ou Private Label?", cardsGradient: "Você escolhe.",
      cardsSubtitle: "Operamos com arranjo aberto (bandeirado), fechado (private label) ou híbrido. A decisão é estratégica e nós ajudamos você a tomar.",
      cardsOpenLabel: "Arranjo Aberto", cardsOpenTitle: "Cartão Bandeirado",
      cardsClosedLabel: "Arranjo Fechado", cardsClosedTitle: "Cartão Private Label",
      cardsOr: "ou",
      cardsPioneer: "Pioneiros no Brasil",
      cardsHybridTitle: "Por que escolher um\nse você pode ter ", cardsHybridGradient: "os dois?",
      cardsHybridDesc: "Somos pioneiros no Brasil em operar o modelo híbrido: arranjo aberto e fechado na mesma plataforma, com experiência unificada. Você decide quais usuários usam bandeirado e quais usam private label.",
      processTag: "Como funciona",
      processTitle: "Do briefing ao produto no ar.", processGradient: "Sem surpresas.",
      processSubtitle: "Um processo estruturado que já entregou 18+ fintechs. Cada etapa tem escopo, prazo e entregável claro.",
      process1Title: "Discovery e diagnóstico",
      process1Desc: "Mapeamos o modelo de negócio, fluxos financeiros, integradores necessários e regras de operação. Sem esse alinhamento, não avançamos.",
      process2Title: "Arquitetura e configuração",
      process2Desc: "Ativamos os módulos da nossa stack que se encaixam no projeto. 70-80% da tecnologia já está pronta. O resto é configuração, não construção.",
      process3Title: "Integração e homologação",
      process3Desc: "Conectamos BaaS, credenciadoras e parceiros. Cada sprint tem entrega visível. Você acompanha em tempo real pelo nosso painel.",
      process4Title: "Go-live e evolução",
      process4Desc: "Produto no ar com monitoramento 24/7, suporte dedicado e roadmap de evolução. Não entregamos e sumimos.",
      summary1: "~90 dias do kick-off ao go-live", summary1sub: "Produto padrão, sem customizações complexas",
      summary2: "70-80% da stack ja pronta", summary2sub: "Configuração, não construção do zero",
      summary3: "Sprints com entrega visível", summary3sub: "Você acompanha cada etapa",
      metricsTPV: "TPV processado", metricsTX: "Transações processadas",
      metricsUsers: "Usuários", metricsClients: "Clientes",
      casesTag: "Cases", casesTitle: "Resultados reais. Fintechs em produção.",
      casesSubtitle: "Conheça alguns dos produtos que construímos e operamos com nossos parceiros.",
      ctaFinalTitle: "Pronto para ter sua própria fintech?",
      ctaFinalSubtitle: "Converse com nosso time e veja como nossos produtos se aplicam ao seu negócio.",
      ctaFinalBtn: "Agendar uma conversa",
      comparisons: [
        { sem: { title: "12-24 meses para lançar", desc: "Projetos longos, estouro de prazo e budget. Produto chega tarde ao mercado." }, com: { title: "Produto no ar em semanas", desc: "Stack com 70-80% de reuso. Go-live em semanas, não anos." } },
        { sem: { title: "Lock-in com um único provedor", desc: "Preso a um BaaS ou adquirente. Sem flexibilidade para mudar ou negociar." }, com: { title: "Multi-provider, sem lock-in", desc: "Arquitetura multi-BaaS e multi-adquirente. Troque sem reescrever." } },
        { sem: { title: "Complexidade regulatória", desc: "Tempo e dinheiro gastos com compliance bancário ao invés de produto." }, com: { title: "Regulatório resolvido", desc: "Operamos sobre BaaS regulados. Com isso nosso time pode se focar 100% no desenvolvimento do seu produto." } },
        { sem: { title: "Tecnologia que não escala", desc: "Funciona com 1.000 usuários. Quebra com 50.000." }, com: { title: "Escala comprovada", desc: "R$900M+ processados, 500k+ usuários. Infraestrutura testada em produção." } },
        { sem: { title: "White-labels genéricos", desc: "Produto de prateleira com cara de template. Mesma experiência pra todo mundo." }, com: { title: "Produtos customizados de verdade", desc: "Jornada, regras e visual desenhados pro seu negócio. Ninguém sabe que somos nós." } },
        { sem: { title: "Time sem experiência no segmento", desc: "Desenvolvedores generalistas aprendendo fintech do zero. Curva longa e cara." }, com: { title: "Time especialista no segmento", desc: "+5 anos construindo fintechs. Benefícios, frotas, banking, despesas. Já passamos por isso." } },
      ],
      cardsOpenFeatures: ["Aceitação ampla em toda rede credenciada", "Mastercard, Visa ou Elo", "Ideal para benefícios e banking com capilaridade", "Regras de MCC e controle por categoria"],
      cardsClosedFeatures: ["Rede própria de aceitação, controle total", "Sua marca no cartão, sem bandeira de terceiro", "Ideal para frotas, vales e ecossistemas fechados", "Autorizador próprio com regras em tempo real"],
      hybridFeatures: [
        { bold: "Bandeirado para uso geral", text: " com aceitação em toda rede credenciada Mastercard/Visa" },
        { bold: "Private label para rede própria", text: " com regras específicas e controle total do ecossistema" },
        { bold: "Dois meios de uso,", text: " uma experiência unificada para o seu usuário" },
      ],
    },
    products: {
      beneficios: { name: "JUST Benefits", desc: "Arranjo aberto, fechado ou híbrido. Múltiplos saldos com regras customizáveis e controle total.", headerDesc: "Benefícios flexíveis com arranjo customizável" },
      frotas: { name: "JUST Fleet", desc: "Abastecimento, pedágio, manutenção. Controle financeiro por veículo com regras em tempo real.", headerDesc: "Controle financeiro completo por veículo" },
      banking: { name: "JUST Banking", desc: "Conta digital, cartão, PIX, transferências. Banking completo e white-label sobre BaaS.", headerDesc: "Conta, cartão e PIX white-label" },
      despesas: { name: "JUST Expense", desc: "Cartões corporativos com políticas de uso, limites e conciliação automática.", headerDesc: "Cartões corporativos com políticas inteligentes" },
      antecipacao: { name: "JUST Credit", desc: "Private label, antecipação e recebíveis. Produtos de crédito white-label integrados ao seu negócio.", headerDesc: "Produtos de crédito white-label" },
      "sob-demanda": { name: "JUST Custom", desc: "Produto que não cabe em prateleira? Arquitetamos e construímos sob medida.", headerDesc: "Produtos financeiros sob medida" },
      sentinel: { name: "JUST Sentinel", desc: "Detecção de fraude em tempo real e risk scoring para autorização de cartões.", headerDesc: "Antifraude AI-native em tempo real" },
    },
    sobre: {
      tag: "Quem somos", h1: "Criada por experts",
      intro: "A JUST nasceu em 2020 para resolver um problema simples e recorrente no mercado financeiro: promessas que não viram produto. Construímos fintechs para quem cansou de esperar.",
      tesesTag: "Nossa tese", tesesTitle: "Execução acima\nde promessa.",
      tesesP1: "Acreditamos que o maior gargalo da indústria não é ideia, nem tecnologia. É execução.",
      tesesP2: "Muitos projetos falham porque tentam recriar um banco inteiro a cada novo produto, assumindo complexidades regulatórias e técnicas que não agregam valor à jornada do cliente.",
      tesesP3: "A JUST segue outro caminho. Trabalhamos sobre estruturas de BaaS robustas e consolidadas, eliminamos o peso regulatório e focamos 100% no produto, na experiência do usuário e na operação financeira.",
      principiosTag: "Como pensamos", principiosTitle: "Princípios que guiam\ncada decisão.",
      p1Title: "Produto, não promessa", p1Desc: "Não vendemos roadmaps ou protótipos. Entregamos plataformas em produção, operando desde o dia 1. Produto financeiro só existe quando está no ar.",
      p2Title: "Estrutura gera velocidade", p2Desc: "Stack proprietária com 70-80% de reuso entre projetos. Módulos prontos, governança definida. Fintechs completas em meses, não anos.",
      p3Title: "Parceiro estratégico", p3Desc: "Atuamos como braço tecnológico do negócio. Assumimos responsabilidade pelo produto e tomamos decisões com base no que precisa funcionar.",
      trajetoriaTag: "Trajetória", trajetoriaTitle: "Do primeiro produto\não ecossistema.",
      liderancaTag: "Liderança", liderancaTitle: "Experiência que sustenta\na entrega.",
      commitment: "Nosso compromisso", commitmentTitle: "Fintechs podem ser construidas em meses, não em anos.",
      commitmentDesc: "Sem reinvenção de roda. Sem burocracia desnecessária. Sem promessas vazias. Plataformas financeiras completas para quem precisa operar rápido, com solidez técnica e foco total no negócio. Esse é o nosso compromisso desde 2020.",
      cta: "Quer conhecer nossos produtos?", ctaBtn: "Fale com nosso time",
      timeline: [
        { y: "2020", t: "Fundação", d: "Gabriel Pires funda a JUST com um princípio claro: produto financeiro só existe quando está operando." },
        { y: "2021", t: "Primeiros clientes", d: "Início das operações com eFleet e primeiros projetos de benefícios e gestão de frotas." },
        { y: "2022", t: "Stack própria", d: "Stack proprietária atinge 70% de reuso entre projetos. Velocidade de entrega se torna diferencial competitivo." },
        { y: "2023", t: "Escala", d: "10+ clientes ativos. R$500M+ em processamento anual. Modelo de plataforma validado pelo mercado." },
        { y: "2024", t: "Validação", d: "ViaSoftPay do zero a produção em 45 dias. NPS 76. Entrada em novos nichos: banking, despesas, crédito." },
        { y: "2025", t: "Expansão", d: "18+ clientes ativos. 40k+ usuários. R$900M+ TPV processado. Operação consolidada em múltiplas verticais." },
      ],
    },
    cases: {
      tag: "Cases", h1: "Resultados reais. Fintechs em produção.",
      tpvLabel: "TPV processado", txLabel: "Transações processadas",
      usersLabel: "Usuários", clientsLabel: "Clientes",
      cta: "Quer resultados parecidos?", ctaBtn: "Agendar uma reunião",
      casesList: [
        { tag: "Benefícios", name: "ViaSoftPay", headline: "Do zero à produção em 45 dias", items: ["45 dias do início ao go-live", "100k+ usuários ativos", "R$500M+ processamento anual", "NPS 100"] },
        { tag: "Frotas", name: "eFleet", headline: "5+ anos de parceria, 10+ módulos", items: ["5+ anos de parceria contínua", "10+ módulos em produção", "R$500M+ processamento anual"] },
        { tag: "Arranjo Híbrido", name: "SmartVale", headline: "Primeiro arranjo híbrido do portfolio", items: ["Arranjo híbrido em produção", "Fechado + aberto integrados", "Regras customizadas por saldo"] },
        { tag: "Benefícios + Crédito", name: "KPI", headline: "266% de crescimento em transações", items: ["266% crescimento", "Benefícios + crédito integrados", "Produto combinado único"] },
      ],
    },
    contato: {
      h1: "Vamos construir sua fintech.", subtitle: "Nosso time retorna em ate 24h uteis.",
      nameLabel: "Nome *", emailLabel: "Email corporativo *",
      companyLabel: "Empresa *", phoneLabel: "Telefone",
      productLabel: "Produto de interesse *", productPlaceholder: "Selecione",
      projectLabel: "Sobre o projeto", projectPlaceholder: "Quantos usuários? Prazo? Cenário atual?",
      submitBtn: "Enviar mensagem", sendingBtn: "Enviando...",
      successTitle: "Mensagem enviada!", successMsg: "Retornamos em ate 24h uteis.",
      errorRequired: "Preencha todos os campos obrigatórios.",
      errorSend: "Erro ao enviar. Tente novamente ou entre em contato pelo email contato@wearejust.it",
      emailLabel2: "Email", whatsappLabel: "WhatsApp",
      locationLabel: "Localização", hoursLabel: "Horário", hours: "Seg-Sex, 9h-18h",
      faqTitle: "Perguntas frequentes",
      faqs: [
        { q: "Quais tipos de cartões a JUST desenvolve?", a: "A JUST nasceu com forte atuação em arranjos fechados (cartões private label), onde operamos tecnologias próprias de processamento. Hoje, também desenvolvemos produtos integrados a arranjos abertos, trabalhando com emissores regulados de Visa, Mastercard e Elo. Isso nos permite criar arquiteturas híbridas, orquestrando múltiplos provedores de pagamento, emissores e componentes de processamento, sempre de acordo com o modelo de negócio e o nível de complexidade do projeto. Não estamos limitados a um único arranjo ou fornecedor. Projetamos a melhor combinação técnica e regulatória para cada caso." },
        { q: "A JUST vende licenças de white label?", a: "Não vendemos licenças de white label no modelo tradicional. Acreditamos que cada negócio possui identidade, estratégia e regras próprias. Por isso, tratamos cada projeto de forma individualizada, mesmo partindo de uma base tecnológica comum. Utilizamos componentes e frameworks já consolidados para acelerar o início do projeto, mas cada solução evolui com regras de negócio, fluxos, integrações e experiências específicas, alinhadas à realidade do cliente. Na prática, entregamos plataformas sob medida, não produtos genéricos customizados." },
        { q: "A JUST é uma entidade regulada pelo Banco Central do Brasil?", a: "Não. A JUST é uma provedora de tecnologia. Atuamos no desenvolvimento de plataformas para empresas que podem ou não estar inseridas em ambientes regulados pelo Banco Central do Brasil, dependendo do tipo de produto. Algumas soluções, como Benefícios Flexíveis, não exigem regulação bancária. Outras, como Despesas Corporativas, contas de pagamento ou emissão em arranjos abertos, podem exigir. Nesses casos, trabalhamos em conjunto com parceiros regulados, responsáveis pela carga regulatória, enquanto a JUST desenvolve e integra toda a camada tecnológica, garantindo que o produto final esteja em conformidade com as normas aplicáveis." },
        { q: "A JUST é uma software house?", a: "Sim, mas não apenas isso. Somos especialistas em plataformas de meios de pagamento, porém atuamos como parceiros estratégicos dos nossos clientes. Nosso trabalho vai além do desenvolvimento técnico e inclui: apoio na definição do modelo de negócio, arquitetura de produto e diferenciação competitiva, construção da plataforma tecnológica, e suporte à operação e evolução contínua do produto. Nosso foco é viabilizar negócios financeiros sustentáveis, não apenas entregar código." },
        { q: "Quero criar uma fintech, mas não sei por onde começar. A JUST consegue ajudar?", a: "Sim. Além da área de desenvolvimento, contamos com a JUST Consulting, uma unidade focada em apoiar empresas desde as fases iniciais do projeto. Auxiliamos em ideação e validação do modelo de negócio, definição do produto financeiro, avaliação regulatória e estrutural, e planejamento da execução técnica. O objetivo é reduzir erros comuns, acelerar decisões críticas e construir um produto viável desde o início." },
        { q: "A JUST assume risco regulatório ou financeiro da operação?", a: "Não. A JUST é responsável pela camada tecnológica. O risco regulatório e financeiro permanece com o cliente e, quando aplicável, com os parceiros regulados envolvidos na operação. Nosso papel é garantir que a tecnologia suporte corretamente as exigências regulatórias definidas para o produto." },
        { q: "Em quanto tempo meu produto pode ir ao ar?", a: "O prazo varia conforme o nível de complexidade, integrações e exigências regulatórias. Projetos mais simples podem ser lançados em poucos meses. Projetos mais complexos exigem fases adicionais de arquitetura, homologação e testes. Preferimos definir prazos realistas desde o início, priorizando segurança, estabilidade e sustentabilidade da operação." },
      ],
    },
    stack: {
      tag: "Tecnologia",
      h1: "A base técnica que sustenta produtos financeiros em produção.",
      subtitle: "Todo produto financeiro sólido começa por uma fundação técnica bem definida. A JUST constrói essa base para garantir segurança, escala e evolução contínua.",
      platformTag: "Plataforma", platformTitle: "Componentes da plataforma.",
      platformSubtitle: "Cada componente foi construído para operar de forma independente e integrada. Seu produto. Suas regras. Sem gambiarras.",
      integrationsTag: "Integrações", integrationsTitle: "Multi-provider por design.",
      integrationsSubtitle: "Nenhum produto financeiro deve depender de um único fornecedor. O produto continua o mesmo. Os fornecedores podem mudar.",
      securityTag: "Segurança", securityTitle: "Segurança como processo, não como feature.",
      securitySubtitle: "Produtos financeiros não podem falhar em produção. Nossa arquitetura parte desse princípio.",
      cta: "Quer entender como se aplica ao seu caso?", ctaBtn: "Fale com nosso time técnico",
      secHighlightLabels: ["Recorrente com retest formal", "Partner com infra dedicada", "Compliance implementado", "Mobile Top 10 aplicado"],
      secCards: [
        { title: "Defense in Depth", desc: "Proteção em camadas: WAF em borda, API Gateway com rate limiting, autenticação JWT, isolamento de rede via VPC." },
        { title: "PCI-Aware Architecture", desc: "Arquitetura desenhada com consciência dos padrões PCI DSS. Dados sensíveis sob custodia da instituicao financeira regulada." },
        { title: "AWS Infrastructure", desc: "VPC isolada, subnets privadas, criptografia KMS, TLS 1.3, RDS Multi-AZ com backups diarios." },
        { title: "Monitoramento 24/7", desc: "Dashboards Grafana em tempo real. Logs centralizados com retenção para auditoria. Alertas automáticos." },
        { title: "Pen Test Recorrente", desc: "Testes de intrusão Gray/White Box com ciclo semestral. Retest formal de vulnerabilidades críticas e altas." },
        { title: "Mobile Security (OWASP)", desc: "Runtime hardening: detecção de root/jáilbreak, SSL Pinning, detecção de proxy/MITM. Confianca minima no cliente." },
      ],
      mpSwapBold: "Troque de provider sem impacto no produto.",
      mpSwapText: " A camada de abstração da JUST isola seu produto das dependências de fornecedores. Migre, adicione ou remova providers em produção.",
    },
    solution: {
      modelsTitle: "Modelos de operação", capabilitiesTitle: "Capacidades",
      ctaTitle: "Quer entender como funciona?", ctaBtn: "Agendar uma conversa",
    },
    privacy: {
      tag: "Privacidade",
      h1: "Política de Privacidade",
      subtitle: "Como a JUST trata dados pessoais em seus canais digitais, comerciais e de relacionamento.",
      updatedLabel: "Última atualização",
      updatedAt: "20 de abril de 2026",
      introTitle: "Compromisso com transparência",
      intro: [
            "Esta Política de Privacidade explica, de forma objetiva, como a JUST coleta, utiliza, armazena, compartilha e protege dados pessoais relacionados ao uso deste site, aos formulários de contato e às interações comerciais com nosso time.",
        "A JUST atua como provedora de tecnologia para plataformas financeiras digitais. Dependendo do projeto, também podemos tratar dados em nome de clientes e parceiros, conforme contratos específicos. Esta política cobre principalmente os dados tratados diretamente pela JUST em seus próprios canais."
      ],
      sections: [
        {
          title: "1. Dados que podemos coletar",
          body: [
            "Dados de identificação e contato, como nome, email corporativo, telefone, empresa, cargo e mensagens enviadas por formulários, email, WhatsApp, LinkedIn ou outros canais.",
            "Dados profissionais e de negócio compartilhados durante conversas comerciais, como produto de interesse, tamanho da operação, necessidades técnicas e contexto do projeto.",
            "Dados técnicos e de navegação, como endereço IP, identificadores de dispositivo, navegador, sistema operacional, páginas acessadas, origem de acesso, data, horário e informações coletadas por cookies ou tecnologias semelhantes.",
            "Não solicitamos dados pessoais sensíveis em nossos formulários. Caso você envie esse tipo de informação espontaneamente, poderemos desconsidera-la, exclui-la ou trata-la apenas quando houver base legal adequada."
          ]
        },
        {
          title: "2. Para que usamos os dados",
          body: [
            "Responder solicitações de contato, agendar conversas, qualificar oportunidades e conduzir relações comerciais ou pré-contratuais.",
            "Entender o interesse em nossos produtos, preparar propostas, demonstrações e materiais técnicos adequados ao contexto informado.",
            "Operar, medir, proteger e melhorar o site, nossos canais digitais e a experiência de navegação.",
            "Enviar comunicações institucionais, comerciais ou técnicas relacionadas a JUST, sempre observando preferências, opt-out e requisitos legais aplicáveis.",
            "Cumprir obrigações legais, regulacionais, contratuais, auditorias, requisições de autoridades e exercício regular de direitos."
          ]
        },
        {
          title: "3. Bases legais",
          body: [
            "Tratamos dados pessoais com base nas hipóteses previstas na legislação aplicável, incluindo execução de contrato ou procedimentos preliminares, cumprimento de obrigação legal ou regulatória, legítimo interesse, consentimento quando necessário e exercício regular de direitos.",
            "Quando utilizarmos legítimo interesse, buscamos avaliar a proporcionalidade do tratamento e adotar medidas para reduzir impactos indevidos aos titulares."
          ]
        },
        {
          title: "4. Cookies e tecnologias semelhantes",
          body: [
            "Podemos utilizar cookies essenciais para funcionamento do site e tecnologias de medição ou analytics para entender desempenho, origem de acesso e interações com as páginas.",
            "Você pode bloquear, apagar ou gerenciar cookies nas configurações do seu navegador. Algumas funcionalidades podem ficar indisponíveis ou menos eficientes se cookies essenciais forem desativados."
          ]
        },
        {
          title: "5. Compartilhamento de dados",
          body: [
            "Podemos compartilhar dados com fornecedores de tecnologia, hospedagem, segurança, analytics, CRM, comunicação, automação, atendimento e outras ferramentas necessárias para operar nossos canais.",
            "Também poderemos compartilhar informações com parceiros de negócio, consultores, auditores, autoridades públicas ou terceiros quando isso for necessário para cumprir obrigações legais, proteger direitos, responder solicitações ou viabilizar uma interacao solicitada por você.",
            "Quando terceiros tratarem dados em nosso nome, buscamos estabelecer obrigações de confidencialidade, segurança e uso compatível com as finalidades informadas."
          ]
        },
        {
          title: "6. Transferencias internacionais",
          body: [
            "Alguns fornecedores ou sistemas utilizados pela JUST podem armazenar ou processar dados fora do Brasil. Nesses casos, adotamos medidas compatíveis com a legislação aplicável para proteger os dados transferidos."
          ]
        },
        {
          title: "7. Retenção e descarte",
          body: [
            "Mantemos dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política, atender obrigações legais ou regulatórias, preservar registros comerciais e exercer direitos em processos administrativos, judiciais ou arbitrais.",
            "Quando os dados deixarem de ser necessários, poderemos elimina-los, anonimiza-los ou mante-los apenas quando houver base legal para conservação."
          ]
        },
        {
          title: "8. Direitos dos titulares",
          body: [
            "Nos termos da LGPD, você pode solicitar confirmação de tratamento, acesso, correção, anonimização, bloqueio ou eliminação de dados, portabilidade quando aplicável, informações sobre compartilhamento, revisão de decisões automatizadas quando existentes, oposição ao tratamento e revogação de consentimento.",
            "Para exercer seus direitos, envie uma solicitação para contato@wearejust.it. Podemos solicitar informações adicionais para confirmar sua identidade e proteger seus dados."
          ]
        },
        {
          title: "9. Segurança da informação",
          body: [
            "Adotamos medidas técnicas e organizacionais para proteger dados pessoais contra acessos não autorizados, perda, alteração, divulgação indevida ou tratamento inadequado.",
            "Apesar dos nossos esforços, nenhum ambiente digital é completamente imune a riscos. Caso identifiquemos incidente relevante envolvendo dados pessoais, avaliaremos as medidas cabíveis e as comunicações exigidas pela legislação."
          ]
        },
        {
          title: "10. Alterações nesta política",
          body: [
            "Podemos atualizar esta Política de Privacidade para refletir mudanças legais, técnicas, operacionais ou comerciais. A versão vigente será sempre a publicada nesta página, com a data de última atualização."
          ]
        }
      ],
      contactTitle: "Canal de privacidade",
      contactText: "Para dúvidas sobre esta política ou solicitações relacionadas aos seus dados pessoais, fale com a JUST pelo email abaixo.",
      contactEmail: "contato@wearejust.it"
    },
    sentinel: {
      metaTitle: "Sentinel — Antifraude em tempo real | JUST",
      metaDesc: "Sentinel é a camada antifraude da JUST: risk scoring em tempo real para autorização de cartões, com modelos proprietários treinados em 6M+ transações.",
      heroTag: "Em desenvolvimento — Lançamento Q1.26", heroAiTag: "AI-Powered",
      h1: "Proteção inteligente em cada transação",
      heroSubtitle: "Sentinel é a camada de inteligência antifraude da JUST: risk scoring em tempo real em cada autorização de cartão, com latência inferior a 100ms e modelos proprietários treinados sobre milhões de transações reais.",
      heroCta: "Quero conhecer o Sentinel",
      whatTitle: "Antifraude construído para a infraestrutura JUST",
      whatText: "Nascido como parte da plataforma modular da JUST, o Sentinel analisa cada autorização de cartão em tempo real, identificando padrões de risco antes que a transação seja aprovada. Diferente de soluções genéricas de mercado, o Sentinel é treinado continuamente sobre o dataset proprietário de transações da plataforma JUST, entregando precisão específica para os contextos de uso dos nossos clientes.",
      benefitsTitle: "Por que escolher o Sentinel",
      b1Title: "Decisão em menos de 100ms",
      b1Desc: "Inferência acelerada por GPU integrada ao fluxo transacional, sem adicionar latência perceptível ao usuário final.",
      b2Title: "Modelos treinados com dados reais",
      b2Desc: "Dataset proprietário com mais de 6 milhões de transações reais, com reentreinamento contínuo para adaptação a novos padrões de fraude.",
      b3Title: "Redução de chargebacks",
      b3Desc: "Identificação precoce de transações suspeitas reduz perdas por fraude e melhora indicadores de aprovação junto às bandeiras.",
      b4Title: "Integrado ao core da JUST",
      b4Desc: "Sem necessidade de contratar fornecedores externos: Sentinel já nasce conectado à plataforma de processamento e backoffice financeiro da JUST.",
      techTitle: "Construido sobre infraestrutura de ponta",
      techSubtitle: "Sentinel combina o melhor da engenharia de pagamentos com tecnologia de inteligência artificial de última geração.",
      techBullets: ["Inferência em GPU NVIDIA (G5, P4d) na AWS", "Modelos de deep learning e gradient boosting", "Pipelines de reentreinamento contínuo", "Arquitetura event-driven integrada ao core transacional", "Exposição via API REST para parceiros e emissores"],
      forWhoTitle: "Construido para quem processa pagamentos em escala",
      forWhoItems: ["Emissores de cartão corporativo e de benefícios", "Fintechs de despesas corporativas e frotas", "Programas BaaS que precisam de proteção adicional sobre a autorização", "Redes varejistas com private label", "Qualquer operação com volume relevante de transações em cartão"],
      statusTitle: "Onde o Sentinel está agora",
      statusText: "Sentinel está em fase final de desenvolvimento, com lançamento previsto para Q1.26. Clientes atuais da plataforma JUST terão acesso preferencial na fase de lançamento. Entre em contato para conhecer a roadmap detalhada e discutir casos de uso específicos.",
      statusCta: "Quero estar na primeira onda",
      ctaFinal: "Transforme o risco em inteligência. Fale com nosso time.",
      ctaFinalBtn: "Falar com especialista",
    },
  },
  "en": {
    nav: {
      home: "Home", products: "Products", technology: "Technology",
      cases: "Cases", content: "Content", about: "About", contact: "Contact Us",
    },
    footer: {
      tagline: "Digital financial product platform. Technology ready to operate, scale and evolve.",
      productsLabel: "Products", companyLabel: "Company", contactLabel: "Contact",
      ecosystem: "Ecosystem & associations", techPartners: "Technology partners",
      legal: "JUST builds and integrates the technology that enables digital financial products. When a project involves regulated services, the financial operation is handled by authorized partner institutions according to the applicable regulatory design.",
      rights: "© 2026 JUST. All rights reserved.", privacy: "Privacy Policy",
    },
    home: {
      heroTag: "Financial product platform",
      heroLine1: "Your fintech.", heroLine2: "Ready to operate",
      heroLine3: "in weeks, not months.",
      heroSubtitle: "Complete financial platforms, with modular technology and integrations ready to scale.",
      step1: "Configure", step2: "Customize", step3: "Launch",
      cta1: "Talk to a specialist", cta2: "View cases",
      ecosystemLabel: "Ecosystem & partners",
      deparaTag: "Why JUST",
      deparaTitle: "What changes when you\nbuild with us.",
      deparaWithout: "Without JUST", deparaWith: "With JUST",
      productsTag: "Products",
      productsTitle: "Ready-made modules for each\nvertical of your business.",
      productsSubtitle: "Each product operates independently or combined. Full white-label.",
      cardsTag: "Card arrangements",
      cardsTitle: "Branded or Private Label?", cardsGradient: "You choose.",
      cardsSubtitle: "We operate with open arrangement (branded), closed (private label) or hybrid. The decision is strategic and we help you make it.",
      cardsOpenLabel: "Open Arrangement", cardsOpenTitle: "Branded Card",
      cardsClosedLabel: "Closed Arrangement", cardsClosedTitle: "Private Label Card",
      cardsOr: "or",
      cardsPioneer: "Pioneers in Brazil",
      cardsHybridTitle: "Why choose one\nwhen you can have ", cardsHybridGradient: "both?",
      cardsHybridDesc: "We are pioneers in Brazil in operating the hybrid model: open and closed arrangement on the same platform, with a unified experience. You decide which users use branded and which use private label.",
      processTag: "How it works",
      processTitle: "From briefing to live product.", processGradient: "No surprises.",
      processSubtitle: "A structured process that has already delivered 18+ fintechs. Each stage has clear scope, deadline and deliverables.",
      process1Title: "Discovery & diagnosis",
      process1Desc: "We map the business model, financial flows, required integrations and operating rules. Without this alignment, we don't proceed.",
      process2Title: "Architecture & configuration",
      process2Desc: "We activate the modules from our stack that fit the project. 70-80% of the technology is already ready. The rest is configuration, not construction.",
      process3Title: "Integration & certification",
      process3Desc: "We connect BaaS, acquirers and partners. Each sprint has visible delivery. You follow along in real time via our dashboard.",
      process4Title: "Go-live & evolution",
      process4Desc: "Product live with 24/7 monitoring, dedicated support and evolution roadmap. We don't deliver and disappear.",
      summary1: "~90 days from kick-off to go-live", summary1sub: "Standard product, no complex customizations",
      summary2: "70-80% of the stack already ready", summary2sub: "Configuration, not building from scratch",
      summary3: "Sprints with visible delivery", summary3sub: "You track every step",
      metricsTPV: "Processed TPV", metricsTX: "Transactions processed",
      metricsUsers: "Users", metricsClients: "Clients",
      casesTag: "Cases", casesTitle: "Real results. Fintechs in production.",
      casesSubtitle: "Discover some of the products we built and operate with our partners.",
      ctaFinalTitle: "Ready to have your own fintech?",
      ctaFinalSubtitle: "Talk to our team and see how our products apply to your business.",
      ctaFinalBtn: "Schedule a call",
      comparisons: [
        { sem: { title: "12-24 months to launch", desc: "Long projects, blown deadlines and budgets. Product arrives late to market." }, com: { title: "Product live in weeks", desc: "Stack with 70-80% reuse. Go-live in weeks, not years." } },
        { sem: { title: "Lock-in with a single provider", desc: "Stuck with one BaaS or acquirer. No flexibility to switch or negotiate." }, com: { title: "Multi-provider, no lock-in", desc: "Multi-BaaS and multi-acquirer architecture. Switch without rewriting." } },
        { sem: { title: "Regulatory complexity", desc: "Time and money spent on banking compliance instead of product." }, com: { title: "Regulatory solved", desc: "We operate on regulated BaaS. Our team can focus 100% on building your product." } },
        { sem: { title: "Technology that doesn't scale", desc: "Works with 1,000 users. Breaks with 50,000." }, com: { title: "Proven scale", desc: "R$900M+ processed, 500k+ users. Infrastructure tested in production." } },
        { sem: { title: "Generic white-labels", desc: "Off-the-shelf product that looks like a template. Same experience for everyone." }, com: { title: "Truly custom products", desc: "Journey, rules and design tailored to your business. Nobody knows it's us." } },
        { sem: { title: "Team without segment experience", desc: "Generalist developers learning fintech from scratch. Long and expensive learning curve." }, com: { title: "Segment specialist team", desc: "5+ years building fintechs. Benefits, fleets, banking, expenses. We've been through it." } },
      ],
      cardsOpenFeatures: ["Wide acceptance across the entire credentialed network", "Mastercard, Visa or Elo", "Ideal for benefits and banking with capillarity", "MCC rules and category-level control"],
      cardsClosedFeatures: ["Own acceptance network, full control", "Your brand on the card, no third-party flag", "Ideal for fleets, vouchers and closed ecosystems", "Own authorizer with real-time rules"],
      hybridFeatures: [
        { bold: "Branded for general use", text: " with acceptance across the entire Mastercard/Visa credentialed network" },
        { bold: "Private label for own network", text: " with specific rules and full ecosystem control" },
        { bold: "Two payment modes,", text: " one unified experience for your user" },
      ],
    },
    products: {
      beneficios: { name: "JUST Benefits", desc: "Open, closed or hybrid arrangement. Multiple balances with customizable rules and full control.", headerDesc: "Flexible benefits with customizable arrangement" },
      frotas: { name: "JUST Fleet", desc: "Fuel, tolls, maintenance. Financial control per vehicle with real-time rules.", headerDesc: "Complete financial control per vehicle" },
      banking: { name: "JUST Banking", desc: "Digital account, card, PIX, transfers. Complete white-label banking on BaaS.", headerDesc: "Account, card and PIX white-label" },
      despesas: { name: "JUST Expense", desc: "Corporate cards with usage policies, limits and automatic reconciliation.", headerDesc: "Corporate cards with smart policies" },
      antecipacao: { name: "JUST Credit", desc: "Private label, payroll advance and receivables. White-label credit products integrated into your business.", headerDesc: "White-label credit products" },
      "sob-demanda": { name: "JUST Custom", desc: "Product that doesn't fit off the shelf? We architect and build it to order.", headerDesc: "Custom financial products" },
      sentinel: { name: "JUST Sentinel", desc: "Real-time fraud detection and risk scoring for card authorization.", headerDesc: "AI-native real-time fraud detection" },
    },
    sobre: {
      tag: "Who we are", h1: "Built by experts",
      intro: "JUST was founded in 2020 to solve a simple, recurring problem in the financial market: promises that never became products. We build fintechs for those tired of waiting.",
      tesesTag: "Our thesis", tesesTitle: "Execution above\npromise.",
      tesesP1: "We believe the biggest bottleneck in the industry is not ideas, nor technology. It's execution.",
      tesesP2: "Many projects fail because they try to recreate an entire bank for each new product, taking on regulatory and technical complexities that add no value to the customer journey.",
      tesesP3: "JUST takes a different path. We work on robust, consolidated BaaS structures, eliminate regulatory burden and focus 100% on the product, user experience and financial operation.",
      principiosTag: "How we think", principiosTitle: "Principles that guide\nevery decision.",
      p1Title: "Product, not promise", p1Desc: "We don't sell roadmaps or prototypes. We deliver platforms in production, operating from day 1. A financial product only exists when it's live.",
      p2Title: "Structure generates speed", p2Desc: "Proprietary stack with 70-80% reuse across projects. Ready modules, defined governance. Complete fintechs in months, not years.",
      p3Title: "Strategic partner", p3Desc: "We act as the technological arm of the business. We take responsibility for the product and make decisions based on what needs to work.",
      trajetoriaTag: "Journey", trajetoriaTitle: "From first product\nto ecosystem.",
      liderancaTag: "Leadership", liderancaTitle: "Experience that sustains\ndelivery.",
      commitment: "Our commitment", commitmentTitle: "Fintechs can be built in months, not years.",
      commitmentDesc: "No wheel reinvention. No unnecessary bureaucracy. No empty promises. Complete financial platforms for those who need to operate fast, with technical solidity and full business focus. That's our commitment since 2020.",
      cta: "Want to know our products?", ctaBtn: "Talk to our team",
      timeline: [
        { y: "2020", t: "Foundation", d: "Gabriel Pires founds JUST with a clear principle: a financial product only exists when it is operating." },
        { y: "2021", t: "First clients", d: "Operations begin with eFleet and first benefits and fleet management projects." },
        { y: "2022", t: "Proprietary stack", d: "Proprietary stack reaches 70% reuse across projects. Delivery speed becomes a competitive differentiator." },
        { y: "2023", t: "Scale", d: "10+ active clients. R$500M+ in annual processing. Platform model validated by the market." },
        { y: "2024", t: "Validation", d: "ViaSoftPay from zero to production in 45 days. NPS 76. Entry into new niches: banking, expenses, credit." },
        { y: "2025", t: "Expansion", d: "18+ active clients. 40k+ users. R$900M+ TPV processed. Operations consolidated across multiple verticals." },
      ],
    },
    cases: {
      tag: "Cases", h1: "Real results. Fintechs in production.",
      tpvLabel: "Processed TPV", txLabel: "Transactions processed",
      usersLabel: "Users", clientsLabel: "Clients",
      cta: "Want similar results?", ctaBtn: "Schedule a meeting",
      casesList: [
        { tag: "Benefits", name: "ViaSoftPay", headline: "From zero to production in 45 days", items: ["45 days from start to go-live", "100k+ active users", "R$500M+ annual processing", "NPS 100"] },
        { tag: "Fleet", name: "eFleet", headline: "5+ years of partnership, 10+ modules", items: ["5+ years of ongoing partnership", "10+ modules in production", "R$500M+ annual processing"] },
        { tag: "Hybrid Arrangement", name: "SmartVale", headline: "First hybrid arrangement in the portfolio", items: ["Hybrid arrangement in production", "Closed + open integrated", "Custom rules per balance"] },
        { tag: "Benefits + Credit", name: "KPI", headline: "266% growth in transactions", items: ["266% growth", "Benefits + credit integrated", "Unique combined product"] },
      ],
    },
    contato: {
      h1: "Let's build your fintech.", subtitle: "Our team responds within 24 business hours.",
      nameLabel: "Name *", emailLabel: "Corporate email *",
      companyLabel: "Company *", phoneLabel: "Phone",
      productLabel: "Product of interest *", productPlaceholder: "Select",
      projectLabel: "About the project", projectPlaceholder: "How many users? Timeline? Current scenário?",
      submitBtn: "Send message", sendingBtn: "Sending...",
      successTitle: "Message sent!", successMsg: "We'll respond within 24 business hours.",
      errorRequired: "Please fill in all required fields.",
      errorSend: "Error sending. Please try again or contact us at contato@wearejust.it",
      emailLabel2: "Email", whatsappLabel: "WhatsApp",
      locationLabel: "Location", hoursLabel: "Business hours", hours: "Mon-Fri, 9am-6pm",
      faqTitle: "Frequently asked questions",
      faqs: [
        { q: "What types of cards does JUST develop?", a: "JUST was built with a strong focus on closed arrangements (private label cards), where we operate our own processing technologies. Today, we also develop products integrated with open arrangements, working with regulated issuers of Visa, Mastercard and Elo. This allows us to create hybrid architectures, orchestrating multiple payment providers, issuers and processing components, always according to the business model and complexity level of the project. We are not limited to a single arrangement or vendor. We design the best technical and regulatory combination for each case." },
        { q: "Does JUST sell white label licenses?", a: "We do not sell white label licenses in the traditional model. We believe each business has its own identity, strategy and rules. We therefore treat each project individually, even when starting from a common technology base. We use consolidated components and frameworks to accelerate project start, but each solution evolves with specific business rules, flows, integrations and experiences aligned to the client's reality. In practice, we deliver tailored platforms, not generic customized products." },
        { q: "Is JUST a regulated entity by the Central Bank of Brazil?", a: "No. JUST is a technology provider. We operate in developing platforms for companies that may or may not be in environments regulated by the Central Bank of Brazil, depending on the product type. Some solutions, such as Flexible Benefits, do not require banking regulation. Others, such as Corporate Expenses, payment accounts or issuance in open arrangements, may require it. In these cases, we work together with regulated partners responsible for the regulatory burden, while JUST develops and integrates the entire technology layer, ensuring the final product complies with applicable regulations." },
        { q: "Is JUST a software house?", a: "Yes, but not only that. We are specialists in payment platform solutions, but we act as strategic partners for our clients. Our work goes beyond technical development and includes: support in defining the business model, product architecture and competitive differentiation, building the technology platform, and supporting the operation and continuous evolution of the product. Our focus is to enable sustainable financial businesses, not just deliver code." },
        { q: "I want to create a fintech but don't know where to start. Can JUST help?", a: "Yes. In addition to our development area, we have JUST Consulting, a unit focused on supporting companies from the initial phases of the project. We assist with ideation and business model validation, financial product definition, regulatory and structural assessment, and technical execution planning. The goal is to reduce common mistakes, accelerate critical decisions and build a viable product from the start." },
        { q: "Does JUST take on regulatory or financial risk of the operation?", a: "No. JUST is responsible for the technology layer. Regulatory and financial risk remains with the client and, where applicable, with the regulated partners involved in the operation. Our role is to ensure that the technology correctly supports the regulatory requirements defined for the product." },
        { q: "How long before my product can go live?", a: "The timeline varies according to the level of complexity, integrations and regulatory requirements. Simpler projects can be launched in a few months. More complex projects require additional phases of architecture, certification and testing. We prefer to set realistic timelines from the start, prioritizing safety, stability and operational sustainability." },
      ],
    },
    stack: {
      tag: "Technology",
      h1: "The technical foundation behind financial products in production.",
      subtitle: "Every solid financial product starts with a well-defined technical foundation. JUST builds this foundation to ensure security, scale and continuous evolution.",
      platformTag: "Platform", platformTitle: "Platform components.",
      platformSubtitle: "Each component was built to operate independently and integrated. Your product. Your rules. No workarounds.",
      integrationsTag: "Integrations", integrationsTitle: "Multi-provider by design.",
      integrationsSubtitle: "No financial product should depend on a single vendor. The product stays the same. The vendors can change.",
      securityTag: "Security", securityTitle: "Security as a process, not a feature.",
      securitySubtitle: "Financial products cannot fail in production. Our architecture starts from this principle.",
      cta: "Want to understand how it applies to your case?", ctaBtn: "Talk to our technical team",
      secHighlightLabels: ["Recurring with formal retest", "Partner with dedicated infra", "Compliance implemented", "Mobile Top 10 applied"],
      secCards: [
        { title: "Defense in Depth", desc: "Layered protection: edge WAF, API Gateway with rate limiting, JWT authentication, network isolation via VPC." },
        { title: "PCI-Aware Architecture", desc: "Architecture designed with PCI DSS standards awareness. Sensitive data under custody of the regulated financial institution." },
        { title: "AWS Infrastructure", desc: "Isolated VPC, private subnets, KMS encryption, TLS 1.3, Multi-AZ RDS with daily backups." },
        { title: "24/7 Monitoring", desc: "Real-time Grafana dashboards. Centralized logs with audit retention. Automated alerts." },
        { title: "Recurring Pen Test", desc: "Gray/White Box penetration testing with semi-annual cycle. Formal retest of critical and high vulnerabilities." },
        { title: "Mobile Security (OWASP)", desc: "Runtime hardening: root/jáilbreak detection, SSL Pinning, proxy/MITM detection. Minimum trust in the client." },
      ],
      mpSwapBold: "Switch providers without impacting the product.",
      mpSwapText: " JUST's abstraction layer isolates your product from vendor dependencies. Migrate, add or remove providers in production.",
    },
    solution: {
      modelsTitle: "Operating models", capabilitiesTitle: "Capabilities",
      ctaTitle: "Want to understand how it works?", ctaBtn: "Schedule a call",
    },
    privacy: {
      tag: "Privacy",
      h1: "Privacy Policy",
      subtitle: "How JUST handles personal data across its digital, commercial and relationship channels.",
      updatedLabel: "Last updated",
      updatedAt: "April 20, 2026",
      introTitle: "Commitment to transparency",
      intro: [
        "This Privacy Policy explains, in an objective way, how JUST collects, uses, stores, shares and protects personal data related to the use of this website, contact forms and commercial interactions with our team.",
        "JUST operates as a technology provider for digital financial platforms. Depending on the project, we may also process data on behalf of clients and partners under specific contracts. This policy mainly covers data processed directly by JUST in its own channels."
      ],
      sections: [
        {
          title: "1. Data we may collect",
          body: [
            "Identification and contact data, such as name, corporate email, phone number, company, job title and messages sent through forms, email, WhatsApp, LinkedIn or other channels.",
            "Professional and business data shared during commercial conversations, such as product of interest, operation size, technical needs and project context.",
            "Technical and browsing data, such as IP address, device identifiers, browser, operating system, accessed pages, traffic source, date, time and information collected by cookies or similar technologies.",
            "We do not request sensitive personal data in our forms. If you voluntarily submit this type of information, we may disregard it, delete it or process it only when there is an apprópriate legal basis."
          ]
        },
        {
          title: "2. How we use data",
          body: [
            "Respond to contact requests, schedule conversations, qualify opportunities and conduct commercial or pre-contractual relationships.",
            "Understand interest in our products and prepare proposals, demos and technical materials suited to the context provided.",
            "Operate, measure, protect and improve the website, our digital channels and the browsing experience.",
            "Send institutional, commercial or technical communications related to JUST, while respecting preferences, opt-out options and applicable legal requirements.",
            "Comply with legal, regulatory and contractual obligations, audits, authority requests and the regular exercise of rights."
          ]
        },
        {
          title: "3. Legal bases",
          body: [
            "We process personal data based on the legal grounds provided by applicable law, including contract performance or preliminary procedures, compliance with legal or regulatory obligations, legitimate interest, consent when required and regular exercise of rights.",
            "When we rely on legitimate interest, we seek to assess proportionality and adopt measures to reduce undue impact on data subjects."
          ]
        },
        {
          title: "4. Cookies and similar technologies",
          body: [
            "We may use essential cookies for website operation and measurement or analytics technologies to understand performance, traffic source and interactions with pages.",
            "You can block, delete or manage cookies in your browser settings. Some features may become unavailable or less efficient if essential cookies are disabled."
          ]
        },
        {
          title: "5. Data sharing",
          body: [
            "We may share data with technology, hosting, security, analytics, CRM, communication, automation, support and other providers needed to operate our channels.",
            "We may also share information with business partners, consultants, auditors, public authorities or third parties when necessary to comply with legal obligations, protect rights, respond to requests or enable an interaction requested by you.",
            "When third parties process data on our behalf, we seek to establish confidentiality, security and use obligations compatible with the purposes described."
          ]
        },
        {
          title: "6. International transfers",
          body: [
            "Some providers or systems used by JUST may store or process data outside Brazil. In these cases, we adopt measures compatible with applicable law to protect the transferred data."
          ]
        },
        {
          title: "7. Retention and deletion",
          body: [
            "We keep personal data for as long as needed to fulfill the purposes described in this policy, meet legal or regulatory obligations, preserve commercial records and exercise rights in administrative, judicial or arbitration proceedings.",
            "When data is no longer necessary, we may delete it, anonymize it or keep it only when there is a legal basis for retention."
          ]
        },
        {
          title: "8. Data subject rights",
          body: [
            "Under the LGPD, you may request confirmation of processing, access, correction, anonymization, blocking or deletion of data, portability where applicable, information about sharing, review of automated decisions when they exist, objection to processing and withdrawal of consent.",
            "To exercise your rights, send a request to contato@wearejust.it. We may ask for additional information to confirm your identity and protect your data."
          ]
        },
        {
          title: "9. Information security",
          body: [
            "We adopt technical and organizational measures to protect personal data against unauthorized access, loss, alteration, improper disclosure or inadequate processing.",
            "Despite our efforts, no digital environment is completely free of risks. If we identify a relevant incident involving personal data, we will assess the apprópriate measures and communications required by law."
          ]
        },
        {
          title: "10. Changes to this policy",
          body: [
            "We may update this Privacy Policy to reflect legal, technical, operational or commercial changes. The current version will always be the one published on this page, with the last updated date."
          ]
        }
      ],
      contactTitle: "Privacy channel",
      contactText: "For questions about this policy or requests related to your personal data, contact JUST through the email below.",
      contactEmail: "contato@wearejust.it"
    },
    sentinel: {
      metaTitle: "Sentinel — Real-time fraud detection | JUST",
      metaDesc: "Sentinel is JUST's anti-fraud layer: real-time risk scoring for card authorization, with proprietary models trained on 6M+ transactions.",
      heroTag: "In development — Q1.26 Launch", heroAiTag: "AI-Powered",
      h1: "Intelligent protection in every transaction",
      heroSubtitle: "Sentinel is JUST's anti-fraud intelligence layer: real-time risk scoring on every card authorization, with sub-100ms latency and proprietary models trained on millions of real transactions.",
      heroCta: "I want to know Sentinel",
      whatTitle: "Anti-fraud built for JUST infrastructure",
      whatText: "Born as part of JUST's modular platform, Sentinel analyzes each card authorization in real time, identifying risk patterns before the transaction is approved. Unlike generic market solutions, Sentinel is continuously trained on JUST's proprietary transaction dataset, delivering precision specific to our clients' use cases.",
      benefitsTitle: "Why choose Sentinel",
      b1Title: "Decision in under 100ms",
      b1Desc: "GPU-accelerated inference integrated into the transactional flow, without adding perceptible latency for the end user.",
      b2Title: "Models trained on real data",
      b2Desc: "Proprietary dataset with over 6 million real transactions, with continuous retraining to adapt to new fraud patterns.",
      b3Title: "Chargeback reduction",
      b3Desc: "Early identification of suspicious transactions reduces fraud losses and improves approval indicators with card networks.",
      b4Title: "Integrated into JUST's core",
      b4Desc: "No need to hire external vendors: Sentinel is born connected to JUST's processing platform and financial backoffice.",
      techTitle: "Built on cutting-edge infrastructure",
      techSubtitle: "Sentinel combines the best of payments engineering with state-of-the-art artificial intelligence technology.",
      techBullets: ["GPU inference on NVIDIA (G5, P4d) on AWS", "Deep learning and gradient boosting models", "Continuous retraining pipelines", "Event-driven architecture integrated into the transactional core", "REST API exposure for partners and issuers"],
      forWhoTitle: "Built for those who process payments at scale",
      forWhoItems: ["Corporate card and benefits card issuers", "Corporate expense and fleet management fintechs", "BaaS programs needing additional protection on authorization", "Retail networks with private label", "Any operation with relevant card transaction volume"],
      statusTitle: "Where Sentinel is now",
      statusText: "Sentinel is in its final development phase, with launch scheduled for Q1.26. Current JUST platform clients will have preferential access at launch. Contact us to learn about the detailed roadmap and discuss specific use cases.",
      statusCta: "I want to be in the first wave",
      ctaFinal: "Turn risk into intelligence. Talk to our team.",
      ctaFinalBtn: "Talk to a specialist",
    },
  },
};


// ========================================
// DESIGN TOKENS
// ========================================
export const T = {
  primary: "#0f112b",
  secondary: "#263450",
  cta: "#f45546",
  ctaHover: "#d94438",
  textLight: "#f2f4f8",
  textMuted: "rgba(242,244,248,0.55)",
  textMutedLight: "rgba(242,244,248,0.7)",
  bgLight: "#ffffff",
  bgOffwhite: "#f8f9fb",
  borderLight: "rgba(255,255,255,0.07)",
  borderHover: "rgba(255,255,255,0.18)",
  darkAlt: "#141736",
  footerBg: "#0a0c1e",
};

export const CONTENT_T = {
  bg: "#ffffff",
  band: "#f6f8fb",
  surface: "#ffffff",
  surfaceSoft: "#f8fafc",
  surfaceWarm: "#fff7f5",
  navy: "#10243f",
  navySoft: "#18365a",
  text: "#273347",
  muted: "#647084",
  mutedStrong: "#45556c",
  border: "#dbe3ee",
  borderStrong: "#c7d3e3",
  red: "#f45546",
};

// Product identity colors (cada vertical com cor propria)
export const PRODUCT_COLORS = {
  beneficios: { accent: "#6C5CE7", gradient: "linear-gradient(135deg, #6C5CE7, #a29bfe)", label: "Benefits" },
  frotas: { accent: "#00B894", gradient: "linear-gradient(135deg, #00B894, #55efc4)", label: "Fleet" },
  banking: { accent: "#0984E3", gradient: "linear-gradient(135deg, #0984E3, #74b9ff)", label: "Banking" },
  despesas: { accent: "#E17055", gradient: "linear-gradient(135deg, #E17055, #fab1a0)", label: "Expense" },
  antecipacao: { accent: "#FDCB6E", gradient: "linear-gradient(135deg, #D4A017, #FDCB6E)", label: "Credit" },
  "sob-demanda": { accent: "#636E72", gradient: "linear-gradient(135deg, #636E72, #b2bec3)", label: "Custom" },
  sentinel: { accent: "#00CEC9", gradient: "linear-gradient(135deg, #00B2B2, #81ECEC)", label: "Sentinel" },
};

// Logo asset (file reference from /public)
export const LOGO_PATH = import.meta.env.BASE_URL + "logo-just-2x.png";
export const JustLogo = ({ height = 32, style = {} }) => (
  <img src={LOGO_PATH} alt="JUST" style={{ height, objectFit: "contain", ...style }} />
);

// Neon product icons (glassmorphism style with glow)
const PRODUCT_ICON_PATHS = {
  beneficios: (c, cl) => (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="5" y="10" width="34" height="24" rx="4" stroke={c} strokeWidth="2" fill="none" opacity="0.9"/>
      <rect x="10" y="16" width="7" height="5" rx="1.2" stroke={cl} strokeWidth="1.5" fill="none" opacity="0.7"/>
      <line x1="10" y1="26" x2="22" y2="26" stroke={cl} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <line x1="10" y1="29" x2="17" y2="29" stroke={cl} strokeWidth="1.2" strokeLinecap="round" opacity="0.35"/>
      <circle cx="33" cy="27" r="3" stroke={c} strokeWidth="1.5" fill="none" opacity="0.6"/>
      <circle cx="30" cy="27" r="3" stroke={c} strokeWidth="1.5" fill="none" opacity="0.4"/>
    </svg>
  ),
  frotas: (c, cl) => (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="8" y="10" width="20" height="26" rx="3" stroke={c} strokeWidth="2" fill="none" opacity="0.9"/>
      <rect x="12" y="14" width="12" height="8" rx="1.5" stroke={cl} strokeWidth="1.5" fill="none" opacity="0.6"/>
      <path d="M28 16h4a3 3 0 0 1 3 3v10a2 2 0 0 1-2 2h-1" stroke={c} strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.7"/>
      <circle cx="33" cy="26" r="2" stroke={c} strokeWidth="1.5" fill="none" opacity="0.5"/>
      <line x1="8" y1="36" x2="28" y2="36" stroke={cl} strokeWidth="1.8" strokeLinecap="round" opacity="0.4"/>
    </svg>
  ),
  banking: (c, cl) => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M22 6L6 16h32L22 6z" stroke={c} strokeWidth="2" fill="none" opacity="0.9" strokeLinejoin="round"/>
      <line x1="6" y1="36" x2="38" y2="36" stroke={c} strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      <line x1="8" y1="16" x2="36" y2="16" stroke={cl} strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      <rect x="11" y="18" width="4" height="15" rx="1" stroke={cl} strokeWidth="1.5" fill="none" opacity="0.5"/>
      <rect x="20" y="18" width="4" height="15" rx="1" stroke={cl} strokeWidth="1.5" fill="none" opacity="0.5"/>
      <rect x="29" y="18" width="4" height="15" rx="1" stroke={cl} strokeWidth="1.5" fill="none" opacity="0.5"/>
    </svg>
  ),
  despesas: (c, cl) => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M10 6h24v32l-4-3-4 3-4-3-4 3-4-3-4 3V6z" stroke={c} strokeWidth="2" fill="none" opacity="0.9" strokeLinejoin="round"/>
      <line x1="16" y1="14" x2="28" y2="14" stroke={cl} strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <line x1="16" y1="19" x2="28" y2="19" stroke={cl} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <line x1="16" y1="24" x2="24" y2="24" stroke={cl} strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      <circle cx="28" cy="24" r="2" fill={c} opacity="0.5"/>
    </svg>
  ),
  antecipacao: (c, cl) => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="20" cy="22" r="14" stroke={c} strokeWidth="2" fill="none" opacity="0.9"/>
      <path d="M20 13v9l6 4" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
      <circle cx="20" cy="22" r="2" fill={cl} opacity="0.4"/>
      <path d="M33 14l3-3M36 11h-4M36 11v4" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
    </svg>
  ),
  "sob-demanda": (c, cl) => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M18 8h8v4a4 4 0 0 0 8 0V8h2a2 2 0 0 1 2 2v8h-4a4 4 0 0 0 0 8h4v8a2 2 0 0 1-2 2h-8v-4a4 4 0 0 0-8 0v4H8a2 2 0 0 1-2-2v-8h4a4 4 0 0 0 0-8H6V10a2 2 0 0 1 2-2h10z"
        stroke={c} strokeWidth="2" fill="none" opacity="0.9" strokeLinejoin="round"/>
      <circle cx="22" cy="22" r="3" stroke={cl} strokeWidth="1.5" fill="none" opacity="0.5"/>
    </svg>
  ),
  sentinel: (c, cl) => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M22 5L8 11v10c0 9.4 6 18 14 21 8-3 14-11.6 14-21V11L22 5z" stroke={c} strokeWidth="2" fill="none" opacity="0.9" strokeLinejoin="round"/>
      <path d="M16 22l4 4 8-8" stroke={cl} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
      <circle cx="22" cy="22" r="2.5" stroke={c} strokeWidth="1.2" fill="none" opacity="0.3"/>
      <path d="M22 14v2M22 28v2M14 22h2M28 22h2" stroke={c} strokeWidth="1.2" strokeLinecap="round" opacity="0.35"/>
    </svg>
  ),
};

// ProductIcon: renders with neon card container
export const ProductIcon = ({ productKey, size = 18, showCard = false }) => {
  const pc = PRODUCT_COLORS[productKey];
  if (!pc) return null;
  const c = pc.accent;
  const cl = pc.gradient ? pc.gradient.split(",")[1]?.trim().replace(")", "") || c : c;
  const iconFn = PRODUCT_ICON_PATHS[productKey];
  if (!iconFn) return null;

  if (showCard) {
    return (
      <div style={{
        width: size, height: size, borderRadius: size * 0.25, display: "flex", alignItems: "center", justifyContent: "center",
        background: `linear-gradient(145deg, ${c}18, rgba(10,12,31,0.9))`,
        border: `1px solid ${c}40`,
        boxShadow: `0 0 ${size * 0.4}px ${c}20`,
        flexShrink: 0,
      }}>
        <span style={{ display: "flex", width: size * 0.6, height: size * 0.6 }}>{iconFn(c, cl)}</span>
      </div>
    );
  }

  return <span style={{ display: "inline-flex", width: size, height: size, flexShrink: 0 }}>{iconFn(c, cl)}</span>;
};

// ========================================
// HOOKS
// ========================================
export function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export function useCounter(end, duration = 2000, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(eased * end);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, end, duration]);
  return val;
}

// ========================================
// ERROR BOUNDARY (debug)
// ========================================
export class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  componentDidCatch(error, info) { console.error("ErrorBoundary caught:", error, info); }
  render() {
    if (this.state.hasError) {
      return React.createElement("div", { style: { padding: 40, color: "#f45546", background: "#0a0c1f", minHeight: "100vh" } },
        React.createElement("h2", null, "Component Error"),
        React.createElement("pre", { style: { whiteSpace: "pre-wrap", color: "#ff6b6b" } }, String(this.state.error)),
        React.createElement("pre", { style: { whiteSpace: "pre-wrap", color: "#aaa", marginTop: 16 } }, this.state.error && this.state.error.stack)
      );
    }
    return this.props.children;
  }
}

// ========================================
// ANIMATION
// ========================================
export function Reveal({ children, delay = 0, direction = "up", style = {} }) {
  const [ref, visible] = useInView(0.08);
  const transforms = { up: "translateY(40px)", down: "translateY(-20px)", left: "translateX(-40px)", right: "translateX(40px)", none: "none", scale: "scale(0.95)" };
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : transforms[direction], transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`, ...style }}>
      {children}
    </div>
  );
}

// ========================================
// SHARED COMPONENTS
// ========================================
export function Tag({ children, light = false, color = null }) {
  return (
    <span style={{
      display: "inline-block", padding: "6px 14px", borderRadius: 100, fontSize: 11, fontWeight: 600,
      textTransform: "uppercase", letterSpacing: "0.08em",
      background: color ? `${color}15` : (light ? "rgba(15,17,43,0.05)" : "rgba(244,85,70,0.08)"),
      border: `1px solid ${color ? `${color}30` : (light ? "rgba(15,17,43,0.08)" : "rgba(244,85,70,0.2)")}`,
      color: color || (light ? T.primary : T.cta),
    }}>{children}</span>
  );
}

export function Btn({ children, primary = true, onClick, style = {}, size = "md" }) {
  const [hover, setHover] = useState(false);
  const sizes = { sm: { p: "10px 20px", f: 13 }, md: { p: "14px 28px", f: 15 }, lg: { p: "18px 36px", f: 16 } };
  return (
    <button onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      padding: sizes[size].p, borderRadius: 10, fontSize: sizes[size].f, fontWeight: 600, cursor: "pointer",
      border: primary ? "none" : `1px solid rgba(242,244,248,0.25)`,
      background: primary ? (hover ? T.ctaHover : T.cta) : (hover ? "rgba(242,244,248,0.1)" : "transparent"),
      color: "#fff", transform: hover ? "translateY(-1px)" : "none",
      boxShadow: primary && hover ? "0 8px 24px rgba(244,85,70,0.3)" : "none",
      transition: "all 0.25s ease", ...style,
    }}>{children}</button>
  );
}

export function SectionTitle({ tag, title, subtitle, light = false, center = false, tagColor = null }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: 56 }}>
      {tag && <Reveal><Tag light={light} color={tagColor}>{tag}</Tag></Reveal>}
      <Reveal delay={0.08}>
        <h2 style={{
          fontSize: 44, fontWeight: 700, color: light ? T.primary : T.textLight,
          lineHeight: 1.15, letterSpacing: "-0.025em", margin: "14px 0 16px", whiteSpace: "pre-line",
        }}>{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p style={{
            fontSize: 17, color: light ? "rgba(15,17,43,0.55)" : T.textMuted,
            lineHeight: 1.65, maxWidth: center ? 560 : 640, margin: center ? "0 auto" : 0,
          }}>{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}

export function Metric({ prefix = "", value, suffix = "", label, delay = 0 }) {
  const [ref, visible] = useInView(0.2);
  const count = useCounter(value, 2200, visible);
  const isDecimal = value % 1 !== 0;
  return (
    <div ref={ref} style={{ textAlign: "center", padding: "0 16px" }}>
      <Reveal delay={delay}>
        <div style={{ fontSize: 48, fontWeight: 700, color: T.textLight, lineHeight: 1, letterSpacing: "-0.02em" }}>
          {prefix}{isDecimal ? count.toFixed(1) : Math.round(count).toLocaleString("pt-BR")}{suffix}
        </div>
        <div style={{ fontSize: 13, color: T.textMuted, marginTop: 10, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 500 }}>{label}</div>
      </Reveal>
    </div>
  );
}

// ========================================
// HERO ORBITAL VISUAL
// ========================================
const HERO_ORBITAL_NODES = [
  { key: "beneficios", top: "12%", left: "8%", animName: "nodeFloat1", dur: "6s", delay: "0s", posClass: "pos-left", tooltipColor: "#A29BFE", barGrad: "linear-gradient(90deg,#6C5CE7,#A29BFE)" },
  { key: "frotas", top: "4%", right: "12%", animName: "nodeFloat2", dur: "7s", delay: "0.5s", posClass: "pos-right", tooltipColor: "#55EFC4", barGrad: "linear-gradient(90deg,#00B894,#55EFC4)" },
  { key: "banking", top: "40%", right: "0%", animName: "nodeFloat3", dur: "5.5s", delay: "1s", posClass: "pos-right", tooltipColor: "#74B9FF", barGrad: "linear-gradient(90deg,#0984E3,#74B9FF)" },
  { key: "despesas", top: "45%", left: "0%", animName: "nodeFloat4", dur: "6.5s", delay: "1.5s", posClass: "pos-left", tooltipColor: "#FAB1A0", barGrad: "linear-gradient(90deg,#E17055,#FAB1A0)" },
  { key: "antecipacao", bottom: "6%", left: "14%", animName: "nodeFloat5", dur: "5s", delay: "2s", posClass: "pos-top", tooltipColor: "#FFEAA7", barGrad: "linear-gradient(90deg,#D4A017,#FDCB6E)" },
  { key: "sob-demanda", bottom: "2%", right: "10%", animName: "nodeFloat6", dur: "7s", delay: "0.8s", posClass: "pos-top pos-right", tooltipColor: "#B2BEC3", barGrad: "linear-gradient(90deg,#636E72,#B2BEC3)" },
];

const HERO_SVG_ICONS = {
  beneficios: (
    <svg viewBox="0 0 44 44" fill="none" style={{width:34,height:34}}>
      <rect x="5" y="10" width="34" height="24" rx="4" stroke="#6C5CE7" strokeWidth="2" fill="none" opacity="0.9"/>
      <rect x="10" y="16" width="7" height="5" rx="1.2" stroke="#A29BFE" strokeWidth="1.5" fill="none" opacity="0.7"/>
      <line x1="10" y1="26" x2="22" y2="26" stroke="#A29BFE" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <circle cx="33" cy="27" r="3" stroke="#6C5CE7" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <circle cx="30" cy="27" r="3" stroke="#6C5CE7" strokeWidth="1.5" fill="none" opacity="0.4"/>
    </svg>
  ),
  frotas: (
    <svg viewBox="0 0 44 44" fill="none" style={{width:34,height:34}}>
      <rect x="6" y="14" width="32" height="16" rx="4" stroke="#00B894" strokeWidth="2" fill="none" opacity="0.9"/>
      <circle cx="14" cy="30" r="3.5" stroke="#55EFC4" strokeWidth="1.5" fill="none" opacity="0.7"/>
      <circle cx="30" cy="30" r="3.5" stroke="#55EFC4" strokeWidth="1.5" fill="none" opacity="0.7"/>
      <path d="M12 14 L12 10 L24 10 L28 14" stroke="#00B894" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <circle cx="35" cy="19" r="2" stroke="#55EFC4" strokeWidth="1" fill="none" opacity="0.5"/>
    </svg>
  ),
  banking: (
    <svg viewBox="0 0 44 44" fill="none" style={{width:34,height:34}}>
      <rect x="8" y="8" width="28" height="28" rx="6" stroke="#0984E3" strokeWidth="2" fill="none" opacity="0.9"/>
      <path d="M16 18 L22 14 L28 18" stroke="#74B9FF" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
      <line x1="16" y1="20" x2="28" y2="20" stroke="#0984E3" strokeWidth="1" opacity="0.4"/>
      <line x1="18" y1="22" x2="18" y2="28" stroke="#74B9FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <line x1="22" y1="22" x2="22" y2="28" stroke="#74B9FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <line x1="26" y1="22" x2="26" y2="28" stroke="#74B9FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <line x1="15" y1="30" x2="29" y2="30" stroke="#0984E3" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  ),
  despesas: (
    <svg viewBox="0 0 44 44" fill="none" style={{width:34,height:34}}>
      <rect x="10" y="6" width="24" height="32" rx="3" stroke="#E17055" strokeWidth="2" fill="none" opacity="0.9"/>
      <line x1="15" y1="14" x2="29" y2="14" stroke="#FAB1A0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <line x1="15" y1="20" x2="25" y2="20" stroke="#FAB1A0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <line x1="15" y1="26" x2="22" y2="26" stroke="#FAB1A0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <circle cx="28" cy="30" r="4" stroke="#E17055" strokeWidth="1.5" fill="none" opacity="0.7"/>
      <path d="M26 30 L28 32 L31 28" stroke="#FAB1A0" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.8"/>
    </svg>
  ),
  antecipacao: (
    <svg viewBox="0 0 44 44" fill="none" style={{width:34,height:34}}>
      <circle cx="22" cy="22" r="14" stroke="#FDCB6E" strokeWidth="2" fill="none" opacity="0.9"/>
      <path d="M22 12 L22 22 L30 22" stroke="#FFEAA7" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      <path d="M17 8 L15 12" stroke="#FDCB6E" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
      <path d="M27 8 L29 12" stroke="#FDCB6E" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
    </svg>
  ),
  "sob-demanda": (
    <svg viewBox="0 0 44 44" fill="none" style={{width:34,height:34}}>
      <rect x="8" y="8" width="28" height="28" rx="6" stroke="#636E72" strokeWidth="2" fill="none" opacity="0.9"/>
      <circle cx="22" cy="22" r="6" stroke="#B2BEC3" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <circle cx="22" cy="22" r="2" fill="#B2BEC3" opacity="0.5"/>
      <path d="M22 12 L22 14 M22 30 L22 32 M12 22 L14 22 M30 22 L32 22" stroke="#636E72" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
    </svg>
  ),
};

export function HeroOrbital({ trProd }) {
  return (
    <div id="orbitalWrapper" className="orbital-wrapper" style={{ position: "relative", width: "100%", height: 520, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Orbital rings */}
      {[200, 340, 460].map((size, i) => (
        <div key={i} className="orbit-ring" style={{
          position: "absolute", width: size, height: size, borderRadius: "50%",
          border: `1px solid rgba(108,92,231,${0.1 - i * 0.03})`,
          animation: `ringPulse ${4 + i}s ease-in-out infinite ${i}s`,
          transition: "all 0.6s ease",
        }} />
      ))}

      {/* SVG connecting lines */}
      <svg style={{ position: "absolute", width: 460, height: 460, zIndex: 2, pointerEvents: "none" }} viewBox="0 0 460 460">
        {[
          { x2: 72, y2: 82, c: "108,92,231" },
          { x2: 380, y2: 50, c: "0,184,148" },
          { x2: 430, y2: 230, c: "9,132,227" },
          { x2: 40, y2: 260, c: "225,112,85" },
          { x2: 100, y2: 410, c: "253,203,110" },
          { x2: 370, y2: 400, c: "99,110,114" },
        ].map((l, i) => (
          <line key={i} x1="230" y1="230" x2={l.x2} y2={l.y2}
            stroke={`rgba(${l.c},0.12)`} strokeWidth="1"
            strokeDasharray="4 6"
            style={{ animation: "dashFlow 15s linear infinite" }}
          />
        ))}
      </svg>

      {/* Floating particles */}
      {[
        { top: "15%", left: "25%", dur: "8s", delay: "0s", dx1: "20px", dy1: "-15px", dx2: "-10px", dy2: "10px", dx3: "15px", dy3: "5px", bg: "rgba(108,92,231,0.3)" },
        { top: "60%", right: "20%", dur: "10s", delay: "2s", dx1: "-15px", dy1: "20px", dx2: "10px", dy2: "-8px", dx3: "-20px", dy3: "12px", bg: "rgba(108,92,231,0.3)" },
        { top: "30%", right: "35%", dur: "7s", delay: "1s", dx1: "12px", dy1: "18px", dx2: "-8px", dy2: "-15px", dx3: "20px", dy3: "-5px", bg: "rgba(0,184,148,0.3)" },
        { bottom: "25%", left: "35%", dur: "9s", delay: "3s", dx1: "-18px", dy1: "-12px", dx2: "15px", dy2: "8px", dx3: "-5px", dy3: "20px", bg: "rgba(9,132,227,0.3)" },
        { top: "45%", left: "15%", dur: "11s", delay: "4s", dx1: "8px", dy1: "-20px", dx2: "-12px", dy2: "15px", dx3: "18px", dy3: "-8px", bg: "rgba(225,112,85,0.25)" },
        { top: "20%", right: "15%", dur: "9s", delay: "1.5s", dx1: "-20px", dy1: "8px", dx2: "12px", dy2: "18px", dx3: "-15px", dy3: "-12px", bg: "rgba(253,203,110,0.25)" },
        { bottom: "35%", right: "30%", dur: "8s", delay: "2.5s", dx1: "15px", dy1: "12px", dx2: "-18px", dy2: "-8px", dx3: "5px", dy3: "20px", bg: "rgba(108,92,231,0.3)" },
      ].map((p, i) => (
        <div key={i} style={{
          position: "absolute", width: 3, height: 3, borderRadius: "50%",
          background: p.bg, zIndex: 1,
          top: p.top, left: p.left, right: p.right, bottom: p.bottom,
          animation: `particleFloat${i} ${p.dur} ease-in-out infinite`,
          animationDelay: p.delay,
        }} />
      ))}

      {/* Center hub - JUST Logo */}
      <div className="hub-center" style={{
        position: "absolute", width: 100, height: 100, borderRadius: 28, zIndex: 5,
        background: "linear-gradient(145deg, rgba(108,92,231,0.2), rgba(10,12,31,0.95))",
        border: "1.5px solid rgba(108,92,231,0.35)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 0 40px rgba(108,92,231,0.15), 0 0 80px rgba(108,92,231,0.08), inset 0 1px 0 rgba(255,255,255,0.1)",
        animation: "hubFloat 5s ease-in-out infinite",
        transition: "all 0.6s ease",
      }}>
        <img src={LOGO_PATH} alt="JUST" style={{ height: 36, filter: "brightness(1.1)" }} />
      </div>

      {/* Product nodes with tooltips */}
      {HERO_ORBITAL_NODES.map((node) => {
        const pc = PRODUCT_COLORS[node.key];
        const c = pc?.accent || "#fff";
        return (
          <div key={node.key} className={`hero-product-node ${node.posClass || ""}`} style={{
            position: "absolute", zIndex: 4,
            display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
            top: node.top, left: node.left, right: node.right, bottom: node.bottom,
            animation: `${node.animName} ${node.dur} ease-in-out infinite`,
            animationDelay: node.delay,
            cursor: "pointer",
          }}>
            <div className="node-icon" style={{
              width: 72, height: 72, borderRadius: 20,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: `linear-gradient(145deg, ${c}26, rgba(10,12,31,0.9))`,
              border: `1.5px solid ${c}59`,
              boxShadow: `0 0 20px ${c}1F, 0 4px 16px rgba(0,0,0,0.3)`,
              backdropFilter: "blur(8px)",
              transition: "all 0.4s ease",
            }}>
              {HERO_SVG_ICONS[node.key]}
            </div>
            <span className="node-label" style={{
              fontSize: 11, fontWeight: 600, letterSpacing: "0.5px",
              color: "rgba(255,255,255,0.45)", textAlign: "center",
              whiteSpace: "nowrap", transition: "all 0.3s",
            }}>{trProd[node.key]?.name?.replace("JUST ", "")}</span>
            <div className="node-tooltip">
              <div className="tooltip-name" style={{ color: node.tooltipColor }}>{trProd[node.key]?.name}</div>
              <div className="tooltip-desc">{trProd[node.key]?.desc}</div>
              <div className="tooltip-bar" style={{ background: node.barGrad }} />
            </div>
          </div>
        );
      })}

      {/* CSS Animations */}
      <style>{`

/* Bento grid products */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.bento-grid .bento-card:nth-child(1) { grid-column: span 2; }
.bento-grid .bento-card:nth-child(2) { grid-column: span 1; }
.bento-grid .bento-card:nth-child(3) { grid-column: span 1; }
.bento-grid .bento-card:nth-child(4) { grid-column: span 2; }
.bento-grid .bento-card:nth-child(5) { grid-column: span 2; }
.bento-grid .bento-card:nth-child(6) { grid-column: span 1; }
.bento-card {
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.02);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: border-color 0.4s ease, background 0.4s ease;
}
.bento-card:hover {
  border-color: rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.035);
}
.bento-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.bento-card:hover::after {
  transform: scaleX(1);
}
.bento-card:hover .bento-icon-card {
  transform: scale(1.1);
}
.bento-card:hover .bento-arrow-btn {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.15);
  transform: translateX(2px);
}

/* DE > PARA comparison hover effects */
.comp-row {
  transition: border-color 0.4s ease;
}
.comp-row:hover {
  border-color: rgba(39,174,96,0.25) !important;
}
.comp-row::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg,
    rgba(232,93,74,0.03) 0%,
    rgba(232,93,74,0.01) 25%,
    transparent 45%,
    rgba(39,174,96,0.04) 55%,
    rgba(39,174,96,0.07) 100%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 0;
}
.comp-row:hover::before {
  opacity: 1;
}
.comp-row::after {
  content: '';
  position: absolute;
  inset: 0;
  left: -100%;
  background: linear-gradient(90deg,
    transparent 0%,
    transparent 35%,
    rgba(39,174,96,0.07) 48%,
    rgba(39,174,96,0.12) 52%,
    rgba(39,174,96,0.07) 56%,
    transparent 65%,
    transparent 100%
  );
  transition: left 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  pointer-events: none;
  z-index: 0;
}
.comp-row:hover::after {
  left: 100%;
}
.comp-row:hover .comp-icon-com {
  transform: scale(1.08);
  box-shadow: 0 0 24px rgba(39,174,96,0.2) !important;
}
.comp-row:hover .comp-arrow {
  background: rgba(39,174,96,0.12) !important;
  border-color: rgba(39,174,96,0.3) !important;
  transform: translateX(3px);
}
.comp-row:hover .comp-arrow svg path {
  stroke: rgba(39,174,96,0.8);
}


        

/* Bento grid products */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.bento-grid .bento-card:nth-child(1) { grid-column: span 2; }
.bento-grid .bento-card:nth-child(2) { grid-column: span 1; }
.bento-grid .bento-card:nth-child(3) { grid-column: span 1; }
.bento-grid .bento-card:nth-child(4) { grid-column: span 2; }
.bento-grid .bento-card:nth-child(5) { grid-column: span 2; }
.bento-grid .bento-card:nth-child(6) { grid-column: span 1; }
.bento-card {
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.02);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: border-color 0.4s ease, background 0.4s ease;
}
.bento-card:hover {
  border-color: rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.035);
}
.bento-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.bento-card:hover::after {
  transform: scaleX(1);
}
.bento-card:hover .bento-icon-card {
  transform: scale(1.1);
}
.bento-card:hover .bento-arrow-btn {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.15);
  transform: translateX(2px);
}

/* DE > PARA comparison hover effects */
.comp-row {
  transition: border-color 0.4s ease;
}
.comp-row:hover {
  border-color: rgba(39,174,96,0.25) !important;
}
.comp-row::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg,
    rgba(232,93,74,0.03) 0%,
    rgba(232,93,74,0.01) 25%,
    transparent 45%,
    rgba(39,174,96,0.04) 55%,
    rgba(39,174,96,0.07) 100%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 0;
}
.comp-row:hover::before {
  opacity: 1;
}
.comp-row::after {
  content: '';
  position: absolute;
  inset: 0;
  left: -100%;
  background: linear-gradient(90deg,
    transparent 0%,
    transparent 35%,
    rgba(39,174,96,0.07) 48%,
    rgba(39,174,96,0.12) 52%,
    rgba(39,174,96,0.07) 56%,
    transparent 65%,
    transparent 100%
  );
  transition: left 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  pointer-events: none;
  z-index: 0;
}
.comp-row:hover::after {
  left: 100%;
}
.comp-row:hover .comp-icon-com {
  transform: scale(1.08);
  box-shadow: 0 0 24px rgba(39,174,96,0.2) !important;
}
.comp-row:hover .comp-arrow {
  background: rgba(39,174,96,0.12) !important;
  border-color: rgba(39,174,96,0.3) !important;
  transform: translateX(3px);
}
.comp-row:hover .comp-arrow svg path {
  stroke: rgba(39,174,96,0.8);
}

@keyframes ringPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.02); }
        }
        @keyframes hubFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes dashFlow { to { stroke-dashoffset: -100; } }
        @keyframes nodeFloat1 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(8px, -12px); }
          66% { transform: translate(-5px, -6px); }
        }
        @keyframes nodeFloat2 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-10px, -8px); }
          66% { transform: translate(5px, -14px); }
        }
        @keyframes nodeFloat3 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-12px, 6px); }
          66% { transform: translate(-6px, -10px); }
        }
        @keyframes nodeFloat4 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(10px, -8px); }
          66% { transform: translate(6px, 10px); }
        }
        @keyframes nodeFloat5 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(8px, 10px); }
          66% { transform: translate(-6px, 5px); }
        }
        @keyframes nodeFloat6 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-8px, 8px); }
          66% { transform: translate(10px, 4px); }
        }
        @keyframes particleFloat0 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(20px, -15px); opacity: 0.7; }
          50% { transform: translate(-10px, 10px); opacity: 0.4; }
          75% { transform: translate(15px, 5px); opacity: 0.8; }
        }
        @keyframes particleFloat1 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(-15px, 20px); opacity: 0.7; }
          50% { transform: translate(10px, -8px); opacity: 0.4; }
          75% { transform: translate(-20px, 12px); opacity: 0.8; }
        }
        @keyframes particleFloat2 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(12px, 18px); opacity: 0.7; }
          50% { transform: translate(-8px, -15px); opacity: 0.4; }
          75% { transform: translate(20px, -5px); opacity: 0.8; }
        }
        @keyframes particleFloat3 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(-18px, -12px); opacity: 0.7; }
          50% { transform: translate(15px, 8px); opacity: 0.4; }
          75% { transform: translate(-5px, 20px); opacity: 0.8; }
        }
        @keyframes particleFloat4 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(8px, -20px); opacity: 0.7; }
          50% { transform: translate(-12px, 15px); opacity: 0.4; }
          75% { transform: translate(18px, -8px); opacity: 0.8; }
        }
        @keyframes particleFloat5 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(-20px, 8px); opacity: 0.7; }
          50% { transform: translate(12px, 18px); opacity: 0.4; }
          75% { transform: translate(-15px, -12px); opacity: 0.8; }
        }
        @keyframes particleFloat6 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(15px, 12px); opacity: 0.7; }
          50% { transform: translate(-18px, -8px); opacity: 0.4; }
          75% { transform: translate(5px, 20px); opacity: 0.8; }
        }
        .hero-product-node {
          transition: z-index 0s;
        }
        .hero-product-node:hover {
          z-index: 50 !important;
        }
        .hero-product-node:hover > div:first-child {
          transform: scale(1.12);
          box-shadow: 0 0 35px rgba(108,92,231,0.3), 0 4px 24px rgba(0,0,0,0.4) !important;
        }
        .hero-product-node:hover span {
          opacity: 1 !important;
          color: #fff !important;
        }

        /* === TOOLTIP / MINI MODAL === */
        .node-tooltip {
          position: absolute;
          top: 82px;
          left: 50%;
          transform: translateX(-50%) translateY(8px);
          width: 220px;
          padding: 14px 16px;
          background: rgba(15,17,43,0.97);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          backdrop-filter: blur(20px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05);
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 100;
        }
        .node-tooltip::before {
          content: '';
          position: absolute; top: -6px; left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 10px; height: 10px;
          background: rgba(15,17,43,0.97);
          border-left: 1px solid rgba(255,255,255,0.12);
          border-top: 1px solid rgba(255,255,255,0.12);
        }
        .hero-product-node:hover .node-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
        }
        .node-tooltip .tooltip-name {
          font-size: 13px; font-weight: 700; margin-bottom: 6px;
        }
        .node-tooltip .tooltip-desc {
          font-size: 11.5px; line-height: 1.55;
          color: rgba(242,244,248,0.55);
        }
        .node-tooltip .tooltip-bar {
          width: 100%; height: 2px; border-radius: 1px;
          margin-top: 10px; opacity: 0.4;
        }
        .hero-product-node.pos-top .node-tooltip {
          top: auto;
          bottom: calc(100% + 12px);
        }
        .hero-product-node.pos-top .node-tooltip::before {
          top: auto; bottom: -6px;
          border-left: none; border-top: none;
          border-right: 1px solid rgba(255,255,255,0.12);
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }
        .hero-product-node.pos-left .node-tooltip {
          left: 36px;
          transform: translateX(-30px) translateY(8px);
        }
        .hero-product-node.pos-left .node-tooltip::before {
          left: 30px;
          transform: translateX(0) rotate(45deg);
        }
        .hero-product-node.pos-left:hover .node-tooltip {
          transform: translateX(-30px) translateY(0);
        }
        .hero-product-node.pos-right .node-tooltip {
          left: auto;
          right: -36px;
          transform: translateX(0) translateY(8px);
        }
        .hero-product-node.pos-right .node-tooltip::before {
          left: auto;
          right: 30px;
          transform: translateX(0) rotate(45deg);
        }
        .hero-product-node.pos-right:hover .node-tooltip {
          transform: translateX(0) translateY(0);
        }
        .hero-product-node.pos-top.pos-right .node-tooltip {
          left: auto;
          right: -36px;
          top: auto;
          bottom: calc(100% + 12px);
        }
        .hero-product-node.pos-top.pos-right .node-tooltip::before {
          top: auto; bottom: -6px;
          left: auto; right: 30px;
          border-left: none; border-top: none;
          border-right: 1px solid rgba(255,255,255,0.12);
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }
        .hero-product-node.pos-top.pos-right:hover .node-tooltip {
          transform: translateX(0) translateY(0);
        }

        /* === LANCE HOVER -> ORBITAL GREEN BURST === */
        .orbital-wrapper.lance-active .hero-product-node > div:first-child {
          transform: scale(1.15) !important;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        .orbital-wrapper.lance-active .hero-product-node span {
          color: #fff !important;
          opacity: 1 !important;
        }
        .orbital-wrapper.lance-active .orbit-ring {
          border-color: rgba(39,174,96,0.2) !important;
          animation: ringBurst 1s ease-out forwards !important;
        }
        .orbital-wrapper.lance-active .hub-center {
          box-shadow: 0 0 60px rgba(39,174,96,0.3), 0 0 120px rgba(39,174,96,0.15), inset 0 1px 0 rgba(255,255,255,0.15) !important;
          border-color: rgba(39,174,96,0.4) !important;
        }
        @keyframes ringBurst {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); border-color: rgba(39,174,96,0.35); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes lancePulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0; transform: scale(1.06); }
        }
      
/* ===== CARD ARRANGEMENTS SECTION ===== */
.cards-grid {
  display: grid;
  grid-template-columns: 1fr 80px 1fr;
  gap: 0;
  align-items: stretch;
}
.card-option {
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.02);
  overflow: hidden;
  transition: border-color 0.4s ease, background 0.4s ease;
  display: flex;
  flex-direction: column;
}
.card-option:hover {
  border-color: rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.035);
}
.card-visual {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 32px;
  position: relative;
  min-height: 280px;
}
.physical-card {
  width: 300px;
  height: 190px;
  border-radius: 14px;
  position: relative;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(0,0,0,0.2);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  overflow: hidden;
}
.card-option:hover .physical-card {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 28px 70px rgba(0,0,0,0.5), 0 0 50px rgba(0,0,0,0.3);
}
.physical-card.bandeirado {
  background: linear-gradient(145deg, #1a1d3a, #12142e);
  border: 1px solid rgba(108,92,231,0.3);
}
.physical-card.bandeirado::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -30%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(108,92,231,0.15), transparent 70%);
  border-radius: 50%;
}
.physical-card.privatelabel {
  background: linear-gradient(145deg, #1a2a1a, #0e1a12);
  border: 1px solid rgba(0,184,148,0.3);
}
.physical-card.privatelabel::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -30%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(0,184,148,0.15), transparent 70%);
  border-radius: 50%;
}
.card-chip-gold {
  width: 36px;
  height: 28px;
  border-radius: 5px;
  background: linear-gradient(145deg, #C9A84C, #F2D06B, #C9A84C);
  position: relative;
  overflow: hidden;
}
.card-chip-gold .chip-lines {
  position: absolute;
  inset: 4px;
  border: 1px solid rgba(0,0,0,0.15);
  border-radius: 2px;
}
.card-chip-gold .chip-lines::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(0,0,0,0.12);
}
.card-chip-gold .chip-lines::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  background: rgba(0,0,0,0.12);
}
.card-number {
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 3px;
  color: rgba(255,255,255,0.5);
  font-family: 'Inter', monospace;
}
.card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.card-holder {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(255,255,255,0.4);
}
.card-holder-name {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: rgba(255,255,255,0.6);
  margin-top: 3px;
}
.mc-logo {
  display: flex;
  align-items: center;
  position: relative;
}
.mc-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.mc-circle.red { background: #EB001B; }
.mc-circle.yellow { background: #F79E1B; margin-left: -12px; mix-blend-mode: screen; }
.pl-brand {
  display: flex;
  align-items: center;
  gap: 6px;
}
.pl-brand-icon {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: rgba(0,184,148,0.2);
  border: 1px solid rgba(0,184,148,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}
.pl-brand-text {
  font-size: 14px;
  font-weight: 700;
  color: rgba(0,184,148,0.7);
  letter-spacing: 0.02em;
}
.card-info {
  padding: 32px;
}
.card-type-label {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 14px;
}
.card-type-label .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}
.card-info h3 {
  font-size: 22px;
  font-weight: 700;
  color: #f2f4f8;
  line-height: 1.3;
  margin-bottom: 16px;
}
.features-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
}
.features-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: rgba(242,244,248,0.5);
  line-height: 1.5;
}
.features-list li .check {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
}
.center-divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;
}
.divider-line {
  width: 1px;
  flex: 1;
  background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent);
}
.divider-badge {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(244,85,70,0.08);
  border: 1px solid rgba(244,85,70,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 800;
  color: #f45546;
  letter-spacing: 0.02em;
}
/* Hybrid section */
.hybrid-section {
  margin-top: 48px;
  position: relative;
  border-radius: 24px;
  padding: 3px;
  background: linear-gradient(135deg, rgba(108,92,231,0.5), rgba(244,85,70,0.5), rgba(0,184,148,0.5));
  background-size: 200% 200%;
  animation: hybridGradientShift 6s ease infinite;
}
@keyframes hybridGradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.hybrid-inner {
  border-radius: 22px;
  background: linear-gradient(160deg, #0d1030, #0a0c1f 50%, #0d1a14);
  padding: 56px 48px;
  position: relative;
  overflow: hidden;
}
.hybrid-inner::before {
  content: '';
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(244,85,70,0.06), transparent 70%);
  pointer-events: none;
}
.hybrid-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}
.hybrid-content {
  position: relative;
  z-index: 1;
}
.hybrid-exclusive-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: linear-gradient(135deg, rgba(244,85,70,0.12), rgba(244,85,70,0.06));
  border: 1px solid rgba(244,85,70,0.25);
  color: #f45546;
  margin-bottom: 20px;
}
.hybrid-title {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #f2f4f8;
  margin-bottom: 16px;
}
.hybrid-title .gradient-text {
  background: linear-gradient(135deg, #6C5CE7, #f45546, #00B894);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hybrid-description {
  font-size: 16px;
  line-height: 1.7;
  color: rgba(242,244,248,0.5);
  margin-bottom: 28px;
  max-width: 440px;
}
.hybrid-features {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.hybrid-feature {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.hybrid-feature-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
}
.hybrid-feature-icon.purple {
  background: rgba(108,92,231,0.12);
  border: 1px solid rgba(108,92,231,0.2);
}
.hybrid-feature-icon.green {
  background: rgba(0,184,148,0.12);
  border: 1px solid rgba(0,184,148,0.2);
}
.hybrid-feature-icon.red {
  background: rgba(244,85,70,0.12);
  border: 1px solid rgba(244,85,70,0.2);
}
.hybrid-feature-text {
  font-size: 14px;
  color: rgba(242,244,248,0.6);
  line-height: 1.5;
}
.hybrid-feature-text strong {
  color: rgba(242,244,248,0.85);
  font-weight: 600;
}
.hybrid-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 320px;
  z-index: 1;
}
.hybrid-card-stack {
  position: relative;
  width: 320px;
  height: 280px;
}
.hybrid-card-stack .physical-card.bandeirado {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 280px;
  height: 175px;
  transform: rotate(-6deg) translateX(0) translateY(0);
  z-index: 1;
  opacity: 0.8;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease, box-shadow 0.4s ease;
}
.hybrid-card-stack:hover .physical-card.bandeirado {
  transform: rotate(-12deg) translateX(-30px) translateY(-15px);
  opacity: 1;
  box-shadow: 0 25px 60px rgba(108,92,231,0.3), 0 0 40px rgba(108,92,231,0.1);
}
.hybrid-card-stack .physical-card.privatelabel {
  position: absolute;
  bottom: 20px;
  right: 0;
  width: 280px;
  height: 175px;
  transform: rotate(4deg) translateX(0) translateY(0);
  z-index: 2;
  opacity: 0.8;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease, box-shadow 0.4s ease;
}
.hybrid-card-stack:hover .physical-card.privatelabel {
  transform: rotate(10deg) translateX(25px) translateY(15px);
  opacity: 1;
  box-shadow: 0 25px 60px rgba(0,184,148,0.3), 0 0 40px rgba(0,184,148,0.1);
}
.hybrid-merge-badge {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  z-index: 10;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(108,92,231,0.2), rgba(244,85,70,0.3), rgba(0,184,148,0.2));
  border: 2px solid rgba(244,85,70,0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(244,85,70,0.25), 0 0 60px rgba(244,85,70,0.1);
  animation: mergeGlow 3s ease-in-out infinite;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease, opacity 0.4s ease;
}
.hybrid-card-stack:hover .hybrid-merge-badge {
  transform: translate(-50%, -50%) scale(1.15);
  box-shadow: 0 0 50px rgba(244,85,70,0.4), 0 0 100px rgba(244,85,70,0.2);
}
@keyframes mergeGlow {
  0%, 100% { box-shadow: 0 0 30px rgba(244,85,70,0.25), 0 0 60px rgba(244,85,70,0.1); }
  50% { box-shadow: 0 0 40px rgba(244,85,70,0.35), 0 0 80px rgba(244,85,70,0.15); }
}



/* ===== PARTNER LOGOS ===== */
.partner-logo:hover {
  opacity: 0.6 !important;
}

/* ===== PROCESS TIMELINE ===== */
.process-timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.process-timeline::before {
  content: '';
  position: absolute;
  left: 39px;
  top: 40px;
  bottom: 40px;
  width: 2px;
  background: linear-gradient(to bottom, rgba(244,85,70,0.4), rgba(108,92,231,0.4) 33%, rgba(0,184,148,0.4) 66%, rgba(39,174,96,0.4));
}
.process-step {
  display: grid;
  grid-template-columns: 80px 1fr 340px;
  gap: 32px;
  align-items: start;
  padding: 36px 0;
  position: relative;
}
.step-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 2;
}
.step-number {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.02em;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 3;
}
.process-step:hover .step-number {
  transform: scale(1.08);
}
.step-content {
  padding-top: 8px;
}
.step-title {
  font-size: 22px;
  font-weight: 700;
  color: #f2f4f8;
  margin-bottom: 10px;
  line-height: 1.3;
}
.step-desc {
  font-size: 15px;
  color: rgba(242,244,248,0.45);
  line-height: 1.7;
  margin-bottom: 18px;
  max-width: 420px;
}
.step-details {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.step-tag {
  font-size: 12px;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 8px;
  line-height: 1.4;
}
.step-visual {
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.02);
  overflow: hidden;
  padding: 24px;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: border-color 0.3s ease, background 0.3s ease;
}
.process-step:hover .step-visual {
  border-color: rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.03);
}
.discovery-visual { display: flex; flex-direction: column; gap: 10px; }
.disc-question { display: flex; align-items: center; gap: 10px; }
.disc-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.disc-bar { height: 8px; border-radius: 4px; opacity: 0.15; }
.disc-answer { margin-left: 18px; display: flex; gap: 6px; }
.disc-pill { height: 24px; border-radius: 6px; font-size: 10px; font-weight: 600; padding: 0 10px; display: flex; align-items: center; }
.arq-visual { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
.arq-block {
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: transform 0.3s ease;
}
.process-step:hover .arq-block { transform: scale(1.03); }
.arq-block-ready { border: 1px solid rgba(0,184,148,0.3); background: rgba(0,184,148,0.08); color: rgba(0,184,148,0.7); }
.arq-block-config { border: 1px solid rgba(108,92,231,0.3); background: rgba(108,92,231,0.08); color: rgba(108,92,231,0.7); }
.arq-progress { margin-top: 10px; display: flex; align-items: center; gap: 10px; }
.arq-bar-bg { flex: 1; height: 6px; border-radius: 3px; background: rgba(255,255,255,0.06); overflow: hidden; }
.arq-bar-fill { height: 100%; border-radius: 3px; background: linear-gradient(90deg, #00B894, #55EFC4); width: 75%; }
.arq-label { font-size: 11px; font-weight: 600; color: rgba(0,184,148,0.7); white-space: nowrap; }
.int-visual { display: flex; flex-direction: column; gap: 8px; }
.int-row { display: flex; align-items: center; gap: 8px; }
.int-node { padding: 6px 12px; border-radius: 8px; font-size: 10px; font-weight: 600; white-space: nowrap; }
.int-node-just { background: rgba(244,85,70,0.1); border: 1px solid rgba(244,85,70,0.25); color: rgba(244,85,70,0.8); }
.int-node-provider { background: rgba(108,92,231,0.08); border: 1px solid rgba(108,92,231,0.2); color: rgba(108,92,231,0.7); }
.int-line { flex: 1; height: 1px; background: rgba(255,255,255,0.08); position: relative; }
.int-line::after {
  content: '';
  position: absolute;
  right: 0;
  top: -3px;
  width: 0;
  height: 0;
  border-left: 5px solid rgba(255,255,255,0.15);
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
}
.int-status { display: flex; align-items: center; gap: 6px; margin-top: 6px; }
.int-status-dot { width: 6px; height: 6px; border-radius: 50%; background: #00B894; animation: procStatusPulse 2s ease infinite; }
@keyframes procStatusPulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0,184,148,0.4); }
  50% { opacity: 0.7; box-shadow: 0 0 0 4px rgba(0,184,148,0); }
}
.int-status-text { font-size: 10px; font-weight: 500; color: rgba(0,184,148,0.6); }
.op-visual { display: flex; flex-direction: column; gap: 10px; }
.op-topbar { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
.op-dot { width: 6px; height: 6px; border-radius: 50%; }
.op-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
.op-metric { padding: 10px; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); }
.op-metric-label { font-size: 9px; font-weight: 500; color: rgba(242,244,248,0.35); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
.op-metric-value { font-size: 18px; font-weight: 700; letter-spacing: -0.02em; }
.op-status-bar { display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 8px; background: rgba(39,174,96,0.06); border: 1px solid rgba(39,174,96,0.15); }
.op-status-dot { width: 8px; height: 8px; border-radius: 50%; background: #27AE60; animation: procStatusPulse 2s ease infinite; }
.op-status-text { font-size: 11px; font-weight: 600; color: rgba(39,174,96,0.8); }
.process-step + .process-step { border-top: 1px solid rgba(255,255,255,0.03); }
.process-summary {
  margin-top: 56px;
  padding: 28px 36px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(244,85,70,0.04), rgba(108,92,231,0.04));
  border: 1px solid rgba(255,255,255,0.06);
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: center;
  gap: 0;
}
.summary-item { display: flex; align-items: center; gap: 12px; justify-content: center; padding: 0 16px; }
.summary-icon { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.summary-text { font-size: 14px; color: rgba(242,244,248,0.5); line-height: 1.4; }
.summary-text strong { color: rgba(242,244,248,0.85); font-weight: 600; display: block; }
.summary-divider { width: 1px; height: 40px; background: rgba(255,255,255,0.06); }


/* ===== CASES VIDEO SECTION ===== */
.cases-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}
.case-card {
  background: rgba(255,255,255,0.025);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.case-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  border-color: rgba(255,255,255,0.1);
}
.case-video {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background: #0f112b;
  overflow: hidden;
}
.case-video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
.case-content { padding: 32px; }
.case-products { display: flex; align-items: center; gap: 8px; margin-bottom: 16px; }
.product-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 14px 5px 8px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
}
.product-badge svg { width: 20px; height: 20px; flex-shrink: 0; }
.case-name {
  font-size: 13px;
  font-weight: 600;
  color: rgba(242,244,248,0.4);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 6px;
}
.case-headline {
  font-size: 24px;
  font-weight: 700;
  color: #f2f4f8;
  line-height: 1.25;
  margin-bottom: 20px;
}
.case-metrics { display: flex; flex-wrap: wrap; gap: 8px; }
.case-metric {
  font-size: 12px;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 6px;
  line-height: 1.4;
}

/* About page - Founder & Team */
.about-founder { display: grid; grid-template-columns: auto 1fr; gap: 28px; align-items: start; margin-bottom: 48px; }
.about-avatar { width: 72px; height: 72px; border-radius: 16px; background: linear-gradient(135deg, rgba(244,85,70,0.15), rgba(244,85,70,0.06)); border: 1px solid rgba(244,85,70,0.2); display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 700; color: #f45546; letter-spacing: -0.02em; transition: border-color 0.3s, box-shadow 0.3s; }
.about-avatar:hover { border-color: rgba(244,85,70,0.35); box-shadow: 0 8px 24px rgba(244,85,70,0.1); }
.about-team-card { padding: 36px; border-radius: 16px; background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07); transition: border-color 0.3s; }
.about-team-card:hover { border-color: rgba(255,255,255,0.12); }
.about-metric { padding: 24px 12px; text-align: center; }
.about-metric-value { font-size: 36px; font-weight: 700; color: #f2f4f8; letter-spacing: -0.02em; }
.about-metric-label { font-size: 12px; color: rgba(242,244,248,0.35); margin-top: 8px; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 500; }




/* ===== RESPONSIVE / MOBILE ===== */
@media (max-width: 900px) {
  /* --- Header: hamburger menu --- */
  .desktop-nav { display: none !important; }
  .mobile-menu-btn { display: flex !important; }
  header { padding: 0 20px !important; }

  /* --- Global section padding --- */
  .section-hero { padding: 100px 24px 60px !important; }
  .section-social-proof { padding: 24px 20px !important; }
  .section-depara { padding: 72px 20px !important; }
  .section-products { padding: 72px 20px !important; }
  .section-cards { padding: 72px 20px !important; }
  .section-process { padding: 72px 20px !important; }
  .section-metrics { padding: 48px 20px !important; }
  .section-cases { padding: 72px 20px !important; }
  .section-cta { padding: 80px 20px !important; }

  /* --- Hero --- */
  .hero-grid {
    grid-template-columns: 1fr !important;
    gap: 40px !important;
  }
  .hero-title {
    font-size: 36px !important;
    line-height: 1.1 !important;
  }
  .hero-grid p {
    font-size: 16px !important;
    margin-bottom: 24px !important;
  }
  .flow-steps-row {
    margin-bottom: 24px !important;
  }
  .flow-step-item {
    padding: 6px 12px !important;
    border-radius: 8px !important;
  }
  .flow-step-item .step-num-box {
    width: 18px !important; height: 18px !important;
    font-size: 9px !important; border-radius: 4px !important;
  }
  .flow-step-item .step-label-text { font-size: 11px !important; }
  .flow-step-lance {
    padding: 6px 14px !important;
    border-radius: 8px !important;
  }
  .flow-step-lance .step-num-box {
    width: 18px !important; height: 18px !important;
    font-size: 9px !important; border-radius: 4px !important;
  }
  .flow-step-lance .step-label-text { font-size: 12px !important; }
  .flow-arrow-icon { padding: 0 3px !important; }
  .flow-arrow-icon svg { width: 16px !important; height: 10px !important; }

  /* --- Hero buttons smaller --- */
  .hero-grid button {
    font-size: 13px !important;
    padding: 10px 20px !important;
  }

  /* --- Social Proof --- */
  .social-proof-bar {
    flex-direction: column !important;
    gap: 16px !important;
    text-align: center !important;
  }
  .social-logos {
    gap: 16px 24px !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
    display: flex !important;
  }
  .social-logos img {
    height: 24px !important;
  }

  /* --- DE > PARA --- */
  .depara-labels {
    grid-template-columns: 1fr 36px 1fr !important;
  }
  .comp-row {
    grid-template-columns: 1fr 36px 1fr !important;
  }
  .comp-row > div:first-child,
  .comp-row > div:last-child {
    padding: 16px 14px !important;
    gap: 10px !important;
  }
  .comp-row p {
    display: none !important;
  }
  .comp-row h4 {
    font-size: 13px !important;
    margin-bottom: 0 !important;
  }
  .comp-row > div:first-child > div:first-child,
  .comp-row > div:last-child > div:first-child {
    width: 32px !important;
    height: 32px !important;
    min-width: 32px !important;
    border-radius: 8px !important;
  }
  .comp-row svg {
    width: 18px !important;
    height: 18px !important;
  }
  .comp-arrow {
    width: 24px !important;
    height: 24px !important;
  }
  .comp-arrow svg {
    width: 11px !important;
    height: 11px !important;
  }

  /* --- Bento Grid --- */
  .bento-grid {
    grid-template-columns: 1fr !important;
  }
  .bento-grid .bento-card {
    grid-column: span 1 !important;
  }

  /* --- Card Arrangements --- */
  .cards-grid {
    grid-template-columns: 1fr !important;
    gap: 32px !important;
  }
  .card-visual {
    display: none !important;
  }

  /* --- Hybrid Section --- */
  .hybrid-section-grid {
    grid-template-columns: 1fr !important;
    gap: 32px !important;
  }
  .hybrid-layout {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
  }
  .hybrid-visual {
    display: none !important;
  }

  /* --- Process Timeline --- */
  .process-step {
    grid-template-columns: 60px 1fr !important;
    gap: 16px !important;
  }
  .step-visual {
    display: none !important;
  }
  .process-timeline::before {
    left: 29px !important;
  }
  .step-number {
    width: 40px !important;
    height: 40px !important;
    font-size: 14px !important;
  }
  .step-title {
    font-size: 18px !important;
  }
  .step-desc {
    font-size: 14px !important;
  }
  .process-summary {
    grid-template-columns: 1fr !important;
    gap: 20px !important;
    padding: 24px 20px !important;
  }
  .summary-divider {
    display: none !important;
  }
  .summary-item {
    justify-content: flex-start !important;
    padding: 0 !important;
  }

  /* --- Metrics --- */
  .metrics-grid {
    grid-template-columns: 1fr 1fr !important;
  }
  .metric-item {
    border-left: none !important;
  }
  .metric-item:nth-child(2) {
    border-left: 1px solid rgba(255,255,255,0.06) !important;
  }
  .metric-item:nth-child(4) {
    border-left: 1px solid rgba(255,255,255,0.06) !important;
  }
  .metric-item:nth-child(3),
  .metric-item:nth-child(4) {
    border-top: 1px solid rgba(255,255,255,0.06) !important;
  }

  /* --- Cases --- */
  .cases-grid {
    grid-template-columns: 1fr !important;
  }
  .case-headline {
    font-size: 20px !important;
  }

  /* --- General heading overrides --- */
  .section-depara h2,
  .section-products h2,
  .section-cards h2,
  .section-process h2,
  .section-cases h2 {
    font-size: 30px !important;
  }
  .section-cta h2 {
    font-size: 30px !important;
  }
}

@media (max-width: 520px) {
  /* --- Extra small screens --- */
  .section-hero { padding: 80px 16px 48px !important; }
  .hero-title {
    font-size: 28px !important;
  }
  .hero-grid p {
    font-size: 15px !important;
  }

  .section-social-proof { padding: 24px 16px !important; }
  .social-logos {
    gap: 20px 24px !important;
    display: grid !important;
    grid-template-columns: repeat(4, auto) !important;
    justify-content: center !important;
    justify-items: center !important;
    align-items: center !important;
  }
  .social-logos img {
    height: 24px !important;
  }

  .section-depara,
  .section-products,
  .section-cards,
  .section-process,
  .section-cases {
    padding: 56px 16px !important;
  }
  .section-metrics { padding: 36px 16px !important; }
  .section-cta { padding: 64px 16px !important; }

  .depara-labels {
    grid-template-columns: 1fr 28px 1fr !important;
  }
  .comp-row {
    grid-template-columns: 1fr 28px 1fr !important;
  }
  .comp-row > div:first-child,
  .comp-row > div:last-child {
    padding: 12px 10px !important;
    gap: 8px !important;
  }
  .comp-row h4 {
    font-size: 12px !important;
  }

  .metrics-grid {
    grid-template-columns: 1fr 1fr !important;
  }

  .process-step {
    grid-template-columns: 48px 1fr !important;
  }
  .process-timeline::before {
    left: 23px !important;
  }
  .step-number {
    width: 36px !important;
    height: 36px !important;
    border-radius: 10px !important;
    font-size: 13px !important;
  }

  .section-depara h2,
  .section-products h2,
  .section-cards h2,
  .section-process h2,
  .section-cases h2,
  .section-cta h2 {
    font-size: 26px !important;
  }

  .case-content { padding: 20px !important; }
  .case-headline { font-size: 18px !important; }
  .case-metrics { gap: 6px !important; }
}
`}</style>
    </div>
  );
}

// ========================================
// ECOSYSTEM ANIMATION (Tech page diagram)
// ========================================
export function EcosystemAnimation() {
  const svgRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const frameRef = useRef(0);
  const startTimeRef = useRef(null);

  const nodes = useMemo(() => ({
    core: { x: 400, y: 250, label: "JUST Core", size: 40, color: "#f45546" },
    beneficios: { x: 160, y: 90, label: "Benefits", size: 26, color: "#6C5CE7" },
    frotas: { x: 400, y: 65, label: "Fleet", size: 26, color: "#00B894" },
    banking: { x: 640, y: 90, label: "Banking", size: 26, color: "#0984E3" },
    despesas: { x: 130, y: 380, label: "Expense", size: 26, color: "#E17055" },
    antecipacao: { x: 400, y: 410, label: "Credit", size: 26, color: "#FDCB6E" },
    "sob-demanda": { x: 670, y: 380, label: "Custom", size: 26, color: "#636E72" },
    swap: { x: 250, y: 500, label: "Swap / Idez", size: 22, color: "#1abc9c" },
    sitef: { x: 400, y: 520, label: "Sitef / Rede", size: 22, color: "#3498db" },
    gateway: { x: 550, y: 500, label: "Gateway", size: 22, color: "#9b59b6" },
  }), []);

  const getControlPoint = useMemo(() => (from, to, seed) => {
    const mx = (from.x + to.x) / 2;
    const my = (from.y + to.y) / 2;
    const perpX = -(to.y - from.y) * 0.25;
    const perpY = (to.x - from.x) * 0.25;
    return { x: mx + perpX * (0.6 + seed * 0.4), y: my + perpY * (0.6 + seed * 0.4) };
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const createParticle = (fromKey, toKey, seed) => {
      const from = nodes[fromKey];
      const to = nodes[toKey];
      const cp = getControlPoint(from, to, seed);
      return {
        id: Math.random(), fromKey, toKey, from, to, cp,
        progress: 0, color: from.color, trail: [],
      };
    };

    const launchQueue = [
      { from: "beneficios", to: "core", interval: 3200, offset: 0 },
      { from: "frotas", to: "core", interval: 2800, offset: 400 },
      { from: "banking", to: "core", interval: 3400, offset: 800 },
      { from: "despesas", to: "core", interval: 3000, offset: 1200 },
      { from: "antecipacao", to: "core", interval: 3600, offset: 1600 },
      { from: "sob-demanda", to: "core", interval: 3100, offset: 2000 },
      { from: "core", to: "swap", interval: 4000, offset: 2400 },
      { from: "core", to: "sitef", interval: 4200, offset: 2800 },
      { from: "core", to: "gateway", interval: 4400, offset: 3200 },
      { from: "swap", to: "core", interval: 5000, offset: 4200 },
      { from: "sitef", to: "core", interval: 5200, offset: 4600 },
      { from: "gateway", to: "core", interval: 5000, offset: 5000 },
      { from: "beneficios", to: "antecipacao", interval: 7000, offset: 6000 },
      { from: "frotas", to: "despesas", interval: 7500, offset: 7000 },
    ];

    const nextLaunch = {};
    launchQueue.forEach((q, i) => { nextLaunch[i] = q.offset; });

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const frame = frameRef.current++;

      launchQueue.forEach((q, i) => {
        if (elapsed >= nextLaunch[i]) {
          const seed = (Math.sin(i * 7.3 + frame * 0.01) + 1) * 0.5;
          particlesRef.current.push(createParticle(q.from, q.to, seed));
          nextLaunch[i] += q.interval;
        }
      });

      particlesRef.current = particlesRef.current.filter((p) => {
        p.progress += 0.006;
        if (p.progress > 1) return false;
        const t = p.progress;
        const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        const x = (1-eased)*(1-eased)*p.from.x + 2*(1-eased)*eased*p.cp.x + eased*eased*p.to.x;
        const y = (1-eased)*(1-eased)*p.from.y + 2*(1-eased)*eased*p.cp.y + eased*eased*p.to.y;
        p.trail.push({ x, y });
        if (p.trail.length > 10) p.trail.shift();
        p.cx = x; p.cy = y;
        p.glow = Math.sin(eased * Math.PI) * 0.8;
        return true;
      });

      const svg = svgRef.current;
      if (!svg) return;
      svg.querySelectorAll("[data-p]").forEach((el) => el.remove());

      particlesRef.current.forEach((p) => {
        let html = "";
        p.trail.forEach((pt, i) => {
          const op = (i / p.trail.length) * 0.35;
          const r = 1.5 + (i / p.trail.length) * 1;
          html += `<circle cx="${pt.x}" cy="${pt.y}" r="${r}" fill="${p.color}" opacity="${op}" data-p="1"/>`;
        });
        const gr = 5 + p.glow * 5;
        html += `<circle cx="${p.cx}" cy="${p.cy}" r="${gr}" fill="${p.color}" opacity="${0.4 + p.glow * 0.3}" filter="url(#pGlow)" data-p="1"/>`;
        html += `<circle cx="${p.cx}" cy="${p.cy}" r="3.5" fill="${p.color}" opacity="0.95" data-p="1"/>`;
        html += `<circle cx="${p.cx}" cy="${p.cy}" r="1.5" fill="#fff" opacity="0.7" data-p="1"/>`;
        svg.insertAdjacentHTML("beforeend", html);
      });

      const cg = svg.querySelector("[data-cg]");
      if (cg) {
        const s = 1 + Math.sin(frame * 0.025) * 0.25;
        cg.setAttribute("r", String(52 * s));
        cg.setAttribute("opacity", String(0.12 + Math.sin(frame * 0.025) * 0.06));
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [nodes, getControlPoint]);

  const connections = [
    ["beneficios","core"],["frotas","core"],["banking","core"],
    ["despesas","core"],["antecipacao","core"],["sob-demanda","core"],
    ["core","swap"],["core","sitef"],["core","gateway"],
    ["beneficios","antecipacao"],["frotas","despesas"],
  ];

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <svg ref={svgRef} viewBox="0 0 800 570" style={{ width: "100%", maxWidth: 800, height: "auto" }}>
        <defs>
          <filter id="nGlow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="cGlow"><feGaussianBlur stdDeviation="10" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="pGlow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <radialGradient id="bgGrad" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.015)"/>
            <stop offset="100%" stopColor="rgba(0,0,0,0.2)"/>
          </radialGradient>
        </defs>

        <rect width="800" height="570" fill="url(#bgGrad)" rx="16"/>

        <text x="30" y="70" fill="rgba(242,244,248,0.2)" fontSize="10" fontWeight="600" letterSpacing="2" textAnchor="start">PRODUCTS</text>
        <text x="30" y="245" fill="rgba(242,244,248,0.2)" fontSize="10" fontWeight="600" letterSpacing="2" textAnchor="start">CORE</text>
        <text x="30" y="495" fill="rgba(242,244,248,0.2)" fontSize="10" fontWeight="600" letterSpacing="2" textAnchor="start">INFRA</text>

        <line x1="30" y1="165" x2="770" y2="165" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4,8"/>
        <line x1="30" y1="460" x2="770" y2="460" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4,8"/>

        {connections.map((c, i) => {
          const f = nodes[c[0]], t = nodes[c[1]];
          const seed = (Math.sin(i * 5.7) + 1) * 0.5;
          const cp = getControlPoint(f, t, seed);
          return (
            <path key={i} d={`M ${f.x} ${f.y} Q ${cp.x} ${cp.y} ${t.x} ${t.y}`}
              stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" fill="none"
              strokeDasharray="4,6" strokeDashoffset={i * 10}
              style={{ animation: `ecosDash 15s linear infinite` }}
            />
          );
        })}

        {Object.entries(nodes).map(([key, n]) => (
          <g key={key}>
            <circle cx={n.x} cy={n.y} r={n.size + 10} fill={n.color} opacity="0.06" filter="url(#nGlow)"/>
            {key === "core" && <circle cx={n.x} cy={n.y} r={52} fill={n.color} opacity="0.12" data-cg="1"/>}
            <circle cx={n.x} cy={n.y} r={n.size} fill="#0f112b" opacity="0.7"/>
            <circle cx={n.x} cy={n.y} r={n.size} fill={n.color} opacity={key === "core" ? 0.9 : 0.5}
              filter={key === "core" ? "url(#cGlow)" : "url(#nGlow)"}/>
            <circle cx={n.x} cy={n.y} r={n.size} fill="none" stroke={n.color} strokeWidth="1.5" opacity="0.4"/>
            {key === "core" ? (
              <>
                <text x={n.x} y={n.y - 5} textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" letterSpacing="0.5">JUST</text>
                <text x={n.x} y={n.y + 9} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9" fontWeight="500">CORE</text>
              </>
            ) : (
              <text x={n.x} y={n.y + n.size + 18} textAnchor="middle" fill="rgba(242,244,248,0.65)" fontSize="10" fontWeight="600" letterSpacing="0.3">{n.label}</text>
            )}
          </g>
        ))}
      </svg>
      <style>{`@keyframes ecosDash { to { stroke-dashoffset: -80; } }`}</style>
    </div>
  );
}

// ========================================
// PRODUCT MOCKUPS - Realistic UI per vertical
// ========================================
const mockupBase = (color) => ({
  width: "100%", aspectRatio: "16/10", borderRadius: 12,
  background: `linear-gradient(145deg, ${color}0C, ${color}04)`,
  border: `1px solid ${color}18`,
  position: "relative", overflow: "hidden", padding: 0,
  boxShadow: `0 8px 32px ${color}08, inset 0 1px 0 ${color}10`,
});
const mockupBar = (color) => ({
  position: "absolute", top: 0, left: 0, right: 0, height: 28,
  background: `${color}0A`, borderBottom: `1px solid ${color}10`,
  display: "flex", alignItems: "center", padding: "0 10px", gap: 5,
});
const mockupDot = (color, op = "30") => ({ width: 7, height: 7, borderRadius: "50%", background: `${color}${op}` });
const mockupCard = (color, extra = {}) => ({
  background: `${color}08`, border: `1px solid ${color}12`, borderRadius: 8, padding: "8px 10px", ...extra,
});
const mockupText = (w, h = 5, color, op = "18") => ({
  width: w, height: h, background: `${color}${op}`, borderRadius: 3,
});

function BeneficiosMockup({ color }) {
  const cats = [
    { name: "Alimentação", pct: 78, val: "R$ 780" },
    { name: "Refeição", pct: 45, val: "R$ 450" },
    { name: "Mobilidade", pct: 92, val: "R$ 230" },
    { name: "Cultura", pct: 30, val: "R$ 150" },
  ];
  return (
    <div style={mockupBase(color)}>
      <div style={mockupBar(color)}>
        <div style={mockupDot(color, "50")} /><div style={mockupDot(color)} /><div style={mockupDot(color)} />
        <div style={{ marginLeft: 10, fontSize: 8, fontWeight: 700, color: `${color}60`, letterSpacing: "0.05em" }}>JUST Benefits</div>
        <div style={{ marginLeft: "auto", ...mockupText(40, 4, color) }} />
      </div>
      <div style={{ padding: "36px 14px 12px", display: "flex", gap: 10 }}>
        <div style={{ flex: 1.2 }}>
          <div style={{ ...mockupCard(color), marginBottom: 8, background: `linear-gradient(135deg, ${color}15, ${color}08)` }}>
            <div style={{ fontSize: 7, color: `${color}50`, fontWeight: 600, marginBottom: 2 }}>SALDO TOTAL</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: color, letterSpacing: "-0.02em" }}>R$ 1.610,00</div>
            <div style={{ fontSize: 6, color: `${color}40`, marginTop: 2 }}>4 categorias ativas</div>
          </div>
          {cats.map((c, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5, padding: "3px 0" }}>
              <div style={{ width: 4, height: 16, borderRadius: 2, background: color, opacity: 0.2 + i * 0.15 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                  <span style={{ fontSize: 7, color: `${color}60`, fontWeight: 500 }}>{c.name}</span>
                  <span style={{ fontSize: 7, color: `${color}80`, fontWeight: 700 }}>{c.val}</span>
                </div>
                <div style={{ height: 3, background: `${color}10`, borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${c.pct}%`, background: `linear-gradient(90deg, ${color}40, ${color}70)`, borderRadius: 2 }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 7, color: `${color}45`, fontWeight: 600, marginBottom: 4 }}>ULTIMAS TRANSACOES</div>
          {["Padaria Central", "Uber Eats", "Spotify", "iFood", "Shell"].map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 6px", borderRadius: 4, background: i % 2 === 0 ? `${color}04` : "transparent", marginBottom: 2 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ width: 14, height: 14, borderRadius: 4, background: `${color}${12 + i * 4}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 6, color: `${color}60` }}>
                  {t[0]}
                </div>
                <span style={{ fontSize: 7, color: `${color}50` }}>{t}</span>
              </div>
              <span style={{ fontSize: 7, color: `${color}40`, fontWeight: 600 }}>-R${(15 + i * 12).toFixed(0)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FrotasMockup({ color }) {
  const veiculos = [
    { placa: "ABC-1234", km: "142.350", fuel: 72, status: "Em rota" },
    { placa: "DEF-5678", km: "89.120", fuel: 35, status: "Parado" },
    { placa: "GHI-9012", km: "201.890", fuel: 91, status: "Em rota" },
  ];
  return (
    <div style={mockupBase(color)}>
      <div style={mockupBar(color)}>
        <div style={mockupDot(color, "50")} /><div style={mockupDot(color)} /><div style={mockupDot(color)} />
        <div style={{ marginLeft: 10, fontSize: 8, fontWeight: 700, color: `${color}60`, letterSpacing: "0.05em" }}>JUST Fleet</div>
      </div>
      <div style={{ padding: "34px 14px 10px", display: "flex", gap: 10 }}>
        <div style={{ flex: 1.3 }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
            {[{ l: "Frota ativa", v: "47" }, { l: "Abastecimentos/dia", v: "132" }, { l: "Gasto mensal", v: "R$284k" }].map((m, i) => (
              <div key={i} style={{ ...mockupCard(color), flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: color }}>{m.v}</div>
                <div style={{ fontSize: 6, color: `${color}45`, marginTop: 1 }}>{m.l}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 7, color: `${color}45`, fontWeight: 600, marginBottom: 4 }}>VEICULOS</div>
          {veiculos.map((v, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 8px", borderRadius: 6, background: i === 0 ? `${color}08` : "transparent", border: i === 0 ? `1px solid ${color}12` : "1px solid transparent", marginBottom: 3 }}>
              <div style={{ width: 20, height: 14, borderRadius: 3, background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8 }}>&#128663;</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 7, fontWeight: 700, color: `${color}70` }}>{v.placa}</span>
                  <span style={{ fontSize: 6, padding: "1px 5px", borderRadius: 3, background: v.status === "Em rota" ? `${color}15` : `${color}08`, color: `${color}60`, fontWeight: 500 }}>{v.status}</span>
                </div>
                <div style={{ display: "flex", gap: 8, marginTop: 2 }}>
                  <span style={{ fontSize: 6, color: `${color}40` }}>{v.km} km</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <div style={{ width: 30, height: 3, background: `${color}10`, borderRadius: 2 }}>
                      <div style={{ height: "100%", width: `${v.fuel}%`, background: v.fuel > 50 ? `${color}60` : "#E17055", borderRadius: 2 }} />
                    </div>
                    <span style={{ fontSize: 6, color: `${color}40` }}>{v.fuel}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ flex: 0.8 }}>
          <div style={{ ...mockupCard(color), height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 7, color: `${color}45`, fontWeight: 600, marginBottom: 6 }}>CONSUMO SEMANAL</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 3, flex: 1 }}>
              {[60, 45, 70, 85, 55, 90, 40].map((h, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                  <div style={{ width: "100%", height: h * 0.5, background: `linear-gradient(to top, ${color}30, ${color}10)`, borderRadius: 2, minHeight: 4 }} />
                  <span style={{ fontSize: 5, color: `${color}30` }}>{["S","T","Q","Q","S","S","D"][i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BankingMockup({ color }) {
  return (
    <div style={mockupBase(color)}>
      <div style={mockupBar(color)}>
        <div style={mockupDot(color, "50")} /><div style={mockupDot(color)} /><div style={mockupDot(color)} />
        <div style={{ marginLeft: 10, fontSize: 8, fontWeight: 700, color: `${color}60` }}>JUST Banking</div>
      </div>
      <div style={{ padding: "34px 14px 10px", display: "flex", gap: 10 }}>
        <div style={{ flex: 1 }}>
          <div style={{ ...mockupCard(color), marginBottom: 8, background: `linear-gradient(135deg, ${color}18, ${color}08)`, padding: "10px 12px" }}>
            <div style={{ fontSize: 6, color: `${color}45` }}>Conta Digital</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: color, margin: "2px 0", letterSpacing: "-0.02em" }}>R$ 45.230,00</div>
            <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
              {["PIX", "TED", "Boleto", "Cartão"].map((a) => (
                <div key={a} style={{ flex: 1, padding: "4px 0", borderRadius: 4, background: `${color}12`, textAlign: "center", fontSize: 6, color: `${color}60`, fontWeight: 600 }}>{a}</div>
              ))}
            </div>
          </div>
          <div style={{ fontSize: 7, color: `${color}45`, fontWeight: 600, marginBottom: 4 }}>MOVIMENTACAO</div>
          {[
            { t: "PIX recebido", from: "Empresa ABC", v: "+R$ 12.500", pos: true },
            { t: "Pagamento", from: "Fornecedor X", v: "-R$ 3.200", pos: false },
            { t: "TED enviada", from: "Conta Y", v: "-R$ 8.000", pos: false },
            { t: "PIX recebido", from: "Cliente Z", v: "+R$ 5.750", pos: true },
          ].map((tx, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 6px", borderRadius: 4, marginBottom: 2, background: i % 2 === 0 ? `${color}04` : "transparent" }}>
              <div>
                <div style={{ fontSize: 7, color: `${color}55`, fontWeight: 500 }}>{tx.t}</div>
                <div style={{ fontSize: 6, color: `${color}30` }}>{tx.from}</div>
              </div>
              <span style={{ fontSize: 8, fontWeight: 700, color: tx.pos ? `${color}80` : `${color}40` }}>{tx.v}</span>
            </div>
          ))}
        </div>
        <div style={{ flex: 0.7 }}>
          <div style={{ width: "100%", aspectRatio: "1.6/1", borderRadius: 8, background: `linear-gradient(135deg, ${color}30, ${color}15)`, padding: "10px 12px", position: "relative", marginBottom: 8 }}>
            <div style={{ fontSize: 6, color: `${color}60`, fontWeight: 600 }}>JUST</div>
            <div style={{ position: "absolute", bottom: 22, left: 12 }}>
              <div style={{ fontSize: 7, fontWeight: 600, color: `${color}80`, letterSpacing: "0.15em" }}>**** **** **** 4521</div>
            </div>
            <div style={{ position: "absolute", bottom: 10, left: 12, fontSize: 6, color: `${color}50` }}>Empresa LTDA</div>
            <div style={{ position: "absolute", bottom: 10, right: 12, fontSize: 8, fontWeight: 800, color: `${color}50` }}>VISA</div>
          </div>
          <div style={{ ...mockupCard(color), textAlign: "center" }}>
            <div style={{ fontSize: 6, color: `${color}40` }}>Limite disponível</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: color }}>R$ 25.000</div>
            <div style={{ height: 3, background: `${color}10`, borderRadius: 2, marginTop: 4 }}>
              <div style={{ height: "100%", width: "62%", background: `${color}50`, borderRadius: 2 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DespesasMockup({ color }) {
  return (
    <div style={mockupBase(color)}>
      <div style={mockupBar(color)}>
        <div style={mockupDot(color, "50")} /><div style={mockupDot(color)} /><div style={mockupDot(color)} />
        <div style={{ marginLeft: 10, fontSize: 8, fontWeight: 700, color: `${color}60` }}>JUST Expenses</div>
      </div>
      <div style={{ padding: "34px 14px 10px", display: "flex", gap: 10 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
            {[{ l: "Budget total", v: "R$ 120k" }, { l: "Utilizado", v: "R$ 78.4k" }, { l: "Pendentes", v: "12" }].map((m, i) => (
              <div key={i} style={{ ...mockupCard(color), flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 10, fontWeight: 800, color: i === 2 ? "#FDCB6E" : color }}>{m.v}</div>
                <div style={{ fontSize: 6, color: `${color}40`, marginTop: 1 }}>{m.l}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 7, color: `${color}45`, fontWeight: 600, marginBottom: 4 }}>APROVACOES PENDENTES</div>
          {[
            { user: "Maria S.", dept: "Marketing", val: "R$ 2.340", type: "SaaS" },
            { user: "Pedro R.", dept: "Tech", val: "R$ 890", type: "Viagem" },
            { user: "Ana L.", dept: "Vendas", val: "R$ 1.560", type: "Evento" },
          ].map((a, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 8px", borderRadius: 6, background: `${color}04`, marginBottom: 3, border: `1px solid ${color}08` }}>
              <div style={{ width: 18, height: 18, borderRadius: "50%", background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, fontWeight: 700, color: `${color}50` }}>{a.user[0]}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 7, fontWeight: 600, color: `${color}60` }}>{a.user}</span>
                  <span style={{ fontSize: 7, fontWeight: 700, color: `${color}70` }}>{a.val}</span>
                </div>
                <div style={{ display: "flex", gap: 4, marginTop: 1 }}>
                  <span style={{ fontSize: 5, color: `${color}35` }}>{a.dept}</span>
                  <span style={{ fontSize: 5, padding: "0 4px", borderRadius: 2, background: `${color}10`, color: `${color}45` }}>{a.type}</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: 3 }}>
                <div style={{ width: 16, height: 14, borderRadius: 3, background: `${color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, color: `${color}60` }}>&#10003;</div>
                <div style={{ width: 16, height: 14, borderRadius: 3, background: "#E1705515", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, color: "#E17055" }}>&#10007;</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ flex: 0.8 }}>
          <div style={{ ...mockupCard(color), marginBottom: 8 }}>
            <div style={{ fontSize: 7, color: `${color}45`, fontWeight: 600, marginBottom: 6 }}>GASTOS POR CATEGORIA</div>
            {[{ n: "SaaS", p: 35 }, { n: "Viagens", p: 25 }, { n: "Marketing", p: 20 }, { n: "Escritório", p: 12 }, { n: "Outros", p: 8 }].map((c, i) => (
              <div key={i} style={{ marginBottom: 4 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 1 }}>
                  <span style={{ fontSize: 6, color: `${color}50` }}>{c.n}</span>
                  <span style={{ fontSize: 6, color: `${color}40` }}>{c.p}%</span>
                </div>
                <div style={{ height: 3, background: `${color}0A`, borderRadius: 2 }}>
                  <div style={{ height: "100%", width: `${c.p}%`, background: `${color}${30 + i * 10}`, borderRadius: 2 }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ ...mockupCard(color), textAlign: "center", padding: 10 }}>
            <div style={{ fontSize: 6, color: `${color}35` }}>Política ativa</div>
            <div style={{ fontSize: 8, fontWeight: 700, color: `${color}60` }}>Nivel 3</div>
            <div style={{ fontSize: 5, color: `${color}30`, marginTop: 2 }}>Aprovação &gt; R$500</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AntecipacaoMockup({ color }) {
  return (
    <div style={mockupBase(color)}>
      <div style={mockupBar(color)}>
        <div style={mockupDot(color, "50")} /><div style={mockupDot(color)} /><div style={mockupDot(color)} />
        <div style={{ marginLeft: 10, fontSize: 8, fontWeight: 700, color: `${color}60` }}>JUST Credit</div>
      </div>
      <div style={{ padding: "34px 16px 12px", display: "flex", gap: 12 }}>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ ...mockupCard(color), background: `linear-gradient(135deg, ${color}14, ${color}08)`, padding: "14px 12px", marginBottom: 10 }}>
            <div style={{ fontSize: 6, color: `${color}45` }}>Limite de crédito disponível</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: color, margin: "4px 0", letterSpacing: "-0.02em" }}>R$ 3.200,00</div>
            <div style={{ fontSize: 6, color: `${color}35` }}>Aprovado | Vigência ativa</div>
            <div style={{ height: 4, background: `${color}10`, borderRadius: 3, margin: "8px 0 4px" }}>
              <div style={{ height: "100%", width: "40%", background: `linear-gradient(90deg, ${color}50, ${color}80)`, borderRadius: 3 }} />
            </div>
            <div style={{ fontSize: 5, color: `${color}30` }}>40% do limite utilizado</div>
          </div>
          <div style={{ ...mockupCard(color), padding: "10px", textAlign: "left" }}>
            <div style={{ fontSize: 7, color: `${color}50`, fontWeight: 600, marginBottom: 6, textAlign: "center" }}>SOLICITAR ANTECIPACAO</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "0 0 6px" }}>
              <span style={{ fontSize: 7, color: `${color}40` }}>Valor</span>
              <span style={{ fontSize: 10, fontWeight: 800, color: color }}>R$ 1.500</span>
            </div>
            <div style={{ height: 4, background: `${color}10`, borderRadius: 3, position: "relative", marginBottom: 6 }}>
              <div style={{ height: "100%", width: "47%", background: color, borderRadius: 3 }} />
              <div style={{ position: "absolute", top: -3, left: "47%", width: 10, height: 10, borderRadius: "50%", background: color, border: `2px solid ${color}20` }} />
            </div>
            <div style={{ width: "100%", padding: "5px 0", borderRadius: 5, background: `${color}25`, textAlign: "center", fontSize: 7, fontWeight: 700, color: `${color}90` }}>Solicitar agora</div>
          </div>
        </div>
        <div style={{ flex: 0.9 }}>
          <div style={{ fontSize: 7, color: `${color}45`, fontWeight: 600, marginBottom: 5 }}>HISTORICO</div>
          {[
            { date: "05 Jan", val: "R$ 2.000", status: "Pago" },
            { date: "05 Dez", val: "R$ 1.500", status: "Pago" },
            { date: "05 Nov", val: "R$ 3.000", status: "Pago" },
            { date: "05 Out", val: "R$ 1.800", status: "Pago" },
          ].map((h, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 6px", borderRadius: 4, background: i === 0 ? `${color}06` : "transparent", marginBottom: 3 }}>
              <div>
                <div style={{ fontSize: 7, color: `${color}55`, fontWeight: 500 }}>{h.date}</div>
                <div style={{ fontSize: 9, fontWeight: 700, color: `${color}70` }}>{h.val}</div>
              </div>
              <span style={{ fontSize: 6, padding: "2px 6px", borderRadius: 3, background: `${color}12`, color: `${color}55`, fontWeight: 500 }}>{h.status}</span>
            </div>
          ))}
          <div style={{ ...mockupCard(color), marginTop: 8, textAlign: "center", padding: 8 }}>
            <div style={{ fontSize: 6, color: `${color}35` }}>Total antecipado (12m)</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: color }}>R$ 22.400</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SobDemandaMockup({ color }) {
  const modules = [
    { name: "Core", active: true }, { name: "Auth", active: true }, { name: "BaaS", active: true },
    { name: "Cards", active: false }, { name: "PIX", active: true }, { name: "Rules", active: true },
    { name: "Reports", active: false }, { name: "Webhook", active: true }, { name: "KYC", active: false },
  ];
  return (
    <div style={mockupBase(color)}>
      <div style={mockupBar(color)}>
        <div style={mockupDot(color, "50")} /><div style={mockupDot(color)} /><div style={mockupDot(color)} />
        <div style={{ marginLeft: 10, fontSize: 8, fontWeight: 700, color: `${color}60` }}>JUST Builder</div>
      </div>
      <div style={{ padding: "36px 14px 12px" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <div style={{ ...mockupCard(color), flex: 1, textAlign: "center", background: `${color}10` }}>
            <div style={{ fontSize: 10, fontWeight: 800, color: color }}>Custom</div>
            <div style={{ fontSize: 6, color: `${color}40` }}>Projeto sob medida</div>
          </div>
          <div style={{ ...mockupCard(color), flex: 1, textAlign: "center" }}>
            <div style={{ fontSize: 6, color: `${color}40` }}>Modulos ativos</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: color }}>6/9</div>
          </div>
          <div style={{ ...mockupCard(color), flex: 1, textAlign: "center" }}>
            <div style={{ fontSize: 6, color: `${color}40` }}>Progresso</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: color }}>73%</div>
          </div>
        </div>
        <div style={{ fontSize: 7, color: `${color}45`, fontWeight: 600, marginBottom: 5 }}>MODULOS DO PROJETO</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4 }}>
          {modules.map((m, i) => (
            <div key={i} style={{
              padding: "6px 8px", borderRadius: 6, textAlign: "center",
              background: m.active ? `${color}12` : `${color}04`,
              border: `1px solid ${m.active ? `${color}20` : `${color}08`}`,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: m.active ? color : `${color}20`, margin: "0 auto 3px" }} />
              <div style={{ fontSize: 7, fontWeight: m.active ? 600 : 400, color: m.active ? `${color}70` : `${color}30` }}>{m.name}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
          <div style={{ ...mockupCard(color), flex: 1 }}>
            <div style={{ fontSize: 6, color: `${color}35`, marginBottom: 3 }}>Stack</div>
            <div style={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              {["Node.js", "React", "PostgreSQL", "Redis"].map((t) => (
                <span key={t} style={{ fontSize: 5, padding: "1px 4px", borderRadius: 2, background: `${color}10`, color: `${color}45` }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ ...mockupCard(color), flex: 1 }}>
            <div style={{ fontSize: 6, color: `${color}35`, marginBottom: 3 }}>Integradores</div>
            <div style={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              {["Swap", "Sitef", "Idez"].map((t) => (
                <span key={t} style={{ fontSize: 5, padding: "1px 4px", borderRadius: 2, background: `${color}10`, color: `${color}45` }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const MOCKUP_MAP = {
  beneficios: BeneficiosMockup,
  frotas: FrotasMockup,
  banking: BankingMockup,
  despesas: DespesasMockup,
  antecipacao: AntecipacaoMockup,
  "sob-demanda": SobDemandaMockup,
};

export function ProductMockup({ color, label, style = {}, productKey = null }) {
  const key = productKey || Object.keys(PRODUCT_COLORS).find(k => PRODUCT_COLORS[k]?.accent === color) || null;
  const MockupComponent = key ? MOCKUP_MAP[key] : null;
  if (MockupComponent) {
    return <div style={style}><MockupComponent color={color} /></div>;
  }
  // Fallback generico
  return (
    <div style={{ ...mockupBase(color), display: "flex", alignItems: "center", justifyContent: "center", ...style }}>
      <div style={mockupBar(color)}>
        <div style={mockupDot(color, "50")} /><div style={mockupDot(color)} /><div style={mockupDot(color)} />
      </div>
      <div style={{ marginTop: 16, textAlign: "center" }}>
        <div style={mockupText(100, 6, color, "20")} />
        <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
          <div style={{ width: 60, height: 36, background: `${color}10`, borderRadius: 6 }} />
          <div style={{ width: 60, height: 36, background: `${color}10`, borderRadius: 6 }} />
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 10, right: 10, fontSize: 9, fontWeight: 700, color: `${color}50` }}>{label}</div>
    </div>
  );
}

// ========================================
