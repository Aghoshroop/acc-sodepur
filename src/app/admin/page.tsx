import Link from 'next/link';
import { Megaphone, Users, UserPlus, CalendarDays, Archive, Trophy } from 'lucide-react';

export const metadata = {
  title: 'Admin Dashboard | ACC',
};

const STATS = [
  { label: 'Notices', value: 'Manage', icon: Megaphone, href: '/admin/notices', color: 'bg-blue-500' },
  { label: 'Admissions', value: 'Settings', icon: UserPlus, href: '/admin/admissions', color: 'bg-green-500' },
  { label: 'Athletes', value: 'Roster', icon: Users, href: '/admin/athletes', color: 'bg-purple-500' },
  { label: 'Calendar', value: 'Events', icon: CalendarDays, href: '/admin/calendar', color: 'bg-red-500' },
  { label: 'Coaches', value: 'Staff', icon: Users, href: '/admin/coaches', color: 'bg-orange-500' },
  { label: 'Achievements', value: 'Results', icon: Trophy, href: '/admin/achievements', color: 'bg-yellow-500' },
  { label: 'Archive', value: 'Gallery', icon: Archive, href: '/admin/archive', color: 'bg-indigo-500' },
];

export default function AdminDashboard() {
  return (
    <div className="p-6 lg:p-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Welcome, Super Admin</h1>
        <p className="text-gray-500 mt-2">Manage the Athletic Coaching Camp website content and settings from this dashboard.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link 
              key={stat.label} 
              href={stat.href}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${stat.color} text-white`}>
                  <Icon size={24} />
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
