"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/lib/motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean;
  target?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  download,
  target,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/25",
    outline:
      "border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
    ghost:
      "text-dark-900/70 dark:text-white/70 hover:text-dark-900 dark:hover:text-white hover:bg-dark-900/10 dark:hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={target}
        download={download}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.16, ease: EASE_OUT }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.16, ease: EASE_OUT }}
    >
      {children}
    </motion.button>
  );
}
