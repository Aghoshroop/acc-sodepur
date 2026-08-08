'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getMediaByZone } from '@/features/gallery/data';
import { animateModernACC } from '../animations';
import Link from 'next/link';

export default function SectionModernACC() {
  const sectionRef = useRef<HTMLElement>(null);
  const media = getMediaByZone('ModernACC');

  useEffect(() => {
    const cleanup = animateModernACC(sectionRef);
    return cleanup;
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-48 bg-[#050505] px-6 lg:px-24">
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-primary text-[#F6F2EA] uppercase tracking-widest drop-shadow-lg">
            Modern ACC
          </h2>
          <p className="text-[#C8A96A] font-secondary italic text-xl mt-4">
            The legacy continues today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {media.map((item, index) => (
            <div key={item.id} className={`modern-img relative w-full aspect-square overflow-hidden group cursor-pointer ${index === 0 ? 'md:col-span-2 md:aspect-video' : ''}`}>
              <Image unoptimized={true}
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Vibrant overlay for modern look */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[#C8A96A] font-primary tracking-widest text-sm uppercase block mb-2">{item.year}</span>
                <h3 className="text-3xl text-[#F6F2EA] font-secondary italic">{item.title}</h3>
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
