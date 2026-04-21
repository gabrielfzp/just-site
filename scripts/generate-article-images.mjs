import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "@vercel/og";
import { distDir, rootDir } from "./load-content.mjs";

const palette = {
  navy: "#10243f",
  red: "#f45546",
  muted: "#536178",
  border: "#dbe3ee",
  soft: "#f6f8fb",
  warm: "#fff7f5",
  white: "#ffffff",
};

function text(value, style = {}) {
  return { type: "div", props: { style, children: value } };
}

function card(children, style = {}) {
  return {
    type: "div",
    props: {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "24px",
        borderRadius: 18,
        background: palette.white,
        border: `2px solid ${palette.border}`,
        ...style,
      },
      children,
    },
  };
}

function page(title, subtitle, children, eyebrow = "Cartão private label") {
  return {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "54px 62px",
        background: palette.soft,
        color: palette.navy,
        fontFamily: "Inter, Arial, sans-serif",
      },
      children: [
        {
          type: "div",
          props: {
            style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 34 },
            children: [
              text("JUST", { color: palette.red, fontSize: 28, fontWeight: 900, letterSpacing: "0.08em" }),
              text(eyebrow, { color: palette.muted, fontSize: 24, fontWeight: 700 }),
            ],
          },
        },
        text(title, { fontSize: 44, lineHeight: 1.1, fontWeight: 900, letterSpacing: "-0.01em", maxWidth: 940 }),
        text(subtitle, { marginTop: 24, marginBottom: 34, color: palette.muted, fontSize: 24, lineHeight: 1.35, maxWidth: 980 }),
        children,
      ],
    },
  };
}

function flowImage() {
  const steps = [
    ["Portador", "Compra no app, POS ou e-commerce"],
    ["PDV / checkout", "Envia valor, token e contexto"],
    ["Processadora", "Roteia autorização e clearing"],
    ["Autorizador", "Valida saldo, limite e antifraude"],
    ["Settlement", "Concilia valores dentro da rede"],
  ];

  return page(
    "Como a transação private label acontece",
    "Em arranjo fechado, o fluxo fica dentro do ecossistema do emissor. Menos intermediários, mais controle operacional.",
    {
      type: "div",
      props: {
        style: { display: "flex", alignItems: "stretch", gap: 14, marginTop: 4 },
        children: steps.flatMap(([label, description], index) => {
          const item = card([
            text(String(index + 1).padStart(2, "0"), { color: palette.red, fontSize: 22, fontWeight: 900 }),
            text(label, { color: palette.navy, fontSize: 30, lineHeight: 1.1, fontWeight: 900 }),
            text(description, { color: palette.muted, fontSize: 19, lineHeight: 1.35 }),
          ], { flex: 1, minHeight: 220 });

          if (index === steps.length - 1) return [item];
          return [
            item,
            text("->", { alignSelf: "center", color: palette.red, fontSize: 32, fontWeight: 900 }),
          ];
        }),
      },
    },
  );
}

function economicsImage() {
  const rows = [
    ["CAPEX", "R$ 50 mil a R$ 300 mil", "setup, produto, marca e integrações"],
    ["OPEX", "R$ 0,05 a R$ 0,30 / transação", "processamento, suporte e antifraude"],
    ["Risco", "3% a 12% do crédito", "PDD quando existe concessão de crédito"],
    ["Breakeven", "10 mil a 20 mil cartões ativos", "referência para private label de crédito"],
  ];

  return page(
    "Unit economics antes do go-live",
    "A decisão não é só técnica. O programa precisa fechar conta em volume, risco, custo de capital e recorrência.",
    {
      type: "div",
      props: {
        style: { display: "flex", flexDirection: "column", gap: 20, marginTop: 4 },
        children: [
          {
            type: "div",
            props: {
              style: { display: "flex", gap: 20 },
              children: rows.slice(0, 2).map(([label, value, description]) => card([
                text(label, { color: palette.red, fontSize: 20, fontWeight: 900 }),
                text(value, { color: palette.navy, fontSize: 34, lineHeight: 1.08, fontWeight: 900 }),
                text(description, { color: palette.muted, fontSize: 20, lineHeight: 1.35 }),
              ], { flex: 1, minHeight: 150 })),
            },
          },
          {
            type: "div",
            props: {
              style: { display: "flex", gap: 20 },
              children: rows.slice(2).map(([label, value, description]) => card([
                text(label, { color: palette.red, fontSize: 20, fontWeight: 900 }),
                text(value, { color: palette.navy, fontSize: 34, lineHeight: 1.08, fontWeight: 900 }),
                text(description, { color: palette.muted, fontSize: 20, lineHeight: 1.35 }),
              ], { flex: 1, minHeight: 150 })),
            },
          },
        ],
      },
    },
  );
}

function comparisonImage() {
  const models = [
    {
      title: "White label",
      signal: "Alcance",
      items: ["Bandeira aberta", "Aceitação ampla", "Banco ou IP parceiro", "Menos risco direto"],
    },
    {
      title: "Private label",
      signal: "Margem",
      items: ["Sem bandeira", "Aceitação restrita", "Arranjo fechado", "Mais controle do dado"],
    },
  ];

  return page(
    "White label vs private label",
    "A escolha muda quando você troca alcance por margem. O melhor modelo depende de aceitação, risco e fase do produto.",
    {
      type: "div",
      props: {
        style: { display: "flex", gap: 24, marginTop: 4 },
        children: models.map((model) => card([
          text(model.signal, { color: palette.red, fontSize: 20, fontWeight: 900, textTransform: "uppercase" }),
          text(model.title, { color: palette.navy, fontSize: 42, lineHeight: 1.05, fontWeight: 900 }),
          {
            type: "div",
            props: {
              style: { display: "flex", flexDirection: "column", gap: 12, marginTop: 10 },
              children: model.items.map((item) => ({
                type: "div",
                props: {
                  style: { display: "flex", alignItems: "center", gap: 12, color: palette.muted, fontSize: 24, fontWeight: 700 },
                  children: [
                    text("•", { color: palette.red, fontSize: 30, fontWeight: 900 }),
                    text(item, { lineHeight: 1.25 }),
                  ],
                },
              })),
            },
          },
        ], { flex: 1, minHeight: 310 })),
      },
    },
    "Comparativo de modelos",
  );
}

function openArrangementImage() {
  const steps = [
    ["Portador", "Passa o cartão no POS ou checkout"],
    ["Adquirente", "Captura e envia a transação"],
    ["Bandeira", "Roteia a mensagem no arranjo aberto"],
    ["Emissor", "Checa limite, saldo e antifraude"],
    ["Resposta", "Aprova ou recusa em milissegundos"],
  ];

  return page(
    "Como uma transação bandeirada trafega",
    "No arranjo aberto, a bandeira conecta adquirente e emissor. Esse roteamento é o que permite aceitação ampla.",
    {
      type: "div",
      props: {
        style: { display: "flex", alignItems: "stretch", gap: 14, marginTop: 4 },
        children: steps.flatMap(([label, description], index) => {
          const item = card([
            text(String(index + 1).padStart(2, "0"), { color: palette.red, fontSize: 22, fontWeight: 900 }),
            text(label, { color: palette.navy, fontSize: 29, lineHeight: 1.1, fontWeight: 900 }),
            text(description, { color: palette.muted, fontSize: 18, lineHeight: 1.35 }),
          ], { flex: 1, minHeight: 220 });

          if (index === steps.length - 1) return [item];
          return [
            item,
            text("->", { alignSelf: "center", color: palette.red, fontSize: 32, fontWeight: 900 }),
          ];
        }),
      },
    },
    "Cartão bandeirado",
  );
}

function expenseControlImage() {
  const models = [
    {
      title: "Controle reativo",
      subtitle: "Depois da compra",
      items: ["Fatura consolidada", "Auditoria manual", "CSV no ERP", "Correção depois do erro"],
    },
    {
      title: "Controle preventivo",
      subtitle: "Antes da autorização",
      items: ["Regra por MCC", "Limite por portador", "Centro de custo", "Bloqueio em tempo real"],
    },
  ];

  return page(
    "Cartão PJ: o que muda de verdade",
    "O nome do produto importa menos que a política operacional: quem aprova, quem paga e como a despesa entra na contabilidade.",
    {
      type: "div",
      props: {
        style: { display: "flex", gap: 24, marginTop: 4 },
        children: models.map((model) => card([
          text(model.subtitle, { color: palette.red, fontSize: 20, fontWeight: 900, textTransform: "uppercase" }),
          text(model.title, { color: palette.navy, fontSize: 40, lineHeight: 1.06, fontWeight: 900 }),
          {
            type: "div",
            props: {
              style: { display: "flex", flexDirection: "column", gap: 12, marginTop: 10 },
              children: model.items.map((item) => ({
                type: "div",
                props: {
                  style: { display: "flex", alignItems: "center", gap: 12, color: palette.muted, fontSize: 24, fontWeight: 700 },
                  children: [
                    text("•", { color: palette.red, fontSize: 30, fontWeight: 900 }),
                    text(item, { lineHeight: 1.25 }),
                  ],
                },
              })),
            },
          },
        ], { flex: 1, minHeight: 310 })),
      },
    },
    "Gestão de gastos PJ",
  );
}

const images = [
  ["cartao-private-label", "fluxo-transacao-private-label.png", flowImage()],
  ["cartao-private-label", "unit-economics-private-label.png", economicsImage()],
  ["white-label-vs-private-label", "comparativo-white-label-private-label.png", comparisonImage()],
  ["cartao-bandeirado-o-que-e", "fluxo-cartao-bandeirado.png", openArrangementImage()],
  ["diferenca-cartao-corporativo-empresarial", "controle-cartao-corporativo-empresarial.png", expenseControlImage()],
];

for (const [articleSlug, fileName, element] of images) {
  const publicArticleDir = join(rootDir, "public/conteudos", articleSlug);
  const distArticleDir = join(distDir, "conteudos", articleSlug);

  await mkdir(publicArticleDir, { recursive: true });
  await mkdir(distArticleDir, { recursive: true }).catch(() => {});

  const response = new ImageResponse(element, { width: 1200, height: 675 });
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(join(publicArticleDir, fileName), buffer);
  await writeFile(join(distArticleDir, fileName), buffer).catch(() => {});
}

console.log(`Generated ${images.length} article body image(s).`);
