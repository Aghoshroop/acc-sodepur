'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getMediaByZone, STATIC_GALLERY_MEDIA } from '@/features/gallery/data';
import { animateTheBeginning } from '../animations';

export default function SectionTheBeginning() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  // Manually pick specific old images for the darkroom effect to ensure they exist and fit the theme.
  const earlyPhotos = STATIC_GALLERY_MEDIA.filter(m => 
    m.imageUrl.includes('1st-building.jpg') || 
    m.imageUrl.includes('old-group-photo.jpg') || 
    m.imageUrl.includes('1st-longjump-pit.jpg')
  );

  useEffect(() => {
    const cleanup = animateTheBeginning(sectionRef);
    return cleanup;
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-32 bg-[#050505] px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        <h2 
          ref={titleRef}
          className="text-4xl md:text-6xl font-primary text-[#F6F2EA] mb-24 border-l-4 border-[#C8A96A] pl-8 uppercase tracking-widest"
        >
          Where It All Began
        </h2>

        <div className="space-y-48">
          {earlyPhotos.map((photo, index) => (
            <div 
              key={photo.id} 
              className={`darkroom-card flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
            >
              {/* Photo Frame */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] w-full bg-[#0D0D0D] p-4 border border-[#F6F2EA]/10 shadow-2xl">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image unoptimized={true}
                      src={photo.imageUrl}
                      alt={photo.title}
                      fill
                      className="darkroom-img object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="darkroom-content w-full lg:w-1/2 space-y-6">
                <span className="text-[#C8A96A] font-primary text-2xl tracking-widest">{photo.year}</span>
                <h3 className="text-3xl md:text-4xl text-[#F6F2EA] font-secondary italic">{photo.title}</h3>
                
                {photo.story?.body ? (
                  <p className="text-[#F6F2EA]/70 text-lg leading-relaxed max-w-lg font-light">
                    {photo.story.body}
                  </p>
                ) : (
                  <p className="text-[#F6F2EA]/70 text-lg leading-relaxed max-w-lg font-light">
                    {photo.description || 'A historic moment captured in time, marking the beginning of our legacy.'}
                  </p>
                )}

                <div className="flex flex-wrap gap-4 pt-4 border-t border-[#F6F2EA]/10 uppercase text-xs tracking-widest text-[#F6F2EA]/40 font-bold">
                  {photo.location && <span>LOCATION: {photo.location}</span>}
                  <span>SIGNIFICANCE: FOUNDATION</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
