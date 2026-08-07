import Image from 'next/image';
import { getActiveNotices } from '@/features/notices/api';
import MobileNoticesPage from './mobile/MobileNoticesPage';

export default async function NoticesPage() {
  const notices = await getActiveNotices();

  return (
    <main className="w-full bg-chalk-white text-carbon-black min-h-screen relative overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-10 " />
        <div className="absolute inset-0 bg-gradient-to-b from-chalk-white/95 to-chalk-white/80 backdrop-blur-sm" />
      </div>

      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 pt-48 pb-24">
        <div className="mb-24 gap-12 border-b border-carbon-black/20 pb-16">
          <h2 className="text-xs md:text-sm tracking-[0.4em] uppercase opacity-40 mb-6">Notice Board</h2>
          <h1 className="text-5xl md:text-7xl font-primary uppercase tracking-tight font-light leading-[1.1]">
            All Announcements
          </h1>
        </div>

        {notices.length === 0 ? (
          <p className="text-carbon-black/60 font-light text-lg">No active announcements at this time.</p>
        ) : (
          <div className="flex flex-col">
            {notices.map((notice) => (
              <div 
                key={notice.id} 
                className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-10 border-b border-carbon-black/10 hover:border-carbon-black/40 transition-colors duration-500"
              >
                <div className="md:col-span-2 flex flex-col justify-start">
                  <div className="mb-4">
                    <p className="text-[10px] tracking-[0.2em] uppercase opacity-40 font-bold mb-1">Posted</p>
                    <p className="text-xs md:text-sm tracking-[0.2em] uppercase opacity-70 font-light">
                      {new Date(notice.publishDate).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                    </p>
                  </div>
                  {notice.eventDate && (
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-track-red font-bold mb-1">Event Date</p>
                      <p className="text-xs md:text-sm tracking-[0.2em] uppercase font-bold text-carbon-black">
                        {new Date(notice.eventDate).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                      </p>
                    </div>
                  )}
                </div>

                <div className="md:col-span-2">
                  <p className={`text-[10px] md:text-xs font-semibold tracking-widest uppercase w-max px-3 py-1.5 ${
                    ['URGENT', 'FEATURED', 'TODAY'].includes(notice.category.toUpperCase())
                      ? 'bg-track-red text-chalk-white'
                      : 'bg-carbon-black/5 text-carbon-black/70'
                  }`}>
                    {notice.category}
                  </p>
                </div>

                <div className="md:col-span-8 flex flex-col justify-center">
                  <h4 className="text-2xl md:text-4xl font-primary uppercase tracking-wide mb-4 text-carbon-black">
                    {notice.title}
                  </h4>
                  <p className="text-sm md:text-base font-light opacity-80 leading-relaxed max-w-4xl whitespace-pre-wrap">
                    {notice.description}
                  </p>
                  
                  {notice.link && (
                    <a href={notice.link} target="_blank" rel="noopener noreferrer" className="mt-6 text-track-red hover:opacity-80 transition-opacity text-sm tracking-widest uppercase flex items-center gap-2 w-max">
                      Learn More
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full relative z-20">
        <MobileNoticesPage notices={notices as any} />
      </div>
    </main>
  );
}
