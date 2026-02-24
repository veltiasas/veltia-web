let logoIdCounter = 0;

interface VeltiaLogoProps {
  variant?: "dark" | "light";
  showTagline?: boolean;
  width?: number;
  className?: string;
  id?: string;
}

export default function VeltiaLogo({
  variant = "dark",
  showTagline = true,
  width = 300,
  className = "",
  id,
}: VeltiaLogoProps) {
  const gradientId = id || `brandGradient-${++logoIdCounter}`;
  const scale = width / 300;
  const height = showTagline ? 320 * scale : 260 * scale;

  // Colors based on variant
  const primary = variant === "dark" ? "#E0F7FA" : "#0A0E14";
  const circuit = variant === "dark" ? "#00F2FF" : "#0A0E14";
  const accent = "#FF8C42";
  const accentDeep = "#FF6B35";
  const wing = variant === "dark" ? "#00F2FF" : "#1A222D";
  const wingLight = variant === "dark" ? "rgba(0,242,255,0.4)" : "rgba(26,34,45,0.3)";
  const taglineColor = "#00F2FF";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* === PHOENIX BIRD + V SHAPE === */}
      <g transform="translate(150, 120)">
        {/* V shape - main structure */}
        <path
          d="M-8,-85 L-45,45 L-35,45 L0,-55 L35,45 L45,45 L8,-85 Z"
          fill={primary}
          opacity="0.9"
        />

        {/* Circuit lines on V - left side */}
        <line x1="-20" y1="-40" x2="-35" y2="10" stroke={circuit} strokeWidth="1" opacity="0.6" />
        <line x1="-25" y1="-20" x2="-40" y2="-20" stroke={circuit} strokeWidth="1" opacity="0.4" />
        <circle cx="-40" cy="-20" r="2" fill={circuit} opacity="0.6" />
        <line x1="-30" y1="0" x2="-48" y2="0" stroke={circuit} strokeWidth="1" opacity="0.4" />
        <circle cx="-48" cy="0" r="2" fill={circuit} opacity="0.6" />
        <line x1="-22" y1="-50" x2="-38" y2="-50" stroke={circuit} strokeWidth="1" opacity="0.3" />
        <circle cx="-38" cy="-50" r="1.5" fill={circuit} opacity="0.5" />

        {/* Circuit lines on V - right side */}
        <line x1="20" y1="-40" x2="35" y2="10" stroke={circuit} strokeWidth="1" opacity="0.6" />
        <line x1="25" y1="-20" x2="42" y2="-20" stroke={circuit} strokeWidth="1" opacity="0.4" />
        <circle cx="42" cy="-20" r="2" fill={circuit} opacity="0.6" />
        <line x1="30" y1="5" x2="50" y2="5" stroke={circuit} strokeWidth="1" opacity="0.4" />
        <circle cx="50" cy="5" r="2" fill={circuit} opacity="0.6" />

        {/* Circuit node at center bottom */}
        <circle cx="0" cy="-55" r="3" fill={accent} opacity="0.8" />

        {/* === LEFT WING === */}
        {/* Main wing feathers - sweeping left and up */}
        <path
          d="M-15,-60 C-40,-75 -80,-90 -110,-80
             C-95,-75 -75,-65 -55,-55
             C-75,-70 -100,-78 -105,-75
             C-85,-68 -65,-55 -45,-45
             C-60,-58 -85,-68 -95,-65
             C-75,-55 -55,-42 -35,-35"
          stroke={wing}
          strokeWidth="1.5"
          fill="none"
          opacity="0.9"
        />
        {/* Wing fill - subtle */}
        <path
          d="M-15,-60 C-40,-75 -80,-90 -110,-80
             C-75,-55 -45,-40 -25,-30 Z"
          fill={wingLight}
        />
        {/* Wing circuit details */}
        <line x1="-50" y1="-65" x2="-70" y2="-72" stroke={circuit} strokeWidth="0.8" opacity="0.4" />
        <circle cx="-70" cy="-72" r="1.5" fill={circuit} opacity="0.5" />
        <line x1="-40" y1="-55" x2="-55" y2="-60" stroke={circuit} strokeWidth="0.8" opacity="0.3" />

        {/* === RIGHT WING === */}
        <path
          d="M15,-60 C40,-75 80,-90 110,-80
             C95,-75 75,-65 55,-55
             C75,-70 100,-78 105,-75
             C85,-68 65,-55 45,-45
             C60,-58 85,-68 95,-65
             C75,-55 55,-42 35,-35"
          stroke={wing}
          strokeWidth="1.5"
          fill="none"
          opacity="0.9"
        />
        <path
          d="M15,-60 C40,-75 80,-90 110,-80
             C75,-55 45,-40 25,-30 Z"
          fill={wingLight}
        />
        {/* Wing circuit details */}
        <line x1="50" y1="-65" x2="70" y2="-72" stroke={circuit} strokeWidth="0.8" opacity="0.4" />
        <circle cx="70" cy="-72" r="1.5" fill={circuit} opacity="0.5" />
        <line x1="40" y1="-55" x2="55" y2="-60" stroke={circuit} strokeWidth="0.8" opacity="0.3" />

        {/* === BIRD HEAD === */}
        {/* Head shape */}
        <path
          d="M-3,-75 C-2,-82 2,-82 3,-75 C5,-72 3,-68 0,-66 C-3,-68 -5,-72 -3,-75"
          fill={primary}
          opacity="0.9"
        />
        {/* Eye */}
        <circle cx="0" cy="-74" r="1.5" fill={accent} />
        {/* Beak */}
        <path d="M0,-70 L3,-66 L-3,-66 Z" fill={accent} opacity="0.7" />

        {/* === TAIL FEATHERS === */}
        <path
          d="M-8,35 C-15,55 -20,70 -18,80"
          stroke={wing}
          strokeWidth="1.2"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M0,40 C0,60 0,75 0,85"
          stroke={wing}
          strokeWidth="1.2"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M8,35 C15,55 20,70 18,80"
          stroke={wing}
          strokeWidth="1.2"
          fill="none"
          opacity="0.5"
        />

        {/* === SMALL ICONS === */}
        {/* Document icon - left */}
        <g transform="translate(-60, -15)" opacity="0.5">
          <rect x="0" y="0" width="12" height="15" rx="1" stroke={circuit} strokeWidth="1" fill="none" />
          <line x1="3" y1="4" x2="9" y2="4" stroke={circuit} strokeWidth="0.8" />
          <line x1="3" y1="7" x2="9" y2="7" stroke={circuit} strokeWidth="0.8" />
          <line x1="3" y1="10" x2="7" y2="10" stroke={circuit} strokeWidth="0.8" />
        </g>

        {/* Cloud icon - right */}
        <g transform="translate(48, -12)" opacity="0.5">
          <path
            d="M4,10 C1,10 0,8 0,6 C0,3.5 2,2 4,2 C4.5,0.5 6,0 8,0 C10.5,0 12,1.5 12,3.5 C14,3.5 15,5 15,7 C15,9 13.5,10 12,10 Z"
            stroke={circuit}
            strokeWidth="1"
            fill="none"
          />
        </g>
      </g>

      {/* === VELTIA TEXT === */}
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={accentDeep} />
          <stop offset="40%" stopColor={accent} />
          <stop offset="100%" stopColor="#00F2FF" />
        </linearGradient>
      </defs>
      <text
        x="150"
        y="258"
        textAnchor="middle"
        fontFamily="Rajdhani, sans-serif"
        fontWeight="700"
        fontSize="52"
        fill={`url(#${gradientId})`}
        letterSpacing="8"
      >
        VELTIA
      </text>

      {/* === TAGLINE === */}
      {showTagline && (
        <text
          x="150"
          y="282"
          textAnchor="middle"
          fontFamily="Rajdhani, sans-serif"
          fontWeight="500"
          fontSize="11"
          fill={taglineColor}
          letterSpacing="4"
          opacity="0.8"
        >
          TECNOLOGIA QUE TRANSFORMA
        </text>
      )}
    </svg>
  );
}
