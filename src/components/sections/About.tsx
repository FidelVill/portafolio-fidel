"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Languages, Award } from "lucide-react";

interface AboutProps {
  locale: string;
}

export default function About({ locale }: AboutProps) {
  const cards = [
    {
      icon: <GraduationCap size={18} />,
      label: locale === "es" ? "Educación" : "Education",
      value: "Instituto Tecnológico de Morelia",
      sub: locale === "es"
        ? "Ing. Sistemas Computacionales · 2020–2024"
        : "Computer Systems Engineering · 2020–2024",
    },
    {
      icon: <MapPin size={18} />,
      label: locale === "es" ? "Ubicación" : "Location",
      value: "Morelia, Michoacán",
      sub: locale === "es" ? "México · Disponible remoto" : "México · Remote available",
    },
    {
      icon: <Languages size={18} />,
      label: locale === "es" ? "Idiomas" : "Languages",
      value: locale === "es" ? "Español nativo · Inglés B2" : "Native Spanish · English B2",
      sub: locale === "es" ? "Comunicación técnica fluida" : "Fluent technical communication",
    },
    {
      icon: <Award size={18} />,
      label: locale === "es" ? "Reconocimiento" : "Recognition",
      value: locale === "es" ? "Ponente TecNM 2025" : "TecNM Speaker 2025",
      sub: locale === "es"
        ? "Foro Nacional de Salud · IA aplicada"
        : "National Health Forum · Applied AI",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left — Code block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-white/30 text-xs font-mono">about.ts</span>
            </div>
            <div className="p-6 font-mono text-sm leading-loose">
              <p className="text-white/30">{"// Mi trayectoria"}</p>
              <p className="text-accent mt-2">const <span className="text-white">about</span> = {"{"}</p>
              <p className="ml-4 text-white/70">experience: <span className="text-green-400">&quot;2+ años&quot;</span>,</p>
              <p className="ml-4 text-white/70">deployments: <span className="text-accent">11</span>,</p>
              <p className="ml-4 text-white/70">speciality: <span className="text-green-400">&quot;Fullstack + IA&quot;</span>,</p>
              <p className="ml-4 text-white/70">passion: [</p>
              <p className="ml-8 text-green-400">&quot;Clean Code&quot;,</p>
              <p className="ml-8 text-green-400">&quot;Scalable Apps&quot;,</p>
              <p className="ml-8 text-green-400">&quot;AI Integration&quot;,</p>
              <p className="ml-4 text-white/70">],</p>
              <p className="ml-4 text-white/70">
                openToWork: <span className="text-accent">true</span>,
              </p>
              <p className="text-accent">{"}"}</p>
              <p className="mt-4 text-white/30">
                {"// export default developer 🚀"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right — Text + Cards */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary-500 font-mono text-sm mb-3">
              {"// sobre mí"}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              {locale === "es"
                ? "Construyo soluciones digitales que funcionan"
                : "I build digital solutions that work"}
              <span className="text-primary-500">.</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              {locale === "es"
                ? "Soy Ingeniero en Sistemas Computacionales apasionado por crear aplicaciones web y móviles con impacto real. Me especializo en el ciclo completo de desarrollo: desde el diseño en Figma hasta el despliegue en producción."
                : "I'm a Computer Systems Engineer passionate about creating web and mobile apps with real impact. I specialize in the full development cycle: from Figma design to production deployment."}
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              {locale === "es"
                ? "En 2025 fui ponente en el Primer Foro Nacional de la Agenda Estratégica de la Salud del TecNM, presentando investigación sobre modelos de IA aplicados al cálculo de insulina en diabetes tipo 1."
                : "In 2025 I was a speaker at Mexico's National Health Strategic Agenda Forum (TecNM), presenting AI models applied to insulin calculation for type 1 diabetes patients."}
            </p>
          </motion.div>

          {/* Info cards */}
          <div className="grid grid-cols-2 gap-3">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-4"
              >
                <div className="flex items-center gap-2 text-primary-500 mb-2">
                  {card.icon}
                  <span className="text-xs font-medium text-white/40">
                    {card.label}
                  </span>
                </div>
                <p className="text-white text-sm font-semibold leading-tight">
                  {card.value}
                </p>
                <p className="text-white/40 text-xs mt-1">{card.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}