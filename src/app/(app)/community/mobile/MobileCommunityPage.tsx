import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MobileCommunityPage() {
  return (
    <div className="w-full bg-carbon-black text-chalk-white min-h-screen relative flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[70vh] flex flex-col justify-end items-center text-center pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ACCfamily.jpg"
            alt="The ACC Family"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/60 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full text-chalk-white">
          <span className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4 block font-bold">
            More than a camp
          </span>
          <h1 className="text-6xl sm:text-7xl font-primary uppercase tracking-tighter leading-[0.9] mb-4 drop-shadow-2xl flex flex-col items-center">
            <span className="block">The</span>
            <span className="block text-transparent [-webkit-text-stroke:2px_var(--color-chalk-white)]">Family</span>
          </h1>
          <p className="text-sm font-light text-chalk-white/80 tracking-[0.2em] uppercase">
            Blood, Sweat, and Brotherhood
          </p>
        </div>
      </section>

      {/* 2. The Ethos */}
      <section className="relative w-full py-16 bg-carbon-black border-t border-chalk-white/10 px-6">
        <div className="absolute inset-0 z-0">
          <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-10 " />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 w-full">
          <div className="mb-10">
            <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">01 // The Ethos</div>
            <h2 className="text-4xl sm:text-5xl font-primary uppercase tracking-tight leading-[1.1] mb-6">
              Driven By Passion.<br/> <span className="text-transparent [-webkit-text-stroke:1.5px_var(--color-chalk-white)]">Not Profit.</span>
            </h2>
          </div>
          
          <div className="relative w-full h-[400px] mb-8 border border-chalk-white/10 overflow-hidden">
            <Image
              src="/images/performance/performance-roster-group.jpg"
              alt="ACC Roster"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute bottom-0 left-0 w-[90%] border-t border-r border-chalk-white/10 bg-carbon-black/80 p-4 backdrop-blur-md">
              <p className="text-lg font-primary uppercase tracking-wide leading-[1.2] text-chalk-white">
                We suffer together.<br/> We win together.<br/> <span className="text-track-red">The medals belong to all of us.</span>
              </p>
            </div>
          </div>
          
          <div className="space-y-6 text-chalk-white/70 font-light text-sm leading-relaxed">
            <p>
              ACC began with a stolen football and 8 refugee kids. Today, it hosts over 200 elite athletes. Yet, its core philosophy remains absolutely unchanged. 
            </p>
            <p>
              We are a strictly non-profit organization. Athletes here do not buy their way in; they earn their place through relentless dedication. When you step onto the track, you aren't just training for yourself—you are upholding the standard for the athlete running beside you.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Living Legacy */}
      <section className="relative w-full py-16 bg-chalk-white text-carbon-black px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="grid-light-mobile" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-light-mobile)" />
          </svg>
        </div>
        
        <div className="relative z-10 w-full mb-10">
          <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">02 // The Lineage</div>
          <h2 className="text-5xl font-primary uppercase tracking-tight mb-6">
            A Living Legacy
          </h2>
          <p className="text-base text-carbon-black/70 font-light leading-relaxed">
            Once an ACC athlete, always an ACC athlete. Our Olympians don't just leave; they return to pass the torch.
          </p>
        </div>

        <div className="relative z-10 w-full">
          <div className="relative aspect-video w-full overflow-hidden border border-carbon-black/20 mb-8">
            <Image
              src="/images/athletes.jpg"
              alt="The Wall of Medalists"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 text-chalk-white">
              <div className="w-8 h-[2px] bg-track-red" />
              <span className="font-primary uppercase tracking-widest text-xs">The Hall of Fame</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            {[
              { title: "Mentorship", desc: "Senior athletes actively guide the youth, forming a chain of knowledge that dates back to 1969. The knowledge is never hoarded, only shared." },
              { title: "The Wall", desc: "Every national and international medalist is immortalized on the ACC wall, setting the uncompromising standard for the next generation." },
              { title: "Support", desc: "When an athlete struggles, the entire community rallies. No one fights their battles alone on or off the track." }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-6 border border-carbon-black/10 bg-carbon-black/5"
              >
                <div className="w-10 h-10 rounded-full border border-track-red/30 flex items-center justify-center mb-6 bg-track-red/10">
                  <span className="text-track-red font-primary text-lg">0{idx+1}</span>
                </div>
                <h4 className="text-2xl font-primary uppercase tracking-tight mb-3 text-carbon-black">{item.title}</h4>
                <p className="text-carbon-black/70 font-light leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Rituals (Events) */}
      <section className="relative w-full py-16 bg-carbon-black text-chalk-white px-6">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/relay/relay-hero-night-race.jpg"
            alt="Premier Relay Night Race"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/80 to-carbon-black/40" />
        </div>

        <div className="relative z-10 w-full flex flex-col justify-end min-h-[50vh]">
          <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">03 // The Rituals</div>
          <h2 className="text-4xl sm:text-5xl font-primary uppercase tracking-tight mb-6 leading-[1.1]">
            Nights of <br/> Fire & Glory
          </h2>
          <p className="text-sm text-chalk-white/70 font-light mb-8 leading-relaxed">
            The ACC community truly comes alive during our legendary events. From gritty intra-camp time trials to the electrifying Premier Relay night races, these events forge the unbreakable spirit of our athletes under the stadium lights.
          </p>
          
          <Link 
            href="/premier-relay" 
            className="inline-flex items-center gap-4"
          >
            <span className="text-xs font-primary uppercase tracking-widest text-track-red">
              Explore The Premier Relay
            </span>
            <div className="w-12 h-[1px] bg-track-red" />
          </Link>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="relative w-full py-24 bg-track-red text-chalk-white px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
          <span className="text-[30vw] font-primary uppercase whitespace-nowrap leading-none select-none -rotate-90 md:rotate-0">Brotherhood</span>
        </div>
        
        <div className="relative z-10 w-full flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl font-primary uppercase tracking-tight mb-6">
            You don't just join a camp.<br/> You inherit a legacy.
          </h2>
          <p className="text-sm text-chalk-white/90 font-light mb-12 uppercase tracking-[0.1em]">
            Are you ready to become part of the family?
          </p>
          
          <Link 
            href="/admissions" 
            className="inline-block relative w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-[#0A0A0A] transform translate-x-1.5 translate-y-1.5" />
            <div className="relative bg-chalk-white text-[#0A0A0A] px-8 py-4 border border-[#0A0A0A] text-xs tracking-[0.2em] uppercase font-bold flex items-center justify-center gap-3">
              Apply for Admission
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/>
              </svg>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}
