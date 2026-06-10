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
        {/* Left — Code block + Stats */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          {/* Code block */}
          <div className="glass rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-white/30 text-xs font-mono">about.ts</span>
            </div>
            <div className="p-6 font-mono text-sm leading-loose">
              <p className="text-white/30">{"// desarrollador"}</p>
              <p className="text-accent mt-2">const <span className="text-white">about</span> = {"{"}</p>
              <p className="ml-4 text-white/70">name: <span className="text-green-400">"Fidel Villegas"</span>,</p>
              <p className="ml-4 text-white/70">age: <span className="text-accent">23</span>,</p>
              <p className="ml-4 text-white/70">role: <span className="text-green-400">"Fullstack + AI Dev"</span>,</p>
              <p className="ml-4 text-white/70">experience: <span className="text-green-400">"2+ años"</span>,</p>
              <p className="ml-4 text-white/70">deployments: <span className="text-accent">11</span>,</p>
              <p className="ml-4 text-white/70">speaker: <span className="text-green-400">"TecNM Nacional 2025"</span>,</p>
              <p className="ml-4 text-white/70">english: <span className="text-green-400">"B2"</span>,</p>
              <p className="ml-4 text-white/70">available: <span className="text-accent">true</span>,</p>
              <p className="text-accent">{"}"}</p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: "2+", label: locale === "es" ? "Años de experiencia" : "Years experience", color: "text-primary-500" },
              { value: "11+", label: locale === "es" ? "Deploys en producción" : "Production deploys", color: "text-accent" },
              { value: "5+", label: locale === "es" ? "Proyectos reales" : "Real projects", color: "text-green-400" },
              { value: "1", label: locale === "es" ? "Ponencia nacional" : "National talk", color: "text-purple-400" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-4 text-center"
              >
                <p className={`text-3xl font-extrabold ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-white/40 text-xs mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Mini timeline */}
          <div className="glass rounded-2xl p-5">
            <p className="text-white/30 font-mono text-xs mb-4">
              {"// trayectoria"}
            </p>
            <div className="flex flex-col gap-3">
              {[
                { year: "2025", event: locale === "es" ? "Fullstack Dev · Cantera Digital" : "Fullstack Dev · Cantera Digital", color: "bg-primary-500" },
                { year: "2025", event: locale === "es" ? "Becario · DArtesano" : "Intern · DArtesano", color: "bg-accent" },
                { year: "2025", event: locale === "es" ? "Ponente TecNM Nacional 🎓" : "TecNM National Speaker 🎓", color: "bg-purple-500" },
                { year: "2020", event: locale === "es" ? "Inicio ISC · ITM" : "Started CS · ITM", color: "bg-white/20" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${item.color} shrink-0`} />
                  <span className="text-white/30 font-mono text-xs w-10 shrink-0">
                    {item.year}
                  </span>
                  <span className="text-white/70 text-xs">{item.event}</span>
                </div>
              ))}
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