"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const STEPS = [
  {
    number: "01",
    title: "Diagnostico",
    price: "USD 1K - 5K",
    duration: "1-4 semanas",
    description:
      "Relevamos tu situacion actual: procesos, sistemas, costos. Te entregamos un informe con oportunidades concretas.",
    badge: "60-70% convierten a proyecto",
  },
  {
    number: "02",
    title: "Implementacion",
    price: "USD 10K - 50K",
    duration: "2-6 meses",
    description:
      "Desarrollamos la solucion con tu equipo. Metodologia agil, entregas incrementales, quality gates en cada fase.",
    badge: "40-50% convierten a recurrente",
  },
  {
    number: "03",
    title: "Soporte Continuo",
    price: "USD 1K - 5K/mes",
    duration: "Continuo",
    description:
      "Monitoreo, mantenimiento, mejoras. No te dejamos solo despues del go-live.",
    badge: null,
  },
] as const;

export default function HowWeWork() {
  return (
    <section id="proceso" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionTitle
            subtitle="de consultoria a resultados"
            title="COMO TRABAJAMOS"
          />

          <div className="relative">
            {/* Connecting line - desktop only */}
            <div
              className="hidden md:block absolute top-[60px] left-[16.666%] right-[16.666%] h-px"
              aria-hidden="true"
            >
              <div className="w-full h-full bg-gradient-brand opacity-30" />
            </div>

            {/* Connecting line - mobile: vertical left line */}
            <div
              className="md:hidden absolute top-0 bottom-0 left-6 w-px"
              aria-hidden="true"
            >
              <div className="w-full h-full bg-gradient-brand opacity-20" />
            </div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
            >
              {STEPS.map((step) => (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className="glass-card p-6 text-center relative ml-10 md:ml-0"
                >
                  <p className="font-display font-bold text-5xl text-gradient-brand mb-4">
                    {step.number}
                  </p>
                  <h3 className="font-display font-semibold text-xl text-ice mb-2">
                    {step.title}
                  </h3>
                  <p className="font-mono text-sm text-neon mb-1">
                    {step.price}
                  </p>
                  <p className="font-mono text-xs text-ice-muted mb-4">
                    {step.duration}
                  </p>
                  <p className="text-sm text-ice-muted leading-relaxed mb-4">
                    {step.description}
                  </p>
                  {step.badge && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono border border-sunset/40 text-sunset">
                      {step.badge}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
