"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const INPUT_CLASSES =
  "w-full bg-midnight border border-carbon rounded-lg px-4 py-3 text-ice placeholder:text-muted focus:outline-none focus:border-neon/50 focus:shadow-[0_0_10px_rgba(0,242,255,0.1)] transition-all font-body text-sm";

const WEB3FORMS_KEY = "eec7139e-a453-48e6-8188-2e54e9806b38";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const jsonBody = {
      access_key: WEB3FORMS_KEY,
      subject: "Nueva consulta desde veltia.ar",
      from_name: "VELTIA Web",
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      empresa: formData.get("empresa"),
      mensaje: formData.get("mensaje"),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(jsonBody),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="py-24 px-6 relative">
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-carbon/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionTitle subtitle="empecemos" title="HABLEMOS" align="center" />

          <p className="text-ice-muted text-center mb-10">
            Contanos que necesitas y te respondemos en 24 horas.
          </p>

          {/* Form card */}
          <motion.div variants={fadeInUp} className="max-w-xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 space-y-5"
            >
              <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />

              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                required
                className={INPUT_CLASSES}
                aria-label="Nombre"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className={INPUT_CLASSES}
                aria-label="Email"
              />

              <input
                type="text"
                name="empresa"
                placeholder="Empresa (opcional)"
                className={INPUT_CLASSES}
                aria-label="Empresa"
              />

              <textarea
                name="mensaje"
                rows={4}
                placeholder="Contanos tu desafio tecnologico..."
                required
                className={`${INPUT_CLASSES} resize-none`}
                aria-label="Mensaje"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full font-display font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer px-8 py-3 text-base bg-neon text-midnight glow-neon hover:glow-neon-strong hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <p className="text-neon text-sm text-center font-mono">
                  Mensaje enviado. Te respondemos en 24 horas.
                </p>
              )}
              {status === "error" && (
                <p className="text-sunset text-sm text-center font-mono">
                  Error al enviar. Escribinos a contacto@veltia.ar
                </p>
              )}
            </form>

            {/* Contact info */}
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="flex items-center gap-6">
                <a
                  href="mailto:contacto@veltia.ar"
                  className="font-mono text-sm text-ice-muted hover:text-neon transition-colors"
                >
                  contacto@veltia.ar
                </a>
                <span className="w-1 h-1 rounded-full bg-neon/40" />
                <a
                  href="mailto:dino.antonelli@veltia.ar"
                  className="font-mono text-sm text-ice-muted hover:text-neon transition-colors"
                >
                  dino.antonelli@veltia.ar
                </a>
              </div>
              <p className="font-mono text-xs text-muted">
                Cordoba, Argentina
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
