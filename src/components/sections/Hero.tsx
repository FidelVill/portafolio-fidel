"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, Download } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const roles = [
  "Fullstack Developer",
  "Web & Mobile Dev",
  "AI Integrations",
  "Open to Work",
];

interface HeroProps {
  locale: string;
}

export default function Hero({ locale }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 pt-20 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left — Text */}
        <div className="order-2 md:order-1">
          {/* Open to work badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            {locale === "es" ? "Disponible para trabajar" : "Open to work"}
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-dark-900 dark:text-white mb-3 leading-tight"
          >
            {locale === "es" ? "Hola, soy" : "Hi, I'm"}
            <br />
            <span className="gradient-text">Fidel Villegas</span>
          </motion.h1>

          {/* Typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-1 mb-6 h-8"
          >
            <span className="text-accent font-mono text-lg">$</span>
            <span className="font-mono text-dark-900/70 dark:text-white/70 text-lg ml-1">
              {displayed}
            </span>
            <span className="w-0.5 h-5 bg-accent animate-pulse ml-0.5" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-dark-900/60 dark:text-white/60 text-base leading-relaxed mb-6 max-w-md"
          >
            {locale === "es"
              ? "Desarrollo aplicaciones web y móviles de alto rendimiento con integración de IA. +11 despliegues en producción."
              : "I build high-performance web and mobile apps with AI integration. 11+ production deployments."}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-1.5 text-dark-900/40 dark:text-white/40 text-sm mb-8"
          >
            <MapPin size={14} />
            <span>Morelia, Michoacán, México</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-dark-900 dark:text-white text-sm font-semibold rounded-lg transition-all hover:scale-105"
            >
              {locale === "es" ? "Ver proyectos" : "View projects"} →
            </motion.a>

            <motion.a
              href="/CV_Fidel_Villegas_2025.docx"
              download
              className="px-6 py-3 border border-dark-900/20 dark:border-white/20 hover:border-dark-900/40 dark:hover:border-white/40 text-dark-900/70 dark:text-white/70 hover:text-dark-900 dark:hover:text-white text-sm font-semibold rounded-lg transition-all flex items-center gap-2"
            >
              <Download size={14} />
              CV
            </motion.a>
          </motion.div>

          {/* Social + Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-6"
          >
            <a href="https://github.com/FidelVill" target="_blank"
              className="text-dark-900/40 dark:text-white/40 hover:text-dark-900 dark:hover:text-white transition-colors">
              <SiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/fidelvillegashernandez" target="_blank"
              className="text-dark-900/40 dark:text-white/40 hover:text-dark-900 dark:hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            <div className="w-px h-6 bg-dark-900/10 dark:bg-white/10" />
            <div className="flex gap-6 text-sm">
              <div>
                <span className="text-dark-900 dark:text-white font-bold">2+</span>
                <span className="text-dark-900/40 dark:text-white/40 ml-1 text-xs">
                  {locale === "es" ? "años exp." : "yrs exp."}
                </span>
              </div>
              <div>
                <span className="text-dark-900 dark:text-white font-bold">11+</span>
                <span className="text-dark-900/40 dark:text-white/40 ml-1 text-xs">deploys</span>
              </div>
              <div>
                <span className="text-dark-900 dark:text-white font-bold">5+</span>
                <span className="text-dark-900/40 dark:text-white/40 ml-1 text-xs">
                  {locale === "es" ? "proyectos" : "projects"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-primary-500/20 blur-2xl scale-110" />

            {/* Photo */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-dark-900/10 dark:border-white/10">
              <Image
                src="/foto_perfil.png"
                alt="Fidel Villegas"
                fill
                sizes="(max-width: 768px) 288px, 320px"
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-dark-900 dark:text-white text-xs font-medium">
                {locale === "es" ? "Disponible" : "Available"}
              </span>
            </motion.div>

            {/* Floating stack badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1 }}
              className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2"
            >
              <span className="text-dark-900/70 dark:text-white/70 text-xs font-mono">
                Fullstack + AI
              </span>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex justify-center mt-16 md:mt-12"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-dark-900/20 dark:text-white/20 hover:text-dark-900/40 dark:hover:text-white/40 transition-colors cursor-pointer"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
