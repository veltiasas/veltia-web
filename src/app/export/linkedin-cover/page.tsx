import VeltiaLogo from "@/components/brand/VeltiaLogo";

export default function LinkedInCoverPage() {
  return (
    <div
      style={{
        width: "1128px",
        height: "191px",
        overflow: "hidden",
        position: "relative",
        background: "#0A0E14",
        backgroundImage:
          "radial-gradient(circle, rgba(0,242,255,0.04) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
        display: "flex",
        alignItems: "center",
        padding: "0 48px",
      }}
    >
      {/* Left: Logo */}
      <div style={{ flexShrink: 0 }}>
        <VeltiaLogo variant="dark" showTagline={false} width={120} />
      </div>

      {/* Center-right: Text */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingRight: "60px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
            color: "#E0F7FA",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          Servicios IT &amp; IA para empresas
        </p>
        <p
          style={{
            fontFamily:
              "var(--font-roboto-mono), Roboto Mono, monospace",
            fontWeight: 400,
            fontSize: "12px",
            color: "#8899AA",
            margin: "8px 0 0 0",
            lineHeight: 1.4,
          }}
        >
          Transformacion Digital | IA &amp; Agentes | Cloud &amp; FinOps |
          Consultoria
        </p>
      </div>

      {/* Far right: Decorative gradient line */}
      <div
        style={{
          position: "absolute",
          right: "32px",
          top: "20%",
          width: "2px",
          height: "60%",
          background:
            "linear-gradient(180deg, #FF6B35 0%, #FF8C42 40%, #00F2FF 100%)",
          borderRadius: "1px",
        }}
      />
    </div>
  );
}
