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

      <main className="flex-grow flex flex-col">
        {children}
      </main>
      
      {/* Footer conditionally handles its own mobile rendering or is fine as is, but we'll leave it for now */}
      <Footer />
    </div>
  );
}
