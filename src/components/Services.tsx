"use client";

import { motion } from "framer-motion";
import { FileText, Brain, RefreshCcw, CloudCog, Lightbulb } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const SERVICES = [
  {
    icon: FileText,
    title: "Transformacion Digital",
    description:
      "Eliminamos el papel, automatizamos workflows y digitalizamos procesos. Gestion documental, firma electronica y portales de autoservicio.",
  },
  {
    icon: Brain,
    title: "IA & Agentes Inteligentes",
    description:
      "Agentes autonomos que resuelven tickets, monitorean infraestructura y automatizan tareas repetitivas. IA practica, no teorica.",
  },
  {
    icon: RefreshCcw,
    title: "Modernizacion Legacy",
    description:
      "Migramos tu monolito a microservicios, tu Oracle a PostgreSQL y tus apps desktop a la web. Sin downtime.",
  },
  {
    icon: CloudCog,
    title: "Optimizacion Cloud & FinOps",
    description:
      "Reducimos tu factura AWS/Azure/GCP entre 30% y 50%. Analisis, implementacion y governance de costos.",
  },
  {
    icon: Lightbulb,
    title: "Consultoria Profesional",
    description:
      "Diagnosticos, workshops de IA y advisory estrategico. Tu puerta de entrada para entender que necesitas antes de invertir.",
  },
] as const;

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionTitle subtitle="5 servicios, un objetivo" title="QUE HACEMOS" />

          {/* First 3 cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SERVICES.slice(0, 3).map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  className="glass-card p-6 flex flex-col"
                >
                  <Icon size={32} className="text-sunset mb-4 shrink-0" />
                  <h3 className="font-display font-medium text-lg text-ice mb-2">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-ice-muted leading-relaxed">
                    {service.description}
                  </p>
                  <div className="w-12 h-0.5 bg-gradient-brand rounded-full mt-4" />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Last 2 cards - centered */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 lg:max-w-[66.666%] lg:mx-auto"
          >
            {SERVICES.slice(3).map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  className="glass-card p-6 flex flex-col"
                >
                  <Icon size={32} className="text-sunset mb-4 shrink-0" />
                  <h3 className="font-display font-medium text-lg text-ice mb-2">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-ice-muted leading-relaxed">
                    {service.description}
                  </p>
                  <div className="w-12 h-0.5 bg-gradient-brand rounded-full mt-4" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
