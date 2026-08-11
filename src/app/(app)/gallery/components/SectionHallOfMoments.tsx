'use client';

import Image from 'next/image';
import { getMediaByZone } from '@/features/gallery/data';
import { useGallery } from '../context/GalleryContext';

export default function SectionHallOfMoments() {
  const { setActiveMedia } = useGallery();
  const historyPhotos = getMediaByZone('HallOfMoments');

  return (
    <section className="relative w-full py-32 bg-[#0a0a0a] px-6 lg:px-12 border-t border-[#F6F2EA]/10">
      
      <div className="text-center mb-24 relative z-10">
        <h2 className="text-4xl md:text-6xl font-primary text-[#F6F2EA] uppercase tracking-widest drop-shadow-lg">
          Hall of Moments
        </h2>
        <div className="w-24 h-1 bg-[#C8A96A] mx-auto mt-6" />
      </div>

      <div className="max-w-[1600px] mx-auto">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
          {historyPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              className="break-inside-avoid mb-2 cursor-pointer group overflow-hidden"
              onClick={() => setActiveMedia(photo)}
            >
              <Image
                src={photo.imageUrl}
                alt={photo.title || 'Hall of Moment Image'}
                width={800}
                height={600}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="w-full h-auto block grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                priority={idx < 8}
              />
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
