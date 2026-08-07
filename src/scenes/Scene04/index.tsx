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

export default function Scene04() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const isReducedMotion = useReducedMotion();
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (!hasMounted || isReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax effect for objects
      const parallaxElements = gsap.utils.toArray<HTMLElement>('[data-parallax]');
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax') || '0');
        gsap.fromTo(el, 
          { y: speed * window.innerHeight }, 
          { 
            y: -speed * window.innerHeight, 
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            }
          }
        );
      });

      // Fade for text
      const fadeElements = gsap.utils.toArray<HTMLElement>('[data-fade]');
      fadeElements.forEach((el) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 50 }, 
          { 
            opacity: 1, 
            y: 0,
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play reverse play reverse", // Fades out when leaving
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [hasMounted, isReducedMotion]);

  if (!hasMounted) return <section className="w-full min-h-[100vh] bg-[var(--color-carbon-black)]" />;

  // Graceful degradation for prefers-reduced-motion
  if (isReducedMotion) {
    return (
      <section className="w-full bg-[var(--color-carbon-black)] text-[var(--color-chalk-white)] py-32 flex flex-col items-center gap-32">
        <div className="relative w-[95vw] md:w-full max-w-6xl aspect-[16/9]">
           <Image src="/images/campus/campus-object-diary.jpg" alt="Training Diary" fill className="object-contain grayscale brightness-75" />
        </div>
        <p className="text-2xl md:text-4xl tracking-[0.3em] font-light">OBSERVE.</p>
        <div className="relative w-[80vw] max-w-3xl aspect-[16/9]">
           <Image src="/images/campus/campus-object-stopwatch.jpg" alt="Stopwatch" fill className="object-contain grayscale brightness-75" />
        </div>
        <p className="text-2xl md:text-4xl tracking-[0.3em] font-light">LEARN.</p>
        <div className="relative w-[80vw] max-w-2xl aspect-square">
           <Image src="/images/campus/campus-object-spikes.jpg" alt="Worn Spikes" fill className="object-contain grayscale brightness-75" />
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={containerRef} 
      className="w-full relative bg-[var(--color-carbon-black)] overflow-hidden"
      style={{ height: '400vh' }}
    >
      {/* 
        Negative space is deliberately maintained. 
        Objects float up at different speeds (parallax).
      */}

      {/* Object 1: The Diary */}
      <div 
        data-parallax="0.3" 
        className="absolute top-[20%] left-0 w-screen md:w-[90vw] md:left-[5vw] h-[60vh] md:h-[85vh] opacity-80"
      >
        <Image 
          src="/images/campus/campus-object-diary.jpg" 
          alt="Handwritten Training Diary" 
          fill 
          className="object-contain grayscale brightness-75" 
        />
      </div>

      {/* Text 1: OBSERVE */}
      <div className="absolute top-[35%] right-[10%] md:right-[20%] z-10">
        <p data-fade className="text-[var(--color-chalk-white)] text-3xl md:text-5xl tracking-[0.4em] font-light opacity-0">
          OBSERVE.
        </p>
      </div>

      {/* Object 2: The Stopwatch */}
      <div 
        data-parallax="0.6" 
        className="absolute top-[45%] right-[5%] md:right-[15%] w-[80vw] md:w-[50vw] h-[40vh] md:h-[50vh] opacity-70"
      >
        <Image 
          src="/images/campus/campus-object-stopwatch.jpg" 
          alt="Coach's Stopwatch" 
          fill 
          className="object-contain grayscale brightness-50" 
        />
      </div>

      {/* Object 3: Another Coaching Moment (Using available campus image) */}
      <div 
        data-parallax="0.2" 
        className="absolute top-[60%] left-[5%] md:left-[10%] w-[60vw] md:w-[35vw] h-[45vh] md:h-[55vh] opacity-60"
      >
        <Image 
          src="/images/campus/627147160_1202759115380237_5287536834450879670_n.jpg" 
          alt="Coaching Observation" 
          fill 
          className="object-contain grayscale brightness-50" 
        />
      </div>

      {/* Text 2: LEARN */}
      <div className="absolute top-[75%] left-[20%] md:left-[35%] z-10">
        <p data-fade className="text-[var(--color-chalk-white)] text-3xl md:text-5xl tracking-[0.4em] font-light opacity-0">
          LEARN.
        </p>
      </div>

      {/* Object 4: The Worn Spikes */}
      <div 
        data-parallax="0.5" 
        className="absolute top-[80%] right-[10%] md:right-[25%] w-[70vw] md:w-[45vw] h-[50vh] md:h-[60vh] opacity-80"
      >
        <Image 
          src="/images/campus/campus-object-spikes.jpg" 
          alt="Worn Spikes" 
          fill 
          className="object-contain grayscale brightness-75" 
        />
      </div>
      
    </section>
  );
}
