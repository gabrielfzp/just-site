# TEF, POS VAN e POS Próprio: como escolher o meio de captura para seu cartão
Canônica: https://wearejust.it/conteudos/tef-pos-van-pos-proprio
Markdown: https://wearejust.it/conteudos/tef-pos-van-pos-proprio.md
Site: JUST Fintechs
Autor: Gabriel Pires
Categoria: Arranjo Fechado
Publicado em: 2026-04-23
Atualizado em: 2026-04-23
Tags: tef, pos, meio de captura, arranjo fechado, cartão
## Resposta curta
Em operação de cartão em arranjo fechado, o meio de captura é o equipamento ou aplicação que interliga o cartão ao estabelecimento comercial. As quatro opções principais são: POS próprio (maquininha da sua operação), POS VAN (uso da maquininha de terceiros via value aggregated network), TEF (transferência eletrônica de fundos integrada a sistemas fiscais) e terminal web (aplicação de captura baseada em navegador). Cada um tem custos, pra
# TEF, POS VAN e POS Próprio: como escolher o meio de captura para seu cartão

## Resposta direta

Em operação de cartão em arranjo fechado, o meio de captura é o equipamento ou aplicação que interliga o cartão ao estabelecimento comercial. As quatro opções principais são: POS próprio (maquininha da sua operação), POS VAN (uso da maquininha de terceiros via value aggregated network), TEF (transferência eletrônica de fundos integrada a sistemas fiscais) e terminal web (aplicação de captura baseada em navegador). Cada um tem custos, prazos e complexidades distintas. A escolha depende do tipo de estabelecimento, do volume e do grau de customização necessário.

## Por que o meio de captura importa

No arranjo fechado, você é dono de toda a cadeia: emite o cartão, credencia o estabelecimento, processa a transação. Mas a transação tem que acontecer em algum lugar. Esse lugar é o meio de captura.

Errar na escolha do meio de captura custa caro. Pode travar o credenciamento de estabelecimentos, inflar o custo operacional, ou criar dependência excessiva de um fornecedor.

Os quatro caminhos do mercado brasileiro cobrem perfis bem distintos. Vamos destrinchar cada um e no final dar um framework de escolha.

## POS Próprio: a maquininha da sua operação

POS (Point of Sale) próprio é a maquininha de cartão que pertence à sua operação. Você compra, configura, e distribui para os estabelecimentos credenciados.

**Como funciona.** Você contrata um fornecedor de hardware, um fornecedor de software (aplicação que roda na maquininha), um provedor de conectividade (se não for WiFi), e opera como dono do parque de equipamentos. A transação nasce no seu POS e vai direto para sua processadora.

**Principais provedores no Brasil.**

Marcas de equipamento: Gertec, Ingenico, Verifone. Modelos modernos baseados em Android têm saído na frente dos tradicionais Linux embarcado, pela flexibilidade de desenvolvimento.

Sistemas operacionais e aplicações: POS Android Gertec (recomendado para quem quer autonomia), NAVS da Skytef (agora Fiserv), Ger7.

Provedores de telecomunicações: Lyra Network (para conexão via internet/GPRS quando não tem WiFi disponível).

**Vantagens.**

Autonomia total no desenvolvimento de aplicações customizadas. Se você opera gestão de frota com regras específicas (limite de km por transação, restrição de tipo de combustível), o POS próprio permite embutir essas regras diretamente no software que roda no equipamento.

Fonte de receita adicional. Alguns programas monetizam o próprio POS como produto cobrando aluguel ou tarifa de captura do estabelecimento.

Cross-sell. Pode agregar funcionalidades extras (programas de fidelidade, aceitação de cartões de outras bandeiras via adquirência paralela, pedidos internos).

**Desvantagens.**

Alto custo de implementação. Compra de equipamentos (R$ 800 a R$ 2.500 por POS), conectividade, desenvolvimento e manutenção da aplicação.

Alto custo operacional. Logística de distribuição, manutenção de equipamentos, troca em caso de defeito.

Barreira no credenciamento. Estabelecimento que já tem várias maquininhas na mesa pode resistir a colocar mais uma, especialmente se o volume prometido for baixo. Concorrência com TEF e outras POS.

Risco de obsolescência. Equipamento tem ciclo de vida. A cada 3 a 5 anos, pode ser necessário renovar o parque.

**Quando faz sentido.** Operações que exigem alto nível de customização e ou potencial de cross-sell de produtos de valor agregado. Exemplos clássicos: cartão de combustível com regras de frota, cartão de benefício com validação de MCC em tempo real, cartão fidelidade que integra programa de pontos no ato da venda.

## POS VAN: usando maquininha de terceiros

POS VAN é quando você usa a maquininha de um adquirente existente (Cielo, Stone, Rede, SafraPay) como meio de captura. A sigla VAN vem de value aggregated network: rede de valor agregado. Nesse modelo, sua bandeira se integra aos sistemas do adquirente, e quando o cartão é passado naquela maquininha, a transação é direcionada para sua operação em vez de seguir pela rota padrão do adquirente.

**Como funciona.** Você negocia com um ou mais adquirentes (Cielo, Stone, Rede, SafraPay) a homologação da sua bandeira. Uma vez homologada, o cartão do seu programa pode ser passado nas maquininhas desses adquirentes, e a transação vai direto para sua processadora, sem passar pelo fluxo normal do adquirente.

**Vantagens.**

Alto nível de penetração no mercado. A maquininha já está no estabelecimento, então você aproveita a base instalada em vez de precisar colocar uma nova.

Reduz barreira no credenciamento. O estabelecimento não precisa aceitar um equipamento adicional. Basta habilitar sua bandeira na maquininha que ele já tem.

Viabiliza credenciamento de estabelecimentos de baixo volume. Se o lojista vende R$ 2 mil por mês, não vale uma POS própria. Mas ele já tem a do adquirente, então dá para incluir.

**Desvantagens.**

Maior custo transacional. O adquirente cobra por transação realizada através dele, geralmente uma tarifa de R$ 0,10 a R$ 0,50 por venda mais uma franquia mínima mensal (taxa mínima mesmo sem uso).

Alta barreira de negociação com os adquirentes. Eles não querem fazer o serviço por pouco. Os contratos costumam ser pesados, com cláusulas de exclusividade parciais, volumes mínimos, garantias.

Pouca customização. Se quer criar regra específica (ex: limite de combustível por transação), não dá para rodar ela no POS. Precisa implementar na sua processadora pós-captura.

**Quando faz sentido.** Operações que precisam cobrir rede ampla de estabelecimentos com volume baixo ou distribuído geograficamente. Cartão de benefício regional, cartão fidelidade multi-estado, programa B2B distribuído. Em todos esses, a rede pré-existente dos adquirentes resolve o problema de alcance sem o custo de montar parque próprio.

## TEF: o padrão das grandes redes varejistas

TEF (Transferência Eletrônica de Fundos) é o modelo em que o sistema fiscal do estabelecimento (PDV, ERP) se integra diretamente ao processador de pagamentos. A maquininha fica acoplada ao computador do caixa e não opera sozinha.

**Como funciona.** O caixa do supermercado digita o valor da compra no PDV. O PDV manda pro TEF, que manda a requisição de autorização. O cartão é passado na leitora de tarja/chip/contactless acoplada, o usuário insere PIN, a autorização volta pelo TEF e o recibo é impresso direto no sistema fiscal. É integração profunda entre frente de caixa e adquirência.

**Principais provedores no Brasil.**

SiTef (agora Fiserv): líder absoluto, aproximadamente 70% do mercado brasileiro.

Dtef (Linx): segundo maior, aproximadamente 20%.

Outros: PayGo (C6), Scope (Itaú) e outros menores, somados cobrem 10%.

**Vantagens.**

Baixo esforço de operacionalização. Quem implementa o TEF geralmente é a área de TI do próprio varejista, que já sabe fazer.

Custo de manutenção relativamente baixo. Cobrança é por transação, com franquia mínima. Não tem custo fixo de equipamento por estabelecimento (pelo menos no SiTef, que se acomoda no ambiente existente).

Padrão de fato para grandes redes varejistas. Supermercados, postos de combustível, redes de farmácia grande porte: quase todos operam com TEF.

**Desvantagens.**

Alto custo de homologação. SiTef cobra entre R$ 50 mil e R$ 150 mil para homologar uma nova bandeira, com prazo de 3 a 4 meses. Dtef cobra R$ 30 mil a R$ 80 mil, com prazo de 6 a 9 meses (mais alto esforço).

Dependência das condições comerciais dos fornecedores. Como existe concentração (SiTef tem 70% do mercado), o poder de barganha do emissor é baixo.

Não dá acesso automático a toda a rede credenciada. Mesmo com TEF homologado, cada estabelecimento precisa ser credenciado individualmente. O TEF só habilita o equipamento para aceitar sua bandeira. A relação comercial com o lojista é à parte.

**Quando faz sentido.** Operações que precisam cobrir grandes redes varejistas (supermercados, postos, varejo de médio/grande porte). Se seu cliente-alvo é a Pão de Açúcar, Carrefour ou a rede de postos Shell, TEF é o caminho. Fora desse perfil, o custo de homologação não compensa.

## Terminal Web: a rota mais leve

Terminal Web é uma aplicação de captura que roda em navegador. Em vez de maquininha, o estabelecimento usa um computador com internet para processar pagamentos.

**Como funciona.** O estabelecimento acessa uma URL, digita os dados do cartão (ou usa leitor USB conectado), e a transação é processada. Muitas operações têm também a versão app para celular Android/iOS, que cumpre função similar.

**Vantagens.**

Baixo custo de desenvolvimento. É uma aplicação web convencional, sem hardware dedicado.

Zero custo de manutenção de equipamento. Se o estabelecimento já tem computador ou celular, custo de infraestrutura é zero.

Independência e possibilidade de customização. Como é aplicação própria, você define cada tela, cada regra, cada fluxo.

Ideal como método de failover. Se o POS ou TEF principal do estabelecimento falha, o terminal web serve como plano B. Vários varejistas usam como backup quando a maquininha principal trava.

**Desvantagens.**

Acesso a computador com internet varia por estabelecimento. Lojas pequenas e informais podem não ter. Em zonas com conectividade ruim, não funciona.

Transação por terminal web tem perfil de risco um pouco maior do que chip EMV presencial. Precisa de antifraude adicional.

**Quando faz sentido.** Complemento para outras operações (failover), operações com parceiros específicos (onde você define que o terminal web será o meio oficial), ou mercados onde o estabelecimento já tem computador e prefere não adicionar maquininha.

## Comparativo: qual escolher

| Dimensão | POS Próprio | POS VAN | TEF | Terminal Web |
|---|---|---|---|---|
| Esforço de implementação técnica | Médio | Médio | Alto | Baixo |
| Esforço de implementação comercial | N/A (você controla) | Alto | Baixo | N/A |
| Custo de homologação | Baixo | Médio (R$ 10-50k) | Alto (R$ 30-150k) | Baixo |
| Custo operacional | Alto (por estabelecimento) | Alto (por transação) | Médio (por transação) | Baixo |
| Prazo típico | 3 a 6 meses | 2 a 9 meses | 3 a 9 meses | 1 a 3 meses |
| Flexibilidade de customização | Alta | Baixa | Média | Alta |
| Penetração de mercado | Baixa (constrói) | Alta (pré-existente) | Alta em grandes redes | Baixa |

## Framework de escolha

Pra orientar a decisão, três perguntas principais:

**Qual é o porte do estabelecimento-alvo?**

Grandes redes (supermercado, posto, varejo de médio/grande porte): TEF é o padrão.

Pequenos estabelecimentos dispersos: POS VAN aproveita rede existente sem trabalho de parque próprio.

Estabelecimentos parceiros específicos, com operação customizada: POS próprio.

**Qual é o volume de transações por estabelecimento?**

Alto volume (lojas de bandeira, operações de frota com alto consumo): POS próprio compensa investimento.

Volume médio distribuído: TEF ou POS VAN.

Volume baixo com muitos estabelecimentos: POS VAN ou terminal web.

**Qual é o grau de customização necessário?**

Regras complexas no ato da transação (limite por categoria, validação de MCC, integração com sistema de frota): POS próprio.

Regras padrão da bandeira, sem customização no captura: TEF ou POS VAN.

Regras customizadas implementadas na processadora pós-captura: qualquer opção funciona.

## O que a gente na JUST costuma recomendar

Operações que estão começando em arranjo fechado têm benefício de começar com POS VAN ou Terminal Web. São mais rápidos de ir a mercado, baratos e permitem validar o modelo sem assumir CAPEX alto.

Conforme a operação cresce e identifica perfil do estabelecimento-alvo, vale adicionar TEF (para grandes redes) ou POS próprio (para casos de customização).

Híbrido é comum e desejável. Uma operação madura geralmente tem POS VAN como rede ampla, TEF nas grandes redes, POS próprio em estabelecimentos específicos e terminal web como failover universal. Cada meio atende um perfil distinto.

## Erros comuns que a gente vê

**Começar com POS próprio sem saber se vale a escala.** Muita operação investe em parque de POS antes de validar o modelo. Se a adesão do estabelecimento for baixa, os equipamentos param encaixotados no escritório. Caro e chato de desfazer.

**Homologar TEF antes de ter grandes redes na pipeline.** Investir R$ 100 mil em homologação SiTef pra só depois ir conversar com os varejistas grandes é inverter a ordem. Valide comercialmente antes de investir tecnicamente.

**Depender de um único meio de captura.** Se a operação tem só POS próprio, uma falha de fornecedor pode derrubar toda a captura. Ter pelo menos duas rotas (ex: POS próprio e terminal web como failover) reduz esse risco.

**Não medir custo total de operação.** O custo por transação parece baixo isoladamente, mas multiplicado por milhares de transações mês por mês, vira ponto central de P&L. Modelar isso antes de contratar cada meio.

## FAQ

**O que é TEF em cartão?**

TEF (Transferência Eletrônica de Fundos) é o modelo em que o sistema fiscal do estabelecimento (PDV, ERP) se integra diretamente ao processador de pagamentos. É o padrão em grandes redes varejistas como supermercados e postos de combustível.

**Qual é a diferença entre POS próprio e POS VAN?**

POS próprio é a maquininha da sua operação, comprada e operada por você. POS VAN é a maquininha de um adquirente existente (Cielo, Stone, Rede) onde sua bandeira é homologada para funcionar. No POS VAN você aproveita a rede instalada; no POS próprio você constrói sua rede do zero.

**Quem são os principais provedores de TEF no Brasil?**

SiTef (Fiserv), com aproximadamente 70% do mercado. Dtef (Linx), com aproximadamente 20%. Outros provedores menores como PayGo (C6) e Scope (Itaú) somam os 10% restantes.

**Quanto custa homologar uma bandeira em TEF?**

No SiTef, entre R$ 50 mil e R$ 150 mil, com prazo de 3 a 4 meses. No Dtef, entre R$ 30 mil e R$ 80 mil, com prazo de 6 a 9 meses. Fora do custo de homologação, há custo por transação com franquia mínima mensal.

**Qual é o melhor meio de captura para começar?**

Depende do seu caso. Para a maioria das operações novas em arranjo fechado, começar com POS VAN ou terminal web faz sentido. São mais rápidos, mais baratos e permitem validar o modelo antes de investir em POS próprio ou TEF.

**POS VAN me dá acesso a toda a rede do adquirente?**

Não automaticamente. Mesmo depois de homologado no adquirente, cada estabelecimento precisa ser credenciado individualmente pela sua operação. O POS VAN só habilita a maquininha do adquirente para aceitar sua bandeira. A relação comercial com o lojista é separada.

**Terminal web é seguro?**

Terminal web é relativamente seguro para transações não presentes (e-commerce). Para transações presenciais sem chip EMV, o nível de segurança é menor do que POS ou TEF. Por isso o uso principal costuma ser como failover ou em parcerias específicas, não como meio primário.

**Preciso de TEF se vendo para supermercados?**

Praticamente sim. Supermercados grandes (Pão de Açúcar, Carrefour, Assaí, Atacadão) operam com TEF (SiTef ou Dtef) integrado ao sistema fiscal. Se sua operação não está homologada em TEF, dificilmente consegue entrar nesses estabelecimentos.

**Posso usar mais de um meio de captura ao mesmo tempo?**

Sim, e é recomendado. Operações maduras costumam ter combinação: POS VAN para amplitude de rede, TEF para grandes varejistas, POS próprio para estabelecimentos específicos, terminal web como failover. Cada meio atende um perfil de estabelecimento.

**Qual é a vantagem de POS baseado em Android?**

Flexibilidade de desenvolvimento. Android permite criar aplicações customizadas com UX moderna, integração com APIs próprias, cross-sell de produtos complementares. POS tradicionais (Linux embarcado) têm limitações que dificultam esse nível de personalização.

## Próximo passo

Se você está estruturando operação de cartão em arranjo fechado e precisa escolher qual meio de captura usar, a JUST atua como facilitadora em homologações em POS VAN e TEF, reduzindo o tempo e o esforço técnico envolvido. [Fale com a gente](/contato) para entender o caminho certo para sua operação.
