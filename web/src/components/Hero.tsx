"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Leaf } from "lucide-react";
import CipherText from "@/components/ui/CipherText";
import NeonButton from "@/components/ui/NeonButton";
import { fadeIn, fadeInUp } from "@/lib/animations";

interface Particle {
  id: number;
  left: string;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
  glowColor: string;
  sway: number;
  glowDuration: number;
  isSpecial: boolean;
}

const PARTICLE_COLORS = [
  { bg: "#22C55E", glow: "rgba(34,197,94,0.5)" },   // green (40%)
  { bg: "#22C55E", glow: "rgba(34,197,94,0.5)" },
  { bg: "#00F2FF", glow: "rgba(0,242,255,0.5)" },    // cyan (35%)
  { bg: "#00F2FF", glow: "rgba(0,242,255,0.5)" },
  { bg: "#FF8C42", glow: "rgba(255,140,66,0.5)" },   // sunset (25%)
];

function generateParticles(count: number): Particle[] {
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    const colorIdx = i % PARTICLE_COLORS.length;
    const isSpecial = i % 6 === 0;
    particles.push({
      id: i,
      left: `${(i * 3.33 + (i * 7.1) % 10) % 100}%`,
      size: isSpecial ? 7 + (i * 1.3) % 4 : 2 + (i * 1.7) % 5,
      opacity: isSpecial ? 0.1 + (i * 0.11) % 0.15 : 0.15 + (i * 0.37) % 0.25,
      duration: 15 + (i * 2.3) % 12,
      delay: (i * 1.7) % 12,
      color: PARTICLE_COLORS[colorIdx].bg,
      glowColor: PARTICLE_COLORS[colorIdx].glow,
      sway: 15 + (i * 3.7) % 35,
      glowDuration: 2 + (i * 0.6) % 3,
      isSpecial,
    });
  }
  return particles;
}

export default function Hero() {
  const [cipherDone, setCipherDone] = useState(false);
  const particles = useMemo(() => generateParticles(30), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle keyframes */}
      <style>{`
        @keyframes heroFloatBio {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          8% {
            opacity: var(--particle-opacity);
          }
          25% {
            transform: translateY(75vh) translateX(var(--hero-sway, 20px));
          }
          50% {
            transform: translateY(50vh) translateX(calc(var(--hero-sway, 20px) * -0.7));
          }
          75% {
            transform: translateY(25vh) translateX(var(--hero-sway, 20px));
          }
          92% {
            opacity: var(--particle-opacity);
          }
          100% {
            transform: translateY(-5vh) translateX(0);
            opacity: 0;
          }
        }
        @keyframes bobUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(8px); opacity: 0.3; }
        }
      `}</style>

      {/* Background: tech grid overlay */}
      <div className="absolute inset-0 tech-grid-bg" aria-hidden="true" />

      {/* Bioluminescent floating particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: p.left,
              bottom: "-10px",
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              ["--particle-opacity" as string]: p.opacity,
              ["--hero-sway" as string]: `${p.sway}px`,
              ["--spore-color" as string]: p.glowColor,
              opacity: 0,
              willChange: "transform, opacity",
              filter: p.isSpecial ? `blur(1px)` : undefined,
              animation: `heroFloatBio ${p.duration}s linear ${p.delay}s infinite, sporeGlow ${p.glowDuration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Giant bioluminescent leaves on both sides */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block" aria-hidden="true">
        <motion.svg
          viewBox="0 0 1440 900"
          fill="none"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          initial="hidden"
          animate={cipherDone ? "visible" : "hidden"}
        >
          <defs>
            <filter id="leaf-glow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="leaf-glow-soft">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* === LEFT SIDE — Giant branch with leaves === */}
          <g filter="url(#leaf-glow)">
            {/* Main branch */}
            <motion.path
              d="M-20,450 C30,430 80,400 140,380 S240,340 300,320 S380,290 420,300"
              stroke="rgba(34,197,94,0.25)"
              strokeWidth={2.5}
              strokeLinecap="round"
              fill="none"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: { pathLength: 1, opacity: 1, transition: { duration: 3, delay: 0.5, ease: "easeOut" } },
              }}
            />
            {/* Sub-branch up */}
            <motion.path
              d="M140,380 C120,340 100,300 80,250 S60,180 70,140"
              stroke="rgba(34,197,94,0.2)"
              strokeWidth={1.8}
              strokeLinecap="round"
              fill="none"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: { pathLength: 1, opacity: 1, transition: { duration: 2.5, delay: 1.5, ease: "easeOut" } },
              }}
            />
            {/* Sub-branch down */}
            <motion.path
              d="M200,355 C190,400 170,460 140,520 S100,600 80,660"
              stroke="rgba(34,197,94,0.18)"
              strokeWidth={1.5}
              strokeLinecap="round"
              fill="none"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: { pathLength: 1, opacity: 1, transition: { duration: 2.5, delay: 1.8, ease: "easeOut" } },
              }}
            />
          </g>

          {/* Left large leaves */}
          {[
            { d: "M80,360 C40,330 20,300 30,270 C50,280 70,310 80,360Z", delay: 1.2, color: "rgba(34,197,94,0.12)" },
            { d: "M140,380 C100,350 70,320 80,290 C110,310 130,340 140,380Z", delay: 1.5, color: "rgba(0,242,255,0.08)" },
            { d: "M120,330 C90,290 80,240 100,200 C120,230 130,280 120,330Z", delay: 1.8, color: "rgba(34,197,94,0.1)" },
            { d: "M100,280 C60,250 30,220 50,180 C80,210 100,240 100,280Z", delay: 2.1, color: "rgba(74,222,128,0.09)" },
            { d: "M80,220 C50,190 40,150 60,120 C80,150 90,180 80,220Z", delay: 2.4, color: "rgba(0,242,255,0.07)" },
            { d: "M160,400 C130,430 100,470 80,520 C110,480 140,440 160,400Z", delay: 2.0, color: "rgba(34,197,94,0.1)" },
            { d: "M140,460 C110,500 90,550 80,600 C110,560 130,510 140,460Z", delay: 2.3, color: "rgba(0,242,255,0.07)" },
            { d: "M240,340 C210,310 190,270 200,240 C220,270 240,300 240,340Z", delay: 1.9, color: "rgba(34,197,94,0.1)" },
            { d: "M300,320 C280,290 270,250 290,220 C300,260 310,290 300,320Z", delay: 2.2, color: "rgba(74,222,128,0.08)" },
            { d: "M280,350 C260,390 240,430 230,470 C260,440 280,390 280,350Z", delay: 2.4, color: "rgba(34,197,94,0.09)" },
          ].map((leaf, i) => (
            <motion.path
              key={`ll-${i}`}
              d={leaf.d}
              fill={leaf.color}
              filter="url(#leaf-glow-soft)"
              variants={{
                hidden: { opacity: 0, scale: 0.3 },
                visible: { opacity: 1, scale: 1, transition: { duration: 1.2, delay: leaf.delay, ease: "easeOut" } },
              }}
            >
              <animate attributeName="opacity" values={`${0.5 + (i % 3) * 0.1};${0.8 + (i % 3) * 0.1};${0.5 + (i % 3) * 0.1}`} dur={`${4 + (i % 3)}s`} repeatCount="indefinite" />
            </motion.path>
          ))}

          {/* Left glow nodes on branches */}
          {[
            { cx: 70, cy: 360, r: 4 }, { cx: 140, cy: 380, r: 5 }, { cx: 100, cy: 280, r: 3.5 },
            { cx: 80, cy: 200, r: 3 }, { cx: 240, cy: 340, r: 4 }, { cx: 300, cy: 320, r: 3.5 },
            { cx: 140, cy: 460, r: 3 }, { cx: 80, cy: 550, r: 3.5 },
          ].map((n, i) => (
            <motion.circle
              key={`ln-${i}`}
              cx={n.cx} cy={n.cy} r={n.r}
              fill={i % 2 === 0 ? "#22C55E" : "#00F2FF"}
              filter="url(#leaf-glow)"
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 0.7, scale: 1, transition: { duration: 0.6, delay: 2 + i * 0.15 } },
              }}
            >
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur={`${2.5 + (i % 3) * 0.5}s`} repeatCount="indefinite" />
              <animate attributeName="r" values={`${n.r};${n.r * 1.5};${n.r}`} dur={`${3 + (i % 3) * 0.7}s`} repeatCount="indefinite" />
            </motion.circle>
          ))}

          {/* === RIGHT SIDE — Giant branch with leaves (mirrored) === */}
          <g filter="url(#leaf-glow)">
            <motion.path
              d="M1460,450 C1410,430 1360,400 1300,380 S1200,340 1140,320 S1060,290 1020,300"
              stroke="rgba(34,197,94,0.25)"
              strokeWidth={2.5}
              strokeLinecap="round"
              fill="none"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: { pathLength: 1, opacity: 1, transition: { duration: 3, delay: 0.8, ease: "easeOut" } },
              }}
            />
            <motion.path
              d="M1300,380 C1320,340 1340,300 1360,250 S1380,180 1370,140"
              stroke="rgba(34,197,94,0.2)"
              strokeWidth={1.8}
              strokeLinecap="round"
              fill="none"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: { pathLength: 1, opacity: 1, transition: { duration: 2.5, delay: 1.8, ease: "easeOut" } },
              }}
            />
            <motion.path
              d="M1240,355 C1250,400 1270,460 1300,520 S1340,600 1360,660"
              stroke="rgba(34,197,94,0.18)"
              strokeWidth={1.5}
              strokeLinecap="round"
              fill="none"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: { pathLength: 1, opacity: 1, transition: { duration: 2.5, delay: 2.1, ease: "easeOut" } },
              }}
            />
          </g>

          {/* Right large leaves */}
          {[
            { d: "M1360,360 C1400,330 1420,300 1410,270 C1390,280 1370,310 1360,360Z", delay: 1.4, color: "rgba(34,197,94,0.12)" },
            { d: "M1300,380 C1340,350 1370,320 1360,290 C1330,310 1310,340 1300,380Z", delay: 1.7, color: "rgba(0,242,255,0.08)" },
            { d: "M1320,330 C1350,290 1360,240 1340,200 C1320,230 1310,280 1320,330Z", delay: 2.0, color: "rgba(34,197,94,0.1)" },
            { d: "M1340,280 C1380,250 1410,220 1390,180 C1360,210 1340,240 1340,280Z", delay: 2.3, color: "rgba(74,222,128,0.09)" },
            { d: "M1360,220 C1390,190 1400,150 1380,120 C1360,150 1350,180 1360,220Z", delay: 2.6, color: "rgba(0,242,255,0.07)" },
            { d: "M1280,400 C1310,430 1340,470 1360,520 C1330,480 1300,440 1280,400Z", delay: 2.2, color: "rgba(34,197,94,0.1)" },
            { d: "M1300,460 C1330,500 1350,550 1360,600 C1330,560 1310,510 1300,460Z", delay: 2.5, color: "rgba(0,242,255,0.07)" },
            { d: "M1200,340 C1230,310 1250,270 1240,240 C1220,270 1200,300 1200,340Z", delay: 2.1, color: "rgba(34,197,94,0.1)" },
            { d: "M1140,320 C1160,290 1170,250 1150,220 C1140,260 1130,290 1140,320Z", delay: 2.4, color: "rgba(74,222,128,0.08)" },
            { d: "M1160,350 C1180,390 1200,430 1210,470 C1180,440 1160,390 1160,350Z", delay: 2.6, color: "rgba(34,197,94,0.09)" },
          ].map((leaf, i) => (
            <motion.path
              key={`rl-${i}`}
              d={leaf.d}
              fill={leaf.color}
              filter="url(#leaf-glow-soft)"
              variants={{
                hidden: { opacity: 0, scale: 0.3 },
                visible: { opacity: 1, scale: 1, transition: { duration: 1.2, delay: leaf.delay, ease: "easeOut" } },
              }}
            >
              <animate attributeName="opacity" values={`${0.5 + (i % 3) * 0.1};${0.8 + (i % 3) * 0.1};${0.5 + (i % 3) * 0.1}`} dur={`${4 + (i % 3)}s`} repeatCount="indefinite" />
            </motion.path>
          ))}

          {/* Right glow nodes */}
          {[
            { cx: 1370, cy: 360, r: 4 }, { cx: 1300, cy: 380, r: 5 }, { cx: 1340, cy: 280, r: 3.5 },
            { cx: 1360, cy: 200, r: 3 }, { cx: 1200, cy: 340, r: 4 }, { cx: 1140, cy: 320, r: 3.5 },
            { cx: 1300, cy: 460, r: 3 }, { cx: 1360, cy: 550, r: 3.5 },
          ].map((n, i) => (
            <motion.circle
              key={`rn-${i}`}
              cx={n.cx} cy={n.cy} r={n.r}
              fill={i % 2 === 0 ? "#22C55E" : "#00F2FF"}
              filter="url(#leaf-glow)"
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 0.7, scale: 1, transition: { duration: 0.6, delay: 2.3 + i * 0.15 } },
              }}
            >
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur={`${2.5 + (i % 3) * 0.5}s`} repeatCount="indefinite" />
              <animate attributeName="r" values={`${n.r};${n.r * 1.5};${n.r}`} dur={`${3 + (i % 3) * 0.7}s`} repeatCount="indefinite" />
            </motion.circle>
          ))}
        </motion.svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Decorative line - brand gradient */}
        <motion.div
          className="w-20 h-0.5 bg-gradient-brand mx-auto mb-8 rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* VELTIA cipher title */}
        <h1 className="mb-4">
          <CipherText
            text="VELTIA"
            className="font-display font-bold text-6xl md:text-7xl lg:text-8xl text-gradient-brand text-sunset-shadow"
            delay={600}
            onComplete={() => setCipherDone(true)}
          />
        </h1>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl text-neon font-display font-medium mb-6"
          variants={fadeIn}
          initial="hidden"
          animate={cipherDone ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0 }}
        >
          Tecnologia que transforma
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg text-ice-muted max-w-xl mx-auto mb-10"
          variants={fadeIn}
          initial="hidden"
          animate={cipherDone ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Somos tu equipo de tecnologia. Automatizamos procesos, implementamos
          IA y optimizamos tu infraestructura cloud para que tu empresa crezca
          sin friccion.
        </motion.p>

        {/* Green Ops badge */}
        <motion.div
          className="flex justify-center mb-8"
          variants={fadeIn}
          initial="hidden"
          animate={cipherDone ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono bg-green/10 text-green border border-green/25">
            <Leaf size={14} />
            Green Ops — Tecnologia con impacto ambiental medible
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={fadeInUp}
          initial="hidden"
          animate={cipherDone ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <NeonButton href="#contacto" variant="primary">
            Agendemos una llamada
          </NeonButton>
          <NeonButton href="#servicios" variant="outline">
            Ver servicios
            <ChevronDown
              size={18}
              style={{ animation: "bobUpDown 1.5s ease-in-out infinite" }}
            />
          </NeonButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center">
        <ChevronDown
          size={20}
          className="text-ice-muted"
          style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
