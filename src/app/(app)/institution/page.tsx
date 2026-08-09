'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MobileInstitutionHero from './mobile/MobileInstitutionHero';
import MobileInstitutionDetails from './mobile/MobileInstitutionDetails';

const SECTIONS = [
  {
    title: 'The Founder',
    description: 'Discover the vision and dedication of Kuntal Roy, the driving force behind Athletic Coaching Camp.',
    href: '/founder',
    image: '/images/legacy/legacy-founder-kuntal-roy.jpg',
  },
  {
    title: 'The Campus',
    description: 'Explore our state-of-the-art facilities designed to foster athletic excellence and personal growth.',
    href: '/campus',
    image: '/images/campus/campus-hero-evolution.jpg',
  },
  {
    title: 'Our Community',
    description: 'Meet the athletes, coaches, and alumni who make up the vibrant ACC community.',
    href: '/community',
    image: '/images/legacy/legacy-timeline-2002.jpg',
  },
  {
    title: 'Institutional Archive',
    description: 'Journey through the rich history and milestones of Athletic Coaching Camp since its inception.',
    href: '/archive',
    image: '/images/legacy/legacy-hero-archive.jpg',
  },
];

export default function InstitutionPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="w-full min-h-screen bg-carbon-black text-chalk-white selection:bg-chalk-white selection:text-carbon-black">
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block">
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/legacy/legacy-hero-archive.jpg"
              alt="ACC Institution"
              fill
              className="object-cover opacity-40 "
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/60 via-transparent to-carbon-black" />
          </div>
          
          <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-sm md:text-base tracking-[0.4em] uppercase text-chalk-white/60 mb-6">
                The Heart of ACC
              </h1>
              <h2 className="text-6xl md:text-9xl font-primary uppercase tracking-tighter leading-none mb-8">
                The Institution
              </h2>
              <div className="w-24 h-[2px] bg-track-red mx-auto" />
            </motion.div>
          </div>
          
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-chalk-white/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <span className="text-xs uppercase tracking-[0.3em]">Scroll to Explore</span>
            <div className="w-[1px] h-12 bg-chalk-white/20 relative overflow-hidden">
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

        {/* Sections List */}
        <section ref={containerRef} className="relative pb-32">
          {SECTIONS.map((section, index) => {
            return (
              <div 
                key={section.title}
                className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
                style={{ zIndex: index + 10 }}
              >
                {/* Background Image per section */}
                <motion.div 
                  className="absolute inset-0 z-0 origin-bottom"
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ margin: "-20%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover "
                  />
                  <div className="absolute inset-0 bg-carbon-black/80" />
                  
                  {/* Subtle gradient overlay to make text pop */}
                  <div className="absolute inset-0 bg-gradient-to-r from-carbon-black/90 via-carbon-black/50 to-transparent" />
                </motion.div>

                <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
                  
                  {/* Text Content */}
                  <div className="w-full md:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ margin: "-20%" }}
                      transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span className="text-track-red text-sm md:text-base tracking-[0.3em] uppercase mb-4 block">
                        0{index + 3}
                      </span>
                      <h3 className="text-5xl md:text-7xl font-primary uppercase tracking-tight mb-6">
                        {section.title}
                      </h3>
                      <p className="text-lg md:text-xl text-chalk-white/60 mb-10 max-w-lg font-light leading-relaxed">
                        {section.description}
                      </p>
                      <Link 
                        href={section.href}
                        className="group inline-flex items-center gap-6 text-xs md:text-sm tracking-[0.2em] uppercase hover:text-chalk-white/80 transition-colors"
                      >
                        <span className="relative overflow-hidden pb-2">
                          Explore {section.title.split(' ')[0]}
                          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-chalk-white transform origin-left transition-transform duration-300 group-hover:scale-x-0" />
                          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-track-red transform origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                        </span>
                        <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </motion.div>
                  </div>

                  {/* Decorative Image/Element on right */}
                  <div className="w-full md:w-1/2 hidden md:block">
                    <motion.div
                      className="relative aspect-square w-full max-w-md ml-auto"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ margin: "-20%" }}
                      transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="absolute inset-0 border border-chalk-white/10 transform -translate-x-4 -translate-y-4" />
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          src={section.image}
                          alt={`${section.title} Preview`}
                          fill
                          className="object-cover transition-all duration-700"
                        />
                      </div>
                    </motion.div>
                  </div>

                </div>
              </div>
            );
          })}
        </section>

        {/* Outro CTA */}
        <section className="py-32 bg-chalk-white text-carbon-black text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-primary uppercase tracking-tight mb-8">
              Experience the Legacy
            </h2>
            <p className="text-xl text-carbon-black/60 mb-12 font-light">
              Join the ranks of champions who have called Athletic Coaching Camp their home.
            </p>
            <Link 
              href="/admissions"
              className="inline-block border border-carbon-black px-12 py-5 text-sm uppercase tracking-[0.2em] hover:bg-carbon-black hover:text-chalk-white transition-colors duration-500"
            >
              Apply Now
            </Link>
          </motion.div>
        </section>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full">
        <MobileInstitutionHero />
        <MobileInstitutionDetails />
      </div>
    </main>
  );
}
