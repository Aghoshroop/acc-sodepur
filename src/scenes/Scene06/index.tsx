'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import Image from 'next/image';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useHasMounted } from '@/hooks/useHasMounted';


const subscribeMq = (callback: () => void) => {
  if (typeof window === 'undefined') return () => {};
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
};

export default function Scene06() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const bg1Ref = useRef<HTMLDivElement>(null);
  const bg2Ref = useRef<HTMLDivElement>(null);
  
  const ms1Ref = useRef<HTMLDivElement>(null);
  const ms2Ref = useRef<HTMLDivElement>(null);
  const ms3Ref = useRef<HTMLDivElement>(null);
  const ms4Ref = useRef<HTMLDivElement>(null);

  const isReducedMotion = useReducedMotion();
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (!hasMounted || isReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Initialization
      gsap.set([ms2Ref.current, ms3Ref.current, ms4Ref.current], { scale: 1.25, opacity: 0 });
      gsap.set(ms1Ref.current, { scale: 1.25, opacity: 1 });
      gsap.set(bg2Ref.current, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%", // 400vh for slow, cinematic pacing
          scrub: true,
          pin: true,
        }
      });

      // Timeline Sequence (Total length: ~11 units)
      
      // MS1: 57 YEARS (0 to 2)
      tl.to(ms1Ref.current, { scale: 1.0, duration: 2 }, 0)
        
        // Crossfade to MS2 (2 to 3)
        .to(ms1Ref.current, { opacity: 0, duration: 1 }, 2)
        .to(ms2Ref.current, { opacity: 1, duration: 1 }, 2)
        .to(bg1Ref.current, { opacity: 0, duration: 1 }, 2)
        .to(bg2Ref.current, { opacity: 0.15, duration: 1 }, 2) // Subtle image reveal
        
        // MS2: 73 MEDALS (3 to 5)
        .to(ms2Ref.current, { scale: 1.0, duration: 2 }, 3)

        // Crossfade to MS3 (5 to 6)
        .to(ms2Ref.current, { opacity: 0, duration: 1 }, 5)
        .to(ms3Ref.current, { opacity: 1, duration: 1 }, 5)
        .to(bg2Ref.current, { opacity: 0, duration: 1 }, 5) // Fade to pure black

        // MS3: 3 OLYMPIANS (6 to 8)
        .to(ms3Ref.current, { scale: 1.0, duration: 2 }, 6)

        // Crossfade to MS4 (8 to 9)
        .to(ms3Ref.current, { opacity: 0, duration: 1 }, 8)
        .to(ms4Ref.current, { opacity: 1, duration: 1 }, 8)

        // MS4: STILL BUILDING (9 to 10)
        .to(ms4Ref.current, { scale: 1.0, duration: 1 }, 9)

        // Fade out entirely (10 to 11)
        .to(ms4Ref.current, { opacity: 0, duration: 1 }, 10);

    }, containerRef);

    return () => ctx.revert();
  }, [hasMounted, isReducedMotion]);

  if (!hasMounted) return <section className="w-full min-h-screen bg-[var(--color-carbon-black)]" />;

  // Graceful degradation for prefers-reduced-motion
  if (isReducedMotion) {
    return (
      <section className="w-full bg-[var(--color-carbon-black)] text-[var(--color-chalk-white)] py-32 px-4 flex flex-col items-center text-center gap-48 overflow-hidden">
        <div>
          <h2 className="text-[12vw] leading-none font-primary font-bold">57</h2>
          <p className="text-xl md:text-3xl tracking-[0.4em] uppercase mt-4">Years</p>
        </div>
        <div className="relative w-full h-[50vh]">
          <Image src="/images/legacy/legacy-wall-medalist.jpg" alt="Legacy Wall" fill className="object-cover grayscale brightness-50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 drop-shadow-2xl">
            <h2 className="text-[15vw] leading-none font-primary font-bold">73</h2>
            <p className="text-xl md:text-3xl tracking-[0.4em] uppercase mt-4 text-center">International<br className="md:hidden" /> Medals</p>
          </div>
        </div>
        <div>
          <h2 className="text-[15vw] leading-none font-primary font-bold">3</h2>
          <p className="text-xl md:text-3xl tracking-[0.4em] uppercase mt-4">Olympians</p>
        </div>
        <div>
          <p className="text-2xl md:text-4xl tracking-[0.4em] uppercase">Still Building.</p>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={containerRef} 
      className="w-full h-screen bg-[var(--color-carbon-black)] text-[var(--color-chalk-white)] overflow-hidden relative"
    >
      {/* Background Archival Imagery (Extremely Subtle) */}
      <div ref={bg1Ref} className="absolute inset-0 opacity-15 will-change-opacity pointer-events-none">
        <Image 
          src="/images/legacy/legacy-hero-archive.jpg" 
          alt="Legacy Archive" 
          fill 
          className="object-cover grayscale sepia-[0.3]" 
          priority
        />
      </div>
      <div ref={bg2Ref} className="absolute inset-0 opacity-0 will-change-opacity pointer-events-none">
        <Image 
          src="/images/legacy/legacy-wall-medalist.jpg" 
          alt="Medalist Wall" 
          fill 
          className="object-cover grayscale sepia-[0.3]" 
        />
      </div>

      {/* Typography Monument Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 text-center px-4">
        
        {/* Monument 1: 57 YEARS */}
        <div ref={ms1Ref} className="absolute flex flex-col items-center justify-center will-change-transform">
          <h2 className="text-[20vw] md:text-[15vw] leading-none font-primary font-bold">57</h2>
          <p className="text-lg md:text-2xl tracking-[0.4em] uppercase mt-2 md:mt-4 opacity-80">Years</p>
        </div>

        {/* Monument 2: 73 INTERNATIONAL MEDALS */}
        <div ref={ms2Ref} className="absolute flex flex-col items-center justify-center will-change-transform opacity-0">
          <h2 className="text-[25vw] md:text-[18vw] leading-none font-primary font-bold">73</h2>
          <p className="text-lg md:text-3xl tracking-[0.3em] md:tracking-[0.5em] uppercase mt-2 md:mt-4 opacity-80">
            International<br className="md:hidden" /> Medals
          </p>
        </div>

        {/* Monument 3: 3 OLYMPIANS */}
        <div ref={ms3Ref} className="absolute flex flex-col items-center justify-center will-change-transform opacity-0">
          <h2 className="text-[30vw] md:text-[20vw] leading-none font-primary font-bold">3</h2>
          <p className="text-lg md:text-3xl tracking-[0.4em] uppercase mt-2 md:mt-4 opacity-80">Olympians</p>
        </div>

        {/* Monument 4: STILL BUILDING. */}
        <div ref={ms4Ref} className="absolute flex flex-col items-center justify-center will-change-transform opacity-0">
          <p className="text-xl md:text-4xl tracking-[0.5em] uppercase opacity-60">Still Building.</p>
        </div>

      </div>
    </section>
  );
}
