'use client';

import Image from 'next/image';
import { getMediaByZone } from '@/features/gallery/data';
import { useGallery } from '../context/GalleryContext';

export default function SectionModernACC() {
  const media = getMediaByZone('ModernEra');
  const { setActiveMedia } = useGallery();

  return (
    <section className="relative w-full py-32 bg-[#050505] px-6 lg:px-12 border-t border-[#F6F2EA]/10">
      
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-primary text-[#F6F2EA] uppercase tracking-widest drop-shadow-lg">
            Modern Era
          </h2>
          <div className="w-24 h-1 bg-[#C8A96A] mx-auto mt-6" />
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
          {media.map((item, idx) => (
            <div
              key={item.id}
              className="break-inside-avoid mb-2 cursor-pointer group overflow-hidden"
              onClick={() => setActiveMedia(item)}
            >
              <Image
                src={item.imageUrl}
                alt={item.title || 'Modern Era Image'}
                width={800}
                height={600}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="w-full h-auto block opacity-80 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-500 ease-out"
                priority={idx < 8}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
