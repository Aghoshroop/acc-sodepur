'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const CHAPTERS = [
  {
    chapter: '01 / International Elite',
    title: 'World Athletics Level 3',
    content: (
      <div className="space-y-4 text-sm text-chalk-white/70">
        <p>Rudra Pratim Roy is the first coach from West Bengal to successfully pass the World Athletics Coaches Education and Certification System (CECS) Level 3 course at Netaji Subhas National Institute of Sports (NSNIS), Patiala.</p>
        <p>Specializing in Combined Events & Jumps, this represents elite-level international coaching standards. His methods blend traditional track discipline with modern biomechanical precision, paving the way for a new era in Indian athletics.</p>
      </div>
    ),
    image: '/images/level3.jpg',
    bgImage: '/images/level3.jpg'
  },
  {
    chapter: '02 / Sports Science',
    title: 'EXOS & ISAK',
    content: (
      <div className="space-y-4 text-sm text-carbon-black/70">
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
      <div className="space-y-4 text-sm text-chalk-white/70">
        <p>His expertise is not confined to the track. As a Strength & Conditioning Coach and Fitness Trainer for Bhawanipur FC (IFA Shield and CFL), he has designed periodized regimens for elite football players like Pronoy Halder.</p>
        <p>He actively works with domestic cricketers out of Sodepur, engineering throwing-velocity training, lateral power output metrics, and explosive rotational acceleration drills. In tennis, he serves as the Elite Personal Performance Coach for Shivika Burman, an active member of the WTA and Asian Games Indian Women's squad.</p>
      </div>
    ),
    image: '/images/eastbengal.jpeg',
    bgImage: '/images/eastbengal.jpeg'
  }
];

export default function MobileRudraPratimPage() {
  return (
    <div className="w-full bg-chalk-white text-carbon-black flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden border-b border-carbon-black/10 px-4">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-[50%_40%] opacity-80"
          >
            <source src="/videos/rudra-pratim-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-chalk-white/40 via-chalk-white/20 to-chalk-white pointer-events-none" />
        </div>
        
        <div className="relative z-10 text-center w-full mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-track-red mb-4 block font-bold">
              Level 3 Certified Coach
            </span>
            <h1 className="text-5xl font-primary uppercase tracking-tighter leading-none mb-4">
              Rudra Pratim<br />Roy
            </h1>
            <p className="text-sm font-light text-carbon-black/60 tracking-wide max-w-3xl mx-auto uppercase mb-8">
              The Next Generation
            </p>
            
            <div className="w-full border-l border-r border-carbon-black/10 p-6 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-track-red" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-track-red" />
              <p className="text-xs font-light italic text-carbon-black/80">
                Blending the legendary discipline of his heritage with state-of-the-art sports science to redefine athletic potential.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapters Container */}
      <section className="relative z-20 w-full flex flex-col">
        {CHAPTERS.map((chapter, index) => {
          const isDark = index % 2 !== 0;
          return (
            <div 
              key={chapter.title}
              className={`relative min-h-screen w-full flex flex-col py-16 ${isDark ? 'bg-carbon-black text-chalk-white' : 'bg-chalk-white text-carbon-black'}`}
            >
              {/* Background Image per section */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={chapter.bgImage || chapter.image}
                  alt={chapter.title}
                  fill
                  className={`object-cover object-center ${isDark ? 'opacity-20' : 'opacity-10'}`}
                />
                <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-carbon-black/80 to-transparent' : 'bg-gradient-to-t from-chalk-white/80 to-transparent'}`} />
              </div>

              <div className="relative z-10 w-full px-6 flex flex-col items-start pt-12">
                <span className="text-track-red text-[10px] tracking-[0.3em] uppercase mb-4 block font-bold">
                  {chapter.chapter}
                </span>
                <h3 className="text-4xl font-primary uppercase tracking-tight mb-6">
                  {chapter.title}
                </h3>
                <div className="w-full">
                  {chapter.content}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Outro Section */}
      <section className="relative z-30 py-32 bg-carbon-black text-chalk-white overflow-hidden px-4">
        {/* Subtle background text */}
        <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center pointer-events-none">
          <span className="text-[25vw] font-primary uppercase whitespace-nowrap text-chalk-white/10">Evolution</span>
        </div>
        
        <div className="relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block border border-chalk-white/20 px-6 py-8 relative bg-carbon-black">
              <p className="text-lg italic text-chalk-white/90 font-light leading-relaxed">
                "Athletics is an exact science, but human potential is limitless. We measure the former to unlock the latter."
              </p>
              <p className="mt-6 text-track-red text-[10px] tracking-[0.3em] uppercase font-bold">— Rudra Pratim Roy</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
