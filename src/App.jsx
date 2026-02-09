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
  antecipacao: { accent: "#FDCB6E", gradient: "linear-gradient(135deg, #D4A017, #FDCB6E)", label: "Advance" },
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
  { key: "antecipacao", label: "Advance", bottom: "6%", left: "14%", animName: "nodeFloat5", dur: "5s", delay: "2s" },
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
    antecipacao: { x: 400, y: 410, label: "Advance", size: 26, color: "#FDCB6E" },
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
        <div style={{ marginLeft: 10, fontSize: 8, fontWeight: 700, color: `${color}60` }}>JUST Advance</div>
      </div>
      <div style={{ padding: "34px 16px 12px", display: "flex", gap: 12 }}>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ ...mockupCard(color), background: `linear-gradient(135deg, ${color}14, ${color}08)`, padding: "14px 12px", marginBottom: 10 }}>
            <div style={{ fontSize: 6, color: `${color}45` }}>Disponivel para antecipacao</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: color, margin: "4px 0", letterSpacing: "-0.02em" }}>R$ 3.200,00</div>
            <div style={{ fontSize: 6, color: `${color}35` }}>Salario: R$ 8.000 | Dia 5 a 25</div>
            <div style={{ height: 4, background: `${color}10`, borderRadius: 3, margin: "8px 0 4px" }}>
              <div style={{ height: "100%", width: "40%", background: `linear-gradient(90deg, ${color}50, ${color}80)`, borderRadius: 3 }} />
            </div>
            <div style={{ fontSize: 5, color: `${color}30` }}>40% do salario disponivel</div>
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
    { key: "antecipacao", label: "JUST Advance", desc: "Antecipacao salarial e credito ao colaborador", color: PRODUCT_COLORS.antecipacao.accent },
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
          {[["beneficios","JUST Benefits"],["frotas","JUST Fleet"],["banking","JUST Banking"],["despesas","JUST Expense"],["antecipacao","JUST Advance"],["sob-demanda","JUST Custom"]].map(([k,l]) =>
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
    { key: "antecipacao", name: "JUST Advance", desc: "Cartao private label ou credito via CCB. Beneficio financeiro sem custo para o colaborador.", ...PRODUCT_COLORS.antecipacao },
    { key: "sob-demanda", name: "JUST Custom", desc: "Produto que nao cabe em prateleira? Arquitetamos e construimos sob medida.", ...PRODUCT_COLORS["sob-demanda"] },
  ];

  // Pain points (problema antes de solucao - igual Finaya)
  const pains = [
    { icon: "&#9888;", title: "Meses (ou anos) para lancar", desc: "Projetos que prometem 6 meses e levam 2 anos. Enquanto isso, o mercado anda." },
    { icon: "&#128274;", title: "Lock-in com fornecedores", desc: "Dependencia de um unico BaaS, adquirente ou provedor. Sem flexibilidade para mudar." },
    { icon: "&#9881;", title: "Complexidade regulatoria", desc: "Perder tempo com compliance bancario ao inves de focar no produto e na jornada." },
    { icon: "&#128200;", title: "Solucoes que nao escalam", desc: "Produto que funciona com 1.000 usuarios e quebra com 50.000." },
  ];

  const steps = [
    { n: "01", t: "Discovery", d: "Entendemos o modelo de negocio e os requisitos. Sem isso, nao comecamos." },
    { n: "02", t: "Arquitetura", d: "Configuramos os modulos sobre nossa stack. 70-80% ja esta pronto." },
    { n: "03", t: "Integracao", d: "Conectamos BaaS, adquirentes e parceiros. Voce acompanha cada sprint." },
    { n: "04", t: "Operacao", d: "Produto no ar com monitoramento, suporte e evolucao continua." },
  ];

  return (
    <div>
      {/* ===== HERO ===== */}
      <section style={{
        background: `linear-gradient(160deg, #06080F 0%, ${T.primary} 50%, ${T.darkAlt} 100%)`,
        padding: "140px 48px 80px", position: "relative", overflow: "hidden",
      }}>
        {/* Ambient glow effects */}
        <div style={{ position: "absolute", top: "15%", right: "10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(108,92,231,0.07), transparent 70%)", borderRadius: "50%", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(244,85,70,0.05), transparent 70%)", borderRadius: "50%", filter: "blur(60px)" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", position: "relative", zIndex: 2 }}>
          <div>
            <Reveal>
              <Tag>Plataforma de produtos financeiros</Tag>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 style={{ fontSize: 60, fontWeight: 800, color: T.textLight, lineHeight: 1.06, letterSpacing: "-0.035em", margin: "20px 0" }}>
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
      <section style={{ background: T.primary, borderTop: `1px solid ${T.borderLight}`, borderBottom: `1px solid ${T.borderLight}`, padding: "32px 48px" }}>
        <Reveal>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 12, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 500, flexShrink: 0 }}>
              Empresas que operam com a JUST
            </span>
            <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
              {["eFleet", "ViaSoftPay", "SmartVale", "KPI", "FaithPay"].map((n) => (
                <span key={n} style={{ fontSize: 16, fontWeight: 700, color: "rgba(242,244,248,0.25)", letterSpacing: "0.01em", transition: "color 0.3s" }}>{n}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===== PAIN POINTS (Problema antes de produto - padrao Finaya) ===== */}
      <section style={{ background: T.primary, padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle
            tag="O problema"
            title={"Construir uma fintech ainda e\ncaro, lento e arriscado."}
            subtitle="A maioria das empresas que quer operar produtos financeiros esbarra nos mesmos obstaculos."
            center
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {pains.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{
                  padding: "32px 24px", borderRadius: 14, background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${T.borderLight}`, textAlign: "center",
                }}>
                  <div style={{ fontSize: 32, marginBottom: 16, opacity: 0.6 }} dangerouslySetInnerHTML={{ __html: p.icon }} />
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: T.textLight, marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRANSITION STATEMENT ===== */}
      <section style={{ background: T.darkAlt, padding: "80px 48px", textAlign: "center" }}>
        <Reveal>
          <p style={{ fontSize: 28, fontWeight: 600, color: T.textLight, lineHeight: 1.4, maxWidth: 700, margin: "0 auto", letterSpacing: "-0.01em" }}>
            A JUST resolve isso com <span style={{ color: T.cta }}>produtos prontos</span>,{" "}
            <span style={{ color: "#6C5CE7" }}>tecnologia modular</span> e{" "}
            <span style={{ color: "#00B894" }}>integracao com os melhores BaaS</span> do mercado.
          </p>
        </Reveal>
      </section>

      {/* ===== PRODUCTS (com identidade por vertical) ===== */}
      <section style={{ background: T.primary, padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle tag="Produtos" title={"Modulos prontos para cada\nvertical do seu negocio."} subtitle="Cada produto opera de forma independente ou combinada. White-label completo." />

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {products.map((p, i) => (
              <Reveal key={p.key} delay={i * 0.06}>
                <div
                  onClick={() => nav(p.key)}
                  style={{
                    display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 40, alignItems: "center",
                    padding: 40, borderRadius: 16, cursor: "pointer",
                    background: `linear-gradient(135deg, ${p.accent}06, ${p.accent}03)`,
                    border: `1px solid ${p.accent}15`,
                    transition: "all 0.3s ease",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                      <ProductIcon productKey={p.key} size={36} showCard />
                      <span style={{ fontSize: 11, fontWeight: 600, color: p.accent, textTransform: "uppercase", letterSpacing: "0.08em" }}>{p.label}</span>
                    </div>
                    <h3 style={{ fontSize: 24, fontWeight: 700, color: T.textLight, marginBottom: 12 }}>{p.name}</h3>
                    <p style={{ fontSize: 15, color: T.textMutedLight, lineHeight: 1.6, marginBottom: 20 }}>{p.desc}</p>
                    <span style={{ fontSize: 14, fontWeight: 600, color: p.accent }}>Conhecer produto &rarr;</span>
                  </div>
                  <ProductMockup color={p.accent} label={p.label} productKey={p.key} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section style={{ background: T.darkAlt, padding: "120px 48px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <SectionTitle tag="Como funciona" title={"Da configuracao ao produto no ar.\nSem surpresas."} center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div style={{ textAlign: "center", position: "relative" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: `${T.cta}12`, border: `1px solid ${T.cta}20`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 18, fontWeight: 700, color: T.cta }}>{s.n}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: T.textLight, margin: "0 0 8px" }}>{s.t}</h3>
                  <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6 }}>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== METRICS ===== */}
      <section style={{ background: T.primary, padding: "100px 48px", borderTop: `1px solid ${T.borderLight}`, borderBottom: `1px solid ${T.borderLight}` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          <Metric prefix="R$" value={35.9} suffix="M" label="TPV processado" />
          <Metric value={40955} suffix="+" label="Usuarios ativos" delay={0.08} />
          <Metric value={18} suffix="+" label="Clientes ativos" delay={0.16} />
          <Metric prefix="NPS " value={76} suffix="" label="Satisfacao" delay={0.24} />
        </div>
      </section>

      {/* ===== CASES PREVIEW ===== */}
      <section style={{ background: T.bgLight, padding: "120px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle tag="Cases" title="Resultados reais. Fintechs em producao." light center />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
              { tag: "Beneficios", name: "ViaSoftPay", headline: "Do zero a producao em 45 dias", metrics: ["100k+ usuarios", "R$500M+ processamento/ano", "NPS 100"], color: PRODUCT_COLORS.beneficios.accent },
              { tag: "Frotas", name: "eFleet", headline: "5+ anos de parceria, 10+ modulos", metrics: ["R$500M+ processamento/ano", "10+ modulos integrados", "Evolucao continua"], color: PRODUCT_COLORS.frotas.accent },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div onClick={() => nav("cases")} style={{
                  borderRadius: 16, padding: 40, cursor: "pointer",
                  background: T.bgOffwhite, border: "1px solid rgba(15,17,43,0.06)",
                  transition: "all 0.3s ease",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.color }} />
                    <Tag light color={c.color}>{c.tag}</Tag>
                  </div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(15,17,43,0.4)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 4 }}>{c.name}</p>
                  <h3 style={{ fontSize: 26, fontWeight: 700, color: T.primary, lineHeight: 1.2, marginBottom: 20 }}>{c.headline}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                    {c.metrics.map((m, j) => (
                      <span key={j} style={{ fontSize: 12, padding: "5px 12px", borderRadius: 6, background: `${c.color}10`, color: c.color, fontWeight: 500 }}>{m}</span>
                    ))}
                  </div>
                  <span style={{ fontSize: 14, color: T.cta, fontWeight: 600 }}>Ver case completo &rarr;</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY JUST ===== */}
      <section style={{ background: T.primary, padding: "120px 48px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <SectionTitle tag="Por que a JUST" title={"Plataforma. Nao promessa."} center subtitle="Diferente de consultorias que entregam projetos, a JUST entrega produtos que continuam evoluindo." />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { icon: "&#9889;", t: "Produtos prontos, nao projetos", d: "70-80% da tecnologia ja esta pronta. Voce configura e personaliza, nao reconstroi do zero." },
              { icon: "&#128274;", t: "Sem lock-in de provedor", d: "Arquitetura multi-BaaS. Troque provedores sem impactar o produto final." },
              { icon: "&#127912;", t: "White-label completo", d: "Sua marca, suas regras. O usuario final nunca sabe que a JUST esta por tras." },
              { icon: "&#128736;", t: "Sustentacao e evolucao continua", d: "Nao entregamos e sumimos. Monitoramos, evoluimos e operamos junto." },
            ].map((d, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ padding: 28, borderRadius: 14, background: "rgba(255,255,255,0.025)", border: `1px solid ${T.borderLight}`, display: "flex", gap: 16 }}>
                  <div style={{ fontSize: 24, flexShrink: 0, opacity: 0.7 }} dangerouslySetInnerHTML={{ __html: d.icon }} />
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: T.textLight, marginBottom: 6 }}>{d.t}</h3>
                    <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6 }}>{d.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section style={{ background: `linear-gradient(160deg, ${T.darkAlt}, ${T.secondary})`, padding: "120px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
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
    { t: "Core Financeiro", d: "Core proprietario, modular e escalavel. Controle total sobre fluxos financeiros, regras de negocio e operacao. Independencia de terceiros." },
    { t: "Multi BaaS", d: "Arquitetura que suporta multiplos provedores simultaneamente: Swap, Idez, e outros. Failover automatico, sem lock-in, migracao sem impacto." },
    { t: "Arranjo Fechado", d: "Processamento em circuito fechado. Rede propria, taxas customizadas, controle total sobre regras de aceite e independencia operacional." },
    { t: "Gateway", d: "Roteamento inteligente entre adquirentes, retentativas, split de pagamentos e conciliacao unificada." },
    { t: "Motor de Regras", d: "Regras financeiras configuraveis: limites, politicas de uso, compliance, fluxos de aprovacao e prevencao a fraude. Sem codigo." },
    { t: "Apps & Backoffice", d: "Apps nativos white-label + painel administrativo unificado. Gestao de usuarios, cartoes, movimentacoes e relatorios." },
  ];
  return (
    <div>
      <section style={{ background: `linear-gradient(160deg, ${T.primary}, ${T.darkAlt}, ${T.secondary})`, padding: "170px 48px 100px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Reveal><Tag>Tecnologia</Tag></Reveal>
          <Reveal delay={0.1}><h1 style={{ fontSize: 48, fontWeight: 700, color: T.textLight, lineHeight: 1.1, margin: "16px 0" }}>A fundacao tecnica de cada produto.</h1></Reveal>
          <Reveal delay={0.2}><p style={{ fontSize: 18, color: T.textMutedLight }}>Core proprietario, multi-BaaS, arranjo fechado. Modular, resiliente, pronta para escalar.</p></Reveal>
        </div>
      </section>

      <section style={{ background: T.primary, padding: "100px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionTitle tag="Arquitetura viva" title="Veja o ecossistema se comunicando." center subtitle="Produtos, core financeiro e provedores trocando dados em tempo real." />
          <Reveal>
            <EcosystemAnimation />
          </Reveal>
        </div>
      </section>

      <section style={{ background: T.darkAlt, padding: "120px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionTitle title="Componentes da plataforma" center />
          <div style={{ display: "flex", gap: 4, marginBottom: 32, justifyContent: "center", flexWrap: "wrap" }}>
            {tabs.map((t, i) => (
              <button key={i} onClick={() => setTab(i)} style={{
                padding: "9px 18px", borderRadius: 8, border: "none", fontSize: 13, fontWeight: 600, cursor: "pointer",
                background: tab === i ? T.cta : "rgba(255,255,255,0.04)", color: tab === i ? "#fff" : T.textMuted, transition: "all 0.2s",
              }}>{t.t}</button>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.025)", borderRadius: 16, padding: 48, border: `1px solid ${T.borderLight}`, minHeight: 120 }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: T.textLight, marginBottom: 14 }}>{tabs[tab].t}</h3>
            <p style={{ fontSize: 16, color: T.textMutedLight, lineHeight: 1.7 }}>{tabs[tab].d}</p>
          </div>
        </div>
      </section>

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
    { tag: "Beneficios + Credito", name: "KPI", headline: "266% de crescimento em transacoes", items: ["266% crescimento", "Beneficios + antecipacao integrados", "Produto combinado unico"], color: PRODUCT_COLORS.antecipacao.accent },
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
                    {["JUST Benefits", "JUST Fleet", "JUST Banking", "JUST Expense", "JUST Advance", "JUST Custom", "Ainda nao sei"].map(o => <option key={o}>{o}</option>)}
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
  antecipacao: { key: "antecipacao", title: "JUST Advance: antecipacao salarial com flexibilidade", subtitle: "Cartao private label ou credito via CCB.", model1: { title: "Arranjo fechado", desc: "Cartao private label, sem custo ao colaborador, desconto em folha." }, model2: { title: "Credito (CCB)", desc: "Emissao de CCB, credito em conta, operacao formal." }, capabilities: ["Elegibilidade", "Limites", "Folha", "Controle", "Compliance", "Escala"] },
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
      `}</style>
      <Header page={page} setPage={setPage} />
      <main>{render()}</main>
      <Footer setPage={setPage} />
    </div>
  );
}
