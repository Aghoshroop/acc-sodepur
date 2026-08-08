'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getMediaByZone } from '@/features/gallery/data';
import { animateLegacyWall } from '../animations';

export default function SectionLegacyWall() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const media = getMediaByZone('LegacyWall');
  const topImages = media.slice(0, 2); // Needs 2 images for parallax
  const bottomImages = media.slice(2, 4); // Needs 2 images for parallax

  useEffect(() => {
    const cleanup = animateLegacyWall(sectionRef);
    return cleanup;
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-48 md:py-64 bg-[#050505] overflow-hidden flex items-center justify-center">
      
      {/* Background Floating Images */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {media.map((item, index) => {
          // Scatter images around the background
          const positions = [
            'top-[10%] left-[5%]',
            'top-[40%] right-[10%]',
            'bottom-[20%] left-[15%]',
            'top-[20%] right-[30%]',
          ];
          const pos = positions[index % positions.length];
          
          return (
            <div key={item.id} className={`legacy-bg-img absolute ${pos} w-64 md:w-96 aspect-video`}>
              <Image unoptimized={true}
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover filter grayscale opacity-20"
              />
            </div>
          );
        })}
      </div>

      {/* Massive Typography */}
      <div className="relative z-10 text-center font-primary uppercase tracking-[0.1em] md:tracking-[0.2em] text-[#F6F2EA] flex flex-col gap-8 md:gap-16 px-4">
        <div className="legacy-text-line overflow-hidden">
          <h2 className="text-5xl md:text-8xl lg:text-[140px] leading-none">
            Thousands Trained
          </h2>
        </div>
        <div className="legacy-text-line overflow-hidden">
          <h2 className="text-5xl md:text-8xl lg:text-[140px] leading-none text-[#C8A96A]">
            Hundreds Medalled
          </h2>
        </div>
        <div className="legacy-text-line overflow-hidden">
          <h2 className="text-5xl md:text-8xl lg:text-[140px] leading-none">
            One Academy
          </h2>
        </div>
      </div>

    </section>
  );
}
