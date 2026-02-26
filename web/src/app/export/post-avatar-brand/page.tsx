import VeltiaLogo from "@/components/brand/VeltiaLogo";

export default function PostAvatarBrandPage() {
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
            "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.08) 0%, transparent 65%)",
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

      {/* LEFT SIDE: Large SVG leaf branch from bottom-left curving up */}
      <svg
        width="400"
        height="700"
        viewBox="0 0 400 700"
        fill="none"
        style={{
          position: "absolute",
          left: "-20px",
          bottom: "0",
        }}
      >
        <defs>
          <filter id="leaf-glow-l" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Main branch stem */}
        <path
          d="M80,700 C90,600 120,500 140,420 C160,340 170,280 160,200 C150,140 130,90 100,50"
          stroke="rgba(34,197,94,0.15)"
          strokeWidth="3"
          fill="none"
          filter="url(#leaf-glow-l)"
        />
        {/* Leaf 1 - large bottom */}
        <path
          d="M120,520 C80,490 50,440 60,400 C100,420 140,460 120,520Z"
          fill="rgba(34,197,94,0.10)"
          filter="url(#leaf-glow-l)"
        />
        {/* Leaf 2 - mid-left */}
        <path
          d="M150,380 C100,360 70,310 85,270 C120,290 155,340 150,380Z"
          fill="rgba(34,197,94,0.08)"
          filter="url(#leaf-glow-l)"
        />
        {/* Leaf 3 - upper */}
        <path
          d="M145,260 C100,240 80,190 95,150 C125,170 150,220 145,260Z"
          fill="rgba(34,197,94,0.12)"
          filter="url(#leaf-glow-l)"
        />
        {/* Leaf 4 - top-most */}
        <path
          d="M120,140 C85,115 70,70 85,35 C110,55 130,100 120,140Z"
          fill="rgba(34,197,94,0.09)"
          filter="url(#leaf-glow-l)"
        />
      </svg>

      {/* RIGHT SIDE: Mirrored SVG leaf branch from bottom-right curving up */}
      <svg
        width="400"
        height="700"
        viewBox="0 0 400 700"
        fill="none"
        style={{
          position: "absolute",
          right: "-20px",
          bottom: "0",
          transform: "scaleX(-1)",
        }}
      >
        <defs>
          <filter id="leaf-glow-r" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M80,700 C90,600 120,500 140,420 C160,340 170,280 160,200 C150,140 130,90 100,50"
          stroke="rgba(34,197,94,0.15)"
          strokeWidth="3"
          fill="none"
          filter="url(#leaf-glow-r)"
        />
        <path
          d="M120,520 C80,490 50,440 60,400 C100,420 140,460 120,520Z"
          fill="rgba(34,197,94,0.10)"
          filter="url(#leaf-glow-r)"
        />
        <path
          d="M150,380 C100,360 70,310 85,270 C120,290 155,340 150,380Z"
          fill="rgba(34,197,94,0.08)"
          filter="url(#leaf-glow-r)"
        />
        <path
          d="M145,260 C100,240 80,190 95,150 C125,170 150,220 145,260Z"
          fill="rgba(34,197,94,0.12)"
          filter="url(#leaf-glow-r)"
        />
        <path
          d="M120,140 C85,115 70,70 85,35 C110,55 130,100 120,140Z"
          fill="rgba(34,197,94,0.09)"
          filter="url(#leaf-glow-r)"
        />
      </svg>

      {/* Glowing nodes - LEFT side */}
      <div
        style={{
          position: "absolute",
          left: "120px",
          top: "200px",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#22C55E",
          boxShadow: "0 0 12px 4px rgba(34,197,94,0.5)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "80px",
          top: "380px",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "#00F2FF",
          boxShadow: "0 0 10px 3px rgba(0,242,255,0.4)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "160px",
          top: "520px",
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          background: "#22C55E",
          boxShadow: "0 0 14px 5px rgba(34,197,94,0.5)",
        }}
      />

      {/* Glowing nodes - RIGHT side */}
      <div
        style={{
          position: "absolute",
          right: "130px",
          top: "220px",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "#00F2FF",
          boxShadow: "0 0 10px 3px rgba(0,242,255,0.4)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "90px",
          top: "400px",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#22C55E",
          boxShadow: "0 0 12px 4px rgba(34,197,94,0.5)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "170px",
          top: "540px",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#4ADE80",
          boxShadow: "0 0 16px 6px rgba(74,222,128,0.4)",
        }}
      />

      {/* Additional scattered nodes */}
      <div
        style={{
          position: "absolute",
          left: "200px",
          top: "310px",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: "#4ADE80",
          boxShadow: "0 0 8px 3px rgba(74,222,128,0.3)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "210px",
          top: "340px",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: "#00F2FF",
          boxShadow: "0 0 8px 3px rgba(0,242,255,0.3)",
        }}
      />

      {/* CENTER CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* VELTIA title */}
        <h1
          style={{
            fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
            fontWeight: 700,
            fontSize: "80px",
            lineHeight: 1,
            margin: 0,
            letterSpacing: "10px",
            background:
              "linear-gradient(90deg, #FF6B35 0%, #FF8C42 40%, #00F2FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          VELTIA
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 500,
            fontSize: "24px",
            color: "#00F2FF",
            margin: "20px 0 0 0",
            letterSpacing: "2px",
          }}
        >
          Tecnologia que transforma
        </p>

        {/* Green gradient separator line */}
        <div
          style={{
            width: "200px",
            height: "2px",
            background: "linear-gradient(90deg, #16A34A, #22C55E, #4ADE80)",
            borderRadius: "1px",
            marginTop: "28px",
          }}
        />

        {/* Green Ops badge */}
        <div
          style={{
            marginTop: "24px",
            padding: "6px 20px",
            border: "1px solid rgba(34,197,94,0.5)",
            borderRadius: "20px",
            fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace",
            fontWeight: 500,
            fontSize: "14px",
            color: "#22C55E",
            letterSpacing: "2px",
          }}
        >
          GREEN OPS
        </div>
      </div>

      {/* BOTTOM: Logo + URL */}
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
        <VeltiaLogo
          variant="dark"
          showTagline={false}
          width={80}
          id="avatar-brand-logo"
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
