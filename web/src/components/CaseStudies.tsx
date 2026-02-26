"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { Leaf } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const CASES = [
  {
    badge: "CLOUD & IA",
    problemTitle: "Soporte End-to-End con Agentes IA en AWS",
    problema:
      "Cargas productivas en AWS sin monitoreo inteligente, tiempos muertos altos y reportes manuales para el cliente",
    solucion:
      "Agentes autonomos para soporte 24/7, deteccion y resolucion proactiva de incidentes, reportes automatizados al detalle",
    resultado: "Tiempos muertos reducidos 75%. Reportes en tiempo real para el cliente",
    heroMetric: "-75% downtime",
    greenImpact: "Ahorro estimado: 1.800 kg CO\u2082/a\u00f1o (15 instancias eliminadas)",
  },
  {
    badge: "STARTUP SAAS",
    problemTitle: "Optimizacion FinOps AWS",
    problema:
      "Factura AWS creciendo 20% mensual sin control",
    solucion: "FinOps Managed por 6 meses",
    resultado: "Ahorro neto: USD 4.800/mes",
    heroMetric: "-42% factura",
    greenImpact: "Ahorro estimado: 3.200 kg CO\u2082/a\u00f1o (42% menos compute)",
  },
  {
    badge: "SOFTWARE",
    problemTitle: "HelpDesk IA",
    problema:
      "1.000 tickets/mes de soporte IT, equipo saturado",
    solucion:
      "HelpDesk IA con integracion AD, Jira, Confluence",
    resultado: "Ahorro anual: USD 60.000",
    heroMetric: "65% resolucion IA",
    greenImpact: "0 viajes de soporte presencial",
  },
] as const;

export default function CaseStudies() {
  return (
    <section id="casos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionTitle
            subtitle="resultados concretos"
            title="CASOS DE EXITO"
          />

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {CASES.map((caseStudy) => (
              <motion.div
                key={caseStudy.problemTitle}
                variants={fadeInUp}
                className="glass-card p-6 flex flex-col"
              >
                <span className="inline-block self-start px-3 py-1 rounded-full text-xs font-mono font-medium bg-sunset/15 text-sunset border border-sunset/30 mb-4">
                  {caseStudy.badge}
                </span>

                <h3 className="font-display font-medium text-base text-ice mb-3">
                  {caseStudy.problemTitle}
                </h3>

                <div className="w-full h-px bg-gradient-brand opacity-30 my-3" />

                <div className="space-y-4 flex-1">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-ice-muted mb-1">
                      Problema
                    </p>
                    <p className="text-sm text-ice-muted leading-relaxed">
                      {caseStudy.problema}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-ice-muted mb-1">
                      Solucion
                    </p>
                    <p className="text-sm text-ice-muted leading-relaxed">
                      {caseStudy.solucion}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-ice-muted mb-1">
                      Resultado
                    </p>
                    <p className="text-sm text-ice leading-relaxed">
                      {caseStudy.resultado}
                    </p>
                  </div>
                </div>

                <p className="font-display font-bold text-2xl text-gradient-brand mt-4">
                  {caseStudy.heroMetric}
                </p>

                <div className="flex items-center gap-2 mt-3">
                  <Leaf size={14} className="text-green shrink-0" />
                  <p className="text-xs text-green">
                    {caseStudy.greenImpact}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
