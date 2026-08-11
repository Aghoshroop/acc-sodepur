'use client';

import { useState } from 'react';
import Image from 'next/image';

const THEN_IMAGE = '/images/acc_history/old-lineup.jpg';
const NOW_IMAGE  = '/images/now-lineup.JPG';

export default function SectionThenVsNow() {
  // tap toggle for mobile/tablet
  const [showNow, setShowNow] = useState(false);

  return (
    <section className="relative w-full py-24 bg-[#050505] border-t border-[#F6F2EA]/10">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-primary text-[#F6F2EA] uppercase tracking-widest">
            Then <span className="text-[#C8A96A]">&</span> Now
          </h2>
          <div className="w-24 h-1 bg-[#C8A96A] mx-auto mt-6" />
          <p className="mt-6 text-[#F6F2EA]/30 font-secondary italic text-sm">
            Hover to see how far we've come · Tap to reveal on mobile
          </p>
        </div>

        {/* 
          Container: THEN sets the natural height (w-full h-auto).
          NOW is overlaid absolutely and uses object-contain — fully visible, no crop.
          Desktop: CSS group-hover fades NOW in.
          Mobile/tablet: tap toggles the `showNow` state.
        */}
        <div
          className="relative group cursor-pointer bg-[#050505] max-h-[420px] md:max-h-[520px] overflow-hidden flex items-center justify-center"
          onClick={() => setShowNow((v) => !v)}
        >
          {/* ── THEN (base, constrained height, full image visible) ── */}
          <Image
            src={THEN_IMAGE}
            alt="ACC – The Beginning"
            width={1300}
            height={975}
            className="w-full h-full object-contain block"
            priority
            draggable={false}
          />

          {/* ── NOW overlay (fades in on hover / tap) ── */}
          <div
            className={`
              absolute inset-0 bg-[#050505] flex items-center justify-center
              transition-opacity duration-700
              ${showNow ? 'opacity-100' : 'opacity-0'}
              md:group-hover:opacity-100
            `}
          >
            <Image
              src={NOW_IMAGE}
              alt="ACC – Modern Era"
              width={1800}
              height={900}
              className="w-full h-full object-contain"
              priority
              draggable={false}
            />
          </div>

          {/* ── THEN label (fades out on hover/reveal) ── */}
          <div
            className={`
              absolute bottom-5 left-5 px-4 py-2 bg-[#050505]/80 backdrop-blur
              border-l-2 border-[#F6F2EA] font-primary uppercase tracking-widest text-[#F6F2EA] text-xs md:text-sm
              transition-opacity duration-500
              ${showNow ? 'opacity-0' : 'opacity-100'}
              md:group-hover:opacity-0
            `}
          >
            The Beginning
          </div>

          {/* ── NOW label (fades in on hover/reveal) ── */}
          <div
            className={`
              absolute bottom-5 right-5 px-4 py-2 bg-[#050505]/80 backdrop-blur
              border-r-2 border-[#C8A96A] font-primary uppercase tracking-widest text-[#C8A96A] text-xs md:text-sm
              transition-opacity duration-500
              ${showNow ? 'opacity-100' : 'opacity-0'}
              md:group-hover:opacity-100
            `}
          >
            Modern Era
          </div>

          {/* ── Tap hint (mobile only) ── */}
          <div
            className={`
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              md:hidden pointer-events-none
              transition-opacity duration-500
              ${showNow ? 'opacity-0' : 'opacity-100'}
            `}
          >
            <div className="px-5 py-2.5 bg-[#050505]/70 backdrop-blur-sm border border-[#C8A96A]/40 text-[#C8A96A] font-primary text-xs uppercase tracking-widest whitespace-nowrap">
              Tap to reveal
            </div>
          </div>

          {/* ── Tap to go back hint (mobile, when NOW is shown) ── */}
          <div
            className={`
              absolute top-5 right-5
              md:hidden pointer-events-none
              transition-opacity duration-500
              ${showNow ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <div className="px-3 py-1.5 bg-[#050505]/70 backdrop-blur-sm border border-[#F6F2EA]/20 text-[#F6F2EA]/50 font-primary text-[10px] uppercase tracking-widest">
              Tap to go back
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
