'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LifeAtACC() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-transparent text-carbon-black overflow-hidden border-t border-carbon-black/5">

      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-6 md:gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h2 className="text-xs md:text-sm tracking-[0.4em] uppercase opacity-40 mb-4 md:mb-6">Culture & Continuity</h2>
            <h3 className="text-4xl sm:text-6xl md:text-8xl font-primary uppercase tracking-tight leading-[1.1] font-light">
              Life At<span className="hidden md:inline"><br /></span><span className="inline md:hidden"> </span>ACC
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          >
            <Link 
              href="/administration" 
              className="group flex items-center gap-4 text-xs md:text-sm tracking-[0.2em] uppercase hover:opacity-50 transition-opacity w-max"
            >
              Discover Our Community
              <div className="w-8 h-[1px] bg-carbon-black group-hover:w-16 transition-all duration-700 ease-[0.16,1,0.3,1]" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* Main Large Image - Gallery Framed */}
          <div className="col-span-1 md:col-span-8 relative aspect-[4/3] md:aspect-auto md:h-full group rounded-2xl md:rounded-none overflow-hidden md:overflow-visible">
            <div className="absolute inset-0 md:overflow-hidden bg-carbon-black/5">
              <motion.div 
                className="absolute inset-0 md:-top-[10%] md:h-[110%] w-full"
              >
                <Image
                  src="/images/legacy/legacy-timeline-1969.jpg"
                  alt="Athletes warming up at ACC"
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-105"
                />
              </motion.div>
            </div>
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-10 flex items-center gap-2 md:gap-4">
              <div className="w-6 md:w-12 h-[1px] bg-track-red" />
              <p className="text-chalk-white text-[10px] md:text-xs uppercase tracking-[0.3em] bg-carbon-black/70 px-3 py-1.5 md:px-4 md:py-2 backdrop-blur-md">
                4:00 PM Traditions
              </p>
            </div>
          </div>

          {/* Right Column Editorial Grid */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-8 md:gap-12 justify-center mt-4 md:mt-0 md:h-full">
            <div className="relative aspect-video md:aspect-square md:h-[350px] group overflow-hidden bg-carbon-black/5 rounded-2xl md:rounded-none">
              <motion.div 
                className="absolute inset-0 md:-top-[15%] md:h-[115%] w-full"
              >
                <Image
                  src="/images/campus/501606845_9586045361503872_7631205289418007814_n.jpg"
                  alt="Support structure at ACC"
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-105"
                />
              </motion.div>
            </div>
            
            {/* Sophisticated Editorial Column */}
            <motion.div 
              className="flex flex-col gap-4 md:gap-6 pt-4 md:pt-8 border-t border-carbon-black/10 md:h-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
            >
              <h4 className="text-3xl md:text-4xl font-primary uppercase tracking-wide leading-tight mt-0">
                A Shared<br />Belonging
              </h4>
              <p className="text-sm md:text-base tracking-wider font-light opacity-60 leading-relaxed md:leading-[1.8]">
                <span className="text-4xl md:text-5xl font-primary float-left mr-3 md:mr-3 mt-[-4px] md:mt-[-4px] text-track-red">B</span>
                eyond the synthetic track, ACC operates as a family unit. Generations return to coach, support, and anchor the current crop of elite runners.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
