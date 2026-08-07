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

export default function Scene01() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1969Ref = useRef<HTMLDivElement>(null);
  const text57Ref = useRef<HTMLDivElement>(null);
  const founderRef = useRef<HTMLDivElement>(null);
  const founderImgRef = useRef<HTMLImageElement>(null);
  const trackBgRef = useRef<HTMLDivElement>(null);
  
  const isReducedMotion = useReducedMotion();
  
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (!hasMounted || isReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=700%", // 700vh of scroll distance
          scrub: 1,
          pin: true,
        }
      });

      // 1. Hold and scale 1969
      tl.to(text1969Ref.current, { scale: 1.1, duration: 1.5 });
      
      // 2. 1969 shatters (masks out from bottom to top)
      tl.to(text1969Ref.current, { 
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", 
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      }, ">");
      
      // 3. 57 YEARS scales in simultaneously
      tl.fromTo(text57Ref.current, 
        { opacity: 0, scale: 0.9, y: 20 }, 
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.out" }, 
        "<0.2"
      );

      // 4. Hold and scale 57 YEARS
      tl.to(text57Ref.current, { scale: 1.05, duration: 1.5 });
      
      // 5. Fade out 57 YEARS
      tl.to(text57Ref.current, { opacity: 0, duration: 0.8, ease: "power2.inOut" });
      
      // 6. Founder fades in
      tl.fromTo(founderRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        ">"
      );
      
      // 7. Parallax the founder image slightly while holding
      tl.to(founderImgRef.current, { scale: 1.1, y: -30, duration: 3, ease: "none" }, "<");
      
      // 8. Fade out Founder
      tl.to(founderRef.current, { opacity: 0, duration: 0.8, ease: "power2.inOut" }, ">-1");

      // 9. First Light (Track) fades in smoothly
      tl.fromTo(trackBgRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.inOut" },
        ">"
      );
      
    }, containerRef);

    return () => ctx.revert();
  }, [hasMounted, isReducedMotion]);

  // SSR safety: render nothing or simple layout until mounted
  if (!hasMounted) return <section className="w-full min-h-screen bg-[var(--color-carbon-black)]" />;

  if (isReducedMotion) {
    return (
      <section className="w-full bg-[var(--color-carbon-black)] text-[var(--color-chalk-white)] flex flex-col items-center justify-center gap-32 py-32 px-4">
        <div className="text-7xl md:text-9xl font-primary font-bold tracking-tighter">1969</div>
        <div className="flex flex-col items-center leading-none">
          <div className="text-6xl md:text-9xl font-primary font-bold tracking-tighter">57</div>
          <div className="text-2xl md:text-4xl font-primary tracking-widest uppercase">Years</div>
        </div>
        <div className="relative w-full h-[60vh] flex flex-col items-center justify-center mt-16 overflow-hidden">
          <Image src="/images/legacy/legacy-founder-kuntal-roy.jpg" alt="Dr. Kuntal Roy" fill className="object-cover object-[left_25%] md:object-[center_20%] grayscale contrast-125" />
          <div className="absolute inset-0 bg-[var(--color-carbon-black)] opacity-60" />
          <div className="relative z-10 text-center px-4">
            <h2 className="font-primary text-4xl md:text-6xl uppercase tracking-wider mb-2 drop-shadow-2xl">Dr. Kuntal Roy</h2>
            <p className="text-sm md:text-lg text-opacity-90 tracking-widest uppercase text-[var(--color-chalk-white)] drop-shadow-lg">Founder / Dronacharya Awardee 2011</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="w-full h-screen bg-[var(--color-carbon-black)] overflow-hidden relative">
      
      {/* Base Background Image for Scene 01 */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Image 
          src="/images/legacy/legacy-timeline-1969.jpg" 
          alt="1969 Archive Background" 
          fill 
          className="object-cover grayscale contrast-125 brightness-50" 
          priority 
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[var(--color-carbon-black)] opacity-60" />
      </div>

      {/* Beat 1: 1969 */}
      <div 
        ref={text1969Ref} 
        className="absolute inset-0 flex items-center justify-center text-[25vw] font-primary font-bold leading-none text-[var(--color-chalk-white)] tracking-tighter"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      >
        1969
      </div>

      {/* Beat 2: 57 YEARS */}
      <div 
        ref={text57Ref} 
        className="absolute inset-0 flex flex-col items-center justify-center font-primary font-bold text-[var(--color-chalk-white)] leading-none opacity-0"
      >
        <div className="text-[25vw] tracking-tighter">57</div>
        <div className="text-[6vw] tracking-[0.3em] mt-[-2vw]">YEARS</div>
      </div>

      {/* Beat 3: Founder */}
      <div 
        ref={founderRef}
        className="absolute inset-0 flex flex-col items-center justify-center opacity-0"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            ref={founderImgRef}
            src="/images/legacy/legacy-founder-kuntal-roy.jpg" 
            alt="Dr. Kuntal Roy" 
            fill
            className="object-cover object-[left_25%] md:object-[center_20%] grayscale contrast-125"
            priority
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-[var(--color-carbon-black)] opacity-60" />
        </div>
        
        <div className="relative z-10 text-[var(--color-chalk-white)] flex flex-col gap-4 text-center px-4">
          <h2 className="font-primary text-5xl md:text-8xl uppercase tracking-wider leading-none drop-shadow-2xl">Dr. Kuntal Roy</h2>
          <p className="text-sm md:text-2xl text-[var(--color-chalk-white)] opacity-90 tracking-[0.2em] md:tracking-[0.3em] uppercase drop-shadow-lg">Founder / Dronacharya Awardee 2011</p>
        </div>
      </div>

      {/* Beat 4: First Light at ACC */}
      <div 
        ref={trackBgRef}
        className="absolute inset-0 opacity-0 pointer-events-none"
      >
        <Image 
          src="/images/campus/campus-tomorrow-empty.jpg"
          alt="ACC Synthetic Track at First Light"
          fill
          className="object-contain opacity-40 grayscale sepia-[.2] hue-rotate-180" // Creating a deep blueish/grey morning tint
          priority
        />
        {/* Vignette/Fog Gradient to blend seamlessly with the void */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon-black)] via-transparent to-[var(--color-carbon-black)] opacity-80" />
      </div>
    </section>
  );
}
