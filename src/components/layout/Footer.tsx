"use client";

import { motion } from "framer-motion";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <motion.a
          href="#"
          className="font-mono text-sm font-bold text-white/50 hover:text-white transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-primary-500">&lt;</span>
          {" FV "}
          <span className="text-primary-500">/&gt;</span>
        </motion.a>

        {/* Copy */}
        <p className="text-white/30 text-xs text-center">
          © {year} Fidel Villegas Hernández ·{" "}
          {locale === "es"
            ? "Todos los derechos reservados"
            : "All rights reserved"}
        </p>

        {/* Socials */}
        <div className="flex items-center gap-4">
          <motion.a
            href="https://github.com/FidelVill"
            target="_blank"
            className="text-white/30 hover:text-white transition-colors"
          >
            <SiGithub size={16} />
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/in/fidelvillegashernandez"
            target="_blank"
            className="text-white/30 hover:text-white transition-colors"
          >
            <FaLinkedin size={16} />
          </motion.a>
          
          <motion.a
            href="mailto:villegas.h.del01@gmail.com"
            className="text-white/30 hover:text-white transition-colors text-xs font-mono"
          >
            villegas.h.del01@gmail.com
          </motion.a>
        </div>

      </div>
    </footer>
  );
}