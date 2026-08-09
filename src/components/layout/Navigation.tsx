'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Institution',
    href: '/institution',
    items: [
      { label: 'About ACC', href: '/about' },
      { label: 'Founder', href: '/founder' },
      { label: 'Administration', href: '/administration' },
      { label: 'Facilities', href: '/campus' },
      { label: 'Coaches', href: '/coaches' },
      { label: 'Achievements', href: '/achievements' },
      { label: 'Sponsors', href: '/sponsors' },
      { label: 'Honoured Guests', href: '/honoured-guests' },
      { label: 'Tributes', href: '/tributes' },
      { label: 'Foundation Day', href: '/premier-relay' },
      { label: 'Athletes', href: '/athletes' },
    ],
  },
  {
    label: 'Training',
    href: '/training',
    items: [
      { label: 'Programmes', href: '/programmes' },
      { label: 'Performance', href: '/performance' },
      { label: 'Competition Calendar', href: '/training/calendar' },
    ],
  },
  { label: 'Media', href: '/media' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Admissions', href: '/admissions' },
];

// Easing for ultra-smooth premium feel (Apple-like)
const transitionConfig = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

export default function Navigation({ notices = [] }: { notices?: { id: string; publishDate: string }[] }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [unreadCount, setUnreadCount] = useState(0);
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
        transition={{ ...transitionConfig, duration: 1, delay: 2.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-out border-b ${
          isScrolled || mobileMenuOpen
            ? 'bg-chalk-white/95 backdrop-blur-2xl backdrop-saturate-[1.8] border-carbon-black/10 shadow-[0_10px_40px_rgba(0,0,0,0.1)] py-2'
            : 'bg-transparent border-transparent py-4 shadow-none'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center relative w-full">
          {/* Logo */}
          <Link href="/" className="group z-50 absolute left-1/2 -translate-x-1/2 lg:relative lg:left-auto lg:transform-none flex items-center h-full pt-1">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
            >
              <div 
                className={`w-full h-full transition-colors duration-700 ease-out ${!isScrolled ? 'bg-chalk-white' : 'bg-[#C8322B]'}`}
                style={{
                  WebkitMaskImage: 'url(/images/logo.png)',
                  maskImage: 'url(/images/logo.png)',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                  transform: 'scale(1.75)',
                }}
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav 
            className="hidden lg:flex items-center gap-6 xl:gap-8 relative"
            onMouseLeave={() => {
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
                transition={{ ...transitionConfig, delay: 2.7 + index * 0.05 }}
                onMouseEnter={() => {
                  setHoveredItem(item.label);
                  if (item.items) setActiveDropdown(item.label);
                  else setActiveDropdown(null);
                }}
              >
                <Link
                  href={item.href || '#'}
                  className="group flex items-center gap-1 pb-2 relative"
                >
                  <motion.span 
                    className={`relative z-10 text-xs xl:text-sm uppercase tracking-[0.2em] font-extrabold transition-colors duration-500 block
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
                        className={`absolute top-full left-0 mt-6 py-4 bg-chalk-white/95 backdrop-blur-2xl backdrop-saturate-[1.8] border border-carbon-black/10 shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden ${item.items.length > 5 ? 'w-[480px] grid grid-flow-col gap-x-4' : 'w-64 flex flex-col'}`}
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
                              className="relative px-6 py-4 text-[10px] xl:text-xs uppercase tracking-[0.2em] font-medium text-carbon-black/70 hover:text-carbon-black hover:bg-carbon-black/5 transition-colors group flex items-center justify-between"
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
          <div className="flex items-center justify-between lg:justify-end gap-4 z-50 w-full lg:w-auto">
            {/* Bell Notification Icon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
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
              transition={{ delay: 2.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-end p-2 z-[60]"
            >
              <span className={`h-[2px] block transition-all duration-300 ease-out origin-center ${!isScrolled && !mobileMenuOpen ? 'bg-chalk-white' : 'bg-track-red'} ${mobileMenuOpen ? 'w-6 rotate-45 absolute top-1/2 -translate-y-1/2 right-2' : 'w-6 mb-1.5'}`} />
              <span className={`h-[2px] block transition-all duration-300 ease-out origin-center ${!isScrolled && !mobileMenuOpen ? 'bg-chalk-white' : 'bg-track-red'} ${mobileMenuOpen ? 'w-6 -rotate-45 absolute top-1/2 -translate-y-1/2 right-2' : 'w-4'}`} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Off-Canvas Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-carbon-black/95 backdrop-blur-2xl backdrop-saturate-[1.8] flex flex-col pt-32 pb-12 px-4 min-[360px]:px-6 overflow-y-auto pt-env-safe"
          >
            <nav className="flex flex-col gap-10 mt-4 pb-12">
              {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: "easeOut" }}
                    className="flex flex-col gap-4"
                  >
                    {item.items ? (
                      <div className="flex flex-col gap-4">
                        <div 
                          className="flex items-center justify-between cursor-pointer"
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        >
                          <span className="text-[clamp(1.5rem,8vw,3rem)] font-primary uppercase tracking-wide text-chalk-white break-words pr-4 active:scale-[0.98] active:opacity-90 transition-all duration-200">
                            {item.label}
                          </span>
                          <motion.svg 
                            animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-chalk-white/50"
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
                              <div className="flex flex-col gap-6 pt-4 pb-2 border-l-2 border-track-red/30 pl-6 ml-2">
                                {item.items.map((subItem) => (
                                  <Link
                                    key={subItem.label}
                                    href={subItem.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-[clamp(1rem,5vw,1.25rem)] font-light tracking-wide block break-words active:scale-[0.98] active:opacity-90 transition-all duration-200 py-1 ${pathname === subItem.href ? 'text-track-red font-medium' : 'text-chalk-white/70'}`}
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
                          className={`text-[clamp(1.5rem,8vw,3rem)] font-primary uppercase tracking-wide block break-words active:scale-[0.98] active:opacity-90 transition-all duration-200 ${
                            isActive(item) ? 'text-chalk-white' : 'text-chalk-white/80'
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                  </motion.div>
                ))}
            </nav>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-auto pt-16 text-[10px] font-medium text-chalk-white/30 tracking-[0.3em] uppercase text-center"
            >
              Est. 1969 — Sodepur
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
