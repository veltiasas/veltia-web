"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
}

function generateParticles(count: number): Particle[] {
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 2 + Math.random() * 2,
      opacity: 0.15 + Math.random() * 0.2,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 10,
    });
  }
  return particles;
}

export default function Hero() {
  const [cipherDone, setCipherDone] = useState(false);
  const particles = useMemo(() => generateParticles(18), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle keyframes */}
      <style>{`
        @keyframes heroFloat {
          from {
            transform: translateY(100vh);
            opacity: 0;
          }
          10% {
            opacity: var(--particle-opacity);
          }
          90% {
            opacity: var(--particle-opacity);
          }
          to {
            transform: translateY(-10vh);
            opacity: 0;
          }
        }
        @keyframes bobUpDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(4px);
          }
        }
        @keyframes scrollBounce {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(8px);
            opacity: 0.3;
          }
        }
      `}</style>

      {/* Background: tech grid overlay */}
      <div className="absolute inset-0 tech-grid-bg" aria-hidden="true" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {particles.map((p) => (
          <div
            key={p.id}
            className={`absolute rounded-full ${p.id % 4 === 0 ? "bg-sunset" : "bg-neon"}`}
            style={{
              left: p.left,
              bottom: "-10px",
              width: `${p.size}px`,
              height: `${p.size}px`,
              ["--particle-opacity" as string]: p.opacity,
              opacity: 0,
              animation: `heroFloat ${p.duration}s linear ${p.delay}s infinite`,
            }}
          />
        ))}
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
