"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Languages, Award } from "lucide-react";
import { SiReact, SiLaravel, SiFlutter } from "@icons-pack/react-simple-icons";
import SectionTitle from "@/components/ui/SectionTitle";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { EASE_OUT } from "@/lib/motion";

const OpenAISmall = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" aria-hidden="true">
    <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9 6.07 6.07 0 0 0-10.27 2.17 5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07zm-9.02 12.61a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.8.8 0 0 0 .39-.68V11.6l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.49zm-9.66-4.12a4.47 4.47 0 0 1-.53-3.01l.14.08 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.95a4.5 4.5 0 0 1-6.14-1.64zm-1.26-9.4a4.49 4.49 0 0 1 2.37-1.97v5.71a.77.77 0 0 0 .39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0L3.97 15.6a4.5 4.5 0 0 1-.63-6.69zm16.6 3.86-5.84-3.37 2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.68a.79.79 0 0 0-.4-.68zm2.01-3.02-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zm-12.63 4.15L6.3 11.7a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.79.79 0 0 0-.39.68v6.74zm1.1-2.37 2.6-1.5 2.61 1.5v3L12 15l-2.61-1.5.03-3.01z" />
  </svg>
);

const pills = [
  { icon: <SiReact size={12} aria-hidden />, label: "React" },
  { icon: <SiLaravel size={12} aria-hidden />, label: "Laravel" },
  { icon: <SiFlutter size={12} aria-hidden />, label: "Flutter" },
  { icon: <OpenAISmall />, label: "OpenAI API" },
] as const;

interface AboutProps {
  locale: string;
}

export default function About({ locale }: AboutProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.08 });

  const cards = [
    {
      icon: <GraduationCap size={18} aria-hidden="true" />,
      label: locale === "es" ? "Educación" : "Education",
      value: "Instituto Tecnológico de Morelia",
      sub: locale === "es"
        ? "Ing. Sistemas Computacionales · 2020-2024"
        : "Computer Systems Engineering · 2020-2024",
    },
    {
      icon: <MapPin size={18} aria-hidden="true" />,
      label: locale === "es" ? "Ubicación" : "Location",
      value: "Morelia, Michoacán",
      sub: locale === "es" ? "México · Disponible remoto" : "México · Remote available",
    },
    {
      icon: <Languages size={18} aria-hidden="true" />,
      label: locale === "es" ? "Idiomas" : "Languages",
      value: locale === "es" ? "Español nativo · Inglés B2" : "Native Spanish · English B2",
      sub: locale === "es" ? "Comunicación técnica fluida" : "Fluent technical communication",
    },
    {
      icon: <Award size={18} aria-hidden="true" />,
      label: locale === "es" ? "Reconocimiento" : "Recognition",
      value: locale === "es" ? "Ponente TecNM 2025" : "TecNM Speaker 2025",
      sub: locale === "es"
        ? "Foro Nacional de Salud · IA aplicada"
        : "National Health Forum · Applied AI",
    },
  ];

  const stats = [
    { num: "2+", label: locale === "es" ? "Exp." : "Exp." },
    { num: "11+", label: "Deploys" },
    { num: "5+", label: locale === "es" ? "Proyectos" : "Projects" },
    { num: "1", label: locale === "es" ? "Ponencia" : "Talk" },
  ];

  return (
    <section ref={ref} id="about" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left — editorial identity element */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -40 }}
          transition={{ duration: 0.65, ease: EASE_OUT }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-dark-900/5 dark:border-white/5 bg-dark-900/[0.02] dark:bg-white/[0.02] min-h-[420px] flex flex-col">

            <div className="px-8 py-8 flex flex-col justify-between flex-1">

              {/* Top group: identity block */}
              <div className="flex flex-col gap-5">

                {/* Specialties label + tech pills */}
                <div>
                  <p className="font-mono text-[10px] text-accent/50 uppercase tracking-widest mb-2">
                    {locale === "es" ? "Especialidades" : "Specialties"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pills.map(({ icon, label }) => (
                      <span
                        key={label}
                        className="flex items-center gap-1.5 px-2.5 py-1 font-mono text-xs text-accent/70 border border-accent/30 rounded-sm bg-accent/[0.03]"
                      >
                        <span className="text-accent/30 select-none">[</span>
                        <span className="text-accent/50">{icon}</span>
                        {label}
                        <span className="text-accent/30 select-none">]</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Currently */}
                <div>
                  <p className="font-mono text-[10px] text-accent/50 uppercase tracking-widest mb-1">
                    {locale === "es" ? "Actualmente" : "Currently"}
                  </p>
                  <p className="text-dark-900/60 dark:text-white/60 text-sm leading-snug">
                    {locale === "es"
                      ? "Disponible para proyectos remotos y posiciones fullstack"
                      : "Available for remote projects and fullstack positions"}
                  </p>
                </div>

                <div className="border-t border-dark-900/10 dark:border-white/5" />

                {/* Favorite stack */}
                <div>
                  <p className="font-mono text-[10px] text-accent/50 uppercase tracking-widest mb-1">
                    {locale === "es" ? "Stack favorito" : "Favorite stack"}
                  </p>
                  <p className="text-accent text-sm font-mono leading-relaxed">Next.js + TS · Angular · Laravel · Python + Flask · React + TS</p>
                </div>

                <div className="border-t border-dark-900/10 dark:border-white/5" />

                {/* Location */}
                <div className="flex items-center gap-1.5 mb-6 text-dark-900/40 dark:text-white/40 text-sm">
                  <MapPin size={14} aria-hidden="true" />
                  <span>
                    {locale === "es" ? "Morelia, Michoacán · Remoto disponible · Presencial" : "Morelia, Michoacán · Remote available · On site"}
                  </span>
                </div>
              </div>

              {/* Bottom group: stat bar */}
              <div className="grid grid-cols-4 gap-4 pt-5 border-t border-dark-900/10 dark:border-white/5">
                {stats.map(({ num, label }) => (
                  <div key={num}>
                    <p className="text-2xl font-black text-dark-900 dark:text-white leading-none tabular-nums">
                      {num}
                    </p>
                    <p className="text-dark-900/30 dark:text-white/30 text-xs mt-1.5 leading-tight">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>

        {/* Right — bio + info cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 40 }}
          transition={{ duration: 0.65, ease: EASE_OUT, delay: isVisible ? 0.1 : 0 }}
        >
          <SectionTitle
            title={
              locale === "es"
                ? "Construyo soluciones digitales que funcionan"
                : "I build digital solutions that work"
            }
            className="mb-6"
          />

          <p className="text-dark-900/60 dark:text-white/60 leading-relaxed mb-4">
            {locale === "es"
              ? "Soy Ingeniero en Sistemas Computacionales apasionado por crear aplicaciones web y móviles con impacto real. Me especializo en el ciclo completo de desarrollo: desde el diseño en Figma hasta el despliegue en producción."
              : "I'm a Computer Systems Engineer passionate about creating web and mobile apps with real impact. I specialize in the full development cycle: from Figma design to production deployment."}
          </p>
          <p className="text-dark-900/60 dark:text-white/60 leading-relaxed mb-8">
            {locale === "es"
              ? "En 2025 fui ponente en el Primer Foro Nacional de la Agenda Estratégica de la Salud del TecNM, presentando investigación sobre modelos de IA aplicados al cálculo de insulina en diabetes tipo 1."
              : "In 2025 I was a speaker at Mexico's National Health Strategic Agenda Forum (TecNM), presenting AI models applied to insulin calculation for type 1 diabetes patients."}
          </p>

          {/* Info cards */}
          <div className="grid grid-cols-2 gap-3">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 12 }}
                transition={{ delay: isVisible ? 0.2 + i * 0.08 : 0, duration: 0.45, ease: EASE_OUT }}
                className="glass rounded-xl p-4"
              >
                <div className="flex items-center gap-2 text-accent mb-2">
                  {card.icon}
                  <span className="text-xs font-medium text-dark-900/40 dark:text-white/40">
                    {card.label}
                  </span>
                </div>
                <p className="text-dark-900 dark:text-white text-sm font-semibold leading-tight">
                  {card.value}
                </p>
                <p className="text-dark-900/40 dark:text-white/40 text-xs mt-1">{card.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
