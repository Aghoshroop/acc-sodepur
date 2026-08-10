'use client';

import { useEffect, useState } from 'react';
import SectionArchiveHero from './components/SectionArchiveHero';
import SectionTheBeginning from './components/SectionTheBeginning';
import SectionThenVsNow from './components/SectionThenVsNow';
import SectionHallOfMoments from './components/SectionHallOfMoments';
import SectionModernACC from './components/SectionModernACC';
import SectionRecentMoments from './components/SectionRecentMoments';
import { GalleryProvider } from './context/GalleryContext';
import StoriesBehindTheFrame from './components/StoriesBehindTheFrame';
import { LenisProvider } from '@/components/providers/LenisProvider';

export default function GalleryPage() {
  const [isProtected, setIsProtected] = useState(false);

  useEffect(() => {
    const mainEl = document.getElementById('gallery-main');
    const overlayEl = document.getElementById('gallery-protection');

    let penaltyTimer: NodeJS.Timeout | null = null;
    let penaltySeconds = 0;

    const triggerProtection = (isPenalty = false) => {
      if (mainEl && overlayEl) {
        mainEl.style.filter = 'blur(40px)';
        mainEl.style.opacity = '0';
        mainEl.style.visibility = 'hidden';
        overlayEl.style.opacity = '1';
        overlayEl.style.visibility = 'visible';
        overlayEl.style.pointerEvents = 'auto';
      }
      
      // Only start 10-second penalty for explicit snip attempts (not just idle)
      if (isPenalty && penaltySeconds <= 0) {
        penaltySeconds = 10;
        const countdownEl = document.getElementById('gallery-countdown');
        if (countdownEl) countdownEl.innerText = `10`;
        
        if (penaltyTimer) clearInterval(penaltyTimer);
        penaltyTimer = setInterval(() => {
          penaltySeconds -= 1;
          if (countdownEl) countdownEl.innerText = penaltySeconds.toString();
          
          if (penaltySeconds <= 0) {
            clearInterval(penaltyTimer!);
            penaltyTimer = null;
            // Auto-remove protection if document has focus
            if (document.hasFocus()) {
              forceRemoveProtection();
            }
          }
        }, 1000);
      }
    };

    const forceRemoveProtection = () => {
      if (mainEl && overlayEl) {
        mainEl.style.filter = 'none';
        mainEl.style.opacity = '1';
        mainEl.style.visibility = 'visible';
        overlayEl.style.opacity = '0';
        overlayEl.style.visibility = 'hidden';
        overlayEl.style.pointerEvents = 'none';
      }
    };

    const removeProtection = () => {
      // Only remove if penalty is over
      if (penaltySeconds <= 0) {
        forceRemoveProtection();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'PrintScreen' ||
        (e.ctrlKey && e.key === 'p') ||
        (e.metaKey && e.shiftKey) || 
        (e.altKey && e.key === 'PrintScreen')
      ) {
        e.preventDefault();
        triggerProtection(true);
      }
    };

    const handleBlur = () => triggerProtection(true);
    const handleFocus = () => removeProtection();

    const handleVisibilityChange = () => {
      if (document.hidden) triggerProtection(true);
      else removeProtection();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    // Fallbacks to guarantee unblur if OS fails to send focus event after snipping
    window.addEventListener('pointerdown', handleFocus);
    window.addEventListener('click', handleFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Also trigger on contextmenu just in case
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('pointerdown', handleFocus);
      window.removeEventListener('click', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <LenisProvider>
      <GalleryProvider>
        {/* Global styles to prevent screenshots and dragging */}
        <style jsx global>{`
          .anti-screenshot-img {
            -webkit-user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
          }
          .anti-screenshot-img img {
            pointer-events: none;
          }
        `}</style>
        
        {/* Protection Overlay */}
        <div 
          id="gallery-protection"
          className={`fixed inset-0 z-[99999] bg-[#050505] text-[#F6F2EA] flex items-center justify-center transition-opacity duration-75 pointer-events-none opacity-0`}
        >
          <div className="text-center">
            <h2 className="text-2xl font-primary uppercase tracking-widest mb-4 text-[#C8A96A]">Security Notice</h2>
            <p className="font-secondary text-lg">Screenshots and recordings are strictly restricted in the Gallery.</p>
            <p className="font-primary mt-6 text-xl">Please wait <span id="gallery-countdown" className="text-[#C8A96A] font-bold">10</span> seconds to return.</p>
          </div>
        </div>

        <main 
          id="gallery-main"
          className={`w-full bg-[#050505] text-[#F6F2EA] min-h-screen relative selection:bg-[#C8A96A] selection:text-[#050505] anti-screenshot-img transition-all duration-75 blur-0 opacity-100`}
          onContextMenu={(e) => e.preventDefault()} // Disable right-click globally on this page
        >
          
          {/* Modal Overlay */}
          <StoriesBehindTheFrame />

          {/* 1. THE ARCHIVE */}
          <SectionArchiveHero />

          {/* 2. THE BEGINNING */}
          <SectionTheBeginning />

          {/* 3. THEN VS NOW */}
          <SectionThenVsNow />

          {/* 4. HALL OF MOMENTS */}
          <SectionHallOfMoments />

          {/* 5. MODERN ACC */}
          <SectionModernACC />

          {/* 6. RECENT MOMENTS (Dynamic Uncropped Masonry) */}
          <SectionRecentMoments />

        </main>
      </GalleryProvider>
    </LenisProvider>
  );
}
