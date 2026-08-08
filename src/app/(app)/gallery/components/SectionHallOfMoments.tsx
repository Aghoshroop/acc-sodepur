'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getMediaByZone } from '@/features/gallery/data';
import { useGallery } from '../context/GalleryContext';
import { animateHallOfMoments } from '../animations';

export default function SectionHallOfMoments() {
  const sectionRef = useRef<HTMLElement>(null);
  const media = getMediaByZone('HallOfMoments');
  const { setActiveMedia } = useGallery();

  useEffect(() => {
    const cleanup = animateHallOfMoments(sectionRef);
    return cleanup;
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-32 bg-[#0D0D0D] px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-primary text-[#F6F2EA] uppercase tracking-widest drop-shadow-lg">
            Hall of Moments
          </h2>
          <p className="text-[#F6F2EA]/70 font-secondary italic text-lg mt-4 max-w-2xl mx-auto">
            Glimpses of greatness captured forever.
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
          {media.map((item, index) => {
            // Alternate aspect ratios to create masonry effect
            const aspectClass = index % 3 === 0 ? 'aspect-square' : index % 3 === 1 ? 'aspect-[4/5]' : 'aspect-video';
            
            return (
              <div 
                key={item.id} 
                onClick={() => setActiveMedia(item)}
                className="moment-card group relative w-full overflow-hidden bg-[#050505] cursor-pointer break-inside-avoid border border-[#F6F2EA]/5"
              >
                <div className={`relative w-full ${aspectClass}`}>
                  <Image unoptimized={true}
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover filter grayscale-[40%] transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-110"
                  />
                  {/* Film Grain overlay that disappears on hover - Removed expensive mix-blend-mode for performance */}
                  <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] opacity-[0.05] transition-opacity duration-700 group-hover:opacity-0" />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
                  
                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="overflow-hidden">
                      <h3 className="text-2xl text-[#F6F2EA] font-secondary italic transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100">
                        {item.title}
                      </h3>
                    </div>
                    <div className="overflow-hidden mt-2">
                      <div className="flex gap-3 text-xs tracking-widest text-[#C8A96A] font-primary uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-200">
                        {item.year && <span>{item.year}</span>}
                        {item.era && <span className="opacity-50">|</span>}
                        {item.era && <span>{item.era}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
