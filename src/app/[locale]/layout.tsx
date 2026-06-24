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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Fidel Villegas | Fullstack Developer · AI Integration",
    description:
      "Desarrollador Fullstack especializado en React, Angular, Laravel y Python. +11 deploys en producción.",
    keywords: ["Fullstack Developer", "React", "Angular", "Laravel", "Python"],
    authors: [{ name: "Fidel Villegas Hernández" }],
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        es: `${SITE_URL}/es`,
        en: `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title: "Fidel Villegas | Fullstack Developer · AI Integration",
      description:
        "Desarrollador Fullstack con experiencia en proyectos reales en producción.",
      type: "website",
      images: [
        {
          url: "/foto_perfil.png",
          width: 1200,
          height: 630,
          alt: "Fidel Villegas — Fullstack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Fidel Villegas | Fullstack Developer · AI Integration",
      description: "Desarrollador Fullstack con +11 deploys en producción.",
      images: ["/foto_perfil.png"],
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

  return (
    <html
      lang={locale}
      className={`${geist.variable} ${geistMono.variable} ${firaCode.variable}`}
      suppressHydrationWarning
    >
      <body className={geist.className}>
        <NeuralBackground subtle />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
