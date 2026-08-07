'use client';

export default function MobileSponsorsPage() {
  return (
    <div className="min-h-screen bg-chalk-white text-carbon-black flex flex-col justify-center items-center px-6">
      <div className="w-full text-center">
        <h1 className="text-5xl font-primary uppercase tracking-tighter leading-none mb-6">
          Sponsors
        </h1>
        
        <div className="h-[2px] w-16 bg-track-red mx-auto mb-8" />
        
        <p className="text-lg font-light opacity-60 tracking-wide">
          No sponsors till now.
        </p>
      </div>
    </div>
  );
}
