"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, MapPin, Download } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { social } from "@/data/social";

const roles = [
  "Fullstack Developer",
  "Web & Mobile Dev",
  "AI Integrations",
  "Open to Work",
];

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
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  const cvFilename = locale === "es" ? "CV_Fidel_Villegas_ES_2026.pdf" : "CV_Fidel_Villegas_EN_2026.pdf";
  const cvHref = `/${cvFilename}`;

  // Mouse-tracking spring tilt for the photo card (decorative — Emil's useSpring pattern)
  const cardRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        40
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

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
          {/* Open to work badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-6"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
            </span>
            {locale === "es" ? "Disponible para trabajar" : "Open to work"}
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold text-dark-900 dark:text-white mb-3 leading-tight tracking-tight"
          >
            {locale === "es" ? "Hola, soy" : "Hi, I'm"}
            <br />
            <span className="gradient-text">Fidel Villegas</span>
          </motion.h1>

          {/* Typing effect — aria-live off prevents screen reader reading each keystroke */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-1 mb-6 h-8"
            aria-live="off"
            aria-label={roles[roleIndex]}
          >
            <span className="text-accent font-mono text-lg select-none" aria-hidden="true">$</span>
            <span className="font-mono text-dark-900/70 dark:text-white/70 text-lg ml-1" aria-hidden="true">
              {displayed}
            </span>
            <span className="w-0.5 h-5 bg-accent ml-0.5 animate-[blink_1s_step-end_infinite]" aria-hidden="true" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-dark-900/60 dark:text-white/60 text-base leading-relaxed mb-6 max-w-md"
          >
            {locale === "es"
              ? "Desarrollo aplicaciones web y móviles de alto rendimiento con integración de IA. +11 despliegues en producción."
              : "I build high-performance web and mobile apps with AI integration. 11+ production deployments."}
          </motion.p>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-1.5 text-dark-900/40 dark:text-white/40 text-sm mb-8"
          >
            <MapPin size={14} aria-hidden="true" />
            <span>Morelia, Michoacán, México</span>
          </motion.div>

          {/* CTAs — scale on hover AND press (Emil: buttons must feel responsive) */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
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

        {/* Right — Photo with mouse-tracking tilt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: EASE_OUT }}
          className="order-1 md:order-2 flex justify-center"
        >
          {/* Perspective wrapper — CSS property goes on parent */}
          <div style={{ perspective: "900px" }}>
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY }}
              className="relative"
            >
              {/* Dual-color animated glow for depth */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/25 via-accent/15 to-primary-500/10 blur-3xl scale-125 animate-pulse" />

              {/* Photo frame */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-dark-900/10 dark:border-white/10 shadow-2xl shadow-primary-500/10">
                {/* Subtle vignette for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/25 via-transparent to-transparent z-10 pointer-events-none" />
                <Image
                  src="/foto_perfil.png"
                  alt="Fidel Villegas"
                  fill
                  sizes="(max-width: 768px) 288px, 320px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Spring entrance — no artificial y oscillation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.65, type: "spring", duration: 0.5, bounce: 0.25 }}
                className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                <span className="text-dark-900 dark:text-white text-xs font-medium">
                  {locale === "es" ? "Disponible" : "Available"}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8, type: "spring", duration: 0.5, bounce: 0.25 }}
                className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2 shadow-lg"
              >
                <span className="text-dark-900/70 dark:text-white/70 text-xs font-mono">
                  Fullstack + AI
                </span>
              </motion.div>
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
