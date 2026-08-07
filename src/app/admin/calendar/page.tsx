import { getAllEvents } from '@/features/calendar/api';
import AdminCalendarClient from './AdminCalendarClient';

export default async function AdminCalendarPage() {
  const events = await getAllEvents();
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Competition Calendar Admin Panel</h1>
          <p className="text-gray-500 mt-2">Manage all competitions, matches, and events here.</p>
        </div>
        
        <AdminCalendarClient initialEvents={events} />
      </div>
    </div>
  );
}
