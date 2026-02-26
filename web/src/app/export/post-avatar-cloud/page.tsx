import VeltiaLogo from "@/components/brand/VeltiaLogo";

const metrics = [
  { value: "-42%", label: "factura cloud" },
  { value: "-30-50%", label: "costos infra" },
  { value: "USD 4.800", label: "ahorro mensual" },
  { value: "6 meses", label: "ROI tipico" },
];

export default function PostAvatarCloudPage() {
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
      {/* Background mixed green/cyan radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 40%, rgba(0,242,255,0.05) 0%, rgba(34,197,94,0.04) 40%, transparent 70%)",
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

      {/* Bioluminescent leaf - left corner */}
      <svg
        width="220"
        height="300"
        viewBox="0 0 220 300"
        fill="none"
        style={{ position: "absolute", left: "0", top: "0" }}
      >
        <defs>
          <filter id="cloud-leaf-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M0,0 C20,40 40,100 50,160 C60,220 50,260 30,300"
          stroke="rgba(34,197,94,0.12)"
          strokeWidth="2"
          fill="none"
          filter="url(#cloud-leaf-glow)"
        />
        <path
          d="M40,100 C15,90 0,60 10,35 C30,45 45,75 40,100Z"
          fill="rgba(34,197,94,0.09)"
          filter="url(#cloud-leaf-glow)"
        />
        <path
          d="M50,180 C25,165 10,130 20,105 C40,120 55,155 50,180Z"
          fill="rgba(0,242,255,0.07)"
          filter="url(#cloud-leaf-glow)"
        />
      </svg>

      {/* Bioluminescent leaf - right corner */}
      <svg
        width="220"
        height="300"
        viewBox="0 0 220 300"
        fill="none"
        style={{
          position: "absolute",
          right: "0",
          top: "0",
          transform: "scaleX(-1)",
        }}
      >
        <path
          d="M0,0 C20,40 40,100 50,160 C60,220 50,260 30,300"
          stroke="rgba(0,242,255,0.10)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M40,100 C15,90 0,60 10,35 C30,45 45,75 40,100Z"
          fill="rgba(0,242,255,0.08)"
        />
        <path
          d="M50,180 C25,165 10,130 20,105 C40,120 55,155 50,180Z"
          fill="rgba(34,197,94,0.07)"
        />
      </svg>

      {/* Glowing dot nodes */}
      <div
        style={{
          position: "absolute",
          left: "80px",
          top: "140px",
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
          right: "90px",
          top: "160px",
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
          left: "140px",
          top: "260px",
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
          right: "150px",
          top: "280px",
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
          left: "200px",
          bottom: "300px",
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
          right: "200px",
          bottom: "320px",
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
          // optimizacion cloud
        </p>
        <h1
          style={{
            fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
            fontWeight: 700,
            fontSize: "56px",
            lineHeight: 1.05,
            margin: 0,
            textAlign: "center",
            background:
              "linear-gradient(90deg, #FF6B35 0%, #FF8C42 40%, #00F2FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Cloud &amp; FinOps
        </h1>
      </div>

      {/* MIDDLE: Abstract bioluminescent cloud SVG */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          marginTop: "50px",
          width: "500px",
          height: "220px",
        }}
      >
        <svg
          width="500"
          height="220"
          viewBox="0 0 500 220"
          fill="none"
        >
          <defs>
            <filter id="cloud-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="cloud-node-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Cloud shape 1 - large center */}
          <ellipse
            cx="250"
            cy="120"
            rx="160"
            ry="80"
            fill="rgba(34,197,94,0.06)"
            filter="url(#cloud-glow)"
          />
          {/* Cloud shape 2 - upper left */}
          <ellipse
            cx="180"
            cy="90"
            rx="120"
            ry="65"
            fill="rgba(0,242,255,0.05)"
            filter="url(#cloud-glow)"
          />
          {/* Cloud shape 3 - upper right */}
          <ellipse
            cx="320"
            cy="85"
            rx="110"
            ry="60"
            fill="rgba(34,197,94,0.07)"
            filter="url(#cloud-glow)"
          />
          {/* Cloud shape 4 - small top bump */}
          <ellipse
            cx="250"
            cy="60"
            rx="80"
            ry="45"
            fill="rgba(0,242,255,0.04)"
            filter="url(#cloud-glow)"
          />

          {/* Glowing nodes inside cloud */}
          <circle cx="180" cy="100" r="4" fill="#22C55E" opacity="0.6" filter="url(#cloud-node-glow)" />
          <circle cx="250" cy="80" r="5" fill="#00F2FF" opacity="0.5" filter="url(#cloud-node-glow)" />
          <circle cx="320" cy="95" r="4" fill="#4ADE80" opacity="0.55" filter="url(#cloud-node-glow)" />
          <circle cx="210" cy="130" r="3" fill="#00F2FF" opacity="0.45" filter="url(#cloud-node-glow)" />
          <circle cx="290" cy="135" r="3" fill="#22C55E" opacity="0.5" filter="url(#cloud-node-glow)" />
          <circle cx="350" cy="120" r="3.5" fill="#00F2FF" opacity="0.4" filter="url(#cloud-node-glow)" />
          <circle cx="150" cy="115" r="3" fill="#4ADE80" opacity="0.4" filter="url(#cloud-node-glow)" />

          {/* Connection lines between cloud nodes */}
          <line x1="180" y1="100" x2="250" y2="80" stroke="rgba(34,197,94,0.10)" strokeWidth="0.8" />
          <line x1="250" y1="80" x2="320" y2="95" stroke="rgba(0,242,255,0.10)" strokeWidth="0.8" />
          <line x1="210" y1="130" x2="290" y2="135" stroke="rgba(34,197,94,0.08)" strokeWidth="0.8" />
          <line x1="180" y1="100" x2="210" y2="130" stroke="rgba(0,242,255,0.08)" strokeWidth="0.8" />
          <line x1="320" y1="95" x2="350" y2="120" stroke="rgba(34,197,94,0.08)" strokeWidth="0.8" />
          <line x1="290" y1="135" x2="320" y2="95" stroke="rgba(0,242,255,0.08)" strokeWidth="0.8" />
          <line x1="150" y1="115" x2="180" y2="100" stroke="rgba(34,197,94,0.08)" strokeWidth="0.8" />
        </svg>
      </div>

      {/* KEY METRICS: 2 columns, 2 rows */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px 80px",
          marginTop: "50px",
          padding: "0 120px",
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
                fontSize: "36px",
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
                fontSize: "14px",
                color: "#8899AA",
                marginTop: "6px",
                textAlign: "center",
              }}
            >
              {m.label}
            </span>
          </div>
        ))}
      </div>

      {/* BOTTOM: green gradient line + logo + url */}
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
              "linear-gradient(135deg, #16A34A, #22C55E, #4ADE80)",
            borderRadius: "1px",
          }}
        />
        <VeltiaLogo
          variant="dark"
          showTagline={false}
          width={80}
          id="avatar-cloud-logo"
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
