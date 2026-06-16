"use client";

import { motion } from "framer-motion";
import {
  SiReact, SiAngular, SiNextdotjs, SiTailwindcss, SiTypescript,
  SiFlutter, SiLaravel, SiPython, SiNodedotjs, SiFlask,
  SiSupabase, SiFirebase, SiMysql, SiPostgresql, SiMongodb,
  SiDocker, SiVercel, SiGit, SiFigma, SiGithub, SiGitlab,
  SiPostman, SiSwagger, SiHtml5, SiCss, SiBootstrap,
  SiJavascript, SiPhp, SiDart, SiExpress, SiDotnet,
  SiTrello, SiDiscord, SiAndroidstudio, SiN8n, SiPandas,
  SiGodaddy, SiHetzner, SiUbuntu, SiClockify, SiClaude, SiGooglegemini, SiWindsurf,
} from "@icons-pack/react-simple-icons";
import { FaJava, FaWindows, FaMicrosoft, FaCode } from "react-icons/fa";
import { Bot, BarChart2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const OpenAIIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9 6.07 6.07 0 0 0-10.27 2.17 5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07zm-9.02 12.61a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.8.8 0 0 0 .39-.68V11.6l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.49zm-9.66-4.12a4.47 4.47 0 0 1-.53-3.01l.14.08 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.95a4.5 4.5 0 0 1-6.14-1.64zm-1.26-9.4a4.49 4.49 0 0 1 2.37-1.97v5.71a.77.77 0 0 0 .39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0L3.97 15.6a4.5 4.5 0 0 1-.63-6.69zm16.6 3.86-5.84-3.37 2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.68a.79.79 0 0 0-.4-.68zm2.01-3.02-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zm-12.63 4.15L6.3 11.7a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.79.79 0 0 0-.39.68v6.74zm1.1-2.37 2.6-1.5 2.61 1.5v3L12 15l-2.61-1.5.03-3.01z" />
  </svg>
);

const AzureDevOpsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path d="M22 6.4v11.4l-5.9 2.8-8.3-3.1v3.1L4 16.7l14.1 1.7V7.7zm-2.3.4-6.3 5.9V7.2L7.2 8.8 6 9.4V16l2-.8V10l12-3.2z" />
  </svg>
);

interface SkillsProps {
  locale: string;
}

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
};

const categories = [
  {
    key: "languages",
    label: { es: "Lenguajes", en: "Languages" },
    color: "text-violet-400",
    border: "border-violet-400/20",
    bg: "bg-violet-400/5",
    dot: "bg-violet-400",
    skills: [
      { name: "JavaScript", icon: <SiJavascript size={16} aria-hidden="true" /> },
      { name: "TypeScript", icon: <SiTypescript size={16} aria-hidden="true" /> },
      { name: "Python", icon: <SiPython size={16} aria-hidden="true" /> },
      { name: "PHP", icon: <SiPhp size={16} aria-hidden="true" /> },
      { name: "Dart", icon: <SiDart size={16} aria-hidden="true" /> },
      { name: "Java", icon: <FaJava size={16} aria-hidden="true" /> },
      { name: "C# / .NET", icon: <SiDotnet size={16} aria-hidden="true" /> },
    ],
  },
  {
    key: "frontend",
    label: { es: "Frontend", en: "Frontend" },
    color: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5",
    dot: "bg-blue-400",
    skills: [
      { name: "React.js", icon: <SiReact size={16} aria-hidden="true" /> },
      { name: "Angular", icon: <SiAngular size={16} aria-hidden="true" /> },
      { name: "Next.js", icon: <SiNextdotjs size={16} aria-hidden="true" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={16} aria-hidden="true" /> },
      { name: "Bootstrap", icon: <SiBootstrap size={16} aria-hidden="true" /> },
      { name: "HTML5", icon: <SiHtml5 size={16} aria-hidden="true" /> },
      { name: "CSS3", icon: <SiCss size={16} aria-hidden="true" /> },
    ],
  },
  {
    key: "mobile",
    label: { es: "Móvil", en: "Mobile" },
    color: "text-cyan-400",
    border: "border-cyan-400/20",
    bg: "bg-cyan-400/5",
    dot: "bg-cyan-400",
    skills: [
      { name: "Flutter", icon: <SiFlutter size={16} aria-hidden="true" /> },
      { name: "React Native", icon: <SiReact size={16} aria-hidden="true" /> },
    ],
  },
  {
    key: "backend",
    label: { es: "Backend", en: "Backend" },
    color: "text-green-400",
    border: "border-green-400/20",
    bg: "bg-green-400/5",
    dot: "bg-green-400",
    skills: [
      { name: "Laravel", icon: <SiLaravel size={16} aria-hidden="true" /> },
      { name: "Flask", icon: <SiFlask size={16} aria-hidden="true" /> },
      { name: "Node.js", icon: <SiNodedotjs size={16} aria-hidden="true" /> },
      { name: "Express", icon: <SiExpress size={16} aria-hidden="true" /> },
    ],
  },
  {
    key: "database",
    label: { es: "Bases de Datos", en: "Databases" },
    color: "text-yellow-400",
    border: "border-yellow-400/20",
    bg: "bg-yellow-400/5",
    dot: "bg-yellow-400",
    skills: [
      { name: "Supabase", icon: <SiSupabase size={16} aria-hidden="true" /> },
      { name: "Firebase", icon: <SiFirebase size={16} aria-hidden="true" /> },
      { name: "MySQL", icon: <SiMysql size={16} aria-hidden="true" /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={16} aria-hidden="true" /> },
      { name: "MongoDB", icon: <SiMongodb size={16} aria-hidden="true" /> },
    ],
  },
  {
    key: "cloud",
    label: { es: "Cloud & DevOps", en: "Cloud & DevOps" },
    color: "text-sky-400",
    border: "border-sky-400/20",
    bg: "bg-sky-400/5",
    dot: "bg-sky-400",
    skills: [
      { name: "Azure", icon: <AzureDevOpsIcon /> },
      { name: "Docker", icon: <SiDocker size={16} aria-hidden="true" /> },
      { name: "Vercel", icon: <SiVercel size={16} aria-hidden="true" /> },
      { name: "Git", icon: <SiGit size={16} aria-hidden="true" /> },
      { name: "GitHub", icon: <SiGithub size={16} aria-hidden="true" /> },
      { name: "GitLab", icon: <SiGitlab size={16} aria-hidden="true" /> },
      { name: "Hostinger", icon: <SiHetzner size={16} aria-hidden="true" /> },
      { name: "GoDaddy", icon: <SiGodaddy size={16} aria-hidden="true" /> },
    ],
  },
  {
    key: "ai",
    label: { es: "IA & Automatización", en: "AI & Automation" },
    color: "text-purple-400",
    border: "border-purple-400/20",
    bg: "bg-purple-400/5",
    dot: "bg-purple-400",
    skills: [
      { name: "OpenAI API", icon: <OpenAIIcon /> },
      { name: "n8n", icon: <SiN8n size={16} aria-hidden="true" /> },
      { name: "Blip", icon: <Bot size={16} aria-hidden="true" /> },
      { name: "Claude", icon: <SiClaude size={16} aria-hidden="true" /> },
      { name: "Gemini API", icon: <SiGooglegemini size={16} aria-hidden="true" /> },
    ],
  },
  {
    key: "data",
    label: { es: "Datos & BI", en: "Data & BI" },
    color: "text-orange-400",
    border: "border-orange-400/20",
    bg: "bg-orange-400/5",
    dot: "bg-orange-400",
    skills: [
      { name: "Power BI", icon: <BarChart2 size={16} aria-hidden="true" /> },
      { name: "Tableau", icon: <BarChart2 size={16} aria-hidden="true" /> },
      { name: "Pandas", icon: <SiPandas size={16} aria-hidden="true" /> },
      { name: "Postman", icon: <SiPostman size={16} aria-hidden="true" /> },
      { name: "Swagger", icon: <SiSwagger size={16} aria-hidden="true" /> },
    ],
  },
  {
    key: "devtools",
    label: { es: "IDEs & Dev Tools", en: "IDEs & Dev Tools" },
    color: "text-pink-400",
    border: "border-pink-400/20",
    bg: "bg-pink-400/5",
    dot: "bg-pink-400",
    skills: [
      { name: "VS Code", icon: <FaCode size={16} aria-hidden="true" /> },
      { name: "Visual Studio", icon: <FaMicrosoft size={16} aria-hidden="true" /> },
      { name: "Android Studio", icon: <SiAndroidstudio size={16} aria-hidden="true" /> },
      { name: "Figma", icon: <SiFigma size={16} aria-hidden="true" /> },
      { name: "Windsurf / Devin", icon: <SiWindsurf size={16} aria-hidden="true" /> },
      { name: "Cursor", icon: <FaCode size={16} aria-hidden="true" /> },
      { name: "Antigravity", icon: <FaCode size={16} aria-hidden="true" /> },
    ],
  },
  {
    key: "productivity",
    label: { es: "Productividad", en: "Productivity" },
    color: "text-teal-400",
    border: "border-teal-400/20",
    bg: "bg-teal-400/5",
    dot: "bg-teal-400",
    skills: [
      { name: "Azure DevOps", icon: <AzureDevOpsIcon /> },
      { name: "Trello", icon: <SiTrello size={16} aria-hidden="true" /> },
      { name: "Teams", icon: <FaMicrosoft size={16} aria-hidden="true" /> },
      { name: "Discord", icon: <SiDiscord size={16} aria-hidden="true" /> },
      { name: "Office 365", icon: <FaMicrosoft size={16} aria-hidden="true" /> },
      { name: "TrackingTime", icon: <SiClockify size={16} aria-hidden="true" /> },
      { name: "Notion", icon: <FaCode size={16} aria-hidden="true" /> },
    ],
  },
  {
    key: "os",
    label: { es: "Sistemas Operativos", en: "Operating Systems" },
    color: "text-slate-400",
    border: "border-slate-400/20",
    bg: "bg-slate-400/5",
    dot: "bg-slate-400",
    skills: [
      { name: "Windows", icon: <FaWindows size={16} aria-hidden="true" /> },
      { name: "Ubuntu/Linux", icon: <SiUbuntu size={16} aria-hidden="true" /> },
    ],
  },
];

export default function Skills({ locale }: SkillsProps) {
  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionTitle
        comment="// habilidades técnicas"
        title="Mi Stack Tecnológico"
        subtitle={
          locale === "es"
            ? "Tecnologías con las que construyo soluciones de extremo a extremo."
            : "Technologies I use to build end-to-end solutions."
        }
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.key}
            variants={cardVariants}
            whileHover={{ y: -3, transition: { duration: 0.2, ease: EASE_OUT } }}
            className={`glass rounded-2xl p-6 border ${cat.border} transition-shadow duration-200 hover:shadow-lg`}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className={`w-1.5 h-1.5 rounded-full ${cat.dot}`} aria-hidden="true" />
              <h3 className={`text-sm font-semibold ${cat.color} font-mono`}>
                {cat.label[locale as "es" | "en"]}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${cat.bg} border ${cat.border} cursor-default`}
                >
                  <span className={cat.color}>{skill.icon}</span>
                  <span className="text-dark-900/70 dark:text-white/70 text-xs font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
