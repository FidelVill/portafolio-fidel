"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/data";
import Certifications from "./Certifications";
import SectionTitle from "@/components/ui/SectionTitle";
import TechTag from "@/components/ui/TechTag";
import { EASE_OUT } from "@/lib/motion";

interface ExperienceProps {
  locale: string;
}

export default function Experience({ locale }: ExperienceProps) {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.05 });

  return (
    <section ref={sectionRef} id="experience" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionTitle
        title={locale === "es" ? "Experiencia" : "Experience"}
      />

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Timeline — col-span-2 */}
        <div className="lg:col-span-2 relative">
          <motion.div
            className="absolute left-4 top-0 bottom-0 w-px bg-dark-900/10 dark:bg-white/10"
            initial={{ clipPath: "inset(0 0 100% 0 round 4px)" }}
            animate={{ clipPath: isVisible ? "inset(0 0 0% 0 round 4px)" : "inset(0 0 100% 0 round 4px)" }}
            transition={{ duration: 1.2, ease: EASE_OUT, delay: isVisible ? 0.2 : 0 }}
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -32 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -32 }}
                transition={{ delay: isVisible ? i * 0.1 : 0, duration: 0.45, ease: EASE_OUT }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-2.5 w-3 h-3 rounded-full bg-primary-500 border-2 border-light-50 dark:border-dark-900 mt-1.5"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
                  transition={{ type: "spring", bounce: 0.3, delay: isVisible ? i * 0.1 + 0.2 : 0 }}
                />

                <div className="glass rounded-2xl p-6 hover:border-primary-500/20 transition-colors duration-200">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-dark-900 dark:text-white font-bold text-lg">
                          {exp.role[locale as "es" | "en"]}
                        </h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          exp.type === "fulltime"
                            ? "bg-primary-500/20 text-primary-500"
                            : exp.type === "internship"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-accent/20 text-accent"
                        }`}>
                          {exp.type === "fulltime"
                            ? locale === "es" ? "Tiempo completo" : "Full time"
                            : exp.type === "internship"
                            ? locale === "es" ? "Becario" : "Intern"
                            : "Freelance"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-primary-500 font-semibold text-sm">
                        <Briefcase size={14} aria-hidden="true" />
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 text-xs text-dark-900/40 dark:text-white/40 md:text-right">
                      <div className="flex items-center gap-1 md:justify-end">
                        <Calendar size={12} aria-hidden="true" />
                        {exp.period.start} - {exp.period.end ?? (locale === "es" ? "Actualidad" : "Present")}
                      </div>
                      <div className="flex items-center gap-1 md:justify-end">
                        <MapPin size={12} aria-hidden="true" />
                        {exp.location} {exp.remote ? "· Remote" : ""}
                      </div>
                    </div>
                  </div>

                  <p className="text-dark-900/60 dark:text-white/60 text-sm leading-relaxed mb-4">
                    {exp.description[locale as "es" | "en"]}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <TechTag key={t}>{t}</TechTag>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications — col-span-1 */}
        <div className="lg:col-span-1">
          <Certifications locale={locale} />
        </div>
      </div>
    </section>
  );
}
