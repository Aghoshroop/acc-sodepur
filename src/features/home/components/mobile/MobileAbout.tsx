import Image from 'next/image';
import Link from 'next/link';

export default function MobileAbout() {
  return (
    <section className="relative w-full bg-chalk-white text-carbon-black py-20 px-4 flex flex-col overflow-hidden">
      
      {/* 70% Photography: One Memorable Image of the Institution */}
      <div className="-mx-4 w-[calc(100%+2rem)] aspect-square mb-10 relative overflow-hidden">
        <Image 
          src="/images/syntheticwithramp.jpg" 
          alt="ACC Sodepur Synthetic Track and Ramp" 
          fill 
          sizes="100vw"
          className="object-cover object-center" 
        />
      </div>

      {/* 30% Typography: Editorial Rhythm (Trust) */}
      <div className="flex flex-col flex-1 w-full">
        <h2 className="text-[clamp(2rem,11vw,3rem)] font-primary uppercase tracking-tight leading-[0.85] text-carbon-black mb-5 break-words">
          Bengal's Premier Powerhouse
        </h2>

        <p className="text-[clamp(0.85rem,4.5vw,1rem)] text-carbon-black/70 leading-relaxed mb-8 max-w-sm">
          Institutionalizing athletic excellence under challenging conditions. A movement to uplift and drive athletic determination since 1969.
        </p>

        <Link 
          href="/about" 
          className="w-full text-center sm:w-auto self-start inline-flex justify-center items-center gap-4 py-4 px-6 border border-carbon-black rounded-full text-[clamp(0.75rem,3.5vw,14px)] font-bold uppercase tracking-wider hover:bg-carbon-black hover:text-chalk-white active:bg-carbon-black active:text-chalk-white active:scale-95 transition-all"
        >
          <span>Discover Journey</span>
        </Link>
      </div>

    </section>
  );
}
