"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12",
        centered && "text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
        {title}
        <span className="text-primary-500">.</span>
      </h2>
      {subtitle && (
        <p className="text-dark-900/60 dark:text-white/60 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-16 bg-gradient-to-r from-primary-500 to-accent rounded-full",
          centered && "mx-auto"
        )}
      />
    </motion.div>
  );
}