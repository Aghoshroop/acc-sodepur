'use client';

import { useState } from 'react';
import { Athlete } from '@/features/athletes/types';
import { createAthlete, updateAthlete, deleteAthlete } from '@/features/athletes/actions';

export default function AdminAthletesClient({ initialAthletes }: { initialAthletes: Athlete[] }) {
  const [athletes, setAthletes] = useState<Athlete[]>(initialAthletes);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<Partial<Athlete>>({
    name: '',
    category: 'Combined Events',
    event: '',
    description: '',
    metric: ''
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  const categories = [
    "Combined Events",
    "Hurdlers",
    "Middle Distance",
    "Long Jump & Triple Jump",
    "High Jump & Pole Vault",
    "Emerging Youth Jumpers"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    setIsSaving(true);
    try {
      if (editingId) {
        const result = await updateAthlete(editingId, formData);
        if (result.success) {
          setAthletes(athletes.map(a => a.id === editingId ? { ...a, ...formData } as Athlete : a));
          resetForm();
        } else {
          setError(result.error || 'Failed to update athlete');
        }
      } else {
        const result = await createAthlete(formData as Omit<Athlete, 'id'>);
        if (result.success && result.id) {
          setAthletes([...athletes, { ...formData, id: result.id } as Athlete]);
          resetForm();
        } else {
          setError(result.error || 'Failed to create athlete');
        }
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this athlete?')) return;
    
    setIsSaving(true);
    try {
      const result = await deleteAthlete(id);
      if (result.success) {
        setAthletes(athletes.filter(a => a.id !== id));
      } else {
        setError(result.error || 'Failed to delete');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleEdit = (athlete: Athlete) => {
    setEditingId(athlete.id || null);
    setFormData({
      name: athlete.name,
      category: athlete.category,
      event: athlete.event,
      description: athlete.description,
      metric: athlete.metric || ''
    });
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      name: '',
      category: 'Combined Events',
      event: '',
      description: '',
      metric: ''
    });
  };

  return (
    <div className="bg-chalk-white text-carbon-black flex flex-col md:flex-row gap-12">
      {/* List Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-primary uppercase tracking-wide mb-8">Athletes Roster</h1>
        
        {athletes.length === 0 ? (
          <p className="text-carbon-black/50 italic">No athletes in the roster yet.</p>
        ) : (
          <div className="space-y-4 max-h-[80vh] overflow-y-auto pr-4">
            {categories.map(cat => {
              const catAthletes = athletes.filter(a => a.category === cat);
              if (catAthletes.length === 0) return null;
              
              return (
                <div key={cat} className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-track-red border-b border-carbon-black/10 pb-2 mb-4">
                    {cat}
                  </h3>
                  <div className="space-y-4">
                    {catAthletes.map(athlete => (
                      <div key={athlete.id} className="border border-carbon-black/10 p-4 hover:border-carbon-black/30 transition-colors flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-lg uppercase tracking-wide">{athlete.name}</h4>
                          <p className="text-xs text-carbon-black/60 font-bold uppercase mb-2">{athlete.event}</p>
                          <p className="text-sm font-light text-carbon-black/80 line-clamp-2">{athlete.description}</p>
                        </div>
                        <div className="flex flex-col gap-2 ml-4">
                          <button onClick={() => handleEdit(athlete)} className="text-xs font-bold uppercase tracking-widest hover:text-track-red">Edit</button>
                          <button onClick={() => athlete.id && handleDelete(athlete.id)} className="text-xs font-bold uppercase tracking-widest text-red-600 hover:text-red-800">Del</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 border-l border-carbon-black/10 pl-0 md:pl-12">
        <h2 className="text-2xl font-primary uppercase tracking-wide mb-6">
          {editingId ? 'Edit Athlete' : 'Add New Athlete'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="bg-red-100 text-red-700 p-3 text-sm">{error}</div>}
          
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-widest opacity-70">Athlete Name</label>
            <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-transparent border-b-2 border-carbon-black/20 py-2 focus:outline-none focus:border-track-red" />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-widest opacity-70">Category</label>
            <select required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full bg-transparent border-b-2 border-carbon-black/20 py-2 focus:outline-none focus:border-track-red cursor-pointer">
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-widest opacity-70">Event / Subtitle</label>
            <input type="text" required value={formData.event} onChange={e => setFormData({...formData, event: e.target.value})} className="w-full bg-transparent border-b-2 border-carbon-black/20 py-2 focus:outline-none focus:border-track-red" placeholder="e.g. Decathlon / Heptathlon" />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-widest opacity-70">Description / Biography</label>
            <textarea required rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-transparent border-b-2 border-carbon-black/20 py-2 focus:outline-none focus:border-track-red resize-none" />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-widest opacity-70">Metric / Personal Best (Optional)</label>
            <input type="text" value={formData.metric} onChange={e => setFormData({...formData, metric: e.target.value})} className="w-full bg-transparent border-b-2 border-carbon-black/20 py-2 focus:outline-none focus:border-track-red" placeholder="e.g. 6,240 pts" />
          </div>


          <div className="flex gap-4">
            <button type="submit" disabled={isSaving} className="flex-1 py-4 bg-carbon-black text-chalk-white uppercase tracking-widest font-bold hover:bg-track-red transition-colors disabled:opacity-50">
              {isSaving ? 'Saving...' : (editingId ? 'Update Athlete' : 'Add Athlete')}
            </button>
            {editingId && (
              <button type="button" onClick={resetForm} className="px-6 py-4 border border-carbon-black/20 uppercase tracking-widest font-bold hover:bg-carbon-black/5">
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
