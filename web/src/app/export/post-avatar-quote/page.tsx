import VeltiaLogo from "@/components/brand/VeltiaLogo";

export default function PostAvatarQuotePage() {
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
      {/* Background subtle green glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.06) 0%, transparent 65%)",
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

      {/* DECORATIVE FRAME: Organic vine/tendril rectangle with leaves and corner nodes */}
      <svg
        width="1080"
        height="1080"
        viewBox="0 0 1080 1080"
        fill="none"
        style={{ position: "absolute", inset: 0 }}
      >
        <defs>
          <filter id="vine-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="corner-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* TOP vine - left to right with organic curve */}
        <path
          d="M140,140 C250,130 400,125 540,128 C680,131 830,135 940,140"
          stroke="rgba(34,197,94,0.20)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#vine-glow)"
        />
        {/* Leaves on top vine */}
        <path
          d="M300,128 C290,110 280,90 290,75 C305,85 310,108 300,128Z"
          fill="rgba(34,197,94,0.10)"
          filter="url(#vine-glow)"
        />
        <path
          d="M500,126 C495,108 495,88 505,75 C515,88 515,108 500,126Z"
          fill="rgba(34,197,94,0.08)"
          filter="url(#vine-glow)"
        />
        <path
          d="M720,132 C715,114 710,94 720,80 C732,92 730,114 720,132Z"
          fill="rgba(34,197,94,0.10)"
          filter="url(#vine-glow)"
        />

        {/* RIGHT vine - top to bottom */}
        <path
          d="M940,140 C950,250 955,400 952,540 C949,680 945,830 940,940"
          stroke="rgba(34,197,94,0.20)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#vine-glow)"
        />
        {/* Leaves on right vine */}
        <path
          d="M952,320 C970,310 990,305 1005,315 C995,330 972,330 952,320Z"
          fill="rgba(34,197,94,0.09)"
          filter="url(#vine-glow)"
        />
        <path
          d="M950,560 C968,550 988,548 1000,558 C990,572 970,570 950,560Z"
          fill="rgba(34,197,94,0.08)"
          filter="url(#vine-glow)"
        />
        <path
          d="M945,780 C963,770 983,768 995,778 C985,792 965,790 945,780Z"
          fill="rgba(34,197,94,0.10)"
          filter="url(#vine-glow)"
        />

        {/* BOTTOM vine - right to left */}
        <path
          d="M940,940 C830,950 680,955 540,952 C400,949 250,945 140,940"
          stroke="rgba(34,197,94,0.20)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#vine-glow)"
        />
        {/* Leaves on bottom vine */}
        <path
          d="M780,952 C790,970 795,990 785,1005 C770,995 768,972 780,952Z"
          fill="rgba(34,197,94,0.10)"
          filter="url(#vine-glow)"
        />
        <path
          d="M540,954 C545,972 545,992 535,1005 C525,992 525,972 540,954Z"
          fill="rgba(34,197,94,0.08)"
          filter="url(#vine-glow)"
        />
        <path
          d="M340,948 C345,966 340,986 330,998 C320,986 322,966 340,948Z"
          fill="rgba(34,197,94,0.10)"
          filter="url(#vine-glow)"
        />

        {/* LEFT vine - bottom to top */}
        <path
          d="M140,940 C130,830 125,680 128,540 C131,400 135,250 140,140"
          stroke="rgba(34,197,94,0.20)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#vine-glow)"
        />
        {/* Leaves on left vine */}
        <path
          d="M128,760 C110,770 90,775 75,765 C85,750 108,750 128,760Z"
          fill="rgba(34,197,94,0.09)"
          filter="url(#vine-glow)"
        />
        <path
          d="M130,520 C112,530 92,532 80,522 C90,508 110,510 130,520Z"
          fill="rgba(34,197,94,0.08)"
          filter="url(#vine-glow)"
        />
        <path
          d="M135,300 C117,310 97,312 85,302 C95,288 115,290 135,300Z"
          fill="rgba(34,197,94,0.10)"
          filter="url(#vine-glow)"
        />

        {/* Corner glow nodes */}
        <circle cx="140" cy="140" r="6" fill="#22C55E" opacity="0.6" filter="url(#corner-glow)" />
        <circle cx="940" cy="140" r="6" fill="#00F2FF" opacity="0.5" filter="url(#corner-glow)" />
        <circle cx="940" cy="940" r="6" fill="#22C55E" opacity="0.6" filter="url(#corner-glow)" />
        <circle cx="140" cy="940" r="6" fill="#00F2FF" opacity="0.5" filter="url(#corner-glow)" />

        {/* Mid-point nodes on frame */}
        <circle cx="540" cy="128" r="3" fill="#4ADE80" opacity="0.4" filter="url(#corner-glow)" />
        <circle cx="952" cy="540" r="3" fill="#4ADE80" opacity="0.4" filter="url(#corner-glow)" />
        <circle cx="540" cy="952" r="3" fill="#4ADE80" opacity="0.4" filter="url(#corner-glow)" />
        <circle cx="128" cy="540" r="3" fill="#4ADE80" opacity="0.4" filter="url(#corner-glow)" />
      </svg>

      {/* TOP CENTER: Large opening quote mark */}
      <div
        style={{
          position: "absolute",
          top: "200px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
          fontWeight: 700,
          fontSize: "100px",
          lineHeight: 1,
          background: "linear-gradient(135deg, #16A34A, #22C55E, #4ADE80)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          zIndex: 10,
        }}
      >
        {"\u201C"}
      </div>

      {/* CENTER: Quote text */}
      <p
        style={{
          fontFamily: "var(--font-rajdhani), Rajdhani, sans-serif",
          fontWeight: 600,
          fontSize: "38px",
          color: "#E0F7FA",
          textAlign: "center",
          margin: 0,
          padding: "0 160px",
          lineHeight: 1.4,
          maxWidth: "750px",
          position: "relative",
          zIndex: 10,
        }}
      >
        La tecnologia no deberia costar al planeta.
        <br />
        Deberia salvarlo.
      </p>

      {/* Attribution: Leaf icon + text */}
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
        <svg
          width="16"
          height="16"
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
            color: "#22C55E",
            margin: 0,
          }}
        >
          {"\u2014"} VELTIA Green Ops
        </p>
      </div>

      {/* BOTTOM: green gradient line + logo */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "2px",
            background: "linear-gradient(90deg, #16A34A, #22C55E, #4ADE80)",
            borderRadius: "1px",
          }}
        />
        <VeltiaLogo
          variant="dark"
          showTagline={false}
          width={70}
          id="avatar-quote-logo"
        />
      </div>
    </div>
  );
}
