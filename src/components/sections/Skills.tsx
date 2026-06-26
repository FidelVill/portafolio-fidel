"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  SiReact, SiAngular, SiNextdotjs, SiTypescript,
  SiFlutter, SiLaravel, SiPython, SiNodedotjs, SiFlask,
  SiSupabase, SiFirebase, SiMysql, SiPostgresql,
  SiDocker, SiVercel, SiGit, SiFigma,
  SiPostman, SiSwagger,
  SiJavascript, SiPhp, SiDart, SiDotnet, SiN8n,
  SiClaude, SiGooglegemini,
  SiVuedotjs, SiExpress, SiMongodb,
  SiYaak, SiHostinger, SiCpanel, SiOwasp,
} from "@icons-pack/react-simple-icons";
import {
  Bot, BarChart2, Coffee,
  Mic, Radio, Shield,
  Terminal, Globe, Gauge, Database, Lock, FileText, Layers,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { EASE_OUT } from "@/lib/motion";

const OpenAIIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9 6.07 6.07 0 0 0-10.27 2.17 5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07zm-9.02 12.61a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.8.8 0 0 0 .39-.68V11.6l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.49zm-9.66-4.12a4.47 4.47 0 0 1-.53-3.01l.14.08 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.95a4.5 4.5 0 0 1-6.14-1.64zm-1.26-9.4a4.49 4.49 0 0 1 2.37-1.97v5.71a.77.77 0 0 0 .39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0L3.97 15.6a4.5 4.5 0 0 1-.63-6.69zm16.6 3.86-5.84-3.37 2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.68a.79.79 0 0 0-.4-.68zm2.01-3.02-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zm-12.63 4.15L6.3 11.7a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.79.79 0 0 0-.39.68v6.74zm1.1-2.37 2.6-1.5 2.61 1.5v3L12 15l-2.61-1.5.03-3.01z" />
  </svg>
);

const AzureIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M22 6.4v11.4l-5.9 2.8-8.3-3.1v3.1L4 16.7l14.1 1.7V7.7zm-2.3.4-6.3 5.9V7.2L7.2 8.8 6 9.4V16l2-.8V10l12-3.2z" />
  </svg>
);

interface SkillsProps {
  locale: string;
}

const categories = [
  {
    key: "languages",
    label: { es: "Lenguajes", en: "Core Languages" },
    skills: [
      { name: "JavaScript", icon: <SiJavascript size={16} aria-hidden="true" /> },
      { name: "TypeScript", icon: <SiTypescript size={16} aria-hidden="true" /> },
      { name: "Python", icon: <SiPython size={16} aria-hidden="true" /> },
      { name: "PHP", icon: <SiPhp size={16} aria-hidden="true" /> },
      { name: "Dart", icon: <SiDart size={16} aria-hidden="true" /> },
      { name: "Java", icon: <Coffee size={16} aria-hidden="true" /> },
      { name: "C# / .NET", icon: <SiDotnet size={16} aria-hidden="true" /> },
    ],
  },
  {
    key: "frontend",
    label: { es: "Frontend", en: "Frontend" },
    skills: [
      { name: "React.js", icon: <SiReact size={16} aria-hidden="true" /> },
      { name: "Angular", icon: <SiAngular size={16} aria-hidden="true" /> },
      { name: "Next.js", icon: <SiNextdotjs size={16} aria-hidden="true" /> },
      { name: "Vue.js", icon: <SiVuedotjs size={16} aria-hidden="true" /> },
      { name: "Flutter", icon: <SiFlutter size={16} aria-hidden="true" /> },
    ],
  },
  {
    key: "backend",
    label: { es: "Backend", en: "Backend" },
    skills: [
      { name: "Laravel", icon: <SiLaravel size={16} aria-hidden="true" /> },
      { name: "Flask", icon: <SiFlask size={16} aria-hidden="true" /> },
      { name: "Node.js", icon: <SiNodedotjs size={16} aria-hidden="true" /> },
      { name: "Express", icon: <SiExpress size={16} aria-hidden="true" /> },
    ],
  },
  {
    key: "data-cloud",
    label: { es: "Datos y Cloud", en: "Data & Cloud" },
    skills: [
      { name: "Supabase", icon: <SiSupabase size={16} aria-hidden="true" /> },
      { name: "Firebase", icon: <SiFirebase size={16} aria-hidden="true" /> },
      { name: "MySQL", icon: <SiMysql size={16} aria-hidden="true" /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={16} aria-hidden="true" /> },
      { name: "MongoDB", icon: <SiMongodb size={16} aria-hidden="true" /> },
      { name: "Docker", icon: <SiDocker size={16} aria-hidden="true" /> },
      { name: "Azure", icon: <AzureIcon /> },
      { name: "Vercel", icon: <SiVercel size={16} aria-hidden="true" /> },
    ],
  },
  {
    key: "ai",
    label: { es: "IA y Automatización", en: "AI & Automation" },
    skills: [
      { name: "OpenAI API", icon: <OpenAIIcon /> },
      { name: "Gemini API", icon: <SiGooglegemini size={16} aria-hidden="true" /> },
      { name: "Claude", icon: <SiClaude size={16} aria-hidden="true" /> },
      { name: "n8n", icon: <SiN8n size={16} aria-hidden="true" /> },
      { name: "Blip", icon: <Bot size={16} aria-hidden="true" /> },
      { name: "Realtime API (voz)", icon: <Mic size={16} aria-hidden="true" /> },
      { name: "WebSockets IA", icon: <Radio size={16} aria-hidden="true" /> },
      { name: "Prompt Security", icon: <Shield size={16} aria-hidden="true" /> },
    ],
  },
  {
    key: "tooling",
    label: { es: "Herramientas", en: "Tooling" },
    skills: [
      { name: "Git", icon: <SiGit size={16} aria-hidden="true" /> },
      { name: "Figma", icon: <SiFigma size={16} aria-hidden="true" /> },
      { name: "Postman", icon: <SiPostman size={16} aria-hidden="true" /> },
      { name: "Yaak", icon: <SiYaak size={16} aria-hidden="true" /> },
      { name: "Power BI", icon: <BarChart2 size={16} aria-hidden="true" /> },
      { name: "Swagger", icon: <SiSwagger size={16} aria-hidden="true" /> },
    ],
  },
  {
    key: "infra-security",
    label: { es: "Infraestructura & Seguridad", en: "Infra & Security" },
    skills: [
      { name: "Hostinger", icon: <SiHostinger size={16} aria-hidden="true" /> },
      { name: "cPanel", icon: <SiCpanel size={16} aria-hidden="true" /> },
      { name: "SSH / VPS", icon: <Terminal size={16} aria-hidden="true" /> },
      { name: "OWASP", icon: <SiOwasp size={16} aria-hidden="true" /> },
      { name: "CORS", icon: <Globe size={16} aria-hidden="true" /> },
      { name: "Rate Limiting", icon: <Gauge size={16} aria-hidden="true" /> },
      { name: "SQL Injection", icon: <Database size={16} aria-hidden="true" /> },
      { name: "ENV Security", icon: <Lock size={16} aria-hidden="true" /> },
      { name: "Python-DOMPDF", icon: <FileText size={16} aria-hidden="true" /> },
      { name: "MVC + Repository", icon: <Layers size={16} aria-hidden="true" /> },
    ],
  },
];

export default function Skills({ locale }: SkillsProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.05 });
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible && !shouldRender) setShouldRender(true);
  }, [isVisible, shouldRender]);

  return (
    <section ref={ref} id="skills" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionTitle
        title={locale === "es" ? "Mi Stack Tecnológico" : "My Tech Stack"}
        subtitle={
          locale === "es"
            ? "Tecnologías con las que construyo soluciones de extremo a extremo."
            : "Technologies I use to build end-to-end solutions."
        }
      />

      {!shouldRender ? (
        <div className="min-h-[640px]" aria-hidden="true" />
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 24 }}
            transition={{ delay: isVisible ? i * 0.07 : 0, duration: 0.45, ease: EASE_OUT }}
            whileHover={{ y: -3, transition: { duration: 0.2, ease: EASE_OUT } }}
            className={`glass rounded-2xl p-6 border border-accent/20 transition-shadow duration-200 hover:shadow-lg ${
              i === categories.length - 1 ? "md:col-span-2 lg:col-span-3" : ""
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-sm font-semibold text-accent font-mono">
                {cat.label[locale as "es" | "en"]}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/5 border border-accent/10 cursor-default"
                >
                  <span className="text-accent/70">{skill.icon}</span>
                  <span className="text-dark-900/70 dark:text-white/70 text-xs font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      )}
    </section>
  );
}
