import React from 'react';
import MobileMediaPage from './mobile/MobileMediaPage';

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-chalk-white text-carbon-black">
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <h1 className="text-4xl md:text-6xl font-primary uppercase tracking-tight mb-8">
            Media
          </h1>
          <p className="opacity-70">
            Media content coming soon.
          </p>
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full">
        <MobileMediaPage />
      </div>
    </main>
  );
}
