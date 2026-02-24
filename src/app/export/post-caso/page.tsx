import VeltiaLogo from "@/components/brand/VeltiaLogo";

export default function PostCasoPage() {
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
      {/* Main content area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 80px",
          position: "relative",
        }}
      >
        {/* Badge - top left */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "60px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontFamily:
                "var(--font-roboto-mono), Roboto Mono, monospace",
              fontWeight: 400,
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "#FF8C42",
              background: "rgba(255,140,66,0.2)",
              border: "1px solid rgba(255,140,66,0.4)",
              padding: "6px 16px",
              borderRadius: "20px",
            }}
          >
            Caso de Exito
          </span>
        </div>

        {/* Large metric */}
        <h1
          style={{
            fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
            fontWeight: 700,
            fontSize: "64px",
            lineHeight: 1.1,
            margin: 0,
            textAlign: "center",
            background:
              "linear-gradient(90deg, #FF6B35 0%, #FF8C42 40%, #00F2FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          -42% costos cloud
        </h1>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            color: "#8899AA",
            margin: "24px 0 0 0",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Startup SaaS — FinOps Managed 6 meses
        </p>
      </div>

      {/* Bottom strip - darker section with logo */}
      <div
        style={{
          height: "160px",
          background: "#070A0F",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <VeltiaLogo variant="dark" showTagline={false} width={80} />
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
