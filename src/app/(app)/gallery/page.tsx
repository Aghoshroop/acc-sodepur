'use client';

import { useEffect } from 'react';
import { GalleryProvider, useGallery } from './context/GalleryContext';
import StoriesBehindTheFrame from './components/StoriesBehindTheFrame';
import { LenisProvider, useLenis } from '@/components/providers/LenisProvider';
import AlbumGrid from './components/AlbumGrid';
import ExpandedAlbum from './components/ExpandedAlbum';
import SectionArchiveHero from './components/SectionArchiveHero';
import SectionTheBeginning from './components/SectionTheBeginning';
import SectionThenVsNow from './components/SectionThenVsNow';
import { AnimatePresence, motion } from 'framer-motion';

function GalleryContent() {
  const { activeAlbum } = useGallery();
  const { lenis } = useLenis();

  return (
    <>
      <StoriesBehindTheFrame />
      <AnimatePresence 
        mode="wait"
        onExitComplete={() => {
          window.scrollTo(0, 0);
          if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
        }}
      >
        {activeAlbum ? (
          <ExpandedAlbum key="expanded" albumId={activeAlbum} />
        ) : (
          <motion.div 
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SectionArchiveHero />
            <SectionTheBeginning />
            <SectionThenVsNow />
            <AlbumGrid />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function GalleryPage() {

  useEffect(() => {
    const mainEl = document.getElementById('gallery-main');
    const overlayEl = document.getElementById('gallery-protection');

    const showOverlay = () => {
      if (!mainEl || !overlayEl) return;
      mainEl.style.opacity = '0';
      mainEl.style.visibility = 'hidden';
      overlayEl.style.opacity = '1';
      overlayEl.style.visibility = 'visible';
      overlayEl.style.pointerEvents = 'auto';
    };

    // Reveal after short delay — any screenshot taken during that window captures black
    const hideOverlay = (delay = 400) => {
      setTimeout(() => {
        if (!mainEl || !overlayEl) return;
        mainEl.style.opacity = '1';
        mainEl.style.visibility = 'visible';
        overlayEl.style.opacity = '0';
        overlayEl.style.visibility = 'hidden';
        overlayEl.style.pointerEvents = 'none';
      }, delay);
    };

    // --- Keyboard screenshot shortcuts ---
    const handleKeyDown = (e: KeyboardEvent) => {
      const isScreenshotKey =
        e.key === 'PrintScreen' ||
        (e.altKey && e.key === 'PrintScreen') ||         // Alt+PrtSc
        (e.metaKey && e.shiftKey && ['3','4','5'].includes(e.key)) || // Mac Cmd+Shift+3/4/5
        (e.ctrlKey && e.shiftKey && e.key === 'S') ||   // Windows snip shortcut variant
        (e.key === 'F12');                               // DevTools (can screenshot)

      if (isScreenshotKey) {
        e.preventDefault();
        showOverlay();
        hideOverlay(2000); // Stay black for 2s after key press
      }

      // Block Ctrl+P (print to PDF = screenshot)
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        showOverlay();
        hideOverlay(1500);
      }
    };

    // --- Focus loss = possible screenshot tool ---
    const handleBlur = () => showOverlay();
    const handleFocus = () => hideOverlay(500); // Short delay before revealing

    // --- Tab switch / screen recorder via visibility API ---
    const handleVisibility = () => {
      if (document.hidden) {
        showOverlay();
      } else {
        hideOverlay(500);
      }
    };

    // --- Tap overlay to dismiss ---
    const handleOverlayTap = () => hideOverlay(0);

    // --- Block right-click everywhere on page ---
    const blockContextMenu = (e: MouseEvent) => e.preventDefault();

    overlayEl?.addEventListener('click', handleOverlayTap);
    overlayEl?.addEventListener('touchend', handleOverlayTap);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleVisibility);
    document.addEventListener('contextmenu', blockContextMenu);

    return () => {
      overlayEl?.removeEventListener('click', handleOverlayTap);
      overlayEl?.removeEventListener('touchend', handleOverlayTap);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibility);
      document.removeEventListener('contextmenu', blockContextMenu);
    };
  }, []);

  return (
    <LenisProvider>
      <GalleryProvider>
        {/* CSS: block drag, select, touch-callout on all images */}
        <style jsx global>{`
          #gallery-main img {
            -webkit-user-drag: none;
            -webkit-touch-callout: none;
            user-select: none;
            pointer-events: none;
          }
          #gallery-main {
            user-select: none;
            -webkit-user-select: none;
          }
          @media print {
            #gallery-main { display: none !important; }
            #gallery-protection { display: flex !important; opacity: 1 !important; }
          }
        `}</style>

        {/* Protection Overlay — tap/click anywhere to dismiss */}
        <div
          id="gallery-protection"
          style={{ transition: 'opacity 0.1s' }}
          className="fixed inset-0 z-[99999] bg-[#050505] text-[#F6F2EA] flex flex-col items-center justify-center opacity-0 pointer-events-none select-none"
        >
          {/* ACC Logo mark */}
          <div className="w-16 h-16 border-2 border-[#C8A96A] rounded-full flex items-center justify-center mb-8">
            <span className="text-[#C8A96A] font-primary text-xl">ACC</span>
          </div>
          <h2 className="text-xl md:text-2xl font-primary uppercase tracking-[0.3em] text-[#C8A96A] mb-4">
            Protected Content
          </h2>
          <p className="font-light tracking-wide text-[#F6F2EA]/60 text-sm md:text-base text-center max-w-xs px-6">
            Screenshots and recordings are restricted in the ACC Gallery.
          </p>
          <p className="mt-10 text-[#F6F2EA]/30 text-xs tracking-widest uppercase">
            Tap anywhere to return
          </p>
        </div>

        <main
          id="gallery-main"
          style={{ transition: 'opacity 0.1s' }}
          className="w-full bg-[#050505] text-[#F6F2EA] min-h-screen relative selection:bg-[#C8A96A] selection:text-[#050505]"
          onContextMenu={(e) => e.preventDefault()}
        >
          <GalleryContent />
        </main>
      </GalleryProvider>
    </LenisProvider>
  );
}
