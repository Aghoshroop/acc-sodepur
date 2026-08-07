'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RudraPratimSection() {

  return (
    <section className="relative w-full py-16 md:py-24 bg-chalk-white text-carbon-black overflow-hidden border-t border-carbon-black/10">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/rudra-pratim-roy-bg.jpg"
          alt="Rudra Pratim Roy"
          fill
          className="object-cover object-bottom opacity-60 "
        />
        <div className="absolute inset-0 bg-gradient-to-l from-chalk-white via-chalk-white/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-center">
        <motion.div 
          className="md:w-3/4 flex flex-col gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col gap-4 text-right">
            <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-carbon-black/40 font-light">
              The Next Generation
            </p>
            {/* Monumental Typographic Scale */}
            <h2 className="text-4xl md:text-6xl lg:text-[120px] font-primary uppercase tracking-tighter leading-[1.1] text-carbon-black">
              Rudra Pratim<br />Roy
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center justify-end">
            <span className="text-[10px] tracking-[0.2em] uppercase border border-carbon-black/20 px-4 py-2">
              <span className="text-track-red">Level 3 Coach</span>
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase border border-carbon-black/20 px-4 py-2 text-carbon-black/60">
              EXOS High Performance
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase border border-carbon-black/20 px-4 py-2 text-carbon-black/60">
              <span className="text-track-red">World Athletics</span>
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-end md:items-center border-r border-carbon-black/10 pr-6 md:pr-12 mr-2 md:mr-4 mt-4 justify-end">
            <Link 
              href="/rudra-pratim" 
              className="group flex flex-col gap-4 w-max shrink-0 items-end"
            >
              <div className="flex items-center gap-4 text-xs md:text-sm tracking-[0.2em] uppercase hover:opacity-50 transition-opacity">
                <div className="w-8 h-[1px] bg-carbon-black group-hover:w-16 transition-all duration-700 ease-[0.16,1,0.3,1]" />
                View Profile
              </div>
            </Link>

            <p className="text-sm md:text-lg leading-[1.8] tracking-wide opacity-70 max-w-xl font-light text-carbon-black text-right">
              Son and protégé of Dr. Kuntal Roy, Rudra brings elite international coaching standards to the camp. As the first coach from West Bengal to achieve World Athletics CECS Level 3, he blends legacy with modern sports science.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
