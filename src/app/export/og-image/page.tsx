import VeltiaLogo from "@/components/brand/VeltiaLogo";

/* Hardcoded constellation dots - positions manually placed to suggest a network pattern */
const dots: Array<{ x: number; y: number; r: number; color: string; opacity: number }> = [
  { x: 680, y: 80, r: 4, color: "#00F2FF", opacity: 0.6 },
  { x: 750, y: 120, r: 3, color: "#FF8C42", opacity: 0.5 },
  { x: 820, y: 70, r: 5, color: "#00F2FF", opacity: 0.4 },
  { x: 900, y: 150, r: 3, color: "#FF6B35", opacity: 0.6 },
  { x: 960, y: 90, r: 6, color: "#00F2FF", opacity: 0.3 },
  { x: 1020, y: 180, r: 4, color: "#FF8C42", opacity: 0.5 },
  { x: 1080, y: 110, r: 3, color: "#00F2FF", opacity: 0.6 },
  { x: 1140, y: 200, r: 5, color: "#FF6B35", opacity: 0.4 },
  { x: 700, y: 220, r: 3, color: "#FF8C42", opacity: 0.4 },
  { x: 780, y: 280, r: 6, color: "#00F2FF", opacity: 0.5 },
  { x: 850, y: 240, r: 4, color: "#FF6B35", opacity: 0.3 },
  { x: 930, y: 310, r: 3, color: "#00F2FF", opacity: 0.6 },
  { x: 1000, y: 260, r: 5, color: "#FF8C42", opacity: 0.4 },
  { x: 1060, y: 340, r: 4, color: "#00F2FF", opacity: 0.5 },
  { x: 1130, y: 290, r: 3, color: "#FF6B35", opacity: 0.3 },
  { x: 720, y: 380, r: 5, color: "#00F2FF", opacity: 0.4 },
  { x: 810, y: 420, r: 3, color: "#FF8C42", opacity: 0.5 },
  { x: 880, y: 370, r: 4, color: "#00F2FF", opacity: 0.6 },
  { x: 950, y: 450, r: 6, color: "#FF6B35", opacity: 0.3 },
  { x: 1040, y: 400, r: 3, color: "#00F2FF", opacity: 0.5 },
  { x: 1110, y: 460, r: 4, color: "#FF8C42", opacity: 0.4 },
  { x: 760, y: 500, r: 3, color: "#00F2FF", opacity: 0.3 },
  { x: 840, y: 530, r: 5, color: "#FF6B35", opacity: 0.5 },
  { x: 920, y: 500, r: 4, color: "#00F2FF", opacity: 0.4 },
  { x: 1000, y: 550, r: 8, color: "#00F2FF", opacity: 0.2 },
  { x: 1080, y: 520, r: 3, color: "#FF8C42", opacity: 0.5 },
];

export default function OgImagePage() {
  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        overflow: "hidden",
        position: "relative",
        background: "#0A0E14",
        display: "flex",
      }}
    >
      {/* Left 45% - Text content */}
      <div
        style={{
          width: "540px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 60px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
            fontWeight: 700,
            fontSize: "64px",
            lineHeight: 1,
            margin: 0,
            background:
              "linear-gradient(90deg, #FF6B35 0%, #FF8C42 40%, #00F2FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          VELTIA
        </h1>
        <p
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 400,
            fontSize: "24px",
            color: "#00F2FF",
            margin: "20px 0 0 0",
            lineHeight: 1.3,
          }}
        >
          Tecnologia que transforma
        </p>
        <p
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            color: "#8899AA",
            margin: "12px 0 0 0",
            lineHeight: 1.4,
          }}
        >
          Servicios IT &amp; IA
        </p>
      </div>

      {/* Right 55% - Constellation pattern */}
      <div
        style={{
          width: "660px",
          height: "100%",
          background: "#0D1117",
          position: "relative",
        }}
      >
        {dots.map((dot, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${dot.x - 540}px`,
              top: `${dot.y}px`,
              width: `${dot.r * 2}px`,
              height: `${dot.r * 2}px`,
              borderRadius: "50%",
              background: dot.color,
              opacity: dot.opacity,
            }}
          />
        ))}
      </div>

      {/* Bottom strip: full-width gradient line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "3px",
          background:
            "linear-gradient(90deg, #FF6B35 0%, #FF8C42 40%, #00F2FF 100%)",
        }}
      />
    </div>
  );
}
