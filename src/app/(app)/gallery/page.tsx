'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import SectionArchiveHero from './components/SectionArchiveHero';
import SectionTheBeginning from './components/SectionTheBeginning';
import SectionLegacyTimeline from './components/SectionLegacyTimeline';
import SectionThenVsNow from './components/SectionThenVsNow';
import SectionHallOfMoments from './components/SectionHallOfMoments';
import SectionMemoryCorridor from './components/SectionMemoryCorridor';
import SectionLegacyWall from './components/SectionLegacyWall';
// import SectionChampionshipYears from './components/SectionChampionshipYears';
import SectionFilmStrip from './components/SectionFilmStrip';
import SectionModernACC from './components/SectionModernACC';
import { GalleryProvider } from './context/GalleryContext';
import StoriesBehindTheFrame from './components/StoriesBehindTheFrame';
import { LenisProvider } from '@/components/providers/LenisProvider';

export default function GalleryPage() {
  return (
    <LenisProvider>
      <GalleryProvider>
      <main className="w-full bg-[#050505] text-[#F6F2EA] min-h-screen relative selection:bg-[#C8A96A] selection:text-[#050505]">
        
        {/* Modal Overlay */}
        <StoriesBehindTheFrame />

        {/* 1. THE ARCHIVE */}
      <SectionArchiveHero />

      {/* 2. THE BEGINNING */}
      <SectionTheBeginning />

      {/* 3. THE LEGACY TIMELINE */}
      <SectionLegacyTimeline />

      {/* 4. THEN VS NOW */}
      <SectionThenVsNow />

      {/* 5. HALL OF MOMENTS */}
      <SectionHallOfMoments />

      {/* 6. MEMORY CORRIDOR */}
      <SectionMemoryCorridor />

      {/* 7. LEGACY WALL */}
      <SectionLegacyWall />

      {/* 8. FILM STRIP */}
      <SectionFilmStrip />

      {/* 9. MODERN ACC (and final CTA) */}
      <SectionModernACC />

      </main>
    </GalleryProvider>
    </LenisProvider>
  );
}
