'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getMediaByZone } from '@/features/gallery/data';
import { useGallery } from '../context/GalleryContext';
import { animateMemoryCorridor } from '../animations';

export default function SectionMemoryCorridor() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const media = getMediaByZone('MemoryCorridor');
  const { setActiveMedia } = useGallery();

  useEffect(() => {
    const cleanup = animateMemoryCorridor(sectionRef, scrollContainerRef);
    return cleanup;
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-[#020202] overflow-hidden flex items-center">
      
      {/* Soft spotlight overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#020202]/80 to-[#020202] z-20 pointer-events-none" />

      {/* Intro text on the left */}
      <div className="absolute left-12 md:left-24 top-1/2 -translate-y-1/2 z-30 max-w-sm pointer-events-none mix-blend-difference">
        <h2 className="text-4xl md:text-6xl font-primary text-[#F6F2EA] uppercase tracking-widest drop-shadow-2xl">
          Memory Corridor
        </h2>
        <p className="text-[#C8A96A] font-secondary italic text-lg mt-4">
          Walk through the echoes of our past.
        </p>
      </div>

      {/* Scroll Container */}
      <div ref={scrollContainerRef} className="flex flex-col lg:flex-row gap-24 lg:gap-48 px-6 lg:px-[50vw] items-center py-32 lg:py-0 lg:h-full will-change-transform w-full">
        
        {media.map((item, index) => (
          <div 
            key={item.id} 
            onClick={() => setActiveMedia(item)}
            className="corridor-frame relative shrink-0 origin-top cursor-pointer w-full max-w-[400px] lg:w-auto"
          >
            {/* Hanging wire (Desktop only) */}
            <div className="hidden lg:block absolute -top-32 left-1/2 w-[2px] h-32 bg-[#F6F2EA]/10 -translate-x-1/2" />
            
            {/* Spotlight just for this frame - Removed expensive blur filter for performance */}
            <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,_rgba(246,242,234,0.05)_0%,_transparent_70%)] -z-10 pointer-events-none" />

            <div className="relative w-full lg:w-[500px] bg-[#050505] p-4 lg:p-6 border-8 border-[#1a1a1a] shadow-2xl">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image unoptimized={true}
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover filter grayscale-[70%] sepia-[0.2] hover:grayscale-0 hover:sepia-0 transition-all duration-1000 cursor-pointer"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl text-[#F6F2EA] font-secondary italic">{item.title}</h3>
                <span className="text-[#C8A96A] font-primary tracking-widest text-sm mt-2 block">{item.year}</span>
              </div>
            </div>
          </div>
        ))}
        
      </div>

    </section>
  );
}
