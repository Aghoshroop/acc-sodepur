'use client';

import Image from 'next/image';
import { getMediaByZone } from '@/features/gallery/data';
import { useEffect, useRef } from 'react';
import { animateFilmStrip } from '../animations';

export default function SectionFilmStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const media = getMediaByZone('FilmStrip');

  // We duplicate the media to create a seamless infinite loop
  const marqueeItems = [...media, ...media, ...media, ...media];
  useEffect(() => {
    const cleanup = animateFilmStrip(sectionRef, stripRef);
    return cleanup;
  }, []);
  return (
    <section ref={sectionRef} className="relative w-full py-24 bg-[#050505] overflow-hidden border-y border-[#F6F2EA]/10">
      
      {/* Top film holes */}
      <div className="absolute top-4 left-0 right-0 h-4 flex justify-between px-4 gap-8 opacity-20 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={`top-${i}`} className="w-8 h-full bg-[#050505] rounded-sm shrink-0 border border-[#F6F2EA]/20" />
        ))}
      </div>

      <div className="my-12 relative w-full flex overflow-hidden">
        <div 
          ref={stripRef}
          className="flex gap-4 items-center w-max will-change-transform"
        >
          {marqueeItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="relative h-64 md:h-96 aspect-[3/2] shrink-0 border-x-4 border-[#050505] cursor-pointer group">
              <Image unoptimized={true}
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover filter grayscale-[40%] sepia-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:sepia-0"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom film holes */}
      <div className="absolute bottom-4 left-0 right-0 h-4 flex justify-between px-4 gap-8 opacity-20 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={`bottom-${i}`} className="w-8 h-full bg-[#050505] rounded-sm shrink-0 border border-[#F6F2EA]/20" />
        ))}
      </div>

    </section>
  );
}
