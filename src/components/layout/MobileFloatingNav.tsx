'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, Bell, ChevronDown } from 'lucide-react';

interface MobileFloatingNavProps {
  noticesCount?: number;
}

const MENU_GROUPS = [
  {
    title: 'Explore',
    links: [
      { href: '/founder', label: 'Founder' },
      { href: '/honoured-guests', label: 'Honoured Guests' },
      { href: '/rudra-pratim', label: 'Successor' },
      { href: '/campus', label: 'Campus' },
      { href: '/community', label: 'Community' },
    ]
  },
  {
    title: 'Athletics',
    links: [
      { href: '/performance', label: 'Performance' },
      { href: '/programmes', label: 'Programmes' },
      { href: '/premier-relay', label: 'Premier Relay' },
    ]
  },
  {
    title: 'Institution',
    links: [
      { href: '/archive', label: 'Archive' },
      { href: '/memory', label: 'Memory' },
      { href: '/notices', label: 'Announcements' },
      { href: '/admissions', label: 'Admissions' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { href: '/search', label: 'Search' },
      { href: '/knowledge-centre', label: 'Knowledge Centre' },
    ]
  }
];

export default function MobileFloatingNav({ noticesCount = 0 }: MobileFloatingNavProps) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Accordion state - only one open at a time
  const [activeGroup, setActiveGroup] = useState<string | null>('Explore');

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset active group when menu closes
      setTimeout(() => setActiveGroup('Explore'), 300);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const [isInitialMount, setIsInitialMount] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialMount(false);
    }, 2600); // Wait for splash screen to finish
    return () => clearTimeout(timer);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isInitialMount) return; // Don't trigger scroll hide while still mounting
    
    const previous = scrollY.getPrevious() || 0;
    
    if (latest < 100) {
      setIsAtTop(true);
      setHidden(false);
    } else {
      setIsAtTop(false);
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else if (latest < previous) {
        setHidden(false);
      }
    }
  });

  const toggleGroup = (groupTitle: string) => {
    setActiveGroup(activeGroup === groupTitle ? null : groupTitle);
  };

  return (
    <>
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ 
          y: isInitialMount ? "-100%" : (hidden && !menuOpen ? "-100%" : "0%"), 
          opacity: isInitialMount ? 0 : (hidden && !menuOpen ? 0 : 1)
        }}
        transition={{ 
          duration: isInitialMount ? 0 : 0.4, 
          delay: isInitialMount ? 0 : (hidden ? 0 : 0.1),
          ease: "easeInOut" 
        }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pb-2 flex justify-center pointer-events-none"
      >
        <div 
          className={`pointer-events-auto flex items-center justify-between transition-all duration-300 ${
            isAtTop && !menuOpen
              ? 'w-full px-4 py-2 bg-transparent text-chalk-white shadow-none border-transparent'
              : 'w-full max-w-sm rounded-full px-6 py-2 bg-chalk-white text-carbon-black shadow-sm border border-carbon-black/10'
          }`}
        >
          {/* Logo Mark */}
          <Link href="/" onClick={() => setMenuOpen(false)} className="relative w-10 h-10 flex items-center justify-center">
            <div 
              className={`w-full h-full ${isAtTop && !menuOpen ? 'bg-chalk-white' : 'bg-[#C8322B]'}`}
              style={{
                WebkitMaskImage: 'url(/images/logo.png)',
                maskImage: 'url(/images/logo.png)',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
                transform: 'scale(1.6)',
              }}
            />
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {noticesCount > 0 && (
              <Link href="/notices" onClick={() => setMenuOpen(false)}>
                <div className="relative">
                  <Bell className="w-5 h-5" />
                  <div className={`absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#C8322B] rounded-full border-2 ${isAtTop && !menuOpen ? 'border-carbon-black' : 'border-[#F4F4F0]'}`} />
                </div>
              </Link>
            )}

            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1 -mr-1"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Institutional Directory Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#F4F4F0] text-[#0A0A0A] overflow-y-auto pt-24 pb-safe px-6"
          >
            <div className="max-w-sm mx-auto flex flex-col pb-12">
              
              {/* Standalone Home */}
              <div className="mb-6">
                <Link 
                  href="/" 
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 text-2xl font-primary uppercase tracking-tight text-carbon-black active:opacity-70 transition-opacity py-2"
                >
                  ⌂ Home
                </Link>
              </div>

              {/* Accordion Groups */}
              <div className="flex flex-col gap-2 mb-10">
                {MENU_GROUPS.map((group) => {
                  const isOpen = activeGroup === group.title;
                  return (
                    <div key={group.title} className="flex flex-col">
                      <button 
                        onClick={() => toggleGroup(group.title)}
                        className="flex items-center gap-2 py-3 text-2xl font-primary uppercase tracking-tight text-carbon-black text-left active:opacity-70 transition-opacity"
                      >
                        {group.title}
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                          <ChevronDown className="w-5 h-5 opacity-50" />
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-4 py-2 pl-4 border-l-2 border-carbon-black/10 ml-2 mb-4">
                              {group.links.map((link, idx) => (
                                <motion.div
                                  key={link.href}
                                  initial={{ opacity: 0, y: 8 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.2, delay: idx * 0.05, ease: "easeOut" }}
                                >
                                  <Link 
                                    href={link.href} 
                                    onClick={() => setMenuOpen(false)}
                                    className="block text-lg font-primary uppercase tracking-tight text-carbon-black/70 active:text-carbon-black"
                                  >
                                    {link.label}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <hr className="border-carbon-black/10 mb-8" />

              {/* Documentary Section (Premium Ticket) */}
              <div>
                <Link 
                  href="/experience"
                  onClick={() => setMenuOpen(false)}
                  className="block relative overflow-hidden rounded-2xl border border-track-red/30 p-6 bg-white hover:border-track-red active:scale-[0.98] transition-all duration-200 group"
                >
                  <span className="block text-[10px] tracking-[0.2em] uppercase font-bold text-track-red mb-2">
                    Documentary
                  </span>
                  <span className="block text-2xl font-primary uppercase tracking-tight text-carbon-black">
                    Experience ACC
                  </span>
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
