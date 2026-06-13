"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { FaLinkedinIn } from "react-icons/fa";

interface ContactProps {
  locale: string;
}

export default function Contact({ locale }: ContactProps) {
  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-primary-500 font-mono text-sm mb-3">{"// hablemos"}</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-white">
          {locale === "es" ? "Contacto" : "Contact"}
          <span className="text-primary-500">.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-dark-900/60 dark:text-white/60 leading-relaxed mb-8">
            {locale === "es"
              ? "¿Tienes un proyecto en mente o quieres hablar sobre oportunidades? Escríbeme, generalmente respondo en menos de 24 horas."
              : "Have a project in mind or want to talk about opportunities? Reach out — I usually respond within 24 hours."}
          </p>

          <ul className="flex flex-col gap-4" role="list">
            <li>
              <a
                href="mailto:villegas.h.fidel01@gmail.com"
                className="flex items-center gap-3 glass rounded-xl p-4 hover:border-primary-500/30 transition-colors group"
              >
                <Mail size={18} aria-hidden="true" className="text-primary-500 shrink-0" />
                <div>
                  <p className="text-xs text-dark-900/40 dark:text-white/40">Email</p>
                  <p className="text-dark-900 dark:text-white text-sm font-medium group-hover:text-primary-400 transition-colors">
                    villegas.h.fidel01@gmail.com
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/FidelVill"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 glass rounded-xl p-4 hover:border-primary-500/30 transition-colors group"
              >
                <SiGithub size={18} aria-hidden="true" className="text-primary-500 shrink-0" />
                <div>
                  <p className="text-xs text-dark-900/40 dark:text-white/40">GitHub</p>
                  <p className="text-dark-900 dark:text-white text-sm font-medium group-hover:text-primary-400 transition-colors">
                    github.com/FidelVill
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/fidelvillegashernandez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 glass rounded-xl p-4 hover:border-primary-500/30 transition-colors group"
              >
                <FaLinkedinIn size={18} aria-hidden="true" className="text-primary-500 shrink-0" />
                <div>
                  <p className="text-xs text-dark-900/40 dark:text-white/40">LinkedIn</p>
                  <p className="text-dark-900 dark:text-white text-sm font-medium group-hover:text-primary-400 transition-colors">
                    linkedin.com/in/fidelvillegashernandez
                  </p>
                </div>
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-2 mt-8 text-dark-900/40 dark:text-white/40 text-sm">
            <MapPin size={14} aria-hidden="true" />
            <span>
              Morelia, Michoacán, México ·{" "}
              {locale === "es" ? "Disponible remoto" : "Remote available"}
            </span>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const name = fd.get("name") as string;
              const email = fd.get("email") as string;
              const message = fd.get("message") as string;
              const subject = encodeURIComponent(`Contacto de ${name}`);
              const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
              window.location.href = `mailto:villegas.h.fidel01@gmail.com?subject=${subject}&body=${body}`;
            }}
            className="glass rounded-2xl p-6 flex flex-col gap-5"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs text-dark-900/40 dark:text-white/40 mb-2 font-medium"
              >
                {locale === "es" ? "Nombre" : "Name"}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder={locale === "es" ? "Tu nombre" : "Your name"}
                className="w-full bg-dark-900/5 dark:bg-white/5 border border-dark-900/10 dark:border-white/10 rounded-lg px-4 py-3 text-dark-900 dark:text-white text-sm placeholder:text-dark-900/20 dark:placeholder:text-white/20 focus:outline-none focus:border-primary-500/50 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs text-dark-900/40 dark:text-white/40 mb-2 font-medium"
              >
                {locale === "es" ? "Correo electrónico" : "Email"}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder={locale === "es" ? "tu@correo.com" : "your@email.com"}
                className="w-full bg-dark-900/5 dark:bg-white/5 border border-dark-900/10 dark:border-white/10 rounded-lg px-4 py-3 text-dark-900 dark:text-white text-sm placeholder:text-dark-900/20 dark:placeholder:text-white/20 focus:outline-none focus:border-primary-500/50 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs text-dark-900/40 dark:text-white/40 mb-2 font-medium"
              >
                {locale === "es" ? "Mensaje" : "Message"}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder={
                  locale === "es"
                    ? "Cuéntame sobre tu proyecto..."
                    : "Tell me about your project..."
                }
                className="w-full bg-dark-900/5 dark:bg-white/5 border border-dark-900/10 dark:border-white/10 rounded-lg px-4 py-3 text-dark-900 dark:text-white text-sm placeholder:text-dark-900/20 dark:placeholder:text-white/20 focus:outline-none focus:border-primary-500/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 text-dark-900 dark:text-white text-sm font-semibold rounded-lg transition-all hover:scale-[1.02]"
            >
              <Send size={16} aria-hidden="true" />
              {locale === "es" ? "Enviar mensaje" : "Send message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
