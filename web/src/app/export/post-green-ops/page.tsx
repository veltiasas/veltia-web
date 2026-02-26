import VeltiaLogo from "@/components/brand/VeltiaLogo";

const metrics = [
  { value: "100 kg CO\u2082/a\u00F1o", desc: "menos por instancia cloud apagada" },
  { value: "500 kg papel/a\u00F1o", desc: "menos por proceso digitalizado" },
  { value: "60% menos", desc: "consumo energ\u00E9tico por sistema modernizado" },
];

export default function PostGreenOpsPage() {
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
      {/* Background green radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(34,197,94,0.03) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Content container */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          padding: "0 80px",
          boxSizing: "border-box",
        }}
      >
        {/* Mono label */}
        <p
          style={{
            fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace",
            fontWeight: 400,
            fontSize: "14px",
            color: "#22C55E",
            textTransform: "uppercase",
            letterSpacing: "4px",
            margin: "0 0 24px 0",
          }}
        >
          // impacto ambiental
        </p>

        {/* Main title */}
        <h1
          style={{
            fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
            fontWeight: 700,
            fontSize: "72px",
            lineHeight: 1,
            margin: 0,
            background: "linear-gradient(135deg, #16A34A, #22C55E, #4ADE80)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          GREEN OPS
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 400,
            fontSize: "22px",
            color: "#8899AA",
            margin: "16px 0 0 0",
            textAlign: "center",
          }}
        >
          Tecnologia sostenible con impacto medible
        </p>

        {/* Metrics column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: "700px",
            marginTop: "56px",
            gap: "0",
          }}
        >
          {metrics.map((m, i) => (
            <div key={i} style={{ width: "100%" }}>
              {/* Divider line (before each metric) */}
              {i > 0 && (
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(34,197,94,0.3), transparent)",
                  }}
                />
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "32px 0",
                }}
              >
                {/* Big metric number */}
                <span
                  style={{
                    fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
                    fontWeight: 700,
                    fontSize: "40px",
                    lineHeight: 1,
                    background:
                      "linear-gradient(135deg, #16A34A, #22C55E, #4ADE80)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {m.value}
                </span>
                {/* Description */}
                <span
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#8899AA",
                    marginTop: "8px",
                    textAlign: "center",
                  }}
                >
                  {m.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: gradient line + logo + url */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {/* Thin brand gradient line */}
        <div
          style={{
            width: "432px",
            height: "2px",
            background:
              "linear-gradient(90deg, #FF6B35 0%, #FF8C42 40%, #00F2FF 100%)",
            borderRadius: "1px",
          }}
        />
        <VeltiaLogo
          variant="dark"
          showTagline={false}
          width={80}
          id="green-ops-logo"
        />
        <p
          style={{
            fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace",
            fontWeight: 400,
            fontSize: "12px",
            color: "#4A5568",
            margin: 0,
          }}
        >
          veltia.ar
        </p>
      </div>
    </div>
  );
}
