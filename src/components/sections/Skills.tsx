"use client";

import { motion } from "framer-motion";
import {
  SiReact, SiAngular, SiNextdotjs, SiTailwindcss, SiTypescript,
  SiFlutter, SiLaravel, SiPython, SiNodedotjs, SiFlask,
  SiSupabase, SiFirebase, SiMysql, SiPostgresql, SiMongodb,
  SiDocker, SiVercel, SiGit, SiFigma,
  SiGithub, SiGitlab, SiPostman,
} from "@icons-pack/react-simple-icons";

const OpenAIIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9 6.07 6.07 0 0 0-10.27 2.17 5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07zm-9.02 12.61a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.8.8 0 0 0 .39-.68V11.6l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.49zm-9.66-4.12a4.47 4.47 0 0 1-.53-3.01l.14.08 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.95a4.5 4.5 0 0 1-6.14-1.64zm-1.26-9.4a4.49 4.49 0 0 1 2.37-1.97v5.71a.77.77 0 0 0 .39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0L3.97 15.6a4.5 4.5 0 0 1-.63-6.69zm16.6 3.86-5.84-3.37 2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.68a.79.79 0 0 0-.4-.68zm2.01-3.02-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zm-12.63 4.15L6.3 11.7a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.79.79 0 0 0-.39.68v6.74zm1.1-2.37 2.6-1.5 2.61 1.5v3L12 15l-2.61-1.5.03-3.01z" />
  </svg>
);

const AzureDevOpsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M22 6.4v11.4l-5.9 2.8-8.3-3.1v3.1L4 16.7l14.1 1.7V7.7zm-2.3.4-6.3 5.9V7.2L7.2 8.8 6 9.4V16l2-.8V10l12-3.2z" />
  </svg>
);

interface SkillsProps {
  locale: string;
}

const categories = [
  {
    key: "frontend",
    label: { es: "Frontend", en: "Frontend" },
    color: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5",
    skills: [
      { name: "React.js", icon: <SiReact size={20} /> },
      { name: "Angular", icon: <SiAngular size={20} /> },
      { name: "Next.js", icon: <SiNextdotjs size={20} /> },
      { name: "Tailwind", icon: <SiTailwindcss size={20} /> },
      { name: "TypeScript", icon: <SiTypescript size={20} /> },
      { name: "Flutter", icon: <SiFlutter size={20} /> },
    ],
  },
  {
    key: "backend",
    label: { es: "Backend", en: "Backend" },
    color: "text-green-400",
    border: "border-green-400/20",
    bg: "bg-green-400/5",
    skills: [
      { name: "Laravel", icon: <SiLaravel size={20} /> },
      { name: "Python", icon: <SiPython size={20} /> },
      { name: "Node.js", icon: <SiNodedotjs size={20} /> },
      { name: "Flask", icon: <SiFlask size={20} /> },
    ],
  },
  {
    key: "database",
    label: { es: "Bases de Datos", en: "Databases" },
    color: "text-yellow-400",
    border: "border-yellow-400/20",
    bg: "bg-yellow-400/5",
    skills: [
      { name: "Supabase", icon: <SiSupabase size={20} /> },
      { name: "Firebase", icon: <SiFirebase size={20} /> },
      { name: "MySQL", icon: <SiMysql size={20} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={20} /> },
      { name: "MongoDB", icon: <SiMongodb size={20} /> },
    ],
  },
  {
    key: "cloud",
    label: { es: "Cloud & DevOps", en: "Cloud & DevOps" },
    color: "text-cyan-400",
    border: "border-cyan-400/20",
    bg: "bg-cyan-400/5",
    skills: [
      { name: "Azure DevOps", icon: <AzureDevOpsIcon /> },
      { name: "Docker", icon: <SiDocker size={20} /> },
      { name: "Vercel", icon: <SiVercel size={20} /> },
      { name: "Git", icon: <SiGit size={20} /> },
      { name: "GitHub", icon: <SiGithub size={20} /> },
      { name: "GitLab", icon: <SiGitlab size={20} /> },
    ],
  },
  {
    key: "ai",
    label: { es: "IA & Automatización", en: "AI & Automation" },
    color: "text-purple-400",
    border: "border-purple-400/20",
    bg: "bg-purple-400/5",
    skills: [
      { name: "OpenAI API", icon: <OpenAIIcon /> },
    ],
  },
  {
    key: "tools",
    label: { es: "Herramientas", en: "Tools" },
    color: "text-orange-400",
    border: "border-orange-400/20",
    bg: "bg-orange-400/5",
    skills: [
      { name: "Figma", icon: <SiFigma size={20} /> },
      { name: "Postman", icon: <SiPostman size={20} /> },
    ],
  },
];

export default function Skills({ locale }: SkillsProps) {
  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-primary-500 font-mono text-sm mb-3">
          {"// habilidades técnicas"}
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Mi Stack Tecnológico
          <span className="text-primary-500">.</span>
        </h2>
        <p className="text-white/50 mt-3 max-w-xl">
          {locale === "es"
            ? "Tecnologías con las que construyo soluciones de extremo a extremo."
            : "Technologies I use to build end-to-end solutions."}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glass rounded-2xl p-6 border ${cat.border}`}
          >
            <h3 className={`text-sm font-semibold mb-4 ${cat.color} font-mono`}>
              {cat.label[locale as "es" | "en"]}
            </h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg ${cat.bg} border ${cat.border} cursor-default`}
                >
                  <span className={cat.color}>{skill.icon}</span>
                  <span className="text-white/70 text-xs font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}