'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const FRANCHISES = [
  { id: 'dragons', name: 'Beijing Dragons', image: '/images/relay/relay-franchise-dragons.jpg', color: '#E32636' },
  { id: 'eagles', name: 'Berlin Eagles', image: '/images/relay/relay-franchise-eagles.jpg', color: '#1E90FF' },
  { id: 'kangaroos', name: 'Sydney Kangaroos', image: '/images/relay/relay-franchise-kangaroos.jpg', color: '#FFD700' },
  { id: 'horses', name: 'Edmonton Horses', image: '/images/relay/relay-franchise-horses.jpg', color: '#8B4513' },
  { id: 'phoenix', name: 'Athens Phoenix', image: '/images/relay/relay-franchise-phoenix.jpg', color: '#FF4500' },
];

export default function MobilePremierRelayPage() {
  return (
    <div className="w-full flex flex-col bg-[#0A0A0A] text-chalk-white">
      {/* Hero */}
      <section className="relative w-full h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <Image 
          src="/images/relay/relay-hero-night-race.jpg"
          alt="Arrival at the Premier Relay"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-80" />
        <div className="relative z-10 w-full flex flex-col items-center justify-center mt-20">
          <div className="font-primary text-[10px] uppercase tracking-[0.4em] text-chalk-white/60 mb-4">
            The Annual Flagship Event
          </div>
          <h1 className="font-secondary text-5xl uppercase leading-[0.85] tracking-tighter text-chalk-white">
            Premier<br/>
            <span className="text-track-red">Relay</span>
          </h1>
        </div>
      </section>

      {/* The Gun */}
      <section className="relative w-full py-24 flex flex-col items-center justify-center text-center px-4 border-t border-chalk-white/10">
        <span className="font-primary text-[10px] uppercase tracking-[0.5em] text-ash-grey mb-4 block">Phase 01</span>
        <h2 className="font-secondary text-4xl text-chalk-white mb-12">Preparation</h2>
        
        <h2 className="font-secondary text-3xl text-chalk-white/40 tracking-widest mb-12">
          Silence
        </h2>
        
        <h2 className="font-secondary text-6xl text-track-red uppercase leading-none italic mb-12 pr-2">
          Bang
        </h2>

        <h2 className="font-secondary text-4xl text-chalk-white italic tracking-tighter">
          Acceleration
        </h2>
      </section>

      {/* The Exchange */}
      <section className="relative w-full h-[60vh] flex flex-col justify-end p-6 border-t border-chalk-white/10 overflow-hidden">
        <Image
          src="/images/relay/the-exchange.jpg"
          alt="The Baton Exchange"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-90" />
        <h2 className="relative z-10 font-secondary text-4xl text-chalk-white uppercase tracking-tighter">
          The Exchange
        </h2>
      </section>

      {/* Franchises */}
      <section className="relative w-full py-24 px-6 border-t border-chalk-white/10">
        <h3 className="font-primary text-[10px] uppercase tracking-[0.4em] text-ash-grey mb-12 text-center">
          The Five Franchises
        </h3>
        <div className="flex flex-col w-full gap-8">
          {FRANCHISES.map((franchise) => (
            <div key={franchise.id} className="relative w-full aspect-[4/3] rounded-sm overflow-hidden group">
              <Image
                src={franchise.image}
                alt={franchise.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end items-start">
                <h2 className="font-secondary text-3xl text-chalk-white mb-2 leading-none">
                  {franchise.name}
                </h2>
                <span className="font-primary text-[10px] tracking-[0.3em] uppercase" style={{ color: franchise.color }}>
                  Discover
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Legacy */}
      <section className="relative w-full py-24 px-6 border-t border-chalk-white/10 bg-chalk-white text-carbon-black">
        <h3 className="font-primary text-[10px] uppercase tracking-[0.4em] text-carbon-black/50 mb-8 text-center">
          The Hall of Champions
        </h3>
        
        <div className="w-full relative aspect-[3/4] mb-12 border border-carbon-black/10">
          <Image
            src="/images/relay/berlin-eagle-2026.jpg"
            alt="Past Champions"
            fill
            className="object-cover contrast-125"
          />
        </div>

        <ul className="flex flex-col gap-4 font-secondary text-xl text-carbon-black">
          <li className="flex justify-between border-b border-black/10 pb-3">
            <span>2026</span>
            <span className="italic">Berlin Eagles</span>
          </li>
          <li className="flex justify-between border-b border-black/10 pb-3">
            <span>2025</span>
            <span className="italic">Berlin Eagles</span>
          </li>
          <li className="flex justify-between border-b border-black/10 pb-3">
            <span>2024</span>
            <span className="italic">Beijing Dragons</span>
          </li>
          <li className="flex justify-between border-b border-black/10 pb-3">
            <span>2023</span>
            <span className="italic">Sydney Kangaroos</span>
          </li>
          <li className="flex justify-between pb-3">
            <span>2022</span>
            <span className="italic">Berlin Eagles</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
