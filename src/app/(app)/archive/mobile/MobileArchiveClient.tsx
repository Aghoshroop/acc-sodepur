'use client';

import React from 'react';
import Image from 'next/image';
import { ArchiveItem } from '@/features/archive/types';

export default function MobileArchiveClient({ initialItems }: { initialItems: ArchiveItem[] }) {
  return (
    <div className="w-full bg-carbon-black text-chalk-white min-h-screen relative flex flex-col">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-chalk-white/5 via-carbon-black to-carbon-black" />
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <Image src="/images/campus/campus-hero-evolution.jpg" alt="Background" fill className="object-cover opacity-20 " />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/60 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full text-chalk-white flex flex-col items-center">
          <span className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4 block font-bold">
            ACC Digital Museum
          </span>
          <h1 className="text-6xl sm:text-7xl font-primary uppercase tracking-tight leading-[0.9] text-chalk-white mb-6">
            The Vault
          </h1>
          <p className="text-base font-light text-chalk-white/50 tracking-widest uppercase">
            History isn't written. It's forged.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="relative w-full flex-grow bg-carbon-black py-16 px-6 z-20 border-t border-chalk-white/10">
        <div className="absolute inset-0 z-0">
          <Image src="/images/legacy/legacy-timeline-2002.jpg" alt="Background" fill className="object-cover opacity-10 " />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 w-full">
          {initialItems.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center py-20 text-center">
              <div className="w-12 h-[1px] bg-track-red mb-6" />
              <h2 className="text-3xl font-primary uppercase tracking-tight text-chalk-white mb-4">
                The Archives Are Currently Empty
              </h2>
              <p className="text-chalk-white/50 font-light text-sm max-w-sm mx-auto leading-relaxed">
                We are in the process of digitizing our history. Check back soon for historical documents, equipment, and legacy assets.
              </p>
              <div className="w-12 h-[1px] bg-track-red mt-6" />
            </div>
          ) : (
            <div className="flex flex-col gap-12">
              {initialItems.map((item, idx) => (
                <div key={item.id} className="relative w-full aspect-[4/5] bg-carbon-black border border-chalk-white/10 overflow-hidden flex flex-col">
                  {/* Image */}
                  <div className="relative w-full h-[65%]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon-black to-transparent" />
                    
                    {/* Tags */}
                    <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start z-20">
                      <span className="text-track-red text-[10px] tracking-[0.3em] uppercase bg-carbon-black/80 backdrop-blur-md px-2 py-1">
                        {item.category}
                      </span>
                      <span className="text-chalk-white font-primary text-xl tracking-widest bg-carbon-black/80 backdrop-blur-md px-2 py-1">
                        {item.year}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content below image */}
                  <div className="w-full p-6 flex flex-col bg-carbon-black flex-grow justify-between">
                    <div>
                      <h3 className="text-2xl font-primary uppercase tracking-tight mb-2 text-chalk-white">{item.title}</h3>
                      <div className="w-8 h-[1px] bg-track-red mb-4" />
                      <p className="text-chalk-white/70 font-light text-xs leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                    <a 
                      href={item.image} 
                      download 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block self-start mt-6 text-chalk-white border-b border-track-red pb-1 text-[10px] tracking-[0.2em] uppercase font-bold active:text-track-red"
                    >
                      Download Asset
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Outro */}
      <section className="relative z-30 w-full h-[60vh] flex flex-col items-center justify-center bg-chalk-white text-carbon-black text-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-10 " />
          <div className="absolute inset-0 bg-gradient-to-b from-chalk-white/95 to-chalk-white/80 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-5xl font-secondary text-carbon-black/20 leading-none mb-2">"</div>
          <p className="text-2xl sm:text-3xl font-primary uppercase tracking-tight mb-4 leading-tight">
            The ink fades. <br/> The steel rusts. <br/> The legacy remains.
          </p>
        </div>
      </section>
    </div>
  );
}
