"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { FaLinkedinIn } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-light-50/90 dark:bg-dark-900/90 backdrop-blur-md border-b border-dark-900/5 dark:border-white/5 py-3"
          : "py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="font-mono text-lg font-bold text-dark-900 dark:text-white"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-primary-500">&lt;</span>
          {" FV "}
          <span className="text-primary-500">/&gt;</span>
        </motion.a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  active === link.href
                    ? "text-primary-500"
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
            className="text-xs font-mono font-bold text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white transition-colors px-2 py-1 rounded border border-dark-900/10 dark:border-white/10 hover:border-dark-900/30 dark:hover:border-white/30"
          >
            {locale === "es" ? "EN" : "ES"}
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white hover:bg-dark-900/10 dark:hover:bg-white/10 transition-all"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Social */}
          <a
            href="https://github.com/FidelVill"
            target="_blank"
            className="p-2 rounded-lg text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white hover:bg-dark-900/10 dark:hover:bg-white/10 transition-all"
          >
            <SiGithub size={16} />
          </a>
          <a
            href="https://linkedin.com/in/fidelvillegashernandez"
            target="_blank"
            className="p-2 rounded-lg text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white hover:bg-dark-900/10 dark:hover:bg-white/10 transition-all"
          >
            <FaLinkedinIn size={16} />
          </a>

          {/* CV Button */}
          <a
            href="/cv.pdf"
            download
            className="px-4 py-2 text-xs font-semibold bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-all"
          >
            {locale === "es" ? "Descargar CV" : "Download CV"}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-dark-900/70 dark:text-white/70 hover:text-dark-900 dark:hover:text-white"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-light-50/95 dark:bg-dark-900/95 backdrop-blur-md border-t border-dark-900/5 dark:border-white/5"
          >
            <ul className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setActive(link.href);
                      setMenuOpen(false);
                    }}
                    className="text-sm font-medium text-dark-900/70 dark:text-white/70 hover:text-dark-900 dark:hover:text-white transition-colors"
                  >
                    {link.label[locale as "es" | "en"]}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 pt-2 border-t border-dark-900/10 dark:border-white/10">
                <a href={locale === "es" ? "/en" : "/es"}
                  className="text-xs font-mono font-bold text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white transition-colors px-2 py-1 rounded border border-dark-900/10 dark:border-white/10">
                  {locale === "es" ? "EN" : "ES"}
                </a>
                <button onClick={toggleTheme} className="p-2 text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white">
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </button>
                <a href="/cv.pdf" download
                  className="ml-auto px-4 py-2 text-xs font-semibold bg-primary-500 text-dark-900 dark:text-white rounded-lg">
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