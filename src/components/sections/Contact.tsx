"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { FaLinkedinIn } from "react-icons/fa";
import { social } from "@/data/social";
import SectionTitle from "@/components/ui/SectionTitle";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

interface ContactProps {
  locale: string;
}

export default function Contact({ locale }: ContactProps) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const mailtoUrl = `mailto:villegas.h.fidel01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
    window.open(mailtoUrl);
    setSent(true);
  };

  const inputClass =
    "w-full bg-dark-900/5 dark:bg-white/5 border border-dark-900/10 dark:border-white/10 rounded-lg px-4 py-3 text-dark-900 dark:text-white text-sm placeholder:text-dark-900/20 dark:placeholder:text-white/20 focus:outline-none focus:border-primary-500/50 transition-colors duration-[150ms]";

  const labelClass =
    "block text-xs text-dark-900/40 dark:text-white/40 mb-2 font-medium";

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionTitle
        comment="// hablemos"
        title={locale === "es" ? "Contacto" : "Contact"}
      />

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        >
          <p className="text-dark-900/60 dark:text-white/60 leading-relaxed mb-8">
            {locale === "es"
              ? "¿Tienes un proyecto en mente o quieres hablar sobre oportunidades? Escríbeme, generalmente respondo en menos de 24 horas."
              : "Have a project in mind or want to talk about opportunities? Reach out — I usually respond within 24 hours."}
          </p>

          <ul className="flex flex-col gap-4" role="list">
            <li>
              <a
                href={`mailto:${social.email}`}
                className="flex items-center gap-3 glass rounded-xl p-4 hover:border-primary-500/30 transition-colors duration-[150ms] group"
              >
                <Mail size={18} aria-hidden="true" className="text-primary-500 shrink-0" />
                <div>
                  <p className="text-xs text-dark-900/40 dark:text-white/40">Email</p>
                  <p className="text-dark-900 dark:text-white text-sm font-medium group-hover:text-primary-400 transition-colors duration-[150ms]">
                    {social.email}
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a
                href={social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 glass rounded-xl p-4 hover:border-primary-500/30 transition-colors duration-[150ms] group"
              >
                <SiGithub size={18} aria-hidden="true" className="text-primary-500 shrink-0" />
                <div>
                  <p className="text-xs text-dark-900/40 dark:text-white/40">GitHub</p>
                  <p className="text-dark-900 dark:text-white text-sm font-medium group-hover:text-primary-400 transition-colors duration-[150ms]">
                    github.com/FidelVill
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a
                href={social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 glass rounded-xl p-4 hover:border-primary-500/30 transition-colors duration-[150ms] group"
              >
                <FaLinkedinIn size={18} aria-hidden="true" className="text-primary-500 shrink-0" />
                <div>
                  <p className="text-xs text-dark-900/40 dark:text-white/40">LinkedIn</p>
                  <p className="text-dark-900 dark:text-white text-sm font-medium group-hover:text-primary-400 transition-colors duration-[150ms]">
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

        {/* Right — Form / Success */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease: EASE_OUT }}
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
              className="glass rounded-2xl p-8 flex flex-col items-center justify-center gap-4 text-center h-full min-h-[320px]"
            >
              <CheckCircle size={40} className="text-green-400" aria-hidden="true" />
              <div>
                <p className="text-dark-900 dark:text-white font-semibold text-lg">
                  {locale === "es" ? "¡Mensaje enviado!" : "Message sent!"}
                </p>
                <p className="text-dark-900/50 dark:text-white/50 text-sm mt-1">
                  {locale === "es"
                    ? "Tu cliente de correo debería abrirse. Te responderé pronto."
                    : "Your email client should have opened. I'll get back to you soon."}
                </p>
              </div>
              <button
                onClick={() => setSent(false)}
                className="mt-2 text-xs text-dark-900/40 dark:text-white/40 hover:text-dark-900 dark:hover:text-white transition-colors duration-[150ms] underline underline-offset-2"
              >
                {locale === "es" ? "Enviar otro mensaje" : "Send another message"}
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 flex flex-col gap-5">
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  {locale === "es" ? "Nombre" : "Name"}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder={locale === "es" ? "Tu nombre" : "Your name"}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className={labelClass}>
                  {locale === "es" ? "Correo electrónico" : "Email"}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={locale === "es" ? "tu@correo.com" : "your@email.com"}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className={labelClass}>
                  {locale === "es" ? "Asunto" : "Subject"}
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  placeholder={locale === "es" ? "¿En qué puedo ayudarte?" : "How can I help you?"}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className={labelClass}>
                  {locale === "es" ? "Mensaje" : "Message"}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder={
                    locale === "es"
                      ? "Cuéntame sobre tu proyecto..."
                      : "Tell me about your project..."
                  }
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.16, ease: EASE_OUT }}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-lg transition-colors duration-[150ms]"
              >
                <Send size={16} aria-hidden="true" />
                {locale === "es" ? "Enviar mensaje" : "Send message"}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
