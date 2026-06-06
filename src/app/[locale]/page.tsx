import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar locale={locale} />
      <Hero locale={locale} />
    </main>
  );
}