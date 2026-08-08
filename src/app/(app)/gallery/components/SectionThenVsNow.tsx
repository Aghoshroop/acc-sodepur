'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { getComparisonPairs } from '@/features/gallery/data';
import { MoveHorizontal } from 'lucide-react';
import { animateThenVsNow } from '../animations';

export default function SectionThenVsNow() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  
  const pairs = getComparisonPairs();
  const pair = pairs[0];

  useEffect(() => {
    const cleanup = animateThenVsNow(sectionRef);
    return cleanup;
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  if (!pair || !pair.old || !pair.new) return null;

  return (
    <section className="w-full py-32 bg-[#050505] px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-primary text-[#F6F2EA] uppercase tracking-widest drop-shadow-lg">
            Then <span className="text-[#C8A96A] opacity-50 px-4 text-3xl">VS</span> Now
          </h2>
          <p className="text-[#F6F2EA]/70 font-secondary italic text-lg mt-4 max-w-2xl mx-auto">
            Drag the slider to see how our facilities and training have evolved across the decades.
          </p>
        </div>

        {/* Comparison Container */}
        <div 
          ref={containerRef}
          className="relative w-full aspect-square md:aspect-video overflow-hidden border border-[#F6F2EA]/10 cursor-col-resize select-none touch-none"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
        >
          {/* Old Image (Base) */}
          <div className="absolute inset-0 w-full h-full">
            <Image unoptimized={true}
              src={pair.old.imageUrl}
              alt={pair.old.title}
              fill
              className="object-cover filter grayscale sepia-[0.3]"
              draggable={false}
            />
            {/* Overlay Text */}
            <div className="absolute bottom-6 right-6 text-right">
              <span className="bg-[#050505]/80 text-[#F6F2EA] font-primary text-xl px-4 py-2 border border-[#C8A96A]/30 backdrop-blur-sm">
                {pair.old.year} - {pair.old.title}
              </span>
            </div>
          </div>

          {/* New Image (Clipped) */}
          <div 
            className="absolute inset-0 h-full overflow-hidden border-r-2 border-[#C8A96A]"
            style={{ width: `${sliderPosition}%` }}
          >
            {/* The image inside must remain full width relative to the outer container */}
            <div className="relative h-full" style={{ width: containerRef.current?.getBoundingClientRect().width || '100vw' }}>
              <Image unoptimized={true}
                src={pair.new.imageUrl}
                alt={pair.new.title}
                fill
                className="object-cover"
                draggable={false}
              />
              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 text-left">
                <span className="bg-[#050505]/80 text-[#F6F2EA] font-primary text-xl px-4 py-2 border border-[#C8A96A]/30 backdrop-blur-sm">
                  {pair.new.year} - {pair.new.title}
                </span>
              </div>
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-[#C8A96A] flex items-center justify-center -ml-[2px]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-12 h-12 bg-[#050505] border-2 border-[#C8A96A] rounded-full flex items-center justify-center text-[#C8A96A] shadow-[0_0_15px_rgba(200,169,106,0.5)]">
              <MoveHorizontal size={24} />
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
