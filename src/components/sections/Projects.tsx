"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { projects } from "@/data";
import { social } from "@/data/social";
import SectionTitle from "@/components/ui/SectionTitle";
import TechTag from "@/components/ui/TechTag";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

interface ProjectsProps {
  locale: string;
}

const statusColors: Record<string, string> = {
  production: "bg-green-400",
  maintenance: "bg-yellow-400",
  development: "bg-blue-400",
};

export default function Projects({ locale }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="mb-16 flex items-end justify-between">
        <SectionTitle
          comment="// proyectos destacados"
          title={locale === "es" ? "Lo que he construido" : "What I've built"}
          className="mb-0"
        />
        <a
          href={social.github.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={locale === "es" ? "Ver todos los proyectos en GitHub" : "View all projects on GitHub"}
          className="hidden md:flex items-center gap-2 text-dark-900/40 dark:text-white/40 hover:text-dark-900 dark:hover:text-white text-sm transition-colors duration-[150ms] shrink-0 ml-8"
        >
          <SiGithub size={16} aria-hidden="true" />
          {locale === "es" ? "Ver todos en GitHub" : "View all on GitHub"}
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(i * 0.05, 0.2), duration: 0.45, ease: EASE_OUT }}
            className={`glass rounded-2xl overflow-hidden hover:border-primary-500/30 transition-colors duration-200 ${
              i === 0 ? "md:col-span-2" : ""
            }`}
          >
            {/* Top color bar */}
            <div className={`h-1 w-full ${
              i === 0
                ? "bg-gradient-to-r from-primary-500 to-accent"
                : "bg-dark-900/5 dark:bg-white/5"
            }`} />

            <div className={`p-6 ${i === 0 ? "md:flex md:gap-8" : ""}`}>
              {i === 0 && (
                <div className="mb-4 md:mb-0 md:w-1/2">
                  <span className="text-xs font-mono text-primary-500 border border-primary-500/30 px-2 py-1 rounded-full">
                    {locale === "es" ? "// Proyecto destacado" : "// Featured project"}
                  </span>
                  <h3 className="text-dark-900 dark:text-white font-bold text-2xl mt-3 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-dark-900/60 dark:text-white/60 text-sm leading-relaxed">
                    {project.description[locale as "es" | "en"]}
                  </p>
                </div>
              )}

              <div className={i === 0 ? "md:w-1/2" : ""}>
                {i !== 0 && (
                  <>
                    <h3 className="text-dark-900 dark:text-white font-bold text-lg mb-2">
                      {project.title}
                    </h3>
                    <p className="text-dark-900/60 dark:text-white/60 text-sm leading-relaxed mb-4">
                      {project.description[locale as "es" | "en"]}
                    </p>
                  </>
                )}

                {/* Status dot — ping pattern (not pulse) */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${statusColors[project.status] ?? "bg-blue-400"} opacity-75`} />
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${statusColors[project.status] ?? "bg-blue-400"}`} />
                  </span>
                  <span className="text-xs text-dark-900/40 dark:text-white/40">
                    {project.status === "production"
                      ? locale === "es" ? "En producción" : "In production"
                      : project.status === "maintenance"
                      ? locale === "es" ? "En mantenimiento" : "In maintenance"
                      : locale === "es" ? "En desarrollo" : "In development"}
                  </span>
                </div>

                {/* Tech stack — TechTag component */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <TechTag key={t}>{t}</TechTag>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${locale === "es" ? "Ver demo de" : "Live demo of"} ${project.title}`}
                      className="flex items-center gap-1.5 text-xs text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white transition-colors duration-[150ms]"
                    >
                      <ExternalLink size={14} aria-hidden="true" />
                      {locale === "es" ? "Ver demo" : "Live demo"}
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${locale === "es" ? "Ver código de" : "View code for"} ${project.title}`}
                      className="flex items-center gap-1.5 text-xs text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white transition-colors duration-[150ms]"
                    >
                      <SiGithub size={14} aria-hidden="true" />
                      {locale === "es" ? "Ver código" : "View code"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
