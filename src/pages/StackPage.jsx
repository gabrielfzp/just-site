import React, { useState } from "react";
import { Btn, EcosystemAnimation, HeroOrbital, Metric, ProductIcon, ProductMockup, PRODUCT_COLORS, Reveal, SectionTitle, T, T18N, Tag } from "../site/shared.jsx";

export default function StackPage({ setPage, lang }) {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const tr = (T18N[lang] || T18N["pt-BR"]).stack;
  const [tab, setTab] = useState(0);
  const tabs = [
    { t: "Core Financeiro", hint: "Processamento próprio", icon: "core", d: "Core proprietário, modular e escalável. Controle total sobre fluxos financeiros, regras de negócio e operação. O controle do core reduz risco, aumenta previsibilidade e acelera decisões.", tags: ["Autorizador próprio","Ledger financeiro","Split de pagamentos","Conciliação unificada","Multi-tenant","Processamento ISO 8583"], visual: [{n:"Autorizador",c:"#f45546",bg:"rgba(244,85,70,0.1)",bc:"rgba(244,85,70,0.2)"},{n:"Ledger",c:"#55efc4",bg:"rgba(0,184,148,0.08)",bc:"rgba(0,184,148,0.15)"},{n:"Split",c:"#74b9ff",bg:"rgba(9,132,227,0.08)",bc:"rgba(9,132,227,0.15)"},{n:"Conciliação",c:"#a29bfe",bg:"rgba(108,92,231,0.08)",bc:"rgba(108,92,231,0.15)"}] },
    { t: "Multi BaaS", hint: "Sem lock-in", icon: "baas", d: "Arquitetura que suporta múltiplos provedores simultaneamente. Failover automático, sem lock-in, migracao sem impacto. Nenhum produto financeiro deve depender de um único fornecedor.", tags: ["Multi-provider","Failover automático","Hot-swap","Migracao zero-downtime"], visual: [{n:"Provider A",c:"#1abc9c",bg:"rgba(26,188,156,0.08)",bc:"rgba(26,188,156,0.15)"},{n:"Provider B",c:"#1abc9c",bg:"rgba(26,188,156,0.08)",bc:"rgba(26,188,156,0.15)"},{n:"Fallback",c:"#FDCB6E",bg:"rgba(253,203,110,0.08)",bc:"rgba(253,203,110,0.15)"}] },
    { t: "Arranjo Fechado", hint: "Rede própria", icon: "closed", d: "Processamento em circuito fechado. Rede própria de captura, taxas customizadas, controle total sobre regras de aceite e independência operacional.", tags: ["Rede própria","Taxas customizadas","Regras de aceite","TEF/POS/QR","RFID/NFC"], visual: [{n:"Captura",c:"#6C5CE7",bg:"rgba(108,92,231,0.08)",bc:"rgba(108,92,231,0.15)"},{n:"Autorizador",c:"#f45546",bg:"rgba(244,85,70,0.1)",bc:"rgba(244,85,70,0.2)"},{n:"Liquidação",c:"#55efc4",bg:"rgba(0,184,148,0.08)",bc:"rgba(0,184,148,0.15)"}] },
    { t: "Gateway", hint: "Roteamento inteligente", icon: "gateway", d: "Roteamento inteligente entre adquirentes, retentativas, split de pagamentos e conciliação unificada. Maximize aprovação, minimize custos.", tags: ["Smart routing","Retentativas","Split payments","Conciliação"], visual: [{n:"Transação",c:"#74b9ff",bg:"rgba(9,132,227,0.08)",bc:"rgba(9,132,227,0.15)"},{n:"Router",c:"#f45546",bg:"rgba(244,85,70,0.1)",bc:"rgba(244,85,70,0.2)"},{n:"Acquirer A",c:"#1abc9c",bg:"rgba(26,188,156,0.08)",bc:"rgba(26,188,156,0.15)"},{n:"Acquirer B",c:"#1abc9c",bg:"rgba(26,188,156,0.08)",bc:"rgba(26,188,156,0.15)"}] },
    { t: "Motor de Regras", hint: "Regras configuráveis", icon: "rules", d: "Regras financeiras configuráveis: limites, políticas de uso, compliance, fluxos de aprovação e prevenção a fraude. Sem código, sem deploy.", tags: ["Limites dinâmicos","Políticas de uso","Compliance","Anti-fraude","Zero-code"], visual: [{n:"Evento",c:"#74b9ff",bg:"rgba(9,132,227,0.08)",bc:"rgba(9,132,227,0.15)"},{n:"Regras",c:"#FDCB6E",bg:"rgba(253,203,110,0.08)",bc:"rgba(253,203,110,0.15)"},{n:"Ação",c:"#55efc4",bg:"rgba(0,184,148,0.08)",bc:"rgba(0,184,148,0.15)"}] },
    { t: "Apps & Backoffice", hint: "Experiência com sua marca", icon: "apps", d: "Apps nativos e painel administrativo unificado. Gestão de usuários, cartões, movimentações e relatórios. Sua marca, sua experiência.", tags: ["App iOS/Android","Portal web","Backoffice","Sua marca","Push notifications"], visual: [{n:"App Mobile",c:"#E17055",bg:"rgba(225,112,85,0.08)",bc:"rgba(225,112,85,0.15)"},{n:"Portal",c:"#a29bfe",bg:"rgba(108,92,231,0.08)",bc:"rgba(108,92,231,0.15)"},{n:"Admin",c:"#74b9ff",bg:"rgba(9,132,227,0.08)",bc:"rgba(9,132,227,0.15)"}] },
  ];
  const tabIcons = {
    core: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f45546" strokeWidth="2"><rect x="2" y="3" width="20" height="18" rx="3"/><path d="M8 7h8M8 11h5"/></svg>,
    baas: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1abc9c" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>,
    closed: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    gateway: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0984E3" strokeWidth="2"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M14 14l7 7M3 8V3h5M10 10L3 3"/></svg>,
    rules: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FDCB6E" strokeWidth="2"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>,
    apps: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E17055" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
  };
  const tabColors = { core: "rgba(244,85,70,0.1)", baas: "rgba(26,188,156,0.1)", closed: "rgba(108,92,231,0.1)", gateway: "rgba(9,132,227,0.1)", rules: "rgba(253,203,110,0.1)", apps: "rgba(225,112,85,0.1)" };
  const products = [
    { name: "Benefits", cls: "b", desc: "Cartões de benefícios: VA, VR, VT, mobilidade e multibenefícios" },
    { name: "Fleet", cls: "f", desc: "Gestão de combustível, pedágio, manutenção e controle de frotas" },
    { name: "Banking", cls: "k", desc: "Conta digital, cartão, PIX, transferências e serviços financeiros" },
    { name: "Expenses", cls: "e", desc: "Despesas corporativas, cartão corporativo e prestação de contas" },
    { name: "Credit", cls: "c", desc: "Antecipação salarial, crédito consignado e recebíveis" },
    { name: "Custom", cls: "x", desc: "Produtos financeiros sob medida para o seu negócio" },
  ];

  return (
    <div>
      <style>{`
/* ===== TECH PAGE - HERO ARCH DIAGRAM ===== */
@keyframes ha-core-pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(244,85,70,0.05); }
  50% { box-shadow: 0 0 35px rgba(244,85,70,0.12); }
}
@keyframes ha-conn-flow {
  0% { opacity: 0.06; }
  50% { opacity: 0.2; }
  100% { opacity: 0.06; }
}
.hero-arch {
  border-radius: 16px; border: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.02); padding: 28px 24px;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
}
.hero-arch:hover {
  border-color: rgba(255,255,255,0.1);
  box-shadow: 0 12px 48px rgba(0,0,0,0.25);
}
.ha-label {
  font-size: 9px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;
  color: rgba(242,244,248,0.2); margin-bottom: 8px; text-align: center;
  transition: color 0.3s;
}
.hero-arch:hover .ha-label { color: rgba(242,244,248,0.3); }
.ha-row { display: flex; gap: 6px; justify-content: center; flex-wrap: wrap; margin-bottom: 6px; }
.ha-box {
  padding: 6px 12px; border-radius: 6px; font-size: 10px; font-weight: 600;
  text-align: center; white-space: nowrap;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); cursor: default;
}
.ha-box:hover { transform: translateY(-2px); }
.ha-box.ch { background: rgba(108,92,231,0.1); border: 1px solid rgba(108,92,231,0.2); color: #a29bfe; }
.ha-box.ch:hover { background: rgba(108,92,231,0.16); border-color: rgba(108,92,231,0.35); box-shadow: 0 4px 16px rgba(108,92,231,0.12); }
.ha-box.sec { background: rgba(244,85,70,0.06); border: 1px solid rgba(244,85,70,0.12); color: rgba(244,85,70,0.6); padding: 5px 20px; }
.ha-box.sec:hover { background: rgba(244,85,70,0.1); border-color: rgba(244,85,70,0.25); box-shadow: 0 4px 16px rgba(244,85,70,0.08); }
.ha-box.core { background: rgba(244,85,70,0.12); border: 1px solid rgba(244,85,70,0.25); color: #f45546; padding: 8px 20px; font-size: 12px; animation: ha-core-pulse 3s ease-in-out infinite; }
.ha-box.core:hover { background: rgba(244,85,70,0.18); border-color: rgba(244,85,70,0.4); box-shadow: 0 6px 24px rgba(244,85,70,0.15); animation: none; transform: translateY(-2px) scale(1.03); }
.ha-box.cap { background: rgba(0,184,148,0.06); border: 1px solid rgba(0,184,148,0.12); color: #55efc4; font-size: 9px; padding: 4px 10px; }
.ha-box.cap:hover { background: rgba(0,184,148,0.12); border-color: rgba(0,184,148,0.25); box-shadow: 0 4px 12px rgba(0,184,148,0.1); }
.ha-box.mod { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); font-size: 9px; position: relative; }
.ha-box.mod:hover { background: rgba(255,255,255,0.06); }
.ha-box.mod.b { color: #a29bfe; border-color: rgba(108,92,231,0.15); }
.ha-box.mod.b:hover { border-color: rgba(108,92,231,0.35); box-shadow: 0 4px 12px rgba(108,92,231,0.08); }
.ha-box.mod.f { color: #55efc4; border-color: rgba(0,184,148,0.15); }
.ha-box.mod.f:hover { border-color: rgba(0,184,148,0.35); box-shadow: 0 4px 12px rgba(0,184,148,0.08); }
.ha-box.mod.k { color: #74b9ff; border-color: rgba(9,132,227,0.15); }
.ha-box.mod.k:hover { border-color: rgba(9,132,227,0.35); box-shadow: 0 4px 12px rgba(9,132,227,0.08); }
.ha-box.mod.e { color: #E17055; border-color: rgba(225,112,85,0.15); }
.ha-box.mod.e:hover { border-color: rgba(225,112,85,0.35); box-shadow: 0 4px 12px rgba(225,112,85,0.08); }
.ha-box.mod.c { color: #FDCB6E; border-color: rgba(253,203,110,0.15); }
.ha-box.mod.c:hover { border-color: rgba(253,203,110,0.35); box-shadow: 0 4px 12px rgba(253,203,110,0.08); }
.ha-box.mod.x { color: #b2bec3; border-color: rgba(99,110,114,0.15); }
.ha-box.mod.x:hover { border-color: rgba(99,110,114,0.35); }
.ha-box.prov { background: rgba(9,132,227,0.06); border: 1px solid rgba(9,132,227,0.12); color: #74b9ff; font-size: 9px; padding: 4px 10px; }
.ha-box.prov:hover { background: rgba(9,132,227,0.12); border-color: rgba(9,132,227,0.25); box-shadow: 0 4px 12px rgba(9,132,227,0.1); }
.ha-box.baas { background: rgba(26,188,156,0.06); border: 1px solid rgba(26,188,156,0.12); color: #1abc9c; font-size: 9px; padding: 4px 10px; }
.ha-box.baas:hover { background: rgba(26,188,156,0.12); border-color: rgba(26,188,156,0.25); box-shadow: 0 4px 12px rgba(26,188,156,0.1); }
.ha-conn { text-align: center; color: rgba(242,244,248,0.08); font-size: 12px; margin: 4px 0; letter-spacing: 3px; animation: ha-conn-flow 2s ease-in-out infinite; }
.ha-conn:nth-of-type(2) { animation-delay: 0.4s; }
.ha-conn:nth-of-type(3) { animation-delay: 0.8s; }
.ha-div { height: 1px; margin: 10px 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent); }
.ha-bottom { text-align: center; margin-top: 12px; padding: 8px 16px; background: linear-gradient(135deg, rgba(108,92,231,0.06), rgba(244,85,70,0.06)); border-radius: 8px; border: 1px solid rgba(255,255,255,0.04); font-size: 10px; font-weight: 600; color: rgba(242,244,248,0.35); transition: all 0.3s ease; }
.ha-bottom:hover { border-color: rgba(255,255,255,0.1); background: linear-gradient(135deg, rgba(108,92,231,0.1), rgba(244,85,70,0.1)); color: rgba(242,244,248,0.5); }
/* Tooltip */
.ha-tooltip {
  position: absolute; bottom: calc(100% + 10px); left: 50%; transform: translateX(-50%) scale(0.95);
  padding: 10px 14px; border-radius: 8px; white-space: normal; width: 200px;
  background: rgba(21,26,45,0.95); border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  font-size: 11px; font-weight: 400; line-height: 1.5; color: rgba(242,244,248,0.6);
  opacity: 0; pointer-events: none; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); z-index: 10;
}
.ha-tooltip::after { content: ''; position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border: 5px solid transparent; border-top-color: rgba(255,255,255,0.1); }
.ha-box.mod:hover .ha-tooltip { opacity: 1; transform: translateX(-50%) scale(1); }
.ha-tooltip strong { display: block; font-weight: 600; color: rgba(242,244,248,0.85); margin-bottom: 3px; font-size: 11px; }

/* ===== TECH PAGE - VERTICAL TABS ===== */
.vtabs-layout { display: grid; grid-template-columns: 280px 1fr; gap: 0; margin-top: 40px; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06); }
.vtabs-nav { background: rgba(255,255,255,0.02); border-right: 1px solid rgba(255,255,255,0.06); }
.vtab-item { display: flex; align-items: center; gap: 14px; padding: 20px 24px; cursor: pointer; transition: all 0.2s; border-bottom: 1px solid rgba(255,255,255,0.03); border-left: 3px solid transparent; }
.vtab-item:hover { background: rgba(255,255,255,0.02); }
.vtab-item.active { background: rgba(244,85,70,0.04); border-left-color: #f45546; }
.vtab-icon { width: 36px; height: 36px; border-radius: 8px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
.vtab-item .vtab-label { font-size: 13px; font-weight: 600; color: rgba(242,244,248,0.4); }
.vtab-item .vtab-hint { font-size: 11px; color: rgba(242,244,248,0.2); margin-top: 2px; }
.vtab-item.active .vtab-label { color: rgba(242,244,248,0.9); }
.vtab-item.active .vtab-hint { color: rgba(242,244,248,0.35); }
.vtab-panel { padding: 40px; background: rgba(255,255,255,0.015); min-height: 380px; display: flex; flex-direction: column; justify-content: center; }
.vtab-panel h3 { font-size: 24px; font-weight: 700; margin-bottom: 14px; color: #f2f4f8; }
.vtab-panel p { font-size: 15px; color: rgba(242,244,248,0.5); line-height: 1.7; margin-bottom: 20px; }
.vtab-panel .features { display: flex; flex-wrap: wrap; gap: 8px; }
.feat-tag { padding: 6px 12px; border-radius: 6px; font-size: 11px; font-weight: 500; background: rgba(244,85,70,0.06); border: 1px solid rgba(244,85,70,0.12); color: rgba(242,244,248,0.5); }
.vtab-visual { margin-bottom: 20px; padding: 16px 20px; border-radius: 10px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
.vv-node { padding: 5px 10px; border-radius: 5px; font-size: 10px; font-weight: 600; }

/* ===== TECH PAGE - MULTI-PROVIDER DIAGRAM ===== */
@keyframes mp-pulse-glow { 0%, 100% { box-shadow: 0 0 30px rgba(244,85,70,0.04); } 50% { box-shadow: 0 0 50px rgba(244,85,70,0.1); } }
@keyframes mp-dot-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.7); } }
@keyframes mp-flow-down { 0% { background-position: 0 -20px; } 100% { background-position: 0 20px; } }
@keyframes mp-fan-drop-pulse { 0%, 100% { opacity: 0.08; height: 16px; } 50% { opacity: 0.25; height: 18px; } }
.mp-diagram { margin-top: 48px; }
.mp-product-row { display: flex; justify-content: center; }
.mp-product-box { display: flex; align-items: center; gap: 12px; padding: 16px 32px; border-radius: 12px; background: rgba(108,92,231,0.06); border: 1px solid rgba(108,92,231,0.15); transition: all 0.35s cubic-bezier(0.4,0,0.2,1); cursor: default; }
.mp-product-box:hover { transform: translateY(-3px); border-color: rgba(108,92,231,0.35); box-shadow: 0 8px 32px rgba(108,92,231,0.12); background: rgba(108,92,231,0.09); }
.mp-icon-circle { width: 36px; height: 36px; border-radius: 8px; background: rgba(108,92,231,0.12); display: flex; align-items: center; justify-content: center; transition: background 0.3s; }
.mp-product-box:hover .mp-icon-circle { background: rgba(108,92,231,0.2); }
.mp-prod-label { font-size: 15px; font-weight: 700; color: #a29bfe; }
.mp-prod-hint { font-size: 11px; color: rgba(162,155,254,0.5); margin-top: 2px; }
.mp-connector { display: flex; justify-content: center; padding: 6px 0; }
.mp-connector-line { width: 2px; height: 28px; position: relative; overflow: hidden; background: linear-gradient(180deg, rgba(108,92,231,0.15), rgba(244,85,70,0.15)); }
.mp-connector-line::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(180deg, transparent 0%, rgba(244,85,70,0.5) 40%, rgba(244,85,70,0.5) 60%, transparent 100%); background-size: 2px 20px; animation: mp-flow-down 1.5s linear infinite; }
.mp-just-row { display: flex; justify-content: center; }
.mp-just-box { padding: 14px 40px; border-radius: 10px; text-align: center; background: linear-gradient(135deg, rgba(244,85,70,0.08), rgba(244,85,70,0.04)); border: 1px solid rgba(244,85,70,0.2); box-shadow: 0 0 30px rgba(244,85,70,0.04); animation: mp-pulse-glow 3s ease-in-out infinite; transition: all 0.35s cubic-bezier(0.4,0,0.2,1); cursor: default; }
.mp-just-box:hover { transform: scale(1.04); border-color: rgba(244,85,70,0.4); box-shadow: 0 0 60px rgba(244,85,70,0.15); background: linear-gradient(135deg, rgba(244,85,70,0.12), rgba(244,85,70,0.06)); animation: none; }
.mp-just-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #f45546; }
.mp-just-hint { font-size: 10px; color: rgba(244,85,70,0.4); margin-top: 2px; transition: color 0.3s; }
.mp-just-box:hover .mp-just-hint { color: rgba(244,85,70,0.6); }
.mp-connector-fan { display: flex; justify-content: center; align-items: flex-start; height: 32px; position: relative; width: 100%; max-width: 740px; margin: 0 auto; }
.mp-fan-center { width: 2px; height: 16px; position: relative; overflow: hidden; background: rgba(244,85,70,0.1); }
.mp-fan-center::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(180deg, transparent, rgba(244,85,70,0.5), transparent); background-size: 2px 16px; animation: mp-flow-down 1.2s linear infinite; }
.mp-fan-horizontal { position: absolute; top: 16px; left: 50%; transform: translateX(-50%); width: 80%; height: 1px; background: linear-gradient(90deg, rgba(9,132,227,0.0), rgba(9,132,227,0.12) 15%, rgba(244,85,70,0.08) 50%, rgba(0,184,148,0.12) 85%, rgba(0,184,148,0.0)); }
.mp-fan-drops { position: absolute; top: 16px; left: 50%; transform: translateX(-50%); width: 80%; display: flex; justify-content: space-around; }
.mp-fan-drop { width: 1px; background: rgba(255,255,255,0.08); animation: mp-fan-drop-pulse 2.5s ease-in-out infinite; }
.mp-fan-drop:nth-child(1) { animation-delay: 0s; }
.mp-fan-drop:nth-child(2) { animation-delay: 0.6s; }
.mp-fan-drop:nth-child(3) { animation-delay: 1.2s; }
.mp-fan-drop:nth-child(4) { animation-delay: 1.8s; }
.mp-providers-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.mp-prov-card { padding: 24px 20px; border-radius: 14px; text-align: center; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); transition: all 0.35s cubic-bezier(0.4,0,0.2,1); cursor: default; }
.mp-prov-card:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.15); box-shadow: 0 12px 36px rgba(0,0,0,0.3); background: rgba(255,255,255,0.04); }
.mp-prov-category { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: rgba(242,244,248,0.3); margin-bottom: 14px; transition: color 0.3s; }
.mp-prov-card:hover .mp-prov-category { color: rgba(242,244,248,0.5); }
.mp-prov-list { display: flex; flex-direction: column; gap: 8px; align-items: center; }
.mp-prov-badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 8px; font-size: 12px; font-weight: 600; width: 100%; justify-content: center; transition: all 0.25s ease; }
.mp-prov-card:hover .mp-prov-badge { transform: scale(1.03); }
.mp-dot { width: 6px; height: 6px; border-radius: 50%; animation: mp-dot-pulse 2.5s ease-in-out infinite; }
.mp-prov-badge.baas { background: rgba(26,188,156,0.06); border: 1px solid rgba(26,188,156,0.12); color: #1abc9c; }
.mp-prov-badge.baas .mp-dot { background: #1abc9c; }
.mp-prov-badge.acq { background: rgba(9,132,227,0.06); border: 1px solid rgba(9,132,227,0.12); color: #74b9ff; }
.mp-prov-badge.acq .mp-dot { background: #0984E3; }
.mp-prov-badge.cap { background: rgba(108,92,231,0.06); border: 1px solid rgba(108,92,231,0.12); color: #a29bfe; }
.mp-prov-badge.cap .mp-dot { background: #6C5CE7; }
.mp-prov-badge.proto { background: rgba(253,203,110,0.06); border: 1px solid rgba(253,203,110,0.12); color: #FDCB6E; }
.mp-prov-badge.proto .mp-dot { background: #FDCB6E; }
.mp-prov-badge.more { background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.08); color: rgba(242,244,248,0.2); font-size: 11px; }
.mp-prov-card:hover .mp-prov-badge.baas { background: rgba(26,188,156,0.1); border-color: rgba(26,188,156,0.25); }
.mp-prov-card:hover .mp-prov-badge.acq { background: rgba(9,132,227,0.1); border-color: rgba(9,132,227,0.25); }
.mp-prov-card:hover .mp-prov-badge.cap { background: rgba(108,92,231,0.1); border-color: rgba(108,92,231,0.25); }
.mp-prov-card:hover .mp-prov-badge.proto { background: rgba(253,203,110,0.1); border-color: rgba(253,203,110,0.25); }
.mp-swap-indicator { margin-top: 28px; text-align: center; padding: 14px 24px; border-radius: 10px; background: linear-gradient(135deg, rgba(0,184,148,0.03), rgba(9,132,227,0.03)); border: 1px solid rgba(0,184,148,0.08); display: flex; align-items: center; justify-content: center; gap: 12px; transition: all 0.3s ease; }
.mp-swap-indicator:hover { border-color: rgba(0,184,148,0.2); background: linear-gradient(135deg, rgba(0,184,148,0.05), rgba(9,132,227,0.05)); }
.mp-swap-icon { width: 32px; height: 32px; border-radius: 8px; background: rgba(0,184,148,0.08); display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease; flex-shrink: 0; }
.mp-swap-indicator:hover .mp-swap-icon { transform: rotate(180deg); }
.mp-swap-text { font-size: 13px; color: rgba(242,244,248,0.4); text-align: left; }
.mp-swap-text strong { color: rgba(242,244,248,0.65); font-weight: 600; }

/* ===== TECH PAGE - SECURITY ===== */
.security-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 40px; }
.sec-card { padding: 28px; border-radius: 14px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); transition: border-color 0.3s; }
.sec-card:hover { border-color: rgba(244,85,70,0.15); }
.sec-icon { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
.sec-card h4 { font-size: 15px; font-weight: 700; margin-bottom: 8px; color: rgba(242,244,248,0.85); }
.sec-card p { font-size: 13px; color: rgba(242,244,248,0.4); line-height: 1.6; }
.sec-highlight { margin-top: 32px; padding: 32px 40px; border-radius: 16px; background: linear-gradient(135deg, rgba(0,184,148,0.04), rgba(9,132,227,0.04)); border: 1px solid rgba(0,184,148,0.1); display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; text-align: center; }
.sec-stat-value { font-size: 28px; font-weight: 800; color: #55efc4; }
.sec-stat-label { font-size: 12px; color: rgba(242,244,248,0.35); margin-top: 4px; }
`}</style>
      {/* ===== HERO WITH ARCH DIAGRAM ===== */}
      <section style={{ background: `linear-gradient(160deg, ${T.primary}, #151a2d, ${T.secondary})`, padding: "150px 48px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 60, alignItems: "center" }}>
          <div>
            <Reveal><Tag>{tr.tag}</Tag></Reveal>
            <Reveal delay={0.1}><h1 style={{ fontSize: 44, fontWeight: 700, color: T.textLight, lineHeight: 1.1, marginBottom: 16 }}>{tr.h1}</h1></Reveal>
            <Reveal delay={0.2}><p style={{ fontSize: 17, color: T.textMutedLight, lineHeight: 1.6 }}>{tr.subtitle}</p></Reveal>
          </div>
          <Reveal delay={0.3}>
            <div className="hero-arch">
              <div className="ha-label">Canais</div>
              <div className="ha-row">
                <div className="ha-box ch">App Mobile</div>
                <div className="ha-box ch">Portal Web</div>
                <div className="ha-box ch">Backoffice</div>
                <div className="ha-box ch">APIs B2B</div>
              </div>
              <div className="ha-conn">&#9660;</div>
              <div className="ha-row">
                <div className="ha-box sec" style={{ flex: 1, textAlign: "center" }}>WAF + API Gateway + Auth</div>
              </div>
              <div className="ha-conn">&#9660;</div>
              <div className="ha-row">
                <div className="ha-box core">JUST Core (Autorizador)</div>
              </div>
              <div className="ha-conn">&#9660;</div>
              <div className="ha-row">
                <div className="ha-box cap">Motor de Regras</div>
                <div className="ha-box cap">Ledger</div>
                <div className="ha-box cap">Split</div>
                <div className="ha-box cap">FinOps</div>
                <div className="ha-box cap">Antifraude</div>
                <div className="ha-box cap">BI</div>
              </div>
              <div className="ha-div" />
              <div className="ha-label">Modulos de produto</div>
              <div className="ha-row">
                {products.map((p,i) => (
                  <div key={i} className={`ha-box mod ${p.cls}`}>{p.name}<div className="ha-tooltip"><strong>{p.name}</strong>{p.desc}</div></div>
                ))}
              </div>
              <div className="ha-div" />
              <div className="ha-label">Providers</div>
              <div className="ha-row">
                <div className="ha-box baas">BaaS</div>
                <div className="ha-box baas">CaaS</div>
                <div className="ha-box prov">Bins Sponsor</div>
                <div className="ha-box prov">Acquirers</div>
                <div className="ha-box prov">Compliance</div>
              </div>
              <div className="ha-bottom">App + Plataformas de Gestão Web &mdash; powered by JUST</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== VERTICAL TABS - COMPONENTES ===== */}
      <section style={{ background: T.darkAlt, padding: "100px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionTitle tag={tr.platformTag} title={tr.platformTitle} center subtitle={tr.platformSubtitle} />
          <div className="vtabs-layout">
            <div className="vtabs-nav">
              {tabs.map((t, i) => (
                <div key={i} className={`vtab-item${tab === i ? " active" : ""}`} onClick={() => setTab(i)}>
                  <div className="vtab-icon" style={{ background: tabColors[t.icon] }}>{tabIcons[t.icon]}</div>
                  <div><div className="vtab-label">{t.t}</div><div className="vtab-hint">{t.hint}</div></div>
                </div>
              ))}
            </div>
            <div className="vtab-panel">
              <div className="vtab-visual">
                {tabs[tab].visual.map((v, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <span style={{ color: "rgba(242,244,248,0.15)" }}>&#8594;</span>}
                    <div className="vv-node" style={{ background: v.bg, border: `1px solid ${v.bc}`, color: v.c }}>{v.n}</div>
                  </React.Fragment>
                ))}
              </div>
              <h3>{tabs[tab].t}</h3>
              <p>{tabs[tab].d}</p>
              <div className="features">
                {tabs[tab].tags.map((tag, i) => <span key={i} className="feat-tag">{tag}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MULTI-PROVIDER BY DESIGN ===== */}
      <section style={{ background: T.primary, padding: "100px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionTitle tag={tr.integrationsTag} title={tr.integrationsTitle} center subtitle={tr.integrationsSubtitle} />
          <div className="mp-diagram">
            <div className="mp-product-row">
              <div className="mp-product-box">
                <div className="mp-icon-circle">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a29bfe" strokeWidth="2"><rect x="2" y="3" width="20" height="18" rx="3"/><path d="M8 7h8M8 11h5"/></svg>
                </div>
                <div><div className="mp-prod-label">Seu Produto</div><div className="mp-prod-hint">App, Portal, Backoffice, APIs</div></div>
              </div>
            </div>
            <div className="mp-connector"><div className="mp-connector-line" /></div>
            <div className="mp-just-row">
              <div className="mp-just-box">
                <div className="mp-just-label">JUST Abstraction Layer</div>
                <div className="mp-just-hint">Core financeiro + Gateway + Motor de regras</div>
              </div>
            </div>
            <div className="mp-connector-fan">
              <div className="mp-fan-center" />
              <div className="mp-fan-horizontal" />
              <div className="mp-fan-drops"><div className="mp-fan-drop"/><div className="mp-fan-drop"/><div className="mp-fan-drop"/><div className="mp-fan-drop"/></div>
            </div>
            <div className="mp-providers-row">
              <div className="mp-prov-card"><div className="mp-prov-category">BaaS</div><div className="mp-prov-list"><div className="mp-prov-badge baas"><span className="mp-dot"/> Conta Digital</div><div className="mp-prov-badge baas"><span className="mp-dot"/> PIX & Transferencias</div><div className="mp-prov-badge baas"><span className="mp-dot"/> KYC & Onboarding</div><div className="mp-prov-badge more">+ outros servicos</div></div></div>
              <div className="mp-prov-card"><div className="mp-prov-category">CaaS & Bins Sponsor</div><div className="mp-prov-list"><div className="mp-prov-badge acq"><span className="mp-dot"/> Emissão de Cartões</div><div className="mp-prov-badge acq"><span className="mp-dot"/> BIN Sponsorship</div><div className="mp-prov-badge acq"><span className="mp-dot"/> Tokenização</div><div className="mp-prov-badge more">+ arranjo aberto/fechado</div></div></div>
              <div className="mp-prov-card"><div className="mp-prov-category">Acquirers & Captura</div><div className="mp-prov-list"><div className="mp-prov-badge cap"><span className="mp-dot"/> TEF / POS</div><div className="mp-prov-badge cap"><span className="mp-dot"/> QR Code</div><div className="mp-prov-badge cap"><span className="mp-dot"/> App Pay</div><div className="mp-prov-badge cap"><span className="mp-dot"/> RFID / NFC</div></div></div>
              <div className="mp-prov-card"><div className="mp-prov-category">Compliance</div><div className="mp-prov-list"><div className="mp-prov-badge proto"><span className="mp-dot"/> LGPD</div><div className="mp-prov-badge proto"><span className="mp-dot"/> PCI-Aware</div><div className="mp-prov-badge proto"><span className="mp-dot"/> AML / KYC</div><div className="mp-prov-badge proto"><span className="mp-dot"/> Auditoria</div></div></div>
            </div>
            <div className="mp-swap-indicator">
              <div className="mp-swap-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#55efc4" strokeWidth="2"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M14 14l7 7M3 8V3h5M10 10L3 3"/></svg></div>
              <div className="mp-swap-text"><strong>{tr.mpSwapBold}</strong>{tr.mpSwapText}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEGURANCA ===== */}
      <section style={{ background: T.darkAlt, padding: "100px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionTitle tag={tr.securityTag} title={tr.securityTitle} center subtitle={tr.securitySubtitle} />
          <div className="sec-highlight">
            {[["Pen Test", "AWS", "LGPD", "OWASP"], tr.secHighlightLabels].reduce((_, __, ___, arr) => arr[0].map((val, i) => (
              <div key={i}><div className="sec-stat-value">{val}</div><div className="sec-stat-label">{arr[1][i]}</div></div>
            )))}
          </div>
          <div className="security-grid">
            {tr.secCards.map((card, i) => {
              const icons = [
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#55efc4" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a29bfe" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#74b9ff" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>,
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f45546" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDCB6E" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M9 15l2 2 4-4"/></svg>,
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E17055" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
              ];
              const bgColors = ["rgba(0,184,148,0.1)","rgba(108,92,231,0.1)","rgba(9,132,227,0.1)","rgba(244,85,70,0.1)","rgba(253,203,110,0.1)","rgba(225,112,85,0.1)"];
              return (
                <div key={i} className="sec-card">
                  <div className="sec-icon" style={{ background: bgColors[i] }}>{icons[i]}</div>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ background: `linear-gradient(135deg, ${T.primary}, ${T.secondary})`, padding: "100px 48px", textAlign: "center" }}>
        <Reveal><h2 style={{ fontSize: 36, fontWeight: 700, color: T.textLight, marginBottom: 24 }}>{tr.cta}</h2></Reveal>
        <Reveal delay={0.1}><Btn onClick={() => nav("contato")}>{tr.ctaBtn}</Btn></Reveal>
      </section>
    </div>
  );
}

