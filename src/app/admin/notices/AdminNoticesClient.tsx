'use client';

import { useState } from 'react';
import { Notice } from '@/features/notices/types';
import { createNotice, updateNotice, deleteNotice } from '@/features/notices/actions';

export default function AdminNoticesClient({ initialNotices }: { initialNotices: Notice[] }) {
  const [notices, setNotices] = useState<Notice[]>(initialNotices);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<Omit<Notice, 'id'>>({
    title: '',
    description: '',
    publishDate: new Date().toISOString(),
    expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    category: 'GENERAL',
    archiveStatus: false,
    link: '',
    eventDate: ''
  });

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      publishDate: new Date().toISOString(),
      expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      category: 'GENERAL',
      archiveStatus: false,
      link: '',
      eventDate: ''
    });
    setEditingId(null);
  };

  const handleEdit = (notice: Notice) => {
    setEditingId(notice.id);
    setFormData({
      title: notice.title,
      description: notice.description,
      publishDate: notice.publishDate,
      expiryDate: notice.expiryDate,
      category: notice.category,
      archiveStatus: notice.archiveStatus,
      link: notice.link || '',
      eventDate: notice.eventDate || ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      if (editingId) {
        const res = await updateNotice(editingId, formData);
        if (!res.success) throw new Error(res.error);
        setNotices(notices.map(n => n.id === editingId ? { ...formData, id: editingId } : n));
      } else {
        const res = await createNotice(formData);
        if (!res.success) throw new Error(res.error);
        if (res.id) {
          setNotices([{ ...formData, id: res.id }, ...notices]);
        }
      }
      resetForm();
    } catch (err: any) {
      setError(err.message || 'Failed to save notice');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this notice?')) return;

    setLoading(true);
    setError(null);
    try {
      const res = await deleteNotice(id);
      if (!res.success) throw new Error(res.error);
      setNotices(notices.filter(n => n.id !== id));
    } catch (err: any) {
      setError(err.message || 'Failed to delete notice');
    } finally {
      setLoading(false);
    }
  };

  const handleToggleArchive = async (notice: Notice) => {

    setLoading(true);
    setError(null);
    try {
      const res = await updateNotice(notice.id, { archiveStatus: !notice.archiveStatus });
      if (!res.success) throw new Error(res.error);
      setNotices(notices.map(n => n.id === notice.id ? { ...n, archiveStatus: !notice.archiveStatus } : n));
    } catch (err: any) {
      setError(err.message || 'Failed to update notice');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Form Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-fit sticky top-12">
        <h2 className="text-xl font-bold mb-6">{editingId ? 'Edit Notice' : 'Create New Notice'}</h2>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <hr className="my-4 hidden" />

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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select 
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
            >
              <option value="GENERAL">General</option>
              <option value="URGENT">Urgent</option>
              <option value="FEATURED">Featured</option>
              <option value="TODAY">Today</option>
              <option value="SPORTS">Sports</option>
              <option value="ACADEMICS">Academics</option>
            </select>
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Optional Link</label>
            <input 
              type="url" 
              value={formData.link || ''}
              onChange={(e) => setFormData({...formData, link: e.target.value})}
              placeholder="https://..."
              className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Event Date (Optional)</label>
            <input 
              type="date" 
              value={formData.eventDate ? formData.eventDate.split('T')[0] : ''}
              onChange={(e) => setFormData({...formData, eventDate: e.target.value ? new Date(e.target.value).toISOString() : ''})}
              className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
            />
          </div>

          <div className="flex gap-4">
            <button 
              type="submit" 
              disabled={loading}
              className="flex-1 bg-carbon-black text-white rounded-md py-2 text-sm font-medium hover:bg-carbon-black/90 disabled:opacity-50"
            >
              {loading ? 'Saving...' : (editingId ? 'Update Notice' : 'Post Notice')}
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
        {notices.map(notice => (
          <div key={notice.id} className={`bg-white p-6 rounded-lg shadow-sm border ${notice.archiveStatus ? 'border-gray-200 opacity-60' : 'border-gray-300'}`}>
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className={`inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded ${notice.archiveStatus ? 'bg-gray-100 text-gray-500' : 'bg-red-100 text-red-800'}`}>
                  {notice.category}
                </span>
                {notice.archiveStatus && (
                  <span className="ml-2 inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-yellow-100 text-yellow-800">
                    Archived
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleToggleArchive(notice)}
                  className="text-xs text-gray-600 hover:text-gray-900 border border-gray-200 px-2 py-1 rounded"
                >
                  {notice.archiveStatus ? 'Unarchive' : 'Archive'}
                </button>
                <button 
                  onClick={() => handleEdit(notice)}
                  className="text-xs text-blue-600 hover:text-blue-900 border border-blue-200 px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(notice.id)}
                  className="text-xs text-red-600 hover:text-red-900 border border-red-200 px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mt-2 mb-1">{notice.title}</h3>
            <p suppressHydrationWarning className="text-sm text-gray-500 mb-2">
              Published: {new Date(notice.publishDate).toLocaleDateString()}
            </p>
            {notice.eventDate && (
              <p className="text-sm font-medium text-track-red mb-4">
                Event Date: {new Date(notice.eventDate).toLocaleDateString()}
              </p>
            )}
            {!notice.eventDate && <div className="mb-4" />}
            <p className="text-gray-700 text-sm whitespace-pre-wrap">{notice.description}</p>
          </div>
        ))}
        {notices.length === 0 && (
          <div className="text-center py-12 text-gray-500 bg-white rounded-lg border border-gray-200">
            No notices found. Create one to get started.
          </div>
        )}
      </div>
    </div>
  );
}
