import React from 'react';

export default function FooterSignature() {
  return (
    <div className="w-full flex flex-col items-center mt-12 md:mt-24 pointer-events-none">
      
      {/* Giant ACC Signature */}
      <div 
        className="w-full relative flex justify-center items-center overflow-hidden h-[20vh] md:h-[35vh]"
      >
        {/* Desktop SVG Design */}
        <svg 
          viewBox="0 0 800 300" 
          className="hidden md:block w-full h-full max-w-[1200px]"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Base Subtle Outline */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="central"
            className="font-black text-[250px] md:text-[300px] tracking-tighter"
            fill="transparent"
            stroke="var(--color-chalk-white)"
            strokeWidth="2"
            strokeOpacity="0.15"
          >
            ACC
          </text>
          
          {/* Red Highlight Outline (Progressive Reveal) */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="central"
            className="font-black text-[250px] md:text-[300px] tracking-tighter"
            fill="transparent"
            stroke="var(--color-track-red)"
            strokeWidth="3"
            strokeDasharray="1000"
            style={{ strokeDashoffset: 0 }}
          >
            ACC
          </text>
        </svg>

        {/* Mobile Portrait Design (Fixes overlapping font stroke paths) */}
        <div className="flex md:hidden flex-col items-center justify-center w-full px-8">
          <div className="w-full flex items-center justify-between border-y border-[var(--color-track-red)]/30 py-4 md:py-0">
            <span className="text-[20vw] font-black tracking-tighter text-[var(--color-chalk-white)] leading-none">A</span>
            <span className="text-[20vw] font-black tracking-tighter text-[var(--color-track-red)] leading-none">C</span>
            <span className="text-[20vw] font-black tracking-tighter text-[var(--color-chalk-white)] leading-none">C</span>
          </div>
        </div>
      </div>

      {/* Thin Horizontal Line */}
      <div className="w-full h-[1px] bg-[var(--color-concrete-grey)]/20 overflow-hidden mb-6 md:mb-8">
        <div 
          className="w-full h-full bg-[var(--color-track-red)]/50 origin-left"
        />
      </div>

      {/* Bottom Brand Bar */}
      <div 
        className="w-full flex flex-col md:flex-row justify-between items-center gap-6 font-primary text-[10px] md:text-xs tracking-widest uppercase text-[var(--color-ash-grey)] pointer-events-auto"
      >
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
          <span className="font-bold text-[var(--color-chalk-white)] tracking-[0.3em]">ACC</span>
          <span className="hidden md:inline text-[var(--color-track-red)]">/</span>
          <span>Athletic Coaching Camp</span>
        </div>
        
        <div className="text-[var(--color-chalk-white)]/60 tracking-[0.2em] text-center">
          Discipline. Performance. Results.
        </div>
        
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-[var(--color-chalk-white)] transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-[var(--color-chalk-white)] transition-colors">Terms</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
      
    </div>
  );
}
