'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);
}

export default function Scene02TheGun() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shakeRef = useRef<HTMLDivElement>(null);
  const prepRef = useRef<HTMLDivElement>(null);
  const silenceRef = useRef<HTMLDivElement>(null);
  const gunRef = useRef<HTMLDivElement>(null);
  const accelRef = useRef<HTMLDivElement>(null);
  const inversionOverlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%", // Long scroll to stretch the sequence out
        scrub: 1,
        pin: true,
        refreshPriority: 3,
      }
    });

    // 1. Preparation
    tl.to(prepRef.current, { opacity: 1, y: 0, duration: 1 })
      .to(prepRef.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5");

    // 2. Silence
    tl.to(silenceRef.current, { opacity: 1, scale: 1, duration: 1 })
      .to(silenceRef.current, { opacity: 0, scale: 0.9, duration: 2 }, "+=1");

    // 3. THE GUN (Violent shake and inversion)
    // We use a small duration here so it happens "instantly" on scroll
    tl.to(inversionOverlayRef.current, { opacity: 1, duration: 0.1 })
      .to(shakeRef.current, {
        x: "random(-20, 20)",
        y: "random(-20, 20)",
        duration: 0.05,
        yoyo: true,
        repeat: 5,
      }, "<")
      .to(gunRef.current, { opacity: 1, scale: 1.5, duration: 0.1 }, "<")
      .to(inversionOverlayRef.current, { opacity: 0, duration: 0.5 })
      .to(shakeRef.current, { x: 0, y: 0, duration: 0.1 })
      .to(gunRef.current, { opacity: 0, scale: 2, filter: "blur(20px)", duration: 1 });

    // 4. Acceleration
    tl.to(accelRef.current, { opacity: 1, x: 0, skewX: -10, duration: 1 })
      .to(accelRef.current, { opacity: 0, x: -200, duration: 1 }, "+=1");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[var(--color-carbon-black)] overflow-hidden">
      <div ref={shakeRef} className="absolute inset-0 flex items-center justify-center">
      
      {/* Inversion Overlay */}
      <div ref={inversionOverlayRef} className="absolute inset-0 bg-[var(--color-chalk-white)] opacity-0 z-10 mix-blend-difference pointer-events-none" />

      {/* Preparation Phase */}
      <div ref={prepRef} className="absolute z-20 opacity-0 translate-y-12 flex flex-col items-center">
        <span className="font-primary text-xs uppercase tracking-[0.5em] text-[var(--color-ash-grey)]">Phase 01</span>
        <h2 className="font-secondary text-5xl md:text-7xl text-[var(--color-chalk-white)] mt-4">Preparation</h2>
      </div>

      {/* Silence Phase */}
      <div ref={silenceRef} className="absolute z-20 opacity-0 scale-110 flex flex-col items-center">
        <h2 className="font-secondary text-4xl md:text-6xl text-[var(--color-chalk-white)]/40 tracking-widest">
          Silence
        </h2>
      </div>

      {/* The Gun Phase */}
      <div ref={gunRef} className="absolute z-30 opacity-0 flex flex-col items-center">
        <h2 className="font-secondary text-8xl md:text-[15vw] text-[var(--color-track-red)] uppercase leading-none italic pr-4">
          Bang
        </h2>
      </div>

      {/* Acceleration Phase */}
      <div ref={accelRef} className="absolute z-20 opacity-0 translate-x-[100px] flex flex-col items-center">
        <h2 className="font-secondary text-6xl md:text-8xl text-[var(--color-chalk-white)] italic tracking-tighter">
          Acceleration
        </h2>
      </div>

      </div>
    </section>
  );
}
