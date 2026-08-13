'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getMediaByZone } from '@/features/gallery/data';
import { animateArchiveHero } from '../animations';

export default function SectionArchiveHero() {
  const containerRef = useRef<HTMLElement>(null);
  const media = getMediaByZone('Hero');
  const bgImage = '/images/track-field.jpg';

  useEffect(() => {
    const cleanup = animateArchiveHero(containerRef);
    return cleanup;
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[50vh] md:h-screen overflow-hidden bg-[#050505]">
      {/* Collage Background */}
      <div className="absolute inset-0 w-full h-full hero-bg" style={{ filter: 'grayscale(100%) sepia(20%) brightness(0.5)' }}>
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-2 p-2 opacity-60">
          <div className="relative w-full h-full col-span-2 row-span-2 overflow-hidden rounded-xl">
            <Image unoptimized={true} src="/images/athletes.jpg" alt="Athletes" fill className="object-cover" priority />
          </div>
          <div className="relative w-full h-full overflow-hidden rounded-xl">
            <Image unoptimized={true} src="/images/medal.jpg" alt="Medal" fill className="object-cover" priority />
          </div>
          <div className="relative w-full h-full overflow-hidden rounded-xl">
            <Image unoptimized={true} src="/images/acc2.jpg" alt="Team" fill className="object-cover" priority />
          </div>
        </div>
        
        <div className="hero-overlay absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] opacity-[0.05] pointer-events-none" />
        {/* Vignette */}
        <div className="hero-overlay absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/60 to-[#050505] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="hero-title-group relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-primary uppercase tracking-[0.2em] text-[#F6F2EA] drop-shadow-2xl">
          The Archive
        </h1>
        <p className="mt-8 text-xl md:text-2xl font-secondary tracking-wide text-[#C8A96A] max-w-2xl mx-auto italic drop-shadow-lg">
          Where every photograph carries the weight of history.
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="hero-title-group absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[#F6F2EA]/50 text-xs tracking-[0.3em] uppercase">Begin Journey</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C8A96A] to-transparent" />
      </div>
    </section>
  );
}
