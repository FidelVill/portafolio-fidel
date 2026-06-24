"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import LinkedinIcon from "@/components/ui/LinkedinIcon";
import { social } from "@/data/social";
import LogoMark from "@/components/ui/LogoMark";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-900/5 dark:border-white/5 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo — plain anchor, no motion overhead */}
        <a
          href="#"
          className="text-sm text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white transition-colors duration-[150ms]"
        >
          <LogoMark />
        </a>

        {/* Copy */}
        <p className="text-dark-900/30 dark:text-white/30 text-xs text-center">
          © {year} Fidel Villegas Hernández ·{" "}
          {locale === "es"
            ? "Todos los derechos reservados"
            : "All rights reserved"}
        </p>

        {/* Socials — plain anchors, motion was imported but unused here */}
        <div className="flex items-center gap-4">
          <a
            href={social.github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.github.label}
            className="text-dark-900/30 dark:text-white/30 hover:text-dark-900 dark:hover:text-white transition-colors duration-[150ms]"
          >
            <SiGithub size={16} aria-hidden="true" />
          </a>

          <a
            href={social.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.linkedin.label}
            className="text-dark-900/30 dark:text-white/30 hover:text-dark-900 dark:hover:text-white transition-colors duration-[150ms]"
          >
            <LinkedinIcon size={16} />
          </a>

          <a
            href={`mailto:${social.email}`}
            className="text-dark-900/30 dark:text-white/30 hover:text-dark-900 dark:hover:text-white transition-colors duration-[150ms] text-xs font-mono"
          >
            {social.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
