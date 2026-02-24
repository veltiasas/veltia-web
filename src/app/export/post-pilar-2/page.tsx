import VeltiaLogo from "@/components/brand/VeltiaLogo";

const metrics = [
  { pct: "-40%", text: "tickets escalados" },
  { pct: "-60%", text: "incidentes criticos" },
  { pct: "-50%", text: "costo atencion cliente" },
];

export default function PostPilar2Page() {
  return (
    <div
      style={{
        width: "1080px",
        height: "1080px",
        overflow: "hidden",
        position: "relative",
        background: "#0A0E14",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top 35% - Title area */}
      <div
        style={{
          height: "378px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 60px",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: 1.1,
            margin: 0,
            textAlign: "center",
            background:
              "linear-gradient(90deg, #FF6B35 0%, #FF8C42 40%, #00F2FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          IA &amp; Agentes Inteligentes
        </h1>
        <p
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            color: "#00F2FF",
            margin: "16px 0 0 0",
            textAlign: "center",
          }}
        >
          Automatizacion 24/7
        </p>
      </div>

      {/* Middle 40% - Metrics area */}
      <div
        style={{
          height: "432px",
          background: "#1A222D",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 80px",
          gap: "40px",
        }}
      >
        {metrics.map((m, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "3px",
                height: "56px",
                background:
                  "linear-gradient(180deg, #FF6B35 0%, #FF8C42 40%, #00F2FF 100%)",
                borderRadius: "2px",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily:
                  "var(--font-rajdhani), Rajdhani, sans-serif",
                fontWeight: 700,
                fontSize: "36px",
                lineHeight: 1,
                background:
                  "linear-gradient(90deg, #FF6B35 0%, #FF8C42 40%, #00F2FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                minWidth: "120px",
              }}
            >
              {m.pct}
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#8899AA",
                lineHeight: 1.3,
              }}
            >
              {m.text}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom 25% - Logo area */}
      <div
        style={{
          height: "270px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <VeltiaLogo variant="dark" showTagline={false} width={100} />
        <p
          style={{
            fontFamily:
              "var(--font-roboto-mono), Roboto Mono, monospace",
            fontWeight: 400,
            fontSize: "12px",
            color: "#4A5568",
            margin: 0,
          }}
        >
          veltia.tech
        </p>
      </div>
    </div>
  );
}
