import React from 'react';
import Image from 'next/image';

export default function MobileKnowledgeCentrePage() {
  return (
    <div className="w-full bg-carbon-black min-h-screen text-chalk-white border-t-8 border-track-red relative overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-20 " />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 px-6 max-w-7xl mx-auto flex flex-col items-start justify-center h-full">
        <h1 className="text-4xl font-primary uppercase tracking-widest text-chalk-white mb-6 border-b-4 border-track-red inline-block pb-2 leading-tight">
          KNOWLEDGE<br/>CENTRE
        </h1>
        <p className="text-chalk-white/60 text-sm uppercase tracking-widest leading-relaxed max-w-xs">
          This section is currently under construction.
        </p>
      </div>
    </div>
  );
}
