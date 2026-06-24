"use client";

import { useEffect, useState } from "react";
import { motion, useTransform, useSpring } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";
import { MapPin, Download } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import LinkedinIcon from "@/components/ui/LinkedinIcon";
import NeuralBackground from "@/components/ui/NeuralBackground";
import { social } from "@/data/social";

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

  // Parallax — motion values, no useState re-renders
  const { x: mouseX, y: mouseY } = useMousePosition();
  const springCfg = { stiffness: 150, damping: 22, mass: 0.5 };
  const photoSpringX = useSpring(useTransform(mouseX, v => -v * 16), springCfg);
  const photoSpringY = useSpring(useTransform(mouseY, v => -v * 16), springCfg);
  const titleSpringX = useSpring(useTransform(mouseX, v => -v * 8), springCfg);
  const titleSpringY = useSpring(useTransform(mouseY, v => -v * 8), springCfg);

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
    <section className="relative min-h-screen flex flex-col justify-center">
      <NeuralBackground />
      <div className="relative z-10 px-4 pt-20 max-w-6xl mx-auto w-full">
      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* Left — Text with staggered entrance */}
        <motion.div
          className="order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name — light parallax */}
          <motion.h1
            variants={itemVariants}
            style={{ x: titleSpringX, y: titleSpringY }}
            className="text-5xl md:text-7xl font-black text-dark-900 dark:text-white mb-1 leading-tight tracking-tight"
          >
            {locale === "es" ? "Hola, soy " : "Hi, I'm "}
            <span className="text-dark-900 dark:text-white font-black">Fidel Villegas</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={itemVariants}
            className="text-dark-900/50 dark:text-white/50 text-sm font-mono tracking-wide mb-4"
          >
            {locale === "es"
              ? "Desarrollador Fullstack · Integración IA"
              : "Fullstack Developer · AI Integration"}
          </motion.p>

          {/* Boot terminal */}
          <motion.div
            variants={itemVariants}
            className="mb-4 font-mono text-sm bg-dark-900/90 dark:bg-dark-800/80 dark:border-dark-600/40 backdrop-blur-sm rounded-lg p-4 border border-dark-700/50 max-w-sm"
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
                    className={line?.startsWith("✓") ? "text-accent" : "text-white/70"}
                  >
                    {line}
                  </div>
                )
              )}
              <span
                className="w-0.5 h-4 bg-accent inline-block animate-[blink_1s_step-end_infinite]"
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

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-3">
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

          {/* Available — static, no animation */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400" aria-hidden="true" />
            <span className="text-dark-900/50 dark:text-white/50 text-sm">
              {locale === "es" ? "Disponible para trabajar" : "Available for work"}
            </span>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
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
              <LinkedinIcon size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right — Photo grounded with glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: EASE_OUT }}
          className="order-1 md:order-2 flex justify-center md:justify-end mt-8"
        >
          {/* Parallax layer — deeper depth than title */}
          <motion.div style={{ x: photoSpringX, y: photoSpringY }} className="relative max-w-[280px] w-full">
            {/* Purple glow behind */}
            <div className="absolute -inset-6 bg-[#7C3AED]/20 blur-3xl rounded-3xl pointer-events-none" />
            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <Image
                src="/foto_perfil.png"
                alt="Fidel Villegas"
                fill
                sizes="(max-width: 768px) 280px, 280px"
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
      </div>

    </section>
  );
}
