'use client';

import Image from 'next/image';

export default function MobileSchedulePage() {
  return (
    <div className="w-full bg-carbon-black text-chalk-white flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col justify-center border-b border-chalk-white/10 overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <Image src="/images/performance/performance-hero-focus.jpg" alt="Background" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 w-full text-center mt-20">
          <span className="text-[10px] tracking-[0.4em] uppercase text-track-red mb-4 block font-bold">
            Training Schedule
          </span>
          <h1 className="text-5xl font-primary uppercase tracking-tighter leading-none mb-6">
            The<br />Routine
          </h1>
          <div className="w-12 h-[1px] bg-track-red mx-auto mt-6" />
        </div>
      </section>

      {/* Schedule Content */}
      <section className="relative w-full py-16 px-6">
        <div className="absolute inset-0 z-0">
          <Image src="/images/legacy/legacy-timeline-2002.jpg" alt="Background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 w-full flex flex-col gap-12">
          {/* Section: Standard Regimen */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-primary uppercase tracking-tight text-track-red mb-4 border-b border-chalk-white/10 pb-4">
              Standard Regimen
            </h2>
            <div className="bg-chalk-white/5 border border-chalk-white/10 p-6 flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-chalk-white/60 font-bold">Evening Session</span>
              <span className="text-xl font-light tracking-wider">16:30 - 18:30</span>
            </div>
          </div>

          {/* Section: High Performance Group */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-primary uppercase tracking-tight text-track-red mb-4 border-b border-chalk-white/10 pb-4">
              High Performance Group
            </h2>
            <div className="bg-chalk-white/5 border border-chalk-white/10 p-6 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-chalk-white/60 font-bold">Morning Session</span>
                <span className="text-xl font-light tracking-wider mb-1">06:00 - 10:00</span>
                <span className="text-xs text-chalk-white/40 italic">(followed by home rest)</span>
              </div>
              <div className="w-full h-[1px] bg-chalk-white/10" />
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-chalk-white/60 font-bold">Evening Session</span>
                <span className="text-xl font-light tracking-wider">16:30 - 18:30</span>
              </div>
            </div>
          </div>

          {/* Section: Rest Days */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-primary uppercase tracking-tight text-track-red mb-4 border-b border-chalk-white/10 pb-4">
              Rest Days
            </h2>
            <div className="bg-chalk-white/5 border border-chalk-white/10 p-6">
              <p className="text-sm font-light leading-relaxed text-chalk-white/80">
                Sundays are reserved for active recovery and mobility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
