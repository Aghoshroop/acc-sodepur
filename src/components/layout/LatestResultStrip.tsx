'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Medal, 
  Flame, 
  ArrowRight, 
  FileText, 
  Quote, 
  X, 
  MapPin, 
  Calendar 
} from 'lucide-react';
import { CompetitionResult } from '@/features/results/types';

interface LatestResultStripProps {
  results?: CompetitionResult[];
  result?: CompetitionResult | null;
  isScrolled?: boolean;
}

export default function LatestResultStrip({ results, result, isScrolled }: LatestResultStripProps) {
  const [selectedEditorial, setSelectedEditorial] = useState<CompetitionResult | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedEditorial(null);
      }
    };
    if (selectedEditorial) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEditorial]);

  // Active results passed from getTopNavResults (either explicitly chosen or newest active fallback)
  const rawList: CompetitionResult[] = [];
  if (results && results.length > 0) {
    rawList.push(...results);
  } else if (result) {
    rawList.push(result);
  }

  const activeResults = rawList.filter(
    (item) => item && item.isActive !== false
  );

  // If there are no achievements to broadcast, hide the strip
  if (activeResults.length === 0) {
    return null;
  }

  // Build sequential badges for all visible achievements
  const badgeGroups = activeResults.map((item) => {
    const isNational = item.category === 'national' || item.category === 'all_india';
    const m = item.metrics || { gold: 0, silver: 0, bronze: 0, totalMedals: 0, meetRecords: 0, qualifiedAthletes: 0 };
    
    const badges: {
      icon: any;
      label: string;
      value: string;
      textColor: string;
      iconColor: string;
      glow: string;
      border: string;
      bg: string;
      isEditorial?: boolean;
    }[] = [
      {
        icon: Trophy,
        label: isNational ? 'NATIONAL' : 'STATE',
        value: `${item.championship} (${item.year})`,
        textColor: 'text-chalk-white',
        iconColor: 'text-track-red',
        glow: 'shadow-[0_0_12px_rgba(200,50,43,0.35)]',
        border: 'border-track-red/60',
        bg: 'bg-black/80'
      }
    ];

    // Summary / Editorial Description Badge
    if (item.description && item.description.trim().length > 0) {
      badges.push({
        icon: FileText,
        label: 'EDITORIAL SUMMARY',
        value: item.description.trim(),
        textColor: 'text-chalk-white',
        iconColor: 'text-track-red',
        glow: 'shadow-[0_0_16px_rgba(200,50,43,0.35)]',
        border: 'border-white/25 hover:border-track-red/70',
        bg: 'bg-black/90 backdrop-blur-md',
        isEditorial: true,
      });
    }

    if ((m.gold || 0) > 0) {
      badges.push({
        icon: Medal,
        label: 'GOLD',
        value: `${m.gold} GOLDS`,
        textColor: 'text-white',
        iconColor: 'text-white',
        glow: 'shadow-[0_0_16px_rgba(200,50,43,0.7)]',
        border: 'border-white/40',
        bg: 'bg-track-red'
      });
    }

    if ((m.silver || 0) > 0) {
      badges.push({
        icon: Medal,
        label: 'SILVER',
        value: `${m.silver} SILVERS`,
        textColor: 'text-carbon-black',
        iconColor: 'text-carbon-black',
        glow: 'shadow-[0_0_14px_rgba(255,255,255,0.6)]',
        border: 'border-white',
        bg: 'bg-chalk-white'
      });
    }

    if ((m.bronze || 0) > 0) {
      badges.push({
        icon: Medal,
        label: 'BRONZE',
        value: `${m.bronze} BRONZES`,
        textColor: 'text-chalk-white',
        iconColor: 'text-track-red',
        glow: 'shadow-[0_0_10px_rgba(255,255,255,0.15)]',
        border: 'border-white/30',
        bg: 'bg-carbon-black'
      });
    }

    if ((m.meetRecords || 0) > 0) {
      badges.push({
        icon: Flame,
        label: 'RECORDS',
        value: `${m.meetRecords} MEET RECORDS`,
        textColor: 'text-carbon-black',
        iconColor: 'text-track-red',
        glow: 'shadow-[0_0_15px_rgba(255,255,255,0.5)]',
        border: 'border-track-red',
        bg: 'bg-chalk-white'
      });
    }

    // Include top 2 athlete highlights if available
    if (item.athletes && item.athletes.length > 0) {
      item.athletes.slice(0, 2).forEach(ath => {
        badges.push({
          icon: Medal,
          label: 'ATHLETE',
          value: `${ath.athleteName} (${ath.event}) · ${ath.position.toUpperCase()}`,
          textColor: 'text-chalk-white',
          iconColor: 'text-track-red',
          glow: 'shadow-[0_0_10px_rgba(255,255,255,0.2)]',
          border: 'border-white/20',
          bg: 'bg-white/10'
        });
      });
    }

    return { item, badges };
  });

  const featured = activeResults[0];

  const renderBadge = (badge: any, group: { item: CompetitionResult; badges: any[] }, keyPrefix: string, bIdx: number) => {
    const Icon = badge.icon;
    if (badge.isEditorial) {
      return (
        <div 
          key={`${keyPrefix}-${bIdx}`} 
          onClick={() => setSelectedEditorial(group.item)}
          className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-0.5 md:px-3.5 md:py-1 rounded-full border border-white/30 hover:border-track-red/80 active:border-track-red bg-gradient-to-r from-black/95 via-zinc-900/95 to-black/95 shadow-[0_0_15px_rgba(200,50,43,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer group/editorial"
          title="Click to view full Editorial & Camp Performance Summary"
        >
          <div className="flex items-center gap-1 md:gap-1.5 shrink-0">
            <FileText size={12} className="text-track-red group-hover/editorial:scale-110 transition-transform" />
            <span className="text-[9.5px] md:text-[10px] font-black uppercase tracking-widest text-track-red border-r border-white/20 pr-1.5">
              REPORT
            </span>
          </div>
          <span className="text-[11px] md:text-[11.5px] font-medium tracking-normal text-chalk-white normal-case italic">
            &ldquo;{badge.value}&rdquo;
          </span>
          <span className="text-[8.5px] font-bold uppercase tracking-wider text-track-red bg-track-red/10 px-1.5 py-0.5 rounded border border-track-red/30 transition-colors ml-1 inline-flex items-center gap-0.5">
            <span>Read</span>
            <ArrowRight size={9} />
          </span>
        </div>
      );
    }

    return (
      <div 
        key={`${keyPrefix}-${bIdx}`} 
        className={`inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full border ${badge.border} ${badge.bg} ${badge.glow} transition-transform duration-300 hover:scale-105 active:scale-95`}
      >
        <Icon size={12} className={badge.iconColor} />
        <span className={`text-[10.5px] md:text-[11px] font-black uppercase tracking-wider ${badge.textColor}`}>
          {badge.value}
        </span>
      </div>
    );
  };

  return (
    <>
      <div className={`w-full relative z-[101] overflow-hidden select-none transition-all duration-500 ${
        isScrolled 
          ? 'bg-carbon-black/98 border-b border-white/10 backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.8)]' 
          : 'bg-carbon-black border-b border-white/10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.9)]'
      }`}>
        {/* Top red & white laser glow line */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-track-red via-chalk-white/80 via-track-red to-transparent opacity-90" />
        
        {/* Dynamic light sweep shimmer effect */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-25">
          <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-25 animate-light-sweep" />
        </div>

        {/* ======================================================== */}
        {/* 1. DESKTOP SINGLE-ROW LUXURY BAR (sm:flex)                */}
        {/* ======================================================== */}
        <div className={`hidden sm:flex max-w-[1700px] mx-auto px-4 md:px-6 items-center justify-between gap-3 relative transition-all duration-500 ${
          isScrolled ? 'py-1 md:py-1.5' : 'py-1.5 md:py-2'
        }`}>
          {/* Left Anchor: High-contrast Live Result Beacon & Quick Editorial Trigger */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0 z-20">
            <div className="relative flex items-center justify-center w-3 h-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-track-red opacity-85" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-chalk-white shadow-[0_0_10px_rgba(255,255,255,1)]" />
            </div>

            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="font-primary font-black uppercase tracking-[0.2em] md:tracking-[0.25em] text-[9px] md:text-[11px] text-chalk-white">
                LATEST RESULTS
              </span>
              <span className="text-white/30 text-[10px]">/</span>
              <span className="hidden lg:inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-track-red">
                <Trophy size={11} className="text-track-red" />
                {activeResults.length > 1 
                  ? `${activeResults.length} MEETS BROADCASTING` 
                  : `${featured.championship.slice(0, 24)}...`}
              </span>
              {featured?.description && (
                <button
                  onClick={() => setSelectedEditorial(featured)}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-track-red/40 border border-white/20 hover:border-track-red text-[8.5px] md:text-[9px] font-black uppercase tracking-widest text-chalk-white transition-all cursor-pointer shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                  title="Open Summary / Editorial Description"
                >
                  <FileText size={10} className="text-track-red" />
                  <span>Editorial</span>
                </button>
              )}
            </div>
          </div>

          {/* Center: Infinite Red, Black & White Marquee Ticker */}
          <div className="flex-1 overflow-hidden relative mx-3 md:mx-4 group">
            {/* Fading gradient edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-carbon-black via-carbon-black/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-carbon-black via-carbon-black/90 to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee-infinite hover:[animation-play-state:paused] flex items-center gap-5 md:gap-7 whitespace-nowrap cursor-default py-0.5">
              {/* Sequence 1 */}
              {badgeGroups.map((group, gIdx) => (
                <React.Fragment key={`g1-${gIdx}`}>
                  {group.badges.map((badge, bIdx) => renderBadge(badge, group, `b1-${gIdx}`, bIdx))}
                  <span className="text-track-red text-xs font-black px-2 tracking-widest">///</span>
                </React.Fragment>
              ))}

              {/* Sequence 2 for seamless infinite looping */}
              {badgeGroups.map((group, gIdx) => (
                <React.Fragment key={`g2-${gIdx}`}>
                  {group.badges.map((badge, bIdx) => renderBadge(badge, group, `b2-${gIdx}`, bIdx))}
                  <span className="text-track-red text-xs font-black px-2 tracking-widest">///</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Anchor: Call-to-Action Link to New Results Page */}
          <div className="shrink-0 z-20 flex items-center">
            <Link 
              href="/results" 
              className="group inline-flex items-center gap-1 md:gap-1.5 px-3 md:px-3.5 py-0.5 md:py-1 rounded-full bg-track-red hover:bg-chalk-white border border-white/20 hover:border-white transition-all duration-300 shadow-[0_0_12px_rgba(200,50,43,0.5)]"
            >
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white group-hover:text-carbon-black transition-colors">
                <span>Full Leaderboard</span>
              </span>
              <ArrowRight size={11} className="text-white group-hover:text-carbon-black group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. MOBILE DEDICATED FULL-WIDTH EXPERIENCE (sm:hidden)     */}
        {/* ======================================================== */}
        <div className="sm:hidden flex flex-col w-full divide-y divide-white/10">
          {/* Mobile Row 1: Controller & Action Header */}
          <div className="flex items-center justify-between px-3 py-1 bg-black/50 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="relative flex items-center justify-center w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-track-red opacity-85" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-chalk-white shadow-[0_0_6px_rgba(255,255,255,1)]" />
              </div>
              <span className="font-primary font-black uppercase tracking-[0.18em] text-[9.5px] text-chalk-white">
                LIVE
              </span>
              {featured?.championship && (
                <span className="text-[9px] font-bold text-track-red uppercase tracking-wide truncate max-w-[140px]">
                  · {featured.championship}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              {featured?.description && (
                <button
                  onClick={() => setSelectedEditorial(featured)}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-track-red active:bg-red-700 text-[9px] font-black uppercase tracking-wider text-white shadow-[0_0_10px_rgba(200,50,43,0.4)] transition-all cursor-pointer"
                  title="Read Full Editorial Summary"
                >
                  <FileText size={10} className="text-white" />
                  <span>Report</span>
                </button>
              )}
              <Link 
                href="/results" 
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 active:bg-white/25 border border-white/20 text-[9px] font-black uppercase tracking-wider text-white"
              >
                <span>Results</span>
                <ArrowRight size={10} className="text-track-red" />
              </Link>
            </div>
          </div>

          {/* Mobile Row 2: 100% Full-Width Screen Marquee Strip */}
          <div className="w-full overflow-hidden relative py-1.5 bg-black/30 group">
            {/* Subtle edge fades (just 12px so full screen is readable) */}
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-carbon-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-3 bg-gradient-to-l from-carbon-black to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee-infinite hover:[animation-play-state:paused] active:[animation-play-state:paused] flex items-center gap-4 whitespace-nowrap cursor-default px-2">
              {/* Sequence 1 */}
              {badgeGroups.map((group, gIdx) => (
                <React.Fragment key={`m1-${gIdx}`}>
                  {group.badges.map((badge, bIdx) => renderBadge(badge, group, `m1-${gIdx}`, bIdx))}
                  <span className="text-track-red text-xs font-black px-1.5 tracking-widest">///</span>
                </React.Fragment>
              ))}

              {/* Sequence 2 for seamless infinite looping */}
              {badgeGroups.map((group, gIdx) => (
                <React.Fragment key={`m2-${gIdx}`}>
                  {group.badges.map((badge, bIdx) => renderBadge(badge, group, `m2-${gIdx}`, bIdx))}
                  <span className="text-track-red text-xs font-black px-1.5 tracking-widest">///</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom red & white laser glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-track-red via-chalk-white/80 via-track-red to-transparent opacity-90" />
      </div>

      {/* Editorial & Performance Summary Modal Dialog */}
      <AnimatePresence>
        {selectedEditorial && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-10 select-text">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedEditorial(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl bg-zinc-950 border border-white/15 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(200,50,43,0.25)] overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              {/* Top laser glow line */}
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-track-red via-chalk-white/80 via-track-red to-transparent" />

              {/* Modal Header */}
              <div className="p-6 md:p-8 pb-4 flex items-start justify-between gap-4 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                      selectedEditorial.category === 'national' || selectedEditorial.category === 'all_india'
                        ? 'bg-track-red text-white'
                        : 'bg-white/10 text-chalk-white border border-white/20'
                    }`}>
                      {selectedEditorial.category === 'national' || selectedEditorial.category === 'all_india'
                        ? 'National Championship'
                        : 'State Championship'}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-white/70 text-[9px] font-bold uppercase tracking-widest border border-white/10">
                      {selectedEditorial.year} Season
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-track-red/20 text-track-red border border-track-red/40 text-[9px] font-black uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 rounded-full bg-track-red animate-pulse" /> Live on Top Nav
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-primary uppercase tracking-tight text-chalk-white leading-tight">
                    {selectedEditorial.championship}
                  </h3>

                  {(selectedEditorial.location || selectedEditorial.date) && (
                    <div className="flex flex-wrap items-center gap-3 text-xs text-white/50 mt-2">
                      {selectedEditorial.location && (
                        <span className="flex items-center gap-1">
                          <MapPin size={12} className="text-track-red" />
                          {selectedEditorial.location}
                        </span>
                      )}
                      {selectedEditorial.date && (
                        <span className="flex items-center gap-1">
                          <Calendar size={12} className="text-white/40" />
                          {selectedEditorial.date}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setSelectedEditorial(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors shrink-0 cursor-pointer"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                {/* Editorial & Description Section */}
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 md:p-6 relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-3 text-track-red">
                    <Quote size={16} className="shrink-0" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                      Summary / Editorial Description
                    </span>
                  </div>

                  <p className="text-sm md:text-base text-chalk-white/90 leading-relaxed font-sans font-normal italic">
                    &ldquo;{selectedEditorial.description}&rdquo;
                  </p>
                </div>

                {/* Key Highlights (if available) */}
                {selectedEditorial.highlights && selectedEditorial.highlights.length > 0 && (
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 block mb-2.5">
                      Key Highlights
                    </span>
                    <ul className="space-y-2">
                      {selectedEditorial.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-chalk-white/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-track-red mt-1.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Metrics Pill Grid */}
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 block mb-2.5">
                    Meet Performance Metrics
                  </span>
                  <div className={`grid gap-2.5 text-center ${
                    (selectedEditorial.metrics?.meetRecords || 0) > 0 
                      ? 'grid-cols-2 sm:grid-cols-4' 
                      : 'grid-cols-3'
                  }`}>
                    <div className="p-3 rounded-xl bg-track-red/15 border border-track-red/30">
                      <span className="block text-xl font-primary font-black text-track-red">
                        {selectedEditorial.metrics?.gold || 0}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider font-bold text-white/70">Gold Medals</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/10 border border-white/20">
                      <span className="block text-xl font-primary font-black text-chalk-white">
                        {selectedEditorial.metrics?.silver || 0}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider font-bold text-white/70">Silver Medals</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="block text-xl font-primary font-black text-white/80">
                        {selectedEditorial.metrics?.bronze || 0}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider font-bold text-white/70">Bronze Medals</span>
                    </div>
                    {(selectedEditorial.metrics?.meetRecords || 0) > 0 && (
                      <div className="p-3 rounded-xl bg-white/5 border border-track-red/40">
                        <span className="block text-xl font-primary font-black text-track-red">
                          {selectedEditorial.metrics?.meetRecords || 0}
                        </span>
                        <span className="text-[9px] uppercase tracking-wider font-bold text-white/70">Meet Records</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-5 md:p-6 bg-white/[0.02] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedEditorial(null)}
                  className="px-4 py-2 rounded-full text-xs font-bold text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>

                <Link
                  href="/results"
                  onClick={() => setSelectedEditorial(null)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-track-red hover:bg-chalk-white text-white hover:text-carbon-black font-black uppercase text-xs tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(200,50,43,0.5)] cursor-pointer"
                >
                  <span>View Full Leaderboard & Records</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
