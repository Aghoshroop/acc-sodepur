'use client';

import { useState } from 'react';
import { CalendarEvent } from '@/features/calendar/types';
import { createEvent, updateEvent, deleteEvent } from '@/features/calendar/actions';

export default function AdminCalendarClient({ initialEvents }: { initialEvents: CalendarEvent[] }) {
  const [events, setEvents] = useState<CalendarEvent[]>(initialEvents);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<Omit<CalendarEvent, 'id' | 'createdAt'>>({
    title: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    time: '',
    location: '',
    type: 'training'
  });

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      time: '',
      location: '',
      type: 'training'
    });
    setEditingId(null);
  };

  const handleEdit = (event: CalendarEvent) => {
    setEditingId(event.id || null);
    setFormData({
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time || '',
      location: event.location || '',
      type: event.type
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      if (editingId) {
        const res = await updateEvent(editingId, formData);
        if (!res.success) throw new Error(res.error);
        setEvents(events.map(ev => ev.id === editingId ? { ...ev, ...formData } : ev));
      } else {
        const newEvent = { ...formData, createdAt: new Date().toISOString() };
        const res = await createEvent(newEvent);
        if (!res.success) throw new Error(res.error);
        if (res.id) {
          setEvents([...events, { ...newEvent, id: res.id }].sort((a, b) => a.date.localeCompare(b.date)));
        }
      }
      resetForm();
    } catch (err: any) {
      setError(err.message || 'Failed to save event');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    setLoading(true);
    setError(null);
    try {
      const res = await deleteEvent(id);
      if (!res.success) throw new Error(res.error);
      setEvents(events.filter(ev => ev.id !== id));
    } catch (err: any) {
      setError(err.message || 'Failed to delete event');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Form Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-fit sticky top-12">
        <h2 className="text-xl font-bold mb-6">{editingId ? 'Edit Event' : 'Create New Event'}</h2>
        
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input 
                type="date" 
                required
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time (Optional)</label>
              <input 
                type="time" 
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <select 
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value as any})}
              className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900"
            >
              <option value="training">Training</option>
              <option value="match">Match</option>
              <option value="event">Event</option>
              <option value="camp">Camp</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location (Optional)</label>
            <input 
              type="text" 
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              placeholder="e.g. Main Pitch"
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

          <div className="flex gap-4">
            <button 
              type="submit" 
              disabled={loading}
              className="flex-1 bg-carbon-black text-white rounded-md py-2 text-sm font-medium hover:bg-carbon-black/90 disabled:opacity-50"
            >
              {loading ? 'Saving...' : (editingId ? 'Update Event' : 'Add Event')}
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
        {events.map(event => (
          <div key={event.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className={`inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded
                  ${event.type === 'match' ? 'bg-red-100 text-red-800' : 
                    event.type === 'training' ? 'bg-blue-100 text-blue-800' : 
                    event.type === 'camp' ? 'bg-green-100 text-green-800' : 
                    'bg-gray-100 text-gray-800'}`}
                >
                  {event.type}
                </span>
                <span className="ml-3 text-sm font-semibold text-gray-600">
                  {new Date(event.date).toLocaleDateString()} {event.time && `at ${event.time}`}
                </span>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleEdit(event)}
                  className="text-xs text-blue-600 hover:text-blue-900 border border-blue-200 px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(event.id!)}
                  className="text-xs text-red-600 hover:text-red-900 border border-red-200 px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mt-2 mb-1">{event.title}</h3>
            {event.location && (
              <p className="text-sm text-gray-500 mb-2 font-medium">📍 {event.location}</p>
            )}
            <p className="text-gray-700 text-sm whitespace-pre-wrap">{event.description}</p>
          </div>
        ))}
        {events.length === 0 && (
          <div className="text-center py-12 text-gray-500 bg-white rounded-lg border border-gray-200">
            No events found. Create one to get started.
          </div>
        )}
      </div>
    </div>
  );
}
