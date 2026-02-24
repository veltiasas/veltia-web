import VeltiaLogo from "@/components/brand/VeltiaLogo";

const SERVICES = [
  { num: "01", name: "Transformacion Digital", desc: "Workflows & Firma Digital" },
  { num: "02", name: "IA & Agentes", desc: "Automatizacion Inteligente 24/7" },
  { num: "03", name: "Modernizacion Legacy", desc: "Migracion & Refactoring" },
  { num: "04", name: "FinOps & Cloud", desc: "Optimizacion AWS/Azure/GCP" },
  { num: "05", name: "Consultoria", desc: "Advisory & Diagnosticos" },
];

const PARTICLES: { x: number; y: number; size: number; color: string; opacity: number }[] = [];
for (let i = 0; i < 80; i++) {
  PARTICLES.push({
    x: Math.round((Math.sin(i * 0.7) * 0.5 + 0.5) * 3240),
    y: Math.round((Math.cos(i * 0.5) * 0.5 + 0.5) * 2160),
    size: 3 + (i % 5) * 2,
    color: i % 3 === 0 ? "#FF8C42" : "#00F2FF",
    opacity: 0.2 + (i % 4) * 0.1,
  });
}

const LINES: { x1: number; y1: number; x2: number; y2: number }[] = [];
for (let i = 0; i < 25; i++) {
  const p1 = PARTICLES[i * 3];
  const p2 = PARTICLES[i * 3 + 1];
  if (p1 && p2) LINES.push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
}

/* Shared cell style: each post occupies exactly 1080x1080 */
const cell = (left: number, top: number): React.CSSProperties => ({
  position: "absolute",
  left: `${left}px`,
  top: `${top}px`,
  width: "1080px",
  height: "1080px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "100px",
  boxSizing: "border-box",
  zIndex: 10,
});

const gradientText: React.CSSProperties = {
  background: "linear-gradient(90deg, #FF6B35 0%, #FF8C42 40%, #00F2FF 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const mono: React.CSSProperties = {
  fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace",
};

const body: React.CSSProperties = {
  fontFamily: "var(--font-inter), Inter, sans-serif",
};

export default function InstagramGridPage() {
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
      {/* Background gradients */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(0,242,255,0.08) 0%, transparent 50%), radial-gradient(ellipse at 15% 70%, rgba(255,107,53,0.06) 0%, transparent 40%), radial-gradient(ellipse at 85% 80%, rgba(0,242,255,0.05) 0%, transparent 40%)",
        }}
      />

      {/* Tech grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(0,242,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Constellation */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 3240 2160">
        {LINES.map((l, i) => (
          <line key={`l-${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#00F2FF" strokeWidth="0.8" opacity="0.1" />
        ))}
        {PARTICLES.map((p, i) => (
          <circle key={`p-${i}`} cx={p.x} cy={p.y} r={p.size} fill={p.color} opacity={p.opacity} />
        ))}
      </svg>

      {/* Subtle gradient line between rows */}
      <div style={{ position: "absolute", left: "60px", right: "60px", top: "1079px", height: "2px", background: "linear-gradient(90deg, transparent, #FF6B35, #FF8C42, #00F2FF, transparent)", opacity: 0.25, zIndex: 5 }} />

      {/* === POST 1 (0,0): Innovacion Tecnologica === */}
      <div style={cell(0, 0)}>
        <p style={{ ...mono, fontSize: "16px", color: "#00F2FF", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "24px" }}>
          Desde Cordoba para el mundo
        </p>
        <h2 style={{ fontSize: "72px", fontWeight: 700, color: "#E0F7FA", lineHeight: 1.05, margin: 0, textAlign: "center" }}>
          Innovacion
          <br />
          <span style={gradientText}>Tecnologica</span>
        </h2>
        <div style={{ width: "100px", height: "3px", background: "linear-gradient(90deg, #FF6B35, #00F2FF)", borderRadius: "2px", marginTop: "32px" }} />
      </div>

      {/* === POST 2 (1080,0): VELTIA Logo central === */}
      <div style={cell(1080, 0)}>
        <VeltiaLogo variant="dark" showTagline={false} width={300} id="ig-logo" />
        <h1
          style={{
            fontSize: "90px",
            fontWeight: 700,
            letterSpacing: "14px",
            margin: "24px 0 0",
            ...gradientText,
          }}
        >
          VELTIA
        </h1>
        <p style={{ fontSize: "20px", color: "#00F2FF", letterSpacing: "6px", marginTop: "12px", fontWeight: 500 }}>
          TECNOLOGIA QUE TRANSFORMA
        </p>
      </div>

      {/* === POST 3 (2160,0): Metricas === */}
      <div style={cell(2160, 0)}>
        <p style={{ ...mono, fontSize: "14px", color: "#FF8C42", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "48px" }}>
          Resultados concretos
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "40px", width: "100%" }}>
          {[
            { metric: "-75%", label: "Downtime con soporte IA" },
            { metric: "-42%", label: "Reduccion costos cloud" },
            { metric: "65%", label: "Tickets resueltos por IA" },
          ].map((item) => (
            <div key={item.metric} style={{ display: "flex", alignItems: "baseline", gap: "24px" }}>
              <span style={{ fontSize: "72px", fontWeight: 700, ...gradientText, lineHeight: 1, minWidth: "220px" }}>
                {item.metric}
              </span>
              <span style={{ ...body, fontSize: "22px", color: "#8899AA" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* === POST 4 (0,1080): Servicios === */}
      <div style={{ ...cell(0, 1080), padding: "60px 80px" }}>
        <p style={{ ...mono, fontSize: "14px", color: "#00F2FF", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "36px", alignSelf: "flex-start" }}>
          Nuestros servicios
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
          {SERVICES.map((s) => (
            <div
              key={s.num}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                padding: "22px 28px",
                borderRadius: "14px",
                background: "rgba(26,34,45,0.5)",
                border: "1px solid rgba(0,242,255,0.1)",
              }}
            >
              <span style={{ fontSize: "32px", fontWeight: 700, ...gradientText, minWidth: "48px" }}>
                {s.num}
              </span>
              <div>
                <p style={{ fontSize: "24px", fontWeight: 600, color: "#E0F7FA", margin: 0 }}>{s.name}</p>
                <p style={{ ...body, fontSize: "15px", color: "#8899AA", margin: "3px 0 0" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === POST 5 (1080,1080): Equipo === */}
      <div style={cell(1080, 1080)}>
        {/* Photo */}
        <div
          style={{
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid rgba(0,242,255,0.3)",
            position: "relative",
            marginBottom: "28px",
          }}
        >
          <img src="/dino.jpg" alt="Dino Antonelli" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0) contrast(1.1) brightness(0.9)" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,50,120,0.5)", mixBlendMode: "color" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,180,255,0.12)", mixBlendMode: "overlay" }} />
        </div>
        <p style={{ fontSize: "36px", fontWeight: 700, color: "#E0F7FA", margin: 0 }}>Dino Antonelli</p>
        <p style={{ ...mono, fontSize: "18px", color: "#00F2FF", margin: "6px 0 0", letterSpacing: "4px" }}>CTO</p>
        <p style={{ ...body, fontSize: "18px", color: "#8899AA", margin: "20px 0 0", textAlign: "center", lineHeight: 1.6, maxWidth: "500px" }}>
          Arquitecto de software y especialista en IA.
          Lidera el desarrollo tecnico de todas las soluciones.
        </p>
        <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, #FF6B35, #00F2FF)", borderRadius: "1px", margin: "28px 0 16px" }} />
        <p style={{ ...body, fontSize: "16px", color: "#4A5568", textAlign: "center" }}>
          Equipo multidisciplinario: IA, Cloud, DevOps, Full-Stack
        </p>
      </div>

      {/* === POST 6 (2160,1080): Contacto === */}
      <div style={cell(2160, 1080)}>
        <p style={{ ...mono, fontSize: "14px", color: "#FF8C42", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "48px" }}>
          Empecemos
        </p>
        <h2 style={{ fontSize: "56px", fontWeight: 700, color: "#E0F7FA", textAlign: "center", margin: 0, lineHeight: 1.15 }}>
          Contanos tu
          <br />
          <span style={gradientText}>desafio tecnologico</span>
        </h2>
        <div style={{ width: "80px", height: "3px", background: "linear-gradient(90deg, #FF6B35, #00F2FF)", borderRadius: "2px", margin: "40px 0" }} />
        <div
          style={{
            padding: "18px 56px",
            borderRadius: "12px",
            background: "#00F2FF",
            color: "#0A0E14",
            fontSize: "22px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "3px",
            boxShadow: "0 0 30px rgba(0,242,255,0.3)",
            marginBottom: "48px",
          }}
        >
          HABLEMOS
        </div>
        <p style={{ ...mono, fontSize: "16px", color: "#8899AA", margin: "0 0 10px" }}>contacto@veltia.ar</p>
        <p style={{ ...mono, fontSize: "16px", color: "#4A5568" }}>veltia.ar</p>
      </div>
    </div>
  );
}
