"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInLeft, staggerContainer } from "@/lib/animations";

const DIFFERENTIALS: ReadonlyArray<{
  title: string;
  description: string;
  green?: boolean;
}> = [
  {
    title: "ROI medible desde el dia 1",
    description:
      "No prometemos resultados abstractos. Cada proyecto tiene metricas claras: ahorro en pesos, horas recuperadas, procesos automatizados.",
  },
  {
    title: "Implementamos, no solo recomendamos",
    description:
      "No te dejamos un PDF con recomendaciones. Ejecutamos los cambios, validamos resultados y te acompanamos post go-live.",
  },
  {
    title: "Stack moderno, expertise real",
    description:
      "FastAPI, React, Next.js, PostgreSQL, AWS, LLMs. No somos consultores teoricos: escribimos codigo todos los dias.",
  },
  {
    title: "Consultoria primero",
    description:
      "Antes de comprometerte con un proyecto de USD 50K, invertis USD 2K en entender que necesitas. Sin letra chica.",
  },
  {
    title: "Soporte local, vision global",
    description:
      "Base en Cordoba, Argentina. Entendemos la realidad local con estandares internacionales de calidad.",
  },
  {
    title: "Tecnologia sostenible",
    description:
      "Cada recurso cloud eliminado, cada proceso digitalizado, cada sistema modernizado reduce emisiones de CO\u2082. Te damos las metricas.",
    green: true,
  },
] as const;

export default function WhyVeltia() {
  return (
    <section id="diferencial" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle
            subtitle="lo que nos hace diferentes"
            title="POR QUE VELTIA"
            align="left"
          />

          <div className="space-y-8">
            {DIFFERENTIALS.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInLeft}
                className="flex"
              >
                {/* Left accent line */}
                <div
                  className={`w-1 rounded-full self-stretch shrink-0 ${
                    item.green ? "bg-green" : "bg-gradient-brand"
                  }`}
                  style={item.green ? {
                    boxShadow: "0 0 8px rgba(34,197,94,0.4), 0 0 20px rgba(34,197,94,0.15)",
                    animation: "bioPulse 3s ease-in-out infinite",
                    ["--pulse-color" as string]: "rgba(34,197,94,0.4)",
                  } : undefined}
                />

                {/* Content */}
                <div className="pl-6 flex-1">
                  <h3 className="font-display font-medium text-lg text-ice mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ice-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
