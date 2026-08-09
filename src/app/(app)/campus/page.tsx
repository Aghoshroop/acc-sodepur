'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeUpVariant: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function CampusPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax for hero
  const { scrollYProgress: heroScroll } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);

  return (
    <main className="w-full bg-carbon-black text-chalk-white selection:bg-track-red selection:text-chalk-white min-h-screen" ref={containerRef}>
      
      {/* 1. Hero Section: The Forge */}
      <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <Image 
            src="/images/facility.jpg" 
            alt="The Forge of Champions" 
            fill 
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-carbon-black/80 via-transparent to-carbon-black/80" />
        </motion.div>
        
        <div className="relative z-10 text-center px-6 mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-primary uppercase tracking-tighter leading-[0.85] mb-6 drop-shadow-2xl">
              The <span className="text-transparent" style={{ WebkitTextStroke: '2px #E63946' }}>Forge</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-primary uppercase tracking-wide text-chalk-white drop-shadow-lg mb-8">
              Of Champions
            </h2>
            <p className="text-xl md:text-2xl font-light text-chalk-white/80 max-w-2xl mx-auto drop-shadow-md">
              Where raw potential meets scientific rigor. This is not just a camp; it's a high-performance laboratory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Synthetic Track */}
      <section className="relative w-full py-32 bg-chalk-white text-carbon-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-10 grayscale" />
          <div className="absolute inset-0 bg-chalk-white/80 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 pr-0 lg:pr-8">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="border-l-4 border-track-red pl-6">
                <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6 font-bold">01 // The Grounds</div>
                <h3 className="text-4xl md:text-6xl font-primary uppercase tracking-wide mb-6">
                  The Synthetic Track
                </h3>
                <p className="text-carbon-black/80 leading-relaxed text-xl mb-4">
                  In 1969, it was a muddy field prone to flooding. Today, it is a state-of-the-art synthetic track demanding absolute perfection from every strike of the spike.
                </p>
                <p className="text-carbon-black/60 leading-relaxed text-lg">
                  Designed for speed, shock absorption, and all-weather resilience, our track is the heartbeat of the academy. Every Olympic dream nurtured here begins with thousands of laps on this very surface.
                </p>
              </motion.div>
            </div>
            
            {/* Image */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[500px]">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full shadow-2xl border-[6px] border-white"
              >
                <Image src="/images/synthetic.jpg" alt="Synthetic Track" fill className="object-cover object-center" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Jumps & Elevation (Ramp, Long Jump, High Jump) */}
      <section className="relative w-full py-32 bg-carbon-black text-chalk-white border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="mb-20 text-center"
          >
            <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6 font-bold">02 // Gravity & Flight</div>
            <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-wider mb-6">
              Jumps & <span className="text-track-red">Elevation</span>
            </h2>
            <p className="text-xl font-light text-chalk-white/60 max-w-3xl mx-auto leading-relaxed">
              Specialized sectors engineered for vertical propulsion and horizontal explosive power.
            </p>
          </motion.div>

          <div className="flex flex-col gap-24">
            
            {/* The Ramp */}
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="w-full lg:w-1/2 flex flex-col gap-6 pl-0 lg:pl-12">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="border-l-4 border-track-red pl-6">
                  <h3 className="text-4xl font-primary uppercase tracking-wide mb-4">The Elevation Ramp</h3>
                  <p className="text-chalk-white/80 leading-relaxed text-xl mb-4">
                    A specially engineered inclined ramp facility designed exclusively for advanced resistance and acceleration training.
                  </p>
                  <p className="text-chalk-white/60 leading-relaxed text-lg">
                    Used by elite sprinters and jumpers to mathematically dissect speed and push endurance far beyond biological comfort zones.
                  </p>
                </motion.div>
              </div>
              <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[500px]">
                <Image src="/images/syntheticwithramp.jpg" alt="Elevation Ramp" fill className="object-cover object-center shadow-2xl border-4 border-white/10" />
              </div>
            </div>

            {/* Jump Pits */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2 flex flex-col gap-6 pr-0 lg:pr-12">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="border-l-4 border-white pl-6">
                  <h3 className="text-4xl font-primary uppercase tracking-wide mb-4">Long Jump & High Jump Pits</h3>
                  <p className="text-chalk-white/80 leading-relaxed text-xl mb-4">
                    World-class jumping sectors catering to both horizontal extension and vertical clearance.
                  </p>
                  <p className="text-chalk-white/60 leading-relaxed text-lg">
                    These pits have forged Olympians like Sanjay Kumar Rai. Featuring precision run-ups and professional-grade landing zones, they are meticulously maintained to meet international standards.
                  </p>
                </motion.div>
              </div>
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 h-[400px] lg:h-[500px]">
                <div className="relative w-full h-full">
                  <Image src="/images/facilities/longjump.jpg" alt="Long Jump Pit" fill className="object-cover shadow-2xl border-2 border-white/10" />
                  <div className="absolute bottom-4 left-4 bg-carbon-black/80 px-3 py-1 text-xs font-bold uppercase tracking-widest text-track-red backdrop-blur-md">Long Jump</div>
                </div>
                <div className="relative w-full h-full">
                  <Image src="/images/facilities/highjump.jpg" alt="High Jump Pit" fill className="object-cover shadow-2xl border-2 border-white/10" />
                  <div className="absolute bottom-4 left-4 bg-carbon-black/80 px-3 py-1 text-xs font-bold uppercase tracking-widest text-track-red backdrop-blur-md">High Jump</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Throwing Sectors */}
      <section className="relative w-full py-32 bg-chalk-white text-carbon-black">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="border-l-4 border-track-red pl-6">
                <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6 font-bold">03 // Power & Precision</div>
                <h3 className="text-5xl font-primary uppercase tracking-wide mb-6">
                  Throwing Sectors
                </h3>
                <p className="text-carbon-black/80 leading-relaxed text-xl mb-4">
                  Dedicated safety enclosures and concrete circles for shotput and discus training.
                </p>
                <p className="text-carbon-black/60 leading-relaxed text-lg">
                  Designed to maximize rotational velocity and release angles while maintaining absolute safety for surrounding athletes.
                </p>
              </motion.div>
            </div>

            <div className="w-full lg:w-2/3 relative h-[400px] lg:h-[600px]">
              <Image src="/images/throw.jpg" alt="Throwing Sector" fill className="object-cover shadow-2xl border-4 border-white" />
              <div className="absolute bottom-6 right-6 flex gap-4">
                <div className="bg-white/90 text-carbon-black px-4 py-2 text-sm font-bold uppercase tracking-widest shadow-xl backdrop-blur-md">Shotput</div>
                <div className="bg-track-red text-white px-4 py-2 text-sm font-bold uppercase tracking-widest shadow-xl">Discus</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Strength & Conditioning */}
      <section className="relative w-full py-32 bg-carbon-black text-chalk-white overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 z-0">
          <Image src="/images/s&c.jpg" alt="Gym Background" fill className="object-cover opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-transparent to-carbon-black" />
        </div>
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6 font-bold">04 // The Iron Temple</div>
            <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-tight mb-6">
              Strength & <span className="text-track-red">Conditioning</span>
            </h2>
            <p className="text-xl font-light text-chalk-white/60 max-w-3xl mx-auto leading-relaxed">
              We don't train bodybuilders; we build explosive machines. Our indoor facilities are designed for absolute power output.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div 
              className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] bg-white/5 border border-white/10 shadow-inner flex items-center justify-center"
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            >
              {/* Blank image block for Heavy Free Weights as requested */}
              <div className="text-white/20 uppercase tracking-widest text-sm font-bold">Image Coming Soon</div>
              <div className="absolute top-6 left-6 bg-carbon-black/90 text-white px-6 py-3 text-lg font-primary uppercase tracking-widest border-l-4 border-track-red">
                Heavy Free Weights
              </div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px]"
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            >
              <Image src="/images/s&c.jpg" alt="Fitness Room" fill className="object-cover border border-white/10 shadow-2xl" />
              <div className="absolute top-6 left-6 bg-carbon-black/90 text-white px-6 py-3 text-lg font-primary uppercase tracking-widest border-l-4 border-track-red">
                Fitness Room
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { stat: "10,000+", label: "KGs Lifted Daily" },
              { stat: "Olympic", label: "Lifting Platforms" },
              { stat: "Modern", label: "Cardio Equipment" },
              { stat: "Force", label: "Velocity Profiling" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                <h3 className="text-3xl md:text-4xl font-primary text-track-red mb-2">{item.stat}</h3>
                <p className="text-xs tracking-[0.2em] uppercase text-chalk-white/60">{item.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
