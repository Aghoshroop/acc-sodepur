'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getMediaByZone } from '@/features/gallery/data';
import { useGallery } from '../context/GalleryContext';

export default function SectionTheBeginning() {
  const sectionRef = useRef<HTMLElement>(null);
  const { setActiveMedia } = useGallery();
  
  const beginningPhotos = getMediaByZone('TheBeginning');

  return (
    <section ref={sectionRef} className="relative w-full py-32 bg-[#050505] px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-4xl md:text-6xl font-primary text-[#F6F2EA] mb-24 border-l-4 border-[#C8A96A] pl-8 uppercase tracking-widest">
          Where It All Began
        </h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {beginningPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className="relative w-full overflow-hidden break-inside-avoid cursor-pointer group border border-[#F6F2EA]/10 p-2 bg-[#0a0a0a]"
              onClick={() => setActiveMedia(photo)}
            >
              <Image
                src={photo.imageUrl}
                alt={photo.title || 'Historic Moment'}
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
