"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

/*
  BioNetwork — Bioluminescent fern separator
  SVG ferns that grow progressively as the user scrolls through them.
  Uses useScroll + useTransform for scroll-linked animation.
*/

function Frond({
  x,
  y,
  angle,
  size,
  progress,
  threshold,
  color,
}: {
  x: number;
  y: number;
  angle: number;
  size: number;
  progress: MotionValue<number>;
  threshold: number;
  color: string;
}) {
  const leafL = `M0,0 C${-size * 0.6},${-size * 0.3} ${-size * 0.8},${-size * 0.1} ${-size},0 C${-size * 0.7},${size * 0.15} ${-size * 0.4},${size * 0.2} 0,0`;
  const leafR = `M0,0 C${size * 0.6},${-size * 0.3} ${size * 0.8},${-size * 0.1} ${size},0 C${size * 0.7},${size * 0.15} ${size * 0.4},${size * 0.2} 0,0`;

  const opacity = useTransform(progress, [threshold, Math.min(threshold + 0.08, 1)], [0, 0.6]);
  const scale = useTransform(progress, [threshold, Math.min(threshold + 0.08, 1)], [0, 1]);

  return (
    <motion.g
      transform={`translate(${x},${y}) rotate(${angle})`}
      style={{ opacity, scale }}
    >
      <path d={leafL} fill={color} opacity={0.5}>
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" />
      </path>
      <path d={leafR} fill={color} opacity={0.5}>
        <animate attributeName="opacity" values="0.35;0.65;0.35" dur="3.5s" repeatCount="indefinite" />
      </path>
      <circle r={1.5} fill={color} opacity={0.8}>
        <animate attributeName="r" values="1;2;1" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
      </circle>
    </motion.g>
  );
}

interface FernSide {
  stem: string;
  fronds: { x: number; y: number; angle: number; size: number }[];
  glowNodes: { cx: number; cy: number; r: number }[];
}

const FERNS: Record<number, { left: FernSide; right: FernSide }> = {
  1: {
    left: {
      stem: "M0,55 C30,52 70,48 120,44 S200,38 260,42 S330,50 380,46 S440,40 500,43",
      fronds: [
        { x: 60, y: 49, angle: -35, size: 14 },
        { x: 100, y: 45, angle: -25, size: 12 },
        { x: 100, y: 45, angle: 20, size: 10 },
        { x: 150, y: 42, angle: -40, size: 16 },
        { x: 200, y: 39, angle: 25, size: 13 },
        { x: 260, y: 42, angle: -20, size: 14 },
        { x: 260, y: 42, angle: 30, size: 12 },
        { x: 320, y: 48, angle: -35, size: 15 },
        { x: 380, y: 46, angle: 20, size: 11 },
        { x: 380, y: 46, angle: -25, size: 13 },
        { x: 440, y: 41, angle: -30, size: 12 },
        { x: 500, y: 43, angle: -20, size: 10 },
      ],
      glowNodes: [
        { cx: 120, cy: 44, r: 3 },
        { cx: 260, cy: 42, r: 3.5 },
        { cx: 380, cy: 46, r: 2.5 },
        { cx: 500, cy: 43, r: 3 },
      ],
    },
    right: {
      stem: "M1440,50 C1410,46 1370,42 1320,45 S1240,50 1180,44 S1110,38 1060,42 S1000,48 950,44",
      fronds: [
        { x: 1380, y: 44, angle: 30, size: 13 },
        { x: 1340, y: 43, angle: -25, size: 11 },
        { x: 1340, y: 43, angle: 35, size: 14 },
        { x: 1280, y: 47, angle: 20, size: 12 },
        { x: 1220, y: 48, angle: -30, size: 15 },
        { x: 1180, y: 44, angle: 25, size: 13 },
        { x: 1180, y: 44, angle: -35, size: 11 },
        { x: 1120, y: 40, angle: 30, size: 14 },
        { x: 1060, y: 42, angle: -20, size: 12 },
        { x: 1060, y: 42, angle: 25, size: 10 },
        { x: 1000, y: 46, angle: 35, size: 13 },
        { x: 950, y: 44, angle: -25, size: 11 },
      ],
      glowNodes: [
        { cx: 1320, cy: 45, r: 3 },
        { cx: 1180, cy: 44, r: 3.5 },
        { cx: 1060, cy: 42, r: 2.5 },
        { cx: 950, cy: 44, r: 3 },
      ],
    },
  },
  2: {
    left: {
      stem: "M0,40 C40,44 90,50 140,46 S220,38 280,42 S360,48 420,44 S480,38 540,42",
      fronds: [
        { x: 70, y: 47, angle: -30, size: 13 },
        { x: 110, y: 48, angle: 25, size: 11 },
        { x: 140, y: 46, angle: -40, size: 15 },
        { x: 140, y: 46, angle: 20, size: 12 },
        { x: 210, y: 40, angle: -25, size: 13 },
        { x: 280, y: 42, angle: 30, size: 14 },
        { x: 280, y: 42, angle: -20, size: 11 },
        { x: 350, y: 46, angle: -35, size: 12 },
        { x: 420, y: 44, angle: 25, size: 13 },
        { x: 480, y: 39, angle: -25, size: 14 },
        { x: 540, y: 42, angle: 20, size: 11 },
      ],
      glowNodes: [
        { cx: 140, cy: 46, r: 3 },
        { cx: 280, cy: 42, r: 3.5 },
        { cx: 420, cy: 44, r: 3 },
        { cx: 540, cy: 42, r: 2.5 },
      ],
    },
    right: {
      stem: "M1440,45 C1400,42 1350,48 1290,44 S1210,38 1150,43 S1080,50 1020,45 S960,40 900,44",
      fronds: [
        { x: 1370, y: 44, angle: 35, size: 14 },
        { x: 1320, y: 46, angle: -25, size: 12 },
        { x: 1290, y: 44, angle: 30, size: 13 },
        { x: 1290, y: 44, angle: -20, size: 11 },
        { x: 1230, y: 40, angle: 25, size: 15 },
        { x: 1150, y: 43, angle: -30, size: 13 },
        { x: 1150, y: 43, angle: 35, size: 11 },
        { x: 1080, y: 48, angle: -25, size: 12 },
        { x: 1020, y: 45, angle: 20, size: 14 },
        { x: 960, y: 42, angle: -35, size: 12 },
        { x: 900, y: 44, angle: 25, size: 10 },
      ],
      glowNodes: [
        { cx: 1290, cy: 44, r: 3 },
        { cx: 1150, cy: 43, r: 3 },
        { cx: 1020, cy: 45, r: 3.5 },
        { cx: 900, cy: 44, r: 2.5 },
      ],
    },
  },
  3: {
    left: {
      stem: "M0,48 C50,44 100,52 160,46 S240,40 300,44 S370,50 430,45 S490,40 550,44",
      fronds: [
        { x: 80, y: 48, angle: -30, size: 12 },
        { x: 130, y: 50, angle: 25, size: 14 },
        { x: 160, y: 46, angle: -35, size: 16 },
        { x: 160, y: 46, angle: 20, size: 11 },
        { x: 230, y: 41, angle: -25, size: 13 },
        { x: 300, y: 44, angle: 30, size: 12 },
        { x: 300, y: 44, angle: -20, size: 14 },
        { x: 370, y: 48, angle: -30, size: 11 },
        { x: 430, y: 45, angle: 25, size: 13 },
        { x: 490, y: 41, angle: -35, size: 12 },
        { x: 550, y: 44, angle: 20, size: 10 },
      ],
      glowNodes: [
        { cx: 160, cy: 46, r: 3.5 },
        { cx: 300, cy: 44, r: 3 },
        { cx: 430, cy: 45, r: 2.5 },
        { cx: 550, cy: 44, r: 3 },
      ],
    },
    right: {
      stem: "M1440,42 C1390,46 1330,40 1270,44 S1200,50 1140,45 S1070,38 1010,43 S950,48 890,44",
      fronds: [
        { x: 1360, y: 44, angle: 30, size: 13 },
        { x: 1300, y: 42, angle: -25, size: 14 },
        { x: 1270, y: 44, angle: 35, size: 12 },
        { x: 1270, y: 44, angle: -30, size: 11 },
        { x: 1200, y: 48, angle: 25, size: 15 },
        { x: 1140, y: 45, angle: -20, size: 13 },
        { x: 1140, y: 45, angle: 30, size: 11 },
        { x: 1070, y: 40, angle: -35, size: 12 },
        { x: 1010, y: 43, angle: 25, size: 14 },
        { x: 950, y: 46, angle: -25, size: 11 },
        { x: 890, y: 44, angle: 20, size: 12 },
      ],
      glowNodes: [
        { cx: 1270, cy: 44, r: 3 },
        { cx: 1140, cy: 45, r: 3.5 },
        { cx: 1010, cy: 43, r: 3 },
        { cx: 890, cy: 44, r: 2.5 },
      ],
    },
  },
};

function GlowNode({
  cx,
  cy,
  r,
  color,
  progress,
  threshold,
}: {
  cx: number;
  cy: number;
  r: number;
  color: string;
  progress: MotionValue<number>;
  threshold: number;
  filterId: string;
}) {
  const opacity = useTransform(progress, [threshold, Math.min(threshold + 0.06, 1)], [0, 0.7]);
  const scale = useTransform(progress, [threshold, Math.min(threshold + 0.06, 1)], [0, 1]);

  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      fill={color}
      style={{ opacity, scale }}
    >
      <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite" />
      <animate attributeName="r" values={`${r};${r * 1.6};${r}`} dur="3s" repeatCount="indefinite" />
    </motion.circle>
  );
}

interface BioNetworkProps {
  variant?: 1 | 2 | 3;
  flip?: boolean;
}

export default function BioNetwork({ variant = 1, flip = false }: BioNetworkProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.3"],
  });

  const stemPathLength = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const stemOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  const data = FERNS[variant];
  const sides = [data.left, data.right];
  const colors = ["#22C55E", "#00F2FF", "#4ADE80"];

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 90"
        fill="none"
        className="w-full h-20 md:h-24"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id={`fern-glow-${variant}`}>
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {sides.map((side, sideIdx) => (
          <g key={sideIdx}>
            {/* Stem grows with scroll */}
            <motion.path
              d={side.stem}
              stroke="rgba(34,197,94,0.3)"
              strokeWidth={1.5}
              fill="none"
              strokeLinecap="round"
              filter={`url(#fern-glow-${variant})`}
              style={{
                pathLength: stemPathLength,
                opacity: stemOpacity,
              }}
            />

            {/* Fronds appear progressively */}
            {side.fronds.map((frond, i) => (
              <Frond
                key={`frond-${sideIdx}-${i}`}
                x={frond.x}
                y={frond.y}
                angle={frond.angle}
                size={frond.size}
                progress={scrollYProgress}
                threshold={0.1 + (i / side.fronds.length) * 0.6}
                color={colors[i % colors.length]}
              />
            ))}

            {/* Glow nodes appear last */}
            {side.glowNodes.map((node, i) => (
              <GlowNode
                key={`glow-${sideIdx}-${i}`}
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                color={colors[i % colors.length]}
                progress={scrollYProgress}
                threshold={0.4 + (i / side.glowNodes.length) * 0.4}
                filterId={`fern-glow-${variant}`}
              />
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}
