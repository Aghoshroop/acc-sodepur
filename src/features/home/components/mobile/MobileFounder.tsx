'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function MobileFounder() {
  const milestones = [
    { year: "1969", text: "Founded ACC" },
    { year: "1998", text: "Dronacharya Award" },
    { year: "2000", text: "Sydney Olympics" },
    { year: "2024", text: "Enduring Legacy" }
  ];

  return (
    <section className="relative w-full bg-chalk-white text-carbon-black flex flex-col pt-16 pb-6 border-t border-carbon-black/10">
      
      {/* Editorial Header */}
      <div className="px-6 mb-6 shrink-0">
        <p className="text-[10px] tracking-widest uppercase font-bold text-track-red mb-2">
          The Founder / Director
        </p>
        <h2 className="text-[3.5rem] font-primary uppercase tracking-tighter leading-[0.85] text-carbon-black">
          Dr. Kuntal<br />Roy
        </h2>
        <div className="flex flex-wrap gap-2 items-center mt-4">
          <span className="text-[10px] tracking-[0.2em] uppercase border border-carbon-black/20 px-3 py-1.5 font-bold bg-carbon-black/5 text-carbon-black">
            <span className="text-track-red">Dronacharya Awardee</span>
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase border border-carbon-black/20 px-3 py-1.5 text-carbon-black/70 font-bold bg-carbon-black/5">
            Ph.D. Sports Science
          </span>
        </div>
      </div>

      {/* Portrait */}
      <div className="w-full mb-8">
        <Image
          src="/images/51681-kuntal-roy.png"
          alt="Dr. Kuntal Roy"
          width={1500}
          height={900}
          sizes="100vw"
          className="w-full h-auto bg-carbon-black/5"
        />
      </div>

      {/* Milestones */}
      <div className="px-6 pb-6 w-full flex flex-col gap-4">
        {milestones.map((milestone, idx) => (
          <div key={idx} className="flex flex-col border-l-2 border-track-red/30 pl-4 py-1">
            <span className="text-xl font-primary uppercase text-carbon-black">{milestone.year}</span>
            <span className="text-sm text-carbon-black/70 leading-tight">{milestone.text}</span>
          </div>
        ))}
      </div>

      {/* Action */}
      <div className="px-6 shrink-0 mt-2 flex justify-center w-full">
        <Link href="/founder" className="text-xs font-bold uppercase tracking-wider text-carbon-black underline underline-offset-4 active:text-carbon-black/70 transition-colors">
          Read Full Legacy
        </Link>
      </div>

    </section>
  );
}
