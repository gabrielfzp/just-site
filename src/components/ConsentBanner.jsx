/**
 * Banner de consentimento (LGPD).
 *
 * Postura da JUST: sem zona cinzenta. Aceitar liga tudo; recusar deixa apenas
 * a contagem agregada e anônima, sem cookie e sem identificador. As duas
 * opções têm o mesmo peso visual de propósito — "recusar" escondido em cinza
 * claro é consentimento obtido por desenho, e uma fintech que vende confiança
 * não pode se dar a esse luxo.
 *
 * Também não há "aceitar" pré-marcado nem coleta antes do clique: enquanto a
 * escolha não vem, o SDK não grava nada.
 */
import { useEffect, useState } from "react";
import { T } from "../site/shared.jsx";
import { consentimento, definirConsentimento } from "../lib/just-id.js";
import { aplicarConsentimentoGA4, initMetaPixel } from "../lib/analytics.js";

export default function ConsentBanner({ setPage }) {
  // estado inicial preguiçoso: a escolha já está no localStorage no primeiro
  // render, então não há motivo para renderizar escondido e corrigir depois
  const [visivel, setVisivel] = useState(() => consentimento() === null);
  const [entrou, setEntrou] = useState(false);

  useEffect(() => {
    if (!visivel) return undefined;
    // um quadro depois, para a transição de entrada acontecer
    const t = setTimeout(() => setEntrou(true), 60);
    return () => clearTimeout(t);
  }, [visivel]);

  if (!visivel) return null;

  const escolher = async (valor) => {
    setEntrou(false);
    aplicarConsentimentoGA4(valor);
    await definirConsentimento(valor);
    // o pixel só existe depois do aceite: carregá-lo antes já gravaria cookie
    if (valor === "concedido") initMetaPixel();
    setTimeout(() => setVisivel(false), 220);
  };

  const botao = (principal) => ({
    padding: "10px 20px",
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
        maxWidth: 880,
        margin: "0 auto",
        padding: "20px 22px",
        borderRadius: 12,
        background: "rgba(15,17,43,0.97)",
        backdropFilter: "blur(8px)",
        border: `1px solid ${T.borderHover}`,
        boxShadow: "0 18px 50px rgba(0,0,0,0.4)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 18,
        opacity: entrou ? 1 : 0,
        transform: entrou ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.22s ease, transform 0.22s ease",
      }}
    >
      <div style={{ flex: "1 1 380px", minWidth: 260 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: T.textLight, marginBottom: 6 }}>
          Cookies e medição
        </div>
        <p style={{ fontSize: 13.5, color: T.textMutedLight, lineHeight: 1.6, margin: 0 }}>
          Usamos cookies próprios para entender como o site é usado e reconhecer visitas
          recorrentes. Se você recusar, seguimos apenas com uma contagem agregada e anônima,
          sem cookie e sem identificar você.{" "}
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

      <div style={{ display: "flex", gap: 10, flex: "0 0 auto" }}>
        <button onClick={() => escolher("negado")} style={botao(false)}>
          Recusar
        </button>
        <button onClick={() => escolher("concedido")} style={botao(true)}>
          Aceitar
        </button>
      </div>
    </div>
  );
}
