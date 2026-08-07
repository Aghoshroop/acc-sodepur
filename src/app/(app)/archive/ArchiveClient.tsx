'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArchiveItem } from '@/features/archive/types';
import MobileArchiveClient from './mobile/MobileArchiveClient';

export default function ArchiveClient({ initialItems }: { initialItems: ArchiveItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="w-full min-h-screen bg-carbon-black text-chalk-white selection:bg-chalk-white selection:text-carbon-black" ref={containerRef}>
      
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block relative w-full">
        {/* Background Ambience */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-chalk-white/5 via-carbon-black to-carbon-black" />
        </div>
        
        <div className="relative w-full">
          {/* 1. Hero Section: The Vault */}
          <section className="sticky top-0 z-10 w-full h-screen flex flex-col items-center justify-center px-6 text-center border-b border-chalk-white/10 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image src="/images/campus/campus-hero-evolution.jpg" alt="Background" fill className="object-cover opacity-20 " />
              <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
            </div>
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-track-red text-sm tracking-[0.4em] uppercase mb-6 block">
                ACC Digital Museum
              </span>
              <h1 className="text-6xl md:text-9xl font-primary uppercase tracking-tighter leading-none mb-6">
                The Vault
              </h1>
              <p className="text-xl md:text-2xl font-light text-chalk-white/50 tracking-wide max-w-2xl mx-auto uppercase">
                History isn't written. It's forged.
              </p>
            </motion.div>
          </section>

          {/* 2. The Interactive Grid */}
          <section className="relative z-20 w-full min-h-screen py-32 border-b border-chalk-white/10">
            <div className="absolute inset-0 z-0">
              <Image src="/images/legacy/legacy-timeline-2002.jpg" alt="Background" fill className="object-cover opacity-20 " />
              <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
            </div>
            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
              
              {initialItems.length === 0 ? (
                <div className="w-full flex flex-col items-center justify-center py-32 text-center">
                  <div className="w-16 h-[1px] bg-track-red mb-8" />
                  <h2 className="text-4xl md:text-5xl font-primary uppercase tracking-tight text-chalk-white mb-4">
                    The Archives Are Currently Empty
                  </h2>
                  <p className="text-chalk-white/50 font-light text-lg max-w-xl mx-auto">
                    We are in the process of digitizing our history. Check back soon for historical documents, equipment, and legacy assets.
                  </p>
                  <div className="w-16 h-[1px] bg-track-red mt-8" />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
                  {initialItems.map((item, idx) => (
                    <motion.div 
                      key={item.id}
                      className="relative group cursor-crosshair aspect-square md:aspect-[4/5] bg-carbon-black border border-chalk-white/10 overflow-hidden"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.8, delay: (idx % 3) * 0.2 }}
                    >
                      {/* Artifact Image */}
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                      />
                      
                      {/* Overlay Overlay */}
                      <div className="absolute inset-0 bg-carbon-black/40 group-hover:bg-transparent transition-colors duration-700" />
                      
                      {/* Always visible header */}
                      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-20">
                        <span className="text-track-red text-xs md:text-sm tracking-[0.3em] uppercase bg-carbon-black/80 backdrop-blur-md px-3 py-1">
                          {item.category}
                        </span>
                        <span className="text-chalk-white font-primary text-xl md:text-2xl tracking-widest bg-carbon-black/80 backdrop-blur-md px-3 py-1">
                          {item.year}
                        </span>
                      </div>

                      {/* Hover Reveal Content */}
                      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-carbon-black via-carbon-black/90 to-transparent translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20">
                        <h3 className="text-3xl font-primary uppercase tracking-tight mb-2">{item.title}</h3>
                        <div className="w-8 h-[1px] bg-track-red mb-4" />
                        <p className="text-chalk-white/80 font-light text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
                          {item.description}
                        </p>
                        <a 
                          href={item.image} 
                          download 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block border border-chalk-white/30 hover:border-track-red text-chalk-white hover:text-track-red px-4 py-2 text-[10px] tracking-[0.2em] uppercase font-bold transition-colors"
                        >
                          [ Download Asset ]
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

            </div>
          </section>

          {/* 3. Final Outro */}
          <section className="relative z-30 w-full h-screen flex flex-col items-center justify-center bg-chalk-white text-carbon-black text-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-10 " />
              <div className="absolute inset-0 bg-gradient-to-b from-chalk-white/95 to-chalk-white/80 backdrop-blur-sm" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 max-w-4xl mx-auto px-6"
            >
              <div className="text-6xl font-secondary text-carbon-black/10 leading-none mb-4">"</div>
              <p className="text-3xl md:text-5xl font-primary uppercase tracking-tight mb-8 leading-tight">
                The ink fades. <br/> The steel rusts. <br/> The legacy remains.
              </p>
            </motion.div>
          </section>
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full">
        <MobileArchiveClient initialItems={initialItems} />
      </div>

    </main>
  );
}
