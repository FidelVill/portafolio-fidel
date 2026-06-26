import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";

// Below-fold sections: code-split into separate chunks to reduce initial TBT
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;

  return (
    <main className="min-h-screen">
      <Navbar locale={locale} />
      <Hero locale={locale} />
      <About locale={locale} />
      <Skills locale={locale} />
      <Experience locale={locale} />
      <Projects locale={locale} />
      <Contact locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
