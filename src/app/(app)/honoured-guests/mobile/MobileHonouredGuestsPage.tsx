import React from 'react';
import Image from 'next/image';

interface GuestMember {
  name: string;
  title: string;
}

interface GuestGroup {
  category: string;
  members: GuestMember[];
}

export default function MobileHonouredGuestsPage({ guests }: { guests: GuestGroup[] }) {
  return (
    <div className="w-full bg-chalk-white text-carbon-black min-h-screen relative flex flex-col pt-32 pb-24 px-6">
      
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="font-primary text-[5rem] leading-[0.85] uppercase tracking-tighter text-carbon-black mb-8">
          Honoured <br/>
          Guests
        </h1>
        
        <div className="text-carbon-black/80 font-body text-base leading-relaxed mb-10">
          <p className="mb-6">
            For more than five decades, Athletic Coaching Camp has welcomed
            Olympians, national coaches, sports administrators, government leaders,
            and distinguished personalities who have contributed to Indian sport.
          </p>
          <p className="font-bold tracking-widest uppercase text-xs text-track-red">
            Since 1969.
          </p>
        </div>

        <div className="relative w-full aspect-[4/5] bg-carbon-black/5 overflow-hidden">
          <Image 
            src="/medal.jpg" 
            alt="Historical ACC Photograph"
            fill
            className="object-cover opacity-90 mix-blend-multiply contrast-125"
            priority
          />
          <div className="absolute inset-0 border border-carbon-black/10 z-10" />
        </div>
        <p className="mt-4 text-[10px] tracking-widest text-carbon-black/40 uppercase text-right">
          Archive Photography
        </p>
      </section>

      {/* Editorial Roster */}
      <section>
        <div className="w-full h-px bg-carbon-black/10 mb-16" />
        
        <div className="flex flex-col gap-16">
          {guests.map((group) => (
            <div key={group.category}>
              <h2 className="text-xs tracking-[0.2em] uppercase font-bold text-track-red mb-8">
                {group.category}
              </h2>
              
              <div className="flex flex-col gap-6">
                {group.members.map((member, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col border-b border-carbon-black/10 pb-6 last:border-0"
                  >
                    <h3 className="text-2xl font-primary uppercase tracking-tight text-carbon-black mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-carbon-black/60 font-body font-medium">
                      {member.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
