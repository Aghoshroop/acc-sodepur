'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import Image from 'next/image';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useHasMounted } from '@/hooks/useHasMounted';
import OlympianTag from '@/components/ui/OlympianTag';


const subscribeMq = (callback: () => void) => {
  if (typeof window === 'undefined') return () => {};
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
};

export default function Scene03() {
  const containerRef = useRef<HTMLDivElement>(null);
  const filmstripRef = useRef<HTMLDivElement>(null);
  
  const isReducedMotion = useReducedMotion();
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (!hasMounted || isReducedMotion || !filmstripRef.current) return;

    const ctx = gsap.context(() => {
      // Calculate how far to translate the filmstrip
      const getScrollAmount = () => {
        const filmstripWidth = filmstripRef.current?.scrollWidth || 0;
        return -(filmstripWidth - window.innerWidth);
      };

      gsap.to(filmstripRef.current, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${(filmstripRef.current?.scrollWidth || window.innerWidth)}`, // Natural scroll speed 1:1
          scrub: 1, // Smooth scrub
          pin: true,
          invalidateOnRefresh: true, // Recalculate on resize
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [hasMounted, isReducedMotion]);

  if (!hasMounted) return <section className="w-full min-h-screen bg-[var(--color-carbon-black)]" />;

  // Graceful degradation for prefers-reduced-motion
  if (isReducedMotion) {
    return (
      <section className="w-full bg-[#1a110a] text-[var(--color-chalk-white)] flex flex-col items-center justify-center gap-32 py-32 px-4">
        <div className="text-center">
          <h2 className="text-5xl md:text-8xl font-primary font-bold uppercase tracking-tighter">The ACC Family</h2>
          <p className="text-xl md:text-3xl text-opacity-70 mt-4 tracking-widest uppercase text-[var(--color-chalk-white)]">One Community</p>
        </div>
        <div className="relative w-full max-w-7xl h-[50vh] md:h-[80vh]">
          <Image src="/images/performance/performance-roster-group.jpg" alt="The Roster" fill className="object-contain sepia-[.3]" />
        </div>
        <div className="relative w-full max-w-7xl h-[50vh] md:h-[80vh]">
          <Image src="/images/s&c.jpg" alt="Strength and Conditioning Family" fill className="object-contain sepia-[.3]" />
        </div>
        <div className="relative w-full max-w-7xl h-[50vh] md:h-[80vh] flex items-end justify-center pb-8">
          <Image src="/images/soma.jpg" alt="Soma Biswas" fill className="object-contain sepia-[.3] z-0" />
          <div className="relative z-10 text-center">
            <h3 className="font-primary text-3xl md:text-5xl uppercase tracking-wider drop-shadow-2xl text-[var(--color-chalk-white)] flex items-center justify-center">Soma Biswas<OlympianTag /></h3>
            <p className="text-xs md:text-lg opacity-90 tracking-[0.2em] uppercase drop-shadow-lg text-[var(--color-chalk-white)]">Olympian</p>
          </div>
        </div>
        <div className="relative w-full max-w-7xl h-[50vh] md:h-[80vh] flex items-end justify-center pb-8">
          <Image src="/images/susmita.jpg" alt="Susmita Singha Roy" fill className="object-contain sepia-[.3] z-0" />
          <div className="relative z-10 text-center">
            <h3 className="font-primary text-3xl md:text-5xl uppercase tracking-wider drop-shadow-2xl text-[var(--color-chalk-white)] flex items-center justify-center">Susmita Singha Roy<OlympianTag /></h3>
            <p className="text-xs md:text-lg opacity-90 tracking-[0.2em] uppercase drop-shadow-lg text-[var(--color-chalk-white)]">Olympian</p>
          </div>
        </div>
        <div className="relative w-full max-w-7xl h-[50vh] md:h-[80vh]">
          <Image src="/images/ACCfamily.jpg" alt="The ACC Family" fill className="object-contain sepia-[.3]" />
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={containerRef} 
      className="w-full h-screen bg-gradient-to-b from-[var(--color-carbon-black)] via-[#120a06] to-[#1a110a] overflow-hidden relative"
    >
      <div 
        ref={filmstripRef} 
        className="flex h-full w-max items-center will-change-transform px-12 md:px-32"
      >
        
        {/* Panel 1: Intro */}
        <div className="w-screen max-w-7xl h-full flex flex-col justify-center flex-shrink-0">
          <h2 className="text-[12vw] md:text-[8vw] font-primary font-bold text-[var(--color-chalk-white)] tracking-tighter uppercase leading-none">
            The ACC<br/>Family
          </h2>
          <p className="text-2xl md:text-4xl text-[var(--color-chalk-white)] opacity-70 mt-8 tracking-[0.3em] uppercase">
            One Community
          </p>
        </div>
        
        {/* Panel 2: Roster / Group */}
        <div className="w-[90vw] md:w-[85vw] h-[85vh] md:h-[95vh] relative mx-8 md:mx-16 flex-shrink-0">
          <Image 
            src="/images/performance/performance-roster-group.jpg" 
            alt="The Roster" 
            fill 
            className="object-contain sepia-[.4] brightness-90 grayscale-[0.2]" 
            priority 
          />
        </div>

        {/* Panel 3: S&C Group (symmetric layout) */}
        <div className="w-[85vw] md:w-[75vw] h-[85vh] md:h-[95vh] relative mx-8 md:mx-16 flex-shrink-0">
          <Image 
            src="/images/s&c.jpg" 
            alt="Strength and Conditioning Family" 
            fill 
            className="object-contain sepia-[.4] brightness-90 grayscale-[0.2]" 
          />
        </div>

        {/* Panel 4a: Soma Biswas */}
        <div className="w-[90vw] md:w-[85vw] h-[85vh] md:h-[95vh] relative mx-8 md:mx-16 flex-shrink-0">
          <Image 
            src="/images/soma.jpg" 
            alt="Soma Biswas" 
            fill 
            className="object-contain sepia-[.4] brightness-90 grayscale-[0.2]" 
          />
          <div className="absolute inset-0 bg-[var(--color-carbon-black)] opacity-20 pointer-events-none" />
          <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 md:pb-20 pointer-events-none z-10 text-[var(--color-chalk-white)] text-center">
            <h3 className="font-primary text-4xl md:text-7xl uppercase tracking-wider drop-shadow-2xl flex items-center justify-center">Soma Biswas<OlympianTag /></h3>
            <p className="text-sm md:text-xl opacity-90 tracking-[0.2em] uppercase mt-2 drop-shadow-lg">Olympian / Asian Games Medalist</p>
          </div>
        </div>

        {/* Panel 4b: Susmita Singha Roy */}
        <div className="w-[90vw] md:w-[85vw] h-[85vh] md:h-[95vh] relative mx-8 md:mx-16 flex-shrink-0">
          <Image 
            src="/images/susmita.jpg" 
            alt="Susmita Singha Roy" 
            fill 
            className="object-contain sepia-[.4] brightness-90 grayscale-[0.2]" 
          />
          <div className="absolute inset-0 bg-[var(--color-carbon-black)] opacity-20 pointer-events-none" />
          <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 md:pb-20 pointer-events-none z-10 text-[var(--color-chalk-white)] text-center">
            <h3 className="font-primary text-4xl md:text-7xl uppercase tracking-wider drop-shadow-2xl flex items-center justify-center">Susmita Singha Roy<OlympianTag /></h3>
            <p className="text-sm md:text-xl opacity-90 tracking-[0.2em] uppercase mt-2 drop-shadow-lg">Olympian / Asian Games Medalist</p>
          </div>
        </div>

        {/* Panel 5: The massive group shot */}
        <div className="w-[100vw] md:w-[95vw] h-[85vh] md:h-[95vh] relative mx-8 md:mx-24 flex-shrink-0">
          <Image 
            src="/images/ACCfamily.jpg" 
            alt="The Massive ACC Family" 
            fill 
            className="object-contain sepia-[.4] brightness-90 grayscale-[0.2]" 
          />
        </div>
        
        {/* Panel 6: Empty track / Quiet ending */}
        <div className="w-screen h-[85vh] md:h-[95vh] flex items-center justify-center relative flex-shrink-0">
          <div className="w-[90vw] md:w-[80vw] h-full relative">
             <Image 
               src="/images/campus/campus-tomorrow-empty.jpg" 
               alt="Empty Track at Sunset" 
               fill 
               className="object-contain sepia-[.6] brightness-75 grayscale-[0.2]" 
             />
          </div>
        </div>

      </div>
    </section>
  );
}
