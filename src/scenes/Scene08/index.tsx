'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useHasMounted } from '@/hooks/useHasMounted';
import { useRouter } from 'next/navigation';

const subscribeMq = (callback: () => void) => {
  if (typeof window === 'undefined') return () => {};
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
};

export default function Scene08() {
  const containerRef = useRef<HTMLElement>(null);
  const router = useRouter();

  const isReducedMotion = useReducedMotion();
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (!hasMounted || isReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Gentle fade up for the pathways grid
      gsap.fromTo('[data-epilogue-grid]', 
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '[data-epilogue-grid]',
            start: "top 80%",
          }
        }
      );

      // Fade in the closing sequence sequentially
      const closingElements = gsap.utils.toArray<HTMLElement>('[data-closing-sequence] > *');
      gsap.fromTo(closingElements, 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '[data-closing-sequence]',
            start: "top 75%",
          }
        }
      );

      // Fade in the utility footer
      gsap.fromTo('[data-utility-footer]', 
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '[data-utility-footer]',
            start: "top 95%",
          }
        }
      );

      // Auto-exit when reaching the absolute bottom with a cinematic fade
      // Auto-exit when reaching the absolute bottom with a cinematic fade
      ScrollTrigger.create({
        trigger: '[data-exit-trigger]',
        start: "top 95%", // Trigger right before it fully comes into view
        once: true, // Only trigger once
        onEnter: () => {
          gsap.to('[data-climax-overlay]', {
            opacity: 1,
            duration: 1.5,
            ease: "power2.inOut",
            onComplete: () => {
              router.push('/');
            }
          });
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, [hasMounted, isReducedMotion, router]);

  if (!hasMounted) return <section className="w-full min-h-screen bg-[#d3bba8]" />;

  return (
    <section 
      ref={containerRef} 
      className="w-full min-h-screen bg-[#d3bba8] text-[var(--color-carbon-black)] flex flex-col justify-between pt-32 px-6 md:px-16 relative overflow-hidden"
    >
      
      {/* The Pathways Grid */}
      <div data-epilogue-grid className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-32 mt-16 md:mt-32">
        <div className="flex flex-col gap-12 md:gap-16">
          <p className="text-sm md:text-base tracking-[0.4em] uppercase opacity-50">Discover</p>
          <div className="flex flex-col gap-8">
            <a href="#training" className="group flex items-center w-max focus:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-8">
              <h3 className="text-3xl md:text-5xl font-primary uppercase font-light tracking-[0.1em] group-hover:opacity-40 transition-opacity duration-700">
                Training Programmes
              </h3>
            </a>
            <a href="#admissions" className="group flex items-center w-max focus:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-8">
              <h3 className="text-3xl md:text-5xl font-primary uppercase font-light tracking-[0.1em] group-hover:opacity-40 transition-opacity duration-700">
                Admissions
              </h3>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-12 md:gap-16">
          <p className="text-sm md:text-base tracking-[0.4em] uppercase opacity-50">Connect</p>
          <div className="flex flex-col gap-8">
            <a href="#visit" className="group flex items-center w-max focus:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-8">
              <h3 className="text-3xl md:text-5xl font-primary uppercase font-light tracking-[0.1em] group-hover:opacity-40 transition-opacity duration-700">
                Visit the Campus
              </h3>
            </a>
            <a href="#contact" className="group flex items-center w-max focus:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-8">
              <h3 className="text-3xl md:text-5xl font-primary uppercase font-light tracking-[0.1em] group-hover:opacity-40 transition-opacity duration-700">
                Contact
              </h3>
            </a>
          </div>
        </div>
      </div>

      {/* The Documentary Closing Sequence */}
      <div data-closing-sequence className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center mt-64 mb-32 text-center">
        <div className="w-16 h-[1px] bg-[var(--color-carbon-black)] opacity-20 mb-16"></div>
        <h2 className="text-xl md:text-4xl tracking-[0.3em] md:tracking-[0.4em] uppercase font-primary mb-6">
          Athletic Coaching Camp
        </h2>
        <p className="text-base md:text-xl tracking-[0.5em] uppercase opacity-70 mb-4">
          Kolkata
        </p>
        <p className="text-sm md:text-base tracking-[0.3em] uppercase opacity-50">
          Since 1969
        </p>
        
        <div className="flex flex-col items-center gap-3 my-16 opacity-30">
          <span className="w-1 h-1 rounded-full bg-current"></span>
          <span className="w-1 h-1 rounded-full bg-current"></span>
          <span className="w-1 h-1 rounded-full bg-current"></span>
        </div>

        <h3 className="text-2xl md:text-5xl tracking-[0.4em] uppercase font-primary mt-4 opacity-90">
          The Story Continues.
        </h3>
        


        <div className="w-16 h-[1px] bg-[var(--color-carbon-black)] opacity-20 mt-24"></div>
      </div>

      {/* Utilities & Copyright */}
      <div data-utility-footer className="w-full flex flex-col md:flex-row items-center justify-between opacity-40 text-[10px] md:text-xs tracking-[0.3em] uppercase mt-16 pt-16 pb-16 border-t border-black/10">
        <p>&copy; {new Date().getFullYear()} Athletic Coaching Camp</p>
        <div className="flex gap-8 mt-8 md:mt-0">
          <a href="#privacy" className="hover:opacity-50 transition-opacity duration-500 focus:outline-none focus-visible:underline">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:opacity-50 transition-opacity duration-500 focus:outline-none focus-visible:underline">
            Terms of Service
          </a>
        </div>
      </div>

      {/* Invisible trigger to navigate home on overscroll */}
      <div data-exit-trigger className="w-full h-[10vh]"></div>

      {/* Climax Cinematic Fade Overlay */}
      <div data-climax-overlay className="fixed inset-0 bg-black z-[9999] pointer-events-none opacity-0"></div>

    </section>
  );
}
