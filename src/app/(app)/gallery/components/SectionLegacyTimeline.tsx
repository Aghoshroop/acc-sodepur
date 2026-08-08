'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getMediaByZone } from '@/features/gallery/data';
import { GalleryMedia } from '@/features/gallery/types';
import { animateTimeline } from '../animations';
import { useGallery } from '../context/GalleryContext';

export default function SectionLegacyTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const media = getMediaByZone('Timeline');
  const { setActiveMedia } = useGallery();

  // Group media by Era and then sort by Year
  const groupedMedia = media.reduce((acc, curr) => {
    if (!acc[curr.era!]) {
      acc[curr.era!] = [];
    }
    acc[curr.era!].push(curr);
    return acc;
  }, {} as Record<string, GalleryMedia[]>);

  // Sort eras logically (Founding -> Golden -> Expansion -> Modern)
  const eraOrder = ['Founding Era', 'Golden Era', 'Expansion Era', 'Modern Era'];
  const sortedEras = Object.entries(groupedMedia).sort((a, b) => {
    return eraOrder.indexOf(a[0]) - eraOrder.indexOf(b[0]);
  });

  useEffect(() => {
    const cleanup = animateTimeline(sectionRef);
    return cleanup;
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 md:py-32 bg-[#050505]">
      
      {/* Background glow for the whole section */}
      <div className="absolute inset-0 bg-radial-gradient from-[#C8A96A]/5 to-[#050505] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-32 relative z-10">
          <h2 className="text-4xl md:text-6xl font-primary text-[#F6F2EA] uppercase tracking-widest drop-shadow-lg">
            The Legacy
          </h2>
          <p className="text-[#C8A96A] font-secondary italic text-lg mt-4">
            Through the years.
          </p>
        </div>

        <div className="relative space-y-32 md:space-y-48">
          {sortedEras.map(([era, items]) => {
            const sortedItems = items.sort((a, b) => (a.year || 0) - (b.year || 0));
            // Just picking a range string for the era
            const startYear = sortedItems[0]?.year;
            const endYear = sortedItems[sortedItems.length - 1]?.year;

            return (
              <div key={era} className="era-section relative flex flex-col lg:flex-row gap-12 lg:gap-24">
                
                {/* Left Side: Sticky Era Title */}
                <div className="lg:w-1/3 relative z-10">
                  <div className="sticky top-1/3 lg:top-1/4">
                    <h3 className="text-4xl md:text-5xl lg:text-7xl font-primary text-[#F6F2EA] uppercase tracking-widest leading-none">
                      {era.split(' ')[0]}
                      <span className="block text-[#C8A96A] opacity-50 mt-2 text-2xl lg:text-4xl">
                        {era.split(' ')[1]}
                      </span>
                    </h3>
                    {(startYear && endYear) && (
                      <div className="mt-8 flex items-center gap-4 text-[#F6F2EA]/40 font-secondary text-xl italic border-l-2 border-[#C8A96A]/30 pl-4">
                        <span>{startYear}</span>
                        <span className="w-8 h-[1px] bg-[#F6F2EA]/20" />
                        <span>{endYear}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Side: Staggered Image Grid */}
                <div className="lg:w-2/3">
                  <div className="columns-1 sm:columns-2 gap-8 space-y-8">
                    {sortedItems.map((media, index) => {
                      // Alternate aspect ratios to make it look editorial
                      const aspectClass = index % 3 === 0 
                        ? 'aspect-[3/4]' 
                        : index % 3 === 1 
                          ? 'aspect-square' 
                          : 'aspect-[4/3]';

                      return (
                        <div 
                          key={media.id} 
                          className="era-image-card relative group cursor-pointer overflow-hidden bg-[#0a0a0a] border border-[#F6F2EA]/10 break-inside-avoid"
                          onClick={() => setActiveMedia(media)}
                        >
                          <div className={`relative w-full ${aspectClass}`}>
                            <Image unoptimized={true}
                              src={media.imageUrl}
                              alt={media.title}
                              fill
                              className="object-cover filter grayscale-[40%] sepia-[0.1] transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:grayscale-0 group-hover:sepia-0"
                            />
                            
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                            
                            {/* Content */}
                            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                              <span className="text-[#C8A96A] font-primary tracking-widest text-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                {media.year}
                              </span>
                              <h4 className="text-xl text-[#F6F2EA] font-secondary italic mt-1 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                {media.title}
                              </h4>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
