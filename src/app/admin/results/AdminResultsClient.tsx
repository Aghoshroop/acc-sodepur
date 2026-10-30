'use client';

import React, { useState } from 'react';
import { CompetitionResult, AthletePerformance, ResultCategory } from '@/features/results/types';
import { 
  createResult, updateResult, deleteResult, 
  toggleResultActive, toggleShowOnTopNav, pinResultToStrip, seedInitialResults 
} from '@/features/results/actions';
import { 
  Trophy, Medal, Zap, Flame, Sparkles, Plus, Edit2, 
  Trash2, Radio, Check, X, MapPin, Calendar, Database, RefreshCw, UserCheck, Eye, EyeOff
} from 'lucide-react';

interface AdminResultsClientProps {
  initialResults: CompetitionResult[];
}

export default function AdminResultsClient({ initialResults }: AdminResultsClientProps) {
  const [results, setResults] = useState<CompetitionResult[]>(initialResults);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    championship: '',
    year: new Date().getFullYear(),
    category: 'state' as ResultCategory,
    location: '',
    date: '',
    description: '',
    isActive: true,
    showOnTopNav: false,
    isPinnedToStrip: false,
    highlightsText: '',
    metrics: {
      gold: 0,
      silver: 0,
      bronze: 0,
      totalMedals: 0,
      meetRecords: 0,
      qualifiedAthletes: 0
    },
    athletes: [] as AthletePerformance[]
  });

  // Temporary Athlete State for Form
  const [newAthlete, setNewAthlete] = useState<AthletePerformance>({
    athleteName: '',
    event: '',
    category: 'Senior',
    resultMetric: '',
    position: 'gold',
    clubAffiliation: 'ACC',
    notes: ''
  });

  // Achievements set visible on top nav by admin
  const topNavVisibleResults = results.filter(r => r.showOnTopNav === true && r.isActive !== false);

  const resetForm = () => {
    setFormData({
      championship: '',
      year: new Date().getFullYear(),
      category: 'state',
      location: '',
      date: '',
      description: '',
      isActive: true,
      showOnTopNav: false,
      isPinnedToStrip: false,
      highlightsText: '',
      metrics: {
        gold: 0,
        silver: 0,
        bronze: 0,
        totalMedals: 0,
        meetRecords: 0,
        qualifiedAthletes: 0
      },
      athletes: []
    });
    setEditingId(null);
    setIsFormOpen(false);
  };

  const handleEdit = (item: CompetitionResult) => {
    setEditingId(item.id || null);
    setFormData({
      championship: item.championship,
      year: item.year,
      category: item.category || 'state',
      location: item.location || '',
      date: item.date || '',
      description: item.description || '',
      isActive: item.isActive !== false,
      showOnTopNav: item.showOnTopNav === true,
      isPinnedToStrip: !!item.isPinnedToStrip,
      highlightsText: (item.highlights || []).join('\n'),
      metrics: {
        gold: item.metrics?.gold || 0,
        silver: item.metrics?.silver || 0,
        bronze: item.metrics?.bronze || 0,
        totalMedals: item.metrics?.totalMedals || 0,
        meetRecords: item.metrics?.meetRecords || 0,
        qualifiedAthletes: item.metrics?.qualifiedAthletes || 0
      },
      athletes: item.athletes || []
    });
    setIsFormOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddAthlete = () => {
    if (!newAthlete.athleteName.trim() || !newAthlete.event.trim()) {
      alert('Please provide Athlete Name and Event.');
      return;
    }
    setFormData(prev => ({
      ...prev,
      athletes: [...prev.athletes, { ...newAthlete, id: `ath-${Date.now()}` }]
    }));
    setNewAthlete({
      athleteName: '',
      event: '',
      category: 'Senior',
      resultMetric: '',
      position: 'gold',
      clubAffiliation: 'ACC',
      notes: ''
    });
  };

  const handleRemoveAthlete = (idx: number) => {
    setFormData(prev => ({
      ...prev,
      athletes: prev.athletes.filter((_, i) => i !== idx)
    }));
  };

  const handleToggleTopNav = async (item: CompetitionResult) => {
    if (!item.id) return;
    const nextStatus = item.showOnTopNav !== true;
    setLoading(true);
    try {
      const res = await toggleShowOnTopNav(item.id, nextStatus);
      if (!res.success) throw new Error(res.error);
      setResults(prev => prev.map(r => r.id === item.id ? { ...r, showOnTopNav: nextStatus } : r));
      setSuccess(`"${item.championship}" is now ${nextStatus ? 'VISIBLE on top nav strip' : 'HIDDEN from top nav strip'}.`);
    } catch (err: any) {
      setError(err.message || 'Failed to toggle top nav visibility.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const highlights = formData.highlightsText
      .split('\n')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    const payload: Omit<CompetitionResult, 'id'> = {
      championship: formData.championship.trim(),
      year: Number(formData.year),
      category: formData.category,
      location: formData.location.trim(),
      date: formData.date.trim(),
      description: formData.description.trim(),
      isActive: formData.isActive,
      showOnTopNav: formData.showOnTopNav,
      isPinnedToStrip: formData.isPinnedToStrip,
      highlights,
      athletes: formData.athletes,
      metrics: {
        gold: Number(formData.metrics.gold),
        silver: Number(formData.metrics.silver),
        bronze: Number(formData.metrics.bronze),
        totalMedals: Number(formData.metrics.totalMedals),
        meetRecords: Number(formData.metrics.meetRecords),
        qualifiedAthletes: Number(formData.metrics.qualifiedAthletes)
      }
    };

    try {
      if (editingId) {
        const res = await updateResult(editingId, payload);
        if (!res.success) throw new Error(res.error);
        setResults(prev => prev.map(r => r.id === editingId ? { ...payload, id: editingId } : r));
        setSuccess('Competition result updated successfully!');
      } else {
        const res = await createResult(payload);
        if (!res.success) throw new Error(res.error);
        if (res.id) {
          setResults(prev => [{ ...payload, id: res.id }, ...prev]);
        }
        setSuccess('New competition result created successfully!');
      }
      resetForm();
    } catch (err: any) {
      setError(err.message || 'Operation failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleToggleActive = async (item: CompetitionResult) => {
    if (!item.id) return;
    const nextStatus = item.isActive === false;
    setLoading(true);
    try {
      const res = await toggleResultActive(item.id, nextStatus);
      if (!res.success) throw new Error(res.error);
      setResults(prev => prev.map(r => r.id === item.id ? { ...r, isActive: nextStatus } : r));
      setSuccess(`Result "${item.championship}" is now ${nextStatus ? 'ACTIVE' : 'INACTIVE'}.`);
    } catch (err: any) {
      setError(err.message || 'Failed to toggle status.');
    } finally {
      setLoading(false);
    }
  };

  const handlePin = async (item: CompetitionResult) => {
    if (!item.id) return;
    setLoading(true);
    try {
      const res = await pinResultToStrip(item.id);
      if (!res.success) throw new Error(res.error);
      setResults(prev => prev.map(r => ({
        ...r,
        isPinnedToStrip: r.id === item.id,
        isActive: r.id === item.id ? true : r.isActive
      })));
      setSuccess(`"${item.championship}" pinned to homepage navigation strip!`);
    } catch (err: any) {
      setError(err.message || 'Failed to pin result.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id?: string) => {
    if (!id) return;
    if (!confirm('Are you sure you want to delete this result? This action cannot be undone.')) return;
    setLoading(true);
    try {
      const res = await deleteResult(id);
      if (!res.success) throw new Error(res.error);
      setResults(prev => prev.filter(r => r.id !== id));
      setSuccess('Result deleted successfully.');
    } catch (err: any) {
      setError(err.message || 'Failed to delete result.');
    } finally {
      setLoading(false);
    }
  };

  const handleSeed = async () => {
    if (!confirm('Initialize Firebase with official championship & national performance records?')) return;
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const res = await seedInitialResults();
      if (!res.success) throw new Error(res.error);
      setSuccess('Historical records seeded to Firebase! Reloading page...');
      setTimeout(() => window.location.reload(), 1200);
    } catch (err: any) {
      setError(err.message || 'Failed to seed results.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      
      {/* Alert Messages */}
      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => setError(null)}><X size={16} /></button>
        </div>
      )}
      {success && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center justify-between">
          <span>{success}</span>
          <button onClick={() => setSuccess(null)}><X size={16} /></button>
        </div>
      )}

      {/* Live Broadcast Indicator Card */}
      <div className={`p-6 rounded-2xl border transition-all ${
        topNavVisibleResults.length > 0 
          ? 'bg-gradient-to-r from-black via-zinc-950 to-black border-track-red shadow-[0_0_30px_rgba(200,50,43,0.25)]' 
          : 'bg-black/60 border-white/10'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start md:items-center gap-3">
            <div className={`w-3.5 h-3.5 rounded-full mt-1 md:mt-0 shrink-0 ${topNavVisibleResults.length > 0 ? 'bg-track-red animate-ping' : 'bg-white/20'}`} />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 block">
                  Home Top Nav Strip Status
                </span>
                <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${
                  topNavVisibleResults.length > 0 ? 'bg-track-red text-white' : 'bg-white/10 text-white/50'
                }`}>
                  {topNavVisibleResults.length > 0 ? `LIVE (${topNavVisibleResults.length} VISIBLE)` : 'HIDDEN ON HOME'}
                </span>
              </div>

              {topNavVisibleResults.length > 0 ? (
                <div className="mt-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm md:text-base font-bold text-chalk-white">
                      Visible on Website Top Strip:
                    </span>
                    {topNavVisibleResults.map((item) => (
                      <span key={item.id} className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/10 border border-track-red/60 text-chalk-white">
                        <Radio size={10} className="text-track-red animate-pulse" />
                        {item.championship} ({item.year})
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] text-white/40 block mt-1">
                    Only achievements set visible here appear in the top nav strip. All other achievements are kept hidden from top nav.
                  </span>
                </div>
              ) : (
                <div className="mt-1">
                  <span className="text-sm font-semibold text-white/60 block">
                    Strip Hidden: No achievements are set visible by admin. The top navigation strip is currently not displayed on the homepage.
                  </span>
                  <span className="text-[11px] text-white/40 block mt-0.5">
                    Click &quot;Show on Top Nav&quot; on any achievement below to make it visible on the top nav strip.
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {results.length === 0 && (
              <button
                onClick={handleSeed}
                disabled={loading}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold uppercase tracking-wider text-chalk-white flex items-center gap-2 transition-all"
              >
                <Database size={14} className="text-track-red" />
                Seed Initial Data
              </button>
            )}

            <button
              onClick={() => {
                if (isFormOpen && !editingId) setIsFormOpen(false);
                else {
                  resetForm();
                  setIsFormOpen(true);
                }
              }}
              className="px-4 py-2.5 rounded-lg bg-track-red hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(200,50,43,0.4)] transition-all"
            >
              <Plus size={16} />
              {isFormOpen ? 'Close Form' : 'Add New Result'}
            </button>
          </div>
        </div>
      </div>

      {/* Create / Edit Form Modal / Accordion */}
      {isFormOpen && (
        <form onSubmit={handleSubmit} className="bg-black/80 border border-white/20 p-6 md:p-8 rounded-2xl flex flex-col gap-6 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="text-xl md:text-2xl font-primary uppercase tracking-wider text-chalk-white">
              {editingId ? 'Edit Competition Result' : 'Publish New Competition Result'}
            </h2>
            <button type="button" onClick={resetForm} className="text-white/40 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Core Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-1.5">
                Championship / Meet Name *
              </label>
              <input 
                type="text" 
                required
                value={formData.championship}
                onChange={(e) => setFormData({ ...formData, championship: e.target.value })}
                placeholder="e.g. 74th West Bengal State Athletic Championships"
                className="w-full bg-white/5 border border-white/15 rounded-lg p-3 text-sm text-chalk-white focus:outline-none focus:border-track-red"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-1.5">
                Year *
              </label>
              <input 
                type="number" 
                required
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: Number(e.target.value) })}
                className="w-full bg-white/5 border border-white/15 rounded-lg p-3 text-sm text-chalk-white focus:outline-none focus:border-track-red"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-1.5">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as ResultCategory })}
                className="w-full bg-black border border-white/15 rounded-lg p-3 text-sm text-chalk-white focus:outline-none focus:border-track-red"
              >
                <option value="state">State Championship</option>
                <option value="national">National Meet 🇮🇳</option>
                <option value="all_india">All India Meet</option>
                <option value="invitational">Club / Invitational</option>
                <option value="athlete_spotlight">Athlete Spotlight</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-1.5">
                Location
              </label>
              <input 
                type="text" 
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Salt Lake Stadium, Kolkata"
                className="w-full bg-white/5 border border-white/15 rounded-lg p-3 text-sm text-chalk-white focus:outline-none focus:border-track-red"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-1.5">
                Date / Month
              </label>
              <input 
                type="text" 
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                placeholder="e.g. January 2026"
                className="w-full bg-white/5 border border-white/15 rounded-lg p-3 text-sm text-chalk-white focus:outline-none focus:border-track-red"
              />
            </div>
          </div>

          {/* Metrics Grid */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-track-red mb-3">
              Medals & Performance Counters
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <div>
                <span className="text-[10px] text-white/60 uppercase tracking-widest block mb-1">🥇 Gold Medals</span>
                <input 
                  type="number"
                  min="0"
                  value={formData.metrics.gold}
                  onChange={(e) => setFormData({ ...formData, metrics: { ...formData.metrics, gold: Number(e.target.value) } })}
                  className="w-full bg-white/5 border border-white/15 rounded-lg p-2.5 text-sm text-chalk-white focus:border-track-red"
                />
              </div>

              <div>
                <span className="text-[10px] text-white/60 uppercase tracking-widest block mb-1">🥈 Silver Medals</span>
                <input 
                  type="number"
                  min="0"
                  value={formData.metrics.silver}
                  onChange={(e) => setFormData({ ...formData, metrics: { ...formData.metrics, silver: Number(e.target.value) } })}
                  className="w-full bg-white/5 border border-white/15 rounded-lg p-2.5 text-sm text-chalk-white focus:border-track-red"
                />
              </div>

              <div>
                <span className="text-[10px] text-white/60 uppercase tracking-widest block mb-1">🥉 Bronze Medals</span>
                <input 
                  type="number"
                  min="0"
                  value={formData.metrics.bronze}
                  onChange={(e) => setFormData({ ...formData, metrics: { ...formData.metrics, bronze: Number(e.target.value) } })}
                  className="w-full bg-white/5 border border-white/15 rounded-lg p-2.5 text-sm text-chalk-white focus:border-track-red"
                />
              </div>

              <div>
                <span className="text-[10px] text-white/60 uppercase tracking-widest block mb-1">⚡ Total Medals</span>
                <input 
                  type="number"
                  min="0"
                  value={formData.metrics.totalMedals}
                  onChange={(e) => setFormData({ ...formData, metrics: { ...formData.metrics, totalMedals: Number(e.target.value) } })}
                  className="w-full bg-white/5 border border-white/15 rounded-lg p-2.5 text-sm text-chalk-white focus:border-track-red"
                />
              </div>

              <div>
                <span className="text-[10px] text-white/60 uppercase tracking-widest block mb-1">🔥 Meet Records</span>
                <input 
                  type="number"
                  min="0"
                  value={formData.metrics.meetRecords}
                  onChange={(e) => setFormData({ ...formData, metrics: { ...formData.metrics, meetRecords: Number(e.target.value) } })}
                  className="w-full bg-white/5 border border-white/15 rounded-lg p-2.5 text-sm text-chalk-white focus:border-track-red"
                />
              </div>

              <div>
                <span className="text-[10px] text-white/60 uppercase tracking-widest block mb-1">🎯 Qualifiers</span>
                <input 
                  type="number"
                  min="0"
                  value={formData.metrics.qualifiedAthletes}
                  onChange={(e) => setFormData({ ...formData, metrics: { ...formData.metrics, qualifiedAthletes: Number(e.target.value) } })}
                  className="w-full bg-white/5 border border-white/15 rounded-lg p-2.5 text-sm text-chalk-white focus:border-track-red"
                />
              </div>
            </div>
          </div>

          {/* Description & Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-1.5">
                Summary / Editorial Description
              </label>
              <textarea 
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Overview of camp performance, anchored clubs (e.g. Mohun Bagan, East Bengal, Aryans), and milestones."
                className="w-full bg-white/5 border border-white/15 rounded-lg p-3 text-sm text-chalk-white focus:outline-none focus:border-track-red"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-1.5">
                Key Highlights (1 item per line)
              </label>
              <textarea 
                rows={4}
                value={formData.highlightsText}
                onChange={(e) => setFormData({ ...formData, highlightsText: e.target.value })}
                placeholder="65 Qualifiers across junior & senior categories&#10;6 New State Meet Records broken&#10;Clean sweep in relay anchor positions"
                className="w-full bg-white/5 border border-white/15 rounded-lg p-3 text-sm text-chalk-white focus:outline-none focus:border-track-red font-mono text-xs"
              />
            </div>
          </div>

          {/* Athlete Performance Section */}
          <div className="border-t border-white/10 pt-4">
            <h3 className="text-sm font-black uppercase tracking-widest text-track-red mb-3">
              Athlete Performances in this Competition
            </h3>

            {/* List of currently added athletes */}
            {formData.athletes.length > 0 && (
              <div className="overflow-x-auto mb-4 border border-white/15 rounded-xl bg-black/60">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5 text-white/50 uppercase tracking-widest">
                      <th className="p-3">Athlete</th>
                      <th className="p-3">Event</th>
                      <th className="p-3">Result</th>
                      <th className="p-3">Position</th>
                      <th className="p-3">Club</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.athletes.map((ath, idx) => (
                      <tr key={idx} className="border-b border-white/5">
                        <td className="p-3 font-bold text-white">{ath.athleteName}</td>
                        <td className="p-3 text-white/80">{ath.event}</td>
                        <td className="p-3 font-mono text-track-red font-bold">{ath.resultMetric || '—'}</td>
                        <td className="p-3 uppercase text-[10px] font-bold text-white/70">{ath.position}</td>
                        <td className="p-3 text-white/50">{ath.clubAffiliation}</td>
                        <td className="p-3 text-right">
                          <button 
                            type="button" 
                            onClick={() => handleRemoveAthlete(idx)}
                            className="text-red-400 hover:text-white p-1"
                          >
                            <Trash2 size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Add Athlete Subform */}
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="text-xs font-bold text-white/60 uppercase tracking-wider">Quick Add Athlete Performance</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2">
                <input 
                  type="text" 
                  placeholder="Athlete Name" 
                  value={newAthlete.athleteName} 
                  onChange={(e) => setNewAthlete({ ...newAthlete, athleteName: e.target.value })}
                  className="bg-black border border-white/15 rounded p-2 text-xs text-white" 
                />
                <input 
                  type="text" 
                  placeholder="Event (e.g. 100m Sprint)" 
                  value={newAthlete.event} 
                  onChange={(e) => setNewAthlete({ ...newAthlete, event: e.target.value })}
                  className="bg-black border border-white/15 rounded p-2 text-xs text-white" 
                />
                <input 
                  type="text" 
                  placeholder="Performance (e.g. 10.38s)" 
                  value={newAthlete.resultMetric} 
                  onChange={(e) => setNewAthlete({ ...newAthlete, resultMetric: e.target.value })}
                  className="bg-black border border-white/15 rounded p-2 text-xs text-white" 
                />
                <select 
                  value={newAthlete.position}
                  onChange={(e) => setNewAthlete({ ...newAthlete, position: e.target.value as any })}
                  className="bg-black border border-white/15 rounded p-2 text-xs text-white"
                >
                  <option value="gold">Gold</option>
                  <option value="silver">Silver</option>
                  <option value="bronze">Bronze</option>
                  <option value="record">Record</option>
                  <option value="finalist">Finalist</option>
                  <option value="participation">Participation</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Club (e.g. Mohun Bagan)" 
                  value={newAthlete.clubAffiliation} 
                  onChange={(e) => setNewAthlete({ ...newAthlete, clubAffiliation: e.target.value })}
                  className="bg-black border border-white/15 rounded p-2 text-xs text-white" 
                />
                <button 
                  type="button" 
                  onClick={handleAddAthlete}
                  className="bg-white/15 hover:bg-track-red text-white text-xs font-bold uppercase rounded p-2 transition-colors flex items-center justify-center gap-1"
                >
                  <Plus size={14} /> Add Athlete
                </button>
              </div>
            </div>
          </div>

          {/* Status Toggles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-white/10">
            <label className="flex items-start gap-3 cursor-pointer bg-white/5 p-3.5 rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <input 
                type="checkbox" 
                checked={formData.showOnTopNav}
                onChange={(e) => setFormData({ ...formData, showOnTopNav: e.target.checked })}
                className="w-5 h-5 rounded text-track-red focus:ring-0 accent-track-red mt-0.5"
              />
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-chalk-white flex items-center gap-1.5">
                  <Radio size={13} className={formData.showOnTopNav ? "text-track-red animate-pulse" : "text-white/40"} />
                  Visible on Top Navigation Strip
                </span>
                <span className="text-[11px] text-white/50 block mt-0.5">
                  When enabled, this achievement is shown in the red/black/white top bar above the navbar.
                </span>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer bg-white/5 p-3.5 rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <input 
                type="checkbox" 
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                className="w-5 h-5 rounded text-track-red focus:ring-0 accent-track-red mt-0.5"
              />
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-chalk-white">
                  Active in Leaderboard (/results)
                </span>
                <span className="text-[11px] text-white/50 block mt-0.5">
                  When checked, this result is visible on the full results leaderboard page.
                </span>
              </div>
            </label>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={resetForm}
              className="px-5 py-2.5 rounded-lg border border-white/20 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 rounded-lg bg-track-red hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider shadow-[0_0_15px_rgba(200,50,43,0.5)] transition-all disabled:opacity-50"
            >
              {loading ? 'Saving...' : (editingId ? 'Update Result' : 'Publish Result')}
            </button>
          </div>
        </form>
      )}

      {/* Results List Cards */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-primary uppercase tracking-wider text-chalk-white">
            All Published Results ({results.length})
          </h2>
          <span className="text-xs text-white/50">Manage broadcast state, edit records, or delete</span>
        </div>

        {results.length === 0 ? (
          <div className="bg-black/40 border border-white/10 rounded-2xl p-12 text-center">
            <Database size={40} className="mx-auto text-white/20 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">No Competition Results in Database</h3>
            <p className="text-xs text-white/50 mb-6 max-w-sm mx-auto">
              Click &quot;Seed Initial Data&quot; to import the official records or &quot;Add New Result&quot; to publish your first championship tally.
            </p>
            <button
              onClick={handleSeed}
              className="px-4 py-2 rounded-lg bg-track-red hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_12px_rgba(200,50,43,0.5)]"
            >
              Seed Official Records
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {results.map((result) => {
              const isPinned = result.isPinnedToStrip;
              const isActive = result.isActive !== false;
              const isTopNav = result.showOnTopNav === true && isActive;

              return (
                <div 
                  key={result.id}
                  className={`bg-black/60 border rounded-xl p-5 md:p-6 transition-all ${
                    isTopNav ? 'border-track-red shadow-[0_0_20px_rgba(200,50,43,0.25)]' : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                          result.category === 'national' ? 'bg-track-red text-white' : 'bg-white/10 text-white border border-white/15'
                        }`}>
                          {result.category === 'national' ? 'National Meet' : 'State Championship'}
                        </span>

                        <span className="text-xs font-bold text-white/60">
                          {result.year} Season
                        </span>

                        {/* Top Nav Status Badge */}
                        {isTopNav ? (
                          <span className="px-2.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-track-red text-white flex items-center gap-1 shadow-[0_0_10px_rgba(200,50,43,0.5)]">
                            <Radio size={10} className="animate-pulse" /> Top Nav: Visible
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-white/5 text-white/40 border border-white/10">
                            Top Nav: Hidden
                          </span>
                        )}

                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                          isActive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-white/5 text-white/40'
                        }`}>
                          {isActive ? 'Active' : 'Archived'}
                        </span>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-chalk-white">
                        {result.championship}
                      </h3>

                      <p className="text-xs text-white/60 mt-1 line-clamp-2">
                        {result.description}
                      </p>

                      {/* Micro Medals Pill */}
                      <div className="flex flex-wrap items-center gap-3 mt-3 text-xs">
                        <span className="text-track-red font-black">🥇 {result.metrics?.gold || 0} Gold</span>
                        <span className="text-white font-bold">🥈 {result.metrics?.silver || 0} Silver</span>
                        <span className="text-white/60">🥉 {result.metrics?.bronze || 0} Bronze</span>
                        <span className="text-white/40">| Total: {result.metrics?.totalMedals || 0}</span>
                        <span className="text-white/40">| Records: {result.metrics?.meetRecords || 0}</span>
                        {result.athletes && result.athletes.length > 0 && (
                          <span className="text-white/40">| Athletes: {result.athletes.length}</span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap md:flex-col lg:flex-row items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/10">
                      
                      {/* Dedicated Top Nav Visibility Toggle */}
                      <button
                        onClick={() => handleToggleTopNav(result)}
                        disabled={loading}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 border ${
                          result.showOnTopNav === true
                            ? 'bg-track-red text-white border-track-red shadow-[0_0_12px_rgba(200,50,43,0.5)] hover:bg-red-700'
                            : 'bg-white/5 border-white/20 text-white/70 hover:text-white hover:border-track-red hover:bg-track-red/20'
                        }`}
                        title={result.showOnTopNav === true ? "Click to hide from top navigation strip" : "Click to make visible on top navigation strip"}
                      >
                        <Radio size={12} className={result.showOnTopNav === true ? "animate-pulse text-white" : "text-white/40"} />
                        {result.showOnTopNav === true ? 'Visible on Top Nav' : 'Show on Top Nav'}
                      </button>

                      {/* Toggle Active Button */}
                      <button
                        onClick={() => handleToggleActive(result)}
                        disabled={loading}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors border ${
                          isActive 
                            ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25' 
                            : 'bg-white/5 border-white/10 text-white/40 hover:text-white'
                        }`}
                        title="Toggle active status in full results"
                      >
                        {isActive ? 'Active' : 'Archived'}
                      </button>

                      {/* Pin to Top Strip Button */}
                      <button
                        onClick={() => handlePin(result)}
                        disabled={loading}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors border ${
                          isPinned 
                            ? 'bg-track-red text-white border-track-red shadow-[0_0_10px_rgba(200,50,43,0.5)]' 
                            : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-track-red'
                        }`}
                        title="Pin as headline on top nav strip"
                      >
                        {isPinned ? '★ Pinned' : 'Pin to Strip'}
                      </button>

                      {/* Edit Button */}
                      <button
                        onClick={() => handleEdit(result)}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
                        title="Edit result"
                      >
                        <Edit2 size={16} />
                      </button>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(result.id)}
                        className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/25 text-red-400 hover:text-red-300 transition-colors"
                        title="Delete result"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

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
