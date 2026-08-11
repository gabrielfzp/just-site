/**
 * Banner de consentimento, em duas camadas.
 *
 * Camada 1: "Aceitar" em destaque e "Gerenciar opções" discreto ao lado.
 * Camada 2: as duas categorias reais, com "Recusar tudo" disponível.
 *
 * As opções da segunda camada são de verdade e mapeiam para comportamento
 * diferente no SDK (medição sem publicidade é um estado possível). Mostrar
 * chaves que não mudam nada seria pior que não mostrar chave nenhuma: quem
 * desligasse acharia que desligou.
 *
 * O que a recusa NÃO desliga é a medição de audiência anônima: ela não grava
 * nada no dispositivo, não cria identificador e morre com a visita. Está dita
 * no texto em vez de ficar implícita.
 */
import { useEffect, useState } from "react";
import { T } from "../site/shared.jsx";
import { consentimento, definirConsentimento } from "../lib/just-id.js";
import { aplicarConsentimentoGA4, initMetaPixel } from "../lib/analytics.js";

const CATEGORIAS = [
  {
    chave: "medicao",
    titulo: "Reconhecer visitas recorrentes",
    texto:
      "Um identificador aleatório no seu navegador para sabermos que é a mesma pessoa voltando. Sem nome, sem e-mail.",
  },
  {
    chave: "ads",
    titulo: "Publicidade",
    texto:
      "Permite que anúncios da JUST cheguem até você em outras plataformas e que a gente saiba qual anúncio funcionou.",
  },
];

export default function ConsentBanner({ setPage }) {
  const [visivel, setVisivel] = useState(() => consentimento() === null);
  const [entrou, setEntrou] = useState(false);
  const [detalhado, setDetalhado] = useState(false);
  const [opcoes, setOpcoes] = useState({ medicao: true, ads: true });

  useEffect(() => {
    if (!visivel) return undefined;
    const t = setTimeout(() => setEntrou(true), 60);
    return () => clearTimeout(t);
  }, [visivel]);

  if (!visivel) return null;

  const aplicar = async (medicao, ads) => {
    setEntrou(false);
    const valor = medicao ? "concedido" : "negado";
    aplicarConsentimentoGA4(valor, ads);
    await definirConsentimento(valor, ads ? "concedido" : "negado");
    if (medicao && ads) initMetaPixel();
    setTimeout(() => setVisivel(false), 220);
  };

  const botao = (principal) => ({
    padding: "10px 22px",
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "background 0.2s ease, border-color 0.2s ease",
    border: principal ? "none" : `1px solid ${T.borderHover}`,
    background: principal ? T.cta : "transparent",
    color: T.textLight,
  });

  const linkDiscreto = {
    background: "none",
    border: "none",
    padding: "10px 4px",
    color: T.textMuted,
    fontSize: 13,
    fontWeight: 500,
    cursor: "pointer",
    textDecoration: "underline",
    whiteSpace: "nowrap",
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Preferências de privacidade"
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 1100,
        maxWidth: detalhado ? 620 : 880,
        margin: "0 auto",
        padding: "20px 22px",
        borderRadius: 12,
        background: "rgba(15,17,43,0.97)",
        backdropFilter: "blur(8px)",
        border: `1px solid ${T.borderHover}`,
        boxShadow: "0 18px 50px rgba(0,0,0,0.4)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: detalhado ? "stretch" : "center",
        flexDirection: detalhado ? "column" : "row",
        gap: detalhado ? 14 : 18,
        opacity: entrou ? 1 : 0,
        transform: entrou ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.22s ease, transform 0.22s ease",
      }}
    >
      <div style={{ flex: detalhado ? "none" : "1 1 380px", minWidth: 260 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: T.textLight, marginBottom: 6 }}>
          {detalhado ? "Suas preferências" : "Cookies e medição"}
        </div>
        <p style={{ fontSize: 13.5, color: T.textMutedLight, lineHeight: 1.6, margin: 0 }}>
          {detalhado
            ? "Escolha o que a JUST pode usar. A medição anônima de audiência continua ativa nos dois casos: ela não grava nada no seu navegador e não identifica você."
            : "Usamos cookies próprios para entender como o site é usado e reconhecer visitas recorrentes."}{" "}
          {setPage && (
            <button
              onClick={() => setPage("privacidade")}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                color: T.cta,
                fontSize: 13.5,
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Política de Privacidade
            </button>
          )}
        </p>
      </div>

      {detalhado && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {CATEGORIAS.map((c) => (
            <label
              key={c.chave}
              style={{
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
                padding: "12px 14px",
                borderRadius: 8,
                border: `1px solid ${T.borderLight}`,
                background: "rgba(255,255,255,0.03)",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={opcoes[c.chave]}
                onChange={(e) =>
                  setOpcoes((prev) => {
                    const proximo = { ...prev, [c.chave]: e.target.checked };
                    // publicidade sem medição não existe: não há a quem atribuir
                    if (c.chave === "medicao" && !e.target.checked) proximo.ads = false;
                    if (c.chave === "ads" && e.target.checked) proximo.medicao = true;
                    return proximo;
                  })
                }
                style={{ marginTop: 3, width: 16, height: 16, accentColor: T.cta, cursor: "pointer" }}
              />
              <span>
                <span style={{ display: "block", fontSize: 14, fontWeight: 600, color: T.textLight }}>
                  {c.titulo}
                </span>
                <span style={{ display: "block", fontSize: 12.5, color: T.textMuted, lineHeight: 1.55, marginTop: 2 }}>
                  {c.texto}
                </span>
              </span>
            </label>
          ))}
        </div>
      )}

      <div
        style={{
          display: "flex",
          gap: 10,
          flex: "0 0 auto",
          alignItems: "center",
          justifyContent: detalhado ? "flex-end" : "initial",
        }}
      >
        {detalhado ? (
          <>
            <button onClick={() => aplicar(false, false)} style={botao(false)}>
              Recusar tudo
            </button>
            <button onClick={() => aplicar(opcoes.medicao, opcoes.ads)} style={botao(true)}>
              Salvar preferências
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setDetalhado(true)} style={linkDiscreto}>
              Gerenciar opções
            </button>
            <button onClick={() => aplicar(true, true)} style={botao(true)}>
              Aceitar
            </button>
          </>
        )}
      </div>
    </div>
  );
}
