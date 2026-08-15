'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Institution',
    items: [
      { label: 'About ACC', href: '/about' },
      { label: 'Founder', href: '/founder' },
      { label: 'Administration', href: '/administration' },
      { label: 'Tributes', href: '/tributes' },
      { label: 'Coaches', href: '/coaches' },
      { label: 'Facilities', href: '/facilities' },
      { label: 'Achievements', href: '/achievements' },
      { label: 'Honoured Guests', href: '/honoured-guests' },
      { label: 'Foundation Day', href: '/premier-relay' },
      { label: 'Athletes', href: '/athletes' },
      { label: 'Sponsors', href: '/sponsors' },
    ],
  },
  {
    label: 'Training',
    items: [
      { label: 'Methodology & Programmes', href: '/training/methodology' },
      { label: 'Competition Calendar', href: '/training/calendar' },
    ],
  },
  { label: 'Media', href: '/media' },
  { label: 'Gallery', href: '/gallery' },
  {
    label: 'Connect',
    items: [
      { label: 'Admissions', href: '/admissions' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

// Easing for ultra-smooth premium feel (Apple-like)
const transitionConfig = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

export default function Navigation({ notices = [] }: { notices?: { id: string; publishDate: string }[] }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [unreadCount, setUnreadCount] = useState(0);
  const lastEnterTime = useRef<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    const lastReadDateStr = localStorage.getItem('lastReadNoticeDate');
    const lastReadDate = lastReadDateStr ? new Date(lastReadDateStr) : new Date(0);
    const unread = notices.filter(n => new Date(n.publishDate) > lastReadDate).length;
    setUnreadCount(unread);
  }, [notices]);

  useEffect(() => {
    if (pathname === '/notices') {
      localStorage.setItem('lastReadNoticeDate', new Date().toISOString());
      setUnreadCount(0);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (item: any) => {
    if (item.href) return pathname === item.href;
    if (item.items) return item.items.some((sub: any) => pathname === sub.href);
    return false;
  };

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ ...transitionConfig, duration: 1, delay: 0.1 }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-out border-b ${
          isScrolled || mobileMenuOpen
            ? 'bg-chalk-white/95 backdrop-blur-2xl backdrop-saturate-[1.8] border-carbon-black/10 shadow-[0_10px_40px_rgba(0,0,0,0.1)] h-[50px] overflow-visible'
            : 'bg-transparent border-transparent py-3 md:py-0 shadow-none overflow-visible'
        }`}
      >
        <div className={`max-w-[1600px] mx-auto flex justify-between items-center relative w-full h-full transition-all duration-700 ease-out ${
          isScrolled ? 'px-4 md:px-6' : 'px-6 md:px-8'
        }`}>
          <Link href="/" className={`group z-50 absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0 flex items-center transition-transform duration-700 ease-out ${!isScrolled ? 'md:-translate-y-6' : 'md:translate-y-0'}`}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex items-center justify-center transition-all duration-700 ease-out ${
                isScrolled ? 'w-[60px] h-[40px] md:w-[65px] md:h-[45px] lg:w-[75px] lg:h-[50px] xl:w-[86px] xl:h-[60px]' : 'w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28'
              }`}
            >
              <Image
                src="/images/logo.png"
                alt="ACC Logo"
                fill
                className={`object-contain transition-all duration-700 ease-out ${
                  !isScrolled ? 'brightness-0 invert' : ''
                }`}
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav 
            className={`hidden md:flex items-center justify-center gap-2 md:gap-3 lg:gap-5 xl:gap-8 relative transition-transform duration-700 ease-out ${!isScrolled ? '-translate-y-6' : 'translate-y-0'}`}
            onPointerLeave={(e) => {
              if (e.pointerType !== 'mouse') return;
              setHoveredItem(null);
              setActiveDropdown(null);
            }}
          >
            {NAV_ITEMS.map((item, index) => (
              <motion.div 
                key={item.label} 
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transitionConfig, delay: 0.2 + index * 0.05 }}
                onPointerEnter={(e) => {
                  if (e.pointerType !== 'mouse') return;
                  setHoveredItem(item.label);
                  if (item.items) setActiveDropdown(item.label);
                  else setActiveDropdown(null);
                }}
              >
                <Link
                  href={item.href || '#'}
                  onClick={(e) => { 
                    if (!item.href || item.items) {
                      e.preventDefault();
                      if (item.items) {
                        // Normal click toggle
                        setActiveDropdown(activeDropdown === item.label ? null : item.label);
                        setHoveredItem(item.label);
                      }
                    }
                  }}
                  className="group flex items-center gap-1 pb-2 relative"
                >
                  <motion.span 
                    className={`relative z-10 text-[8px] md:text-[9px] lg:text-[11px] xl:text-sm uppercase tracking-[0.1em] lg:tracking-[0.15em] font-extrabold transition-colors duration-500 block
                      ${!isScrolled && !mobileMenuOpen 
                        ? (isActive(item) || hoveredItem === item.label ? 'text-chalk-white' : 'text-chalk-white/70 group-hover:text-chalk-white')
                        : (isActive(item) || hoveredItem === item.label ? 'text-track-red' : 'text-track-red/70 group-hover:text-track-red')}`}
                  >
                    {item.label}
                  </motion.span>
                  
                  {item.items && (
                    <motion.svg 
                      animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                      transition={transitionConfig}
                      className={`relative z-10 w-3 h-3 transition-colors duration-500 ${!isScrolled && !mobileMenuOpen ? 'text-chalk-white' : 'text-track-red'} ${isActive(item) || hoveredItem === item.label ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  )}

                  {/* The Magic Hover Indicator that follows the mouse */}
                  {(hoveredItem === item.label || (hoveredItem === null && isActive(item))) && (
                    <motion.div 
                      layoutId="magicHoverLine"
                      className="absolute -bottom-1 -left-2 -right-2 h-[2px] bg-track-red shadow-[0_0_15px_rgba(255,0,0,0.8)]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  
                  {/* Subtle Background Pill for Hovered Item */}
                  {hoveredItem === item.label && (
                    <motion.div
                      layoutId="magicHoverBg"
                      className="absolute -inset-x-3 -inset-y-2 bg-chalk-white/5 rounded-md pointer-events-none"
                      initial={false}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.items && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: 10, scale: 0.98, filter: 'blur(5px)' }}
                        transition={transitionConfig}
                        className={`absolute top-full left-0 py-4 bg-chalk-white/95 backdrop-blur-2xl backdrop-saturate-[1.8] border border-carbon-black/10 shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden ${item.items.length > 5 ? 'w-[480px] grid grid-flow-col gap-x-4' : 'w-64 flex flex-col'}`}
                        style={item.items.length > 5 ? { gridTemplateRows: `repeat(${Math.ceil(item.items.length / 2)}, minmax(0, 1fr))` } : undefined}
                      >
                        {item.items.map((subItem, i) => (
                          <motion.div
                            key={subItem.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ ...transitionConfig, delay: i * 0.04 }}
                          >
                            <Link
                              href={subItem.href}
                              className="relative px-6 py-4 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-carbon-black/70 hover:text-carbon-black hover:bg-carbon-black/5 transition-colors group flex items-center justify-between"
                            >
                              <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300 ease-out">
                                {subItem.label}
                              </span>
                              
                              <motion.span 
                                className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-track-red"
                              >
                                →
                              </motion.span>

                              {pathname === subItem.href && (
                                <motion.div 
                                  layoutId="dropdownIndicator"
                                  className="absolute left-0 top-0 w-[3px] h-full bg-track-red shadow-[2px_0_10px_rgba(255,0,0,0.5)]"
                                  transition={transitionConfig}
                                />
                              )}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Right Action Items (Bell + Mobile Menu Toggle) */}
          <div className={`flex items-center justify-between md:justify-end gap-2 md:gap-4 z-50 w-full md:w-auto transition-transform duration-700 ease-out ${!isScrolled ? 'md:-translate-y-6' : 'md:translate-y-0'}`}>
            {/* Bell Notification Icon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/notices" className={`relative p-2 flex items-center justify-center transition-colors duration-500 ${!isScrolled && !mobileMenuOpen ? 'text-chalk-white hover:text-chalk-white/70' : 'text-track-red hover:text-track-red/70'}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" fill="currentColor" />
                </svg>
                <AnimatePresence>
                  {unreadCount > 0 && (
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute top-1 right-1 w-4 h-4 bg-track-red rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(255,0,0,0.8)]"
                    >
                      <span className="text-[9px] font-bold text-chalk-white font-primary">{unreadCount > 9 ? '9+' : unreadCount}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex flex-col justify-center items-end p-2 z-[60]"
            >
              <span className={`h-[2px] block transition-all duration-300 ease-out origin-center ${!isScrolled && !mobileMenuOpen ? 'bg-chalk-white' : 'bg-track-red'} ${mobileMenuOpen ? 'w-6 rotate-45 absolute top-1/2 -translate-y-1/2 right-2' : 'w-6 mb-1.5'}`} />
              <span className={`h-[2px] block transition-all duration-300 ease-out origin-center ${!isScrolled && !mobileMenuOpen ? 'bg-chalk-white' : 'bg-track-red'} ${mobileMenuOpen ? 'w-6 -rotate-45 absolute top-1/2 -translate-y-1/2 right-2' : 'w-4'}`} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Off-Canvas Menu Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-[105] bg-black/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Mobile Off-Canvas Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[320px] z-[110] bg-carbon-black border-r border-white/10 flex flex-col overflow-y-auto shadow-2xl"
          >
            {/* Sidebar Header with Logo and Close Button */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image src="/images/logo.png" alt="ACC Logo" fill className="object-contain brightness-0 invert" />
                </div>
                <span className="text-2xl font-primary font-black tracking-widest uppercase text-chalk-white">ACC</span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="text-chalk-white/50 hover:text-white p-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-6 p-4 md:p-6 pb-12 flex-1">
              {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: "easeOut" }}
                    className="flex flex-col gap-3"
                  >
                    {item.items ? (
                      <div className="flex flex-col gap-3">
                        <div 
                          className="flex items-center justify-between cursor-pointer"
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        >
                          <span className="text-xl font-primary uppercase tracking-wide text-chalk-white pr-4 active:scale-[0.98] active:opacity-90 transition-all duration-200">
                            {item.label}
                          </span>
                          <motion.svg 
                            animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-chalk-white/50"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </motion.svg>
                        </div>
                        
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-4 pt-2 pb-2 border-l border-track-red/30 pl-4 ml-1">
                                {item.items.map((subItem) => (
                                  <Link
                                    key={subItem.label}
                                    href={subItem.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-sm font-light tracking-wide block break-words active:scale-[0.98] active:opacity-90 transition-all duration-200 py-1 ${pathname === subItem.href ? 'text-track-red font-medium' : 'text-chalk-white/70'}`}
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                        <Link
                          href={item.href!}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`text-xl font-primary uppercase tracking-wide block break-words active:scale-[0.98] active:opacity-90 transition-all duration-200 ${
                            isActive(item) ? 'text-chalk-white' : 'text-chalk-white/80'
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                  </motion.div>
                ))}
            </nav>
            
            <div className="p-4 md:p-6 border-t border-white/10 mt-auto">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-[10px] font-medium text-chalk-white/30 tracking-[0.3em] uppercase text-center"
              >
                Est. 1969 — Sodepur
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
