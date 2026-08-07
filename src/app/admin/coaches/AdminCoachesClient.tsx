'use client';

import { useState } from 'react';
import { Coach } from '@/features/coaches/types';
import { createCoach, updateCoach, deleteCoach } from '@/features/coaches/actions';

export default function AdminCoachesClient({ initialCoaches }: { initialCoaches: Coach[] }) {
  const [coaches, setCoaches] = useState<Coach[]>(initialCoaches);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState<Omit<Coach, 'id'>>({
    name: '',
    subtitle: '',
    description: '',
    role: 'trainer',
    order: 0
  });

  const resetForm = () => {
    setFormData({
      name: '',
      subtitle: '',
      description: '',
      role: 'trainer',
      order: 0
    });
    setEditingId(null);
  };

  const handleEdit = (coach: Coach) => {
    setEditingId(coach.id || null);
    setFormData({
      name: coach.name,
      subtitle: coach.subtitle,
      description: coach.description || '',
      role: coach.role,
      order: coach.order
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (editingId) {
        const res = await updateCoach(editingId, formData);
        if (!res.success) throw new Error(res.error);
        setCoaches(coaches.map(c => c.id === editingId ? { ...c, ...formData } : c));
      } else {
        const res = await createCoach(formData);
        if (!res.success) throw new Error(res.error);
        if (res.id) {
          setCoaches([...coaches, { ...formData, id: res.id }]);
        }
      }
      resetForm();
    } catch (err: any) {
      setError(err.message || 'Failed to save coach');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this staff member?')) return;
    setLoading(true);
    setError(null);
    try {
      const res = await deleteCoach(id);
      if (!res.success) throw new Error(res.error);
      setCoaches(coaches.filter(c => c.id !== id));
    } catch (err: any) {
      setError(err.message || 'Failed to delete coach');
    } finally {
      setLoading(false);
    }
  };

  const headCoaches = coaches.filter(c => c.role === 'head').sort((a, b) => a.order - b.order);
  const trainers = coaches.filter(c => c.role === 'trainer').sort((a, b) => a.order - b.order);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Form Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-fit sticky top-12">
        <h2 className="text-xl font-bold mb-6">{editingId ? 'Edit Staff Member' : 'Add New Staff Member'}</h2>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle / Role Title</label>
            <input 
              type="text" 
              required
              value={formData.subtitle}
              onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
              placeholder="e.g. Head Coach, Trainer"
              className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Group</label>
            <select 
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value as 'head' | 'trainer'})}
              className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
            >
              <option value="head">Head Coach</option>
              <option value="trainer">Trainer</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Display Order (Lowest first)</label>
            <input 
              type="number" 
              required
              value={formData.order}
              onChange={(e) => setFormData({...formData, order: parseInt(e.target.value) || 0})}
              className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
            />
          </div>

          {formData.role === 'head' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description (Optional)</label>
              <textarea 
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
              />
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <button 
              type="submit" 
              disabled={loading}
              className="flex-1 bg-carbon-black text-white rounded-md py-2 text-sm font-medium hover:bg-carbon-black/90 disabled:opacity-50"
            >
              {loading ? 'Saving...' : (editingId ? 'Update' : 'Add')}
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
      <div className="lg:col-span-2 space-y-8">
        
        {/* Head Coaches */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b pb-2">Head Coaches</h3>
          <div className="space-y-4">
            {headCoaches.map(coach => (
              <div key={coach.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-lg">{coach.name}</h4>
                  <p className="text-sm font-medium text-gray-500 mb-2">{coach.subtitle}</p>
                  {coach.description && <p className="text-sm text-gray-700">{coach.description}</p>}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(coach)} className="text-xs text-blue-600 hover:text-blue-900 border border-blue-200 px-2 py-1 rounded">Edit</button>
                  <button onClick={() => handleDelete(coach.id!)} className="text-xs text-red-600 hover:text-red-900 border border-red-200 px-2 py-1 rounded">Delete</button>
                </div>
              </div>
            ))}
            {headCoaches.length === 0 && <p className="text-gray-400 italic text-sm">No head coaches added.</p>}
          </div>
        </div>

        {/* Trainers */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b pb-2">Trainers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trainers.map(coach => (
              <div key={coach.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center">
                <div>
                  <h4 className="font-bold">{coach.name}</h4>
                  <p className="text-xs text-gray-500">{coach.subtitle}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(coach)} className="text-xs text-blue-600 hover:text-blue-900 border border-blue-200 px-2 py-1 rounded">Edit</button>
                  <button onClick={() => handleDelete(coach.id!)} className="text-xs text-red-600 hover:text-red-900 border border-red-200 px-2 py-1 rounded">Del</button>
                </div>
              </div>
            ))}
            {trainers.length === 0 && <p className="text-gray-400 italic text-sm">No trainers added.</p>}
          </div>
        </div>

      </div>
    </div>
  );
}
