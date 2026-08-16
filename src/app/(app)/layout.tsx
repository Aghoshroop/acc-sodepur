import Navigation from '@/components/layout/Navigation';
import MasterCanvas from '@/components/layout/MasterCanvas';
import Footer from '@/components/layout/Footer';
import { getActiveNotices } from '@/features/notices/api';

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const notices = await getActiveNotices();
  const serializedNotices = notices.map(n => ({
    id: n.id,
    publishDate: n.publishDate
  }));

  return (
    <div className="min-h-screen flex flex-col text-carbon-black selection:bg-track-red selection:text-chalk-white relative z-0">
      <MasterCanvas />
      
      {/* Navigation (Responsive Header & Sidebar) */}
      <Navigation notices={serializedNotices} />

      {/* Main page content - z-20 so it covers the footer until the end */}
      <div className="relative z-20 flex-grow flex flex-col bg-[var(--color-carbon-black)]">
        <main className="flex-grow flex flex-col">
          {children}
        </main>
      </div>
      
      {/* Footer handles its own sticky reveal layers */}
      <Footer />
    </div>
  );
}
