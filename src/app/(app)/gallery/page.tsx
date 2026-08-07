import Image from 'next/image';
import MobileGalleryPage from './mobile/MobileGalleryPage';

export default function GalleryPage() {
  return (
    <main className="w-full bg-carbon-black min-h-screen text-chalk-white border-t-8 border-track-red relative overflow-hidden">
      
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block">
        <div className="absolute inset-0 z-0">
          <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-20 " />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-primary uppercase tracking-widest text-chalk-white mb-8 border-b-4 border-track-red inline-block pb-2">
            GALLERY
          </h1>
          <p className="text-chalk-white/60 text-lg uppercase tracking-widest">
            This section is currently under construction.
          </p>
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full">
        <MobileGalleryPage />
      </div>

    </main>
  );
}
