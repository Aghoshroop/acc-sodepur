import Link from 'next/link';
import { getActiveNotices } from '@/features/notices/api';
import AnimatedNoticeCard from './AnimatedNoticeCard';

export default async function NoticeBoardPreview() {
  const notices = await getActiveNotices();
  // Take only the top 3 notices for the preview
  const recentNotices = notices.slice(0, 3);

  return (
    <section className="relative z-10 w-full bg-chalk-white text-carbon-black overflow-hidden border-t border-carbon-black/10 py-12 md:py-16">
      {/* Animated Background Rays (Full Section) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none opacity-40">
         <div className="absolute top-1/2 left-1/2 w-[200%] aspect-square -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite]"
              style={{ background: 'conic-gradient(from 0deg, transparent 0deg, rgba(230,32,32,0.15) 30deg, transparent 60deg, rgba(230,32,32,0.15) 90deg, transparent 120deg, rgba(230,32,32,0.15) 150deg, transparent 180deg, rgba(230,32,32,0.15) 210deg, transparent 240deg, rgba(230,32,32,0.15) 270deg, transparent 300deg, rgba(230,32,32,0.15) 330deg, transparent 360deg)' }}
         />
      </div>

      {/* Red Dot Grid Background Effect (Full Section) */}
      <div 
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none animate-[pulse_4s_ease-in-out_infinite]"
        style={{
          backgroundImage: 'radial-gradient(circle, #E62020 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(circle at center, black, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 100%)'
        }}
      />
      
      {/* Center ambient glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-track-red/10 blur-[150px] rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 md:px-12 flex flex-col">
        
        {/* Cards */}
        <div className="flex flex-col w-full">
          
          {/* Section Divider */}
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold bg-track-red text-chalk-white px-3 py-1.5 rounded-sm shadow-sm shrink-0">
              LATEST ANNOUNCEMENTS
            </h3>
            <div className="flex-grow h-[1px] bg-gradient-to-r from-carbon-black/20 to-transparent" />
            <Link href="/notices" className="text-track-red text-[10px] md:text-xs flex items-center gap-2 hover:opacity-80 transition-opacity font-semibold shrink-0">
              See All 
              <span className="text-lg leading-none transform translate-y-[[-1px]]">→</span>
            </Link>
          </div>

          {/* Cards List */}
          <div className="flex flex-col gap-4 relative z-10">
            {recentNotices.map((notice, index) => (
              <AnimatedNoticeCard key={notice.id} notice={notice as any} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
