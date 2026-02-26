import VeltiaLogo from "@/components/brand/VeltiaLogo";

const metrics = [
  { value: "24/7", label: "autonomos" },
  { value: "65%", label: "resolucion IA" },
  { value: "<2 min", label: "respuesta" },
];

export default function PostAvatarIAPage() {
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
      }}
    >
      {/* Background cyan/green radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 45%, rgba(0,242,255,0.06) 0%, rgba(34,197,94,0.04) 40%, transparent 70%)",
        }}
      />

      {/* Dot grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(34,197,94,0.03) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Bioluminescent leaf SVGs - left side */}
      <svg
        width="200"
        height="350"
        viewBox="0 0 200 350"
        fill="none"
        style={{ position: "absolute", left: "0", top: "60px" }}
      >
        <defs>
          <filter id="ia-leaf-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M30,350 C40,280 60,220 70,160 C80,100 70,50 50,10"
          stroke="rgba(34,197,94,0.12)"
          strokeWidth="2"
          fill="none"
          filter="url(#ia-leaf-glow)"
        />
        <path
          d="M65,200 C35,185 15,150 25,120 C50,135 70,170 65,200Z"
          fill="rgba(34,197,94,0.08)"
          filter="url(#ia-leaf-glow)"
        />
        <path
          d="M55,110 C30,95 20,60 30,35 C50,50 60,85 55,110Z"
          fill="rgba(34,197,94,0.10)"
          filter="url(#ia-leaf-glow)"
        />
      </svg>

      {/* Bioluminescent leaf SVGs - right side */}
      <svg
        width="200"
        height="350"
        viewBox="0 0 200 350"
        fill="none"
        style={{
          position: "absolute",
          right: "0",
          top: "60px",
          transform: "scaleX(-1)",
        }}
      >
        <path
          d="M30,350 C40,280 60,220 70,160 C80,100 70,50 50,10"
          stroke="rgba(0,242,255,0.10)"
          strokeWidth="2"
          fill="none"
          filter="url(#ia-leaf-glow)"
        />
        <path
          d="M65,200 C35,185 15,150 25,120 C50,135 70,170 65,200Z"
          fill="rgba(0,242,255,0.07)"
        />
        <path
          d="M55,110 C30,95 20,60 30,35 C50,50 60,85 55,110Z"
          fill="rgba(0,242,255,0.09)"
        />
      </svg>

      {/* Glowing dot nodes scattered */}
      <div
        style={{
          position: "absolute",
          left: "100px",
          top: "150px",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "#22C55E",
          boxShadow: "0 0 10px 3px rgba(34,197,94,0.5)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "110px",
          top: "170px",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: "#00F2FF",
          boxShadow: "0 0 8px 3px rgba(0,242,255,0.4)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "60px",
          top: "300px",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#4ADE80",
          boxShadow: "0 0 12px 4px rgba(74,222,128,0.4)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "70px",
          top: "320px",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "#22C55E",
          boxShadow: "0 0 10px 3px rgba(34,197,94,0.5)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "150px",
          top: "240px",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: "#00F2FF",
          boxShadow: "0 0 8px 3px rgba(0,242,255,0.3)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "160px",
          top: "260px",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#4ADE80",
          boxShadow: "0 0 12px 4px rgba(74,222,128,0.3)",
        }}
      />

      {/* TOP: Mono label + Title */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
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
          // inteligencia artificial
        </p>
        <h1
          style={{
            fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
            fontWeight: 700,
            fontSize: "56px",
            lineHeight: 1.05,
            margin: 0,
            textAlign: "center",
            background: "linear-gradient(135deg, #16A34A, #22C55E, #4ADE80)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          IA &amp; Agentes
        </h1>
        <h1
          style={{
            fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
            fontWeight: 700,
            fontSize: "56px",
            lineHeight: 1.05,
            margin: 0,
            textAlign: "center",
            background: "linear-gradient(135deg, #16A34A, #22C55E, #4ADE80)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Inteligentes
        </h1>
      </div>

      {/* MIDDLE: Neural network SVG */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          marginTop: "60px",
          width: "600px",
          height: "300px",
        }}
      >
        <svg
          width="600"
          height="300"
          viewBox="0 0 600 300"
          fill="none"
        >
          <defs>
            <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Connection lines */}
          <line x1="120" y1="80" x2="220" y2="140" stroke="rgba(34,197,94,0.15)" strokeWidth="1" />
          <line x1="120" y1="80" x2="250" y2="60" stroke="rgba(34,197,94,0.12)" strokeWidth="1" />
          <line x1="220" y1="140" x2="300" y2="100" stroke="rgba(0,242,255,0.12)" strokeWidth="1" />
          <line x1="250" y1="60" x2="300" y2="100" stroke="rgba(34,197,94,0.15)" strokeWidth="1" />
          <line x1="300" y1="100" x2="380" y2="60" stroke="rgba(0,242,255,0.12)" strokeWidth="1" />
          <line x1="300" y1="100" x2="400" y2="150" stroke="rgba(34,197,94,0.15)" strokeWidth="1" />
          <line x1="380" y1="60" x2="480" y2="90" stroke="rgba(34,197,94,0.12)" strokeWidth="1" />
          <line x1="400" y1="150" x2="480" y2="90" stroke="rgba(0,242,255,0.12)" strokeWidth="1" />
          <line x1="220" y1="140" x2="300" y2="200" stroke="rgba(34,197,94,0.10)" strokeWidth="1" />
          <line x1="300" y1="200" x2="400" y2="150" stroke="rgba(0,242,255,0.10)" strokeWidth="1" />
          <line x1="150" y1="200" x2="220" y2="140" stroke="rgba(34,197,94,0.10)" strokeWidth="1" />
          <line x1="150" y1="200" x2="300" y2="200" stroke="rgba(0,242,255,0.08)" strokeWidth="1" />
          <line x1="300" y1="200" x2="450" y2="210" stroke="rgba(34,197,94,0.10)" strokeWidth="1" />
          <line x1="480" y1="90" x2="450" y2="210" stroke="rgba(0,242,255,0.08)" strokeWidth="1" />

          {/* Nodes */}
          <circle cx="120" cy="80" r="8" fill="#22C55E" opacity="0.7" filter="url(#node-glow)" />
          <circle cx="250" cy="60" r="6" fill="#00F2FF" opacity="0.6" filter="url(#node-glow)" />
          <circle cx="220" cy="140" r="7" fill="#00F2FF" opacity="0.65" filter="url(#node-glow)" />
          <circle cx="300" cy="100" r="10" fill="#22C55E" opacity="0.8" filter="url(#node-glow)" />
          <circle cx="380" cy="60" r="6" fill="#4ADE80" opacity="0.6" filter="url(#node-glow)" />
          <circle cx="400" cy="150" r="7" fill="#22C55E" opacity="0.65" filter="url(#node-glow)" />
          <circle cx="480" cy="90" r="8" fill="#00F2FF" opacity="0.7" filter="url(#node-glow)" />
          <circle cx="150" cy="200" r="5" fill="#4ADE80" opacity="0.55" filter="url(#node-glow)" />
          <circle cx="300" cy="200" r="7" fill="#22C55E" opacity="0.6" filter="url(#node-glow)" />
          <circle cx="450" cy="210" r="5" fill="#00F2FF" opacity="0.55" filter="url(#node-glow)" />
        </svg>
      </div>

      {/* BELOW NETWORK: 3 compact metrics */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          gap: "60px",
          marginTop: "40px",
        }}
      >
        {metrics.map((m, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: 1,
                background:
                  "linear-gradient(135deg, #16A34A, #22C55E, #4ADE80)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {m.value}
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontWeight: 400,
                fontSize: "13px",
                color: "#8899AA",
                marginTop: "6px",
              }}
            >
              {m.label}
            </span>
          </div>
        ))}
      </div>

      {/* BOTTOM: brand gradient line + logo + url */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "14px",
        }}
      >
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
          id="avatar-ia-logo"
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
