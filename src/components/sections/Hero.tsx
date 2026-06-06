"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { FaLinkedinIn } from "react-icons/fa";

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
            className="text-4xl md:text-6xl font-extrabold text-white mb-3 leading-tight"
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
            <span className="font-mono text-white/70 text-lg ml-1">
              {displayed}
            </span>
            <span className="w-0.5 h-5 bg-accent animate-pulse ml-0.5" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/60 text-base leading-relaxed mb-8 max-w-md"
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
            className="flex items-center gap-1.5 text-white/40 text-sm mb-8"
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
            <a
              href="#projects"
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-lg transition-all hover:scale-105"
            >
              {locale === "es" ? "Ver proyectos" : "View projects"} →
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 hover:border-white/40 text-white/70 hover:text-white text-sm font-semibold rounded-lg transition-all"
            >
              {locale === "es" ? "Contáctame" : "Contact me"}
            </a>
          </motion.div>

          {/* Social + Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-6"
          >
            <a href="https://github.com/FidelVill" target="_blank"
              className="text-white/40 hover:text-white transition-colors">
              <SiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/fidelvillegashernandez" target="_blank"
              className="text-white/40 hover:text-white transition-colors">
              <FaLinkedinIn size={20} />
            </a>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex gap-6 text-sm">
              <div>
                <span className="text-white font-bold">2+</span>
                <span className="text-white/40 ml-1 text-xs">
                  {locale === "es" ? "años exp." : "yrs exp."}
                </span>
              </div>
              <div>
                <span className="text-white font-bold">11+</span>
                <span className="text-white/40 ml-1 text-xs">deploys</span>
              </div>
              <div>
                <span className="text-white font-bold">5+</span>
                <span className="text-white/40 ml-1 text-xs">
                  {locale === "es" ? "proyectos" : "projects"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — Code block */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <div className="glass rounded-2xl overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-white/30 text-xs font-mono">
                fidel.ts
              </span>
            </div>
            {/* Code */}
            <div className="p-6 font-mono text-sm leading-relaxed">
              <p className="text-white/30">{"// About me"}</p>
              <p className="text-accent mt-2">const <span className="text-white">developer</span> = {"{"}</p>
              <p className="ml-4 text-white/70">name: <span className="text-green-400">"Fidel Villegas"</span>,</p>
              <p className="ml-4 text-white/70">role: <span className="text-green-400">"Fullstack Developer"</span>,</p>
              <p className="ml-4 text-white/70">location: <span className="text-green-400">"Morelia, MX"</span>,</p>
              <p className="ml-4 text-white/70">stack: [</p>
              <p className="ml-8 text-green-400">"React", "Angular", "Laravel",</p>
              <p className="ml-8 text-green-400">"Python", "Next.js", "Flutter",</p>
              <p className="ml-4 text-white/70">],</p>
              <p className="ml-4 text-white/70">ai: <span className="text-green-400">"OpenAI API"</span>,</p>
              <p className="ml-4 text-white/70">available: <span className="text-accent">true</span>,</p>
              <p className="text-accent">{"}"}</p>
              <p className="mt-4 text-white/30">{"// Ponente TecNM 2025 🎓"}</p>
            </div>
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
          className="text-white/20 hover:text-white/40 transition-colors cursor-pointer"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}