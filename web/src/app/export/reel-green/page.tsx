import VeltiaLogo from "@/components/brand/VeltiaLogo";

const gradientGreen: React.CSSProperties = {
  background: "linear-gradient(135deg, #16A34A, #22C55E, #4ADE80)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const gradientBrand: React.CSSProperties = {
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
  backgroundImage:
    "radial-gradient(circle, rgba(34,197,94,0.03) 1px, transparent 1px)",
  backgroundSize: "30px 30px",
};

function Frame({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <div id={id} style={base}>
      <div style={dotGrid} />
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function ReelGreenPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* FRAME 1 - Hook: "Sabias que tu cloud emite CO2?" */}
      <Frame id="frame-1">
        {/* Cloud icon circle */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "3px solid #22C55E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "48px",
            boxShadow: "0 0 40px rgba(34,197,94,0.3)",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#22C55E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
        </div>
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#E0F7FA",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          {"\u00BF"}Sabias que tu cloud
          <br />
          <span style={{ color: "#22C55E" }}>emite CO{"\u2082"}?</span>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: "22px",
            color: "#8899AA",
            marginTop: "32px",
            lineHeight: 1.5,
          }}
        >
          Cada servidor consume energia.
          <br />
          Cada GB almacenado tiene huella.
        </p>
      </Frame>

      {/* FRAME 2 - Problem: "100 kg CO2/año" */}
      <Frame id="frame-2">
        <h1
          style={{
            fontSize: "160px",
            fontWeight: 700,
            margin: 0,
            lineHeight: 0.9,
            color: "#22C55E",
          }}
        >
          100
        </h1>
        <p
          style={{
            fontSize: "48px",
            fontWeight: 600,
            color: "#16A34A",
            margin: "8px 0 0",
          }}
        >
          kg CO{"\u2082"}/a{"\u00F1"}o
        </p>
        <div
          style={{
            width: "100px",
            height: "3px",
            background: "linear-gradient(90deg, #16A34A, #22C55E, #4ADE80)",
            borderRadius: "2px",
            margin: "40px 0",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: "20px",
            color: "#8899AA",
            lineHeight: 1.5,
          }}
        >
          por cada servidor ocioso
        </p>
      </Frame>

      {/* FRAME 3 - Solution: "Eliminamos el desperdicio" */}
      <Frame id="frame-3">
        {/* Leaf icon circle */}
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "2px solid rgba(34,197,94,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
            boxShadow: "0 0 40px rgba(34,197,94,0.15)",
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#22C55E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.8 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
        </div>
        <p
          style={{
            ...mono,
            fontSize: "14px",
            color: "#22C55E",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          en veltia
        </p>
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#E0F7FA",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Eliminamos
          <br />
          el desperdicio
        </h1>
        <p
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: "22px",
            color: "#8899AA",
            marginTop: "32px",
          }}
        >
          Cloud, papel, energia. Todo medible.
        </p>
      </Frame>

      {/* FRAME 4 - Metric 1: "-75% downtime" */}
      <Frame id="frame-4">
        <h1
          style={{
            fontSize: "140px",
            fontWeight: 700,
            margin: 0,
            lineHeight: 0.9,
            ...gradientGreen,
          }}
        >
          -75%
        </h1>
        <p
          style={{
            fontSize: "48px",
            fontWeight: 600,
            color: "#E0F7FA",
            margin: "24px 0 0",
          }}
        >
          downtime
        </p>
        <div
          style={{
            width: "100px",
            height: "3px",
            background: "linear-gradient(90deg, #16A34A, #22C55E, #4ADE80)",
            borderRadius: "2px",
            margin: "40px 0",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: "20px",
            color: "#8899AA",
            lineHeight: 1.5,
          }}
        >
          = menos energia gastada
        </p>
      </Frame>

      {/* FRAME 5 - Metric 2: "-42% factura cloud" */}
      <Frame id="frame-5">
        <h1
          style={{
            fontSize: "140px",
            fontWeight: 700,
            margin: 0,
            lineHeight: 0.9,
            ...gradientGreen,
          }}
        >
          -42%
        </h1>
        <p
          style={{
            fontSize: "48px",
            fontWeight: 600,
            color: "#E0F7FA",
            margin: "24px 0 0",
          }}
        >
          factura cloud
        </p>
        <div
          style={{
            width: "100px",
            height: "3px",
            background: "linear-gradient(90deg, #16A34A, #22C55E, #4ADE80)",
            borderRadius: "2px",
            margin: "40px 0",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: "20px",
            color: "#8899AA",
            lineHeight: 1.5,
          }}
        >
          = menos emisiones de CO{"\u2082"}
        </p>
      </Frame>

      {/* FRAME 6 - CTA: VELTIA GREEN OPS */}
      <Frame id="frame-6">
        <VeltiaLogo
          variant="dark"
          showTagline={false}
          width={200}
          id="reel-green-logo"
        />
        <h1
          style={{
            fontSize: "80px",
            fontWeight: 700,
            letterSpacing: "10px",
            margin: "24px 0 0",
            ...gradientBrand,
          }}
        >
          VELTIA
        </h1>
        <p
          style={{
            fontSize: "28px",
            color: "#22C55E",
            letterSpacing: "8px",
            marginTop: "12px",
            fontWeight: 500,
          }}
        >
          GREEN OPS
        </p>
        <div
          style={{
            width: "80px",
            height: "3px",
            background:
              "linear-gradient(90deg, #FF6B35 0%, #FF8C42 35%, #00F2FF 100%)",
            borderRadius: "2px",
            margin: "40px 0",
          }}
        />
        {/* CTA button */}
        <div
          style={{
            padding: "16px 48px",
            borderRadius: "10px",
            background: "#22C55E",
            color: "#0A0E14",
            fontSize: "20px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "3px",
            boxShadow: "0 0 30px rgba(34,197,94,0.3)",
            marginBottom: "32px",
          }}
        >
          ESCRIBINOS
        </div>
        <p style={{ ...mono, fontSize: "16px", color: "#8899AA", margin: 0 }}>
          contacto@veltia.ar
        </p>
        <p
          style={{
            ...mono,
            fontSize: "14px",
            color: "#4A5568",
            marginTop: "8px",
          }}
        >
          veltia.ar
        </p>
      </Frame>
    </div>
  );
}
