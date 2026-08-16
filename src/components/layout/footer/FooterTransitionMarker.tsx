import React from 'react';

export default function FooterTransitionMarker() {
  return (
    <div 
      className="w-full flex items-center justify-center pt-8"
    >
      <div className="flex items-center gap-4 md:gap-8 w-full max-w-lg mx-auto">
        {/* Left Line */}
        <div className="flex-grow h-[1px] bg-[var(--color-chalk-white)]/20 flex justify-end overflow-hidden">
          <div 
            className="h-full bg-[var(--color-chalk-white)]/50 origin-right w-full"
          />
        </div>
        
        {/* Marker Text & Arrow */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-primary text-[10px] md:text-xs tracking-[0.3em] uppercase text-[var(--color-chalk-white)]/60">
            You've Reached The End
          </span>
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
            className="text-[var(--color-track-red)] opacity-80"
          >
            <path d="M12 4v16m0 0l-6-6m6 6l6-6" strokeLinecap="square" strokeLinejoin="miter" />
          </svg>
        </div>

        {/* Right Line */}
        <div className="flex-grow h-[1px] bg-[var(--color-chalk-white)]/20 overflow-hidden">
          <div 
            className="h-full bg-[var(--color-chalk-white)]/50 origin-left w-full"
          />
        </div>
      </div>
    </div>
  );
}
