import React from 'react';
import Image from 'next/image';

interface EventItem {
  title: string;
  subtitle: string;
  description: string;
}

export default function MobileEventsPage({ events }: { events: EventItem[] }) {
  return (
    <div className="w-full bg-carbon-black text-chalk-white min-h-screen relative flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col justify-end pb-12 px-6">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/473379031_8722792124495871_1880928105700214232_n.jpg" 
            alt="Events Hero" 
            fill 
            className="object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/60 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full">
          <span className="text-track-red text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-4 block font-bold">
            Fixed Annual Events
          </span>
          <h1 className="text-6xl sm:text-7xl font-primary uppercase tracking-tight leading-[0.9] text-chalk-white">
            The<br />Calendar
          </h1>
        </div>
      </section>

      {/* Grid Section */}
      <section className="relative w-full flex-grow bg-carbon-black py-16 px-6">
        <div className="absolute inset-0 z-0">
          <Image src="/images/legacy/legacy-timeline-2002.jpg" alt="Background" fill className="object-cover opacity-10 " />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 w-full flex flex-col gap-6">
          {events.map((event, idx) => (
            <div 
              key={idx}
              className="w-full bg-transparent border border-chalk-white/20 p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-track-red text-[10px] tracking-[0.3em] uppercase block font-bold mb-3">
                  {event.subtitle}
                </span>
                <h3 className="text-3xl font-primary uppercase tracking-tight text-chalk-white mb-4">
                  {event.title}
                </h3>
                <p className="text-chalk-white/70 font-light text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-chalk-white/10 pt-4">
                <span className="text-chalk-white/30 font-primary text-xl">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
