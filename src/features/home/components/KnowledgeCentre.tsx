'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function KnowledgeCentre() {

  return (
    <section className="relative w-full py-16 md:py-24 text-carbon-black overflow-hidden border-t border-carbon-black/10">
      {/* Background Image & White Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/acc2.jpg"
          alt="ACC Training Background"
          fill
          className="object-cover opacity-100 object-[center_20%]"
        />
        <div className="absolute inset-0 bg-chalk-white/75" />
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24 px-6 md:px-12 relative z-10">
        
        <motion.div 
          className="w-full md:w-1/2 flex flex-col gap-8 order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-sm tracking-[0.2em] uppercase opacity-50 mb-2">Academics</h2>
            <h3 className="text-4xl md:text-6xl font-primary uppercase tracking-tight leading-none text-carbon-black">
              Knowledge<br />Centre
            </h3>
          </div>
          
          <p className="text-sm md:text-base leading-relaxed tracking-wide opacity-80 max-w-lg font-light text-carbon-black">
            ACC is not just a training ground; it is a center of sports science. Our coaches hold top-tier academic doctorates and elite global coaching credentials, including World Athletics CECS Level 3 Certification.
          </p>

          <div className="flex flex-col gap-6 mt-4 border-l border-carbon-black/20 pl-6">
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-carbon-black/90">Sports Science Clinics</h4>
              <p className="text-xs opacity-60 mt-1">Technical workshops with visiting scientists to upgrade athletic mechanics.</p>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-carbon-black/90">Strength & Conditioning</h4>
              <p className="text-xs opacity-60 mt-1">Frameworks managed by certified EXOS high-performance experts.</p>
            </div>
          </div>

          <div className="mt-8">
            <Link 
              href="/knowledge-centre" 
              className="group flex items-center gap-6 w-max"
            >
              <span className="text-xs tracking-[0.2em] uppercase pb-2 border-b border-carbon-black/30 group-hover:border-carbon-black transition-colors text-carbon-black font-bold">
                Enter the Centre
              </span>
              <div className="w-8 h-[1px] bg-carbon-black group-hover:w-16 transition-all duration-500 ease-out" />
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2 order-1 md:order-2 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/images/ACCfamily.jpg"
            alt="Knowledge Centre at ACC"
            width={1200}
            height={900}
            className="w-full h-auto object-contain shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
