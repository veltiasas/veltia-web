"use client";

import { motion } from "framer-motion";
import { scaleIn, staggerContainer } from "@/lib/animations";

const METRICS = [
  { value: "30-50%", label: "Reduccion costos cloud" },
  { value: "4-12", label: "Semanas implementacion" },
  { value: "40-65%", label: "Tickets IA autonomos" },
  { value: "60-80%", label: "Reduccion procesos" },
  { value: "6-12", label: "Meses ROI tipico" },
] as const;

export default function Metrics() {
  return (
    <section id="metricas" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card pointer-events-none py-10 px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8"
          >
            {METRICS.map((metric) => (
              <motion.div
                key={metric.label}
                variants={scaleIn}
                className="text-center"
              >
                <p className="font-display font-bold text-4xl md:text-5xl text-gradient-brand">
                  {metric.value}
                </p>
                <p className="font-body text-xs uppercase tracking-wider text-ice-muted mt-2">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
