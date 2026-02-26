import VeltiaLogo from "@/components/brand/VeltiaLogo";

export default function PostQuotePage() {
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
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Opening quote mark - top area */}
      <div
        style={{
          position: "absolute",
          top: "140px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
          fontWeight: 700,
          fontSize: "120px",
          lineHeight: 1,
          background:
            "linear-gradient(90deg, #FF6B35 0%, #FF8C42 40%, #00F2FF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {"\u201C"}
      </div>

      {/* Quote text - center */}
      <p
        style={{
          fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
          fontWeight: 600,
          fontSize: "36px",
          color: "#E0F7FA",
          textAlign: "center",
          margin: 0,
          padding: "0 100px",
          lineHeight: 1.4,
          maxWidth: "800px",
        }}
      >
        No vendemos soluciones.
        <br />
        Vendemos claridad.
      </p>

      {/* Attribution */}
      <p
        style={{
          fontFamily:
            "var(--font-roboto-mono), Roboto Mono, monospace",
          fontWeight: 400,
          fontSize: "16px",
          color: "#8899AA",
          margin: "32px 0 0 0",
          textAlign: "center",
        }}
      >
        — VELTIA
      </p>

      {/* Bottom area: gradient line + logo */}
      <div
        style={{
          position: "absolute",
          bottom: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {/* Thin horizontal gradient line */}
        <div
          style={{
            width: "432px",
            height: "2px",
            background:
              "linear-gradient(90deg, #FF6B35 0%, #FF8C42 40%, #00F2FF 100%)",
            borderRadius: "1px",
          }}
        />
        <VeltiaLogo variant="dark" showTagline={false} width={80} />
      </div>
    </div>
  );
}
