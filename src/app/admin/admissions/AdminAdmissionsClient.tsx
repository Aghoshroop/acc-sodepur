'use client';

import { useState } from 'react';
import { AdmissionsSettings } from '@/features/admissions/types';
import { updateAdmissionsSettings } from '@/features/admissions/actions';

export default function AdminAdmissionsClient({ initialSettings }: { initialSettings: AdmissionsSettings }) {
  const [settings, setSettings] = useState<AdmissionsSettings>(initialSettings);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    setIsSaving(true);
    try {
      const result = await updateAdmissionsSettings(settings);
      
      if (!result.success) {
        setError(result.error || 'An error occurred');
      } else {
        setSuccess(true);
      }
    } catch (err: any) {
      setError(err.message || 'Network error');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-chalk-white text-carbon-black">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-primary uppercase tracking-wide mb-4">
          Admissions Control
        </h1>
        <p className="text-carbon-black/70 max-w-2xl">
          Manage the public availability of the Admissions Form. When active, users can download the form using the provided link.
        </p>
      </div>

      <div className="border border-carbon-black/20 p-8 md:p-12 max-w-2xl">
        <form onSubmit={handleSave} className="space-y-8">
          {error && (
            <div className="bg-track-red/10 border border-track-red p-4 text-track-red font-bold">
              {error}
            </div>
          )}
          
          {success && (
            <div className="bg-green-100 border border-green-600 p-4 text-green-700 font-bold">
              Settings updated successfully!
            </div>
          )}

          <div className="flex items-center justify-between p-6 border border-carbon-black/10 bg-carbon-black/5">
            <div>
              <h3 className="font-bold uppercase tracking-widest mb-1">Form Status</h3>
              <p className="text-sm opacity-70">Toggle whether the form is available for download.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={settings.isFormActive}
                onChange={(e) => setSettings({ ...settings, isFormActive: e.target.checked })}
              />
              <div className="w-14 h-7 bg-carbon-black/20 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-track-red rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-track-red"></div>
            </label>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold uppercase tracking-widest">
              PDF Download Link (Google Drive / Direct Link)
            </label>
            <input
              type="url"
              className="w-full bg-transparent border-b-2 border-carbon-black/20 px-0 py-4 focus:outline-none focus:border-track-red transition-colors"
              placeholder="https://..."
              value={settings.formUrl || ''}
              onChange={(e) => setSettings({ ...settings, formUrl: e.target.value })}
            />
          </div>


          <button
            type="submit"
            disabled={isSaving}
            className="w-full py-4 bg-carbon-black text-chalk-white uppercase tracking-widest font-bold hover:bg-track-red transition-colors disabled:opacity-50"
          >
            {isSaving ? 'Saving...' : 'Save Settings'}
          </button>
        </form>
      </div>
    </div>
  );
}
