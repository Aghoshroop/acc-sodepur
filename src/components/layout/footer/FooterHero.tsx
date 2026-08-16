import React from 'react';
import Link from 'next/link';

export default function FooterHero() {
  return (
    <div className="flex flex-col items-start font-primary uppercase">
      {/* Small Label */}
      <div 
        className="text-[var(--color-track-red)] tracking-[0.2em] text-xs md:text-sm mb-6"
      >
        Ready to level up?
      </div>

      {/* Hero Typography */}
      <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight text-[var(--color-chalk-white)] mb-12 flex flex-col gap-1 md:gap-2">
        <div className="pb-1">
          Your Next
        </div>
        <div className="pb-1">
          Personal Best
        </div>
        <div className="pb-1 text-[var(--color-track-red)]">
          Starts Here.
        </div>
      </div>

      {/* CTA */}
      <div>
        <Link 
          href="/admissions" 
          className="group relative inline-flex items-center gap-6 border border-[var(--color-track-red)]/50 px-8 py-5 text-sm md:text-base tracking-[0.15em] overflow-hidden transition-transform duration-300 hover:-translate-y-[1px]"
        >
          {/* Red Sweep Background */}
          <div className="absolute inset-0 bg-[var(--color-track-red)] transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out origin-left z-0" />
          
          <span className="relative z-10 text-[var(--color-chalk-white)] transition-colors duration-300">
            Train With ACC
          </span>
          
          <svg 
            className="relative z-10 w-4 h-4 md:w-5 md:h-5 text-[var(--color-track-red)] group-hover:text-[var(--color-chalk-white)] transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-all duration-300 ease-out" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="square" strokeLinejoin="miter" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
