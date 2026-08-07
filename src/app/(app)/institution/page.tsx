'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MobileInstitutionHero from './mobile/MobileInstitutionHero';
import MobileInstitutionDetails from './mobile/MobileInstitutionDetails';

const SECTIONS = [
  {
    title: 'Founder & Legacy',
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
                        0{index + 1}
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
