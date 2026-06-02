import Navbar from "@/components/layout/Navbar";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar locale={locale} />
      <div className="h-screen flex items-center justify-center">
        <p className="text-white/50 font-mono text-sm">
          &lt; Portafolio en construcción /&gt;
        </p>
      </div>
    </main>
  );
}