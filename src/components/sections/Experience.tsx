"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/data";

interface ExperienceProps {
  locale: string;
}

export default function Experience({ locale }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-primary-500 font-mono text-sm mb-3">
          {"// trayectoria"}
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-white">
          {locale === "es" ? "Experiencia" : "Experience"}
          <span className="text-primary-500">.</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-dark-900/10 dark:bg-white/10" />

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-12 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 md:left-6 w-3 h-3 rounded-full bg-primary-500 border-2 border-light-50 dark:border-dark-900 mt-1.5" />

              <div className="glass rounded-2xl p-6 hover:border-primary-500/20 transition-colors">
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
                      <Briefcase size={14} />
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 text-xs text-dark-900/40 dark:text-white/40 md:text-right">
                    <div className="flex items-center gap-1 md:justify-end">
                      <Calendar size={12} />
                      {exp.period.start} — {exp.period.end ?? (locale === "es" ? "Actualidad" : "Present")}
                    </div>
                    <div className="flex items-center gap-1 md:justify-end">
                      <MapPin size={12} />
                      {exp.location} {exp.remote ? "· Remote" : ""}
                    </div>
                  </div>
                </div>

                <p className="text-dark-900/60 dark:text-white/60 text-sm leading-relaxed mb-4">
                  {exp.description[locale as "es" | "en"]}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-dark-900/5 dark:bg-white/5 text-dark-900/50 dark:text-white/50 border border-dark-900/10 dark:border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}