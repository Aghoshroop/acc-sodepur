import Image from 'next/image';
import Link from 'next/link';

export default function MobileAbout() {
  return (
    <section className="relative w-full bg-chalk-white text-carbon-black py-24 px-6 flex flex-col">
      
      {/* 70% Photography: One Memorable Image of the Institution */}
      <div className="-mx-6 w-[calc(100%+3rem)] aspect-square mb-12 relative overflow-hidden">
        <Image 
          src="/images/syntheticwithramp.jpg" 
          alt="ACC Sodepur Synthetic Track and Ramp" 
          fill 
          sizes="100vw"
          className="object-cover object-center" 
        />
      </div>

      {/* 30% Typography: Editorial Rhythm (Trust) */}
      <div className="flex flex-col flex-1">
        <h2 className="text-[2.75rem] font-primary uppercase tracking-tight leading-[0.9] text-carbon-black mb-6">
          Bengal's Premier Powerhouse
        </h2>

        <p className="text-base text-carbon-black/70 leading-relaxed mb-10 max-w-sm">
          Institutionalizing athletic excellence under challenging conditions. A movement to uplift and drive athletic determination since 1969.
        </p>

        <Link 
          href="/about" 
          className="self-start inline-flex items-center gap-4 py-4 px-8 border border-carbon-black rounded-full text-sm font-bold uppercase tracking-wider hover:bg-carbon-black hover:text-chalk-white transition-colors"
        >
          <span>Discover Journey</span>
        </Link>
      </div>

    </section>
  );
}
