'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { getMediaByZone } from '@/features/gallery/data';
import { useGallery } from '../context/GalleryContext';
import Link from 'next/link';

export default function SectionRecentMoments() {
  const sectionRef = useRef<HTMLElement>(null);
  const media = getMediaByZone('RecentMoments');
  const { setActiveMedia } = useGallery();

  return (
    <section ref={sectionRef} className="relative w-full py-32 bg-[#050505] px-6 lg:px-12 border-t border-[#F6F2EA]/10">
      
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-primary text-[#F6F2EA] uppercase tracking-widest drop-shadow-lg">
            Recent Moments
          </h2>
          <div className="w-24 h-1 bg-[#C8A96A] mx-auto mt-6" />
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {media.map((item) => (
            <div 
              key={item.id} 
              className="relative w-full break-inside-avoid cursor-pointer group bg-[#0a0a0a] border border-[#F6F2EA]/10"
              onClick={() => setActiveMedia(item)}
            >
              <div className="relative w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.title || 'Recent Moment'}
                  width={600}
                  height={800}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-48 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-primary text-[#F6F2EA] uppercase tracking-widest drop-shadow-lg max-w-4xl leading-tight">
            The Story Isn't Over.
            <br />
            <span className="text-[#C8A96A]">The Next Photograph Could Be Yours.</span>
          </h2>
          
          <Link 
            href="/admissions"
            className="mt-16 px-12 py-6 bg-[#C8A96A] text-[#050505] font-primary uppercase tracking-[0.2em] text-xl hover:bg-[#F6F2EA] transition-colors duration-300"
          >
            Join Athletic Coaching Camp
          </Link>
        </div>

      </div>

    </section>
  );
}
