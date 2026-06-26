"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/lib/motion";

interface SectionTitleProps {
  comment?: string;
  title: string;
  subtitle?: string;
  as?: "h2" | "h3";
  className?: string;
}

export default function SectionTitle({
  comment,
  title,
  subtitle,
  as: Tag = "h2",
  className,
}: SectionTitleProps) {
  const headingSize =
    Tag === "h2"
      ? "text-3xl md:text-4xl font-extrabold leading-tight"
      : "text-2xl font-extrabold";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
      className={cn("mb-16", className)}
    >
      {comment && (
        <p className="text-accent font-mono text-xs mb-3 tracking-wide">{comment}</p>
      )}
      <Tag className={cn(headingSize, "text-dark-900 dark:text-white")}>
        {title}
      </Tag>
      {subtitle && (
        <p className="text-dark-900/50 dark:text-white/50 mt-3 max-w-xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
