"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { GitBranch } from "lucide-react";
import { social } from "@/data/social";
import { useCounter } from "@/hooks/useCounter";

interface GithubStatsProps {
  locale: string;
}

interface Stats {
  repos: number;
  followers: number;
  publicGists: number;
}

const CACHE_TTL = 3_600_000; // 1 hour in ms

interface CacheEntry {
  data: Stats;
  timestamp: number;
}

// Module-level cache — survives re-mounts within a session
let cache: CacheEntry | null = null;

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const EMPTY: Stats = { repos: 0, followers: 0, publicGists: 0 };

function isFresh(entry: CacheEntry): boolean {
  return Date.now() - entry.timestamp < CACHE_TTL;
}

function hasData(s: Stats): boolean {
  return s.repos > 0 || s.followers > 0 || s.publicGists > 0;
}

export default function GithubStats({ locale }: GithubStatsProps) {
  const [stats, setStats] = useState<Stats>(EMPTY);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const reposCounter = useCounter(stats.repos);
  const followersCounter = useCounter(stats.followers);
  const gistsCounter = useCounter(stats.publicGists);

  useEffect(() => {
    // Serve fresh cache immediately — no network call needed
    if (cache && isFresh(cache) && hasData(cache.data)) {
      setStats(cache.data);
      setLoading(false);
      return;
    }

    fetch("https://api.github.com/users/FidelVill")
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("GitHub API response:", data);

        const fresh: Stats = {
          repos: data.public_repos ?? 0,
          followers: data.followers ?? 0,
          publicGists: data.public_gists ?? 0,
        };

        // Only cache if the API actually returned real data
        if (hasData(fresh)) {
          cache = { data: fresh, timestamp: Date.now() };
        }

        setStats(fresh);
        setLoading(false);
      })
      .catch((err: Error) => {
        console.error("GitHub API error:", err.message);

        // On rate-limit, surface stale cache rather than error
        if (err.message === "403" && cache && hasData(cache.data)) {
          setStats(cache.data);
          setLoading(false);
        } else {
          setLoading(false);
          setError(true);
        }
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
            ? "Stats temporalmente no disponibles."
            : "Stats temporarily unavailable."}
        </p>
      ) : loading ? (
        <div className="grid grid-cols-3 gap-4 animate-pulse">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center">
              <div className="h-8 bg-dark-900/10 dark:bg-white/10 rounded mb-1" />
              <div className="h-3 bg-dark-900/10 dark:bg-white/10 rounded w-12 mx-auto" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          <div ref={reposCounter.ref} className="text-center">
            <p className="text-2xl font-extrabold text-primary-500">{reposCounter.count}</p>
            <p className="text-dark-900/40 dark:text-white/40 text-xs mt-1">Repos</p>
          </div>
          <div ref={followersCounter.ref} className="text-center">
            <p className="text-2xl font-extrabold text-accent">{followersCounter.count}</p>
            <p className="text-dark-900/40 dark:text-white/40 text-xs mt-1">
              {locale === "es" ? "Seguidores" : "Followers"}
            </p>
          </div>
          <div ref={gistsCounter.ref} className="text-center">
            <p className="text-2xl font-extrabold text-green-500">{gistsCounter.count}</p>
            <p className="text-dark-900/40 dark:text-white/40 text-xs mt-1">Gists</p>
          </div>
        </div>
      )}

      {/* Contribution graph */}
      <div className="mt-4 overflow-hidden rounded-lg">
        <Image
          src="https://ghchart.rshah.org/7C3AED/FidelVill"
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
