export default function LogoAvatarPage() {
  return (
    <div
      style={{
        width: "1080px",
        height: "1080px",
        overflow: "hidden",
        position: "relative",
        background: "#0A0E14",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Subtle green radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(34,197,94,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(34,197,94,0.025) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Floating spores around logo */}
      {[
        { left: 180, top: 150, size: 5, color: "#22C55E" },
        { left: 850, top: 200, size: 4, color: "#00F2FF" },
        { left: 120, top: 500, size: 3, color: "#4ADE80" },
        { left: 900, top: 550, size: 5, color: "#22C55E" },
        { left: 200, top: 800, size: 4, color: "#00F2FF" },
        { left: 880, top: 780, size: 3, color: "#22C55E" },
        { left: 300, top: 120, size: 3, color: "#00F2FF" },
        { left: 750, top: 100, size: 4, color: "#4ADE80" },
        { left: 150, top: 350, size: 3, color: "#22C55E" },
        { left: 920, top: 400, size: 4, color: "#00F2FF" },
        { left: 250, top: 680, size: 3, color: "#4ADE80" },
        { left: 830, top: 700, size: 5, color: "#22C55E" },
      ].map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${s.left}px`,
            top: `${s.top}px`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: "50%",
            background: s.color,
            boxShadow: `0 0 ${s.size * 3}px ${s.color}`,
            opacity: 0.7,
          }}
        />
      ))}

      {/* Main Logo SVG */}
      <svg
        width="700"
        height="750"
        viewBox="0 0 300 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glow filter */}
          <filter id="bio-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="bio-glow-strong" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="leaf-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Brand gradient */}
          <linearGradient id="avatarBrandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B35" />
            <stop offset="40%" stopColor="#FF8C42" />
            <stop offset="100%" stopColor="#00F2FF" />
          </linearGradient>

          {/* Green gradient */}
          <linearGradient id="avatarGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#16A34A" />
            <stop offset="50%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#4ADE80" />
          </linearGradient>

          {/* Wing gradient - green to cyan */}
          <linearGradient id="wingGreenCyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#00F2FF" />
          </linearGradient>
        </defs>

        <g transform="translate(150, 120)">
          {/* === V SHAPE - main structure with green circuit glow === */}
          <path
            d="M-8,-85 L-45,45 L-35,45 L0,-55 L35,45 L45,45 L8,-85 Z"
            fill="#E0F7FA"
            opacity="0.9"
          />

          {/* Organic neural connections on V - left (replacing circuits) */}
          <path d="M-20,-40 C-28,-30 -35,-10 -33,10" stroke="#22C55E" strokeWidth="1" fill="none" opacity="0.5" filter="url(#bio-glow)" />
          <path d="M-25,-20 C-35,-22 -45,-18 -50,-15" stroke="#22C55E" strokeWidth="0.8" fill="none" opacity="0.4" filter="url(#bio-glow)" />
          <path d="M-22,-50 C-30,-52 -38,-48 -42,-45" stroke="#4ADE80" strokeWidth="0.8" fill="none" opacity="0.3" filter="url(#bio-glow)" />
          <path d="M-30,0 C-40,-2 -50,2 -55,5" stroke="#00F2FF" strokeWidth="0.8" fill="none" opacity="0.35" filter="url(#bio-glow)" />

          {/* Organic neural connections on V - right */}
          <path d="M20,-40 C28,-30 35,-10 33,10" stroke="#22C55E" strokeWidth="1" fill="none" opacity="0.5" filter="url(#bio-glow)" />
          <path d="M25,-20 C35,-22 45,-18 52,-12" stroke="#22C55E" strokeWidth="0.8" fill="none" opacity="0.4" filter="url(#bio-glow)" />
          <path d="M30,5 C40,3 50,8 58,10" stroke="#00F2FF" strokeWidth="0.8" fill="none" opacity="0.35" filter="url(#bio-glow)" />

          {/* Bioluminescent nodes on connections */}
          {[
            { cx: -50, cy: -15, r: 2.5, color: "#22C55E" },
            { cx: -42, cy: -45, r: 2, color: "#4ADE80" },
            { cx: -55, cy: 5, r: 2.5, color: "#00F2FF" },
            { cx: 52, cy: -12, r: 2.5, color: "#22C55E" },
            { cx: 58, cy: 10, r: 2, color: "#00F2FF" },
          ].map((n, i) => (
            <circle key={`node-${i}`} cx={n.cx} cy={n.cy} r={n.r} fill={n.color} opacity="0.8" filter="url(#bio-glow)" />
          ))}

          {/* Center accent node */}
          <circle cx="0" cy="-55" r="3.5" fill="#22C55E" opacity="0.9" filter="url(#bio-glow-strong)" />

          {/* === LEFT WING - Bioluminescent leaves === */}
          {/* Main wing branch */}
          <path
            d="M-15,-60 C-40,-75 -80,-90 -115,-78"
            stroke="url(#wingGreenCyan)"
            strokeWidth="1.8"
            fill="none"
            opacity="0.8"
            filter="url(#bio-glow)"
          />
          <path
            d="M-25,-50 C-45,-60 -70,-68 -100,-62"
            stroke="#22C55E"
            strokeWidth="1.2"
            fill="none"
            opacity="0.6"
            filter="url(#bio-glow)"
          />
          <path
            d="M-20,-42 C-38,-48 -58,-50 -85,-45"
            stroke="#22C55E"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
            filter="url(#bio-glow)"
          />

          {/* Left wing leaf shapes */}
          {[
            { d: "M-40,-72 C-55,-82 -65,-78 -70,-70 C-60,-72 -50,-70 -40,-72Z", color: "rgba(34,197,94,0.2)" },
            { d: "M-55,-78 C-72,-90 -85,-85 -90,-76 C-78,-78 -65,-75 -55,-78Z", color: "rgba(34,197,94,0.15)" },
            { d: "M-75,-82 C-92,-92 -105,-86 -110,-78 C-98,-80 -85,-78 -75,-82Z", color: "rgba(0,242,255,0.12)" },
            { d: "M-35,-58 C-48,-66 -58,-62 -62,-55 C-52,-57 -42,-56 -35,-58Z", color: "rgba(34,197,94,0.18)" },
            { d: "M-50,-64 C-65,-72 -78,-68 -82,-60 C-70,-62 -58,-60 -50,-64Z", color: "rgba(74,222,128,0.15)" },
            { d: "M-65,-68 C-80,-76 -92,-72 -98,-64 C-85,-66 -72,-64 -65,-68Z", color: "rgba(0,242,255,0.1)" },
            { d: "M-30,-48 C-42,-54 -52,-50 -55,-43 C-45,-45 -36,-44 -30,-48Z", color: "rgba(34,197,94,0.15)" },
            { d: "M-45,-52 C-58,-58 -70,-54 -75,-47 C-62,-49 -52,-48 -45,-52Z", color: "rgba(74,222,128,0.12)" },
            { d: "M-60,-55 C-72,-60 -82,-56 -85,-48 C-75,-50 -65,-50 -60,-55Z", color: "rgba(34,197,94,0.1)" },
          ].map((leaf, i) => (
            <path key={`ll-${i}`} d={leaf.d} fill={leaf.color} filter="url(#leaf-soft)" />
          ))}

          {/* Wing glow nodes - left */}
          {[
            { cx: -70, cy: -72, r: 2, color: "#22C55E" },
            { cx: -90, cy: -78, r: 2.5, color: "#00F2FF" },
            { cx: -110, cy: -78, r: 2, color: "#4ADE80" },
            { cx: -62, cy: -56, r: 1.8, color: "#22C55E" },
            { cx: -82, cy: -62, r: 2, color: "#00F2FF" },
            { cx: -55, cy: -44, r: 1.5, color: "#4ADE80" },
            { cx: -75, cy: -48, r: 2, color: "#22C55E" },
          ].map((n, i) => (
            <circle key={`lgn-${i}`} cx={n.cx} cy={n.cy} r={n.r} fill={n.color} opacity="0.7" filter="url(#bio-glow)" />
          ))}

          {/* === RIGHT WING - Bioluminescent leaves (mirrored) === */}
          <path
            d="M15,-60 C40,-75 80,-90 115,-78"
            stroke="url(#wingGreenCyan)"
            strokeWidth="1.8"
            fill="none"
            opacity="0.8"
            filter="url(#bio-glow)"
          />
          <path
            d="M25,-50 C45,-60 70,-68 100,-62"
            stroke="#22C55E"
            strokeWidth="1.2"
            fill="none"
            opacity="0.6"
            filter="url(#bio-glow)"
          />
          <path
            d="M20,-42 C38,-48 58,-50 85,-45"
            stroke="#22C55E"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
            filter="url(#bio-glow)"
          />

          {/* Right wing leaf shapes */}
          {[
            { d: "M40,-72 C55,-82 65,-78 70,-70 C60,-72 50,-70 40,-72Z", color: "rgba(34,197,94,0.2)" },
            { d: "M55,-78 C72,-90 85,-85 90,-76 C78,-78 65,-75 55,-78Z", color: "rgba(34,197,94,0.15)" },
            { d: "M75,-82 C92,-92 105,-86 110,-78 C98,-80 85,-78 75,-82Z", color: "rgba(0,242,255,0.12)" },
            { d: "M35,-58 C48,-66 58,-62 62,-55 C52,-57 42,-56 35,-58Z", color: "rgba(34,197,94,0.18)" },
            { d: "M50,-64 C65,-72 78,-68 82,-60 C70,-62 58,-60 50,-64Z", color: "rgba(74,222,128,0.15)" },
            { d: "M65,-68 C80,-76 92,-72 98,-64 C85,-66 72,-64 65,-68Z", color: "rgba(0,242,255,0.1)" },
            { d: "M30,-48 C42,-54 52,-50 55,-43 C45,-45 36,-44 30,-48Z", color: "rgba(34,197,94,0.15)" },
            { d: "M45,-52 C58,-58 70,-54 75,-47 C62,-49 52,-48 45,-52Z", color: "rgba(74,222,128,0.12)" },
            { d: "M60,-55 C72,-60 82,-56 85,-48 C75,-50 65,-50 60,-55Z", color: "rgba(34,197,94,0.1)" },
          ].map((leaf, i) => (
            <path key={`rl-${i}`} d={leaf.d} fill={leaf.color} filter="url(#leaf-soft)" />
          ))}

          {/* Wing glow nodes - right */}
          {[
            { cx: 70, cy: -72, r: 2, color: "#22C55E" },
            { cx: 90, cy: -78, r: 2.5, color: "#00F2FF" },
            { cx: 110, cy: -78, r: 2, color: "#4ADE80" },
            { cx: 62, cy: -56, r: 1.8, color: "#22C55E" },
            { cx: 82, cy: -62, r: 2, color: "#00F2FF" },
            { cx: 55, cy: -44, r: 1.5, color: "#4ADE80" },
            { cx: 75, cy: -48, r: 2, color: "#22C55E" },
          ].map((n, i) => (
            <circle key={`rgn-${i}`} cx={n.cx} cy={n.cy} r={n.r} fill={n.color} opacity="0.7" filter="url(#bio-glow)" />
          ))}

          {/* === BIRD HEAD with green glow === */}
          <path
            d="M-3,-75 C-2,-82 2,-82 3,-75 C5,-72 3,-68 0,-66 C-3,-68 -5,-72 -3,-75"
            fill="#E0F7FA"
            opacity="0.9"
          />
          {/* Eye - green bioluminescent */}
          <circle cx="0" cy="-74" r="2" fill="#22C55E" filter="url(#bio-glow)" />
          {/* Beak */}
          <path d="M0,-70 L3,-66 L-3,-66 Z" fill="#22C55E" opacity="0.8" />

          {/* === TAIL - organic tendrils === */}
          <path d="M-8,35 C-18,55 -25,72 -22,88" stroke="#22C55E" strokeWidth="1.2" fill="none" opacity="0.4" filter="url(#bio-glow)" />
          <path d="M0,40 C0,62 -2,78 0,92" stroke="url(#wingGreenCyan)" strokeWidth="1.5" fill="none" opacity="0.5" filter="url(#bio-glow)" />
          <path d="M8,35 C18,55 25,72 22,88" stroke="#22C55E" strokeWidth="1.2" fill="none" opacity="0.4" filter="url(#bio-glow)" />

          {/* Tail leaf buds */}
          <path d="M-22,85 C-28,78 -30,82 -26,90 C-22,88 -20,84 -22,85Z" fill="rgba(34,197,94,0.2)" filter="url(#leaf-soft)" />
          <path d="M22,85 C28,78 30,82 26,90 C22,88 20,84 22,85Z" fill="rgba(34,197,94,0.2)" filter="url(#leaf-soft)" />
          <circle cx="-22" cy="88" r="1.5" fill="#22C55E" opacity="0.6" filter="url(#bio-glow)" />
          <circle cx="0" cy="92" r="2" fill="#00F2FF" opacity="0.5" filter="url(#bio-glow)" />
          <circle cx="22" cy="88" r="1.5" fill="#22C55E" opacity="0.6" filter="url(#bio-glow)" />

          {/* === LEAF ICON replacing document === */}
          <g transform="translate(-62, -18)" opacity="0.6" filter="url(#bio-glow)">
            <path
              d="M6,0 C10,-2 14,2 12,8 C10,12 6,14 4,12 C2,10 0,6 2,2 C3,0 5,-1 6,0Z"
              stroke="#22C55E"
              strokeWidth="0.8"
              fill="rgba(34,197,94,0.15)"
            />
            <path d="M6,0 C5,4 4,8 4,12" stroke="#22C55E" strokeWidth="0.6" fill="none" />
          </g>

          {/* === SEEDLING ICON replacing cloud === */}
          <g transform="translate(48, -15)" opacity="0.6" filter="url(#bio-glow)">
            <path d="M7,14 L7,6" stroke="#22C55E" strokeWidth="0.8" />
            <path
              d="M7,6 C3,2 1,0 4,-2 C7,0 9,2 7,6Z"
              stroke="#22C55E"
              strokeWidth="0.8"
              fill="rgba(34,197,94,0.15)"
            />
            <path
              d="M7,8 C11,5 14,3 12,0 C9,2 8,5 7,8Z"
              stroke="#00F2FF"
              strokeWidth="0.8"
              fill="rgba(0,242,255,0.1)"
            />
          </g>
        </g>

        {/* === VELTIA TEXT with green glow === */}
        <text
          x="150"
          y="258"
          textAnchor="middle"
          fontFamily="Rajdhani, sans-serif"
          fontWeight="700"
          fontSize="52"
          fill="url(#avatarBrandGrad)"
          letterSpacing="8"
          filter="url(#leaf-soft)"
        >
          VELTIA
        </text>

        {/* === TAGLINE in green === */}
        <text
          x="150"
          y="282"
          textAnchor="middle"
          fontFamily="Rajdhani, sans-serif"
          fontWeight="500"
          fontSize="11"
          fill="#22C55E"
          letterSpacing="4"
          opacity="0.8"
        >
          TECNOLOGIA QUE TRANSFORMA
        </text>

        {/* GREEN OPS badge */}
        <rect x="112" y="292" width="76" height="18" rx="9" fill="none" stroke="#22C55E" strokeWidth="0.8" opacity="0.5" />
        <text
          x="150"
          y="304"
          textAnchor="middle"
          fontFamily="Roboto Mono, monospace"
          fontWeight="400"
          fontSize="8"
          fill="#22C55E"
          letterSpacing="2"
          opacity="0.7"
        >
          GREEN OPS
        </text>
      </svg>
    </div>
  );
}
