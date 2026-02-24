"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/animations";

const TECH_STACK = [
  "FastAPI",
  "Python",
  "React",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "AWS",
  "Supabase",
  "Docker",
  "Terraform",
  "LangChain",
  "OpenAI",
  "Claude",
] as const;

export default function Team() {
  return (
    <section id="equipo" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionTitle
            subtitle="quienes somos"
            title="EL EQUIPO"
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left column: text + CTO card */}
            <motion.div variants={fadeInUp}>
              <p className="text-ice-muted text-base leading-relaxed mb-3">
                Desde Cordoba para el mundo. Innovando y mejorando la productividad
                de empresas que eligen tecnologia como motor de crecimiento.
              </p>
              <p className="text-ice-muted text-base leading-relaxed mb-8">
                Combinamos expertise en IA, cloud y desarrollo de software para
                entregar resultados concretos, no promesas.
              </p>

              {/* CTO Card */}
              <div className="glass-card p-6">
                <div className="flex items-start">
                  {/* CTO Photo */}
                  <div className="w-20 h-20 rounded-full border-2 border-neon/40 shrink-0 overflow-hidden relative">
                    <div className="absolute inset-0 bg-neon/10 mix-blend-color z-10 rounded-full" />
                    <img
                      src="/dino.jpg"
                      alt="Dino Antonelli - CTO"
                      className="w-full h-full object-cover"
                      style={{
                        filter: "saturate(0.3) contrast(1.15) brightness(1.05)",
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div className="ml-4">
                    <p className="font-display font-semibold text-xl text-ice">
                      Dino Antonelli
                    </p>
                    <p className="font-mono text-sm text-neon">CTO</p>
                    <p className="text-sm text-ice-muted mt-2">
                      Arquitecto de software y especialista en IA. Lidera el
                      desarrollo tecnico de todas las soluciones.
                    </p>
                  </div>
                </div>

                {/* LinkedIn link */}
                <a
                  href="https://www.linkedin.com/in/dino-antonelli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-neon text-sm hover:underline mt-4"
                >
                  LinkedIn
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>

              <p className="text-sm text-ice-muted mt-6">
                Equipo multidisciplinario de especialistas en backend, frontend,
                cloud, DevOps, seguridad e inteligencia artificial.
              </p>
            </motion.div>

            {/* Right column: tech stack badges */}
            <motion.div variants={fadeIn}>
              <h3 className="font-display font-medium text-lg text-ice mb-4">
                Stack Tecnologico
              </h3>

              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-md bg-carbon border border-neon/20 font-mono text-xs text-neon"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
