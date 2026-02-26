"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`glass-card p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
