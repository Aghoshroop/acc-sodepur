'use client';

import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { GalleryMedia, DisplayZone } from '@/features/gallery/types';

interface GalleryContextType {
  activeMedia: GalleryMedia | null;
  setActiveMedia: (media: GalleryMedia | null) => void;
  activeAlbum: DisplayZone | null;
  setActiveAlbum: (album: DisplayZone | null) => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export function GalleryProvider({ children }: { children: ReactNode }) {
  const [activeMedia, setActiveMedia] = useState<GalleryMedia | null>(null);
  const [activeAlbum, setActiveAlbumState] = useState<DisplayZone | null>(null);

  // Sync with browser history for back button support using URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#album-')) {
        const album = hash.replace('#album-', '') as DisplayZone;
        setActiveAlbumState(album);
      } else {
        setActiveAlbumState(null);
      }
    };
    
    // Check initial hash on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const setActiveAlbum = useCallback((album: DisplayZone | null) => {
    if (album) {
      window.location.hash = `album-${album}`;
    } else {
      if (window.location.hash.startsWith('#album-')) {
        window.history.back();
      } else {
        setActiveAlbumState(null);
      }
    }
  }, []);

  return (
    <GalleryContext.Provider value={{ activeMedia, setActiveMedia, activeAlbum, setActiveAlbum }}>
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
