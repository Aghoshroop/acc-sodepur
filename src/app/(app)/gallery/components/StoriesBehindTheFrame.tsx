'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useGallery } from '../context/GalleryContext';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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

        <div ref={contentRef} className="min-h-screen w-full flex items-center justify-center p-4 md:p-12 opacity-0 pointer-events-auto">
          <div className="relative w-full max-w-6xl h-[80vh] md:h-[90vh] flex flex-col items-center justify-center">
            <div className="relative w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center overflow-hidden">
              <TransformWrapper
                initialScale={1}
                minScale={0.5}
                maxScale={5}
                centerOnInit={true}
                centerZoomedOut={true}
                limitToBounds={true}
                wheel={{ step: 0.2 }}
                pinch={{ step: 5 }}
                doubleClick={{ mode: "zoomIn", step: 0.5 }}
                zoomAnimation={{ size: 0.2, animationType: 'easeOut', animationTime: 200 }}
              >
                <TransformComponent 
                  wrapperClass="!w-full !h-full" 
                  contentClass="!w-full !h-full !flex !items-center !justify-center"
                >
                  <div className="relative inline-block max-w-full max-h-full">
                    <img
                      src={imageUrl}
                      alt={title || 'Gallery Image'}
                      className="max-w-full max-h-full object-contain drop-shadow-2xl transition-transform duration-200"
                      draggable={false}
                    />
                  </div>
                </TransformComponent>
              </TransformWrapper>
            </div>
            
            {(title || description || year) && (
              <div className="mt-6 text-center max-w-3xl px-4 relative z-[110]">
              {title && (
                <h2 className="text-xl md:text-3xl font-primary text-[#F6F2EA] uppercase tracking-widest drop-shadow-lg">
                  {title}
                </h2>
              )}
              {year && (
                <span className="inline-block mt-2 px-3 py-1 bg-[#C8A96A]/20 border border-[#C8A96A]/50 text-[#C8A96A] font-primary uppercase tracking-widest text-xs md:text-sm">
                  {year}
                </span>
              )}
              {description && (
                <p className="mt-4 text-[#F6F2EA]/80 font-light text-sm md:text-base leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
