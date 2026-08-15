'use client';

import { useGallery } from '../context/GalleryContext';
import { getMediaByZone } from '@/features/gallery/data';
import { DisplayZone } from '@/features/gallery/types';
import Image from 'next/image';
import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const ALBUMS: { id: DisplayZone; title: string; subtitle: string; coverImage?: string }[] = [
  { id: 'TheBeginning', title: 'Where it all began', subtitle: 'The Archive' },
  { id: 'HallOfMoments', title: 'Hall of Moments', subtitle: 'Iconic Memories' },
  { id: 'ModernEra', title: 'The Modern Era', subtitle: 'Contemporary Athletics', coverImage: '/images/synthetic.jpg' },
];

export default function AlbumGrid() {
  const { setActiveAlbum } = useGallery();

  return (
    <section className="relative z-10 w-full min-h-screen py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-primary uppercase tracking-tight text-[#C8A96A] mb-4">
          Explore Albums
        </h2>
        <p className="text-[#F6F2EA]/60 font-light tracking-wide text-lg max-w-2xl">
          A visual chronicle of the Athletic Coaching Camp&apos;s legacy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ALBUMS.map((album, idx) => {
          // Get the first image from this zone to use as a cover
          const coverMedia = getMediaByZone(album.id)[0];
          const coverUrl = album.coverImage || coverMedia?.thumbnailUrl || '/images/placeholder.jpg';

          return (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative aspect-square cursor-pointer overflow-hidden bg-[#0a0a0a]"
              onClick={() => setActiveAlbum(album.id)}
            >
              {/* Cover Image */}
              <Image
                src={coverUrl}
                alt={album.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              
              {/* Top explicit tap indicator for mobile & desktop */}
              <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full z-10 opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F6F2EA]">Explore Images</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#C8A96A]"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>

              {/* Light Red Transparent Overlay on Hover (Desktop) */}
              <div className="absolute inset-0 bg-red-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm z-20">
                <Camera className="w-12 h-12 text-[#F6F2EA] mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                <h3 className="text-3xl font-primary uppercase tracking-wider text-[#F6F2EA] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {album.title}
                </h3>
                <div className="mt-6 flex items-center gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <div className="w-12 h-[1px] bg-[#F6F2EA]/50"></div>
                  <span className="text-[#F6F2EA] tracking-[0.2em] text-xs uppercase font-bold">View Album</span>
                  <div className="w-12 h-[1px] bg-[#F6F2EA]/50"></div>
                </div>
              </div>

              {/* Default Title block */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/60 to-transparent opacity-100 md:group-hover:opacity-0 transition-opacity duration-300 z-10">
                <p className="text-[#C8A96A] text-xs tracking-[0.3em] uppercase mb-2 font-bold">{album.subtitle}</p>
                <h3 className="text-2xl font-primary uppercase tracking-wider text-[#F6F2EA] leading-tight">{album.title}</h3>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Upcoming Albums Placeholder Message */}
      <div className="mt-24 text-center border-t border-[#F6F2EA]/10 pt-16">
        <h3 className="text-2xl md:text-3xl font-primary uppercase tracking-widest text-[#F6F2EA] mb-4">
          More Albums Coming Soon
        </h3>
        <p className="text-[#F6F2EA]/50 font-light text-lg italic max-w-2xl mx-auto tracking-wide">
          Select an album to explore more images.
        </p>
      </div>
    </section>
  );
}
