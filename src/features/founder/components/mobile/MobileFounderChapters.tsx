'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type Chapter = {
  chapter: string;
  title: string;
  content: React.ReactNode;
  image: string;
  bgImage?: string;
  containImage?: boolean;
  noCard?: boolean;
};

export default function MobileFounderChapters({ chapters }: { chapters: Chapter[] }) {
  return (
    <section id="founder-story" className="relative w-full bg-chalk-white flex flex-col pt-12 pb-24">
      {chapters.map((chapter, index) => (
        <div key={index} className="flex flex-col mb-24 last:mb-0 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-track-red text-[10px] tracking-[0.3em] uppercase mb-3 block font-bold">
              {chapter.chapter}
            </span>
            <h3 className="text-[2.5rem] leading-[1] font-primary uppercase tracking-tight mb-6 text-carbon-black">
              {chapter.title}
            </h3>
            
            {/* Image Block */}
            <div className={`relative w-full mb-6 overflow-hidden ${chapter.noCard ? '' : 'aspect-[4/5] bg-carbon-black/5'}`}>
              {!chapter.noCard && chapter.bgImage && (
                <Image
                  src={chapter.bgImage}
                  alt={`${chapter.title} Background`}
                  fill
                  className="object-cover opacity-10"
                />
              )}
              {chapter.noCard ? (
                <Image
                  src={chapter.image}
                  alt={chapter.title}
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                />
              ) : (
                <Image
                  src={chapter.image}
                  alt={chapter.title}
                  fill
                  className={`${chapter.containImage ? 'object-contain' : 'object-cover'}`}
                />
              )}
            </div>
            
            <div className="text-carbon-black/80 text-sm leading-relaxed font-light space-y-4">
              {chapter.content}
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
