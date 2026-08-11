'use client';

import Image from 'next/image';
import { getMediaByZone } from '@/features/gallery/data';
import { useGallery } from '../context/GalleryContext';

export default function SectionTheBeginning() {
  const { setActiveMedia } = useGallery();
  const beginningPhotos = getMediaByZone('TheBeginning');

  return (
    <section className="relative w-full py-32 bg-[#050505] px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-4xl md:text-6xl font-primary text-[#F6F2EA] mb-24 border-l-4 border-[#C8A96A] pl-8 uppercase tracking-widest">
          Where It All Began
        </h2>

        <div className="columns-2 md:columns-3 gap-2">
          {beginningPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              className="break-inside-avoid mb-2 cursor-pointer group overflow-hidden"
              onClick={() => setActiveMedia(photo)}
            >
              <Image
                src={photo.imageUrl}
                alt={photo.title || 'Historic Moment'}
                width={800}
                height={600}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-auto block grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                priority={idx < 6}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
