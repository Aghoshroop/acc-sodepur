import { getAllResults } from '@/features/results/api';
import AdminAchievementsClient from './AdminAchievementsClient';

export default async function AdminAchievementsPage() {
  const results = await getAllResults();
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Achievements</h1>
          <p className="text-gray-500 mt-2">Manage competition results, records, and medal counts.</p>
        </div>
        
        <AdminAchievementsClient initialResults={results} />
      </div>
    </div>
  );
}
