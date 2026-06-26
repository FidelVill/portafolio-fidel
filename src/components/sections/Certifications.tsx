"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data";
import GithubStats from "./GithubStats";
import SectionTitle from "@/components/ui/SectionTitle";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { EASE_OUT } from "@/lib/motion";

interface CertificationsProps {
  locale: string;
}

export default function Certifications({ locale }: CertificationsProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <div ref={ref} className="flex flex-col gap-6">
      <SectionTitle
        as="h3"
        title={locale === "es" ? "Formación" : "Education"}
        className="mb-4"
      />

      <div className="flex flex-col gap-3">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 16 }}
            transition={{ delay: isVisible ? i * 0.08 : 0, duration: 0.4, ease: EASE_OUT }}
            className="glass rounded-xl p-4 flex items-start gap-3 hover:border-primary-500/30 transition-colors duration-200"
          >
            <div className="w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-500 shrink-0">
              <Award size={16} aria-hidden="true" />
            </div>
            <div className="flex-1">
              <p className="text-dark-900 dark:text-white text-sm font-semibold leading-tight">
                {cert.name}
              </p>
              <p className="text-dark-900/40 dark:text-white/40 text-xs mt-0.5">
                {cert.issuer} · {cert.year}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Speaker recognition */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 16 }}
          transition={{ delay: isVisible ? certifications.length * 0.08 : 0, duration: 0.4, ease: EASE_OUT }}
          className="glass rounded-xl p-4 flex items-start gap-3 border border-accent/20 hover:border-accent/40 transition-colors duration-200"
        >
          <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
            <span role="img" aria-label={locale === "es" ? "Reconocimiento académico" : "Academic recognition"}>🎓</span>
          </div>
          <div className="flex-1">
            <p className="text-dark-900 dark:text-white text-sm font-semibold leading-tight">
              {locale === "es"
                ? "Ponente — Foro Nacional de Salud TecNM"
                : "Speaker — TecNM National Health Forum"}
            </p>
            <p className="text-dark-900/40 dark:text-white/40 text-xs mt-0.5">
              {locale === "es"
                ? "IA aplicada a diabetes tipo 1 · 2025"
                : "AI applied to type 1 diabetes · 2025"}
            </p>
          </div>
        </motion.div>
      </div>

      <GithubStats locale={locale} />
    </div>
  );
}
