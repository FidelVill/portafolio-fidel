# Portafolio — Fidel Villegas Hernández

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-black?style=flat-square&logo=vercel)

## 🚀 Stack

| Tecnología | Uso |
|---|---|
| Next.js 16 + TypeScript | Framework principal, App Router, SSR |
| Tailwind CSS v4 | Estilos con `@theme` y variante `dark:` |
| Framer Motion | Animaciones, spring physics, `useInView` |
| next-intl | Internacionalización ES / EN |
| @icons-pack/react-simple-icons | Iconos de tecnologías (GitHub, etc.) |
| Vercel | Deploy y hosting |

## ✨ Features

- Diseño responsive mobile-first
- Dark / Light mode con persistencia en `localStorage`
- Internacionalización completa (Español / English) vía next-intl
- Animaciones con Framer Motion — easing personalizado, spring physics, stagger
- Contadores animados con `requestAnimationFrame` y ease-out cúbico
- Timeline de experiencia con reveal por clip-path
- Descarga de CV según idioma activo (ES / EN)
- GitHub stats en tiempo real con caché de módulo
- Formulario de contacto vía `mailto:` con estado de confirmación
- Accesibilidad: `aria-label`, `aria-current`, `aria-expanded`, `rel="noopener noreferrer"`

## 📁 Estructura del proyecto

```
src/
├── app/[locale]/       # Rutas internacionalizadas (App Router)
├── components/
│   ├── layout/         # Navbar, Footer, ThemeProvider
│   ├── sections/       # Hero, About, Skills, Experience, Projects, Contact, GithubStats
│   └── ui/             # Button, TechTag, LogoMark, SectionTitle
├── data/               # Proyectos, experiencia, skills, certificaciones
├── hooks/              # useCounter
├── i18n/               # Configuración next-intl (routing, request)
├── lib/                # cn(), getTechColor(), theme helpers
├── messages/           # es.json, en.json
└── types/              # Interfaces TypeScript compartidas
```

## 🌐 Demo

[portafolio-fidel.vercel.app](https://portafolio-fidel.vercel.app)

## 📬 Contacto

- Email: [villegas.h.fidel01@gmail.com](mailto:villegas.h.fidel01@gmail.com)
- LinkedIn: [linkedin.com/in/fidelvillegashernandez](https://linkedin.com/in/fidelvillegashernandez)
- GitHub: [github.com/FidelVill](https://github.com/FidelVill)

---

Diseñado y desarrollado por Fidel Villegas Hernández © 2026
