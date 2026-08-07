import { getAllCoaches } from '@/features/coaches/api';
import AdminCoachesClient from './AdminCoachesClient';

export default async function AdminCoachesPage() {
  const coaches = await getAllCoaches();
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Coaches & Staff</h1>
          <p className="text-gray-500 mt-2">Manage the coaching staff and trainers displayed on the public site.</p>
        </div>
        
        <AdminCoachesClient initialCoaches={coaches} />
      </div>
    </div>
  );
}
