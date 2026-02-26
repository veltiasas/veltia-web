import VeltiaLogo from "@/components/brand/VeltiaLogo";

const services = [
  "IA Discovery desde USD 1.500",
  "Cloud Health Check desde USD 1.000",
  "CTO as a Service desde USD 1.500/mes",
];

export default function PostPilar5Page() {
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
          Consultoria Tech
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
          Claridad antes de invertir
        </p>
      </div>

      {/* Middle 40% - Services list area */}
      <div
        style={{
          height: "432px",
          background: "#1A222D",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 80px",
          gap: "44px",
        }}
      >
        {services.map((s, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {/* Left accent bar */}
            <div
              style={{
                width: "3px",
                height: "48px",
                background:
                  "linear-gradient(180deg, #FF6B35 0%, #FF8C42 40%, #00F2FF 100%)",
                borderRadius: "2px",
                flexShrink: 0,
              }}
            />
            {/* Cyan bullet */}
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#00F2FF",
                flexShrink: 0,
              }}
            />
            {/* Service text */}
            <span
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                color: "#E0F7FA",
                lineHeight: 1.4,
              }}
            >
              {s}
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
