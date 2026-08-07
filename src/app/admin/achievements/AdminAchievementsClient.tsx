'use client';

import { useState } from 'react';
import { CompetitionResult } from '@/features/results/types';
import { createResult, updateResult, deleteResult } from '@/features/results/actions';

export default function AdminAchievementsClient({ initialResults }: { initialResults: CompetitionResult[] }) {
  const [results, setResults] = useState<CompetitionResult[]>(initialResults);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState<Omit<CompetitionResult, 'id'>>({
    championship: '',
    year: new Date().getFullYear(),
    description: '',
    metrics: {
      qualifiedAthletes: 0,
      totalMedals: 0,
      gold: 0,
      silver: 0,
      bronze: 0,
      meetRecords: 0
    }
  });

  const resetForm = () => {
    setFormData({
      championship: '',
      year: new Date().getFullYear(),
      description: '',
      metrics: {
        qualifiedAthletes: 0,
        totalMedals: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        meetRecords: 0
      }
    });
    setEditingId(null);
  };

  const handleEdit = (item: CompetitionResult) => {
    setEditingId(item.id || null);
    setFormData({
      championship: item.championship,
      year: item.year,
      description: item.description,
      metrics: {
        qualifiedAthletes: item.metrics.qualifiedAthletes || 0,
        totalMedals: item.metrics.totalMedals || 0,
        gold: item.metrics.gold || 0,
        silver: item.metrics.silver || 0,
        bronze: item.metrics.bronze || 0,
        meetRecords: item.metrics.meetRecords || 0
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (editingId && !editingId.startsWith('res-')) {
        const res = await updateResult(editingId, formData);
        if (!res.success) throw new Error(res.error);
        setResults(results.map(r => r.id === editingId ? { ...r, ...formData } : r));
      } else {
        const res = await createResult(formData);
        if (!res.success) throw new Error(res.error);
        if (res.id) {
          setResults([{ ...formData, id: res.id }, ...results].sort((a, b) => b.year - a.year));
        }
      }
      resetForm();
    } catch (err: any) {
      setError(err.message || 'Failed to save result. If editing a hardcoded item, it will create a new one instead.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (id.startsWith('res-')) {
      setError('Cannot delete hardcoded placeholder items. Please add new items to override.');
      return;
    }
    if (!confirm('Are you sure you want to delete this result?')) return;
    setLoading(true);
    setError(null);
    try {
      const res = await deleteResult(id);
      if (!res.success) throw new Error(res.error);
      setResults(results.filter(r => r.id !== id));
    } catch (err: any) {
      setError(err.message || 'Failed to delete result');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Form Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-fit sticky top-12">
        <h2 className="text-xl font-bold mb-6">{editingId ? 'Edit Result' : 'Add New Result'}</h2>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Championship / Meet Name</label>
            <input 
              type="text" 
              required
              value={formData.championship}
              onChange={(e) => setFormData({...formData, championship: e.target.value})}
              className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
            <input 
              type="number" 
              required
              value={formData.year}
              onChange={(e) => setFormData({...formData, year: parseInt(e.target.value) || 2024})}
              className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description / Summary</label>
            <textarea 
              required
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
            />
          </div>

          <div className="pt-4 border-t">
            <h3 className="font-medium text-sm text-gray-900 mb-4">Metrics</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Qualified Athletes</label>
                <input 
                  type="number" 
                  value={formData.metrics.qualifiedAthletes || 0}
                  onChange={(e) => setFormData({...formData, metrics: {...formData.metrics, qualifiedAthletes: parseInt(e.target.value) || 0}})}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Total Medals</label>
                <input 
                  type="number" 
                  value={formData.metrics.totalMedals || 0}
                  onChange={(e) => setFormData({...formData, metrics: {...formData.metrics, totalMedals: parseInt(e.target.value) || 0}})}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Gold</label>
                <input 
                  type="number" 
                  value={formData.metrics.gold || 0}
                  onChange={(e) => setFormData({...formData, metrics: {...formData.metrics, gold: parseInt(e.target.value) || 0}})}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Silver</label>
                <input 
                  type="number" 
                  value={formData.metrics.silver || 0}
                  onChange={(e) => setFormData({...formData, metrics: {...formData.metrics, silver: parseInt(e.target.value) || 0}})}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Bronze</label>
                <input 
                  type="number" 
                  value={formData.metrics.bronze || 0}
                  onChange={(e) => setFormData({...formData, metrics: {...formData.metrics, bronze: parseInt(e.target.value) || 0}})}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Meet Records (Optional)</label>
              <input 
                type="number" 
                value={formData.metrics.meetRecords || 0}
                onChange={(e) => setFormData({...formData, metrics: {...formData.metrics, meetRecords: parseInt(e.target.value) || 0}})}
                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button 
              type="submit" 
              disabled={loading}
              className="flex-1 bg-carbon-black text-white rounded-md py-2 text-sm font-medium hover:bg-carbon-black/90 disabled:opacity-50"
            >
              {loading ? 'Saving...' : (editingId && !editingId.startsWith('res-') ? 'Update' : 'Add')}
            </button>
            {editingId && (
              <button 
                type="button"
                onClick={resetForm}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* List Section */}
      <div className="lg:col-span-2 space-y-4">
        {results.map(result => (
          <div key={result.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-bold bg-track-red text-white px-2 py-0.5 rounded">
                  {result.year}
                </span>
                <h4 className="font-bold text-lg">{result.championship}</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">{result.description}</p>
              
              <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-500">
                {result.metrics.qualifiedAthletes ? <span>👥 {result.metrics.qualifiedAthletes} Qualified</span> : null}
                {result.metrics.totalMedals ? <span>🏅 {result.metrics.totalMedals} Total</span> : null}
                {result.metrics.gold ? <span>🥇 {result.metrics.gold}</span> : null}
                {result.metrics.silver ? <span>🥈 {result.metrics.silver}</span> : null}
                {result.metrics.bronze ? <span>🥉 {result.metrics.bronze}</span> : null}
                {result.metrics.meetRecords ? <span className="text-track-red">🏆 {result.metrics.meetRecords}</span> : null}
              </div>
            </div>
            
            <div className="flex flex-col gap-2 ml-4">
              <button onClick={() => handleEdit(result)} className="text-xs text-blue-600 hover:text-blue-900 border border-blue-200 px-2 py-1 rounded">Edit</button>
              <button onClick={() => handleDelete(result.id!)} className="text-xs text-red-600 hover:text-red-900 border border-red-200 px-2 py-1 rounded">Del</button>
            </div>
          </div>
        ))}
        {results.length === 0 && <p className="text-gray-400 italic text-sm">No results found.</p>}
      </div>
    </div>
  );
}
