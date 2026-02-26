"use client";

import { useMemo } from "react";

interface Spore {
  id: number;
  left: string;
  size: number;
  color: string;
  glowColor: string;
  opacity: number;
  duration: number;
  delay: number;
  sway: number;
  glowDuration: number;
  mobileHidden: boolean;
}

const COLORS = [
  { bg: "#22C55E", glow: "rgba(34,197,94,0.5)" },   // green
  { bg: "#22C55E", glow: "rgba(34,197,94,0.5)" },   // green
  { bg: "#22C55E", glow: "rgba(34,197,94,0.5)" },   // green
  { bg: "#00F2FF", glow: "rgba(0,242,255,0.5)" },    // cyan
  { bg: "#00F2FF", glow: "rgba(0,242,255,0.5)" },    // cyan
  { bg: "#4ADE80", glow: "rgba(74,222,128,0.5)" },   // light green
];

function generateSpores(count: number): Spore[] {
  const spores: Spore[] = [];
  for (let i = 0; i < count; i++) {
    const colorIdx = i % COLORS.length;
    spores.push({
      id: i,
      left: `${(i * 4.17 + (i * 7.3) % 10) % 100}%`,
      size: 2 + (i * 1.7) % 4.5,
      color: COLORS[colorIdx].bg,
      glowColor: COLORS[colorIdx].glow,
      opacity: 0.15 + (i * 0.37) % 0.25,
      duration: 22 + (i * 3.1) % 18,
      delay: (i * 2.7) % 20,
      sway: 15 + (i * 4.3) % 30,
      glowDuration: 2 + (i * 0.8) % 3,
      mobileHidden: i >= 12,
    });
  }
  return spores;
}

export default function BioSpores() {
  const spores = useMemo(() => generateSpores(25), []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {spores.map((s) => (
        <div
          key={s.id}
          className={s.mobileHidden ? "hidden md:block" : undefined}
          style={{
            position: "absolute",
            left: s.left,
            bottom: "-10px",
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: "50%",
            background: s.color,
            opacity: 0,
            willChange: "transform, opacity",
            ["--spore-opacity" as string]: s.opacity,
            ["--sway" as string]: `${s.sway}px`,
            ["--spore-color" as string]: s.glowColor,
            animation: `bioFloat ${s.duration}s linear ${s.delay}s infinite, sporeGlow ${s.glowDuration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
