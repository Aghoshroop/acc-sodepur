'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll } from 'framer-motion';
import MobileRudraPratimPage from './mobile/MobileRudraPratimPage';

type Chapter = {
  chapter: string;
  title: string;
  content: React.ReactNode;
  image: string;
  bgImage?: string;
  containImage?: boolean;
  fullWidthImage?: boolean;
  textPosition?: 'left' | 'right';
  imagePosition?: string;
  noOverlay?: boolean;
};

const CHAPTERS: Chapter[] = [
  {
    chapter: '01 / International Elite',
    title: 'World Athletics Level 3',
    content: (
      <div className="space-y-6">
        <p>Rudra Pratim Roy is the first coach from West Bengal to successfully pass the World Athletics Coaches Education and Certification System (CECS) Level 3 course at Netaji Subhas National Institute of Sports (NSNIS), Patiala.</p>
        <p>Specializing in Combined Events & Jumps, this represents elite-level international coaching standards. His methods blend traditional track discipline with modern biomechanical precision, paving the way for a new era in Indian athletics.</p>
      </div>
    ),
    image: '/images/level3.jpg',
    containImage: false,
    fullWidthImage: true,
    textPosition: 'right',
    imagePosition: 'object-[80%_70%]'
  },
  {
    chapter: '02 / Sports Science',
    title: 'EXOS & ISAK',
    content: (
      <div className="space-y-6">
        <p>A certified XPS through EXOS (USA)—a premier global authority in integrated performance training and athlete rehabilitation. He is formally certified in elite athletic rehabilitation methods from Australia, managing on-field injury prevention.</p>
        <p>Beyond training protocols, he holds the International Society for the Advancement of Kinanthropometry (ISAK Level 1) certification from Germany, making him an expert in body composition mapping and anthropometric scaling to ensure every athlete reaches their biological peak.</p>
      </div>
    ),
    image: '/images/performance/performance-hero-focus.jpg'
  },
  {
    chapter: '03 / Multi-Sport Elite',
    title: 'Beyond Athletics',
    content: (
      <div className="space-y-6">
        <p>His expertise is not confined to the track. As a Strength & Conditioning Coach and Fitness Trainer for Bhawanipur FC (IFA Shield and CFL), he has designed periodized regimens for elite football players like Pronoy Halder.</p>
        <p>He actively works with domestic cricketers out of Sodepur, engineering throwing-velocity training, lateral power output metrics, and explosive rotational acceleration drills. In tennis, he serves as the Elite Personal Performance Coach for Shivika Burman, an active member of the WTA and Asian Games Indian Women's squad.</p>
      </div>
    ),
    image: '/images/eastbengal.jpeg',
    fullWidthImage: true,
    textPosition: 'right'
  }
];

export default function RudraPratimPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="w-full bg-chalk-white text-carbon-black selection:bg-carbon-black selection:text-chalk-white" ref={containerRef}>
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block relative w-full">
        {/* Hero Section */}
        <section className="sticky top-0 z-10 h-screen w-full flex flex-col items-center justify-center overflow-hidden border-b border-carbon-black/10">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-[50%_40%] opacity-80 "
            >
              <source src="/videos/rudra-pratim-hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-chalk-white/40 via-chalk-white/20 to-chalk-white pointer-events-none" />
          </div>
          
          <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-xs md:text-sm tracking-[0.4em] uppercase text-track-red mb-6 block font-bold">
                Level 3 Certified Coach
              </span>
              <h1 className="text-6xl md:text-9xl lg:text-[10rem] font-primary uppercase tracking-tighter leading-none mb-6">
                Rudra Pratim<br />Roy
              </h1>
              <p className="text-xl md:text-3xl font-light text-carbon-black/60 tracking-wide max-w-3xl mx-auto uppercase mb-12">
                The Next Generation
              </p>
              
              <div className="max-w-2xl mx-auto border-l border-r border-carbon-black/10 p-8 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-track-red" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-track-red" />
                <p className="text-lg md:text-xl font-light italic text-carbon-black/80">
                  Blending the legendary discipline of his heritage with state-of-the-art sports science to redefine athletic potential.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-carbon-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Explore Profile</span>
            <div className="w-[1px] h-16 bg-carbon-black/10 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-track-red"
                animate={{ y: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            </div>
          </motion.div>
        </section>

        {/* Sticky Scroll Chapters Container */}
        <section className="relative z-20">
          {CHAPTERS.map((chapter, index) => {
            const isDark = index % 2 !== 0;
            const isTextRight = chapter.textPosition === 'right';
            return (
              <div 
                key={chapter.title}
                className={`sticky top-0 h-screen w-full flex items-center justify-center ${isDark ? 'bg-carbon-black text-chalk-white' : 'bg-chalk-white text-carbon-black'}`}
              >
                {/* Background Image per section */}
                <motion.div 
                  className="absolute inset-0 z-0 origin-bottom overflow-hidden"
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ margin: "-20%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <Image
                    src={chapter.bgImage || chapter.image}
                    alt={chapter.title}
                    fill
                    className={`object-cover ${chapter.imagePosition || 'object-center'} ${chapter.noOverlay ? 'opacity-100 -0' : (chapter.fullWidthImage ? 'opacity-60 -0' : (isDark ? 'opacity-20 ' : 'opacity-10 '))}`}
                  />
                  {/* Background overlay */}
                  {!chapter.noOverlay && (
                    <div className={`absolute inset-0 ${isDark 
                      ? (isTextRight ? 'bg-gradient-to-l from-carbon-black/80 via-carbon-black/40 to-transparent' : 'bg-gradient-to-r from-carbon-black/90 via-carbon-black/60 to-transparent')
                      : (isTextRight ? 'bg-gradient-to-l from-chalk-white/70 via-chalk-white/40 to-transparent' : 'bg-gradient-to-r from-chalk-white/90 via-chalk-white/50 to-transparent')}`} 
                    />
                  )}
                </motion.div>

                <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
                  
                  {/* Text Content */}
                  <div className={`w-full md:w-1/2 ${isTextRight ? 'ml-auto' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isTextRight ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ margin: "-20%" }}
                      transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span className="text-track-red text-sm md:text-base tracking-[0.3em] uppercase mb-4 block font-bold">
                        {chapter.chapter}
                      </span>
                      <h3 className="text-5xl md:text-7xl font-primary uppercase tracking-tight mb-8">
                        {chapter.title}
                      </h3>
                      <div className={`text-lg md:text-xl mb-10 max-w-lg font-light leading-relaxed ${isDark ? 'text-chalk-white/70' : 'text-carbon-black/70'}`}>
                        {chapter.content}
                      </div>
                    </motion.div>
                  </div>

                  {/* Right side Decorative Image container */}
                  {!chapter.fullWidthImage && (
                    <div className={`w-full md:w-1/2 hidden md:block ${isTextRight ? 'order-first' : ''}`}>
                      <motion.div
                        className={`relative aspect-[3/4] w-full max-w-md ${isTextRight ? 'mr-auto' : 'ml-auto'}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className={`absolute inset-0 border transform translate-x-4 translate-y-4 ${isDark ? 'border-chalk-white/10' : 'border-carbon-black/10'}`} />
                        <div className={`relative w-full h-full overflow-hidden border ${isDark ? 'border-chalk-white/5 bg-carbon-black' : 'border-carbon-black/5 bg-chalk-white'}`}>
                          <Image
                            src={chapter.image}
                            alt={`${chapter.title} Preview`}
                            fill
                            className={`${chapter.containImage ? 'object-contain' : 'object-cover'} transition-all duration-700 opacity-80 z-10`}
                          />
                        </div>
                      </motion.div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </section>

        {/* Outro Section */}
        <section className="relative z-30 py-40 bg-carbon-black text-chalk-white">
          {/* Subtle background text */}
          <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center overflow-hidden pointer-events-none">
            <span className="text-[10vw] font-primary uppercase whitespace-nowrap text-chalk-white/10">Evolution</span>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="inline-block border border-chalk-white/20 px-12 py-10 md:py-16">
                <p className="text-2xl md:text-4xl italic text-chalk-white/90 font-light leading-relaxed">
                  "Athletics is an exact science, but human potential is limitless. We measure the former to unlock the latter."
                </p>
                <p className="mt-8 text-track-red text-sm tracking-[0.3em] uppercase font-bold">— Rudra Pratim Roy</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full relative z-20">
        <MobileRudraPratimPage />
      </div>
    </main>
  );
}
