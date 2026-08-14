'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { getMediaByZone } from '@/features/gallery/data';
import { useGallery } from '../context/GalleryContext';
import { useLenis } from '@/components/providers/LenisProvider';
import { ArrowLeft } from 'lucide-react';
import { DisplayZone } from '@/features/gallery/types';
import { motion } from 'framer-motion';

const ALBUM_TITLES: Partial<Record<DisplayZone, string>> = {
  TheBeginning: 'Where it all began',
  HallOfMoments: 'Hall of Moments',
  ThenVsNow: 'Then vs Now',
  ModernEra: 'The Modern Era'
};

export default function ExpandedAlbum({ albumId }: { albumId: DisplayZone }) {
  const { setActiveMedia, setActiveAlbum } = useGallery();
  const { lenis } = useLenis();
  const photos = getMediaByZone(albumId);
  const title = ALBUM_TITLES[albumId] || 'Album';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    let frame = 0;
    let rafId: number;
    
    const clampToTop = () => {
      window.scrollTo(0, 0);
      if (lenis) {
        lenis.scrollTo(0, { immediate: true, force: true });
      }
      frame++;
      if (frame < 10) {
        rafId = requestAnimationFrame(clampToTop);
      }
    };
    
    clampToTop();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [lenis, albumId]);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="relative w-full min-h-screen py-32 bg-[#050505] px-6 lg:px-24"
    >
      <div className="max-w-[1600px] mx-auto">
        <button 
          onClick={() => setActiveAlbum(null)}
          className="flex items-center gap-2 text-[#C8A96A] hover:text-[#F6F2EA] transition-colors mb-16 uppercase tracking-widest text-sm"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Albums
        </button>

        <h2 className="text-4xl md:text-6xl font-primary text-[#F6F2EA] mb-24 border-l-4 border-[#C8A96A] pl-8 uppercase tracking-widest">
          {title}
        </h2>

        {photos.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center border-t border-b border-[#F6F2EA]/10 mt-12 bg-[#0a0a0a]/50">
            <div className="w-24 h-24 rounded-full bg-[#050505] border border-[#C8A96A]/30 flex items-center justify-center mb-8">
              <Image 
                src="/images/logo.png" 
                alt="ACC Logo" 
                width={40} 
                height={40} 
                className="opacity-50 grayscale"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-primary text-[#F6F2EA] tracking-widest uppercase mb-4">
              Moments Coming Soon
            </h3>
            <p className="text-[#F6F2EA]/50 font-secondary max-w-md mx-auto italic tracking-wide">
              No images have been added here just yet. Check back soon—you will see pictures here in the near future!
            </p>
          </div>
        ) : (
          <div className="columns-2 md:columns-3 gap-2">
            {photos.map((photo, idx) => (
              <div
                key={photo.id}
                className="break-inside-avoid mb-2 cursor-pointer group overflow-hidden bg-[#0a0a0a]"
                onClick={() => setActiveMedia(photo)}
              >
                <Image
                  src={photo.imageUrl}
                  alt={photo.title || title}
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="w-full h-auto block opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  priority={idx < 6}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}
