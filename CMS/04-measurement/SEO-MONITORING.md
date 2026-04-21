# SEO, Analytics e LLMO — Monitoramento

## Objetivo

Medir descoberta, tráfego e conversão da Central de Conteúdos da JUST em três frentes:

- SEO tradicional: Google Search, Bing e indexação.
- Comportamento no site: visitantes, páginas, eventos e conversões.
- LLMO/AEO: tráfego vindo de ferramentas de IA e facilidade de citação por agentes.

## Setup inicial

### Google Search Console

1. Criar propriedade para `https://wearejust.it`.
2. Verificar por DNS ou por meta tag.
3. Se usar meta tag, preencher `VITE_GOOGLE_SITE_VERIFICATION`.
4. Enviar sitemap: `https://wearejust.it/sitemap.xml`.
5. Solicitar indexação das URLs prioritárias:
   - `/conteudos`
   - `/conteudos/cartao-private-label`
   - `/conteudos/white-label-vs-private-label`
   - `/conteudos/cartao-bandeirado-o-que-e`
   - `/conteudos/diferenca-cartao-corporativo-empresarial`

### Bing Webmaster

1. Criar propriedade para `https://wearejust.it`.
2. Importar dados do Google Search Console ou verificar por meta tag.
3. Se usar meta tag, preencher `VITE_BING_SITE_VERIFICATION`.
4. Enviar sitemap: `https://wearejust.it/sitemap.xml`.

### Analytics

O site suporta GA4 e Plausible ao mesmo tempo.

- GA4: preencher `VITE_GA4_ID`.
- Plausible: o snippet de `wearejust.it` já está no `<head>` do site. Se o Plausible gerar outro script, atualizar `VITE_PLAUSIBLE_SRC` e o snippet em `index.html`.

Eventos implementados:

| Evento | Objetivo |
|---|---|
| `contact_page_view` | Visita à página de contato |
| `contact_cta_click` | Clique em CTA para contato |
| `contact_form_submit` | Envio de formulário |
| `contact_form_error` | Erro no formulário |
| `whatsapp_click` | Clique no WhatsApp |
| `author_linkedin_click` | Clique no LinkedIn do autor |
| `company_linkedin_click` | Clique no LinkedIn da empresa |
| `article_view` | Visualização de artigo |
| `article_read_progress` | Leitura em 25%, 50%, 75%, 100% |
| `llm_referral` | Tráfego vindo de ferramentas de IA |

## KPIs mensais

### Aquisição orgânica

- Páginas indexadas.
- Impressões orgânicas.
- Cliques orgânicos.
- CTR.
- Posição média.
- Top queries por artigo.
- Top queries por cluster.

### Engajamento

- Pageviews por artigo.
- Usuários por artigo.
- Progresso médio de leitura.
- Percentual de leitores que chegam a 75%.
- Cliques em fontes externas.

### Conversão

- Visitas em `/contato`.
- Cliques em CTAs.
- Cliques no WhatsApp.
- Envios de formulário.
- Conversões assistidas por artigo.
- Artigos que mais geram contato.

### LLMO/AEO

- Eventos `llm_referral` por origem.
- Referrals de `chatgpt.com`, `perplexity.ai`, `claude.ai`, `gemini.google.com`, `copilot.microsoft.com`.
- Acessos a `/llms.txt`.
- Acessos aos `.md` dos artigos.
- Citações manuais em testes recorrentes no ChatGPT, Perplexity e Gemini.

## Rotina mensal

1. Exportar Search Console dos últimos 28 dias.
2. Comparar com o período anterior.
3. Listar queries com alta impressão e baixo CTR.
4. Listar páginas com posição média entre 4 e 20.
5. Ver quais artigos geraram `contact_cta_click`, `whatsapp_click` ou `contact_form_submit`.
6. Atualizar títulos, FAQs e links internos dos artigos com oportunidade clara.
7. Registrar ações no template mensal.

## Interpretação

- Alta impressão + baixo CTR: melhorar title/meta e primeiro bloco de resposta.
- Posição 8 a 20: reforçar links internos e autoridade do artigo.
- Boa leitura + baixa conversão: CTA fraco ou desalinhado ao contexto.
- Baixa leitura + boa impressão: conteúdo não está respondendo rápido o suficiente.
- Tráfego LLM sem conversão: criar CTA mais específico para o tema consultado.
