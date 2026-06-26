import type { Metadata } from "next";
import { Geist, Geist_Mono, Fira_Code } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ThemeProvider from "@/components/layout/ThemeProvider";
import NeuralBackground from "@/components/ui/NeuralBackground";

import "../globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

const SITE_URL = "https://portafolio-fidel.vercel.app";

const META = {
  es: {
    title: "Fidel Villegas | Desarrollador Fullstack · Integración IA",
    description:
      "Desarrollador Fullstack especializado en React, Angular, Laravel y Python. +11 deploys en producción.",
    ogDescription:
      "Desarrollador Fullstack con experiencia en proyectos reales en producción.",
    twitterDescription: "Desarrollador Fullstack con +11 deploys en producción.",
  },
  en: {
    title: "Fidel Villegas | Fullstack Developer · AI Integration",
    description:
      "Fullstack Developer specialized in React, Angular, Laravel and Python. 11+ production deployments.",
    ogDescription:
      "Fullstack Developer with hands-on experience building real production projects.",
    twitterDescription: "Fullstack Developer with 11+ production deployments.",
  },
} as const;

const KEYWORDS = [
  "Fullstack Developer",
  "Fullstack Developer Mexico",
  "Desarrollador Fullstack",
  "React",
  "Angular",
  "Next.js",
  "TypeScript",
  "Laravel",
  "Python",
  "Node.js",
  "Docker",
  "Flutter",
  "AI Integration",
  "OpenAI",
  "Integración IA",
];

// Inline script injected before React hydrates to eliminate theme FOUC.
// Reads localStorage key "theme"; falls back to prefers-color-scheme; defaults to dark.
const THEME_SCRIPT = `try{var t=localStorage.getItem('theme');if(!t)t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.classList.toggle('dark',t==='dark')}catch(e){document.documentElement.classList.add('dark')}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = (locale as "es" | "en") in META ? (locale as "es" | "en") : "es";
  const meta = META[lang];

  return {
    title: meta.title,
    description: meta.description,
    keywords: KEYWORDS,
    authors: [{ name: "Fidel Villegas Hernández" }],
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "32x32" },
      ],
      apple: "/apple-touch-icon.png",
      shortcut: "/favicon.ico",
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        es: `${SITE_URL}/es`,
        en: `${SITE_URL}/en`,
        "x-default": `${SITE_URL}/es`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.ogDescription,
      type: "website",
      url: `${SITE_URL}/${locale}`,
      images: [
        {
          url: `${SITE_URL}/foto_perfil.png`,
          width: 1200,
          height: 630,
          alt: "Fidel Villegas — Fullstack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.twitterDescription,
      images: [`${SITE_URL}/foto_perfil.png`],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const lang = (locale as "es" | "en") in META ? (locale as "es" | "en") : "es";
  const meta = META[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fidel Villegas Hernández",
    jobTitle:
      lang === "es"
        ? "Desarrollador Fullstack · Integración IA"
        : "Fullstack Developer · AI Integration",
    description: meta.description,
    image: `${SITE_URL}/foto_perfil.png`,
    url: `${SITE_URL}/${locale}`,
    sameAs: [
      "https://github.com/FidelVill",
      "https://linkedin.com/in/fidelvillegashernandez",
    ],
  };

  return (
    <html
      lang={locale}
      className={`${geist.variable} ${geistMono.variable} ${firaCode.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Blocks render until theme class is set — eliminates light/dark FOUC */}
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={geist.className}>
        <NeuralBackground subtle />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
