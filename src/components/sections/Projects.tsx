"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { projects } from "@/data";

interface ProjectsProps {
  locale: string;
}

export default function Projects({ locale }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-primary-500 font-mono text-sm mb-3">
          {"// proyectos destacados"}
        </p>
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            {locale === "es" ? "Lo que he construido" : "What I've built"}
            <span className="text-primary-500">.</span>
          </h2>
          <a
            href="https://github.com/FidelVill"
            target="_blank"
            className="hidden md:flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
          >
            <SiGithub size={16} />
            {locale === "es" ? "Ver todos en GitHub" : "View all on GitHub"}
          </a>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glass rounded-2xl overflow-hidden group hover:border-primary-500/30 transition-all duration-300 ${
              i === 0 ? "md:col-span-2" : ""
            }`}
          >
            {/* Top color bar */}
            <div className={`h-1 w-full ${
              i === 0
                ? "bg-gradient-to-r from-primary-500 to-accent"
                : "bg-white/5"
            }`} />

            <div className={`p-6 ${i === 0 ? "md:flex md:gap-8" : ""}`}>
              {/* Featured badge */}
              {i === 0 && (
                <div className="mb-4 md:mb-0 md:w-1/2">
                  <span className="text-xs font-mono text-primary-500 border border-primary-500/30 px-2 py-1 rounded-full">
                    {locale === "es" ? "// Proyecto destacado" : "// Featured project"}
                  </span>
                  <h3 className="text-white font-bold text-2xl mt-3 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {project.description[locale as "es" | "en"]}
                  </p>
                </div>
              )}

              <div className={i === 0 ? "md:w-1/2" : ""}>
                {i !== 0 && (
                  <>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {project.description[locale as "es" | "en"]}
                    </p>
                  </>
                )}

                {/* Status badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    project.status === "production"
                      ? "bg-green-400"
                      : project.status === "maintenance"
                      ? "bg-yellow-400"
                      : "bg-blue-400"
                  } animate-pulse`} />
                  <span className="text-xs text-white/40">
                    {project.status === "production"
                      ? locale === "es" ? "En producción" : "In production"
                      : project.status === "maintenance"
                      ? locale === "es" ? "En mantenimiento" : "In maintenance"
                      : locale === "es" ? "En desarrollo" : "In development"}
                  </span>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-white/5 text-white/50 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors"
                    >
                      <ExternalLink size={14} />
                      {locale === "es" ? "Ver demo" : "Live demo"}
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors"
                    >
                      <SiGithub size={14} />
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