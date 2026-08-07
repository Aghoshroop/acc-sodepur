import Image from 'next/image';
import Link from 'next/link';

export default function MobileSuccessor() {
  return (
    <section className="relative w-full bg-chalk-white text-carbon-black flex flex-col pt-12 pb-6 border-t border-carbon-black/10">
      
      {/* Editorial Header */}
      <div className="px-6 mb-6 shrink-0 text-right">
        <h2 className="text-[3.5rem] font-primary uppercase tracking-tighter leading-[0.85] text-carbon-black mb-2">
          Rudra<br />Pratim Roy
        </h2>
        <p className="text-[10px] tracking-widest uppercase font-bold text-track-red">
          The Next Generation
        </p>
      </div>

      {/* Portrait */}
      <div className="relative w-full h-[50dvh] min-h-[300px] mb-8">
        <div className="relative w-full h-full overflow-hidden bg-carbon-black/5">
          <Image
            src="/images/rudra-pratim-roy-bg.jpg"
            alt="Rudra Pratim Roy"
            fill
            sizes="100vw"
            className="object-cover object-top "
          />
        </div>
      </div>

      {/* Editorial Content */}
      <div className="flex flex-col gap-6 pr-4 border-r border-carbon-black/20 mx-6 mb-6 items-end text-right">
        <div className="flex flex-wrap gap-2 mb-2 justify-end">
          <span className="text-[10px] tracking-[0.2em] uppercase border border-carbon-black/20 px-3 py-1 font-bold">
            <span className="text-track-red">Level 3 Coach</span>
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase border border-carbon-black/20 px-3 py-1 text-carbon-black/60 font-bold">
            EXOS
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase border border-carbon-black/20 px-3 py-1 text-carbon-black/60 font-bold">
            <span className="text-track-red">World Athletics</span>
          </span>
        </div>

        <p className="text-sm text-carbon-black/70 leading-relaxed pl-8">
          Son and protégé of Dr. Kuntal Roy, Rudra brings elite international coaching standards to the camp. He blends legacy with modern sports science.
        </p>
      </div>

      {/* Link to Successor Page */}
      <div className="px-6 shrink-0 mt-2 flex justify-center w-full">
        <Link href="/rudra-pratim" className="text-xs font-bold uppercase tracking-wider text-carbon-black underline underline-offset-4 active:text-carbon-black/70 transition-colors">
          View Successor Profile
        </Link>
      </div>

    </section>
  );
}
