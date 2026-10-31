'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, Medal, Zap, Flame, Sparkles, MapPin, 
  Calendar, Search, ChevronDown, ChevronUp, ArrowLeft, Radio
} from 'lucide-react';
import { CompetitionResult } from '@/features/results/types';

interface ResultsClientProps {
  initialResults: CompetitionResult[];
}

export default function ResultsClient({ initialResults }: ResultsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Filter results
  const filteredResults = useMemo(() => {
    return initialResults.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'national' && item.category !== 'national' && item.category !== 'all_india') return false;
        if (selectedCategory === 'state' && item.category !== 'state') return false;
        if (selectedCategory === 'spotlight' && (!item.athletes || item.athletes.length === 0)) return false;
      }

      // Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesChamp = item.championship.toLowerCase().includes(query);
        const matchesDesc = item.description?.toLowerCase().includes(query);
        const matchesYear = item.year.toString().includes(query);
        const matchesLocation = item.location?.toLowerCase().includes(query);
        const matchesAthlete = item.athletes?.some(a => 
          a.athleteName.toLowerCase().includes(query) || 
          a.event.toLowerCase().includes(query) ||
          a.clubAffiliation?.toLowerCase().includes(query)
        );
        return matchesChamp || matchesDesc || matchesYear || matchesLocation || matchesAthlete;
      }

      return true;
    });
  }, [initialResults, selectedCategory, searchQuery]);

  // Aggregate stats across all results
  const stats = useMemo(() => {
    return initialResults.reduce((acc, curr) => {
      acc.totalMedals += curr.metrics.totalMedals || 0;
      acc.gold += curr.metrics.gold || 0;
      acc.silver += curr.metrics.silver || 0;
      acc.bronze += curr.metrics.bronze || 0;
      acc.meetRecords += curr.metrics.meetRecords || 0;
      return acc;
    }, { totalMedals: 0, gold: 0, silver: 0, bronze: 0, meetRecords: 0 });
  }, [initialResults]);

  return (
    <div className="w-full min-h-screen bg-carbon-black text-chalk-white font-body selection:bg-track-red selection:text-white pb-32">
      
      {/* Background ambient red glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-track-red/10 blur-[160px] pointer-events-none -z-10" />

      {/* Top Breadcrumb & Return Link */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-28 md:pt-36 pb-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-chalk-white/60 hover:text-track-red transition-colors group mb-8"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Homepage</span>
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col gap-6 border-b border-white/10 pb-12">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-track-red/20 border border-track-red/50 text-[10px] md:text-xs font-black uppercase tracking-widest text-track-red">
              <Radio size={12} className="animate-pulse" />
              OFFICIAL ARCHIVE
            </span>
            <span className="text-white/40 text-xs tracking-widest font-mono uppercase">SINCE 1969</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-primary uppercase tracking-tight text-chalk-white leading-[0.9]">
            LATEST <span className="text-track-red">RESULTS</span>
          </h1>

          <p className="text-sm md:text-lg text-chalk-white/70 max-w-3xl leading-relaxed">
            Verified championship performances, national trial times, and podium tallies of athletes coached and nurtured at the Athletic Coaching Camp (ACC) Sodepur.
          </p>
        </div>

        {/* Overview Stats Ribbon */}
        {initialResults.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 my-10">
            <div className="bg-black/60 border border-white/10 p-4 md:p-6 rounded-lg flex flex-col justify-between">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50">Total Podiums</span>
              <p className="text-3xl md:text-4xl font-primary font-black text-chalk-white mt-2">{stats.totalMedals}</p>
            </div>
            <div className="bg-black/60 border border-track-red/40 p-4 md:p-6 rounded-lg flex flex-col justify-between shadow-[0_0_15px_rgba(200,50,43,0.15)]">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-track-red flex items-center gap-1.5">
                <Medal size={14} /> Gold Medals
              </span>
              <p className="text-3xl md:text-4xl font-primary font-black text-track-red mt-2">{stats.gold}</p>
            </div>
            <div className="bg-black/60 border border-white/20 p-4 md:p-6 rounded-lg flex flex-col justify-between">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/80 flex items-center gap-1.5">
                <Medal size={14} /> Silver Medals
              </span>
              <p className="text-3xl md:text-4xl font-primary font-black text-chalk-white mt-2">{stats.silver}</p>
            </div>
            <div className="bg-black/60 border border-white/10 p-4 md:p-6 rounded-lg flex flex-col justify-between">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 flex items-center gap-1.5">
                <Medal size={14} /> Bronze Medals
              </span>
              <p className="text-3xl md:text-4xl font-primary font-black text-chalk-white/80 mt-2">{stats.bronze}</p>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-black/60 border border-white/10 p-4 md:p-6 rounded-lg flex flex-col justify-between">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/60 flex items-center gap-1.5">
                <Flame size={14} className="text-track-red" /> Meet Records
              </span>
              <p className="text-3xl md:text-4xl font-primary font-black text-chalk-white mt-2">{stats.meetRecords}</p>
            </div>
          </div>
        )}

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mt-12 mb-8 bg-black/40 border border-white/10 p-3 md:p-4 rounded-xl">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Results' },
              { id: 'national', label: 'National Meets 🇮🇳' },
              { id: 'state', label: 'State Championships' },
              { id: 'spotlight', label: 'Athlete Spotlights' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 md:px-4 py-2 text-xs md:text-sm font-black uppercase tracking-wider rounded-lg transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-track-red text-white shadow-[0_0_15px_rgba(200,50,43,0.5)]'
                    : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Field */}
          <div className="relative min-w-[240px]">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input 
              type="text"
              placeholder="Search athlete, event, year..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/60 border border-white/15 focus:border-track-red rounded-lg pl-9 pr-4 py-2 text-xs md:text-sm text-chalk-white placeholder:text-white/30 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Results List */}
        {filteredResults.length === 0 ? (
          <div className="bg-black/40 border border-white/10 rounded-2xl p-12 text-center my-8">
            <Trophy size={48} className="mx-auto text-white/20 mb-4" />
            <h3 className="text-xl font-primary uppercase tracking-widest text-chalk-white mb-2">No Results Found</h3>
            <p className="text-sm text-white/50 max-w-md mx-auto">
              {initialResults.length === 0 
                ? 'No competition results are currently published in the system.' 
                : 'No results match your active category or search query. Try clearing filters.'}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {filteredResults.map((result) => {
              const isExpanded = !!expandedCards[result.id || ''];
              const isNational = result.category === 'national' || result.category === 'all_india';
              const isFeatured = Boolean(result.isFeatured || result.isPinnedToStrip);

              return (
                <div 
                  key={result.id || result.championship}
                  className={`bg-black/70 border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isFeatured 
                      ? 'border-amber-500/60 shadow-[0_0_30px_rgba(245,158,11,0.2)]' 
                      : result.showOnTopNav === true 
                        ? 'border-track-red shadow-[0_0_30px_rgba(200,50,43,0.2)]' 
                        : 'border-white/10 hover:border-white/25'
                  }`}
                >
                  {/* Card Header Bar */}
                  <div className="p-6 md:p-8 flex flex-col gap-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest ${
                          isNational 
                            ? 'bg-track-red text-white' 
                            : 'bg-white/10 text-chalk-white border border-white/20'
                        }`}>
                          {isNational ? 'National Meet' : 'State Championship'}
                        </span>
                        
                        <span className="px-3 py-1 rounded-full bg-white/5 text-white/70 text-[10px] md:text-xs font-bold uppercase tracking-widest border border-white/10">
                          {result.year} Season
                        </span>

                        {isFeatured && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] md:text-xs font-black uppercase tracking-widest shadow-[0_0_12px_rgba(245,158,11,0.25)]">
                            ★ Featured on Home
                          </span>
                        )}

                        {result.showOnTopNav === true && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-track-red/20 text-track-red border border-track-red/40 text-[10px] md:text-xs font-black uppercase tracking-widest">
                            <Radio size={12} className="animate-pulse" /> Live on Top Nav
                          </span>
                        )}
                      </div>

                      {(result.location || result.date) && (
                        <div className="flex items-center gap-4 text-xs text-white/50">
                          {result.location && (
                            <span className="flex items-center gap-1">
                              <MapPin size={13} className="text-track-red" />
                              {result.location}
                            </span>
                          )}
                          {result.date && (
                            <span className="flex items-center gap-1">
                              <Calendar size={13} className="text-white/40" />
                              {result.date}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Championship Name */}
                    <div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-primary uppercase tracking-tight text-chalk-white">
                        {result.championship}
                      </h2>
                      {result.description && (
                        <p className="text-sm md:text-base text-chalk-white/70 mt-3 leading-relaxed">
                          {result.description}
                        </p>
                      )}
                    </div>

                    {/* Medal Podium Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4 border-t border-white/10">
                      <div className="bg-track-red text-white p-3 md:p-4 rounded-xl flex items-center gap-3 shadow-[0_0_15px_rgba(200,50,43,0.4)]">
                        <Medal size={22} className="shrink-0" />
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">Gold</p>
                          <p className="text-xl md:text-2xl font-black font-primary leading-none mt-0.5">{result.metrics.gold || 0}</p>
                        </div>
                      </div>

                      <div className="bg-chalk-white text-carbon-black p-3 md:p-4 rounded-xl flex items-center gap-3">
                        <Medal size={22} className="shrink-0" />
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-carbon-black/70">Silver</p>
                          <p className="text-xl md:text-2xl font-black font-primary leading-none mt-0.5">{result.metrics.silver || 0}</p>
                        </div>
                      </div>

                      <div className="bg-white/10 text-chalk-white p-3 md:p-4 rounded-xl flex items-center gap-3 border border-white/15">
                        <Medal size={22} className="shrink-0 text-track-red" />
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Bronze</p>
                          <p className="text-xl md:text-2xl font-black font-primary leading-none mt-0.5">{result.metrics.bronze || 0}</p>
                        </div>
                      </div>

                      <div className="bg-black/60 border border-white/15 p-3 md:p-4 rounded-xl flex items-center gap-3">
                        <Zap size={20} className="shrink-0 text-track-red" />
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Total</p>
                          <p className="text-xl md:text-2xl font-black font-primary leading-none mt-0.5">{result.metrics.totalMedals || 0}</p>
                        </div>
                      </div>

                      <div className="bg-black/60 border border-white/15 p-3 md:p-4 rounded-xl flex items-center gap-3">
                        <Flame size={20} className="shrink-0 text-track-red" />
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Records</p>
                          <p className="text-xl md:text-2xl font-black font-primary leading-none mt-0.5">{result.metrics.meetRecords || 0}</p>
                        </div>
                      </div>

                      <div className="bg-black/60 border border-white/15 p-3 md:p-4 rounded-xl flex items-center gap-3">
                        <Sparkles size={20} className="shrink-0 text-white/70" />
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Athletes</p>
                          <p className="text-xl md:text-2xl font-black font-primary leading-none mt-0.5">{result.metrics.qualifiedAthletes || 0}</p>
                        </div>
                      </div>
                    </div>

                    {/* Highlights Bullet List */}
                    {result.highlights && result.highlights.length > 0 && (
                      <div className="flex flex-col gap-2 pt-2">
                        {result.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-chalk-white/80">
                            <span className="text-track-red font-black">✦</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Athlete Performance Roster Toggle */}
                    {result.athletes && result.athletes.length > 0 && (
                      <div className="pt-2">
                        <button
                          onClick={() => toggleExpand(result.id || result.championship)}
                          className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-xs md:text-sm font-black uppercase tracking-wider text-chalk-white transition-all"
                        >
                          <span className="flex items-center gap-2">
                            <Trophy size={16} className="text-track-red" />
                            <span>Athlete Performance Roster ({result.athletes.length} Athletes)</span>
                          </span>
                          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>

                        {/* Collapsible Athlete Table */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-x-auto mt-4 rounded-xl border border-white/10 bg-black/80"
                            >
                              <table className="w-full text-left text-xs md:text-sm">
                                <thead>
                                  <tr className="border-b border-white/10 bg-white/5 text-[10px] md:text-xs font-black uppercase tracking-widest text-white/50">
                                    <th className="py-3 px-4">Athlete</th>
                                    <th className="py-3 px-4">Event</th>
                                    <th className="py-3 px-4">Category</th>
                                    <th className="py-3 px-4">Performance</th>
                                    <th className="py-3 px-4">Result</th>
                                    <th className="py-3 px-4">Club Unit</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {result.athletes.map((athlete, aIdx) => {
                                    const isGold = athlete.position === 'gold';
                                    const isSilver = athlete.position === 'silver';
                                    const isBronze = athlete.position === 'bronze';

                                    return (
                                      <tr key={aIdx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="py-3 px-4 font-bold text-chalk-white flex items-center gap-2">
                                          {athlete.athleteName}
                                        </td>
                                        <td className="py-3 px-4 text-white/80">{athlete.event}</td>
                                        <td className="py-3 px-4 text-white/50">{athlete.category || '—'}</td>
                                        <td className="py-3 px-4 font-mono font-bold text-track-red">{athlete.resultMetric}</td>
                                        <td className="py-3 px-4">
                                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                                            isGold ? 'bg-track-red text-white' :
                                            isSilver ? 'bg-white text-carbon-black font-bold' :
                                            isBronze ? 'bg-white/15 text-white border border-white/20' :
                                            'bg-white/5 text-white/60'
                                          }`}>
                                            {athlete.position.toUpperCase()}
                                          </span>
                                        </td>
                                        <td className="py-3 px-4 text-white/60 text-xs">{athlete.clubAffiliation || 'ACC'}</td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
