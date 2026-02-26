"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  align?: "center" | "left";
}

export default function SectionTitle({
  subtitle,
  title,
  align = "center",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <motion.div variants={fadeInUp} className={`mb-12 ${alignClass}`}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-ice-muted mb-3">
        // {subtitle}
      </p>
      <h2 className="font-display font-semibold text-3xl md:text-4xl text-ice">
        {title}
      </h2>
    </motion.div>
  );
}
