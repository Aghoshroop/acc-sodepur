import Image from 'next/image';
import Link from 'next/link';

export default function MobileLifeAtACC() {
  return (
    <section className="relative w-full bg-chalk-white text-carbon-black py-20 px-6 flex flex-col border-t border-carbon-black/10">
      
      {/* Title */}
      <div className="mb-8 shrink-0">
        <p className="text-[10px] tracking-widest uppercase text-track-red font-bold mb-2">
          Culture & Continuity
        </p>
        <h2 className="text-[3rem] font-primary uppercase tracking-tighter leading-[0.9] text-carbon-black">
          Life At<br />ACC
        </h2>
      </div>

      {/* 70% Photography: One Memorable Image of athletes together */}
      <div className="-mx-6 w-[calc(100%+3rem)] aspect-[4/5] relative overflow-hidden mb-10 bg-carbon-black/5">
        <Image
          src="/images/ACCfamily.jpg"
          alt="ACC Athletes Community"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* 30% Typography: Editorial Rhythm (Belonging) */}
      <div className="flex flex-col gap-6 pl-4 border-l border-carbon-black/20">
        <p className="text-base text-carbon-black/70 leading-relaxed pr-4">
          Beyond the synthetic track, ACC operates as a family unit. Generations return to coach, support, and anchor the current crop of elite runners.
        </p>

        <Link 
          href="/community" 
          className="group flex flex-col gap-2 w-max mt-2 transition-transform"
        >
          <span className="text-xs tracking-widest uppercase font-bold text-carbon-black">
            Discover Our Community
          </span>
          <div className="w-12 h-0.5 bg-track-red" />
        </Link>
      </div>
      
    </section>
  );
}
