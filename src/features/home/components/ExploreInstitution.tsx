'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const EXPLORE_ITEMS = [
  {
    title: 'The Founder',
    href: '/founder',
    image: '/images/legacy/legacy-founder-kuntal-roy.jpg',
    colSpan: 'col-span-1 md:col-span-2',
  },
  {
    title: 'Achievements',
    href: '/achievements',
    image: '/images/performance/performance-hero-focus.jpg',
    colSpan: 'col-span-1',
  },
  {
    title: 'Facilities',
    href: '/facilities',
    image: '/images/facility1.jpg',
    colSpan: 'col-span-1',
  },
  {
    title: 'Community',
    href: '/administration',
    image: '/images/administration/community.png',
    colSpan: 'col-span-1',
  },
  {
    title: 'Gallery',
    href: '/gallery',
    image: '/images/legacy/legacy-hero-archive.jpg',
    colSpan: 'col-span-1',
  },
];

export default function ExploreInstitution() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-transparent text-chalk-white overflow-hidden border-t border-chalk-white/10">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/acc.jpg" 
          alt="Athletic Coaching Camp" 
          fill 
          className="object-cover object-[80%_60%] md:object-[85%_65%] scale-125 md:scale-[1.35] opacity-100" 
        />
        {/* Base dark overlay */}
        <div className="absolute inset-0 bg-carbon-black/40" />
        {/* Heavy right-side dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-l from-carbon-black/95 via-carbon-black/60 to-transparent" />
      </div>

      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10">
        
        {/* Monumental Header Section */}
        <div className="mb-12 md:mb-24 relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 inline-block md:pr-12">
            <div>
              <motion.h2 
                className="text-xs md:text-sm tracking-[0.4em] uppercase opacity-50 mb-6 text-chalk-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Discover The Institution
              </motion.h2>
              <motion.h3 
                className="text-4xl sm:text-6xl md:text-8xl font-primary uppercase tracking-tight leading-none text-chalk-white"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Explore<span className="hidden md:inline"> </span><br className="md:hidden" />ACC
              </motion.h3>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-2 bg-transparent md:bg-chalk-white/5 p-0 md:p-2">
          {EXPLORE_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              className={`${item.colSpan} relative bg-chalk-white/5 overflow-hidden h-full min-h-[120px] md:min-h-0 rounded-2xl md:rounded-none border border-chalk-white/10 md:border-none shadow-2xl md:shadow-none`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link 
                href={item.href}
                className={`group relative block w-full flex flex-col justify-end ${index === 0 ? 'h-[320px] sm:h-[400px]' : 'h-[220px] sm:h-[300px]'} md:!h-[450px]`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                />
                
                {/* Refined gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/40 md:via-transparent to-transparent opacity-90 md:opacity-60 group-hover:opacity-40 transition-opacity duration-1000" />
                
                {/* Elegant Hover Typography */}
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/90 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-8">
                  <div className="flex justify-between items-end w-full">
                    <div className="flex flex-col">
                      <span className="text-chalk-white/60 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold mb-2 md:mb-2">
                        0{index + 1} // Discover
                      </span>
                      <h4 className="text-chalk-white font-primary text-3xl sm:text-4xl md:text-3xl uppercase tracking-tight leading-none md:group-hover:text-track-red transition-colors duration-500">
                        {item.title}
                      </h4>
                    </div>
                    {/* Mobile Arrow / Desktop Hover Arrow */}
                    <div className="text-track-red md:text-chalk-white/0 md:group-hover:text-track-red transition-all duration-500 transform translate-x-0 md:-translate-x-4 md:group-hover:translate-x-0 mb-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8 md:w-6 md:h-6">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  {/* The Track Red Baton Pass */}
                  <div className="w-12 md:w-0 h-[2px] md:h-[1px] bg-track-red mt-4 md:group-hover:w-full transition-all duration-1000 ease-[0.16,1,0.3,1]" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
