import VeltiaLogo from "@/components/brand/VeltiaLogo";

const stats = [
  { value: "100 kg CO\u2082", label: "por instancia eliminada" },
  { value: "500 kg papel", label: "por proceso digital" },
  { value: "60% menos", label: "consumo energetico" },
];

export default function PostAvatarGreenOpsPage() {
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
      {/* Background intense green radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.10) 0%, rgba(34,197,94,0.03) 50%, transparent 75%)",
        }}
      />

      {/* Dot grid overlay - slightly brighter */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(34,197,94,0.04) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* SVG tendrils from ALL 4 corners with leaves */}
      <svg
        width="1080"
        height="1080"
        viewBox="0 0 1080 1080"
        fill="none"
        style={{ position: "absolute", inset: 0 }}
      >
        <defs>
          <filter id="tendril-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* TOP-LEFT corner - tendril 1 */}
        <path
          d="M0,0 C60,80 100,200 120,340 C130,400 110,450 80,500"
          stroke="rgba(34,197,94,0.20)"
          strokeWidth="2"
          fill="none"
          filter="url(#tendril-glow)"
        />
        {/* Leaf on tendril 1 */}
        <path
          d="M90,200 C60,185 45,150 55,125 C75,140 95,175 90,200Z"
          fill="rgba(34,197,94,0.10)"
          filter="url(#tendril-glow)"
        />
        <path
          d="M115,350 C85,330 70,290 85,265 C105,280 120,320 115,350Z"
          fill="rgba(34,197,94,0.08)"
          filter="url(#tendril-glow)"
        />

        {/* TOP-LEFT corner - tendril 2 */}
        <path
          d="M0,60 C80,100 180,160 240,260 C280,320 260,380 220,420"
          stroke="rgba(34,197,94,0.15)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#tendril-glow)"
        />
        <path
          d="M180,180 C155,165 140,130 155,110 C170,125 185,158 180,180Z"
          fill="rgba(34,197,94,0.09)"
          filter="url(#tendril-glow)"
        />

        {/* TOP-RIGHT corner - tendril 3 */}
        <path
          d="M1080,0 C1020,80 980,200 960,340 C950,400 970,450 1000,500"
          stroke="rgba(34,197,94,0.20)"
          strokeWidth="2"
          fill="none"
          filter="url(#tendril-glow)"
        />
        <path
          d="M990,200 C1020,185 1035,150 1025,125 C1005,140 985,175 990,200Z"
          fill="rgba(34,197,94,0.10)"
          filter="url(#tendril-glow)"
        />
        <path
          d="M965,350 C995,330 1010,290 995,265 C975,280 960,320 965,350Z"
          fill="rgba(34,197,94,0.08)"
          filter="url(#tendril-glow)"
        />

        {/* TOP-RIGHT corner - tendril 4 */}
        <path
          d="M1080,60 C1000,100 900,160 840,260 C800,320 820,380 860,420"
          stroke="rgba(34,197,94,0.15)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#tendril-glow)"
        />
        <path
          d="M900,180 C925,165 940,130 925,110 C910,125 895,158 900,180Z"
          fill="rgba(34,197,94,0.09)"
          filter="url(#tendril-glow)"
        />

        {/* BOTTOM-LEFT corner - tendril 5 */}
        <path
          d="M0,1080 C60,1000 100,880 120,740 C130,680 110,630 80,580"
          stroke="rgba(34,197,94,0.20)"
          strokeWidth="2"
          fill="none"
          filter="url(#tendril-glow)"
        />
        <path
          d="M90,880 C60,895 45,930 55,955 C75,940 95,905 90,880Z"
          fill="rgba(34,197,94,0.10)"
          filter="url(#tendril-glow)"
        />
        <path
          d="M115,730 C85,750 70,790 85,815 C105,800 120,760 115,730Z"
          fill="rgba(34,197,94,0.08)"
          filter="url(#tendril-glow)"
        />

        {/* BOTTOM-LEFT corner - tendril 6 */}
        <path
          d="M0,1020 C80,980 180,920 240,820 C280,760 260,700 220,660"
          stroke="rgba(34,197,94,0.15)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#tendril-glow)"
        />
        <path
          d="M180,900 C155,915 140,950 155,970 C170,955 185,922 180,900Z"
          fill="rgba(34,197,94,0.09)"
          filter="url(#tendril-glow)"
        />

        {/* BOTTOM-RIGHT corner - tendril 7 */}
        <path
          d="M1080,1080 C1020,1000 980,880 960,740 C950,680 970,630 1000,580"
          stroke="rgba(34,197,94,0.20)"
          strokeWidth="2"
          fill="none"
          filter="url(#tendril-glow)"
        />
        <path
          d="M990,880 C1020,895 1035,930 1025,955 C1005,940 985,905 990,880Z"
          fill="rgba(34,197,94,0.10)"
          filter="url(#tendril-glow)"
        />
        <path
          d="M965,730 C995,750 1010,790 995,815 C975,800 960,760 965,730Z"
          fill="rgba(34,197,94,0.08)"
          filter="url(#tendril-glow)"
        />

        {/* BOTTOM-RIGHT corner - tendril 8 */}
        <path
          d="M1080,1020 C1000,980 900,920 840,820 C800,760 820,700 860,660"
          stroke="rgba(34,197,94,0.15)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#tendril-glow)"
        />
        <path
          d="M900,900 C925,915 940,950 925,970 C910,955 895,922 900,900Z"
          fill="rgba(34,197,94,0.09)"
          filter="url(#tendril-glow)"
        />
      </svg>

      {/* 12-15 glowing nodes scattered across the composition */}
      {[
        { left: "100px", top: "120px", size: 6, color: "#22C55E" },
        { left: "200px", top: "200px", size: 5, color: "#00F2FF" },
        { left: "60px", top: "400px", size: 7, color: "#4ADE80" },
        { left: "160px", top: "550px", size: 4, color: "#22C55E" },
        { left: "80px", top: "700px", size: 5, color: "#00F2FF" },
        { left: "180px", top: "850px", size: 6, color: "#4ADE80" },
        { right: "110px", top: "130px", size: 5, color: "#00F2FF" },
        { right: "200px", top: "220px", size: 6, color: "#22C55E" },
        { right: "70px", top: "420px", size: 4, color: "#4ADE80" },
        { right: "170px", top: "560px", size: 7, color: "#22C55E" },
        { right: "90px", top: "710px", size: 5, color: "#00F2FF" },
        { right: "190px", top: "860px", size: 6, color: "#4ADE80" },
        { left: "480px", top: "150px", size: 4, color: "#22C55E" },
        { left: "560px", top: "900px", size: 5, color: "#00F2FF" },
        { left: "520px", top: "180px", size: 4, color: "#4ADE80" },
      ].map((node, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            ...(node.left ? { left: node.left } : {}),
            ...(node.right ? { right: node.right } : {}),
            top: node.top,
            width: `${node.size}px`,
            height: `${node.size}px`,
            borderRadius: "50%",
            background: node.color,
            boxShadow: `0 0 ${node.size * 2}px ${node.size}px ${
              node.color === "#22C55E"
                ? "rgba(34,197,94,0.5)"
                : node.color === "#00F2FF"
                  ? "rgba(0,242,255,0.4)"
                  : "rgba(74,222,128,0.4)"
            }`,
          }}
        />
      ))}

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
        {/* Leaf SVG icon - big centered */}
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#22C55E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: "drop-shadow(0 0 10px rgba(34,197,94,0.6))",
          }}
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.8 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>

        {/* GREEN OPS title */}
        <h1
          style={{
            fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
            fontWeight: 700,
            fontSize: "64px",
            lineHeight: 1,
            margin: "20px 0 0 0",
            letterSpacing: "6px",
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
            fontSize: "20px",
            color: "#8899AA",
            margin: "16px 0 0 0",
            textAlign: "center",
          }}
        >
          Tecnologia sostenible con impacto medible
        </p>

        {/* 3 stats in a row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "48px",
            marginTop: "48px",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "200px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
                  fontWeight: 700,
                  fontSize: "28px",
                  lineHeight: 1,
                  background:
                    "linear-gradient(135deg, #16A34A, #22C55E, #4ADE80)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  color: "#8899AA",
                  marginTop: "6px",
                  textAlign: "center",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM: Sustainability badge + Logo + URL */}
      <div
        style={{
          position: "absolute",
          bottom: "55px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "14px",
        }}
      >
        {/* Sustainability badge */}
        <div
          style={{
            padding: "6px 20px",
            border: "1px solid rgba(34,197,94,0.4)",
            borderRadius: "20px",
            fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace",
            fontWeight: 400,
            fontSize: "12px",
            color: "#22C55E",
            letterSpacing: "1px",
          }}
        >
          Comprometidos con la sostenibilidad
        </div>
        <VeltiaLogo
          variant="dark"
          showTagline={false}
          width={80}
          id="avatar-greenops-logo"
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
