'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MobileMethodologyPage() {
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
    <div className="w-full bg-carbon-black text-chalk-white min-h-screen overflow-x-hidden">
      
      {/* Chapter 0: The Hero */}
      <section className="relative h-[85vh] w-full overflow-hidden flex flex-col justify-end pb-16 px-6 border-b border-chalk-white/10">
        <div className="absolute inset-0 z-0">
          <video 
            src="/videos/coaches2.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover object-center opacity-50"
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
            Methodology
          </h1>
          <p className="text-sm font-light text-chalk-white/70 tracking-widest uppercase">
            Data, Biomechanics & Programmes
          </p>
        </div>
      </section>

      {/* Chapter 01: The Method (Performance Pillars) */}
      <section className="relative z-20 w-full bg-carbon-black py-24 px-6 border-t border-chalk-white/10">
        <div className="mb-16">
          <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4">Chapter 01 // Core Science</div>
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

      {/* Chapter 02: Programmes List */}
      <section className="relative z-20 w-full py-24 bg-chalk-white text-carbon-black">
        <div className="absolute inset-0 z-0">
          <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-[0.03]" />
        </div>
        
        <div className="relative z-10 w-full flex flex-col gap-8 px-4">
          <div className="mb-8">
            <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">Chapter 02 // Application</div>
            <h2 className="text-4xl font-primary uppercase tracking-tight text-carbon-black">
              Training <br/> Programmes
            </h2>
          </div>

          {programmes.map((prog, idx) => (
            <motion.div 
              key={idx}
              className="w-full flex flex-col border border-carbon-black/10 group bg-chalk-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
            >
              {/* Text Side */}
              <div className="w-full p-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-track-red px-3 py-1 text-[10px] font-primary uppercase tracking-widest text-chalk-white">
                    {prog.badge}
                  </span>
                  <span className="text-carbon-black/40 text-[10px] uppercase tracking-[0.2em] font-bold">
                    {prog.ages}
                  </span>
                </div>
                
                <h2 className="text-3xl font-primary uppercase tracking-tight mb-2 text-carbon-black">
                  {prog.title}
                </h2>
                
                <h3 className="text-xs font-light text-track-red uppercase tracking-widest mb-4 font-bold">
                  {prog.focus}
                </h3>
                
                <p className="text-carbon-black/60 font-light text-sm leading-relaxed">
                  {prog.description}
                </p>
              </div>
              
              {/* Info / Metric Side */}
              <div className="w-full border-t border-carbon-black/10 p-6 flex flex-col justify-center relative overflow-hidden bg-carbon-black/5">
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none text-carbon-black">
                  <span className="text-[120px] font-primary leading-none">{idx + 1}</span>
                </div>
                
                <div className="relative z-10 flex flex-col gap-6 w-full">
                  <div className="flex flex-col gap-2">
                    <span className="text-track-red text-[10px] uppercase tracking-[0.2em] font-bold">Intensity</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={`h-1 w-full ${i <= (idx + 2) ? 'bg-carbon-black' : 'bg-carbon-black/20'}`} />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-track-red text-[10px] uppercase tracking-[0.2em] font-bold">Volume</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={`h-1 w-full ${i <= (idx + 1.5) ? 'bg-carbon-black' : 'bg-carbon-black/20'}`} />
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-carbon-black/10">
                    <span className="text-carbon-black/40 text-[10px] uppercase tracking-[0.2em] block mb-2 font-bold">Primary Goal</span>
                    <span className="text-carbon-black text-xs uppercase tracking-wider font-bold">{idx === 0 ? "Fundamentals" : idx === 1 ? "Development" : idx === 2 ? "State Medals" : "National Medals"}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chapter 03: The Mind (Sports Psychology) */}
      <section className="relative z-30 w-full py-32 px-6 flex flex-col justify-center border-t border-chalk-white/10">
         <div className="absolute inset-0 z-0">
           <Image src="/images/legacy/legacy-timeline-2002.jpg" alt="Background" fill className="object-cover opacity-20" />
           <div className="absolute inset-0 bg-gradient-to-b from-track-red/95 to-track-red/90 backdrop-blur-sm" />
         </div>
         <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:15px_15px]" />
         
         <div className="relative z-10 w-full text-chalk-white">
            <div className="text-carbon-black text-[10px] tracking-[0.4em] uppercase mb-6 font-bold">Chapter 03 // The Mind</div>
            <div className="text-5xl font-secondary text-carbon-black opacity-30 mb-2">"</div>
            <h2 className="text-3xl font-primary uppercase tracking-tighter leading-tight mb-8">
              The body is just the vehicle. <br/> The mind is the engine.
            </h2>
            <p className="text-sm font-light text-chalk-white/80 leading-relaxed">
              Elite performance requires a bulletproof psychology. We train athletes in intense visualization, arousal regulation, and pressure-proofing to ensure they execute perfectly when the stadium is screaming.
            </p>
         </div>
      </section>

      {/* Chapter 04: The Arsenal (Facilities & Equipment) */}
      <section className="relative z-40 py-24 px-6 bg-carbon-black text-chalk-white border-y border-chalk-white/10">
        <div className="mb-12">
           <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4">Chapter 04 // The Arsenal</div>
           <h2 className="text-4xl font-primary uppercase tracking-tight mb-4">Elite Facilities</h2>
           <p className="text-chalk-white/50 font-light text-sm">
             World-class training demands world-class infrastructure. Our athletes have access to the finest synthetic tracks, high-performance strength equipment, and advanced recovery technologies in the state.
           </p>
        </div>

        <div className="flex flex-col gap-8">
          {[
            {
              title: "Synthetic Track",
              desc: "State-of-the-art synthetic surface designed for maximum energy return and minimal joint impact, enabling high-volume sprint and hurdle training.",
              img: "/images/synthetic.jpg"
            },
            {
              title: "High-Performance Gym",
              desc: "Equipped with Olympic lifting platforms and heavy iron. Built specifically for explosive power development and injury prevention.",
              img: "/images/gym.jpg" // Using an assumption that this might exist or fallback
            },
            {
              title: "Hill Training Slope",
              desc: "Dedicated slopes engineered to build explosive acceleration, lower-body power, and unyielding stamina through resisted elevation sprints.",
              img: "/images/hill.jpg"
            },
            {
              title: "Natural Recovery Pond",
              desc: "A dedicated natural aquatic zone utilized for low-impact hydrostatic recovery, reducing post-session inflammation and flushing out lactic acid.",
              img: "/images/pond.jpg"
            },
            {
              title: "Performance Testing",
              desc: "Lakhs of rupees invested in cutting-edge sport-science gadgets—including laser timing gates and kinematic sensors—to optimize every millisecond.",
              img: "/images/tech.jpg"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              className="relative h-[300px] flex flex-col justify-end p-6 overflow-hidden border border-chalk-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Image 
                src={item.img}
                alt={item.title}
                fill
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/60 to-transparent" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-primary uppercase tracking-tight mb-2">{item.title}</h3>
                <p className="text-xs text-chalk-white/70 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chapter 05: Final CTA */}
      <section className="relative z-40 py-24 bg-track-red text-chalk-white overflow-hidden flex flex-col items-center justify-center text-center border-t border-chalk-white/10 px-4">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
          <span className="text-[40vw] font-primary uppercase whitespace-nowrap leading-none select-none">Prove It</span>
        </div>
        
        <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center w-full"
          >
            <div className="text-chalk-white/50 text-[10px] tracking-[0.4em] uppercase mb-6 font-bold">Chapter 05 // The End</div>
            <h2 className="text-4xl font-primary uppercase tracking-tight mb-6">
              Think you have <br/>what it takes?
            </h2>
            <p className="text-sm text-chalk-white/80 font-light mb-10 uppercase tracking-[0.2em]">
              Apply for a trial assessment today.
            </p>
            
            <Link 
              href="/admissions" 
              className="w-full group relative block"
            >
              <div className="absolute inset-0 bg-[#0A0A0A] transform translate-x-1.5 translate-y-1.5" />
              <div className="relative w-full bg-chalk-white text-[#0A0A0A] p-4 text-[10px] tracking-[0.2em] uppercase font-bold flex items-center justify-center gap-3">
                Begin Application
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/>
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
