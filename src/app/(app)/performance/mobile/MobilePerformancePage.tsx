'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MobilePerformancePage() {
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
    <div className="w-full bg-carbon-black text-chalk-white min-h-screen">
      
      {/* Chapter 0: The Hero */}
      <section className="relative h-[85vh] w-full overflow-hidden flex flex-col justify-end pb-16 px-6 border-b border-chalk-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/performance/performance-hero-focus.jpg"
            alt="Performance Focus"
            fill
            className="object-cover object-top opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/40 to-carbon-black/20" />
        </div>
        
        {/* Marquee Background */}
        <div className="absolute top-1/3 left-0 w-full overflow-hidden opacity-10 pointer-events-none z-0 rotate-[-4deg]">
          <div className="whitespace-nowrap text-[20vw] font-primary uppercase tracking-tighter animate-marquee">
            {marqueeText} {marqueeText}
          </div>
        </div>

        <div className="relative z-10 w-full">
          <span className="text-track-red text-[10px] tracking-[0.5em] uppercase mb-4 block font-bold">
            The Science of Speed
          </span>
          <h1 className="text-6xl font-primary uppercase tracking-tighter leading-[0.9] mb-4">
            Performance
          </h1>
          <p className="text-sm font-light text-chalk-white/70 tracking-widest uppercase">
            Methodology, Data & Biomechanics
          </p>
        </div>
      </section>

      {/* Chapter 01: The Method (Performance Pillars) */}
      <section className="relative z-20 w-full bg-carbon-black py-24 px-6 border-t border-chalk-white/10">
        <div className="mb-16">
          <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4">Chapter 01 // The Methodology</div>
          <h2 className="text-4xl font-primary uppercase tracking-tight">
            Anatomy of <br/> Performance
          </h2>
        </div>

        <div className="flex flex-col gap-20">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="flex flex-col gap-8">
              {/* Image */}
              <div className="relative aspect-square w-full">
                <Image
                  src={pillar.img}
                  alt={pillar.title}
                  fill
                  className="object-cover border border-chalk-white/10"
                />
                {/* Technical Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              </div>

              {/* Text */}
              <div className="w-full">
                <h3 className="text-3xl font-primary uppercase tracking-tight mb-4 leading-none">
                  {pillar.title}
                </h3>
                <div className="w-8 h-[2px] bg-track-red mb-4" />
                <p className="text-sm text-chalk-white/60 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chapter 02: The Mind (Sports Psychology) */}
      <section className="relative z-30 w-full py-32 px-6 flex flex-col justify-center border-t border-chalk-white/10">
         <div className="absolute inset-0 z-0">
           <Image src="/images/legacy/legacy-timeline-2002.jpg" alt="Background" fill className="object-cover opacity-20" />
           <div className="absolute inset-0 bg-gradient-to-b from-track-red/95 to-track-red/90 backdrop-blur-sm" />
         </div>
         <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:15px_15px]" />
         
         <div className="relative z-10 w-full text-chalk-white">
            <div className="text-carbon-black text-[10px] tracking-[0.4em] uppercase mb-6 font-bold">Chapter 02 // The Mind</div>
            <div className="text-5xl font-secondary text-carbon-black opacity-30 mb-2">"</div>
            <h2 className="text-3xl font-primary uppercase tracking-tighter leading-tight mb-8">
              The body is just the vehicle. <br/> The mind is the engine.
            </h2>
            <p className="text-sm font-light text-chalk-white/80 leading-relaxed">
              Elite performance requires a bulletproof psychology. We train athletes in intense visualization, arousal regulation, and pressure-proofing to ensure they execute perfectly when the stadium is screaming.
            </p>
         </div>
      </section>

      {/* Chapter 03: The Elite Standards (Table) */}
      <section className="relative z-40 py-24 px-6 bg-carbon-black text-chalk-white border-y border-chalk-white/10">
        <div className="mb-12">
           <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4">Chapter 03 // The Standard</div>
           <h2 className="text-4xl font-primary uppercase tracking-tight mb-4">Barrier to Entry</h2>
           <p className="text-chalk-white/50 font-light text-sm">
             To be considered for the Phase 03 Elite Roster, athletes must meet or exceed these baseline physical metrics. We do not negotiate with gravity.
           </p>
        </div>

        <div className="overflow-x-auto w-full no-scrollbar border border-chalk-white/10">
          <table className="w-full text-left border-collapse min-w-[500px] text-xs">
            <thead>
              <tr className="border-b border-track-red bg-chalk-white/5">
                <th className="py-4 px-4 font-primary tracking-widest uppercase text-chalk-white/60">Metric</th>
                <th className="py-4 px-4 font-primary tracking-widest uppercase text-chalk-white/60">Sprints</th>
                <th className="py-4 px-4 font-primary tracking-widest uppercase text-chalk-white/60">Jumps</th>
                <th className="py-4 px-4 font-primary tracking-widest uppercase text-chalk-white/60">Distance</th>
              </tr>
            </thead>
            <tbody className="font-light">
              {[
                { metric: "Back Squat (1RM)", sprint: "> 2.2x BW", jump: "> 2.0x BW", dist: "> 1.5x BW" },
                { metric: "Power Clean", sprint: "> 1.5x BW", jump: "> 1.5x BW", dist: "N/A" },
                { metric: "Reactive Strength Index", sprint: "> 3.0", jump: "> 3.5", dist: "> 2.0" },
                { metric: "VO2 Max", sprint: "50+", jump: "45+", dist: "75+" },
                { metric: "Body Fat %", sprint: "< 8%", jump: "< 7%", dist: "< 6%" },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-chalk-white/5 hover:bg-chalk-white/5 transition-colors">
                  <td className="py-4 px-4 text-track-red font-primary uppercase tracking-wider">{row.metric}</td>
                  <td className="py-4 px-4 text-chalk-white/80">{row.sprint}</td>
                  <td className="py-4 px-4 text-chalk-white/80">{row.jump}</td>
                  <td className="py-4 px-4 text-chalk-white/80">{row.dist}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>



      {/* Chapter 04: Final CTA */}
      <section className="relative z-40 py-32 bg-carbon-black text-chalk-white text-center border-t border-chalk-white/10">
        <div className="relative z-10 w-full px-6 flex flex-col items-center">
           <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-6 font-bold">Chapter 04 // The End</div>
          <h2 className="text-4xl font-primary uppercase tracking-tight leading-[1.1] mb-6">
            Talent is common. <br/> Discipline is elite.
          </h2>
          <p className="text-sm text-chalk-white/50 font-light mb-10 max-w-[250px] mx-auto uppercase tracking-wider">
            Submit your metrics for evaluation.
          </p>
          
          <Link 
            href="/admissions" 
            className="inline-block relative active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-track-red translate-x-1 translate-y-1" />
            <div className="relative bg-chalk-white text-carbon-black px-8 py-4 border border-chalk-white text-[10px] tracking-[0.2em] uppercase font-bold">
              Apply for Admission
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}
