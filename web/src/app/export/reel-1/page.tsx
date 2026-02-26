import VeltiaLogo from "@/components/brand/VeltiaLogo";

const gradientText: React.CSSProperties = {
  background: "linear-gradient(90deg, #FF6B35 0%, #FF8C42 35%, #00F2FF 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const mono: React.CSSProperties = {
  fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace",
};

const base: React.CSSProperties = {
  width: "1080px",
  height: "1920px",
  overflow: "hidden",
  position: "relative",
  background: "#0A0E14",
  fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "80px",
  boxSizing: "border-box",
};

const dotGrid: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  backgroundImage: "radial-gradient(circle, rgba(0,242,255,0.03) 1px, transparent 1px)",
  backgroundSize: "30px 30px",
};

/* Frame wrapper - each frame is a separate page rendered at 1080x1920 */
function Frame({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <div id={id} style={base}>
      <div style={dotGrid} />
      <div style={{ position: "relative", zIndex: 10, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center" }}>
        {children}
      </div>
    </div>
  );
}

export default function Reel1Page() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      {/* FRAME 1 - Hook: "3AM y tu sistema se cayo" */}
      <Frame id="frame-1">
        {/* Warning icon */}
        <div style={{ width: "80px", height: "80px", borderRadius: "50%", border: "3px solid #FF6B35", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "48px", boxShadow: "0 0 40px rgba(255,107,53,0.3)" }}>
          <span style={{ fontSize: "40px", color: "#FF6B35" }}>!</span>
        </div>
        <p style={{ ...mono, fontSize: "18px", color: "#FF8C42", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "32px" }}>
          3:00 AM
        </p>
        <h1 style={{ fontSize: "64px", fontWeight: 700, color: "#E0F7FA", lineHeight: 1.1, margin: 0 }}>
          Tu sistema
          <br />
          <span style={{ color: "#FF6B35" }}>se cayo</span>
        </h1>
        <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "22px", color: "#8899AA", marginTop: "32px", lineHeight: 1.5 }}>
          Tu equipo duerme.<br />Tus clientes no.
        </p>
      </Frame>

      {/* FRAME 2 - Problema: "30 minutos" */}
      <Frame id="frame-2">
        <p style={{ ...mono, fontSize: "16px", color: "#8899AA", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "40px" }}>
          Tiempo promedio de resolucion
        </p>
        <h1 style={{ fontSize: "160px", fontWeight: 700, margin: 0, lineHeight: 0.9, color: "#FF6B35" }}>
          30
        </h1>
        <p style={{ fontSize: "48px", fontWeight: 600, color: "#FF8C42", margin: "8px 0 0" }}>
          minutos
        </p>
        <div style={{ width: "100px", height: "3px", background: "linear-gradient(90deg, #FF6B35, #FF8C42)", borderRadius: "2px", margin: "40px 0" }} />
        <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "20px", color: "#8899AA", lineHeight: 1.5 }}>
          Deteccion: 10 min<br />
          Diagnostico: 15 min<br />
          Accion: 5 min
        </p>
      </Frame>

      {/* FRAME 3 - Solucion: "Agentes IA" */}
      <Frame id="frame-3">
        {/* AI brain icon */}
        <div style={{ width: "100px", height: "100px", borderRadius: "50%", border: "2px solid rgba(0,242,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px", boxShadow: "0 0 40px rgba(0,242,255,0.15)" }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00F2FF" strokeWidth="1.5">
            <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
            <path d="M10 21h4" />
            <path d="M9 9h.01M15 9h.01M10 13a2 2 0 1 0 4 0" />
          </svg>
        </div>
        <p style={{ ...mono, fontSize: "14px", color: "#00F2FF", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "24px" }}>
          Nuestros agentes IA
        </p>
        <h1 style={{ fontSize: "56px", fontWeight: 700, color: "#E0F7FA", lineHeight: 1.1, margin: 0 }}>
          Detectan.
          <br />
          <span style={gradientText}>Diagnostican.</span>
          <br />
          Resuelven.
        </h1>
        <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "22px", color: "#8899AA", marginTop: "32px" }}>
          Solos. 24/7. Sin intervencion humana.
        </p>
      </Frame>

      {/* FRAME 4 - Resultado: "<2 minutos" */}
      <Frame id="frame-4">
        <p style={{ ...mono, fontSize: "16px", color: "#00F2FF", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "40px" }}>
          Con soporte agentico
        </p>
        <h1 style={{ fontSize: "140px", fontWeight: 700, margin: 0, lineHeight: 0.9, ...gradientText }}>
          &lt;2
        </h1>
        <p style={{ fontSize: "48px", fontWeight: 600, color: "#00F2FF", margin: "8px 0 0" }}>
          minutos
        </p>
        <div style={{ width: "100px", height: "3px", background: "linear-gradient(90deg, #FF6B35, #00F2FF)", borderRadius: "2px", margin: "40px 0" }} />
        <div style={{ display: "flex", gap: "60px" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ ...mono, fontSize: "32px", fontWeight: 700, color: "#FF6B35", margin: 0 }}>30 min</p>
            <p style={{ ...mono, fontSize: "13px", color: "#4A5568", margin: "4px 0 0", textDecoration: "line-through" }}>manual</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ ...mono, fontSize: "32px", fontWeight: 700, color: "#00F2FF", margin: 0 }}>&lt;2 min</p>
            <p style={{ ...mono, fontSize: "13px", color: "#8899AA", margin: "4px 0 0" }}>agentico</p>
          </div>
        </div>
      </Frame>

      {/* FRAME 5 - Metrica: "-75% downtime" */}
      <Frame id="frame-5">
        <h1 style={{ fontSize: "180px", fontWeight: 700, margin: 0, lineHeight: 0.85, ...gradientText }}>
          -75%
        </h1>
        <p style={{ fontSize: "36px", fontWeight: 600, color: "#E0F7FA", margin: "24px 0 0" }}>
          downtime
        </p>
        <div style={{ width: "120px", height: "3px", background: "linear-gradient(90deg, #FF6B35, #00F2FF)", borderRadius: "2px", margin: "40px 0" }} />
        <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "20px", color: "#8899AA", lineHeight: 1.6 }}>
          Resolucion automatica de incidentes.
          <br />
          Reportes en tiempo real.
          <br />
          Tu infra protegida 24/7.
        </p>
      </Frame>

      {/* FRAME 6 - CTA: VELTIA */}
      <Frame id="frame-6">
        <VeltiaLogo variant="dark" showTagline={false} width={200} id="reel1-logo" />
        <h1 style={{ fontSize: "80px", fontWeight: 700, letterSpacing: "10px", margin: "24px 0 0", ...gradientText }}>
          VELTIA
        </h1>
        <p style={{ fontSize: "22px", color: "#00F2FF", letterSpacing: "5px", marginTop: "12px", fontWeight: 500 }}>
          SOPORTE INTELIGENTE 24/7
        </p>
        <div style={{ width: "80px", height: "3px", background: "linear-gradient(90deg, #FF6B35, #00F2FF)", borderRadius: "2px", margin: "40px 0" }} />
        <div style={{ padding: "16px 48px", borderRadius: "10px", background: "#00F2FF", color: "#0A0E14", fontSize: "20px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "3px", boxShadow: "0 0 30px rgba(0,242,255,0.3)", marginBottom: "32px" }}>
          ESCRIBINOS
        </div>
        <p style={{ ...mono, fontSize: "16px", color: "#8899AA" }}>contacto@veltia.ar</p>
        <p style={{ ...mono, fontSize: "14px", color: "#4A5568", marginTop: "8px" }}>veltia.ar</p>
      </Frame>
    </div>
  );
}
