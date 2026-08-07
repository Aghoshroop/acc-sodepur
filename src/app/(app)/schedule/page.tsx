import Image from 'next/image';
import HeroStark from '@/components/ui/HeroStark';
import TextCanvas from '@/components/ui/TextCanvas';
import MobileSchedulePage from './mobile/MobileSchedulePage';

export const metadata = {
  title: 'Schedule | Athletic Coaching Camp',
};

export default function SchedulePage() {
  return (
    <main className="w-full bg-carbon-black min-h-screen">
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block relative w-full">
        <section className="sticky top-0 z-10 w-full min-h-screen flex flex-col justify-center border-b border-chalk-white/10 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/images/performance/performance-hero-focus.jpg" alt="Background" fill className="object-cover opacity-20 " />
            <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
          </div>
          <div className="relative z-10 w-full">
            <HeroStark 
              title={<>The<br />Routine</>}
              subtitle="Training Schedule"
              theme="dark"
            />
          </div>
        </section>

        <section className="sticky top-0 z-20 w-full min-h-screen pt-32 pb-16 overflow-y-auto">
          <div className="absolute inset-0 z-0">
            <Image src="/images/legacy/legacy-timeline-2002.jpg" alt="Background" fill className="object-cover opacity-20 " />
            <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
          </div>
          <div className="relative z-10 w-full max-w-[1200px] mx-auto text-chalk-white">
            <TextCanvas title="Daily Regimen" theme="dark">
              <h2>Standard Regimen</h2>
              <p><strong>Evening Session:</strong> 16:30 - 18:30</p>

              <h2>High Performance Group</h2>
              <p><strong>Morning Session:</strong> 06:00 - 10:00 (followed by home rest)</p>
              <p><strong>Evening Session:</strong> 16:30 - 18:30</p>
              
              <h2>Rest Days</h2>
              <p>Sundays are reserved for active recovery and mobility.</p>
            </TextCanvas>
          </div>
        </section>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full relative z-20">
        <MobileSchedulePage />
      </div>

    </main>
  );
}
