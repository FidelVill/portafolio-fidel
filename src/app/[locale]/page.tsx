import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar locale={locale} />
      <Hero locale={locale} />
      <About locale={locale} />
      <Skills locale={locale} />
    </main>
  );
}