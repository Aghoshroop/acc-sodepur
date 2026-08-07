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

export default function Scene07() {
  const containerRef = useRef<HTMLElement>(null);

  const isReducedMotion = useReducedMotion();
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (!hasMounted || isReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Color Progression (Sunrise)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // Starts changing as soon as scene enters
          end: "bottom bottom",
          scrub: true,
        }
      });

      // Background transitions from Black -> Deep Dawn -> Soft Morning White/Gold
      tl.to(containerRef.current, { backgroundColor: '#2a1f1a', duration: 1 })
        .to(containerRef.current, { backgroundColor: '#d3bba8', duration: 2 });

      // Text transitions from White -> Carbon Black as the sun rises
      gsap.to('[data-color-shift]', {
        color: 'var(--color-carbon-black)',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center", 
          end: "bottom bottom",
          scrub: true,
        }
      });

      // 2. Gentle Y Float & Opacity Fades (Natural Awakening)
      const fadeElements = gsap.utils.toArray<HTMLElement>('[data-fade-up]');
      fadeElements.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%", 
              toggleActions: "play none none reverse"
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, [hasMounted, isReducedMotion]);

  if (!hasMounted) return <section className="w-full min-h-screen bg-[var(--color-carbon-black)]" />;

  // Graceful degradation for prefers-reduced-motion
  if (isReducedMotion) {
    return (
      <section className="w-full bg-[#d3bba8] text-[var(--color-carbon-black)] py-32 px-4 flex flex-col items-center gap-32">
        <p className="text-xl md:text-3xl font-light tracking-[0.2em] uppercase">Dawn.</p>
        <div className="relative w-[95vw] md:w-full max-w-7xl aspect-[16/9]">
          <Image src="/images/campus/campus-tomorrow-empty.jpg" alt="Empty Track at Dawn" fill className="object-contain" />
        </div>
        <p className="text-xl md:text-3xl font-light tracking-[0.2em] uppercase">The First Footsteps.</p>
        <div className="relative w-full max-w-4xl aspect-[4/3]">
          <Image src="/images/campus/campus-hero-evolution.jpg" alt="Athletes Arriving" fill className="object-cover" />
        </div>
        <div className="relative w-full max-w-6xl aspect-[21/9]">
          <Image src="/images/endurance.jpg" alt="Living Movement" fill className="object-cover" />
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={containerRef} 
      className="w-full relative overflow-hidden text-[var(--color-chalk-white)]"
      style={{ height: '400vh', backgroundColor: 'var(--color-carbon-black)' }}
    >
      {/* 
        This is a free-flowing vertical canvas.
        No pinning. Elements are positioned absolutely to create a curated, airy scroll experience.
      */}

      {/* Sequence 1: The Empty Campus */}
      <div data-fade-up className="absolute top-[15vh] w-full flex justify-center">
        <p data-color-shift className="text-lg md:text-2xl font-light tracking-[0.4em] uppercase opacity-60">
          Dawn.
        </p>
      </div>

      <div data-fade-up className="absolute top-[30vh] left-0 w-screen h-[50vh] md:h-[85vh]">
        <Image 
          src="/images/campus/campus-tomorrow-empty.jpg" 
          alt="Empty Track at Dawn" 
          fill 
          className="object-contain brightness-75 sepia-[0.2]" 
        />
      </div>

      {/* Sequence 2: Equipment / The first signs of life */}
      <div data-fade-up className="absolute top-[130vh] right-[10vw] md:right-[20vw] w-[70vw] md:w-[40vw] h-[40vh] md:h-[60vh]">
        <Image 
          src="/images/campus/campus-object-spikes.jpg" 
          alt="Equipment Preparation" 
          fill 
          className="object-cover brightness-90 sepia-[0.1]" 
        />
      </div>

      <div data-fade-up className="absolute top-[180vh] left-[10vw] md:left-[20vw]">
        <p data-color-shift className="text-lg md:text-2xl font-light tracking-[0.4em] uppercase opacity-70">
          The first footsteps.
        </p>
      </div>

      {/* Sequence 3: Human Arrival */}
      <div data-fade-up className="absolute top-[210vh] left-[5vw] md:left-[10vw] w-[85vw] md:w-[60vw] h-[50vh] md:h-[70vh]">
        <Image 
          src="/images/campus/campus-hero-evolution.jpg" 
          alt="Athletes Arriving" 
          fill 
          className="object-cover brightness-95" 
        />
      </div>

      {/* Sequence 4: Living Movement in Full Daylight */}
      <div data-fade-up className="absolute top-[310vh] right-[5vw] md:right-[10vw] w-[90vw] md:w-[70vw] h-[60vh] md:h-[80vh]">
        {/* We leave this image completely natural, no sepia, full brightness to represent daylight */}
        <Image 
          src="/images/endurance.jpg" 
          alt="Athletes Training" 
          fill 
          className="object-cover" 
        />
      </div>

    </section>
  );
}
