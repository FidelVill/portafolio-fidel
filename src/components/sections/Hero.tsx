"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, Download } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { social } from "@/data/social";
import TechOrbit from "@/components/ui/TechOrbit";

// Emil's strong ease-out — far more intentional than the built-in CSS easings
const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

interface HeroProps {
  locale: string;
}

export default function Hero({ locale }: HeroProps) {
  const [bootLines, setBootLines] = useState<string[]>([]);

  const bootSequence = locale === "es"
    ? [
        "> Inicializando perfil...",
        "✓ Laravel",
        "✓ Angular",
        "✓ React / Next.js",
        "✓ Python / Flask",
        "✓ Docker / Azure",
        "✓ OpenAI · Gemini · Blip",
        "Estado: Disponible para construir.",
        "● Disponible para trabajar",
      ]
    : [
        "> Initializing profile...",
        "✓ Laravel",
        "✓ Angular",
        "✓ React / Next.js",
        "✓ Python / Flask",
        "✓ Docker / Azure",
        "✓ OpenAI · Gemini · Blip",
        "Status: Available to build.",
        "● Available to work",
      ];

  const cvFilename = locale === "es" ? "CV_Fidel_Villegas_ES_2026.pdf" : "CV_Fidel_Villegas_EN_2026.pdf";
  const cvHref = `/${cvFilename}`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootSequence.length) {
        const line = bootSequence[i];
        i++;
        setBootLines((prev) => [...prev, line]);
      } else {
        clearInterval(interval);
      }
    }, 400);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 pt-20 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left — Text with staggered entrance */}
        <motion.div
          className="order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl font-extrabold text-dark-900 dark:text-white mb-4 leading-tight tracking-tight"
          >
            {locale === "es" ? "Hola, soy " : "Hi, I'm "}
            <span className="gradient-text">Fidel Villegas</span>
          </motion.h1>

          {/* Boot terminal */}
          <motion.div
            variants={itemVariants}
            className="mb-4 font-mono text-sm bg-dark-900/80 dark:bg-dark-900/90 backdrop-blur-sm rounded-lg p-4 border border-dark-700/50 max-w-sm"
            aria-live="polite"
            aria-label="Stack tecnológico"
          >
            <div className="space-y-0.5">
              {bootLines.map((line, i) =>
                line?.startsWith("●") ? (
                  <div key={i}>
                    <span className="text-green-400">●</span>
                    <span className="text-green-400/80">{line.slice(1)}</span>
                  </div>
                ) : (
                  <div
                    key={i}
                    className={line?.startsWith("✓") ? "text-[#00F5FF]" : "text-white/70"}
                  >
                    {line}
                  </div>
                )
              )}
              <span
                className="w-0.5 h-4 bg-[#00F5FF] inline-block animate-[blink_1s_step-end_infinite]"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-dark-900/60 dark:text-white/60 text-base leading-relaxed mb-4 max-w-md"
          >
            {locale === "es"
              ? "Desarrollo aplicaciones web y móviles de alto rendimiento con integración de IA. +11 despliegues en producción."
              : "I build high-performance web and mobile apps with AI integration. 11+ production deployments."}
          </motion.p>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-1.5 text-dark-900/40 dark:text-white/40 text-sm mb-6"
          >
            <MapPin size={14} aria-hidden="true" />
            <span>Morelia, Michoacán, México</span>
          </motion.div>

          {/* CTAs — scale on hover AND press (Emil: buttons must feel responsive) */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.16, ease: EASE_OUT }}
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              {locale === "es" ? "Ver proyectos" : "View projects"} →
            </motion.a>

            <motion.a
              href={cvHref}
              download={cvFilename}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.16, ease: EASE_OUT }}
              className="px-6 py-3 border border-dark-900/20 dark:border-white/20 hover:border-dark-900/40 dark:hover:border-white/40 text-dark-900/70 dark:text-white/70 hover:text-dark-900 dark:hover:text-white text-sm font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <Download size={14} aria-hidden="true" />
              CV
            </motion.a>
          </motion.div>

          {/* Social + Stats */}
          <motion.div variants={itemVariants} className="flex items-center gap-6">
            <a
              href={social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.github.label}
              className="text-dark-900/40 dark:text-white/40 hover:text-dark-900 dark:hover:text-white transition-colors duration-[150ms]"
            >
              <SiGithub size={20} aria-hidden="true" />
            </a>
            <a
              href={social.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.linkedin.label}
              className="text-dark-900/40 dark:text-white/40 hover:text-dark-900 dark:hover:text-white transition-colors duration-[150ms]"
            >
              <FaLinkedin size={20} aria-hidden="true" />
            </a>
            <div className="w-px h-6 bg-dark-900/10 dark:bg-white/10" />
            <div className="flex gap-6 text-sm">
              {[
                { value: "2+", label: locale === "es" ? "años exp." : "yrs exp." },
                { value: "11+", label: "deploys" },
                { value: "5+", label: locale === "es" ? "proyectos" : "projects" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <span className="text-dark-900 dark:text-white font-bold">{value}</span>
                  <span className="text-dark-900/40 dark:text-white/40 ml-1 text-xs">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Photo with orbital ring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: EASE_OUT }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative flex items-center justify-center w-full max-w-[300px] aspect-square">

            {/* Glow behind photo */}
            <div className="absolute inset-0 rounded-full bg-primary-500/20 blur-3xl scale-110" />

            {/* TechOrbit — fills the container, icons orbit around its center */}
            <TechOrbit className="absolute inset-0" />

            {/* Photo — circular, centered, sits above the ring */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full overflow-hidden border-2 border-primary-500/40 z-10"
              style={{ boxShadow: "0 0 40px rgba(26,86,219,0.3), 0 0 80px rgba(139,92,246,0.15)" }}
            >
              <Image
                src="/foto_perfil.png"
                alt="Fidel Villegas"
                fill
                sizes="240px"
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Badge — Disponible */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute bottom-2 left-2 z-20 glass rounded-xl px-4 py-2 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-dark-900 dark:text-white text-xs font-medium">
                {locale === "es" ? "Disponible" : "Available"}
              </span>
            </motion.div>

            {/* Badge — Fullstack + AI */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1 }}
              className="absolute top-2 right-2 z-20 glass rounded-xl px-4 py-2"
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
        transition={{ delay: 1.0, duration: 0.6, ease: EASE_OUT }}
        className="flex justify-center mt-16 md:mt-12"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-dark-900/20 dark:text-white/20 hover:text-dark-900/40 dark:hover:text-white/40 transition-colors duration-[150ms] cursor-pointer"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
