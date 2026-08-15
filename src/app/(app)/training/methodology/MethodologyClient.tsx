'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MobileMethodologyPage from './mobile/MobileMethodologyPage';

export default function MethodologyClient() {
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
    <main className="w-full bg-carbon-black text-chalk-white selection:bg-chalk-white selection:text-carbon-black overflow-x-hidden" ref={containerRef}>
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block relative w-full">
        {/* Chapter 0: The Hero */}
        <section className="sticky top-0 z-10 h-screen w-full overflow-hidden flex flex-col justify-center items-center border-b border-chalk-white/10">
          <div className="absolute inset-0 z-0">
            <video 
              src="/videos/coaches2.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover object-center opacity-50 transition-all duration-1000"
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
              <h1 className="text-6xl md:text-[10rem] lg:text-[11rem] xl:text-[13rem] font-primary uppercase tracking-tighter leading-none mb-6">
                Methodology
              </h1>
              <p className="text-lg md:text-3xl font-light text-chalk-white/70 tracking-widest max-w-3xl mx-auto uppercase">
                Data, Biomechanics & Programmes
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
            <span className="text-[10px] uppercase tracking-[0.3em]">Explore Framework</span>
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
                <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6">Chapter 01 // Core Science</div>
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
        
        {/* Chapter 02: Programmes List */}
        <section className="relative z-20 w-full py-40 bg-chalk-white text-carbon-black border-y border-chalk-white/10">
          <div className="absolute inset-0 z-0">
            <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-[0.03]" />
          </div>
          
          <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-24">
            <div className="text-center mb-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6 font-bold">Chapter 02 // Application</div>
                <h2 className="text-6xl md:text-8xl font-primary uppercase tracking-tight">
                  Training <br/> Programmes
                </h2>
              </motion.div>
            </div>

            {programmes.map((prog, idx) => (
              <motion.div 
                key={idx}
                className="w-full flex flex-col md:flex-row border border-carbon-black/10 group hover:bg-carbon-black/5 transition-colors duration-500 bg-chalk-white"
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
                      <span className="text-carbon-black text-[10px] sm:text-sm uppercase tracking-wider font-bold">{idx === 0 ? "Fundamentals" : idx === 1 ? "Development" : idx === 2 ? "State Medals" : "National Medals"}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Chapter 03: The Mind (Sports Psychology) */}
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
                <div className="text-carbon-black text-xs tracking-[0.4em] uppercase mb-8 font-bold">Chapter 03 // The Mind</div>
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

        {/* Chapter 04: The Arsenal (Facilities & Equipment) */}
        <section className="relative z-40 py-40 bg-carbon-black text-chalk-white border-b border-chalk-white/10">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            
            <motion.div
              className="mb-20 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6">Chapter 04 // The Arsenal</div>
               <h2 className="text-4xl md:text-6xl font-primary uppercase tracking-tight mb-6">Elite Facilities</h2>
               <p className="text-chalk-white/50 font-light text-lg max-w-2xl mx-auto">
                 World-class training demands world-class infrastructure. Our athletes have access to the finest synthetic tracks, high-performance strength equipment, and advanced recovery technologies in the state.
               </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Synthetic Track",
                  desc: "State-of-the-art synthetic surface designed for maximum energy return and minimal joint impact, enabling high-volume sprint and hurdle training.",
                  img: "/images/synthetic.jpg"
                },
                {
                  title: "High-Performance Gym",
                  desc: "Equipped with Olympic lifting platforms and heavy iron. Built specifically for explosive power development and injury prevention.",
                  img: "/images/facilities/gym.png"
                },
                {
                  title: "Hill Training Slope",
                  desc: "Dedicated slopes engineered to build explosive acceleration, lower-body power, and unyielding stamina through resisted elevation sprints.",
                  img: "/images/facilities/ramp.png"
                },
                {
                  title: "Natural Recovery Pond",
                  desc: "A dedicated natural aquatic zone utilized for low-impact hydrostatic recovery, reducing post-session inflammation and flushing out lactic acid.",
img: "/images/relaxation.jpg"
                },
                {
                  title: "Performance Testing",
                  desc: "Lakhs of rupees invested in cutting-edge sport-science gadgets—including laser timing gates and kinematic sensors—to optimize every millisecond.",
                  img: "/images/performance/performance-training-endurance.jpg",
                  imgClassName: "object-bottom"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="group relative h-[400px] flex flex-col justify-end p-8 overflow-hidden border border-chalk-white/10"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                >
                  <Image 
                    src={item.img}
                    alt={item.title}
                    fill
                    className={`object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60 ${item.imgClassName || ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/50 to-transparent" />
                  
                  <div className="relative z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-primary uppercase tracking-tight mb-3">{item.title}</h3>
                    <p className="text-sm text-chalk-white/70 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>



        {/* Chapter 05: Final CTA */}
        <section className="relative z-40 py-40 bg-track-red text-chalk-white overflow-hidden flex flex-col items-center justify-center text-center border-t border-chalk-white/10">
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
              <div className="text-chalk-white/50 text-xs tracking-[0.4em] uppercase mb-8 font-bold">Chapter 05 // The End</div>
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
        <MobileMethodologyPage />
      </div>
    </main>
  );
}
