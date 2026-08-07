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

export default function Scene05() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);
  
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  const isReducedMotion = useReducedMotion();
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (!hasMounted || isReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%", // 400vh for deliberate, slow pacing
          scrub: true,
          pin: true,
        }
      });

      // 0 to 1: Hold Soma
      tl.to({}, { duration: 1 })
        
        // 1 to 2: Crossfade Soma -> Sushmita
        .to([img1Ref.current, text1Ref.current], { opacity: 0, duration: 1 }, 1)
        .to([img2Ref.current, text2Ref.current], { opacity: 1, duration: 1 }, 1)
        
        // 2 to 3: Hold Sushmita
        .to({}, { duration: 1 }, 2)
        
        // 3 to 4: Crossfade Sushmita -> Athlete
        .to([img2Ref.current, text2Ref.current], { opacity: 0, duration: 1 }, 3)
        .to([img3Ref.current, text3Ref.current], { opacity: 1, duration: 1 }, 3)
        
        // 4 to 5: Hold Athlete
        .to({}, { duration: 1 }, 4)
        
        // 5 to 6: Fade to black
        .to([img3Ref.current, text3Ref.current], { opacity: 0, duration: 1 }, 5)
        
        // 6 to 6.5: Linger in silence before unpinning
        .to({}, { duration: 0.5 });

    }, containerRef);

    return () => ctx.revert();
  }, [hasMounted, isReducedMotion]);

  if (!hasMounted) return <section className="w-full min-h-screen bg-[var(--color-carbon-black)]" />;

  // Graceful degradation for prefers-reduced-motion
  if (isReducedMotion) {
    return (
      <section className="w-full bg-[var(--color-carbon-black)] text-[var(--color-chalk-white)] py-32 px-4 flex flex-col items-center gap-32">
        <div className="flex flex-col items-center gap-8">
          <div className="relative w-[80vw] max-w-lg aspect-square">
            <Image src="/images/soma.jpg" alt="Soma Biswas" fill className="object-cover object-[center_-100px] grayscale sepia-[0.3]" />
          </div>
          <h2 className="text-4xl md:text-5xl tracking-[0.2em] font-primary uppercase font-light">Soma Biswas</h2>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="relative w-[80vw] max-w-sm aspect-[3/4]">
            <Image src="/images/susmita.jpg" alt="Sushmita Singha Roy" fill className="object-cover object-[center_-100px] grayscale sepia-[0.3]" />
          </div>
          <h2 className="text-4xl md:text-5xl tracking-[0.2em] font-primary uppercase font-light">Sushmita Singha Roy</h2>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="relative w-[80vw] max-w-2xl aspect-video">
            <Image src="/images/athlete.png" alt="The ACC Athlete" fill className="object-cover object-[center_-100px] grayscale sepia-[0.3]" />
          </div>
          <h2 className="text-4xl md:text-5xl tracking-[0.2em] font-primary uppercase font-light">The Athlete</h2>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={containerRef} 
      className="w-full h-screen bg-[var(--color-carbon-black)] text-[var(--color-chalk-white)] overflow-hidden flex flex-col md:flex-row relative"
    >
      {/* Left Column: The Portrait Gallery */}
      <div className="w-full md:w-[60%] h-1/2 md:h-full relative flex items-center justify-center p-8 md:p-16">
        
        {/* Portrait 1: Soma (Square framing) */}
        <div ref={img1Ref} className="absolute w-[70%] md:w-[60%] h-[80%] opacity-100 will-change-opacity">
          <Image 
            src="/images/soma.jpg" 
            alt="Soma Biswas" 
            fill 
            className="object-cover object-[center_-100px] grayscale sepia-[0.4] brightness-90"
            priority 
          />
        </div>

        {/* Portrait 2: Sushmita (Tall framing, offset) */}
        <div ref={img2Ref} className="absolute w-[60%] md:w-[45%] h-[90%] opacity-0 will-change-opacity">
          <Image 
            src="/images/susmita.jpg" 
            alt="Sushmita Singha Roy" 
            fill 
            className="object-cover object-[center_-100px] grayscale sepia-[0.4] brightness-90" 
          />
        </div>

        {/* Portrait 3: The Athlete (Wide, close-up framing) */}
        <div ref={img3Ref} className="absolute w-[90%] md:w-[80%] h-[60%] opacity-0 will-change-opacity">
          <Image 
            src="/images/athlete.png" 
            alt="The ACC Athlete" 
            fill 
            className="object-cover object-[center_-100px] grayscale sepia-[0.4] brightness-90" 
          />
        </div>

      </div>

      {/* Right Column: The Names */}
      <div className="w-full md:w-[40%] h-1/2 md:h-full relative flex items-center justify-center md:justify-start p-8 md:p-16">
        
        {/* Name 1 */}
        <div ref={text1Ref} className="absolute opacity-100 text-center md:text-left will-change-opacity">
          <h2 className="text-3xl md:text-6xl font-primary tracking-[0.2em] uppercase font-light leading-snug">
            Soma<br/>Biswas
          </h2>
        </div>

        {/* Name 2 */}
        <div ref={text2Ref} className="absolute opacity-0 text-center md:text-left will-change-opacity">
          <h2 className="text-3xl md:text-6xl font-primary tracking-[0.2em] uppercase font-light leading-snug">
            Sushmita<br/>Singha Roy
          </h2>
        </div>

        {/* Name 3 */}
        <div ref={text3Ref} className="absolute opacity-0 text-center md:text-left will-change-opacity">
          <h2 className="text-3xl md:text-6xl font-primary tracking-[0.2em] uppercase font-light leading-snug text-opacity-80">
            The<br/>Athlete
          </h2>
        </div>

      </div>
    </section>
  );
}
