import { useState, useEffect, useRef } from "react";

// ========================================
// DESIGN TOKENS
// ========================================
const T = {
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

// Product identity colors (cada vertical com cor propria)
const PRODUCT_COLORS = {
  beneficios: { accent: "#6C5CE7", gradient: "linear-gradient(135deg, #6C5CE7, #a29bfe)", label: "Benefits" },
  frotas: { accent: "#00B894", gradient: "linear-gradient(135deg, #00B894, #55efc4)", label: "Fleet" },
  banking: { accent: "#0984E3", gradient: "linear-gradient(135deg, #0984E3, #74b9ff)", label: "Banking" },
  despesas: { accent: "#E17055", gradient: "linear-gradient(135deg, #E17055, #fab1a0)", label: "Expense" },
  antecipacao: { accent: "#FDCB6E", gradient: "linear-gradient(135deg, #D4A017, #FDCB6E)", label: "Credit" },
  "sob-demanda": { accent: "#636E72", gradient: "linear-gradient(135deg, #636E72, #b2bec3)", label: "Custom" },
};

// Logo asset (file reference from /public)
const LOGO_PATH = import.meta.env.BASE_URL + "logo-just-2x.png";
const JustLogo = ({ height = 32, style = {} }) => (
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
};

// ProductIcon: renders with neon card container
const ProductIcon = ({ productKey, size = 18, showCard = false }) => {
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
function useInView(threshold = 0.12) {
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

function useCounter(end, duration = 2000, start = false) {
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
// ANIMATION
// ========================================
function Reveal({ children, delay = 0, direction = "up", style = {} }) {
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
function Tag({ children, light = false, color = null }) {
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

function Btn({ children, primary = true, onClick, style = {}, size = "md" }) {
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

function SectionTitle({ tag, title, subtitle, light = false, center = false, tagColor = null }) {
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

function Metric({ prefix = "", value, suffix = "", label, delay = 0 }) {
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
  { key: "beneficios", label: "Benefits", top: "12%", left: "8%", animName: "nodeFloat1", dur: "6s", delay: "0s" },
  { key: "frotas", label: "Fleet", top: "4%", right: "12%", animName: "nodeFloat2", dur: "7s", delay: "0.5s" },
  { key: "banking", label: "Banking", top: "40%", right: "0%", animName: "nodeFloat3", dur: "5.5s", delay: "1s" },
  { key: "despesas", label: "Expense", top: "45%", left: "0%", animName: "nodeFloat4", dur: "6.5s", delay: "1.5s" },
  { key: "antecipacao", label: "Credit", bottom: "6%", left: "14%", animName: "nodeFloat5", dur: "5s", delay: "2s" },
  { key: "sob-demanda", label: "Custom", bottom: "2%", right: "10%", animName: "nodeFloat6", dur: "7s", delay: "0.8s" },
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

function HeroOrbital() {
  return (
    <div style={{ position: "relative", width: "100%", height: 520, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Orbital rings */}
      {[200, 340, 460].map((size, i) => (
        <div key={i} style={{
          position: "absolute", width: size, height: size, borderRadius: "50%",
          border: `1px solid rgba(108,92,231,${0.1 - i * 0.03})`,
          animation: `ringPulse ${4 + i}s ease-in-out infinite ${i}s`,
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
      <div style={{
        position: "absolute", width: 100, height: 100, borderRadius: 28, zIndex: 5,
        background: "linear-gradient(145deg, rgba(108,92,231,0.2), rgba(10,12,31,0.95))",
        border: "1.5px solid rgba(108,92,231,0.35)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 0 40px rgba(108,92,231,0.15), 0 0 80px rgba(108,92,231,0.08), inset 0 1px 0 rgba(255,255,255,0.1)",
        animation: "hubFloat 5s ease-in-out infinite",
      }}>
        <img src={LOGO_PATH} alt="JUST" style={{ height: 36, filter: "brightness(1.1)" }} />
      </div>

      {/* Product nodes */}
      {HERO_ORBITAL_NODES.map((node) => {
        const pc = PRODUCT_COLORS[node.key];
        const c = pc?.accent || "#fff";
        return (
          <div key={node.key} className="hero-product-node" style={{
            position: "absolute", zIndex: 4,
            display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
            top: node.top, left: node.left, right: node.right, bottom: node.bottom,
            animation: `${node.animName} ${node.dur} ease-in-out infinite`,
            animationDelay: node.delay,
            cursor: "default",
          }}>
            <div style={{
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
            <span style={{
              fontSize: 11, fontWeight: 600, letterSpacing: "0.5px",
              color: "rgba(255,255,255,0.45)", textAlign: "center",
              whiteSpace: "nowrap", transition: "all 0.3s",
            }}>{node.label}</span>
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
        .hero-product-node:hover > div:first-child {
          transform: scale(1.12);
          box-shadow: 0 0 35px rgba(108,92,231,0.3), 0 4px 24px rgba(0,0,0,0.4) !important;
        }
        .hero-product-node:hover span {
          opacity: 1 !important;
          color: #fff !important;
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


/* ===== RESPONSIVE / MOBILE ===== */
@media (max-width: 900px) {
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

  /* --- Social Proof --- */
  .social-proof-bar {
    flex-direction: column !important;
    gap: 16px !important;
    text-align: center !important;
  }
  .social-logos {
    gap: 20px !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
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
function EcosystemAnimation() {
  const svgRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const frameRef = useRef(0);
  const startTimeRef = useRef(null);

  const nodes = {
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
  };

  const getControlPoint = (from, to, seed) => {
    const mx = (from.x + to.x) / 2;
    const my = (from.y + to.y) / 2;
    const perpX = -(to.y - from.y) * 0.25;
    const perpY = (to.x - from.x) * 0.25;
    return { x: mx + perpX * (0.6 + seed * 0.4), y: my + perpY * (0.6 + seed * 0.4) };
  };

  const createParticle = (fromKey, toKey, seed) => {
    const from = nodes[fromKey];
    const to = nodes[toKey];
    const cp = getControlPoint(from, to, seed);
    return {
      id: Math.random(), fromKey, toKey, from, to, cp,
      progress: 0, color: from.color, trail: [],
    };
  };

  useEffect(() => {
    if (!svgRef.current) return;

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
  }, []);

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
    { name: "Alimentacao", pct: 78, val: "R$ 780" },
    { name: "Refeicao", pct: 45, val: "R$ 450" },
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
              {["PIX", "TED", "Boleto", "Cartao"].map((a) => (
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
            <div style={{ fontSize: 6, color: `${color}40` }}>Limite disponivel</div>
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
            {[{ n: "SaaS", p: 35 }, { n: "Viagens", p: 25 }, { n: "Marketing", p: 20 }, { n: "Escritorio", p: 12 }, { n: "Outros", p: 8 }].map((c, i) => (
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
            <div style={{ fontSize: 6, color: `${color}35` }}>Politica ativa</div>
            <div style={{ fontSize: 8, fontWeight: 700, color: `${color}60` }}>Nivel 3</div>
            <div style={{ fontSize: 5, color: `${color}30`, marginTop: 2 }}>Aprovacao &gt; R$500</div>
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
            <div style={{ fontSize: 6, color: `${color}45` }}>Limite de credito disponivel</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: color, margin: "4px 0", letterSpacing: "-0.02em" }}>R$ 3.200,00</div>
            <div style={{ fontSize: 6, color: `${color}35` }}>Aprovado | Vigencia ativa</div>
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

function ProductMockup({ color, label, style = {}, productKey = null }) {
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
// HEADER
// ========================================
function Header({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const nav = (p) => { setPage(p); setDropOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const lnk = (p) => ({ color: page === p ? T.cta : "rgba(242,244,248,0.8)", fontSize: 14, fontWeight: 500, cursor: "pointer", background: "none", border: "none", padding: "8px 14px", transition: "color 0.2s" });

  const solucoes = [
    { key: "beneficios", label: "JUST Benefits", desc: "Beneficios flexiveis com arranjo customizavel", color: PRODUCT_COLORS.beneficios.accent },
    { key: "frotas", label: "JUST Fleet", desc: "Controle financeiro completo por veiculo", color: PRODUCT_COLORS.frotas.accent },
    { key: "banking", label: "JUST Banking", desc: "Conta, cartao e PIX white-label", color: PRODUCT_COLORS.banking.accent },
    { key: "despesas", label: "JUST Expense", desc: "Cartoes corporativos com politicas inteligentes", color: PRODUCT_COLORS.despesas.accent },
    { key: "antecipacao", label: "JUST Credit", desc: "Produtos de credito white-label", color: PRODUCT_COLORS.antecipacao.accent },
    { key: "sob-demanda", label: "JUST Custom", desc: "Produtos financeiros sob medida", color: PRODUCT_COLORS["sob-demanda"].accent },
  ];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, height: 72, display: "flex", alignItems: "center",
      justifyContent: "space-between", padding: "0 48px",
      background: scrolled ? "rgba(15,17,43,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? `1px solid ${T.borderLight}` : "1px solid transparent",
      transition: "all 0.35s ease", zIndex: 100,
    }}>
      <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }} onClick={() => nav("home")}>
        <JustLogo height={36} />
      </div>
      <nav style={{ display: "flex", alignItems: "center", gap: 2 }}>
        <div style={{ position: "relative" }} onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
          <button style={lnk("solucoes")}>Produtos &#9662;</button>
          {dropOpen && (
            <div style={{
              position: "absolute", top: "100%", left: -20, background: "rgba(15,17,43,0.98)",
              border: `1px solid ${T.borderLight}`, borderRadius: 14, padding: "12px 8px",
              minWidth: 320, backdropFilter: "blur(20px)", boxShadow: "0 20px 60px rgba(0,0,0,0.4)", zIndex: 200,
            }}>
              {solucoes.map((s) => (
                <button key={s.key} onClick={() => nav(s.key)} style={{
                  display: "flex", alignItems: "center", gap: 12, width: "100%", textAlign: "left",
                  padding: "10px 14px", background: "none", border: "none", color: T.textLight,
                  fontSize: 14, cursor: "pointer", borderRadius: 10, transition: "background 0.15s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "none"}
                >
                  <ProductIcon productKey={s.key} size={32} showCard />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13, color: T.textLight }}>{s.label}</div>
                    <div style={{ fontSize: 11, color: T.textMuted, marginTop: 2, fontWeight: 400 }}>{s.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
        <button style={lnk("stack")} onClick={() => nav("stack")}>Tecnologia</button>
        <button style={lnk("cases")} onClick={() => nav("cases")}>Cases</button>
        <button style={lnk("sobre")} onClick={() => nav("sobre")}>Sobre</button>
        <Btn onClick={() => nav("contato")} size="sm" style={{ marginLeft: 16 }}>Fale Conosco</Btn>
      </nav>
    </header>
  );
}

// ========================================
// FOOTER
// ========================================
function Footer({ setPage }) {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const fl = { color: "rgba(242,244,248,0.4)", fontSize: 13, cursor: "pointer", background: "none", border: "none", display: "block", lineHeight: 2.4, transition: "color 0.2s" };
  return (
    <footer style={{ background: T.footerBg, padding: "80px 48px 40px", borderTop: `1px solid ${T.borderLight}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
        <div>
          <div style={{ marginBottom: 20 }}>
            <JustLogo height={30} />
          </div>
          <p style={{ fontSize: 13, color: "rgba(242,244,248,0.35)", lineHeight: 1.7, maxWidth: 260 }}>
            Plataforma de produtos financeiros digitais. Tecnologia pronta para operar, escalar e evoluir.
          </p>
        </div>
        <div>
          <h4 style={{ color: "rgba(242,244,248,0.6)", fontSize: 11, fontWeight: 600, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>Produtos</h4>
          {[["beneficios","JUST Benefits"],["frotas","JUST Fleet"],["banking","JUST Banking"],["despesas","JUST Expense"],["antecipacao","JUST Credit"],["sob-demanda","JUST Custom"]].map(([k,l]) =>
            <button key={k} style={{ ...fl, display: "flex", alignItems: "center", gap: 8 }} onClick={() => nav(k)}>
              <ProductIcon productKey={k} size={18} />
              {l}
            </button>
          )}
        </div>
        <div>
          <h4 style={{ color: "rgba(242,244,248,0.6)", fontSize: 11, fontWeight: 600, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>Empresa</h4>
          {[["sobre","Sobre"],["cases","Cases"],["stack","Tecnologia"],["contato","Contato"]].map(([k,l]) =>
            <button key={k} style={fl} onClick={() => nav(k)}>{l}</button>
          )}
        </div>
        <div>
          <h4 style={{ color: "rgba(242,244,248,0.6)", fontSize: 11, fontWeight: 600, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>Contato</h4>
          <span style={{ ...fl, cursor: "default" }}>contato@justto.com.br</span>
          <span style={{ ...fl, cursor: "default" }}>Sao Paulo, SP</span>
          <span style={{ ...fl, cursor: "default" }}>LinkedIn</span>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "48px auto 0", paddingTop: 24, borderTop: `1px solid rgba(255,255,255,0.04)`, display: "flex", justifyContent: "space-between" }}>
        <p style={{ fontSize: 12, color: "rgba(242,244,248,0.2)" }}>&copy; 2026 JUST. Todos os direitos reservados.</p>
        <p style={{ fontSize: 12, color: "rgba(242,244,248,0.2)" }}>Politica de Privacidade</p>
      </div>
    </footer>
  );
}

// ========================================
// HOME PAGE v2 - Platform positioning
// ========================================
function HomePage({ setPage }) {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  // Products with individual identity
  const products = [
    { key: "beneficios", name: "JUST Benefits", desc: "Arranjo aberto, fechado ou hibrido. Multiplos saldos com regras customizaveis e controle total.", ...PRODUCT_COLORS.beneficios },
    { key: "frotas", name: "JUST Fleet", desc: "Abastecimento, pedagio, manutencao. Controle financeiro por veiculo com regras em tempo real.", ...PRODUCT_COLORS.frotas },
    { key: "banking", name: "JUST Banking", desc: "Conta digital, cartao, PIX, transferencias. Banking completo e white-label sobre BaaS.", ...PRODUCT_COLORS.banking },
    { key: "despesas", name: "JUST Expense", desc: "Cartoes corporativos com politicas de uso, limites e conciliacao automatica.", ...PRODUCT_COLORS.despesas },
    { key: "antecipacao", name: "JUST Credit", desc: "Private label, antecipacao e recebiveis. Produtos de credito white-label integrados ao seu negocio.", ...PRODUCT_COLORS.antecipacao },
    { key: "sob-demanda", name: "JUST Custom", desc: "Produto que nao cabe em prateleira? Arquitetamos e construimos sob medida.", ...PRODUCT_COLORS["sob-demanda"] },
  ];

  // DE > PARA comparison data
  const comparisons = [
    {
      sem: { title: "12-24 meses para lancar", desc: "Projetos longos, estouro de prazo e budget. Produto chega tarde ao mercado." },
      com: { title: "Produto no ar em semanas", desc: "Stack com 70-80% de reuso. Go-live em semanas, nao anos." },
    },
    {
      sem: { title: "Lock-in com um unico provedor", desc: "Preso a um BaaS ou adquirente. Sem flexibilidade para mudar ou negociar." },
      com: { title: "Multi-provider, sem lock-in", desc: "Arquitetura multi-BaaS e multi-adquirente. Troque sem reescrever." },
    },
    {
      sem: { title: "Complexidade regulatoria", desc: "Tempo e dinheiro gastos com compliance bancario ao inves de produto." },
      com: { title: "Regulatorio resolvido", desc: "Operamos sobre BaaS regulados. Com isso nosso time pode se focar 100% no desenvolvimento do seu produto." },
    },
    {
      sem: { title: "Tecnologia que nao escala", desc: "Funciona com 1.000 usuarios. Quebra com 50.000." },
      com: { title: "Escala comprovada", desc: "R$900M+ processados, 500k+ usuarios. Infraestrutura testada em producao." },
    },
    {
      sem: { title: "White-labels genericos", desc: "Produto de prateleira com cara de template. Mesma experiencia pra todo mundo." },
      com: { title: "Produtos customizados de verdade", desc: "Jornada, regras e visual desenhados pro seu negocio. Ninguem sabe que somos nos." },
    },
    {
      sem: { title: "Time sem experiencia no segmento", desc: "Desenvolvedores generalistas aprendendo fintech do zero. Curva longa e cara." },
      com: { title: "Time especialista no segmento", desc: "+5 anos construindo fintechs. Beneficios, frotas, banking, despesas. Ja passamos por isso." },
    },
  ];

  // SVG icons for DE > PARA (red = sem, green = com)
  const comparisonIcons = [
    { // Tempo
      sem: <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><circle cx="12" cy="12" r="9" stroke="#E85D4A" strokeWidth="1.8" opacity="0.8"/><path d="M12 7v5l3 3" stroke="#F09080" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/><path d="M4 4l2 2M20 4l-2 2" stroke="#E85D4A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/></svg>,
      com: <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#27AE60" strokeWidth="1.8" fill="none" opacity="0.9" strokeLinejoin="round"/></svg>,
    },
    { // Lock-in
      sem: <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><rect x="5" y="11" width="14" height="10" rx="2" stroke="#E85D4A" strokeWidth="1.8" opacity="0.8"/><path d="M8 11V7a4 4 0 1 1 8 0v4" stroke="#F09080" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/><circle cx="12" cy="16" r="1.5" fill="#E85D4A" opacity="0.6"/></svg>,
      com: <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><path d="M8 3v3a2 2 0 0 1-2 2H3" stroke="#27AE60" strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/><path d="M16 3v3a2 2 0 0 0 2 2h3" stroke="#27AE60" strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/><path d="M8 21v-3a2 2 0 0 0-2-2H3" stroke="#27AE60" strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/><path d="M16 21v-3a2 2 0 0 1 2-2h3" stroke="#27AE60" strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/><circle cx="12" cy="12" r="4" stroke="#4CD97B" strokeWidth="1.8" opacity="0.8"/><path d="M12 12L12 12" stroke="#4CD97B" strokeWidth="3" strokeLinecap="round"/></svg>,
    },
    { // Regulatorio
      sem: <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><path d="M12 2L3 7v5c0 5.25 3.83 10.15 9 11 5.17-.85 9-5.75 9-11V7l-9-5z" stroke="#E85D4A" strokeWidth="1.8" fill="none" opacity="0.8"/><path d="M9 12l1 1" stroke="#F09080" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/><path d="M15 10l-4 4" stroke="#F09080" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/></svg>,
      com: <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><path d="M12 2L3 7v5c0 5.25 3.83 10.15 9 11 5.17-.85 9-5.75 9-11V7l-9-5z" stroke="#27AE60" strokeWidth="1.8" fill="none" opacity="0.8"/><path d="M9 12l2 2 4-4" stroke="#4CD97B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/></svg>,
    },
    { // Escala
      sem: <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><path d="M3 20L8 14L12 17L17 10L21 13" stroke="#E85D4A" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/><path d="M17 10L21 13" stroke="#F09080" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/><line x1="21" y1="13" x2="21" y2="20" stroke="#E85D4A" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.3"/></svg>,
      com: <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><path d="M3 20L8 15L12 18L21 6" stroke="#27AE60" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/><path d="M16 6h5v5" stroke="#4CD97B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/></svg>,
    },
    { // White-label
      sem: <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#E85D4A" strokeWidth="1.8" opacity="0.8"/><rect x="8" y="8" width="8" height="8" rx="1.5" stroke="#F09080" strokeWidth="1.5" opacity="0.4"/><rect x="10" y="10" width="4" height="4" rx="1" stroke="#E85D4A" strokeWidth="1" opacity="0.3"/></svg>,
      com: <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#27AE60" strokeWidth="1.8" opacity="0.8"/><path d="M8 12h8" stroke="#4CD97B" strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/><path d="M8 8h4" stroke="#4CD97B" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/><path d="M8 16h6" stroke="#4CD97B" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/><circle cx="18" cy="18" r="4" fill={T.primary} stroke="#27AE60" strokeWidth="1.5" opacity="0.9"/><path d="M17 18l1 1 2-2" stroke="#4CD97B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/></svg>,
    },
    { // Time
      sem: <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><circle cx="9" cy="8" r="3.5" stroke="#E85D4A" strokeWidth="1.8" opacity="0.7"/><path d="M2 20c0-3.3 2.7-6 6-6h2c3.3 0 6 2.7 6 6" stroke="#F09080" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/><path d="M17 10l2-2 2 2" stroke="#E85D4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/><path d="M19 8v4" stroke="#E85D4A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/></svg>,
      com: <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><circle cx="9" cy="8" r="3.5" stroke="#27AE60" strokeWidth="1.8" opacity="0.8"/><path d="M2 20c0-3.3 2.7-6 6-6h2c3.3 0 6 2.7 6 6" stroke="#4CD97B" strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/><circle cx="19" cy="8" r="3" stroke="#27AE60" strokeWidth="1.5" opacity="0.6"/><path d="M17.5 7l1 1 2-2" stroke="#4CD97B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/></svg>,
    },
  ];

  // steps data removed - now inline in Process timeline section

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="section-hero" style={{
        background: `linear-gradient(160deg, #06080F 0%, ${T.primary} 50%, ${T.darkAlt} 100%)`,
        padding: "140px 48px 80px", position: "relative", overflow: "hidden",
      }}>
        {/* Ambient glow effects */}
        <div style={{ position: "absolute", top: "15%", right: "10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(108,92,231,0.07), transparent 70%)", borderRadius: "50%", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(244,85,70,0.05), transparent 70%)", borderRadius: "50%", filter: "blur(60px)" }} />

        <div className="hero-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", position: "relative", zIndex: 2 }}>
          <div>
            <Reveal>
              <Tag>Plataforma de produtos financeiros</Tag>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="hero-title" style={{ fontSize: 60, fontWeight: 800, color: T.textLight, lineHeight: 1.06, letterSpacing: "-0.035em", margin: "20px 0" }}>
                Sua fintech.<br />Pronta para operar<br />em <span style={{ background: "linear-gradient(135deg, #6C5CE7, #A29BFE, #74B9FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>semanas, nao meses.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.25}>
              <p style={{ fontSize: 18, color: T.textMutedLight, lineHeight: 1.6, maxWidth: 480, marginBottom: 36 }}>
                Produtos financeiros completos, white-label, com tecnologia modular e integracoes prontas.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 36, flexWrap: "wrap" }}>
                {["Configure", "Personalize"].map((word) => (
                  <span key={word} style={{
                    fontSize: 15, fontWeight: 600, color: "rgba(242,244,248,0.55)",
                    background: "rgba(242,244,248,0.06)", border: "1px solid rgba(242,244,248,0.1)",
                    borderRadius: 8, padding: "6px 16px", letterSpacing: "0.01em",
                  }}>{word}</span>
                ))}
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" style={{ margin: "0 2px", flexShrink: 0 }}>
                  <path d="M1 7h16M13 1l5 6-5 6" stroke="rgba(242,244,248,0.3)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{
                  fontSize: 15, fontWeight: 700, color: "#fff",
                  background: "linear-gradient(135deg, #f45546, #e0392b)", border: "1px solid rgba(244,85,70,0.4)",
                  borderRadius: 8, padding: "6px 20px", letterSpacing: "0.01em",
                  boxShadow: "0 0 20px rgba(244,85,70,0.25), 0 2px 8px rgba(0,0,0,0.2)",
                }}>
                  Lance
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: 6, verticalAlign: "middle" }}>
                    <path d="M2 12L12 2M12 2H5M12 2v7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div style={{ display: "flex", gap: 12 }}>
                <Btn onClick={() => nav("contato")}>Fale com um especialista</Btn>
                <Btn primary={false} onClick={() => nav("cases")}>Ver cases</Btn>
              </div>
            </Reveal>
          </div>

          {/* Hero visual: Orbital product icons */}
          <Reveal delay={0.2} direction="right">
            <HeroOrbital />
          </Reveal>
        </div>
      </section>

      {/* ===== SOCIAL PROOF BAR ===== */}
      <section className="section-social-proof" style={{ background: T.primary, borderTop: `1px solid ${T.borderLight}`, borderBottom: `1px solid ${T.borderLight}`, padding: "28px 48px" }}>
        <Reveal>
          <div className="social-proof-bar" style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", fontSize: 11, fontWeight: 500, color: "rgba(242,244,248,0.25)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>
              Ecossistema e parceiros
            </div>
            <div className="social-logos" style={{ display: "flex", gap: 40, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
              <img className="partner-logo logo-white" src={`${import.meta.env.BASE_URL}logos/abfintechs.png`} alt="ABFintechs" style={{ height: 32, width: "auto", opacity: 0.3, transition: "opacity 0.3s" }} />
              <img className="partner-logo logo-colored" src={`${import.meta.env.BASE_URL}logos/abstartups.png`} alt="ABStartups" style={{ height: 38, width: "auto", opacity: 0.55, filter: "brightness(0) invert(1)", transition: "opacity 0.3s" }} />
              <img className="partner-logo logo-white" src={`${import.meta.env.BASE_URL}logos/cubo-itau.png`} alt="Cubo Itaú" style={{ height: 48, width: "auto", opacity: 0.3, transition: "opacity 0.3s" }} />
              <img className="partner-logo logo-colored" src={`${import.meta.env.BASE_URL}logos/aws-partner.png`} alt="AWS Partner" style={{ height: 42, width: "auto", opacity: 0.55, filter: "brightness(0) invert(1)", transition: "opacity 0.3s" }} />
              <img className="partner-logo logo-colored" src={`${import.meta.env.BASE_URL}logos/fiserv.png`} alt="Fiserv" style={{ height: 32, width: "auto", opacity: 0.55, filter: "brightness(0) invert(1)", transition: "opacity 0.3s" }} />
              <img className="partner-logo logo-colored" src={`${import.meta.env.BASE_URL}logos/linx.png`} alt="Linx" style={{ height: 34, width: "auto", opacity: 0.55, filter: "brightness(0) invert(1)", transition: "opacity 0.3s" }} />
              <img className="partner-logo logo-white" src={`${import.meta.env.BASE_URL}logos/swap.svg`} alt="Swap" style={{ height: 32, width: "auto", opacity: 0.3, filter: "invert(1)", transition: "opacity 0.3s" }} />
              <img className="partner-logo logo-white" src={`${import.meta.env.BASE_URL}logos/evertec.svg`} alt="Evertec" style={{ height: 32, width: "auto", opacity: 0.3, transition: "opacity 0.3s" }} />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===== DE > PARA (Comparison) ===== */}
      <section className="section-depara" style={{ background: T.primary, padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Section header */}
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={{
                display: "inline-block", padding: "6px 14px", borderRadius: 100,
                fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em",
                background: "rgba(244,85,70,0.08)", border: "1px solid rgba(244,85,70,0.2)", color: "#f45546",
                marginBottom: 16,
              }}>Por que a JUST</span>
              <h2 style={{ fontSize: 44, fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.025em", color: "#f2f4f8" }}>
                O que muda quando voce<br />opera com a gente.
              </h2>
            </div>
          </Reveal>

          {/* Column labels */}
          <div className="depara-labels" style={{ display: "grid", gridTemplateColumns: "1fr 52px 1fr", gap: 0, marginBottom: 14, padding: "0 4px" }}>
            <div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em",
                padding: "7px 16px", borderRadius: 8, color: "#E85D4A",
                background: "rgba(232,93,74,0.06)", border: "1px solid rgba(232,93,74,0.15)",
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5"/><line x1="4" y1="4" x2="8" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="8" y1="4" x2="4" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                Sem a JUST
              </span>
            </div>
            <div />
            <div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em",
                padding: "7px 16px", borderRadius: 8, color: "#27AE60",
                background: "rgba(39,174,96,0.06)", border: "1px solid rgba(39,174,96,0.15)",
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5"/><path d="M4 6l1.5 1.5L8 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Com a JUST
              </span>
            </div>
          </div>

          {/* Comparison rows */}
          <div className="depara-row" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {comparisons.map((row, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  className="comp-row"
                  style={{
                    display: "grid", gridTemplateColumns: "1fr 52px 1fr", gap: 0,
                    borderRadius: 14, overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.05)",
                    background: "rgba(255,255,255,0.015)",
                    position: "relative",
                  }}
                >
                  {/* SEM cell */}
                  <div style={{
                    position: "relative", zIndex: 1, padding: "24px 28px",
                    display: "flex", gap: 16, alignItems: "flex-start",
                    background: "rgba(0,0,0,0.12)",
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      background: "linear-gradient(145deg, rgba(232,93,74,0.12), rgba(10,12,31,0.9))",
                      border: "1px solid rgba(232,93,74,0.25)",
                      boxShadow: "0 0 12px rgba(232,93,74,0.08)",
                      backdropFilter: "blur(4px)",
                    }}>
                      {comparisonIcons[i].sem}
                    </div>
                    <div>
                      <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 5, lineHeight: 1.3, color: "rgba(242,244,248,0.65)" }}>{row.sem.title}</h4>
                      <p style={{ fontSize: 14, color: "rgba(242,244,248,0.4)", lineHeight: 1.55 }}>{row.sem.desc}</p>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div style={{
                    position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(0,0,0,0.08)",
                  }}>
                    <div className="comp-arrow" style={{
                      width: 30, height: 30, borderRadius: "50%",
                      background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.4s ease",
                    }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                  {/* COM cell */}
                  <div style={{
                    position: "relative", zIndex: 1, padding: "24px 28px",
                    display: "flex", gap: 16, alignItems: "flex-start",
                    background: "rgba(39,174,96,0.02)",
                  }}>
                    <div className="comp-icon-com" style={{
                      width: 44, height: 44, borderRadius: 12,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      background: "linear-gradient(145deg, rgba(39,174,96,0.12), rgba(10,12,31,0.9))",
                      border: "1px solid rgba(39,174,96,0.25)",
                      boxShadow: "0 0 12px rgba(39,174,96,0.08)",
                      backdropFilter: "blur(4px)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}>
                      {comparisonIcons[i].com}
                    </div>
                    <div>
                      <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 5, lineHeight: 1.3, color: "#f2f4f8" }}>{row.com.title}</h4>
                      <p style={{ fontSize: 14, color: "rgba(242,244,248,0.4)", lineHeight: 1.55 }}>{row.com.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS BENTO GRID ===== */}
      <section className="section-products" style={{ background: T.primary, padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle tag="Produtos" title={"Modulos prontos para cada\nvertical do seu negocio."} subtitle="Cada produto opera de forma independente ou combinada. White-label completo." />

          <div className="bento-grid">
            {[
              { key: "beneficios", size: "wide", label: "JUST Benefits", title: "Beneficios flexiveis com\narranjo customizavel", badge: "Arranjo aberto, fechado ou hibrido", color: PRODUCT_COLORS.beneficios.accent, colorLight: "#A29BFE" },
              { key: "frotas", size: "narrow", label: "JUST Fleet", title: "Controle financeiro\npor veiculo", badge: "Abastecimento + pedagio com integracoes nativas", color: PRODUCT_COLORS.frotas.accent, colorLight: "#55EFC4" },
              { key: "banking", size: "narrow", label: "JUST Banking", title: "Conta, cartao e PIX\nwhite-label", badge: "Conta + cartao + PIX sobre BaaS regulado", color: PRODUCT_COLORS.banking.accent, colorLight: "#74B9FF" },
              { key: "despesas", size: "wide", label: "JUST Expense", title: "Cartoes corporativos com\npoliticas inteligentes", badge: "Politicas inteligentes + conciliacao automatica", color: PRODUCT_COLORS.despesas.accent, colorLight: "#FAB1A0" },
              { key: "antecipacao", size: "wide", label: "JUST Credit", title: "Produtos de credito\nwhite-label", badge: "Private label, antecipacao e recebiveis", color: PRODUCT_COLORS.antecipacao.accent, colorLight: "#FFEAA7" },
              { key: "sob-demanda", size: "narrow", label: "JUST Custom", title: "Produto sob medida?\nConstruimos.", badge: "Sob medida", color: PRODUCT_COLORS["sob-demanda"].accent, colorLight: "#B2BEC3" },
            ].map((card, i) => (
              <Reveal key={card.key} delay={i * 0.06}>
                <div
                  className="bento-card"
                  data-size={card.size}
                  onClick={() => nav(card.key)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Visual area */}
                  <div style={{
                    position: "relative", flex: 1, minHeight: 200,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    overflow: "hidden", padding: 32,
                    background: `linear-gradient(145deg, ${card.color}0F, ${card.color}05)`,
                  }}>
                    {/* Neon icon card */}
                    <div className="bento-icon-card" style={{
                      position: "absolute", zIndex: 2, top: 20, right: card.size === "wide" ? 24 : 20,
                      width: 44, height: 44, borderRadius: 12,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: `linear-gradient(145deg, ${card.color}26, rgba(10,12,31,0.9))`,
                      border: `1px solid ${card.color}4D`,
                      boxShadow: `0 0 16px ${card.color}1A`,
                      backdropFilter: "blur(4px)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}>
                      <ProductIcon productKey={card.key} size={24} />
                    </div>
                    {/* Mockup frame */}
                    <div style={{
                      position: "relative", zIndex: 1, width: "100%",
                      maxWidth: card.size === "wide" ? 480 : 240,
                      aspectRatio: card.size === "wide" ? "2/1" : "16/10",
                      borderRadius: 10,
                      border: "1px solid rgba(255,255,255,0.06)",
                      background: "rgba(0,0,0,0.35)",
                      padding: 14, display: "flex", flexDirection: "column", gap: 8,
                      backdropFilter: "blur(8px)",
                    }}>
                      <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
                        {[1,2,3].map(d => <div key={d} style={{ width: 6, height: 6, borderRadius: "50%", background: card.color, opacity: 0.4 }} />)}
                      </div>
                      <div style={{ height: 5, width: card.size === "wide" ? "45%" : "55%", borderRadius: 3, background: card.color, opacity: 0.15 }} />
                      {card.size === "wide" ? (
                        <>
                          <div style={{ display: "flex", gap: 6, flex: 1 }}>
                            <div style={{ flex: 1, borderRadius: 6, background: card.color, opacity: 0.08 }} />
                            <div style={{ flex: 1.5, borderRadius: 6, background: card.color, opacity: 0.08 }} />
                          </div>
                          <div style={{ height: 5, width: "50%", borderRadius: 3, background: card.color, opacity: 0.15 }} />
                        </>
                      ) : (
                        <div style={{ flex: 1, borderRadius: 6, background: card.color, opacity: 0.08 }} />
                      )}
                    </div>
                    {/* Stat badge */}
                    <div style={{
                      position: "absolute", zIndex: 2, bottom: 16, left: card.size === "wide" ? 20 : 16,
                      padding: "6px 12px", borderRadius: 8, fontSize: 11, fontWeight: 600,
                      background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.08)",
                      backdropFilter: "blur(4px)", whiteSpace: "nowrap", color: card.colorLight,
                    }}>
                      <span style={{ opacity: 0.5 }}>&#9679;</span> {card.badge}
                    </div>
                  </div>
                  {/* Content area */}
                  <div style={{
                    padding: "24px 28px 28px", display: "flex",
                    justifyContent: "space-between", alignItems: "flex-end", gap: 16,
                  }}>
                    <div>
                      <div style={{
                        display: "inline-flex", alignItems: "center", gap: 7,
                        fontSize: 12, fontWeight: 600, marginBottom: 10,
                        color: card.color, opacity: 0.7,
                      }}>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: card.color }} />
                        {card.label}
                      </div>
                      <div style={{
                        fontSize: card.size === "wide" ? 22 : 20, fontWeight: 700,
                        color: "#f2f4f8", lineHeight: 1.3, letterSpacing: "-0.01em",
                        whiteSpace: "pre-line",
                      }}>
                        {card.title}
                      </div>
                    </div>
                    <div className="bento-arrow-btn" style={{
                      width: 40, height: 40, borderRadius: "50%",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, transition: "all 0.3s ease",
                    }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M10 5l3 3-3 3" stroke="rgba(255,255,255,0.35)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      
      {/* ===== CARD ARRANGEMENTS ===== */}
      <section className="section-cards" style={{ background: T.darkAlt, padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle tag="Arranjos de cartao" title={<>Bandeirado ou Private Label?<br /><span style={{ background: "linear-gradient(135deg, #f45546, #FF7675)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Voce escolhe.</span></>} subtitle="Operamos com arranjo aberto (bandeirado), fechado (private label) ou hibrido. A decisao e estrategica e nos ajudamos voce a tomar." center />

          <div className="cards-grid">
            {/* LEFT: Bandeirado */}
            <Reveal>
              <div className="card-option">
                <div className="card-visual" style={{ background: "linear-gradient(160deg, rgba(108,92,231,0.04), transparent)" }}>
                  <div className="physical-card bandeirado">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div className="card-chip-gold"><div className="chip-lines" /></div>
                      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" style={{ opacity: 0.3 }}><path d="M2 2h5v4H2zM8 2h5v4H8zM2 8h5v4H2zM8 8h5v4H8z" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8"/></svg>
                    </div>
                    <div className="card-number">&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 4832</div>
                    <div className="card-bottom">
                      <div>
                        <div className="card-holder">Titular</div>
                        <div className="card-holder-name">MARIA C SANTOS</div>
                      </div>
                      <div className="mc-logo">
                        <div className="mc-circle red" />
                        <div className="mc-circle yellow" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-info">
                  <div className="card-type-label" style={{ color: "#6C5CE7" }}>
                    <span className="dot" style={{ background: "#6C5CE7" }} />
                    Arranjo Aberto
                  </div>
                  <h3>Cartao Bandeirado</h3>
                  <ul className="features-list">
                    {["Aceitacao ampla em toda rede credenciada", "Mastercard, Visa ou Elo", "Ideal para beneficios e banking com capilaridade", "Regras de MCC e controle por categoria"].map((f, i) => (
                      <li key={i}>
                        <span className="check" style={{ background: "rgba(108,92,231,0.1)", border: "1px solid rgba(108,92,231,0.25)" }}>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 5l2 2 3.5-3.5" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Center divider */}
            <div className="center-divider">
              <div className="divider-line" />
              <div className="divider-badge">ou</div>
              <div className="divider-line" />
            </div>

            {/* RIGHT: Private Label */}
            <Reveal delay={0.1}>
              <div className="card-option">
                <div className="card-visual" style={{ background: "linear-gradient(160deg, rgba(0,184,148,0.04), transparent)" }}>
                  <div className="physical-card privatelabel">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div className="card-chip-gold"><div className="chip-lines" /></div>
                      <div className="pl-brand">
                        <div className="pl-brand-icon">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L2 5.5v5L8 14l6-3.5v-5L8 2z" stroke="#00B894" strokeWidth="1.5" fill="none" opacity="0.8" strokeLinejoin="round"/><circle cx="8" cy="8" r="2" stroke="#55EFC4" strokeWidth="1" opacity="0.6"/></svg>
                        </div>
                        <span className="pl-brand-text">SuaMarca</span>
                      </div>
                    </div>
                    <div className="card-number">&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 7291</div>
                    <div className="card-bottom">
                      <div>
                        <div className="card-holder">Titular</div>
                        <div className="card-holder-name">JOAO P OLIVEIRA</div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3L3 7v6l7 4 7-4V7l-7-4z" stroke="rgba(0,184,148,0.4)" strokeWidth="1.3" fill="none" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-info">
                  <div className="card-type-label" style={{ color: "#00B894" }}>
                    <span className="dot" style={{ background: "#00B894" }} />
                    Arranjo Fechado
                  </div>
                  <h3>Cartao Private Label</h3>
                  <ul className="features-list">
                    {["Rede propria de aceitacao, controle total", "Sua marca no cartao, sem bandeira de terceiro", "Ideal para frotas, vales e ecossistemas fechados", "Autorizador proprio com regras em tempo real"].map((f, i) => (
                      <li key={i}>
                        <span className="check" style={{ background: "rgba(0,184,148,0.1)", border: "1px solid rgba(0,184,148,0.25)" }}>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 5l2 2 3.5-3.5" stroke="#00B894" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Hybrid section */}
          <Reveal delay={0.15}>
            <div className="hybrid-section">
              <div className="hybrid-inner">
                <div className="hybrid-layout">
                  <div className="hybrid-content">
                    <div className="hybrid-exclusive-tag">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1l1.76 3.57L13 5.27l-3 2.93.71 4.13L7 10.27l-3.71 2.06.71-4.13-3-2.93 4.24-.7L7 1z" fill="#f45546" opacity="0.9"/></svg>
                      Pioneiros no Brasil
                    </div>
                    <h3 className="hybrid-title">
                      Por que escolher um<br />se voce pode ter <span className="gradient-text">os dois?</span>
                    </h3>
                    <p className="hybrid-description">
                      Somos pioneiros no Brasil em operar o modelo hibrido: arranjo aberto e fechado na mesma plataforma, com experiencia unificada. Voce decide quais usuarios usam bandeirado e quais usam private label.
                    </p>
                    <div className="hybrid-features">
                      <div className="hybrid-feature">
                        <div className="hybrid-feature-icon purple">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2v8" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round"/></svg>
                        </div>
                        <span className="hybrid-feature-text"><strong>Bandeirado para uso geral</strong> com aceitacao em toda rede credenciada Mastercard/Visa</span>
                      </div>
                      <div className="hybrid-feature">
                        <div className="hybrid-feature-icon green">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2v8" stroke="#00B894" strokeWidth="1.5" strokeLinecap="round"/></svg>
                        </div>
                        <span className="hybrid-feature-text"><strong>Private label para rede propria</strong> com regras especificas e controle total do ecossistema</span>
                      </div>
                      <div className="hybrid-feature">
                        <div className="hybrid-feature-icon red">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="#f45546" strokeWidth="1.5" strokeLinecap="round"/></svg>
                        </div>
                        <span className="hybrid-feature-text"><strong>Dois meios de uso,</strong> uma experiencia unificada para o seu usuario</span>
                      </div>
                    </div>
                  </div>

                  <div className="hybrid-visual">
                    <div className="hybrid-card-stack">
                      {/* Back card: bandeirado */}
                      <div className="physical-card bandeirado">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                          <div className="card-chip-gold"><div className="chip-lines" /></div>
                        </div>
                        <div className="card-number">&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 4832</div>
                        <div className="card-bottom">
                          <div>
                            <div className="card-holder">Titular</div>
                            <div className="card-holder-name">MARIA C SANTOS</div>
                          </div>
                          <div className="mc-logo">
                            <div className="mc-circle red" />
                            <div className="mc-circle yellow" />
                          </div>
                        </div>
                      </div>
                      {/* Front card: private label */}
                      <div className="physical-card privatelabel">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                          <div className="card-chip-gold"><div className="chip-lines" /></div>
                          <div className="pl-brand">
                            <div className="pl-brand-icon">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L2 5.5v5L8 14l6-3.5v-5L8 2z" stroke="#00B894" strokeWidth="1.5" fill="none" opacity="0.8" strokeLinejoin="round"/><circle cx="8" cy="8" r="2" stroke="#55EFC4" strokeWidth="1" opacity="0.6"/></svg>
                            </div>
                            <span className="pl-brand-text">SuaMarca</span>
                          </div>
                        </div>
                        <div className="card-number">&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 7291</div>
                        <div className="card-bottom">
                          <div>
                            <div className="card-holder">Titular</div>
                            <div className="card-holder-name">JOAO P OLIVEIRA</div>
                          </div>
                          <div style={{ display: "flex", alignItems: "center" }}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3L3 7v6l7 4 7-4V7l-7-4z" stroke="rgba(0,184,148,0.4)" strokeWidth="1.3" fill="none" strokeLinejoin="round"/></svg>
                          </div>
                        </div>
                      </div>
                      {/* Merge glow */}
                      <div className="hybrid-merge-badge">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                          <path d="M7 11h8" stroke="#f45546" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M11 7v8" stroke="#f45546" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section-process" style={{ background: T.darkAlt, padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <Reveal>
              <Tag>Como funciona</Tag>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 style={{ fontSize: 44, fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.025em", color: T.textLight }}>
                Do briefing ao produto no ar.<br /><span style={{ background: "linear-gradient(135deg, #f45546, #FF7675)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Sem surpresas.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontSize: 17, color: T.textMutedLight, lineHeight: 1.6, marginTop: 16, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
                Um processo estruturado que ja entregou 18+ fintechs. Cada etapa tem escopo, prazo e entregavel claro.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
          <div className="process-timeline">

            {/* Step 1: Discovery */}
              <div className="process-step">
                <div className="step-indicator">
                  <div className="step-number" style={{ background: "#1a1120", border: "1.5px solid rgba(244,85,70,0.35)", color: "#f45546", boxShadow: "inset 0 0 12px rgba(244,85,70,0.08)" }}>01</div>
                </div>
                <div className="step-content">
                  <h3 className="step-title">Discovery e diagnostico</h3>
                  <p className="step-desc">Mapeamos o modelo de negocio, fluxos financeiros, integradores necessarios e regras de operacao. Sem esse alinhamento, nao avancamos.</p>
                  <div className="step-details">
                    <span className="step-tag" style={{ background: "rgba(244,85,70,0.06)", color: "rgba(244,85,70,0.6)" }}>Modelo de negocio</span>
                    <span className="step-tag" style={{ background: "rgba(244,85,70,0.06)", color: "rgba(244,85,70,0.6)" }}>Requisitos tecnicos</span>
                    <span className="step-tag" style={{ background: "rgba(244,85,70,0.06)", color: "rgba(244,85,70,0.6)" }}>Cronograma</span>
                  </div>
                </div>
                <div className="step-visual" style={{ background: "linear-gradient(160deg, rgba(244,85,70,0.03), transparent)" }}>
                  <div className="discovery-visual">
                    <div className="disc-question">
                      <div className="disc-dot" style={{ background: "rgba(244,85,70,0.5)" }} />
                      <div className="disc-bar" style={{ width: "65%", background: "#f45546" }} />
                    </div>
                    <div className="disc-answer">
                      <div className="disc-pill" style={{ background: "rgba(244,85,70,0.08)", border: "1px solid rgba(244,85,70,0.2)", color: "rgba(244,85,70,0.7)" }}>Beneficios</div>
                      <div className="disc-pill" style={{ background: "rgba(108,92,231,0.08)", border: "1px solid rgba(108,92,231,0.2)", color: "rgba(108,92,231,0.7)" }}>Hibrido</div>
                    </div>
                    <div className="disc-question">
                      <div className="disc-dot" style={{ background: "rgba(244,85,70,0.5)" }} />
                      <div className="disc-bar" style={{ width: "80%", background: "#f45546" }} />
                    </div>
                    <div className="disc-answer">
                      <div className="disc-pill" style={{ background: "rgba(0,184,148,0.08)", border: "1px solid rgba(0,184,148,0.2)", color: "rgba(0,184,148,0.7)" }}>Swap (BaaS)</div>
                      <div className="disc-pill" style={{ background: "rgba(0,184,148,0.08)", border: "1px solid rgba(0,184,148,0.2)", color: "rgba(0,184,148,0.7)" }}>Sitef</div>
                    </div>
                    <div className="disc-question">
                      <div className="disc-dot" style={{ background: "rgba(244,85,70,0.5)" }} />
                      <div className="disc-bar" style={{ width: "50%", background: "#f45546" }} />
                    </div>
                  </div>
                </div>
              </div>

            {/* Step 2: Arquitetura */}
              <div className="process-step">
                <div className="step-indicator">
                  <div className="step-number" style={{ background: "#120f22", border: "1.5px solid rgba(108,92,231,0.35)", color: "#6C5CE7", boxShadow: "inset 0 0 12px rgba(108,92,231,0.08)" }}>02</div>
                </div>
                <div className="step-content">
                  <h3 className="step-title">Arquitetura e configuracao</h3>
                  <p className="step-desc">Ativamos os modulos da nossa stack que se encaixam no projeto. 70-80% da tecnologia ja esta pronta. O resto e configuracao, nao construcao.</p>
                  <div className="step-details">
                    <span className="step-tag" style={{ background: "rgba(108,92,231,0.06)", color: "rgba(108,92,231,0.6)" }}>Modulos ativados</span>
                    <span className="step-tag" style={{ background: "rgba(108,92,231,0.06)", color: "rgba(108,92,231,0.6)" }}>White-label</span>
                    <span className="step-tag" style={{ background: "rgba(108,92,231,0.06)", color: "rgba(108,92,231,0.6)" }}>Regras de negocio</span>
                  </div>
                </div>
                <div className="step-visual" style={{ background: "linear-gradient(160deg, rgba(108,92,231,0.03), transparent)" }}>
                  <div className="arq-visual">
                    <div className="arq-block arq-block-ready">Core</div>
                    <div className="arq-block arq-block-ready">Cartoes</div>
                    <div className="arq-block arq-block-ready">Auth</div>
                    <div className="arq-block arq-block-ready">Regras</div>
                    <div className="arq-block arq-block-config">Custom</div>
                    <div className="arq-block arq-block-ready">App</div>
                  </div>
                  <div className="arq-progress">
                    <div className="arq-bar-bg"><div className="arq-bar-fill" /></div>
                    <span className="arq-label">75% pronto</span>
                  </div>
                </div>
              </div>

            {/* Step 3: Integracao */}
              <div className="process-step">
                <div className="step-indicator">
                  <div className="step-number" style={{ background: "#0c1620", border: "1.5px solid rgba(0,184,148,0.35)", color: "#00B894", boxShadow: "inset 0 0 12px rgba(0,184,148,0.08)" }}>03</div>
                </div>
                <div className="step-content">
                  <h3 className="step-title">Integracao e homologacao</h3>
                  <p className="step-desc">Conectamos BaaS, credenciadoras e parceiros. Cada sprint tem entrega visivel. Voce acompanha em tempo real pelo nosso painel.</p>
                  <div className="step-details">
                    <span className="step-tag" style={{ background: "rgba(0,184,148,0.06)", color: "rgba(0,184,148,0.6)" }}>BaaS conectado</span>
                    <span className="step-tag" style={{ background: "rgba(0,184,148,0.06)", color: "rgba(0,184,148,0.6)" }}>Testes E2E</span>
                    <span className="step-tag" style={{ background: "rgba(0,184,148,0.06)", color: "rgba(0,184,148,0.6)" }}>Homologacao</span>
                  </div>
                </div>
                <div className="step-visual" style={{ background: "linear-gradient(160deg, rgba(0,184,148,0.03), transparent)" }}>
                  <div className="int-visual">
                    <div className="int-row">
                      <div className="int-node int-node-just">JUST Core</div>
                      <div className="int-line" />
                      <div className="int-node int-node-provider">Swap</div>
                    </div>
                    <div className="int-row">
                      <div className="int-node int-node-just">Autorizador</div>
                      <div className="int-line" />
                      <div className="int-node int-node-provider">Sitef</div>
                    </div>
                    <div className="int-row">
                      <div className="int-node int-node-just">Gateway</div>
                      <div className="int-line" />
                      <div className="int-node int-node-provider">Rede Compras</div>
                    </div>
                    <div className="int-status">
                      <div className="int-status-dot" />
                      <span className="int-status-text">3/3 integracoes ativas</span>
                    </div>
                  </div>
                </div>
              </div>

            {/* Step 4: Operacao */}
              <div className="process-step">
                <div className="step-indicator">
                  <div className="step-number" style={{ background: "#0e1820", border: "1.5px solid rgba(39,174,96,0.35)", color: "#27AE60", boxShadow: "inset 0 0 12px rgba(39,174,96,0.08)" }}>04</div>
                </div>
                <div className="step-content">
                  <h3 className="step-title">Go-live e evolucao</h3>
                  <p className="step-desc">Produto no ar com monitoramento 24/7, suporte dedicado e roadmap de evolucao. Nao entregamos e sumimos.</p>
                  <div className="step-details">
                    <span className="step-tag" style={{ background: "rgba(39,174,96,0.06)", color: "rgba(39,174,96,0.6)" }}>Monitoramento</span>
                    <span className="step-tag" style={{ background: "rgba(39,174,96,0.06)", color: "rgba(39,174,96,0.6)" }}>Suporte</span>
                    <span className="step-tag" style={{ background: "rgba(39,174,96,0.06)", color: "rgba(39,174,96,0.6)" }}>Evolucao</span>
                  </div>
                </div>
                <div className="step-visual" style={{ background: "linear-gradient(160deg, rgba(39,174,96,0.03), transparent)" }}>
                  <div className="op-visual">
                    <div className="op-topbar">
                      <div className="op-dot" style={{ background: "#27AE60" }} />
                      <div className="op-dot" style={{ background: "rgba(255,255,255,0.15)" }} />
                      <div className="op-dot" style={{ background: "rgba(255,255,255,0.15)" }} />
                    </div>
                    <div className="op-metrics">
                      <div className="op-metric">
                        <div className="op-metric-label">TPV mensal</div>
                        <div className="op-metric-value" style={{ color: "#27AE60" }}>R$2.4M</div>
                      </div>
                      <div className="op-metric">
                        <div className="op-metric-label">Uptime</div>
                        <div className="op-metric-value" style={{ color: "rgba(242,244,248,0.7)" }}>99.9%</div>
                      </div>
                    </div>
                    <div className="op-status-bar">
                      <div className="op-status-dot" />
                      <span className="op-status-text">Todos os servicos operacionais</span>
                    </div>
                  </div>
                </div>
              </div>

          </div>
          </Reveal>

          {/* Summary bar */}
          <Reveal delay={0.5}>
            <div className="process-summary">
              <div className="summary-item">
                <div className="summary-icon" style={{ background: "rgba(244,85,70,0.08)", border: "1px solid rgba(244,85,70,0.15)" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="#f45546" strokeWidth="1.5" /><path d="M9 5v4l3 2" stroke="#f45546" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </div>
                <div className="summary-text">
                  <strong>~90 dias do kick-off ao go-live</strong>
                  Produto padrao, sem customizacoes complexas
                </div>
              </div>
              <div className="summary-divider" />
              <div className="summary-item">
                <div className="summary-icon" style={{ background: "rgba(0,184,148,0.08)", border: "1px solid rgba(0,184,148,0.15)" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9.5l4 4 8-8" stroke="#00B894" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div className="summary-text">
                  <strong>70-80% da stack ja pronta</strong>
                  Configuracao, nao construcao do zero
                </div>
              </div>
              <div className="summary-divider" />
              <div className="summary-item">
                <div className="summary-icon" style={{ background: "rgba(108,92,231,0.08)", border: "1px solid rgba(108,92,231,0.15)" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2v14M2 9h14" stroke="#6C5CE7" strokeWidth="1.8" strokeLinecap="round" /></svg>
                </div>
                <div className="summary-text">
                  <strong>Sprints com entrega visivel</strong>
                  Voce acompanha cada etapa
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ===== METRICS ===== */}
      <section className="section-metrics" style={{ background: T.primary, padding: "80px 48px", borderTop: `1px solid rgba(255,255,255,0.04)`, borderBottom: `1px solid rgba(255,255,255,0.04)` }}>
        <Reveal>
          <div className="metrics-grid" style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
            <div className="metric-item" style={{ textAlign: "center", padding: "32px 24px", position: "relative" }}>
              <div style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-0.03em", color: "rgba(242,244,248,0.85)", lineHeight: 1, marginBottom: 10 }}>
                <span style={{ fontSize: 24, fontWeight: 600, color: "rgba(242,244,248,0.4)", marginRight: 2 }}>R$</span>4<span style={{ fontSize: 24, fontWeight: 600, color: "rgba(242,244,248,0.4)", marginLeft: 2 }}>bi+</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "rgba(242,244,248,0.3)", letterSpacing: "0.03em" }}>TPV processado</div>
            </div>
            <div className="metric-item" style={{ textAlign: "center", padding: "32px 24px", position: "relative", borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-0.03em", color: "rgba(242,244,248,0.85)", lineHeight: 1, marginBottom: 10 }}>
                30<span style={{ fontSize: 24, fontWeight: 600, color: "rgba(242,244,248,0.4)", marginLeft: 2 }}>M+</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "rgba(242,244,248,0.3)", letterSpacing: "0.03em" }}>Transacoes processadas</div>
            </div>
            <div className="metric-item" style={{ textAlign: "center", padding: "32px 24px", position: "relative", borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-0.03em", color: "rgba(242,244,248,0.85)", lineHeight: 1, marginBottom: 10 }}>
                500<span style={{ fontSize: 24, fontWeight: 600, color: "rgba(242,244,248,0.4)", marginLeft: 2 }}>mil+</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "rgba(242,244,248,0.3)", letterSpacing: "0.03em" }}>Usuarios em plataforma</div>
            </div>
            <div className="metric-item" style={{ textAlign: "center", padding: "32px 24px", position: "relative", borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-0.03em", color: "rgba(242,244,248,0.85)", lineHeight: 1, marginBottom: 10 }}>
                15<span style={{ fontSize: 24, fontWeight: 600, color: "rgba(242,244,248,0.4)", marginLeft: 2 }}>+</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "rgba(242,244,248,0.3)", letterSpacing: "0.03em" }}>Fintechs construidas</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===== CASES PREVIEW ===== */}
      <section className="section-cases" style={{ background: T.darkAlt, padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <Reveal>
              <Tag>Cases</Tag>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 style={{ fontSize: 44, fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.025em", color: T.textLight }}>
                Resultados reais. Fintechs em producao.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontSize: 17, color: T.textMutedLight, lineHeight: 1.6, marginTop: 16, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
                Conheca alguns dos produtos que construimos e operamos com nossos parceiros.
              </p>
            </Reveal>
          </div>

          <div className="cases-grid">

            {/* Case 1: eFleet */}
            <Reveal delay={0.1}>
              <div className="case-card">
                <div className="case-video">
                  <iframe
                    src="https://www.youtube.com/embed/rngBWxLvsNw?rel=0&modestbranding=1"
                    title="eFleet - Case JUST"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="case-content">
                  <div className="case-products">
                    <span className="product-badge" style={{ background: "rgba(0,184,148,0.08)", color: "#00B894", border: "1px solid rgba(0,184,148,0.15)" }}>
                      <svg viewBox="0 0 44 44" fill="none"><rect x="8" y="10" width="20" height="26" rx="3" stroke="#00B894" strokeWidth="2" fill="none" opacity="0.9" /><rect x="12" y="14" width="12" height="8" rx="1.5" stroke="#55EFC4" strokeWidth="1.5" fill="none" opacity="0.6" /><path d="M28 16h4a3 3 0 0 1 3 3v10a2 2 0 0 1-2 2h-1" stroke="#00B894" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.7" /><circle cx="33" cy="26" r="2" stroke="#00B894" strokeWidth="1.5" fill="none" opacity="0.5" /><line x1="8" y1="36" x2="28" y2="36" stroke="#55EFC4" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" /></svg>
                      Fleet
                    </span>
                  </div>
                  <p className="case-name">eFleet</p>
                  <h3 className="case-headline">Gestao de Frota com abastecimento e pagamento de pedagio</h3>
                  <div className="case-metrics">
                    <span className="case-metric" style={{ background: "rgba(0,184,148,0.06)", color: "#00B894" }}>5+ anos de parceria</span>
                    <span className="case-metric" style={{ background: "rgba(0,184,148,0.06)", color: "#00B894" }}>R$250M+ processamento/ano</span>
                    <span className="case-metric" style={{ background: "rgba(0,184,148,0.06)", color: "#00B894" }}>10+ modulos integrados</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Case 2: Viasoft Pay */}
            <Reveal delay={0.2}>
              <div className="case-card">
                <div className="case-video">
                  <iframe
                    src="https://www.youtube.com/embed/dr_fzCkw7Z8?rel=0&modestbranding=1"
                    title="ViasoftPay - Case JUST"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="case-content">
                  <div className="case-products">
                    <span className="product-badge" style={{ background: "rgba(108,92,231,0.08)", color: "#6C5CE7", border: "1px solid rgba(108,92,231,0.15)" }}>
                      <svg viewBox="0 0 44 44" fill="none"><rect x="5" y="10" width="34" height="24" rx="4" stroke="#6C5CE7" strokeWidth="2" fill="none" opacity="0.9" /><rect x="10" y="16" width="7" height="5" rx="1.2" stroke="#A29BFE" strokeWidth="1.5" fill="none" opacity="0.7" /><line x1="10" y1="26" x2="22" y2="26" stroke="#A29BFE" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" /><line x1="10" y1="29" x2="17" y2="29" stroke="#A29BFE" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" /><circle cx="33" cy="27" r="3" stroke="#6C5CE7" strokeWidth="1.5" fill="none" opacity="0.6" /><circle cx="30" cy="27" r="3" stroke="#6C5CE7" strokeWidth="1.5" fill="none" opacity="0.4" /></svg>
                      Benefits
                    </span>
                    <span className="product-badge" style={{ background: "rgba(225,112,85,0.08)", color: "#E17055", border: "1px solid rgba(225,112,85,0.15)" }}>
                      <svg viewBox="0 0 44 44" fill="none"><path d="M10 6h24v32l-4-3-4 3-4-3-4 3-4-3-4 3V6z" stroke="#E17055" strokeWidth="2" fill="none" opacity="0.9" strokeLinejoin="round" /><line x1="16" y1="14" x2="28" y2="14" stroke="#FAB1A0" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" /><line x1="16" y1="19" x2="28" y2="19" stroke="#FAB1A0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" /><line x1="16" y1="24" x2="24" y2="24" stroke="#FAB1A0" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" /><circle cx="28" cy="24" r="2" fill="#E17055" opacity="0.5" /></svg>
                      Expense
                    </span>
                  </div>
                  <p className="case-name">Viasoft Pay</p>
                  <h3 className="case-headline">Beneficios e Despesas Corporativas com Arranjo Hibrido</h3>
                  <div className="case-metrics">
                    <span className="case-metric" style={{ background: "rgba(108,92,231,0.06)", color: "#6C5CE7" }}>100k+ usuarios</span>
                    <span className="case-metric" style={{ background: "rgba(108,92,231,0.06)", color: "#6C5CE7" }}>R$500M+ processamento/ano</span>
                    <span className="case-metric" style={{ background: "rgba(108,92,231,0.06)", color: "#6C5CE7" }}>45 dias zero-to-production</span>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="section-cta" style={{ background: `linear-gradient(160deg, ${T.darkAlt}, ${T.secondary})`, padding: "120px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, background: "radial-gradient(circle, rgba(244,85,70,0.06), transparent)", borderRadius: "50%", filter: "blur(80px)" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <Reveal>
            <h2 style={{ fontSize: 44, fontWeight: 700, color: T.textLight, marginBottom: 16, letterSpacing: "-0.02em" }}>Pronto para ter sua propria fintech?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontSize: 17, color: T.textMutedLight, maxWidth: 480, margin: "0 auto 36px" }}>
              Converse com nosso time e veja como nossos produtos se aplicam ao seu negocio.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Btn onClick={() => nav("contato")} size="lg">Agendar uma conversa</Btn>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

// ========================================
// SOBRE PAGE
// ========================================
function SobrePage({ setPage }) {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const timeline = [
    { y: "2020", t: "Fundacao", d: "Gabriel Pires funda a JUST com um principio: produto financeiro so existe quando esta operando." },
    { y: "2021", t: "Primeiros clientes", d: "Inicio das operacoes com eFleet e primeiros projetos de beneficios flexiveis." },
    { y: "2022", t: "Stack propria", d: "Stack proprietaria atinge 70% de reuso. Velocidade de entrega se torna diferencial." },
    { y: "2023", t: "Escala", d: "10+ clientes ativos. R$500M+ em processamento anual." },
    { y: "2024", t: "Validacao", d: "ViaSoftPay em 45 dias. NPS 76. Modelo de produto-plataforma validado." },
    { y: "2025", t: "Expansao", d: "18+ clientes. 40k+ usuarios. R$35.9M TPV mensal." },
  ];
  return (
    <div>
      <section style={{ background: `linear-gradient(160deg, ${T.primary}, ${T.darkAlt}, ${T.secondary})`, padding: "170px 48px 100px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Reveal><Tag>Quem somos</Tag></Reveal>
          <Reveal delay={0.1}><h1 style={{ fontSize: 48, fontWeight: 700, color: T.textLight, lineHeight: 1.1, margin: "16px 0" }}>Criada por quem entende de produto financeiro.</h1></Reveal>
          <Reveal delay={0.2}><p style={{ fontSize: 18, color: T.textMutedLight, lineHeight: 1.6 }}>A JUST nasceu em 2020 para resolver um problema recorrente: empresas que querem operar fintechs proprias, mas ficam presas em projetos que nunca saem do papel.</p></Reveal>
        </div>
      </section>
      <section style={{ background: T.primary, padding: "120px 48px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <SectionTitle title="Do primeiro produto ao ecossistema." center />
          <div style={{ position: "relative", paddingLeft: 40 }}>
            <div style={{ position: "absolute", left: 11, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${T.cta}60, ${T.secondary}40)` }} />
            {timeline.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ marginBottom: 36, position: "relative" }}>
                  <div style={{ position: "absolute", left: -34, top: 5, width: 10, height: 10, borderRadius: "50%", background: T.cta, boxShadow: `0 0 12px ${T.cta}40` }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: T.cta, letterSpacing: "0.04em" }}>{t.y}</span>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: T.textLight, margin: "4px 0 6px" }}>{t.t}</h3>
                  <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6 }}>{t.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: T.darkAlt, padding: "100px 48px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            { t: "Produto sobre promessa", d: "Nao vendemos roadmaps. Entregamos plataformas em producao." },
            { t: "Estrutura gera velocidade", d: "70-80% de reuso. Modulos prontos. Governanca antes de escala." },
            { t: "Parceiro estrategico", d: "Braco tecnologico do negocio. Sustentamos e evoluimos junto." },
          ].map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{ padding: 32, borderRadius: 14, background: "rgba(255,255,255,0.025)", border: `1px solid ${T.borderLight}` }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: T.textLight, marginBottom: 10 }}>{p.t}</h3>
                <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6 }}>{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section style={{ background: `linear-gradient(135deg, ${T.primary}, ${T.secondary})`, padding: "100px 48px", textAlign: "center" }}>
        <Reveal><h2 style={{ fontSize: 36, fontWeight: 700, color: T.textLight, marginBottom: 24 }}>Quer conhecer nossos produtos?</h2></Reveal>
        <Reveal delay={0.1}><Btn onClick={() => nav("contato")}>Fale com nosso time</Btn></Reveal>
      </section>
    </div>
  );
}

// ========================================
// STACK, CASES, CONTATO, SOLUTION pages
// (Keeping same structure as v1 but with updated tokens and product colors)
// ========================================
function StackPage({ setPage }) {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const [tab, setTab] = useState(0);
  const tabs = [
    { t: "Core Financeiro", hint: "Processamento proprio", icon: "core", d: "Core proprietario, modular e escalavel. Controle total sobre fluxos financeiros, regras de negocio e operacao. O controle do core reduz risco, aumenta previsibilidade e acelera decisoes.", tags: ["Autorizador proprio","Ledger financeiro","Split de pagamentos","Conciliacao unificada","Multi-tenant","Processamento ISO 8583"], visual: [{n:"Autorizador",c:"#f45546",bg:"rgba(244,85,70,0.1)",bc:"rgba(244,85,70,0.2)"},{n:"Ledger",c:"#55efc4",bg:"rgba(0,184,148,0.08)",bc:"rgba(0,184,148,0.15)"},{n:"Split",c:"#74b9ff",bg:"rgba(9,132,227,0.08)",bc:"rgba(9,132,227,0.15)"},{n:"Conciliacao",c:"#a29bfe",bg:"rgba(108,92,231,0.08)",bc:"rgba(108,92,231,0.15)"}] },
    { t: "Multi BaaS", hint: "Sem lock-in", icon: "baas", d: "Arquitetura que suporta multiplos provedores simultaneamente. Failover automatico, sem lock-in, migracao sem impacto. Nenhum produto financeiro deve depender de um unico fornecedor.", tags: ["Multi-provider","Failover automatico","Hot-swap","Migracao zero-downtime"], visual: [{n:"Provider A",c:"#1abc9c",bg:"rgba(26,188,156,0.08)",bc:"rgba(26,188,156,0.15)"},{n:"Provider B",c:"#1abc9c",bg:"rgba(26,188,156,0.08)",bc:"rgba(26,188,156,0.15)"},{n:"Fallback",c:"#FDCB6E",bg:"rgba(253,203,110,0.08)",bc:"rgba(253,203,110,0.15)"}] },
    { t: "Arranjo Fechado", hint: "Rede propria", icon: "closed", d: "Processamento em circuito fechado. Rede propria de captura, taxas customizadas, controle total sobre regras de aceite e independencia operacional.", tags: ["Rede propria","Taxas customizadas","Regras de aceite","TEF/POS/QR","RFID/NFC"], visual: [{n:"Captura",c:"#6C5CE7",bg:"rgba(108,92,231,0.08)",bc:"rgba(108,92,231,0.15)"},{n:"Autorizador",c:"#f45546",bg:"rgba(244,85,70,0.1)",bc:"rgba(244,85,70,0.2)"},{n:"Liquidacao",c:"#55efc4",bg:"rgba(0,184,148,0.08)",bc:"rgba(0,184,148,0.15)"}] },
    { t: "Gateway", hint: "Roteamento inteligente", icon: "gateway", d: "Roteamento inteligente entre adquirentes, retentativas, split de pagamentos e conciliacao unificada. Maximize aprovacao, minimize custos.", tags: ["Smart routing","Retentativas","Split payments","Conciliacao"], visual: [{n:"Transacao",c:"#74b9ff",bg:"rgba(9,132,227,0.08)",bc:"rgba(9,132,227,0.15)"},{n:"Router",c:"#f45546",bg:"rgba(244,85,70,0.1)",bc:"rgba(244,85,70,0.2)"},{n:"Acquirer A",c:"#1abc9c",bg:"rgba(26,188,156,0.08)",bc:"rgba(26,188,156,0.15)"},{n:"Acquirer B",c:"#1abc9c",bg:"rgba(26,188,156,0.08)",bc:"rgba(26,188,156,0.15)"}] },
    { t: "Motor de Regras", hint: "Regras configuraveis", icon: "rules", d: "Regras financeiras configuraveis: limites, politicas de uso, compliance, fluxos de aprovacao e prevencao a fraude. Sem codigo, sem deploy.", tags: ["Limites dinamicos","Politicas de uso","Compliance","Anti-fraude","Zero-code"], visual: [{n:"Evento",c:"#74b9ff",bg:"rgba(9,132,227,0.08)",bc:"rgba(9,132,227,0.15)"},{n:"Regras",c:"#FDCB6E",bg:"rgba(253,203,110,0.08)",bc:"rgba(253,203,110,0.15)"},{n:"Acao",c:"#55efc4",bg:"rgba(0,184,148,0.08)",bc:"rgba(0,184,148,0.15)"}] },
    { t: "Apps & Backoffice", hint: "White-label completo", icon: "apps", d: "Apps nativos white-label + painel administrativo unificado. Gestao de usuarios, cartoes, movimentacoes e relatorios. Sua marca, sua experiencia.", tags: ["App iOS/Android","Portal web","Backoffice","White-label","Push notifications"], visual: [{n:"App Mobile",c:"#E17055",bg:"rgba(225,112,85,0.08)",bc:"rgba(225,112,85,0.15)"},{n:"Portal",c:"#a29bfe",bg:"rgba(108,92,231,0.08)",bc:"rgba(108,92,231,0.15)"},{n:"Admin",c:"#74b9ff",bg:"rgba(9,132,227,0.08)",bc:"rgba(9,132,227,0.15)"}] },
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
    { name: "Benefits", cls: "b", desc: "Cartoes de beneficios: VA, VR, VT, mobilidade e multibeneficios" },
    { name: "Fleet", cls: "f", desc: "Gestao de combustivel, pedagio, manutencao e controle de frotas" },
    { name: "Banking", cls: "k", desc: "Conta digital, cartao, PIX, transferencias e servicos financeiros" },
    { name: "Expenses", cls: "e", desc: "Despesas corporativas, cartao corporativo e prestacao de contas" },
    { name: "Credit", cls: "c", desc: "Antecipacao salarial, credito consignado e recebiveis" },
    { name: "Custom", cls: "x", desc: "Produtos financeiros sob medida para o seu negocio" },
  ];

  return (
    <div>
      {/* ===== HERO WITH ARCH DIAGRAM ===== */}
      <section style={{ background: `linear-gradient(160deg, ${T.primary}, #151a2d, ${T.secondary})`, padding: "150px 48px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 60, alignItems: "center" }}>
          <div>
            <Reveal><Tag>Tecnologia</Tag></Reveal>
            <Reveal delay={0.1}><h1 style={{ fontSize: 44, fontWeight: 700, color: T.textLight, lineHeight: 1.1, marginBottom: 16 }}>A base tecnica que sustenta produtos financeiros em producao.</h1></Reveal>
            <Reveal delay={0.2}><p style={{ fontSize: 17, color: T.textMutedLight, lineHeight: 1.6 }}>Todo produto financeiro solido comeca por uma fundacao tecnica bem definida. A JUST constroi essa base para garantir seguranca, escala e evolucao continua.</p></Reveal>
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
              <div className="ha-bottom">App + Plataformas de Gestao Web &mdash; powered by JUST</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== VERTICAL TABS - COMPONENTES ===== */}
      <section style={{ background: T.darkAlt, padding: "100px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionTitle tag="Plataforma" title="Componentes da plataforma." center subtitle="Cada componente foi construido para operar de forma independente e integrada. Seu produto. Suas regras. Sem gambiarras." />
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
          <SectionTitle tag="Integracoes" title="Multi-provider por design." center subtitle="Nenhum produto financeiro deve depender de um unico fornecedor. O produto continua o mesmo. Os fornecedores podem mudar." />
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
              <div className="mp-prov-card"><div className="mp-prov-category">CaaS & Bins Sponsor</div><div className="mp-prov-list"><div className="mp-prov-badge acq"><span className="mp-dot"/> Emissao de Cartoes</div><div className="mp-prov-badge acq"><span className="mp-dot"/> BIN Sponsorship</div><div className="mp-prov-badge acq"><span className="mp-dot"/> Tokenizacao</div><div className="mp-prov-badge more">+ arranjo aberto/fechado</div></div></div>
              <div className="mp-prov-card"><div className="mp-prov-category">Acquirers & Captura</div><div className="mp-prov-list"><div className="mp-prov-badge cap"><span className="mp-dot"/> TEF / POS</div><div className="mp-prov-badge cap"><span className="mp-dot"/> QR Code</div><div className="mp-prov-badge cap"><span className="mp-dot"/> App Pay</div><div className="mp-prov-badge cap"><span className="mp-dot"/> RFID / NFC</div></div></div>
              <div className="mp-prov-card"><div className="mp-prov-category">Compliance</div><div className="mp-prov-list"><div className="mp-prov-badge proto"><span className="mp-dot"/> LGPD</div><div className="mp-prov-badge proto"><span className="mp-dot"/> PCI-Aware</div><div className="mp-prov-badge proto"><span className="mp-dot"/> AML / KYC</div><div className="mp-prov-badge proto"><span className="mp-dot"/> Auditoria</div></div></div>
            </div>
            <div className="mp-swap-indicator">
              <div className="mp-swap-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#55efc4" strokeWidth="2"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M14 14l7 7M3 8V3h5M10 10L3 3"/></svg></div>
              <div className="mp-swap-text"><strong>Troque de provider sem impacto no produto.</strong> A camada de abstracao da JUST isola seu produto das dependencias de fornecedores. Migre, adicione ou remova providers em producao.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEGURANCA ===== */}
      <section style={{ background: T.darkAlt, padding: "100px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionTitle tag="Seguranca" title="Seguranca como processo, nao como feature." center subtitle="Produtos financeiros nao podem falhar em producao. Nossa arquitetura parte desse principio." />
          <div className="sec-highlight">
            <div><div className="sec-stat-value">Pen Test</div><div className="sec-stat-label">Recorrente com retest formal</div></div>
            <div><div className="sec-stat-value">AWS</div><div className="sec-stat-label">Partner com infra dedicada</div></div>
            <div><div className="sec-stat-value">LGPD</div><div className="sec-stat-label">Compliance implementado</div></div>
            <div><div className="sec-stat-value">OWASP</div><div className="sec-stat-label">Mobile Top 10 aplicado</div></div>
          </div>
          <div className="security-grid">
            <div className="sec-card">
              <div className="sec-icon" style={{ background: "rgba(0,184,148,0.1)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#55efc4" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div>
              <h4>Defense in Depth</h4>
              <p>Protecao em camadas: WAF em borda, API Gateway com rate limiting, autenticacao JWT, isolamento de rede via VPC.</p>
            </div>
            <div className="sec-card">
              <div className="sec-icon" style={{ background: "rgba(108,92,231,0.1)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a29bfe" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg></div>
              <h4>PCI-Aware Architecture</h4>
              <p>Arquitetura desenhada com consciencia dos padroes PCI DSS. Dados sensiveis sob custodia da instituicao financeira regulada.</p>
            </div>
            <div className="sec-card">
              <div className="sec-icon" style={{ background: "rgba(9,132,227,0.1)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#74b9ff" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg></div>
              <h4>AWS Infrastructure</h4>
              <p>VPC isolada, subnets privadas, criptografia KMS, TLS 1.3, RDS Multi-AZ com backups diarios.</p>
            </div>
            <div className="sec-card">
              <div className="sec-icon" style={{ background: "rgba(244,85,70,0.1)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f45546" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div>
              <h4>Monitoramento 24/7</h4>
              <p>Dashboards Grafana em tempo real. Logs centralizados com retencao para auditoria. Alertas automaticos.</p>
            </div>
            <div className="sec-card">
              <div className="sec-icon" style={{ background: "rgba(253,203,110,0.1)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDCB6E" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M9 15l2 2 4-4"/></svg></div>
              <h4>Pen Test Recorrente</h4>
              <p>Testes de intrusao Gray/White Box com ciclo semestral. Retest formal de vulnerabilidades criticas e altas.</p>
            </div>
            <div className="sec-card">
              <div className="sec-icon" style={{ background: "rgba(225,112,85,0.1)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E17055" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg></div>
              <h4>Mobile Security (OWASP)</h4>
              <p>Runtime hardening: deteccao de root/jailbreak, SSL Pinning, deteccao de proxy/MITM. Confianca minima no cliente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ background: `linear-gradient(135deg, ${T.primary}, ${T.secondary})`, padding: "100px 48px", textAlign: "center" }}>
        <Reveal><h2 style={{ fontSize: 36, fontWeight: 700, color: T.textLight, marginBottom: 24 }}>Quer entender como se aplica ao seu caso?</h2></Reveal>
        <Reveal delay={0.1}><Btn onClick={() => nav("contato")}>Fale com nosso time tecnico</Btn></Reveal>
      </section>
    </div>
  );
}


function CasesPage({ setPage }) {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const cases = [
    { tag: "Beneficios", name: "ViaSoftPay", headline: "Do zero a producao em 45 dias", items: ["45 dias do inicio ao go-live", "100k+ usuarios ativos", "R$500M+ processamento anual", "NPS 100"], color: PRODUCT_COLORS.beneficios.accent },
    { tag: "Frotas", name: "eFleet", headline: "5+ anos de parceria, 10+ modulos", items: ["5+ anos de parceria continua", "10+ modulos em producao", "R$500M+ processamento anual"], color: PRODUCT_COLORS.frotas.accent },
    { tag: "Arranjo Hibrido", name: "SmartVale", headline: "Primeiro arranjo hibrido do portfolio", items: ["Arranjo hibrido em producao", "Fechado + aberto integrados", "Regras customizadas por saldo"], color: PRODUCT_COLORS.beneficios.accent },
    { tag: "Beneficios + Credito", name: "KPI", headline: "266% de crescimento em transacoes", items: ["266% crescimento", "Beneficios + credito integrados", "Produto combinado unico"], color: PRODUCT_COLORS.antecipacao.accent },
  ];
  return (
    <div>
      <section style={{ background: `linear-gradient(160deg, ${T.primary}, ${T.darkAlt}, ${T.secondary})`, padding: "170px 48px 100px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Reveal><Tag>Cases</Tag></Reveal>
          <Reveal delay={0.1}><h1 style={{ fontSize: 48, fontWeight: 700, color: T.textLight, lineHeight: 1.1, margin: "16px 0" }}>Resultados reais. Fintechs em producao.</h1></Reveal>
        </div>
      </section>
      <section style={{ background: T.primary, padding: "80px 48px", borderBottom: `1px solid ${T.borderLight}` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          <Metric prefix="R$" value={35.9} suffix="M" label="TPV mensal" />
          <Metric value={40955} suffix="+" label="Usuarios" delay={0.08} />
          <Metric value={18} suffix="+" label="Clientes" delay={0.16} />
          <Metric prefix="NPS " value={76} suffix="" label="Satisfacao" delay={0.24} />
        </div>
      </section>
      <section style={{ background: T.primary, padding: "100px 48px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>
          {cases.map((c, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 32, padding: 36, borderRadius: 16, background: `${c.color}05`, border: `1px solid ${c.color}12`, alignItems: "center" }}>
                <div>
                  <Tag color={c.color}>{c.tag}</Tag>
                  <p style={{ fontSize: 12, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", margin: "10px 0 4px", letterSpacing: "0.04em" }}>{c.name}</p>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: T.textLight, lineHeight: 1.2 }}>{c.headline}</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {c.items.map((item, j) => (
                    <span key={j} style={{ padding: "8px 14px", borderRadius: 8, background: `${c.color}10`, color: c.color, fontSize: 13, fontWeight: 500 }}>&#10003; {item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section style={{ background: `linear-gradient(135deg, ${T.primary}, ${T.secondary})`, padding: "100px 48px", textAlign: "center" }}>
        <Reveal><h2 style={{ fontSize: 36, fontWeight: 700, color: T.textLight, marginBottom: 24 }}>Quer resultados parecidos?</h2></Reveal>
        <Reveal delay={0.1}><Btn onClick={() => nav("contato")}>Agendar uma reuniao</Btn></Reveal>
      </section>
    </div>
  );
}

function ContatoPage() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    { q: "Quanto tempo leva?", a: "Produtos padrao: 30-90 dias. Complexos: 3-6 meses. Sempre abaixo de 12-24 meses do mercado." },
    { q: "Preciso ter licenca bancaria?", a: "Nao. Nossos produtos operam sobre BaaS licenciados." },
    { q: "Qual o investimento?", a: "Projetos partem de R$20k/mes. Depende do escopo." },
    { q: "E apos o go-live?", a: "Sustentacao continua. Monitoramos, evoluimos e respondemos incidentes." },
  ];
  return (
    <div>
      <section style={{ background: `linear-gradient(160deg, ${T.primary}, ${T.darkAlt})`, padding: "170px 48px 80px", textAlign: "center" }}>
        <Reveal><h1 style={{ fontSize: 44, fontWeight: 700, color: T.textLight, marginBottom: 12 }}>Vamos construir sua fintech.</h1></Reveal>
        <Reveal delay={0.1}><p style={{ fontSize: 17, color: T.textMutedLight }}>Nosso time retorna em ate 24h uteis.</p></Reveal>
      </section>
      <section style={{ background: T.primary, padding: "80px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 60 }}>
          {!sent ? (
            <Reveal>
              <div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  {[{ l: "Nome *", t: "text" }, { l: "Email corporativo *", t: "email" }, { l: "Empresa *", t: "text" }, { l: "Telefone", t: "tel" }].map((f, i) => (
                    <div key={i}>
                      <label style={{ display: "block", fontSize: 12, color: T.textMuted, marginBottom: 5, fontWeight: 500 }}>{f.l}</label>
                      <input type={f.t} style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: `1px solid ${T.borderLight}`, background: "rgba(255,255,255,0.04)", color: T.textLight, fontSize: 14, outline: "none" }} />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 12, color: T.textMuted, marginBottom: 5, fontWeight: 500 }}>Produto de interesse *</label>
                  <select style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: `1px solid ${T.borderLight}`, background: "rgba(255,255,255,0.04)", color: T.textLight, fontSize: 14 }}>
                    <option>Selecione</option>
                    {["JUST Benefits", "JUST Fleet", "JUST Banking", "JUST Expense", "JUST Credit", "JUST Custom", "Ainda nao sei"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: 12, color: T.textMuted, marginBottom: 5, fontWeight: 500 }}>Sobre o projeto</label>
                  <textarea rows={3} placeholder="Quantos usuarios? Prazo? Cenario atual?" style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: `1px solid ${T.borderLight}`, background: "rgba(255,255,255,0.04)", color: T.textLight, fontSize: 14, resize: "vertical", outline: "none" }} />
                </div>
                <Btn onClick={() => setSent(true)} style={{ width: "100%" }}>Enviar mensagem</Btn>
              </div>
            </Reveal>
          ) : (
            <Reveal><div style={{ textAlign: "center", padding: "60px 0" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: `${T.cta}15`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 28, color: T.cta }}>&#10003;</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: T.textLight, marginBottom: 8 }}>Mensagem enviada!</h3>
              <p style={{ fontSize: 15, color: T.textMuted }}>Retornamos em ate 24h uteis.</p>
            </div></Reveal>
          )}
          <Reveal delay={0.15} direction="right">
            <div style={{ paddingTop: 8 }}>
              {[{ l: "Email", v: "contato@justto.com.br" }, { l: "Localizacao", v: "Sao Paulo, SP" }, { l: "Horario", v: "Seg-Sex, 9h-18h" }].map((info) => (
                <div key={info.l} style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 11, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4, fontWeight: 600 }}>{info.l}</div>
                  <div style={{ fontSize: 15, color: T.textLight }}>{info.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section style={{ background: T.darkAlt, padding: "80px 48px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: T.textLight, marginBottom: 28, textAlign: "center" }}>Perguntas frequentes</h2>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: `1px solid ${T.borderLight}`, marginBottom: 8 }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", padding: "14px 0", background: "none", border: "none", cursor: "pointer", color: T.textLight, fontSize: 15, fontWeight: 500, textAlign: "left" }}>
                {f.q} <span style={{ transform: openFaq === i ? "rotate(180deg)" : "none", transition: "0.3s" }}>&#9662;</span>
              </button>
              {openFaq === i && <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6, padding: "0 0 14px" }}>{f.a}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function SolutionPage({ setPage, config }) {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const pc = PRODUCT_COLORS[config.key] || PRODUCT_COLORS.beneficios;
  return (
    <div>
      <section style={{ background: `linear-gradient(160deg, ${T.primary}, ${T.darkAlt})`, padding: "170px 48px 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <Reveal><div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <ProductIcon productKey={config.key} size={36} showCard />
              <Tag color={pc.accent}>{pc.label}</Tag>
            </div></Reveal>
            <Reveal delay={0.1}><h1 style={{ fontSize: 44, fontWeight: 700, color: T.textLight, lineHeight: 1.1, marginBottom: 16 }}>{config.title}</h1></Reveal>
            <Reveal delay={0.2}><p style={{ fontSize: 17, color: T.textMutedLight, lineHeight: 1.6, marginBottom: 32 }}>{config.subtitle}</p></Reveal>
            <Reveal delay={0.3}><Btn onClick={() => nav("contato")}>Falar com especialista</Btn></Reveal>
          </div>
          <Reveal delay={0.2} direction="right">
            <ProductMockup color={pc.accent} label={pc.label} productKey={config.key} style={{ maxWidth: 500 }} />
          </Reveal>
        </div>
      </section>
      <section style={{ background: T.primary, padding: "100px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionTitle title="Modelos de operacao" center />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[config.model1, config.model2].map((m, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ padding: 32, borderRadius: 14, background: `${pc.accent}05`, border: `1px solid ${pc.accent}12` }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: T.textLight, marginBottom: 10 }}>{m.title}</h3>
                  <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6 }}>{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: T.darkAlt, padding: "100px 48px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <SectionTitle title="Capacidades" center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {config.capabilities.map((c, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{ textAlign: "center", padding: "20px 14px", borderRadius: 10, background: `${pc.accent}06`, border: `1px solid ${pc.accent}10`, fontSize: 14, fontWeight: 500, color: T.textLight }}>
                  {c}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: `linear-gradient(135deg, ${T.primary}, ${T.secondary})`, padding: "100px 48px", textAlign: "center" }}>
        <Reveal><h2 style={{ fontSize: 36, fontWeight: 700, color: T.textLight, marginBottom: 24 }}>Quer entender como funciona?</h2></Reveal>
        <Reveal delay={0.1}><Btn onClick={() => nav("contato")}>Agendar uma conversa</Btn></Reveal>
      </section>
    </div>
  );
}

// ========================================
// SOLUTIONS CONFIG
// ========================================
const SOL = {
  beneficios: { key: "beneficios", title: "JUST Benefits: beneficios flexiveis construidos para operar em escala", subtitle: "Arranjo aberto, fechado ou hibrido. Multiplos saldos com regras customizaveis e controle total.", model1: { title: "Arranjo aberto", desc: "Aceitacao ampla, bandeiras tradicionais, escala e capilaridade." }, model2: { title: "Arranjo fechado", desc: "Processamento proprio, ecossistemas controlados, governanca total." }, capabilities: ["Multiplos saldos", "Regras customizaveis", "Controle de uso", "Compliance", "Conciliacao", "Escala"] },
  frotas: { key: "frotas", title: "JUST Fleet: gestao de frotas com controle financeiro real", subtitle: "Abastecimento, pedagio, manutencao. Tudo em um unico produto financeiro.", model1: { title: "Rede aberta", desc: "Postos e fornecedores com ampla aceitacao nacional." }, model2: { title: "Rede propria", desc: "Credenciados especificos, controle e governanca total." }, capabilities: ["Controle por veiculo", "Regras em tempo real", "Despesas por tipo", "Monitoramento", "Conciliacao", "Escala"] },
  banking: { key: "banking", title: "JUST Banking: banking digital white-label pronto para operar", subtitle: "Conta, cartao, PIX, transferencias. Integrado com BaaS.", model1: { title: "Banking completo", desc: "Conta digital, cartao, PIX, transferencias, boletos." }, model2: { title: "Banking embarcado", desc: "Funcionalidades bancarias integradas ao produto existente." }, capabilities: ["Conta digital", "Cartao", "PIX", "Transferencias", "Credito", "White-label"] },
  despesas: { key: "despesas", title: "JUST Expense: despesas corporativas com controle total", subtitle: "Cartoes corporativos com politicas, limites e conciliacao.", model1: { title: "Arranjo aberto", desc: "Flexibilidade e ampla aceitacao para equipes distribuidas." }, model2: { title: "Arranjo fechado", desc: "Regras rigidas e controle operacional maximo." }, capabilities: ["Cartoes", "Politicas", "Limites", "Real-time", "Conciliacao", "Relatorios"] },
  antecipacao: { key: "antecipacao", title: "JUST Credit: produtos de credito white-label", subtitle: "Private label, antecipacao e recebiveis integrados ao seu negocio.", model1: { title: "Private label", desc: "Cartao proprio com regras customizaveis e rede controlada." }, model2: { title: "Credito (CCB)", desc: "Emissao de CCB, credito em conta, operacao regulada." }, capabilities: ["Private label", "Antecipacao", "Recebiveis", "Limites", "Compliance", "Escala"] },
  "sob-demanda": { key: "sob-demanda", title: "JUST Custom: projetos sob demanda, do zero a operacao", subtitle: "Produto que nao cabe em prateleira? Arquitetamos sob medida.", model1: { title: "Custom", desc: "Cada componente desenhado para o cenario unico." }, model2: { title: "Hibrido", desc: "Combinacao de arranjo aberto e fechado." }, capabilities: ["Arquitetura", "Multi-provider", "Hibrido", "Go-live rapido", "Evolucao", "Diagnostico"] },
};

// ========================================
// MAIN APP
// ========================================
export default function App() {
  const [page, setPage] = useState("home");
  const render = () => {
    if (page === "home") return <HomePage setPage={setPage} />;
    if (page === "sobre") return <SobrePage setPage={setPage} />;
    if (page === "stack") return <StackPage setPage={setPage} />;
    if (page === "cases") return <CasesPage setPage={setPage} />;
    if (page === "contato") return <ContatoPage />;
    if (SOL[page]) return <SolutionPage setPage={setPage} config={SOL[page]} />;
    return <HomePage setPage={setPage} />;
  };
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", background: T.primary, minHeight: "100vh", WebkitFontSmoothing: "antialiased" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }
        ::selection { background: rgba(244,85,70,0.3); }
        input:focus, textarea:focus, select:focus { border-color: ${T.cta} !important; }
        button:focus { outline: none; }
      
@media (max-width: 900px) {
  .depara-row {
    grid-template-columns: 1fr 36px 1fr !important;
    gap: 0 !important;
  }
}
@media (max-width: 520px) {
  .depara-row {
    grid-template-columns: 1fr 28px 1fr !important;
  }
}

@media (max-width: 900px) {
  .hero-grid > div:last-child {
    display: none !important;
  }
}
`}</style>
      <Header page={page} setPage={setPage} />
      <main>{render()}</main>
      <Footer setPage={setPage} />
    </div>
  );
}
