"use client";

import {
  SiReact, SiAngular, SiLaravel, SiPython,
  SiDocker, SiNextdotjs, SiSupabase,
} from "@icons-pack/react-simple-icons";

const OpenAIIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9 6.07 6.07 0 0 0-10.27 2.17 5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07zm-9.02 12.61a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.8.8 0 0 0 .39-.68V11.6l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.49zm-9.66-4.12a4.47 4.47 0 0 1-.53-3.01l.14.08 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.95a4.5 4.5 0 0 1-6.14-1.64zm-1.26-9.4a4.49 4.49 0 0 1 2.37-1.97v5.71a.77.77 0 0 0 .39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0L3.97 15.6a4.5 4.5 0 0 1-.63-6.69zm16.6 3.86-5.84-3.37 2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.68a.79.79 0 0 0-.4-.68zm2.01-3.02-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zm-12.63 4.15L6.3 11.7a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.79.79 0 0 0-.39.68v6.74zm1.1-2.37 2.6-1.5 2.61 1.5v3L12 15l-2.61-1.5.03-3.01z" />
  </svg>
);

const OUTER_ICONS = [
  { Icon: SiAngular,   label: "Angular"  },
  { Icon: SiLaravel,   label: "Laravel"  },
  { Icon: SiNextdotjs, label: "Next.js"  },
  { Icon: SiSupabase,  label: "Supabase" },
  { Icon: OpenAIIcon,  label: "OpenAI"   },
] as const;

const INNER_ICONS = [
  { Icon: SiReact,  label: "React"  },
  { Icon: SiPython, label: "Python" },
  { Icon: SiDocker, label: "Docker" },
] as const;

const OUTER_RADIUS = "min(200px, 45vw)";
const INNER_RADIUS = "min(130px, 29vw)";
const OUTER_CHIP = 36;
const INNER_CHIP = 28;

interface TechOrbitProps {
  className?: string;
}

export default function TechOrbit({ className = "" }: TechOrbitProps) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      {/* Outer track ring */}
      <div className="absolute inset-0 rounded-full border border-white/5" />

      {/* Inner track ring — centered square inset by (50% - inner_radius) */}
      <div
        className="absolute rounded-full border border-white/5"
        style={{ inset: `calc(50% - ${INNER_RADIUS})` }}
      />

      {/* Outer orbit — clockwise, 20s */}
      <div
        className="absolute inset-0"
        style={{ animation: "orbit-spin 20s linear infinite" }}
      >
        {OUTER_ICONS.map(({ Icon, label }, i) => {
          const angle = i * (360 / OUTER_ICONS.length);
          return (
            <div
              key={label}
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                width: 0,
                height: 0,
                transform: `rotate(${angle}deg) translateX(${OUTER_RADIUS})`,
              }}
            >
              <div
                className="flex items-center justify-center rounded-full bg-dark-900/85 dark:bg-dark-800/90 border border-dark-700/40 shadow-md text-white/40"
                style={{
                  width: OUTER_CHIP,
                  height: OUTER_CHIP,
                  marginTop: -(OUTER_CHIP / 2),
                  marginLeft: -(OUTER_CHIP / 2),
                  animation: "orbit-counter 20s linear infinite",
                }}
              >
                <Icon size={20} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Inner orbit — counter-clockwise, 14s */}
      <div
        className="absolute inset-0"
        style={{ animation: "orbit-counter 14s linear infinite" }}
      >
        {INNER_ICONS.map(({ Icon, label }, i) => {
          const angle = i * (360 / INNER_ICONS.length);
          return (
            <div
              key={label}
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                width: 0,
                height: 0,
                transform: `rotate(${angle}deg) translateX(${INNER_RADIUS})`,
              }}
            >
              <div
                className="flex items-center justify-center rounded-full bg-dark-900/85 dark:bg-dark-800/90 border border-dark-700/40 shadow-md text-white/40"
                style={{
                  width: INNER_CHIP,
                  height: INNER_CHIP,
                  marginTop: -(INNER_CHIP / 2),
                  marginLeft: -(INNER_CHIP / 2),
                  animation: "orbit-spin 14s linear infinite",
                }}
              >
                <Icon size={16} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
