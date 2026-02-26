"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
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
            {METRICS.map((metric, i) => (
              <motion.div
                key={metric.label}
                variants={scaleIn}
                className={`text-center ${i === METRICS.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
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

        {/* Green metric badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-6"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-6 py-3 rounded-full bg-green/8 border border-green/20">
            <div className="flex items-center gap-2">
              <Leaf size={18} className="text-green shrink-0" />
              <span className="font-display font-bold text-lg text-gradient-green whitespace-nowrap">
                1.500 kg CO&#x2082;
              </span>
            </div>
            <span className="text-xs text-ice-muted font-mono text-center">
              ahorro promedio por cliente/a&#xF1;o
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
