'use client';

import { useState } from 'react';
import { ArchiveItem } from '@/features/archive/types';
import { createArchiveItem, updateArchiveItem, deleteArchiveItem } from '@/features/archive/actions';

export default function AdminArchiveClient({ initialItems }: { initialItems: ArchiveItem[] }) {
  const [items, setItems] = useState<ArchiveItem[]>(initialItems);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState<Omit<ArchiveItem, 'id'>>({
    title: '',
    description: '',
    category: 'Documents',
    image: '',
    year: new Date().getFullYear()
  });

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      category: 'Documents',
      image: '',
      year: new Date().getFullYear()
    });
    setEditingId(null);
  };

  const handleEdit = (item: ArchiveItem) => {
    setEditingId(item.id || null);
    setFormData({
      title: item.title,
      description: item.description,
      category: item.category,
      image: item.image,
      year: item.year
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (editingId && !editingId.startsWith('arch-')) {
        const res = await updateArchiveItem(editingId, formData);
        if (!res.success) throw new Error(res.error);
        setItems(items.map(i => i.id === editingId ? { ...i, ...formData } : i));
      } else {
        const res = await createArchiveItem(formData);
        if (!res.success) throw new Error(res.error);
        if (res.id) {
          setItems([{ ...formData, id: res.id }, ...items].sort((a, b) => b.year - a.year));
        }
      }
      resetForm();
    } catch (err: any) {
      setError(err.message || 'Failed to save item. If editing a hardcoded item, it will create a new one instead.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (id.startsWith('arch-')) {
      setError('Cannot delete hardcoded placeholder items. Please add new items to override.');
      return;
    }
    if (!confirm('Are you sure you want to delete this item?')) return;
    setLoading(true);
    setError(null);
    try {
      const res = await deleteArchiveItem(id);
      if (!res.success) throw new Error(res.error);
      setItems(items.filter(i => i.id !== id));
    } catch (err: any) {
      setError(err.message || 'Failed to delete item');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Form Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-fit sticky top-12">
        <h2 className="text-xl font-bold mb-6">{editingId ? 'Edit Archive Item' : 'Add New Item'}</h2>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input 
              type="text" 
              required
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
              >
                <option value="Documents">Documents</option>
                <option value="Medals">Medals</option>
                <option value="Equipment">Equipment</option>
                <option value="Photography">Photography</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL (or path)</label>
            <input 
              type="text" 
              required
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              placeholder="/images/campus/..."
              className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea 
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button 
              type="submit" 
              disabled={loading}
              className="flex-1 bg-carbon-black text-white rounded-md py-2 text-sm font-medium hover:bg-carbon-black/90 disabled:opacity-50"
            >
              {loading ? 'Saving...' : (editingId && !editingId.startsWith('arch-') ? 'Update' : 'Add')}
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
      <div className="lg:col-span-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
              <div 
                className="h-32 bg-gray-200 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {item.category} • {item.year}
                  </span>
                </div>
                <h4 className="font-bold mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500 line-clamp-2 mb-4 flex-1">{item.description}</p>
                
                <div className="flex gap-2 mt-auto">
                  <button onClick={() => handleEdit(item)} className="text-xs text-blue-600 hover:text-blue-900 border border-blue-200 px-2 py-1 rounded">Edit</button>
                  <button onClick={() => handleDelete(item.id!)} className="text-xs text-red-600 hover:text-red-900 border border-red-200 px-2 py-1 rounded">Delete</button>
                </div>
              </div>
            </div>
          ))}
          {items.length === 0 && <p className="text-gray-400 italic text-sm col-span-2">No archive items found.</p>}
        </div>
      </div>
    </div>
  );
}
