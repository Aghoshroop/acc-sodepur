'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import FounderProtegesCarousel from '../FounderProtegesCarousel';

type Athlete = {
  name: React.ReactNode;
  slug: string;
  image: string;
  event: string;
  achievement: string;
};

export default function MobileFounderProteges({ olympians }: { olympians: Athlete[] }) {
  return (
    <section className="relative w-full bg-carbon-black text-chalk-white py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[url('/images/synthetic.jpg')] bg-cover bg-center" />
      </div>

      <div className="relative z-10">
        <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-3 text-center font-bold">The Legacy</div>
        <h2 className="text-[2.5rem] font-primary uppercase tracking-tight text-center mb-12">
          The Protégés
        </h2>

        {/* Olympians Carousel */}
        <div className="px-6 pb-8">
          <FounderProtegesCarousel olympians={olympians} />
        </div>
      </div>
    </section>
  );
}
