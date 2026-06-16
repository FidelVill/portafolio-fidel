"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/data";
import Certifications from "./Certifications";
import SectionTitle from "@/components/ui/SectionTitle";
import TechTag from "@/components/ui/TechTag";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

interface ExperienceProps {
  locale: string;
}

export default function Experience({ locale }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionTitle
        comment="// trayectoria"
        title={locale === "es" ? "Experiencia" : "Experience"}
      />

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Timeline — col-span-2 */}
        <div className="lg:col-span-2 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-dark-900/10 dark:bg-white/10" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.05, 0.2), duration: 0.45, ease: EASE_OUT }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 w-3 h-3 rounded-full bg-primary-500 border-2 border-light-50 dark:border-dark-900 mt-1.5" />

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
                        {exp.period.start} — {exp.period.end ?? (locale === "es" ? "Actualidad" : "Present")}
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
