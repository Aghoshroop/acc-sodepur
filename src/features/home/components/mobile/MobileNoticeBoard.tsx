import Link from 'next/link';
import { getActiveNotices } from '@/features/notices/api';

export default async function MobileNoticeBoard() {
  const notices = await getActiveNotices();
  // Show only 3 notices on mobile
  const recentNotices = notices.slice(0, 3);

  return (
    <section className="relative w-full bg-chalk-white text-carbon-black py-16 px-4">
      
      <div className="mb-10">
        <h2 className="text-[clamp(2rem,11vw,3.5rem)] font-primary uppercase tracking-tight leading-[0.85] text-carbon-black mb-4 break-words">
          Notice Board
        </h2>
        <p className="text-[clamp(0.75rem,3.5vw,14px)] text-carbon-black/70 max-w-sm">
          Stay updated with the latest events and important institutional announcements.
        </p>
      </div>

      {/* Editorial List (No Generic Cards) */}
      <div className="flex flex-col border-t border-carbon-black/10">
        {recentNotices.map((notice) => {
          const d = new Date(notice.eventDate || notice.publishDate);
          const month = d.toLocaleString('en-US', { month: 'short' }).toUpperCase();
          const day = d.toLocaleString('en-US', { day: '2-digit' });

          return (
            <Link 
              key={notice.id} 
              href="/notices"
              className="py-5 border-b border-carbon-black/10 flex gap-4 items-start active:bg-carbon-black/5 transition-colors"
            >
              <div className="shrink-0 flex flex-col items-center justify-center w-10 pt-1">
                <span className="text-[8px] sm:text-[10px] text-track-red font-bold tracking-widest">{month}</span>
                <span className="text-xl sm:text-2xl font-bold text-carbon-black leading-none mt-1">{day}</span>
              </div>
              
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-track-red shrink-0" />
                  <span className="text-[8px] sm:text-[9px] tracking-widest uppercase text-carbon-black/50 font-bold truncate">
                    {notice.category || 'GENERAL'}
                  </span>
                </div>
                <h4 className="text-[clamp(0.85rem,4vw,1rem)] font-bold text-carbon-black leading-snug break-words">
                  {notice.title}
                </h4>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-8">
        <Link 
          href="/notices" 
          className="inline-flex items-center justify-between w-full py-4 px-5 rounded-full bg-carbon-black text-chalk-white text-[clamp(0.7rem,3.2vw,14px)] font-bold uppercase tracking-wider active:scale-95 transition-transform"
        >
          <span>View All Notices</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

    </section>
  );
}
