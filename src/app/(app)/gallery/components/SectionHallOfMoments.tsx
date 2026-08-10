'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { getMediaByZone } from '@/features/gallery/data';
import { useGallery } from '../context/GalleryContext';

export default function SectionHallOfMoments() {
  const sectionRef = useRef<HTMLElement>(null);
  const { setActiveMedia } = useGallery();
  
  const historyPhotos = getMediaByZone('HallOfMoments');

  return (
    <section ref={sectionRef} className="relative w-full py-32 bg-[#0a0a0a] px-6 lg:px-12 border-t border-[#F6F2EA]/10">
      
      <div className="text-center mb-24 relative z-10">
        <h2 className="text-4xl md:text-6xl font-primary text-[#F6F2EA] uppercase tracking-widest drop-shadow-lg">
          Hall of Moments
        </h2>
        <div className="w-24 h-1 bg-[#C8A96A] mx-auto mt-6" />
      </div>

      <div className="max-w-[1600px] mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {historyPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className="relative w-full overflow-hidden break-inside-avoid cursor-pointer group bg-[#050505] border border-[#F6F2EA]/10"
              onClick={() => setActiveMedia(photo)}
            >
              <div className="relative w-full overflow-hidden">
                <Image
                  src={photo.imageUrl}
                  alt={photo.title || 'Hall of Moment Image'}
                  width={600}
                  height={800}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="w-full h-auto object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
