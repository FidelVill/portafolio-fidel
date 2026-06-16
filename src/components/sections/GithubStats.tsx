"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { GitBranch } from "lucide-react";
import { social } from "@/data/social";

interface GithubStatsProps {
  locale: string;
}

interface Stats {
  repos: number;
  followers: number;
  publicGists: number;
}

// Module-level cache — survives re-mounts, prevents redundant fetches
let cache: Stats | null = null;
let fetched = false;

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

export default function GithubStats({ locale }: GithubStatsProps) {
  const [stats, setStats] = useState<Stats | null>(cache);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (fetched) {
      if (cache) setStats(cache);
      return;
    }

    fetched = true;
    fetch("https://api.github.com/users/FidelVill")
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status}`);
        return res.json();
      })
      .then((data) => {
        cache = {
          repos: data.public_repos ?? 0,
          followers: data.followers ?? 0,
          publicGists: data.public_gists ?? 0,
        };
        setStats(cache);
      })
      .catch(() => {
        fetched = false; // allow retry on next mount
        setError(true);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: EASE_OUT }}
      className="glass rounded-2xl p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <SiGithub size={18} aria-hidden="true" className="text-dark-900 dark:text-white" />
        <p className="text-dark-900/40 dark:text-white/40 font-mono text-xs">
          {locale === "es" ? "Actividad en GitHub" : "GitHub Activity"}
        </p>
      </div>

      {error ? (
        <p className="text-dark-900/40 dark:text-white/40 text-xs text-center py-4">
          {locale === "es"
            ? "No se pudieron cargar las estadísticas."
            : "Could not load stats."}
        </p>
      ) : stats ? (
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-extrabold text-primary-500">{stats.repos}</p>
            <p className="text-dark-900/40 dark:text-white/40 text-xs mt-1">Repos</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-extrabold text-accent">{stats.followers}</p>
            <p className="text-dark-900/40 dark:text-white/40 text-xs mt-1">
              {locale === "es" ? "Seguidores" : "Followers"}
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-extrabold text-green-500">{stats.publicGists}</p>
            <p className="text-dark-900/40 dark:text-white/40 text-xs mt-1">Gists</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 animate-pulse">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center">
              <div className="h-8 bg-dark-900/10 dark:bg-white/10 rounded mb-1" />
              <div className="h-3 bg-dark-900/10 dark:bg-white/10 rounded w-12 mx-auto" />
            </div>
          ))}
        </div>
      )}

      {/* Contribution graph — next/image with explicit size for no CLS */}
      <div className="mt-4 overflow-hidden rounded-lg">
        <Image
          src="https://ghchart.rshah.org/1A56DB/FidelVill"
          alt={locale === "es" ? "Gráfica de contribuciones de GitHub" : "GitHub contributions graph"}
          width={800}
          height={128}
          className="w-full h-auto"
          loading="lazy"
          unoptimized
        />
      </div>

      <a
        href={`${social.github.url}?tab=repositories`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={locale === "es" ? "Ver repositorios en GitHub" : "View repositories on GitHub"}
        className="flex items-center justify-center gap-2 w-full mt-4 py-2 text-xs text-dark-900/50 dark:text-white/50 hover:text-dark-900 dark:hover:text-white border border-dark-900/10 dark:border-white/10 rounded-lg transition-colors duration-[150ms]"
      >
        <GitBranch size={14} aria-hidden="true" />
        {locale === "es" ? "Ver repositorios" : "View repositories"}
      </a>
    </motion.div>
  );
}
