'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MobilePerformancePage from './mobile/MobilePerformancePage';

export default function PerformanceClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  const marqueeText = "VO2 MAX // FAST TWITCH // LACTATE THRESHOLD // KINEMATICS // GROUND FORCE // VELOCITY PROFILE // ";

  const pillars = [
    {
      title: "Speed & Biomechanics",
      desc: "Fast-twitch fiber activation, stride frequency optimization, and ground-force reaction profiling. We dissect mechanics frame-by-frame to eliminate wasted motion.",
      img: "/images/performance/performance-training-speed.jpg"
    },
    {
      title: "Strength & Power",
      desc: "Olympic lifting, heavy plyometrics, and velocity-based training. Strength is useless without the ability to apply it in milliseconds.",
      img: "/images/performance/performance-training-strength.jpg"
    },
    {
      title: "Endurance & Tolerance",
      desc: "Lactate threshold manipulation, VO2 max optimization, and metabolic conditioning for sustained elite output.",
      img: "/images/endurance.jpg"
    }
  ];

  return (
    <main className="w-full bg-carbon-black text-chalk-white selection:bg-chalk-white selection:text-carbon-black" ref={containerRef}>
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block relative w-full">
        {/* Chapter 0: The Hero */}
        <section className="sticky top-0 z-10 h-screen w-full overflow-hidden flex flex-col justify-center items-center border-b border-chalk-white/10">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/performance/performance-hero-focus.jpg"
              alt="Performance Focus"
              fill
              className="object-cover object-top opacity-50 transition-all duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/80 via-carbon-black/20 to-carbon-black" />
          </div>
          
          {/* Marquee Background */}
          <div className="absolute top-1/4 left-0 w-full overflow-hidden opacity-10 pointer-events-none z-0 rotate-[-2deg]">
            <motion.div
              className="whitespace-nowrap text-[15vw] font-primary uppercase tracking-tighter"
              animate={{ x: [0, -2000] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
              {marqueeText} {marqueeText}
            </motion.div>
          </div>

          <div className="relative z-10 px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <span className="text-track-red text-sm md:text-base tracking-[0.5em] uppercase mb-8 block font-bold">
                The Science of Speed
              </span>
              <h1 className="text-6xl md:text-[10rem] lg:text-[13rem] font-primary uppercase tracking-tighter leading-none mb-6">
                Performance
              </h1>
              <p className="text-lg md:text-3xl font-light text-chalk-white/70 tracking-widest max-w-3xl mx-auto uppercase">
                Methodology, Data & Biomechanics
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
            <span className="text-[10px] uppercase tracking-[0.3em]">Access Data</span>
            <div className="w-[1px] h-24 bg-chalk-white/10 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-track-red"
                animate={{ y: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            </div>
          </motion.div>
        </section>

        {/* Chapter 01: The Method (Performance Pillars) */}
        <section className="relative z-20 w-full bg-carbon-black border-t border-chalk-white/10">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-40">
            
            <div className="text-center mb-40">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6">Chapter 01 // The Methodology</div>
                <h2 className="text-6xl md:text-8xl font-primary uppercase tracking-tight">
                  Anatomy of <br/> Performance
                </h2>
              </motion.div>
            </div>

            <div className="space-y-40">
              {pillars.map((pillar, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center`}>
                    
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                      <motion.div 
                        className="relative aspect-square md:aspect-[4/3] w-full"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      >
                        <Image
                          src={pillar.img}
                          alt={pillar.title}
                          fill
                          className="object-cover transition-all duration-1000 border border-chalk-white/10"
                        />
                        {/* Technical Grid Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                      </motion.div>
                    </div>

                    {/* Text */}
                    <div className="w-full lg:w-1/2">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      >
                        <h3 className="text-5xl md:text-6xl font-primary uppercase tracking-tight mb-8">
                          {pillar.title}
                        </h3>
                        <div className="w-12 h-[2px] bg-track-red mb-8" />
                        <p className="text-xl text-chalk-white/60 font-light leading-relaxed max-w-lg">
                          {pillar.desc}
                        </p>
                      </motion.div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Chapter 02: The Mind (Sports Psychology) */}
        <section className="relative z-30 w-full min-h-screen py-40 overflow-hidden flex flex-col justify-center">
           <div className="absolute inset-0 z-0">
             <Image src="/images/legacy/legacy-timeline-2002.jpg" alt="Background" fill className="object-cover opacity-20 " />
             <div className="absolute inset-0 bg-gradient-to-b from-track-red/95 to-track-red/90 backdrop-blur-sm" />
           </div>
           <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:20px_20px]" />
           
           <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-chalk-white">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-carbon-black text-xs tracking-[0.4em] uppercase mb-8 font-bold">Chapter 02 // The Mind</div>
                <div className="text-6xl md:text-8xl font-secondary text-carbon-black opacity-30 mb-4">"</div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-primary uppercase tracking-tighter leading-none mb-12">
                  The body is just the vehicle. <br/> The mind is the engine.
                </h2>
                <p className="text-xl md:text-2xl font-light text-chalk-white/80 max-w-3xl mx-auto leading-relaxed">
                  Elite performance requires a bulletproof psychology. We train athletes in intense visualization, arousal regulation, and pressure-proofing to ensure they execute perfectly when the stadium is screaming.
                </p>
              </motion.div>
           </div>
        </section>

        {/* Chapter 04: The Elite Standards (Table) */}
        <section className="relative z-40 py-40 bg-carbon-black text-chalk-white border-b border-chalk-white/10">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6">Chapter 03 // The Standard</div>
               <h2 className="text-4xl md:text-6xl font-primary uppercase tracking-tight mb-6">Barrier to Entry</h2>
               <p className="text-chalk-white/50 font-light text-lg max-w-2xl">
                 To be considered for the Phase 03 Elite Roster, athletes must meet or exceed these baseline physical metrics. We do not negotiate with gravity.
               </p>
            </motion.div>

            <motion.div 
              className="overflow-x-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-track-red">
                    <th className="py-6 px-4 font-primary tracking-widest uppercase text-chalk-white/60">Metric</th>
                    <th className="py-6 px-4 font-primary tracking-widest uppercase text-chalk-white/60">Sprints</th>
                    <th className="py-6 px-4 font-primary tracking-widest uppercase text-chalk-white/60">Jumps</th>
                    <th className="py-6 px-4 font-primary tracking-widest uppercase text-chalk-white/60">Distance</th>
                  </tr>
                </thead>
                <tbody className="font-light">
                  {[
                    { metric: "Back Squat (1RM)", sprint: "> 2.2x BW", jump: "> 2.0x BW", dist: "> 1.5x BW" },
                    { metric: "Power Clean", sprint: "> 1.5x BW", jump: "> 1.5x BW", dist: "N/A" },
                    { metric: "Reactive Strength Index", sprint: "> 3.0", jump: "> 3.5", dist: "> 2.0" },
                    { metric: "VO2 Max (ml/kg/min)", sprint: "50+", jump: "45+", dist: "75+" },
                    { metric: "Body Fat %", sprint: "< 8%", jump: "< 7%", dist: "< 6%" },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-chalk-white/10 hover:bg-chalk-white/5 transition-colors">
                      <td className="py-6 px-4 text-track-red font-primary uppercase tracking-wider">{row.metric}</td>
                      <td className="py-6 px-4">{row.sprint}</td>
                      <td className="py-6 px-4">{row.jump}</td>
                      <td className="py-6 px-4">{row.dist}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

          </div>
        </section>



        {/* Chapter 04: Final CTA */}
        <section className="relative z-40 py-40 bg-carbon-black text-chalk-white overflow-hidden text-center border-t border-chalk-white/10">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
               <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-8 font-bold">Chapter 04 // The End</div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-primary uppercase tracking-tight mb-8">
                Talent is common. <br/> Discipline is elite.
              </h2>
              <p className="text-xl text-chalk-white/50 font-light mb-12 max-w-2xl mx-auto uppercase tracking-wider">
                Submit your metrics for evaluation.
              </p>
              
              <Link 
                href="/admissions" 
                className="inline-block group relative cursor-pointer"
              >
                <div className="absolute inset-0 bg-track-red transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                <div className="relative bg-chalk-white text-carbon-black px-12 py-6 border border-chalk-white text-sm tracking-[0.2em] uppercase font-bold group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform">
                  Apply for Admission
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full relative z-20">
        <MobilePerformancePage />
      </div>
    </main>
  );
}
