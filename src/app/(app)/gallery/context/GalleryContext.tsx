'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { GalleryMedia } from '@/features/gallery/types';

interface GalleryContextType {
  activeMedia: GalleryMedia | null;
  setActiveMedia: (media: GalleryMedia | null) => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export function GalleryProvider({ children }: { children: ReactNode }) {
  const [activeMedia, setActiveMedia] = useState<GalleryMedia | null>(null);

  return (
    <GalleryContext.Provider value={{ activeMedia, setActiveMedia }}>
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  const context = useContext(GalleryContext);
  if (context === undefined) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
}
