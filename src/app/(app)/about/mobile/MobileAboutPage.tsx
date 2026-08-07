"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

function useIntersectionObserver(options = { threshold: 0.1 }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isIntersecting] as const;
}

const heroImages = [
  "/images/synthetic.jpg", "/images/athletes.jpg", "/images/relay2026.jpg", "/images/combined-event.jpg",
  "/images/acc_history/103.jpg", "/images/acc_history/116.jpg", "/images/medal.jpg", "/images/throw.jpg",
  "/images/sprint.jpg", "/images/endurance.jpg", "/images/acc_history/26.jpg", "/images/acc_history/79.jpg",
  "/images/hurdles.jpg", "/images/jump.jpeg", "/images/campus/campus-hero-evolution.jpg", "/images/syntheticwithramp.jpg",
  "/images/acc_history/19.jpg", "/images/acc_history/113.jpg", "/images/acc_history/101.jpg", "/images/acc_history/105.jpg", 
  "/images/acc_history/106.jpg", "/images/acc_history/114.jpg", "/images/acc_history/117.jpg", "/images/acc_history/23.jpg", 
  "/images/acc_history/28.jpg", "/images/acc_history/29.jpg", "/images/acc_history/30.jpg", "/images/acc_history/55.jpg", 
  "/images/acc_history/70.jpg", "/images/acc_history/dronacharya.png", "/images/facility.jpg", "/images/scintific.jpg"
];

// Duplicate columns for infinite scroll
const mcol1 = [...heroImages.slice(0, 10), ...heroImages.slice(0, 10)];
const mcol2 = [...heroImages.slice(10, 20), ...heroImages.slice(10, 20)];
const mcol3 = [...heroImages.slice(20, 32), ...heroImages.slice(20, 32)];

export default function MobileAboutPage() {
  const [modernRef, isModernVisible] = useIntersectionObserver();

  return (
    <div className="w-full bg-chalk-white text-carbon-black min-h-screen relative flex flex-col">
      <style>{`
        @keyframes scrollUpMobile {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDownMobile {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-up-m {
          animation: scrollUpMobile 40s linear infinite;
        }
        .animate-scroll-down-m {
          animation: scrollDownMobile 45s linear infinite;
        }
      `}</style>
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col justify-end pb-12 px-6 overflow-hidden bg-carbon-black">
        
        {/* Angled Dramatic Collage with Infinite Scroll */}
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <div className="w-[150vw] h-[250vh] -rotate-12 scale-[1.2] flex gap-2 opacity-60">
            
            {/* Column 1 (Scrolls Up) */}
            <div className="flex-1 overflow-hidden">
              <div className="flex flex-col gap-2 animate-scroll-up-m">
                {mcol1.map((img, i) => (
                  <div key={`m1-${i}`} className="relative w-full h-[150px] rounded-md overflow-hidden shadow-lg flex-shrink-0">
                    <Image src={img} alt="Hero Collage" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Column 2 (Scrolls Down) */}
            <div className="flex-1 overflow-hidden">
              <div className="flex flex-col gap-2 animate-scroll-down-m" style={{ animationDuration: '35s' }}>
                {mcol2.map((img, i) => (
                  <div key={`m2-${i}`} className="relative w-full h-[200px] rounded-md overflow-hidden shadow-lg flex-shrink-0">
                    <Image src={img} alt="Hero Collage" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Column 3 (Scrolls Up) */}
            <div className="flex-1 overflow-hidden">
              <div className="flex flex-col gap-2 animate-scroll-up-m" style={{ animationDuration: '50s' }}>
                {mcol3.map((img, i) => (
                  <div key={`m3-${i}`} className="relative w-full h-[180px] rounded-md overflow-hidden shadow-lg flex-shrink-0">
                    <Image src={img} alt="Hero Collage" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-carbon-black/40 via-carbon-black/30 to-carbon-black/90 pointer-events-none" />
        
        <div className="relative z-10 w-full text-center drop-shadow-2xl">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-track-red" />
            <h2 className="text-xl md:text-3xl font-black tracking-[0.4em] uppercase text-track-red">
              Est. 1969
            </h2>
            <div className="w-8 h-[2px] bg-track-red" />
          </div>
          <h1 className="text-5xl font-primary uppercase tracking-tight text-chalk-white mb-2">About Us</h1>
        </div>
      </section>

      {/* Content Section (Interwoven Layout) */}
      <section className="relative z-20 w-full bg-chalk-white py-16 px-6">
        
        <div className="mb-12">
           <h2 className="text-4xl font-primary uppercase tracking-tight text-carbon-black mb-6 border-b-4 border-track-red inline-block pb-3">
             Our History
           </h2>
           <div className="flex flex-col gap-6 font-light leading-relaxed text-lg text-carbon-black/80">
            <p>
              <strong className="text-carbon-black font-semibold">Athletic Coaching Camp (ACC)</strong> was established on 4th April, 1969 with an idea that heralded a new beginning towards Scientific Coaching and Training in various disciplines of sports. Our goal has always been to involve the youth in the field of sports and games to improve awareness and protect them against the ills of society. We hold a simple philosophy: building a foundation to help the younger generation become healthy on both mental and physical levels.
            </p>
            
            {/* Historical Images Grid 1 */}
            <div className="my-8">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm font-primary uppercase tracking-widest text-carbon-black/40">The Legacy Years</h3>
                <div className="flex-1 h-px bg-carbon-black/10"></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative w-full aspect-square bg-carbon-black/5 overflow-hidden shadow-md">
                  <Image src="/images/acc_history/19.jpg" alt="Historical ACC" fill className="object-cover grayscale" />
                </div>
                <div className="relative w-full aspect-square bg-carbon-black/5 overflow-hidden shadow-md">
                  <Image src="/images/acc_history/55.jpg" alt="Historical ACC" fill className="object-cover grayscale" />
                </div>
                <div className="relative w-full aspect-[4/3] bg-carbon-black/5 overflow-hidden shadow-md col-span-2">
                  <Image src="/images/acc_history/101.jpg" alt="Historical ACC" fill className="object-cover grayscale" />
                </div>
              </div>
            </div>

            <p>
              Throughout the world, sports have a popular appeal among people of all ages and sexes. It is vital to both the individual and society, considered an important criterion for the enhancement of the prestige and image of any nation. However, the prevailing socio-economic conditions during our early years denied the scope to provide adequate infrastructure, facilities, and the appropriate coaching which is indispensable for the promotion of sports in society.
            </p>
            
            <p>
              Keeping this challenge in mind, ACC was born to bridge that gap and provide an uncompromising platform for athletic excellence.
            </p>
            
            {/* Historical Images Grid 2 */}
            <div className="grid grid-cols-2 gap-3 my-8">
              <div className="relative w-full aspect-[4/3] bg-carbon-black/5 overflow-hidden shadow-md col-span-2">
                <Image src="/images/acc_history/79.jpg" alt="Historical ACC" fill className="object-cover grayscale" />
              </div>
              <div className="relative w-full aspect-square bg-carbon-black/5 overflow-hidden shadow-md">
                <Image src="/images/acc_history/70.jpg" alt="Historical ACC" fill className="object-cover grayscale" />
              </div>
              <div className="relative w-full aspect-[4/3] bg-carbon-black/5 overflow-hidden shadow-md col-span-2">
                <Image src="/images/acc_history/30.jpg" alt="Historical ACC" fill className="object-cover grayscale" />
              </div>
              <div className="relative w-full aspect-[4/3] bg-carbon-black/5 overflow-hidden shadow-md col-span-2">
                <Image src="/images/acc_history/dronacharya.png" alt="Historical ACC Dronacharya" fill className="object-cover grayscale" />
              </div>
            </div>

            <div className="pt-8 border-t border-carbon-black/10">
              <h3 className="text-2xl font-primary uppercase tracking-wide text-track-red mb-4">Rise to Excellence</h3>
              <p className="mb-4">
                In the initial stage, ACC produced several district and state-level athletes. But today, ACC stands proud. Athletes who train here have not only become <strong>National Champions</strong> within the country but have also secured many Gold Medals from various International Arenas.
              </p>
              <p>
                Now we can proudly say that this organization has already produced <strong>3 Olympians</strong> and earned <strong>72 international medals</strong> from different levels of the world's top competitions.
              </p>
            </div>
            
            <div className="pt-8 border-t border-carbon-black/10">
              <h3 className="text-2xl font-primary uppercase tracking-wide text-track-red mb-4">Prestigious Recognition</h3>
              <p>
                Our members have received the most prestigious awards in India—including the <strong>Dronacharya Award</strong> and the <strong>Arjuna Award</strong>—from the Government of India, cementing ACC's legacy in the history of Indian athletics.
              </p>
            </div>
           </div>
        </div>

      </section>

      {/* ----------------- MODERN ERA SECTION ----------------- */}
      <div 
        ref={modernRef}
        className={`w-full bg-chalk-white px-6 pb-24 transition-all duration-[1500ms] ease-out ${isModernVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
      >
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="w-12 h-1 bg-track-red mb-2"></div>
          <h2 className="text-4xl font-primary uppercase tracking-tight text-carbon-black text-center">
            The Modern Era
          </h2>
          <p className="text-lg font-light leading-relaxed text-carbon-black/80 text-center">
            <strong className="font-semibold text-carbon-black">Athletic Coaching Camp (ACC) Sodepur</strong> features high-performance track-and-field infrastructure explicitly designed for competitive training.
          </p>
        </div>

        {/* Features Stack */}
        <div className="flex flex-col gap-12">
          
          {/* Feature 1 */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full aspect-[4/3] bg-carbon-black/5 overflow-hidden shadow-lg rounded-xl">
              <Image src="/images/synthetic.jpg" alt="Synthetic Track" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-primary uppercase tracking-wide text-track-red mb-3">Synthetic Athletic Track</h3>
              <p className="text-lg font-light text-carbon-black/70 leading-relaxed">
                Bengal's first private club setup featuring a high-tech synthetic running track designed to provide optimal grip, minimal impact, and world-class training conditions.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full aspect-[4/3] bg-carbon-black/5 overflow-hidden shadow-lg rounded-xl">
              <Image src="/images/facility.jpg" alt="Event Stations" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-primary uppercase tracking-wide text-track-red mb-3">Dedicated Event Stations</h3>
              <p className="text-lg font-light text-carbon-black/70 leading-relaxed">
                Specialized setups for long jump pits, shot put rings, hurdles, and pentathlon disciplines, ensuring our athletes have access to the specific environments they need to excel.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full aspect-[4/3] bg-carbon-black/5 overflow-hidden shadow-lg rounded-xl">
              <Image src="/images/scintific.jpg" alt="Conditioning Area" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-primary uppercase tracking-wide text-track-red mb-3">Strength & Coaching</h3>
              <div className="flex flex-col gap-4">
                <p className="text-lg font-light text-carbon-black/70 leading-relaxed">
                  <strong>Strength & Conditioning Area:</strong> Equipped with essential free weights, cardio gear, and functional fitness spaces.
                </p>
                <p className="text-lg font-light text-carbon-black/70 leading-relaxed">
                  <strong>Scientific Coaching:</strong> Professional guidance tailored for state and national-level competitive athletic trials.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
