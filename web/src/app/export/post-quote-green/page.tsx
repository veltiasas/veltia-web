import VeltiaLogo from "@/components/brand/VeltiaLogo";

export default function PostQuoteGreenPage() {
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
          background: "linear-gradient(135deg, #16A34A, #22C55E, #4ADE80)",
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
          position: "relative",
          zIndex: 10,
        }}
      >
        No solo optimizamos tu negocio.
        <br />
        Optimizamos tu impacto en el planeta.
      </p>

      {/* Attribution with leaf icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "32px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Leaf icon SVG */}
        <svg
          width="24"
          height="24"
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
        <p
          style={{
            fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace",
            fontWeight: 400,
            fontSize: "16px",
            color: "#8899AA",
            margin: 0,
            textAlign: "center",
          }}
        >
          — VELTIA Green Ops
        </p>
      </div>

      {/* Bottom area: green gradient line + logo */}
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
        {/* Thin green gradient line */}
        <div
          style={{
            width: "432px",
            height: "2px",
            background: "linear-gradient(90deg, #16A34A, #22C55E, #4ADE80)",
            borderRadius: "1px",
          }}
        />
        <VeltiaLogo
          variant="dark"
          showTagline={false}
          width={80}
          id="quote-green-logo"
        />
      </div>
    </div>
  );
}
