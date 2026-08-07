'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import MobileTrainingHero from './mobile/MobileTrainingHero';
import MobileTrainingDisciplines from './mobile/MobileTrainingDisciplines';
import MobileTrainingDetails from './mobile/MobileTrainingDetails';

export default function ProgrammesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax for hero
  const { scrollYProgress: heroScroll } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.1]);

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
      <div className="hidden lg:block">
        <div className="relative w-full">
          {/* Chapter 0: The Hero */}
          <section className="sticky top-0 z-10 min-h-screen w-full overflow-hidden flex flex-col justify-center border-b border-chalk-white/10">
            <motion.div 
              className="absolute inset-0 z-0 origin-center"
              style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
            >
              <Image
                src="/images/performance/performance-hero-focus.jpg"
                alt="Performance Focus"
                fill
                className="object-cover object-top opacity-50 transition-all duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/80 via-carbon-black/20 to-carbon-black" />
            </motion.div>
            
            {/* Marquee Background */}
            <div className="absolute top-1/4 left-0 w-full overflow-hidden opacity-5 pointer-events-none z-0 rotate-[-2deg]">
              <motion.div
                className="whitespace-nowrap text-[15vw] font-primary uppercase tracking-tighter"
                animate={{ x: [0, -2000] }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              >
                {marqueeText} {marqueeText}
              </motion.div>
            </div>

            <div className="relative z-10 px-6 text-center mt-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <span className="text-track-red text-sm md:text-base tracking-[0.5em] uppercase mb-8 block font-bold">
                  The Science of Speed
                </span>
                <h1 className="text-6xl md:text-[10rem] lg:text-[13rem] font-primary uppercase tracking-tighter leading-none mb-6">
                  Training
                </h1>
                <p className="text-lg md:text-3xl font-light text-chalk-white/50 tracking-widest max-w-3xl mx-auto uppercase">
                  Disciplines, Methodology, & Programmes
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
              <span className="text-[10px] uppercase tracking-[0.3em]">Examine The Method</span>
              <div className="w-[1px] h-24 bg-chalk-white/10 relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full bg-track-red"
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                />
              </div>
            </motion.div>
          </section>

          {/* Chapter 01: The Disciplines */}
          <section className="sticky top-0 z-20 w-full min-h-screen py-40 overflow-y-auto bg-carbon-black border-b border-chalk-white/10">
            <div className="absolute inset-0 z-0">
              <Image src="/images/legacy/legacy-timeline-2002.jpg" alt="Background" fill className="object-cover opacity-20 " />
              <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
            </div>
            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
              
              <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6">Chapter 01 // Specialization</div>
                  <h2 className="text-5xl md:text-8xl font-primary uppercase tracking-tight leading-none">
                    The Disciplines
                  </h2>
                </motion.div>
                <motion.p 
                  className="max-w-md text-lg text-chalk-white/60 font-light"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Our athletes don't just run; they engineer velocity. We offer highly specialized training for the absolute elite.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Sprints",
                    subtitle: "Raw Velocity",
                    desc: "Focus on the 100m, 200m, 400m, and Hurdles. We train the nervous system to fire at maximum frequency.",
                  },
                  {
                    title: "Mid-Distance",
                    subtitle: "The Engine",
                    desc: "The 800m and 1500m require a brutal combination of high VO2 max, lactate tolerance, and tactical aggression.",
                  },
                  {
                    title: "Jumps",
                    subtitle: "Flight Mechanics",
                    desc: "Long jump and high jump mechanics, focusing on approach velocity, penultimate step physics, and vertical impulse.",
                  },
                  {
                    title: "Heptathlon",
                    subtitle: "The Ultimate Athlete",
                    desc: "The legacy of ACC. Seven events. Two days. Complete athletic dominance requiring speed, strength, and immense stamina.",
                    highlight: true
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className={`p-10 flex flex-col justify-between aspect-[3/4] border border-chalk-white/10 backdrop-blur-md group hover:bg-chalk-white hover:text-carbon-black transition-colors duration-500 ${item.highlight ? 'bg-track-red/90 text-chalk-white' : 'bg-carbon-black/40'}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <div>
                      <span className={`text-[10px] tracking-[0.3em] uppercase ${item.highlight ? 'text-chalk-white/70' : 'text-track-red group-hover:text-track-red'}`}>
                        {item.subtitle}
                      </span>
                      <h3 className="text-3xl font-primary uppercase mt-4">{item.title}</h3>
                    </div>
                    <p className={`font-light text-sm leading-relaxed ${item.highlight ? 'text-chalk-white/90' : 'text-chalk-white/60 group-hover:text-carbon-black/60'}`}>
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>
          </section>

          {/* Chapter 02: The Daily Grind (Timeline) */}
          <section className="sticky top-0 z-30 w-full min-h-screen py-40 overflow-y-auto bg-carbon-black">
            <div className="absolute inset-0 z-0">
              <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-20 " />
              <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
            </div>
            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
              
              <motion.div
                className="text-center mb-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6">Chapter 02 // The Grind</div>
                <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-tight">
                  A Day in the Life
                </h2>
                <p className="mt-6 text-chalk-white/50 font-light max-w-2xl mx-auto text-lg">
                  There is no glory without the suffering. This is what it takes to survive the ACC elite pipeline.
                </p>
              </motion.div>

              <div className="relative">
                {/* Horizontal connecting line on desktop */}
                <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-chalk-white/10 z-0" />
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                  {[
                    { time: "04:30 AM", title: "The Awakening", desc: "Pre-dawn track sessions. Sprints, tempo runs, and technical hurdle drills while the world sleeps." },
                    { time: "08:00 AM", title: "Biomechanical Review", desc: "Film study. Analyzing ground contact times and joint angles using high-speed camera footage." },
                    { time: "03:00 PM", title: "The Iron Temple", desc: "Heavy strength and conditioning. Olympic lifts, velocity-based squats, and plyometric complexes." },
                    { time: "07:00 PM", title: "Recovery Protocols", desc: "Ice baths, deep tissue physiotherapy, and nutritional reloading to do it all again tomorrow." }
                  ].map((step, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex flex-col relative"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.6, delay: idx * 0.15 }}
                    >
                      <div className="w-24 h-24 rounded-full border border-chalk-white/20 bg-carbon-black flex items-center justify-center mb-8 shrink-0 relative z-10 group-hover:border-track-red transition-colors">
                        <span className="text-track-red font-secondary text-sm tracking-widest">{step.time}</span>
                      </div>
                      <h4 className="text-2xl font-primary uppercase mb-4">{step.title}</h4>
                      <p className="text-chalk-white/60 font-light leading-relaxed text-sm pr-4">
                        {step.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
            </div>
          </section>
        </div>

        {/* Chapter 03: The Method (Performance Pillars) */}
        <section className="relative py-40 bg-carbon-black border-t border-chalk-white/10">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            
            <div className="text-center mb-32">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6">Chapter 03 // The Methodology</div>
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

        {/* Chapter 04: The Mind (Sports Psychology) */}
        <section className="relative py-40 bg-track-red text-chalk-white">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:20px_20px]" />
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-carbon-black text-xs tracking-[0.4em] uppercase mb-8 font-bold">Chapter 04 // The Mind</div>
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

        {/* Chapter 05: The Fuel (Nutrition) */}
        <section className="relative py-40 bg-concrete-grey text-carbon-black overflow-hidden border-b border-carbon-black/10">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-center">
            
            <div className="w-full md:w-1/2">
              <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6">Chapter 05 // The Fuel</div>
                  <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-tight mb-8">
                    Nutritional <br/> Reloading
                  </h2>
                  <p className="text-lg text-carbon-black/70 font-light leading-relaxed max-w-lg mb-8">
                    You cannot sustain 10,000+ KGs of load and thousands of meters of sprinting on a poor diet. Nutrition at ACC is strictly monitored.
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-2 border-track-red pl-4">
                      <h4 className="font-primary uppercase tracking-widest text-lg">Macro Splitting</h4>
                      <p className="text-sm font-light text-carbon-black/60">Tailored carbohydrate periodization for heavy training days versus active recovery.</p>
                    </div>
                    <div className="border-l-2 border-track-red pl-4">
                      <h4 className="font-primary uppercase tracking-widest text-lg">Glycogen Windows</h4>
                      <p className="text-sm font-light text-carbon-black/60">Strict 30-minute post-training windows to replenish depleted glycogen stores.</p>
                    </div>
                    <div className="border-l-2 border-track-red pl-4">
                      <h4 className="font-primary uppercase tracking-widest text-lg">Hydration Metrics</h4>
                      <p className="text-sm font-light text-carbon-black/60">Urine specific gravity testing prior to major sessions to prevent catastrophic cramping.</p>
                    </div>
                  </div>
                </motion.div>
            </div>
            
            <div className="w-full md:w-1/2 h-full">
                <motion.div 
                  className="grid grid-cols-2 gap-4 h-[500px]"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 1 }}
                >
                  <div className="bg-carbon-black text-chalk-white p-8 flex flex-col justify-between">
                    <span className="text-xs uppercase tracking-widest text-track-red">Daily Intake</span>
                    <h3 className="text-5xl md:text-6xl font-primary">4.5K+</h3>
                    <span className="text-sm uppercase tracking-widest opacity-60">Avg Calories</span>
                  </div>
                  <div className="bg-track-red text-chalk-white p-8 flex flex-col justify-between mt-12">
                    <span className="text-xs uppercase tracking-widest text-carbon-black">Protein Matrix</span>
                    <h3 className="text-5xl md:text-6xl font-primary">2.2g</h3>
                    <span className="text-sm uppercase tracking-widest opacity-60">Per KG Bodyweight</span>
                  </div>
                </motion.div>
            </div>

          </div>
        </section>

        {/* Chapter 06: The Pipeline */}
        <section className="relative py-40 bg-concrete-grey text-carbon-black overflow-hidden border-b border-carbon-black/10">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            
            <div className="flex flex-col lg:flex-row gap-24">
              
              {/* Sticky Header */}
              <div className="w-full lg:w-1/3">
                <div className="sticky top-40">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6">Chapter 06 // The Pipeline</div>
                    <h2 className="text-6xl md:text-8xl font-primary uppercase tracking-tight leading-none mb-8">
                      The <br/> Structure
                    </h2>
                    <p className="text-xl text-carbon-black/60 font-light max-w-sm">
                      From raw, unrefined talent to the Olympic standard. Our programmes are designed as a ruthless filter for greatness.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Program List */}
              <div className="w-full lg:w-2/3">
                <div className="space-y-24 border-l-2 border-carbon-black/10 pl-8 md:pl-16 relative">
                  
                  {/* Red Timeline Line */}
                  <motion.div 
                    className="absolute top-0 left-[-2px] w-[2px] bg-track-red origin-top"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    style={{ height: '100%' }}
                  />

                  {[
                    {
                      phase: "Phase 01",
                      title: "Grassroots Foundation",
                      desc: "Talent identification. We focus on general physical preparedness (GPP), movement literacy, and psychological resilience. This is where we see who breaks and who adapts."
                    },
                    {
                      phase: "Phase 02",
                      title: "Specialization & Biometrics",
                      desc: "Athletes are assigned specific disciplines based on anthropometric data and fast-twitch dominance. Training volumes increase dramatically, introducing velocity-based lifting and threshold runs."
                    },
                    {
                      phase: "Phase 03",
                      title: "The Elite Roster",
                      desc: "For the top 1%. International competition preparation. Highly individualized programming focusing on marginal gains, micro-cycles, and peaking strategies for the Olympics and Asian Games.",
                      img: "/images/soma.jpg",
                      caption: "Olympians are forged here."
                    }
                  ].map((prog, idx) => (
                    <motion.div 
                      key={idx}
                      className="relative"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-20%" }}
                      transition={{ duration: 0.8, delay: idx * 0.2 }}
                    >
                      {/* Dot */}
                      <div className="absolute top-4 -left-[37px] md:-left-[69px] w-4 h-4 rounded-full bg-track-red border-4 border-concrete-grey z-10" />
                      
                      <span className="text-track-red text-sm tracking-[0.2em] uppercase font-bold mb-4 block">
                        {prog.phase}
                      </span>
                      <h3 className="text-4xl md:text-6xl font-primary uppercase tracking-tight mb-6">
                        {prog.title}
                      </h3>
                      <p className="text-lg md:text-xl text-carbon-black/70 font-light leading-relaxed max-w-2xl mb-8">
                        {prog.desc}
                      </p>

                      {prog.img && (
                        <div className="relative group">
                          <div className="relative w-full max-w-4xl overflow-hidden group- transition-all duration-1000 border border-carbon-black/20 mt-8">
                            <img
                              src={prog.img}
                              alt={prog.title}
                              className="w-full h-auto group-hover:scale-105 transition-transform duration-[2000ms]"
                            />
                          </div>
                          {prog.caption && (
                            <p className="text-sm font-secondary tracking-widest text-carbon-black/50 mt-4 uppercase">
                              {prog.caption}
                            </p>
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Chapter 07: The Elite Standards (Table) */}
        <section className="relative py-40 bg-carbon-black text-chalk-white border-b border-chalk-white/10">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6">Chapter 07 // The Standard</div>
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

        {/* Chapter 08: The Lab */}
        <section className="relative py-40 bg-concrete-grey text-carbon-black overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            
            <div className="bg-carbon-black text-chalk-white p-12 md:p-24 relative overflow-hidden">
              {/* Background grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-16 justify-between items-center">
                <div className="w-full md:w-1/2">
                    <span className="text-track-red text-xs tracking-[0.4em] uppercase mb-6 block">Chapter 08 // The Data</span>
                    <h3 className="text-5xl md:text-7xl font-primary uppercase tracking-tight mb-8">The Lab</h3>
                    <p className="text-chalk-white/60 font-light text-lg leading-relaxed mb-8">
                      We don't guess. We measure. Utilizing OptoJump sensors, high-speed GoPros for kinematic breakdown, and velocity trackers in the weight room, every single effort is quantified, logged, and analyzed.
                    </p>
                    <ul className="space-y-4 font-secondary tracking-widest text-sm text-chalk-white/80">
                      <li className="flex items-center gap-4"><div className="w-2 h-2 bg-track-red" /> Frame-by-frame mechanical analysis</li>
                      <li className="flex items-center gap-4"><div className="w-2 h-2 bg-track-red" /> Force-velocity profiling</li>
                      <li className="flex items-center gap-4"><div className="w-2 h-2 bg-track-red" /> Advanced recovery & cryotherapy</li>
                    </ul>
                </div>

                <div className="w-full md:w-1/3 relative aspect-square border border-chalk-white/20 overflow-hidden bg-carbon-black">
                    <Image
                      src="/images/campus/campus-hero-evolution.jpg"
                      alt="Lab Background"
                      fill
                      className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-carbon-black/60" />
                    <Image 
                      src="/images/athlete.png"
                      alt="Biomechanical Analysis"
                      fill
                      className="object-contain opacity-50 p-8 relative z-10"
                    />
                    {/* Crosshairs */}
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-track-red/50 z-20" />
                    <div className="absolute top-0 left-1/2 w-[1px] h-full bg-track-red/50 z-20" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Chapter 09: Final CTA */}
        <section className="relative py-40 bg-carbon-black text-chalk-white overflow-hidden text-center">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-8 font-bold">Chapter 09 // The End</div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-primary uppercase tracking-tight mb-8">
                Talent is common. <br/> Discipline is elite.
              </h2>
              <p className="text-xl text-chalk-white/50 font-light mb-12 max-w-2xl mx-auto uppercase tracking-wider">
                Submit your metrics for evaluation.
              </p>
              
              <Link 
                href="/admissions" 
                className="inline-block group relative"
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
      <div className="block lg:hidden w-full">
        <MobileTrainingHero />
        <MobileTrainingDisciplines />
        <MobileTrainingDetails />
      </div>

    </main>
  );
}
