"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import LinkedinIcon from "@/components/ui/LinkedinIcon";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";
import { social } from "@/data/social";
import LogoMark from "@/components/ui/LogoMark";
import { EASE_OUT } from "@/lib/motion";

const navLinks = [
  { href: "#about", label: { es: "Sobre mí", en: "About" } },
  { href: "#skills", label: { es: "Habilidades", en: "Skills" } },
  { href: "#projects", label: { es: "Proyectos", en: "Projects" } },
  { href: "#experience", label: { es: "Experiencia", en: "Experience" } },
  { href: "#contact", label: { es: "Contacto", en: "Contact" } },
];

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const cvFilename = locale === "es" ? "CV_Fidel_Villegas_ES_2026.pdf" : "CV_Fidel_Villegas_EN_2026.pdf";
  const cvHref = `/${cvFilename}`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section via Intersection Observer
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`); },
        { rootMargin: "-20% 0px -70% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: EASE_OUT }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-light-50/90 dark:bg-dark-900/90 backdrop-blur-md border-b border-dark-900/5 dark:border-white/5 py-3"
          : "py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo — no whileHover (used constantly, animation adds friction) */}
        <a href="#" className="text-lg text-dark-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-[150ms]">
          <LogoMark />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                aria-current={active === link.href ? "page" : undefined}
                className={cn(
                  "text-sm font-medium transition-all duration-[150ms]",
                  active === link.href
                    ? "text-accent underline underline-offset-4 decoration-accent/40"
                    : "text-dark-900/60 dark:text-white/60 hover:text-dark-900 dark:hover:text-white"
                )}
              >
                {link.label[locale as "es" | "en"]}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Lang Toggle */}
          <a
            href={locale === "es" ? "/en" : "/es"}
            className="text-xs font-mono font-bold text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white transition-colors duration-[150ms] px-2 py-1 rounded border border-dark-900/10 dark:border-white/10 hover:border-dark-900/30 dark:hover:border-white/30"
          >
            {locale === "es" ? "EN" : "ES"}
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white hover:bg-dark-900/10 dark:hover:bg-white/10 transition-colors duration-[150ms]"
          >
            {theme === "dark" ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
          </button>

          {/* Social */}
          <a
            href={social.github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.github.label}
            className="p-2 rounded-lg text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white hover:bg-dark-900/10 dark:hover:bg-white/10 transition-colors duration-[150ms]"
          >
            <SiGithub size={16} aria-hidden="true" />
          </a>
          <a
            href={social.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.linkedin.label}
            className="p-2 rounded-lg text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white hover:bg-dark-900/10 dark:hover:bg-white/10 transition-colors duration-[150ms]"
          >
            <LinkedinIcon size={16} />
          </a>

          {/* CV Button */}
          <a
            href={cvHref}
            download={cvFilename}
            className="px-4 py-2 text-xs font-semibold bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-[150ms]"
          >
            {locale === "es" ? "Descargar CV" : "Download CV"}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          className="md:hidden p-2 text-dark-900/70 dark:text-white/70 hover:text-dark-900 dark:hover:text-white transition-colors duration-[150ms]"
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 400 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="md:hidden bg-light-50/95 dark:bg-dark-900/95 backdrop-blur-md border-t border-dark-900/5 dark:border-white/5 overflow-hidden"
          >
            <ul className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      setActive(link.href);
                      setMenuOpen(false);
                      // Let the menu close animation start before scrolling
                      const id = link.href.slice(1);
                      setTimeout(() => {
                        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                      }, 120);
                    }}
                    aria-current={active === link.href ? "page" : undefined}
                    className="text-sm font-medium text-dark-900/70 dark:text-white/70 hover:text-dark-900 dark:hover:text-white transition-colors duration-[150ms] w-full text-left"
                  >
                    {link.label[locale as "es" | "en"]}
                  </button>
                </li>
              ))}
              <li className="flex items-center gap-3 pt-2 border-t border-dark-900/10 dark:border-white/10">
                <a
                  href={locale === "es" ? "/en" : "/es"}
                  className="text-xs font-mono font-bold text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white transition-colors duration-[150ms] px-2 py-1 rounded border border-dark-900/10 dark:border-white/10"
                >
                  {locale === "es" ? "EN" : "ES"}
                </a>
                <button
                  onClick={toggleTheme}
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                  className="p-2 text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white transition-colors duration-[150ms]"
                >
                  {theme === "dark" ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
                </button>
                <a
                  href={cvHref}
                  download={cvFilename}
                  className="ml-auto px-4 py-2 text-xs font-semibold bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-[150ms]"
                >
                  CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
