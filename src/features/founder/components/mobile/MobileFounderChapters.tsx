'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Chapter = {
  chapter: string;
  title: string;
  content: React.ReactNode;
  image: string;
  bgImage?: string;
  containImage?: boolean;
  noCard?: boolean;
  gallery?: { src: string; caption: string }[];
};

export default function MobileFounderChapters({ chapters }: { chapters: Chapter[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCaption, setSelectedCaption] = useState<string | null>(null);

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
            {chapter.gallery ? (
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="space-y-4">
                  {chapter.gallery[0] && (
                    <div className="group cursor-pointer" onClick={() => { setSelectedImage(chapter.gallery![0].src); setSelectedCaption(chapter.gallery![0].caption); }}>
                      <Image src={chapter.gallery[0].src} alt={chapter.gallery[0].caption} width={400} height={500} className="w-full h-auto object-cover rounded shadow-md mb-2" />
                      <p className="text-[9px] text-carbon-black/60 uppercase tracking-widest text-center">{chapter.gallery[0].caption}</p>
                    </div>
                  )}
                  {chapter.gallery[2] && (
                    <div className="group cursor-pointer" onClick={() => { setSelectedImage(chapter.gallery![2].src); setSelectedCaption(chapter.gallery![2].caption); }}>
                      <Image src={chapter.gallery[2].src} alt={chapter.gallery[2].caption} width={400} height={500} className="w-full h-auto object-cover rounded shadow-md mb-2" />
                      <p className="text-[9px] text-carbon-black/60 uppercase tracking-widest text-center">{chapter.gallery[2].caption}</p>
                    </div>
                  )}
                </div>
                <div className="space-y-4 pt-8">
                  {chapter.gallery[1] && (
                    <div className="group cursor-pointer" onClick={() => { setSelectedImage(chapter.gallery![1].src); setSelectedCaption(chapter.gallery![1].caption); }}>
                      <Image src={chapter.gallery[1].src} alt={chapter.gallery[1].caption} width={400} height={500} className="w-full h-auto object-cover rounded shadow-md mb-2" />
                      <p className="text-[9px] text-carbon-black/60 uppercase tracking-widest text-center">{chapter.gallery[1].caption}</p>
                    </div>
                  )}
                  {chapter.gallery[3] && (
                    <div className="group cursor-pointer" onClick={() => { setSelectedImage(chapter.gallery![3].src); setSelectedCaption(chapter.gallery![3].caption); }}>
                      <Image src={chapter.gallery[3].src} alt={chapter.gallery[3].caption} width={400} height={500} className="w-full h-auto object-cover rounded shadow-md mb-2" />
                      <p className="text-[9px] text-carbon-black/60 uppercase tracking-widest text-center">{chapter.gallery[3].caption}</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div 
                className={`relative w-full mb-6 overflow-hidden cursor-pointer ${chapter.noCard ? '' : 'aspect-[4/5] bg-carbon-black/5'}`}
                onClick={() => { setSelectedImage(chapter.image); setSelectedCaption(chapter.title); }}
              >
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
                    className={`${chapter.containImage ? 'object-contain' : 'object-cover'} p-4`}
                  />
                )}
              </div>
            )}
            
            <div className="text-carbon-black/80 font-light text-base leading-relaxed">
              {chapter.content}
            </div>
          </motion.div>
        </div>
      ))}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-carbon-black/95 p-4 cursor-zoom-out"
            onClick={() => {
              setSelectedImage(null);
              setSelectedCaption(null);
            }}
          >
            <div className="relative w-full h-full max-h-[80vh] flex flex-col items-center justify-center mt-12">
              <div className="relative w-full h-full max-h-[70vh]">
                <Image
                  src={selectedImage}
                  alt={selectedCaption || "Expanded image"}
                  fill
                  className="object-contain"
                />
              </div>
              {selectedCaption && (
                <p className="mt-4 text-chalk-white text-xs md:text-sm uppercase tracking-widest text-center">
                  {selectedCaption}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
