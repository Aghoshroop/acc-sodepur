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

export default function Scene02() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const textDisciplineRef = useRef<HTMLDivElement>(null);
  const textRepetitionRef = useRef<HTMLDivElement>(null);
  
  const imgSpikesRef = useRef<HTMLDivElement>(null);
  const imgStopwatchRef = useRef<HTMLDivElement>(null);
  const imgSpeedRef = useRef<HTMLDivElement>(null);
  const imgFocusRef = useRef<HTMLDivElement>(null);
  
  const isReducedMotion = useReducedMotion();
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (!hasMounted || isReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%", // 300vh creates a fast, punchy scrub rhythm
          scrub: 1, // slight smoothing on scrub
          pin: true,
        }
      });

      // Set initial states
      gsap.set([imgSpikesRef.current, imgStopwatchRef.current, imgSpeedRef.current], { x: "100%" });
      gsap.set(imgFocusRef.current, { opacity: 0 });
      gsap.set(textDisciplineRef.current, { opacity: 0, scale: 0.95 });
      gsap.set(textRepetitionRef.current, { opacity: 0, scale: 0.95 });

      // 0 - 15%: Whip in Spikes (Authentic detail: preparing for the run)
      tl.to(imgSpikesRef.current, { x: "0%", duration: 1.5, ease: "expo.out" });
      tl.to(textDisciplineRef.current, { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }, "<0.2");
      
      // 15 - 25%: Hold Spikes, slow scale inwards simulating handheld camera tracking
      tl.to(imgSpikesRef.current, { scale: 1.05, duration: 1 }, ">");
      
      // 25 - 40%: Whip out Spikes, Whip in Stopwatch (Coaching/Observation)
      tl.to(imgSpikesRef.current, { x: "-100%", duration: 1.5, ease: "expo.inOut" }, ">");
      tl.to(imgStopwatchRef.current, { x: "0%", duration: 1.5, ease: "expo.inOut" }, "<");
      
      // 40 - 50%: Hold Stopwatch
      tl.to(imgStopwatchRef.current, { scale: 1.05, duration: 1 }, ">");
      
      // 50 - 65%: Whip out Stopwatch, Whip out Discipline text, Whip in Speed (Motion), Whip in Repetition text
      tl.to(imgStopwatchRef.current, { x: "-100%", duration: 1.5, ease: "expo.inOut" }, ">");
      tl.to(textDisciplineRef.current, { opacity: 0, duration: 0.5 }, "<");
      tl.to(imgSpeedRef.current, { x: "0%", duration: 1.5, ease: "expo.inOut" }, "<");
      tl.to(textRepetitionRef.current, { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }, "<0.2");
      
      // 65 - 75%: Hold Speed
      tl.to(imgSpeedRef.current, { scale: 1.05, duration: 1 }, ">");

      // 75 - 76%: HARD CUT TO BLACK (The intentional pause/silence)
      tl.set(imgSpeedRef.current, { opacity: 0 }, ">");
      tl.set(textRepetitionRef.current, { opacity: 0 }, "<");
      
      // 76 - 80%: Complete silence/black (Hold)
      tl.to({}, { duration: 0.4 });

      // 80 - 95%: Fade in Focus portrait (Athlete looking down, breathing, exhausted but focused)
      tl.to(imgFocusRef.current, { opacity: 1, duration: 1.5, ease: "power2.inOut" }, ">");
      tl.to(imgFocusRef.current, { scale: 1.02, duration: 2, ease: "none" }, "<");
      
      // 95 - 100%: Hold
      tl.to({}, { duration: 0.5 });

    }, containerRef);

    return () => ctx.revert();
  }, [hasMounted, isReducedMotion]);

  if (!hasMounted) return <section className="w-full min-h-screen bg-[var(--color-carbon-black)]" />;

  // Graceful degradation for prefers-reduced-motion
  if (isReducedMotion) {
    return (
      <section className="w-full bg-[var(--color-carbon-black)] text-[var(--color-chalk-white)] flex flex-col items-center justify-center gap-32 py-32 px-4">
        <h2 className="text-4xl md:text-8xl font-primary font-bold uppercase tracking-tighter">Discipline</h2>
        <div className="relative w-full max-w-4xl aspect-video">
          <Image src="/images/campus/campus-object-spikes.jpg" alt="Tightening Spikes" fill className="object-cover object-[center_-250px] grayscale" />
        </div>
        <div className="relative w-full max-w-4xl aspect-video">
          <Image src="/images/legacy/legacy-timeline-1969.jpg" alt="Coach observing and timing" fill className="object-cover object-[center_-250px] grayscale" />
        </div>
        <h2 className="text-4xl md:text-8xl font-primary font-bold uppercase tracking-tighter">Repetition</h2>
        <div className="relative w-full max-w-4xl aspect-video">
          <Image src="/images/performance/performance-training-speed.jpg" alt="Sprint training" fill className="object-cover object-[center_-250px] grayscale" />
        </div>
        <div className="relative w-full max-w-4xl aspect-[3/4]">
          <Image src="/images/performance/performance-hero-focus.jpg" alt="Deep breath, focus" fill className="object-cover object-[center_-100px] grayscale" />
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="w-full h-screen bg-[var(--color-carbon-black)] overflow-hidden relative">
      
      {/* Typography Layer */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none text-[var(--color-chalk-white)] drop-shadow-2xl">
        <div 
          ref={textDisciplineRef} 
          className="absolute text-[10vw] md:text-[12vw] font-primary font-bold tracking-tighter uppercase leading-none opacity-0"
        >
          Discipline
        </div>
        <div 
          ref={textRepetitionRef} 
          className="absolute text-[10vw] md:text-[12vw] font-primary font-bold tracking-tighter uppercase leading-none opacity-0"
        >
          Repetition
        </div>
      </div>

      {/* Observational Camera Image Layers (z-10) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        
        <div ref={imgSpikesRef} className="absolute inset-0 will-change-transform">
          <Image 
            src="/images/campus/campus-object-spikes.jpg" 
            alt="Authentic Detail: Tightening Spikes" 
            fill 
            className="object-cover object-[center_-250px] grayscale contrast-125 brightness-75" 
            priority 
          />
        </div>
        
        <div ref={imgStopwatchRef} className="absolute inset-0 will-change-transform">
          <Image 
            src="/images/legacy/legacy-timeline-1969.jpg" 
            alt="Coach observing: Timing the drill" 
            fill 
            className="object-cover object-[center_-250px] grayscale contrast-125 brightness-75" 
            priority 
          />
        </div>

        <div ref={imgSpeedRef} className="absolute inset-0 will-change-transform">
          <Image 
            src="/images/performance/performance-training-speed.jpg" 
            alt="Explosive sprint training" 
            fill 
            className="object-cover object-[center_-250px] grayscale contrast-125 brightness-75" 
            priority 
          />
        </div>

        {/* The Pause: Complete silence cuts to this image */}
        <div ref={imgFocusRef} className="absolute inset-0 will-change-transform opacity-0">
          <Image 
            src="/images/performance/performance-hero-focus.jpg" 
            alt="A moment of deep breath and focus" 
            fill 
            className="object-cover object-[center_-100px] grayscale contrast-125 brightness-75" 
            priority 
          />
        </div>

      </div>
    </section>
  );
}
