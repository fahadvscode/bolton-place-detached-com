"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function FadeIn({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.36, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
