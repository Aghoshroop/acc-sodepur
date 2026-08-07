'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Scene01Arrival() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Pin the arrival scene and slowly scale the background
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        scrub: true,
        pin: true,
        refreshPriority: 4,
      }
    });

    tl.to(bgRef.current, {
      scale: 1.1,
      opacity: 0.3,
      ease: "none"
    }, 0);

    tl.to(textRef.current, {
      opacity: 0,
      y: -100,
      ease: "none"
    }, 0);
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#0A0A0A]">
      <div ref={bgRef} className="absolute inset-0 w-full h-full">
        <Image 
          src="/images/relay/relay-hero-night-race.jpg"
          alt="Arrival at the Premier Relay"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-80" />
      </div>

      <div ref={textRef} className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
        <div className="font-primary text-xs uppercase tracking-[0.4em] text-[var(--color-chalk-white)]/60 mb-6">
          The Annual Flagship Event
        </div>
        <h1 className="font-secondary text-7xl md:text-[12vw] uppercase leading-[0.85] tracking-tighter text-[var(--color-chalk-white)] mix-blend-difference">
          Premier<br/>
          <span className="text-[var(--color-track-red)]">Relay</span>
        </h1>
      </div>
    </section>
  );
}
