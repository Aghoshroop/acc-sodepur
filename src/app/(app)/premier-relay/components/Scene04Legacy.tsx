'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Scene04Legacy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fade in gracefully from the whiteout
    gsap.fromTo(contentRef.current, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 2, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-[var(--color-chalk-white)] text-[var(--color-carbon-black)] flex flex-col items-center justify-center py-32 px-6">
      
      <div ref={contentRef} className="max-w-5xl w-full flex flex-col md:flex-row gap-16 items-center">
        
        {/* Legacy Photography */}
        <div className="w-full md:w-1/2 relative aspect-[3/4] overflow-hidden contrast-125">
          <Image
            src="/images/relay/berlin-eagle-2026.jpg"
            alt="Past Champions"
            fill
            className="object-cover"
          />
        </div>

        {/* Quiet, Refined List */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h3 className="font-primary text-xs uppercase tracking-[0.4em] text-[var(--color-carbon-black)]/50 mb-12">
            The Hall of Champions
          </h3>
          
          <ul className="flex flex-col gap-6 font-secondary text-2xl md:text-3xl text-[var(--color-carbon-black)]">
            <li className="flex justify-between border-b border-black/10 pb-4">
              <span>2026</span>
              <span className="italic">Berlin Eagles</span>
            </li>
            <li className="flex justify-between border-b border-black/10 pb-4">
              <span>2025</span>
              <span className="italic">Berlin Eagles</span>
            </li>
            <li className="flex justify-between border-b border-black/10 pb-4">
              <span>2024</span>
              <span className="italic">Beijing Dragons</span>
            </li>
            <li className="flex justify-between border-b border-black/10 pb-4">
              <span>2023</span>
              <span className="italic">Sydney Kangaroos</span>
            </li>
            <li className="flex justify-between pb-4">
              <span>2022</span>
              <span className="italic">Berlin Eagles</span>
            </li>
          </ul>
        </div>
        
      </div>
    </section>
  );
}
