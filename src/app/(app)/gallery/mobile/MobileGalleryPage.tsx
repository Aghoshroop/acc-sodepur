import Image from 'next/image';

export default function MobileGalleryPage() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center bg-carbon-black overflow-hidden pt-32 pb-16 text-chalk-white border-t-8 border-track-red">
      <div className="absolute inset-0 z-0">
        <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-20 " />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80" />
      </div>

      <div className="relative z-10 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-3xl font-primary uppercase tracking-widest text-chalk-white mb-6 border-b-2 border-track-red inline-block pb-2">
          GALLERY
        </h1>
        <p className="text-chalk-white/60 text-xs uppercase tracking-widest">
          This section is currently under construction.
        </p>
      </div>
    </section>
  );
}
