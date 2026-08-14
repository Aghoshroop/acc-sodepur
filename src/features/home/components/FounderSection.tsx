'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FounderSection() {

  return (
    <section className="relative w-full pt-12 md:pt-16 pb-16 md:pb-20 bg-carbon-black text-chalk-white overflow-hidden border-t border-chalk-white/5 flex flex-col min-h-screen h-screen">
      {/* Background Image for all devices */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/51681-kuntal-roy.png"
          alt="Dr. Kuntal Roy"
          fill
          className="object-cover object-[85%_top] md:object-[center_top] opacity-80 md:opacity-100 transition-transform"
        />
        {/* Overall light dark overlay for the entire section */}
        <div className="absolute inset-0 bg-carbon-black/30 md:bg-carbon-black/40" />
        {/* Uniform light overlay for mobile so the image is visible everywhere behind the text */}
        <div className="absolute inset-0 bg-carbon-black/40 md:hidden backdrop-blur-[2px]" />
        {/* Top-to-bottom fade for title */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-carbon-black/95 via-carbon-black/50 to-transparent opacity-100" />
        {/* Bottom-to-top fade for biography */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-carbon-black/95 via-carbon-black/70 to-transparent opacity-100" />
      </div>

      <div className="relative z-10 w-full flex-grow max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col justify-between">
        <motion.div 
          className="w-full md:w-3/4 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col gap-4 items-center md:items-start relative z-20">
            <p className="text-[10px] md:text-sm tracking-[0.4em] md:tracking-[0.4em] uppercase text-track-red font-semibold mb-2 md:mb-0">
              The Founder / Director
            </p>
            {/* Monumental Typographic Scale */}
            <h2 className="text-4xl sm:text-6xl md:text-[80px] lg:text-[100px] xl:text-[120px] font-primary uppercase tracking-tighter leading-[0.9] md:leading-[1.1] text-chalk-white whitespace-nowrap">
              Dr. Kuntal Roy
            </h2>
          </div>
        </motion.div>

        <motion.div 
          className="w-full md:w-3/4 flex flex-col gap-6 md:gap-8 items-center md:items-start text-center md:text-left mt-auto pt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start md:border-l border-chalk-white/10 md:pl-12 md:ml-4 relative z-20">
            <span className="text-[8px] md:text-[8px] lg:text-xs tracking-[0.2em] uppercase border border-chalk-white/20 px-2 py-1 md:px-2 md:py-1 lg:px-4 lg:py-2 font-bold bg-carbon-black/50 backdrop-blur-sm text-chalk-white">
              <span className="text-track-red">Dronacharya Awardee</span>
            </span>
            <span className="text-[8px] md:text-[8px] lg:text-xs tracking-[0.2em] uppercase border border-chalk-white/20 px-2 py-1 md:px-2 md:py-1 lg:px-4 lg:py-2 text-chalk-white/70 font-bold bg-carbon-black/50 backdrop-blur-sm">
              Ph.D. Sports Science
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-center md:border-l border-chalk-white/10 md:pl-12 md:ml-4 mt-2 md:mt-4">
            <p className="text-base sm:text-lg md:text-lg leading-[1.6] md:leading-[1.8] tracking-wide opacity-80 md:opacity-90 max-w-sm md:max-w-xl font-medium text-chalk-white italic md:not-italic">
              "Taking grassroots talent from underprivileged backgrounds and crafting them into international icons."
              <span className="hidden landscape:inline md:inline font-normal"> His lineage has fundamentally shaped Bengal's history in athletics, resulting in Olympians and over 73 international medals.</span>
            </p>

            <Link 
              href="/founder" 
              className="group flex flex-col gap-4 w-max shrink-0 mt-4 md:mt-0 font-bold"
            >
              <div className="flex items-center gap-4 text-xs md:text-sm tracking-[0.2em] uppercase hover:opacity-50 transition-opacity">
                Read Biography
                <div className="w-8 h-[1px] bg-chalk-white group-hover:w-16 transition-all duration-700 ease-[0.16,1,0.3,1]" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
