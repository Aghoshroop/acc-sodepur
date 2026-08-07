import React from 'react';
import Image from 'next/image';

interface Notice {
  id: string | number;
  publishDate: string | Date;
  eventDate?: string | Date | null;
  category: string;
  title: string;
  description: string;
  link?: string;
}

export default function MobileNoticesPage({ notices }: { notices: Notice[] }) {
  return (
    <div className="w-full bg-chalk-white text-carbon-black min-h-screen relative flex flex-col pt-32 pb-24 px-6">
      
      {/* Background element */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-10 " />
        <div className="absolute inset-0 bg-gradient-to-b from-chalk-white/95 to-chalk-white/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 w-full mb-16 border-b border-carbon-black/20 pb-12">
        <h2 className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-4 font-bold">Notice Board</h2>
        <h1 className="text-4xl font-primary uppercase tracking-tight font-light leading-[1.1]">
          All Announcements
        </h1>
      </div>

      <div className="relative z-10 w-full flex flex-col">
        {notices.length === 0 ? (
          <p className="text-carbon-black/60 font-light text-base">No active announcements at this time.</p>
        ) : (
          <div className="flex flex-col gap-10">
            {notices.map((notice) => (
              <div 
                key={notice.id} 
                className="flex flex-col border-b border-carbon-black/10 pb-8 last:border-0"
              >
                {/* Meta details */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex flex-col">
                    <p className="text-[9px] tracking-[0.2em] uppercase opacity-40 font-bold mb-0.5">Posted</p>
                    <p className="text-[11px] tracking-[0.2em] uppercase opacity-70 font-light">
                      {new Date(notice.publishDate).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                    </p>
                  </div>
                  {notice.eventDate && (
                    <div className="flex flex-col pl-4 border-l border-carbon-black/10">
                      <p className="text-[9px] tracking-[0.2em] uppercase text-track-red font-bold mb-0.5">Event Date</p>
                      <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-carbon-black">
                        {new Date(notice.eventDate).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                      </p>
                    </div>
                  )}
                </div>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className={`text-[9px] font-semibold tracking-widest uppercase inline-block px-2 py-1 ${
                    ['URGENT', 'FEATURED', 'TODAY'].includes(notice.category.toUpperCase())
                      ? 'bg-track-red text-chalk-white'
                      : 'bg-carbon-black/5 text-carbon-black/70'
                  }`}>
                    {notice.category}
                  </span>
                </div>

                {/* Content */}
                <h4 className="text-2xl font-primary uppercase tracking-wide mb-3 text-carbon-black leading-[1.2]">
                  {notice.title}
                </h4>
                <p className="text-sm font-light opacity-80 leading-relaxed whitespace-pre-wrap mb-4">
                  {notice.description}
                </p>
                
                {notice.link && (
                  <a href={notice.link} target="_blank" rel="noopener noreferrer" className="text-track-red text-[11px] font-bold tracking-widest uppercase flex items-center gap-2 mt-2 w-max">
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/>
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
