"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Leaf, Zap, Cloud, Recycle } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const PILLARS = [
  { icon: Leaf, label: "Menos papel" },
  { icon: Zap, label: "Menos energia" },
  { icon: Cloud, label: "Menos cloud waste" },
  { icon: Recycle, label: "Menos e-waste" },
] as const;

const IMPACT_STATS = [
  {
    metric: "100 kg CO\u2082/a\u00f1o",
    description: "menos por cada instancia cloud apagada",
  },
  {
    metric: "500 kg papel/a\u00f1o",
    description: "menos por cada proceso digitalizado",
  },
  {
    metric: "60% menos",
    description: "consumo energetico por sistema modernizado",
  },
] as const;

/* SVG tendrils - tech-organic paths that grow from edges */
const TENDRILS = [
  // Left side tendrils
  { d: "M0,120 C40,100 80,140 130,110 S200,130 250,100 S310,80 340,95", from: "left" },
  { d: "M0,220 C50,200 100,240 160,210 S230,190 280,220", from: "left" },
  { d: "M0,320 C30,300 90,340 140,310 S200,290 240,315 S290,330 320,300", from: "left" },
  // Right side tendrils
  { d: "M1200,150 C1160,130 1110,160 1060,140 S1000,120 950,145 S900,160 870,135", from: "right" },
  { d: "M1200,260 C1150,240 1100,270 1040,250 S980,230 930,255", from: "right" },
  { d: "M1200,370 C1170,350 1120,380 1070,360 S1010,340 960,365 S910,380 880,355", from: "right" },
];

/* Luminous nodes on tendril intersections */
const NODES = [
  { cx: 130, cy: 110, r: 4, color: "#22C55E" },
  { cx: 250, cy: 100, r: 3, color: "#00F2FF" },
  { cx: 340, cy: 95, r: 3.5, color: "#4ADE80" },
  { cx: 160, cy: 210, r: 3, color: "#00F2FF" },
  { cx: 280, cy: 220, r: 4, color: "#22C55E" },
  { cx: 140, cy: 310, r: 3, color: "#22C55E" },
  { cx: 320, cy: 300, r: 3.5, color: "#00F2FF" },
  { cx: 1060, cy: 140, r: 4, color: "#22C55E" },
  { cx: 870, cy: 135, r: 3, color: "#00F2FF" },
  { cx: 930, cy: 255, r: 3.5, color: "#4ADE80" },
  { cx: 1070, cy: 360, r: 3, color: "#22C55E" },
  { cx: 880, cy: 355, r: 4, color: "#00F2FF" },
];

interface LocalSpore {
  id: number;
  left: string;
  top: string;
  size: number;
  color: string;
  glowColor: string;
  duration: number;
  delay: number;
}

function generateLocalSpores(count: number): LocalSpore[] {
  const colors = [
    { bg: "#22C55E", glow: "rgba(34,197,94,0.6)" },
    { bg: "#00F2FF", glow: "rgba(0,242,255,0.6)" },
    { bg: "#4ADE80", glow: "rgba(74,222,128,0.6)" },
  ];
  const spores: LocalSpore[] = [];
  for (let i = 0; i < count; i++) {
    const c = colors[i % colors.length];
    spores.push({
      id: i,
      left: `${5 + (i * 9.7) % 90}%`,
      top: `${10 + (i * 13.3) % 80}%`,
      size: 3 + (i * 1.5) % 5,
      color: c.bg,
      glowColor: c.glow,
      duration: 3 + (i * 0.7) % 4,
      delay: (i * 0.9) % 3,
    });
  }
  return spores;
}

export default function GreenOps() {
  const localSpores = useMemo(() => generateLocalSpores(10), []);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Multi-layer green ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: [
            "radial-gradient(ellipse at 20% 30%, rgba(34,197,94,0.06) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 70%, rgba(0,242,255,0.04) 0%, transparent 50%)",
            "radial-gradient(ellipse at 50% 50%, rgba(34,197,94,0.03) 0%, transparent 60%)",
          ].join(", "),
        }}
      />

      {/* SVG tendrils - tech-organic background */}
      <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden="true">
        <motion.svg
          viewBox="0 0 1200 500"
          fill="none"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <defs>
            <filter id="tendril-glow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Tendril paths */}
          {TENDRILS.map((tendril, i) => (
            <motion.path
              key={i}
              d={tendril.d}
              stroke={i % 3 === 0 ? "rgba(34,197,94,0.25)" : i % 3 === 1 ? "rgba(0,242,255,0.2)" : "rgba(74,222,128,0.2)"}
              strokeWidth={1.5}
              fill="none"
              filter="url(#tendril-glow)"
              strokeLinecap="round"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    pathLength: { duration: 2.5, delay: i * 0.2, ease: "easeOut" },
                    opacity: { duration: 0.5, delay: i * 0.2 },
                  },
                },
              }}
            />
          ))}

          {/* Luminous nodes */}
          {NODES.map((node, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill={node.color}
              filter="url(#tendril-glow)"
              variants={{
                hidden: { scale: 0, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 0.7,
                  transition: { duration: 0.4, delay: 1.5 + i * 0.08 },
                },
              }}
            >
              <animate
                attributeName="opacity"
                values="0.4;0.9;0.4"
                dur={`${2 + (i % 3) * 0.8}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values={`${node.r};${node.r * 1.5};${node.r}`}
                dur={`${3 + (i % 4) * 0.6}s`}
                repeatCount="indefinite"
              />
            </motion.circle>
          ))}
        </motion.svg>
      </div>

      {/* Local bioluminescent spores */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {localSpores.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full"
            style={{
              left: s.left,
              top: s.top,
              width: `${s.size}px`,
              height: `${s.size}px`,
              background: s.color,
              ["--spore-color" as string]: s.glowColor,
              animation: `bioGlow ${s.duration}s ease-in-out ${s.delay}s infinite, sporeGlow ${s.duration}s ease-in-out ${s.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionTitle
            subtitle="impacto ambiental"
            title="GREEN OPS"
          />

          {/* Intro text */}
          <motion.p
            variants={fadeInUp}
            className="text-center text-ice-muted max-w-2xl mx-auto mb-16 text-base leading-relaxed"
          >
            Cada servicio que implementamos tiene impacto ambiental medible.
          </motion.p>

          {/* 4 pillars grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.label}
                  variants={fadeInUp}
                  className="glass-card-bio p-6 text-center group"
                >
                  <div className="inline-block" style={{ animation: "bioIconPulse 4s ease-in-out infinite" }}>
                    <Icon size={32} className="text-green mx-auto mb-3" />
                  </div>
                  <p className="font-mono text-sm text-ice">{pillar.label}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Impact stats */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {IMPACT_STATS.map((stat) => (
              <motion.div
                key={stat.metric}
                variants={fadeInUp}
                className="text-center"
              >
                <p className="font-display font-bold text-2xl md:text-3xl text-gradient-green text-green-glow">
                  {stat.metric}
                </p>
                <p className="text-sm text-ice-muted mt-2">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom badge */}
          <motion.div variants={fadeInUp} className="text-center">
            <span
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-mono bg-green/10 text-green border border-green/25"
              style={{ animation: "sporeGlow 4s ease-in-out infinite", ["--spore-color" as string]: "rgba(34,197,94,0.3)" }}
            >
              <Leaf size={16} />
              Comprometidos con la sostenibilidad desde dia 1
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
