'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import MobileProgrammesPage from './mobile/MobileProgrammesPage';

export default function ProgrammesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax for hero
  const { scrollYProgress: heroScroll } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);

  const programmes = [
    {
      title: "Foundation",
      badge: "U-14",
      ages: "10-14 Years",
      focus: "Motor Skills & Biomechanics",
      description: "The absolute beginning of the elite pathway. We focus heavily on fundamental motor skills, running mechanics, and introducing the discipline required to survive at ACC. Athletes learn to train before they learn to compete.",
    },
    {
      title: "Development",
      badge: "U-16",
      ages: "14-16 Years",
      focus: "Strength & Tactics",
      description: "Introduction of sport-specific strength and conditioning. The volume and intensity of training increases significantly. Athletes begin to specialize in events and develop tactical awareness on the track.",
    },
    {
      title: "High Performance",
      badge: "U-18",
      ages: "16-18 Years",
      focus: "Competitive Excellence",
      description: "Rigorous, state-level competitive training designed to break limits. This tier focuses on lactate threshold training, advanced power metrics, and mental fortitude under extreme pressure.",
    },
    {
      title: "Elite Pro",
      badge: "18+",
      ages: "18+ Years",
      focus: "National & International",
      description: "Full-time professional athletic development. Everything is dialed in: nutrition, recovery, and peak performance peaking. This is preparation for national and international medals.",
    }
  ];

  return (
    <main className="w-full bg-chalk-white text-carbon-black min-h-screen flex flex-col selection:bg-track-red selection:text-chalk-white" ref={containerRef}>
      
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block relative w-full">
        {/* 1. Hero Section */}
        <section className="relative z-0 w-full h-screen overflow-hidden border-b border-chalk-white/10 flex items-center justify-center">
          <motion.div 
            className="absolute inset-0 z-0 origin-center"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <Image
              src="/images/performance/performance-hero-focus.jpg"
              alt="The Crucible"
              fill
              className="object-cover object-top opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/40 via-transparent to-carbon-black" />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/80 via-transparent to-transparent" />
          </motion.div>
          
          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-track-red text-sm tracking-[0.4em] uppercase mb-8 block font-bold">
                Training Programmes
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-[140px] font-primary uppercase tracking-tighter leading-[0.9] mb-6 drop-shadow-2xl flex flex-col items-center">
                <span className="block">The</span>
                <span className="block text-transparent [-webkit-text-stroke:2px_var(--color-chalk-white)]">Crucible</span>
              </h1>
              <p className="text-lg md:text-2xl font-light text-chalk-white/60 tracking-[0.2em] max-w-2xl mx-auto uppercase mt-8">
                Where potential meets pressure
              </p>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-chalk-white/40 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll Down</span>
            <div className="w-[1px] h-16 bg-chalk-white/10 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-track-red"
                animate={{ y: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            </div>
          </motion.div>
        </section>

        {/* 2. Programmes List */}
        <section className="relative z-10 w-full py-32 bg-chalk-white">
          <div className="absolute inset-0 z-0">
            <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-5" />
          </div>
          
          <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-24">
            {programmes.map((prog, idx) => (
              <motion.div 
                key={idx}
                className="w-full flex flex-col md:flex-row border border-carbon-black/10 group bg-chalk-white hover:bg-carbon-black/5 transition-colors duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
              >
                {/* Text Side */}
                <div className="w-1/2 p-4 sm:p-8 md:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-8">
                    <span className="bg-chalk-white/50 border border-carbon-black/20 px-2 sm:px-4 py-1 text-[10px] sm:text-xs md:text-sm font-primary uppercase tracking-widest text-carbon-black group-hover:bg-track-red group-hover:border-track-red group-hover:text-chalk-white transition-all duration-500">
                      {prog.badge}
                    </span>
                    <span className="text-carbon-black/40 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] font-bold">
                      {prog.ages}
                    </span>
                  </div>
                  
                  <h2 className="text-xl sm:text-4xl md:text-6xl font-primary uppercase tracking-tight mb-3 sm:mb-6 group-hover:text-track-red transition-colors duration-500">
                    {prog.title}
                  </h2>
                  
                  <h3 className="text-[10px] sm:text-lg md:text-xl font-light text-carbon-black/80 uppercase tracking-widest mb-3 sm:mb-6">
                    {prog.focus}
                  </h3>
                  
                  <p className="text-carbon-black/60 font-light text-xs sm:text-base leading-relaxed max-w-xl">
                    {prog.description}
                  </p>
                </div>
                
                {/* Info / Metric Side */}
                <div className="w-full md:w-1/2 border-t md:border-t-0 md:border-l border-carbon-black/10 p-4 sm:p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none group-hover:opacity-10 transition-opacity duration-1000 text-carbon-black">
                    <span className="text-[120px] sm:text-[200px] md:text-[300px] font-primary leading-none">{idx + 1}</span>
                  </div>
                  
                  <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full max-w-md mx-auto">
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <span className="text-track-red text-[8px] sm:text-[10px] uppercase tracking-[0.2em] font-bold">Intensity</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(i => (
                          <div key={i} className={`h-1 w-full ${i <= (idx + 2) ? 'bg-carbon-black' : 'bg-carbon-black/20'}`} />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <span className="text-track-red text-[8px] sm:text-[10px] uppercase tracking-[0.2em] font-bold">Volume</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(i => (
                          <div key={i} className={`h-1 w-full ${i <= (idx + 1.5) ? 'bg-carbon-black' : 'bg-carbon-black/20'}`} />
                        ))}
                      </div>
                    </div>
                    <div className="col-span-1 sm:col-span-2 pt-3 sm:pt-6 border-t border-carbon-black/10 mt-1 sm:mt-2">
                      <span className="text-carbon-black/40 text-[8px] sm:text-xs uppercase tracking-[0.2em] block mb-1 sm:mb-2 font-bold">Primary Goal</span>
                      <span className="text-carbon-black text-[10px] sm:text-sm uppercase tracking-wider">{idx === 0 ? "Fundamentals" : idx === 1 ? "Development" : idx === 2 ? "State Medals" : "National Medals"}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Final CTA */}
        <section className="relative z-10 w-full py-40 bg-track-red text-chalk-white overflow-hidden flex flex-col items-center justify-center text-center border-t border-chalk-white/10">
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
            <span className="text-[25vw] font-primary uppercase whitespace-nowrap leading-none select-none">Prove It</span>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-tight mb-8">
                Think you have <br/>what it takes?
              </h2>
              <p className="text-xl text-chalk-white/80 font-light mb-16 uppercase tracking-[0.2em]">
                Apply for a trial assessment today.
              </p>
              
              <Link 
                href="/admissions" 
                className="inline-block group relative"
              >
                <div className="absolute inset-0 bg-[#0A0A0A] transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                <div className="relative bg-chalk-white text-[#0A0A0A] px-12 py-6 border border-[#0A0A0A] text-sm tracking-[0.2em] uppercase font-bold group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform flex items-center gap-4">
                  Begin Application
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/>
                  </svg>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full relative z-20">
        <MobileProgrammesPage />
      </div>

    </main>
  );
}
