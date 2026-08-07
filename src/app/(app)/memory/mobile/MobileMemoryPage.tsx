'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CHAPTERS = [
  { title: "1969", text: "Where did ACC begin? With a stolen football, eight refugee kids, and a muddy field in Sodepur." },
  { title: "Founder", text: "Who created this institution? Kuntal Roy forged it with an uncompromising vision of athletic excellence." },
  { title: "Building Champions", text: "How is greatness earned? Through blood, sweat, and the relentless perfection of biomechanics." },
  { title: "The Campus", text: "Where is character tested? The crucible of the synthetic track and raw earth." },
  { title: "Competition", text: "What happens when the stadium screams? We execute flawlessly." },
  { title: "Premier Relay", text: "What brings everyone together? Nights of fire, grit, and generational pride." },
  { title: "Community", text: "Who stands beside you? We suffer together. We win together." },
  { title: "Honoured Guests", text: "Who bears witness? Great institutions are visited by great people." },
  { title: "Today", text: "Does the standard hold? The standard remains absolute." },
  { title: "Tomorrow", text: "Where is ACC going next? The legacy is inherited by the next generation." },
];

export default function MobileMemoryPage({ images }: { images: string[] }) {
  const chapterData = CHAPTERS.map((chapter, index) => {
    const startIndex = (index * 3) % Math.max(1, images.length);
    const chunk = [];
    
    for (let i = 0; i < 3; i++) {
        if (images.length > 0) {
            chunk.push(images[(startIndex + i) % images.length]);
        }
    }
    
    return {
      ...chapter,
      images: chunk
    };
  });

  return (
    <main className="w-full bg-[#030303] text-chalk-white min-h-screen">
      
      {/* Museum Lighting: Global Grain */}
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* HERO Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col justify-end pb-12 px-6 overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 grid grid-cols-3 gap-2 opacity-30 transform scale-110">
            {images.slice(0, 12).map((img, idx) => (
              <div key={idx} className="relative w-full aspect-square">
                <Image src={img} alt="Memory" fill className="object-cover" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full">
          <h1 className="text-6xl font-primary uppercase tracking-tighter leading-[0.9] text-chalk-white mix-blend-difference">
            Memory
          </h1>
          <div className="mt-8 text-xl font-light tracking-wide text-chalk-white/80 mix-blend-difference">
            <p>Every photograph preserves a moment.</p>
            <p className="text-track-red uppercase text-[10px] tracking-[0.3em] font-bold mt-6">Since 1969.</p>
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section className="relative z-10 w-full py-16 px-6">
        <div className="flex flex-col gap-24">
          {chapterData.map((chapter) => {
            if (!chapter.images.length) return null;
            
            return (
              <div key={chapter.title} className="w-full flex flex-col">
                {/* Images Stack */}
                <div className="relative w-full mb-8">
                  <div className="relative w-full aspect-[4/5] bg-carbon-black">
                    <Image src={chapter.images[0]} alt={chapter.title} fill className="object-cover" />
                  </div>
                  {chapter.images.length > 1 && (
                    <div className="absolute -bottom-8 -right-4 w-1/2 aspect-square border-4 border-[#030303] bg-carbon-black z-10">
                      <Image src={chapter.images[1]} alt={chapter.title} fill className="object-cover" />
                    </div>
                  )}
                </div>
                
                {/* Text Block */}
                <div className="mt-12">
                  <h2 className="text-4xl font-primary uppercase tracking-tight mb-4 leading-[1.1] text-chalk-white">
                    {chapter.title}
                  </h2>
                  <p className="text-base font-light text-chalk-white/70 leading-relaxed">
                    {chapter.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative w-full py-32 flex flex-col items-center justify-center text-center px-6">
        <div className="flex flex-col items-center">
          {images.length > 0 && (
            <div className="relative w-32 aspect-square mb-10 overflow-hidden rounded-full border border-chalk-white/10">
              <Image src={images[images.length - 1]} alt="The Next Chapter" fill className="object-cover grayscale opacity-50" />
            </div>
          )}
          <h2 className="text-3xl font-primary uppercase tracking-tight mb-12 text-chalk-white/90">
            The next photograph hasn't been taken yet.
          </h2>
          <Link 
            href="/admissions" 
            className="group flex items-center gap-4"
          >
            <span className="text-xs font-primary uppercase tracking-[0.2em] text-track-red transition-colors">
              Become part of ACC
            </span>
            <div className="w-8 h-[1px] bg-track-red transition-all" />
          </Link>
        </div>
      </section>

    </main>
  );
}
