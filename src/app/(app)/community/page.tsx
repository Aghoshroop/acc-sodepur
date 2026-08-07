'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import MobileCommunityPage from './mobile/MobileCommunityPage';

export default function CommunityPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax and zoom for hero
  const { scrollYProgress: heroScroll } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.15]);

  return (
    <main className="w-full bg-carbon-black text-chalk-white min-h-screen flex flex-col" ref={containerRef}>
      
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block w-full">
        {/* 1. Hero Section: The ACC Family */}
        <section className="relative z-0 w-full h-screen overflow-hidden border-b border-chalk-white/10 flex items-center justify-center">
          <motion.div 
            className="absolute inset-0 z-0 origin-center"
            style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          >
            <Image
              src="/images/ACCfamily.jpg"
              alt="The ACC Family"
              fill
              className="object-cover opacity-50 transition-all duration-1000"
              priority
            />
            {/* Gradients to blend into the background */}
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
                More than a camp
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-[140px] font-primary uppercase tracking-tighter leading-[0.9] mb-6 drop-shadow-2xl flex flex-col items-center">
                <span className="block">The</span>
                <span className="block text-transparent [-webkit-text-stroke:2px_var(--color-chalk-white)]">Family</span>
              </h1>
              <p className="text-lg md:text-2xl font-light text-chalk-white/60 tracking-[0.2em] max-w-2xl mx-auto uppercase mt-8">
                Blood, Sweat, and Brotherhood
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

        {/* 2. The Ethos */}
        <section className="relative z-10 w-full min-h-screen py-16 md:py-32 bg-carbon-black border-b border-chalk-white/10 overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-10 " />
            <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
          </div>
          
          <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 items-center">
              
              {/* Text Content */}
              <div className="w-full lg:w-5/12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-8 font-bold">01 // The Ethos</div>
                  <h2 className="text-4xl md:text-7xl font-primary uppercase tracking-tight mb-6 md:mb-10 leading-[1.1]">
                    Driven By Passion.<br/> <span className="text-transparent [-webkit-text-stroke:1.5px_var(--color-chalk-white)]">Not Profit.</span>
                  </h2>
                  <div className="space-y-4 md:space-y-8 text-chalk-white/60 font-light text-base md:text-xl max-w-lg leading-relaxed">
                    <p>
                      ACC began with a stolen football and 8 refugee kids. Today, it hosts over 200 elite athletes. Yet, its core philosophy remains absolutely unchanged. 
                    </p>
                    <p>
                      We are a strictly non-profit organization. Athletes here do not buy their way in; they earn their place through relentless dedication. When you step onto the track, you aren't just training for yourself—you are upholding the standard for the athlete running beside you.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Image Composition */}
              <div className="w-full lg:w-7/12 relative h-[500px] md:h-[700px]">
                <motion.div 
                  className="absolute top-0 right-0 w-4/5 h-[85%] border border-chalk-white/10 bg-carbon-black overflow-hidden"
                  initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <Image
                    src="/images/performance/performance-roster-group.jpg"
                    alt="ACC Roster"
                    fill
                    className="object-cover transition-all duration-1000 opacity-70 hover:opacity-100 hover:scale-105"
                  />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-0 left-0 w-[95%] md:w-2/3 border border-chalk-white/10 bg-carbon-black p-4 sm:p-6 md:p-12 backdrop-blur-md"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <div className="text-4xl md:text-7xl font-secondary text-track-red opacity-30 absolute -top-2 md:-top-4 left-0 md:-left-2">"</div>
                  <p className="text-lg sm:text-xl md:text-3xl font-primary uppercase tracking-wide leading-[1.2] relative z-10 text-chalk-white">
                    We suffer together.<br/> We win together.<br/> <span className="text-track-red">The medals belong to all of us.</span>
                  </p>
                </motion.div>
              </div>
              
            </div>
          </div>
        </section>

        {/* 3. The Living Legacy */}
        <section className="relative z-20 w-full min-h-screen py-32 bg-chalk-white text-carbon-black overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="grid-light" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid-light)" />
            </svg>
          </div>
          
          <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 md:px-12 flex flex-col items-center text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6 font-bold">02 // The Lineage</div>
              <h2 className="text-6xl md:text-8xl font-primary uppercase tracking-tight">
                A Living Legacy
              </h2>
              <p className="mt-8 text-xl md:text-2xl text-carbon-black/60 font-light max-w-3xl mx-auto leading-relaxed">
                Once an ACC athlete, always an ACC athlete. Our Olympians don't just leave; they return to pass the torch.
              </p>
            </motion.div>
          </div>

          <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 md:px-12">
            <div className="relative aspect-video md:aspect-[21/9] w-full group overflow-hidden border border-carbon-black/20">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/athletes.jpg"
                  alt="The Wall of Medalists"
                  fill
                  className="object-cover group-hover:scale-105 group- transition-all duration-[2000ms] ease-out opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/80 via-carbon-black/20 to-transparent group-hover:opacity-50 transition-opacity duration-1000" />
                
                <div className="absolute bottom-8 left-8 flex items-center gap-4 text-chalk-white">
                  <div className="w-12 h-[2px] bg-track-red" />
                  <span className="font-primary uppercase tracking-widest text-sm md:text-base">The Hall of Fame</span>
                </div>
              </motion.div>
            </div>
            
            <div className="flex flex-row md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 mt-8 md:mt-16 pb-8 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {[
                { title: "Mentorship", desc: "Senior athletes actively guide the youth, forming a chain of knowledge that dates back to 1969. The knowledge is never hoarded, only shared." },
                { title: "The Wall", desc: "Every national and international medalist is immortalized on the ACC wall, setting the uncompromising standard for the next generation." },
                { title: "Support", desc: "When an athlete struggles, the entire community rallies. No one fights their battles alone on or off the track." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="group p-8 md:p-10 border border-carbon-black/10 hover:border-carbon-black/40 hover:bg-carbon-black/5 transition-all duration-500 cursor-default min-w-[85vw] md:min-w-0 snap-center shrink-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                >
                  <div className="w-12 h-12 rounded-full border border-track-red/30 flex items-center justify-center mb-8 group-hover:bg-track-red transition-colors duration-500">
                    <span className="text-track-red group-hover:text-chalk-white font-primary text-xl">0{idx+1}</span>
                  </div>
                  <h4 className="text-3xl font-primary uppercase tracking-tight mb-4 group-hover:text-track-red transition-colors duration-500">{item.title}</h4>
                  <p className="text-carbon-black/60 font-light leading-relaxed group-hover:text-carbon-black/80 transition-colors duration-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. The Rituals (Events) */}
        <section className="relative z-10 w-full py-20 md:py-40 bg-carbon-black text-chalk-white overflow-hidden border-t border-chalk-white/10">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/relay/relay-hero-night-race.jpg"
              alt="Premier Relay Night Race"
              fill
              className="object-cover opacity-20 "
            />
            <div className="absolute inset-0 bg-gradient-to-r from-carbon-black via-carbon-black/90 to-carbon-black/40" />
          </div>

          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="w-full md:w-3/5 lg:w-1/2">
              <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1 }}
                >
                  <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-8 font-bold">03 // The Rituals</div>
                  <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-tight mb-10 leading-[1.1]">
                    Nights of <br/> Fire & Glory
                  </h2>
                  <p className="text-xl text-chalk-white/60 font-light mb-12 leading-relaxed">
                    The ACC community truly comes alive during our legendary events. From gritty intra-camp time trials to the electrifying Premier Relay night races, these events forge the unbreakable spirit of our athletes under the stadium lights.
                  </p>
                  
                  <Link 
                    href="/premier-relay" 
                    className="inline-flex items-center gap-6 group"
                  >
                    <span className="text-sm font-primary uppercase tracking-widest text-track-red transition-colors">
                      Explore The Premier Relay
                    </span>
                    <div className="w-16 h-[1px] bg-track-red group-hover:w-32 transition-all duration-700 ease-[0.16,1,0.3,1]" />
                  </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. Final CTA */}
        <section className="relative z-10 w-full py-40 bg-track-red text-chalk-white overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
            <span className="text-[25vw] font-primary uppercase whitespace-nowrap leading-none select-none">Brotherhood</span>
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
                You don't just join a camp.<br/> You inherit a legacy.
              </h2>
              <p className="text-xl text-chalk-white/80 font-light mb-16 uppercase tracking-[0.2em]">
                Are you ready to become part of the family?
              </p>
              
              <Link 
                href="/admissions" 
                className="inline-block group relative"
              >
                <div className="absolute inset-0 bg-[#0A0A0A] transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                <div className="relative bg-chalk-white text-[#0A0A0A] px-12 py-6 border border-[#0A0A0A] text-sm tracking-[0.2em] uppercase font-bold group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform flex items-center gap-4">
                  Apply for Admission
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
      <div className="block lg:hidden w-full">
        <MobileCommunityPage />
      </div>

    </main>
  );
}
