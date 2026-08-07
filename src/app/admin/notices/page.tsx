import { getAllNotices } from '@/features/notices/api';
import AdminNoticesClient from './AdminNoticesClient';

export default async function AdminNoticesPage() {
  const notices = await getAllNotices();
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Announcements Admin Panel</h1>
          <p className="text-gray-500 mt-2">Manage all public notices, announcements, and alerts here.</p>
        </div>
        
        <AdminNoticesClient initialNotices={notices} />
      </div>
    </div>
  );
}
