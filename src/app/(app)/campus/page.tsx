'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import MobileCampusPage from './mobile/MobileCampusPage';

export default function CampusPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax for hero
  const { scrollYProgress: heroScroll } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);

  // Horizontal scroll for Biomechanics Lab
  const labRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: labScroll } = useScroll({
    target: labRef,
    offset: ["start start", "end end"]
  });
  const labX = useTransform(labScroll, [0, 1], ["0%", "-50%"]);

  return (
    <main className="w-full bg-chalk-white text-carbon-black selection:bg-track-red selection:text-chalk-white min-h-screen" ref={containerRef}>
      
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block">
        <div className="relative w-full">
          {/* 1. Hero Section: The Crucible */}
          <section className="sticky top-0 z-10 w-full min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden border-b border-chalk-white/10">
            
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/campus/campus-hero-evolution.jpg"
                alt="Campus Overview"
                fill
                className="object-cover opacity-20 "
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-track-red text-sm tracking-[0.3em] uppercase mb-8 font-bold">
                  The Infrastructure of Excellence
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-primary uppercase tracking-tighter leading-[0.85] mb-8">
                  The <span className="text-transparent" style={{ WebkitTextStroke: '2px #F4F4F0' }}>Crucible</span>
                </h1>
                <p className="text-xl md:text-2xl font-light text-chalk-white/70 max-w-2xl mx-auto">
                  Where raw potential meets scientific rigor. This is not just a camp; it's a high-performance laboratory.
                </p>
              </motion.div>
            </div>
          </section>

          {/* 2. The Proving Grounds (Synthetic Track) */}
          <section className="sticky top-0 z-20 w-full min-h-screen py-32 bg-chalk-white overflow-hidden border-b border-carbon-black/10 overflow-y-auto">
            <div className="absolute inset-0 z-0">
              <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-5" />
              <div className="absolute inset-0 bg-gradient-to-b from-chalk-white/95 to-chalk-white/80 backdrop-blur-sm" />
            </div>
            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
              
              <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                <div className="w-full lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6">01 // The Grounds</div>
                    <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-tight mb-8">
                      The <br /> Synthetic <br /> Theater
                    </h2>
                    <div className="space-y-6 text-carbon-black/70 font-light text-lg md:text-xl max-w-lg leading-relaxed">
                      <p>In 1969, it was a muddy field prone to flooding. Today, it is a state-of-the-art synthetic track demanding absolute perfection from every strike of the spike.</p>
                      <p>Featuring a specially engineered elevated ramp facility for advanced resistance training, this is where speed is mathematically dissected and endurance is pushed beyond biological comfort.</p>
                    </div>
                  </motion.div>
                </div>

                <div className="w-full lg:w-1/2 relative">
                  <motion.div 
                    className="relative aspect-video lg:aspect-[4/3] w-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  >
                    <Image
                      src="/images/syntheticwithramp.jpg"
                      alt="Synthetic Track"
                      fill
                      className="object-cover transition-all duration-1000"
                    />
                    <div className="absolute inset-0 border border-carbon-black/10" />
                  </motion.div>
                  
                  {/* Overlapping smaller image */}
                  <motion.div 
                    className="absolute -bottom-12 -left-12 w-2/3 aspect-video hidden md:block"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <Image
                      src="/images/track.png"
                      alt="Track Details"
                      fill
                      className="object-cover border-4 border-chalk-white transition-all duration-1000"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. The Iron Temple (Strength & Conditioning) */}
          <section className="sticky top-0 z-30 w-full min-h-screen py-40 bg-carbon-black/5 text-carbon-black border-b border-carbon-black/10 overflow-y-auto overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image src="/images/s&c.jpg" alt="Strength and Conditioning" fill className="object-cover opacity-5" />
              <div className="absolute inset-0 bg-gradient-to-b from-chalk-white/95 to-chalk-white/80 backdrop-blur-sm" />
            </div>
            
            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
              <motion.div 
                className="text-center mb-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6">02 // The Forge</div>
                <h2 className="text-6xl md:text-8xl font-primary uppercase tracking-tight">
                  The Iron Temple
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { stat: "10,000+", label: "KGs Lifted Daily" },
                  { stat: "Lakhs+", label: "Modern Equipment" },
                  { stat: "Elite", label: "Olympic Platforms" },
                  { stat: "Force", label: "Velocity Profiling" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="bg-chalk-white text-carbon-black p-12 border border-carbon-black/10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                  >
                    <h3 className="text-5xl md:text-6xl font-primary text-track-red mb-4">{item.stat}</h3>
                    <p className="text-sm tracking-[0.2em] uppercase text-carbon-black/60">{item.label}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-24 max-w-3xl mx-auto text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-xl md:text-2xl font-light italic leading-relaxed text-carbon-black/80">
                  "Strength isn't just about moving weight. It's about moving weight fast. We don't train bodybuilders; we build explosive machines."
                </p>
              </motion.div>
            </div>
          </section>
        </div>

        {/* 4. Biomechanics & Data Lab (Horizontal Scroll) */}
        <section className="relative bg-chalk-white text-carbon-black h-[200vh]" ref={labRef}>
          <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
            
            <div className="absolute top-12 md:top-24 left-6 md:left-12 z-20">
              <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-2">03 // The Lab</div>
              <h2 className="text-4xl md:text-6xl font-primary uppercase tracking-tight">Data & Diagnostics</h2>
            </div>

            <motion.div 
              className="flex gap-8 md:gap-24 px-6 md:px-48 w-[300vw] md:w-[200vw] h-[70vh] items-center"
              style={{ x: labX }}
            >
              
              <div className="w-[85vw] md:w-[50vw] h-full flex flex-col justify-center shrink-0">
                <div className="relative w-full aspect-video mb-8 border border-chalk-white/10 overflow-hidden">
                  <Image
                    src="/images/campus/campus-tomorrow-empty.jpg"
                    alt="Biomechanics Lab"
                    fill
                    className="object-cover opacity-90 transition-all duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="text-3xl font-primary uppercase text-track-red mb-4">Frame-by-Frame</h3>
                <p className="text-carbon-black/70 font-light text-lg md:max-w-xl">
                  Multiple GoPros capture every millimeter of an athlete's stride. Joint angles, ground contact time, and flight time are mathematically analyzed to eliminate inefficiencies.
                </p>
              </div>

              <div className="w-[85vw] md:w-[50vw] h-full flex flex-col justify-center shrink-0">
                <div className="relative w-full aspect-video mb-8 border border-carbon-black/10 overflow-hidden bg-carbon-black/5">
                  <div className="absolute inset-0 flex items-center justify-center text-carbon-black/10 font-primary text-8xl md:text-9xl">
                     RX
                  </div>
                </div>
                <h3 className="text-3xl font-primary uppercase text-track-red mb-4">Recovery Protocols</h3>
                <p className="text-carbon-black/70 font-light text-lg md:max-w-xl">
                  Targeted recovery testing machinery measures muscle fatigue. An athlete does not return to the track until their biological markers indicate full readiness.
                </p>
              </div>

              <div className="w-[85vw] md:w-[50vw] h-full flex flex-col justify-center shrink-0">
                <div className="relative w-full aspect-video mb-8 border border-chalk-white/10 overflow-hidden">
                  <Image
                    src="/images/campus/501606845_9586045361503872_7631205289418007814_n.jpg"
                    alt="Data Analysis"
                    fill
                    className="object-cover opacity-90 transition-all duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="text-3xl font-primary uppercase text-track-red mb-4">The Black Book</h3>
                <p className="text-carbon-black/70 font-light text-lg md:max-w-xl">
                  Every session is recorded. The legendary Black Book holds decades of historic load charts, ensuring that no training block is left to guesswork.
                </p>
              </div>

            </motion.div>
          </div>
        </section>

        {/* 5. Final CTA */}
        <section className="relative py-40 bg-carbon-black text-chalk-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/campus/627147160_1202759115380237_5287536834450879670_n.jpg"
              alt="Campus CTA Background"
              fill
              className="object-cover opacity-10"
            />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl md:text-8xl font-primary uppercase tracking-tight mb-8">
                The Track <br/> Doesn't Care <br/> About Excuses.
              </h2>
              <p className="text-xl text-chalk-white/60 font-light mb-12 max-w-2xl mx-auto uppercase tracking-wider">
                Do you have the grit to survive the crucible?
              </p>
              
              <Link 
                href="/admissions" 
                className="inline-block group relative"
              >
                <div className="absolute inset-0 bg-track-red transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                <div className="relative bg-chalk-white text-carbon-black px-12 py-6 border border-carbon-black text-sm tracking-[0.2em] uppercase font-bold group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform">
                  Apply for Admission
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full">
        <MobileCampusPage />
      </div>

    </main>
  );
}
