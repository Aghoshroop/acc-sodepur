'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const FRANCHISES = [
  { id: 'dragons', name: 'Beijing Dragons', image: '/images/relay/relay-franchise-dragons.jpg', color: '#E32636' },
  { id: 'eagles', name: 'Berlin Eagles', image: '/images/relay/relay-franchise-eagles.jpg', color: '#1E90FF' },
  { id: 'kangaroos', name: 'Sydney Kangaroos', image: '/images/relay/relay-franchise-kangaroos.jpg', color: '#FFD700' },
  { id: 'horses', name: 'Edmonton Horses', image: '/images/relay/relay-franchise-horses.jpg', color: '#8B4513' },
  { id: 'phoenix', name: 'Athens Phoenix', image: '/images/relay/relay-franchise-phoenix.jpg', color: '#FF4500' },
];

export default function Scene03Franchises() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center py-32 px-6">
      
      {/* Dynamic Backgrounds based on hover */}
      {FRANCHISES.map((franchise, idx) => (
        <div 
          key={franchise.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none",
            hoveredIndex === idx ? "opacity-30" : "opacity-0"
          )}
        >
          <Image
            src={franchise.image}
            alt={franchise.name}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        </div>
      ))}

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
        <h3 className="font-primary text-xs uppercase tracking-[0.4em] text-[var(--color-ash-grey)] mb-24">
          The Five Franchises
        </h3>

        <div className="flex flex-col w-full">
          {FRANCHISES.map((franchise, idx) => (
            <div 
              key={franchise.id}
              className="group border-b border-white/10 py-8 md:py-12 flex items-center justify-between cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h2 className={cn(
                "font-secondary text-5xl md:text-8xl transition-colors duration-500",
                hoveredIndex === idx ? "text-[var(--color-chalk-white)]" : "text-[var(--color-chalk-white)]/20"
              )}>
                {franchise.name}
              </h2>
              
              <span className={cn(
                "font-primary text-sm tracking-[0.3em] uppercase transition-all duration-500",
                hoveredIndex === idx ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              )}
              style={{ color: hoveredIndex === idx ? franchise.color : 'white' }}
              >
                Discover
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
