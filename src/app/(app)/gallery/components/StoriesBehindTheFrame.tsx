'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, Play, FileText } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useGallery } from '../context/GalleryContext';

export default function StoriesBehindTheFrame() {
  const { activeMedia, setActiveMedia } = useGallery();
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Animate in when activeMedia changes
  useGSAP(() => {
    if (activeMedia && overlayRef.current && contentRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.fromTo(contentRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: 'power3.out' }
      );
      
      // Lock body scroll
      document.body.style.overflow = 'hidden';
    } else if (!activeMedia && overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.4,
        ease: 'power2.in'
      });
      // Restore body scroll
      document.body.style.overflow = '';
    }
  }, [activeMedia]);

  if (!activeMedia) {
    // Render hidden overlay for transition purposes
    return (
      <div 
        ref={overlayRef} 
        className="fixed inset-0 z-[100] bg-[#050505]/95 backdrop-blur-xl opacity-0 pointer-events-none"
      />
    );
  }

  const { title, description, year, era, location, coach, athletes, imageUrl, story } = activeMedia;

  return (
    <div 
      ref={overlayRef} 
      className="fixed inset-0 z-[100] bg-[#050505]/95 backdrop-blur-xl opacity-0 pointer-events-none overflow-y-auto"
    >
      <button 
        onClick={() => setActiveMedia(null)}
        className="fixed top-8 right-8 z-[110] p-4 bg-[#050505] border border-[#F6F2EA]/20 text-[#F6F2EA] hover:text-[#C8A96A] hover:border-[#C8A96A] transition-colors rounded-full"
      >
        <X size={24} />
      </button>

      <div ref={contentRef} className="min-h-screen w-full max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row gap-12 lg:gap-24 opacity-0">
        
        {/* Left: Huge Image */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="relative w-full aspect-[4/5] bg-[#0D0D0D] border border-[#F6F2EA]/10 p-4 shadow-2xl">
            <div className="relative w-full h-full overflow-hidden">
              <Image unoptimized={true}
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4 text-xs font-primary tracking-[0.2em] uppercase text-[#F6F2EA]/50">
            {year && <span className="border border-[#F6F2EA]/20 px-4 py-2">{year}</span>}
            {era && <span className="border border-[#F6F2EA]/20 px-4 py-2">{era}</span>}
            {location && <span className="border border-[#F6F2EA]/20 px-4 py-2">{location}</span>}
          </div>
        </div>

        {/* Right: The Story */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-primary text-[#F6F2EA] uppercase tracking-widest leading-tight">
            {story?.headline || title}
          </h2>
          {story?.subtitle && (
            <h3 className="text-2xl text-[#C8A96A] font-secondary italic mt-4">
              {story.subtitle}
            </h3>
          )}

          <div className="w-12 h-1 bg-[#C8A96A] my-8" />

          <p className="text-[#F6F2EA]/80 font-light text-lg md:text-xl leading-relaxed whitespace-pre-wrap">
            {story?.body || description || "Every photograph in our archive carries the weight of history. This moment captured the essence of Athletic Coaching Camp's dedication to excellence."}
          </p>

          {story?.quote && (
            <blockquote className="mt-12 border-l-4 border-[#C8A96A] pl-6 italic text-2xl text-[#F6F2EA] font-secondary">
              "{story.quote}"
              {story.quoteAuthor && (
                <span className="block mt-4 text-sm font-primary uppercase tracking-widest text-[#F6F2EA]/50 not-italic">
                  — {story.quoteAuthor}
                </span>
              )}
            </blockquote>
          )}

          {/* Metadata Grid */}
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-[#F6F2EA]/10 pt-8">
            {coach && (
              <div>
                <span className="block text-xs font-primary tracking-widest text-[#F6F2EA]/40 mb-2">HEAD COACH</span>
                <span className="text-[#F6F2EA] font-secondary text-lg">{coach}</span>
              </div>
            )}
            {athletes && athletes.length > 0 && (
              <div>
                <span className="block text-xs font-primary tracking-widest text-[#F6F2EA]/40 mb-2">FEATURING</span>
                <span className="text-[#F6F2EA] font-secondary text-lg">{athletes.join(', ')}</span>
              </div>
            )}
          </div>

          {/* Related Media Buttons (Mock) */}
          {(story?.videoUrl || story?.documentUrls) && (
            <div className="mt-12 flex gap-4">
              {story.videoUrl && (
                <button className="flex items-center gap-3 px-6 py-3 bg-[#C8A96A] text-[#050505] font-primary uppercase tracking-widest hover:bg-[#F6F2EA] transition-colors">
                  <Play size={18} fill="currentColor" /> Play Video
                </button>
              )}
              {story.documentUrls && (
                <button className="flex items-center gap-3 px-6 py-3 border border-[#F6F2EA]/20 text-[#F6F2EA] font-primary uppercase tracking-widest hover:border-[#C8A96A] hover:text-[#C8A96A] transition-colors">
                  <FileText size={18} /> View Records
                </button>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
