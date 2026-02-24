import VeltiaLogo from "@/components/brand/VeltiaLogo";

/* Particles - more dense and dramatic for this futuristic grid */
const PARTICLES: { x: number; y: number; size: number; color: string; opacity: number }[] = [];
for (let i = 0; i < 150; i++) {
  PARTICLES.push({
    x: Math.round((Math.sin(i * 0.43 + 1.2) * 0.5 + 0.5) * 3240),
    y: Math.round((Math.cos(i * 0.37 + 0.8) * 0.5 + 0.5) * 2160),
    size: 2 + (i % 6) * 1.8,
    color: i % 4 === 0 ? "#FF8C42" : i % 4 === 1 ? "#FF6B35" : "#00F2FF",
    opacity: 0.12 + (i % 5) * 0.07,
  });
}

/* Connection lines between nearby particles */
const LINES: { x1: number; y1: number; x2: number; y2: number; opacity: number }[] = [];
for (let i = 0; i < PARTICLES.length; i++) {
  for (let j = i + 1; j < Math.min(i + 4, PARTICLES.length); j++) {
    const dx = PARTICLES[i].x - PARTICLES[j].x;
    const dy = PARTICLES[i].y - PARTICLES[j].y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 500) {
      LINES.push({
        x1: PARTICLES[i].x, y1: PARTICLES[i].y,
        x2: PARTICLES[j].x, y2: PARTICLES[j].y,
        opacity: Math.max(0.03, 0.12 - dist / 5000),
      });
    }
  }
}

/* Circuit traces - horizontal and vertical tech lines */
const CIRCUITS: { x: number; y: number; w: number; h: number; color: string }[] = [];
for (let i = 0; i < 30; i++) {
  const horizontal = i % 2 === 0;
  CIRCUITS.push({
    x: Math.round(Math.sin(i * 1.3) * 1200 + 1620),
    y: Math.round(Math.cos(i * 0.9) * 800 + 1080),
    w: horizontal ? 80 + (i % 5) * 40 : 2,
    h: horizontal ? 2 : 60 + (i % 4) * 30,
    color: i % 3 === 0 ? "#FF8C42" : "#00F2FF",
  });
}

const gradientText: React.CSSProperties = {
  background: "linear-gradient(90deg, #FF6B35 0%, #FF8C42 35%, #00F2FF 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export default function InstagramGrid2Page() {
  return (
    <div
      style={{
        width: "3240px",
        height: "2160px",
        overflow: "hidden",
        position: "relative",
        background: "#0A0E14",
        fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
      }}
    >
      {/* Deep background gradients */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(0,242,255,0.1) 0%, transparent 45%), " +
            "radial-gradient(ellipse at 20% 30%, rgba(255,107,53,0.08) 0%, transparent 35%), " +
            "radial-gradient(ellipse at 80% 70%, rgba(255,140,66,0.06) 0%, transparent 35%), " +
            "radial-gradient(ellipse at 50% 100%, rgba(0,242,255,0.06) 0%, transparent 40%)",
        }}
      />

      {/* Tech grid dots */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(0,242,255,0.025) 1px, transparent 1px)",
          backgroundSize: "35px 35px",
        }}
      />

      {/* SVG layer: particles, lines, circuits */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 3240 2160">
        {/* Connection lines */}
        {LINES.map((l, i) => (
          <line key={`l-${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#00F2FF" strokeWidth="0.6" opacity={l.opacity} />
        ))}
        {/* Circuit traces */}
        {CIRCUITS.map((c, i) => (
          <rect key={`c-${i}`} x={c.x} y={c.y} width={c.w} height={c.h} fill={c.color} opacity="0.06" rx="1" />
        ))}
        {/* Particles */}
        {PARTICLES.map((p, i) => (
          <circle key={`p-${i}`} cx={p.x} cy={p.y} r={p.size} fill={p.color} opacity={p.opacity} />
        ))}
        {/* Large glow orbs */}
        <circle cx="1620" cy="900" r="300" fill="url(#centerGlow)" opacity="0.15" />
        <circle cx="600" cy="400" r="200" fill="url(#cyanGlow)" opacity="0.08" />
        <circle cx="2700" cy="1700" r="250" fill="url(#orangeGlow)" opacity="0.06" />
        <defs>
          <radialGradient id="centerGlow">
            <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00F2FF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cyanGlow">
            <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00F2FF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="orangeGlow">
            <stop offset="0%" stopColor="#FF8C42" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FF8C42" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Horizontal scan line effect */}
      <div style={{ position: "absolute", left: 0, right: 0, top: "680px", height: "1px", background: "linear-gradient(90deg, transparent 5%, rgba(0,242,255,0.15) 30%, rgba(0,242,255,0.25) 50%, rgba(0,242,255,0.15) 70%, transparent 95%)", zIndex: 3 }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: "1480px", height: "1px", background: "linear-gradient(90deg, transparent 10%, rgba(255,140,66,0.12) 35%, rgba(255,140,66,0.2) 50%, rgba(255,140,66,0.12) 65%, transparent 90%)", zIndex: 3 }} />

      {/* === MAIN CONTENT LAYER === */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", height: "100%" }}>

        {/* VELTIA - massive centered text spanning full width */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -55%)",
            textAlign: "center",
          }}
        >
          {/* Logo above */}
          <div style={{ marginBottom: "40px", display: "flex", justifyContent: "center" }}>
            <VeltiaLogo variant="dark" showTagline={false} width={250} id="ig2-logo" />
          </div>

          {/* VELTIA mega text */}
          <h1
            style={{
              fontSize: "280px",
              fontWeight: 700,
              letterSpacing: "40px",
              margin: 0,
              lineHeight: 0.9,
              ...gradientText,
              filter: "drop-shadow(0 0 60px rgba(0,242,255,0.2)) drop-shadow(0 0 120px rgba(255,140,66,0.1))",
            }}
          >
            VELTIA
          </h1>

          {/* Decorative line */}
          <div
            style={{
              width: "600px",
              height: "3px",
              background: "linear-gradient(90deg, transparent, #FF6B35, #FF8C42, #00F2FF, transparent)",
              margin: "50px auto",
              borderRadius: "2px",
            }}
          />

          {/* SOLUCIONES INTELIGENTES */}
          <h2
            style={{
              fontSize: "72px",
              fontWeight: 600,
              color: "#E0F7FA",
              letterSpacing: "20px",
              margin: 0,
              textShadow: "0 0 40px rgba(0,242,255,0.15)",
            }}
          >
            SOLUCIONES INTELIGENTES
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace",
              fontSize: "20px",
              color: "#8899AA",
              letterSpacing: "8px",
              marginTop: "30px",
              textTransform: "uppercase",
            }}
          >
            Tecnologia que transforma
          </p>
        </div>

        {/* Corner accents */}
        {/* Top-left */}
        <div style={{ position: "absolute", top: "60px", left: "60px" }}>
          <div style={{ width: "60px", height: "2px", background: "#00F2FF", opacity: 0.4 }} />
          <div style={{ width: "2px", height: "60px", background: "#00F2FF", opacity: 0.4 }} />
        </div>
        {/* Top-right */}
        <div style={{ position: "absolute", top: "60px", right: "60px", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <div style={{ width: "60px", height: "2px", background: "#FF8C42", opacity: 0.4 }} />
          <div style={{ width: "2px", height: "60px", background: "#FF8C42", opacity: 0.4, alignSelf: "flex-end" }} />
        </div>
        {/* Bottom-left */}
        <div style={{ position: "absolute", bottom: "60px", left: "60px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div style={{ width: "2px", height: "60px", background: "#FF8C42", opacity: 0.4 }} />
          <div style={{ width: "60px", height: "2px", background: "#FF8C42", opacity: 0.4 }} />
        </div>
        {/* Bottom-right */}
        <div style={{ position: "absolute", bottom: "60px", right: "60px", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "flex-end" }}>
          <div style={{ width: "2px", height: "60px", background: "#00F2FF", opacity: 0.4, alignSelf: "flex-end" }} />
          <div style={{ width: "60px", height: "2px", background: "#00F2FF", opacity: 0.4 }} />
        </div>

        {/* Bottom bar: contact */}
        <div
          style={{
            position: "absolute",
            bottom: "70px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <span style={{ fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace", fontSize: "16px", color: "#4A5568", letterSpacing: "2px" }}>
            veltia.ar
          </span>
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#00F2FF", opacity: 0.5 }} />
          <span style={{ fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace", fontSize: "16px", color: "#4A5568", letterSpacing: "2px" }}>
            contacto@veltia.ar
          </span>
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FF8C42", opacity: 0.5 }} />
          <span style={{ fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace", fontSize: "16px", color: "#4A5568", letterSpacing: "2px" }}>
            Cordoba, Argentina
          </span>
        </div>
      </div>
    </div>
  );
}
