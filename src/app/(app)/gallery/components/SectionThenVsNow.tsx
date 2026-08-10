'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { getMediaByZone } from '@/features/gallery/data';

export default function SectionThenVsNow() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const thenNowPhotos = getMediaByZone('ThenVsNow');
  const thenImage = thenNowPhotos[0]?.imageUrl || '/images/acc_history/1st-acc.jpg';
  const nowImage = thenNowPhotos[1]?.imageUrl || '/images/acc2.jpg';

  return (
    <section ref={sectionRef} className="relative w-full py-24 bg-[#050505] overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#C8A96A]/5 to-[#050505] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-primary text-[#F6F2EA]/5 uppercase whitespace-nowrap pointer-events-none">
        Evolution
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-primary text-[#F6F2EA] uppercase tracking-widest drop-shadow-lg">
            Then <span className="text-[#C8A96A]">&</span> Now
          </h2>
          <p className="text-[#F6F2EA]/40 font-secondary italic text-lg mt-4 max-w-2xl mx-auto">
            Hover to witness the evolution of our legacy.
          </p>
        </div>

        {/* Hover Exchange Container */}
        <div className="relative w-full aspect-[4/3] md:aspect-video mx-auto border-4 border-[#C8A96A]/20 shadow-2xl overflow-hidden group">
          
          {/* Then Image (Default) */}
          <div className="absolute inset-0 z-10 transition-opacity duration-1000 ease-in-out group-hover:opacity-0">
            <Image
              src={thenImage}
              alt="Athletic Camp Then"
              fill
              sizes="100vw"
              className="object-cover grayscale"
            />
            <div className="absolute bottom-6 left-6 bg-[#050505]/80 backdrop-blur px-4 py-2 border-l-2 border-[#F6F2EA] text-[#F6F2EA] font-primary uppercase tracking-widest text-sm md:text-base">
              The Beginning
            </div>
          </div>

          {/* Now Image (Revealed on Hover) */}
          <div className="absolute inset-0 z-0">
            <Image
              src={nowImage}
              alt="Athletic Camp Now"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-6 right-6 bg-[#050505]/80 backdrop-blur px-4 py-2 border-r-2 border-[#C8A96A] text-[#C8A96A] font-primary uppercase tracking-widest text-sm md:text-base">
              Modern Era
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
