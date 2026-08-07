'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Scene03Exchange() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const whiteoutRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
        refreshPriority: 2,
      }
    });

    // Infinite zoom into the baton pass
    tl.to(imageRef.current, {
      scale: 4,
      ease: "power2.in",
      transformOrigin: "center center"
    }, 0);

    // Fade to pure white at the climax
    tl.to(whiteoutRef.current, {
      opacity: 1,
      ease: "power2.in"
    }, 0.5);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#0A0A0A]">
      <Image
        ref={imageRef}
        src="/images/relay/the-exchange.jpg"
        alt="The Baton Exchange"
        fill
        className="object-cover"
      />
      
      {/* The Whiteout */}
      <div 
        ref={whiteoutRef} 
        className="absolute inset-0 z-10 bg-[var(--color-chalk-white)] opacity-0 pointer-events-none" 
      />
      
      <div className="absolute bottom-12 left-6 md:left-12 z-20 mix-blend-difference">
        <h2 className="font-secondary text-5xl md:text-8xl text-[var(--color-chalk-white)] uppercase tracking-tighter">
          The Exchange
        </h2>
      </div>
    </section>
  );
}
