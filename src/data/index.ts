import { Project, Experience, Certification, Skill } from "@/types";

export const projects: Project[] = [
  {
    id: "techani",
    title: "Techani",
    description: {
      es: "Sistema integral web y móvil para el control y monitoreo de diabetes tipo 1. Incluye agentes conversacionales con OpenAI API, registro de glucosa, emociones, ejercicio y alimentación.",
      en: "Comprehensive web and mobile system for type 1 diabetes monitoring. Includes conversational AI agents with OpenAI API, glucose tracking, emotions, exercise and nutrition logging.",
    },
    tech: ["React", "Flutter", "Supabase", "Tailwind CSS", "OpenAI API", "Firebase", "CI/CD"],
    status: "production",
  },
  {
    id: "csb",
    title: "CSB — Consultoría y Servicios Biomédicos",
    description: {
      es: "Plataforma web con tienda integrada, panel administrativo con CRUD de usuarios y productos, y gestión dinámica de contenido desde el admin.",
      en: "Web platform with integrated store, admin panel with full user and product CRUD, and dynamic content management from the admin dashboard.",
    },
    tech: ["React", "Tailwind CSS", "Supabase"],
    status: "production",
  },
  {
    id: "contadores",
    title: "Consultoría de Contadores",
    description: {
      es: "Landing page profesional para despacho contable con diseño responsive y optimización para conversión.",
      en: "Professional landing page for accounting firm with responsive design and conversion optimization.",
    },
    tech: ["React", "Tailwind CSS", "Hostinger"],
    status: "production",
  },
  {
    id: "dartesano",
    title: "DArtesano — Control de Empaque",
    description: {
      es: "Sistema interno de control de empaque e insumos desarrollado desde cero. Módulos de inventario, registro de insumos y reportes operativos.",
      en: "Internal packaging and supplies control system built from scratch. Inventory modules, supply registration and operational reports.",
    },
    tech: ["Laravel", "React", "REST API", "MySQL"],
    status: "production",
  },
];

export const experiences: Experience[] = [
  {
    id: "cantera",
    role: { es: "Desarrollador Fullstack", en: "Fullstack Developer" },
    company: "Cantera Digital",
    period: { start: "Jun 2024", end: "Jun 2025" },
    location: "Morelia, MX",
    remote: true,
    description: {
      es: "Desarrollo fullstack con React, Angular, Laravel y Python/Flask. Integración de IA conversacional con OpenAI API. +11 despliegues en Azure y Hostinger. Análisis de datos con Power BI y SQL.",
      en: "Fullstack development with React, Angular, Laravel and Python/Flask. Conversational AI integration with OpenAI API. 11+ deployments on Azure and Hostinger. Data analysis with Power BI and SQL.",
    },
    tech: ["React", "Angular", "Laravel", "Python", "Flask", "Azure", "Docker", "n8n", "Blip", "Power BI"],
    type: "fulltime",
  },
  {
    id: "dartesano",
    role: { es: "Desarrollador Fullstack (Becario)", en: "Fullstack Developer (Intern)" },
    company: "DArtesano",
    period: { start: "May 2025", end: "Ene 2026" },
    location: "Santa Clara del Cobre, MX",
    remote: true,
    description: {
      es: "Diseño y desarrollo de sistema interno para control de empaque e insumos con Laravel y React mediante API REST.",
      en: "Design and development of internal packaging control system with Laravel and React via REST API.",
    },
    tech: ["Laravel", "React", "REST API", "MySQL", "GitHub"],
    type: "internship",
  },
  {
    id: "freelance-csb",
    role: { es: "Desarrollador Fullstack Freelance", en: "Freelance Fullstack Developer" },
    company: "CSB Consultoría y Servicios Biomédicos",
    period: { start: "Mar 2025", end: "Ago 2025" },
    location: "Remoto",
    remote: true,
    description: {
      es: "Plataforma web completa con tienda integrada y panel administrativo.",
      en: "Complete web platform with integrated store and admin panel.",
    },
    tech: ["React", "Tailwind CSS", "Supabase", "Hostinger"],
    type: "freelance",
  },
  {
    id: "freelance-dental",
    role: { es: "Mantenimiento Web", en: "Web Maintenance" },
    company: "DentalAdvanced",
    period: { start: "Feb 2026" },
    location: "Remoto",
    remote: true,
    description: {
      es: "Mantenimiento activo de sitio WordPress/PHP. Monitoreo SSL, actualizaciones de contenido y gestión en GoDaddy.",
      en: "Active WordPress/PHP site maintenance. SSL monitoring, content updates and GoDaddy hosting management.",
    },
    tech: ["WordPress", "PHP", "GoDaddy", "SSL"],
    type: "freelance",
  },
];

export const certifications: Certification[] = [
  {
    name: "React JS con TypeScript y Next.js",
    issuer: "Udemy",
    year: "2024",
  },
  {
    name: "JavaScript ES6 — Programación Moderna",
    issuer: "Udemy",
    year: "2024",
  },
  {
    name: "Blip Academy — Plataformas Conversacionales",
    issuer: "Blip / Take",
    year: "2025",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", category: "frontend" },
  { name: "Angular", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  // Mobile
  { name: "Flutter", category: "mobile" },
  { name: "React Native", category: "mobile" },
  // Backend
  { name: "Laravel", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "Node.js", category: "backend" },
  // Database
  { name: "Supabase", category: "database" },
  { name: "Firebase", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  // Cloud
  { name: "Azure", category: "cloud" },
  { name: "Docker", category: "cloud" },
  { name: "Vercel", category: "cloud" },
  { name: "Hostinger", category: "cloud" },
  // AI
  { name: "OpenAI API", category: "ai" },
  { name: "n8n", category: "ai" },
  { name: "Blip", category: "ai" },
  // Tools
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "Power BI", category: "tools" },
  { name: "Swagger", category: "tools" },
  { name: "Postman", category: "tools" },
];