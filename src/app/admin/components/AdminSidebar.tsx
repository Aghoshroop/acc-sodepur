'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Megaphone, 
  Users, 
  UserPlus, 
  CalendarDays, 
  Menu, 
  X,
  LogOut,
  Trophy,
  Archive
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Notice Board', href: '/admin/notices', icon: Megaphone },
  { label: 'Admissions', href: '/admin/admissions', icon: UserPlus },
  { label: 'Athletes', href: '/admin/athletes', icon: Users },
  { label: 'Coaches', href: '/admin/coaches', icon: Users }, // Will implement later
  { label: 'Competitions', href: '/admin/calendar', icon: CalendarDays },
  { label: 'Achievements', href: '/admin/achievements', icon: Trophy }, // Will implement later
  { label: 'Archive', href: '/admin/archive', icon: Archive }, // Will implement later
];

export default function AdminSidebar({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/admin/auth/login', { method: 'DELETE' });
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-carbon-black flex">
      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-carbon-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-screen w-64 bg-carbon-black border-r border-chalk-white/10 text-chalk-white flex flex-col
        transition-transform duration-300 ease-in-out lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image src="/images/logo.png" alt="ACC Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-primary font-black tracking-widest uppercase">ACC <span className="text-track-red text-sm">Admin</span></span>
          </Link>
          <button onClick={() => setIsOpen(false)} className="lg:hidden text-chalk-white/50 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <div className="text-xs font-bold text-chalk-white/30 uppercase tracking-widest mb-4 px-2">Management</div>
          
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors
                  ${isActive 
                    ? 'bg-track-red text-white' 
                    : 'text-chalk-white/60 hover:text-white hover:bg-chalk-white/10'
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={18} className={isActive ? 'text-white' : 'text-chalk-white/50'} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-chalk-white/10">
          <div className="flex items-center gap-3 px-3 py-3 mb-2 rounded-lg bg-chalk-white/5">
            <div className="w-8 h-8 rounded-full bg-track-red flex items-center justify-center text-white font-bold text-xs">
              SA
            </div>
            <div>
              <p className="text-sm font-bold">Super Admin</p>
              <p className="text-xs text-chalk-white/50">Full Access</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-400 hover:text-white hover:bg-red-500/20 transition-colors"
          >
            <LogOut size={18} />
            Logout Session
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:pl-64 flex flex-col min-h-screen">
        {/* Mobile Header */}
        <div className="lg:hidden bg-carbon-black text-white p-4 flex items-center gap-4 sticky top-0 z-30 border-b border-chalk-white/10">
          <button onClick={() => setIsOpen(true)} className="p-1">
            <Menu size={24} />
          </button>
          <span className="font-primary font-bold tracking-widest uppercase">ACC Admin</span>
        </div>
        
        <div className="flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}
