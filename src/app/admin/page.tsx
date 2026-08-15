'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Megaphone, Users, UserPlus, CalendarDays, Archive, Trophy, 
  Activity, ArrowUpRight, Clock, CheckCircle2 
} from 'lucide-react';

const STATS = [
  { label: 'Notices', value: 'Manage', icon: Megaphone, href: '/admin/notices', color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { label: 'Admissions', value: 'Settings', icon: UserPlus, href: '/admin/admissions', color: 'text-green-400', bg: 'bg-green-400/10' },
  { label: 'Athletes', value: 'Roster', icon: Users, href: '/admin/athletes', color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { label: 'Calendar', value: 'Events', icon: CalendarDays, href: '/admin/calendar', color: 'text-red-400', bg: 'bg-red-400/10' },
  { label: 'Coaches', value: 'Staff', icon: Users, href: '/admin/coaches', color: 'text-orange-400', bg: 'bg-orange-400/10' },
  { label: 'Achievements', value: 'Results', icon: Trophy, href: '/admin/achievements', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
  { label: 'Archive', value: 'Gallery', icon: Archive, href: '/admin/archive', color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
];

const RECENT_ACTIVITIES = [
  { id: 1, title: 'New admission application received', time: '2 hours ago', icon: UserPlus, color: 'text-green-400' },
  { id: 2, title: 'Summer Training Camp schedule updated', time: '5 hours ago', icon: CalendarDays, color: 'text-blue-400' },
  { id: 3, title: 'Achievement added for State Meet', time: '1 day ago', icon: Trophy, color: 'text-yellow-400' },
  { id: 4, title: 'System maintenance completed', time: '2 days ago', icon: CheckCircle2, color: 'text-emerald-400' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 24 } }
};

export default function AdminDashboard() {
  const [greeting, setGreeting] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');

    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(new Date().toLocaleDateString('en-US', options));
  }, []);

  return (
    <div className="p-6 lg:p-12 min-h-screen bg-transparent font-body text-chalk-white overflow-x-hidden relative">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-track-red/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-primary uppercase tracking-tight text-chalk-white mb-2">
            {greeting}, <span className="text-track-red">Admin</span>
          </h1>
          <p className="text-chalk-white/60 font-light flex items-center gap-2">
            <Clock size={16} />
            {currentDate}
          </p>
        </div>
        
        <div className="flex gap-4">
          <div className="bg-chalk-white/5 px-6 py-3 rounded-lg border border-chalk-white/10 flex items-center gap-4 backdrop-blur-sm">
            <div className="p-2 bg-track-red/10 rounded-md">
              <Activity size={20} className="text-track-red" />
            </div>
            <div>
              <p className="text-xs text-chalk-white/50 uppercase tracking-widest font-bold">System Status</p>
              <p className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                All Systems Operational
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Main Content Area */}
        <div className="xl:col-span-2 flex flex-col gap-8">
          
          {/* Quick Stats Overview */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-primary uppercase tracking-widest text-chalk-white">Quick Stats</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Active Athletes', value: '248', trend: '+12 this month' },
                { label: 'Pending Admissions', value: '14', trend: 'Requires attention' },
                { label: 'Upcoming Events', value: '3', trend: 'Next 30 days' }
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="bg-chalk-white/5 p-6 rounded-xl border border-chalk-white/10 shadow-sm relative overflow-hidden backdrop-blur-md"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Activity size={64} className="text-chalk-white" />
                  </div>
                  <p className="text-xs text-chalk-white/50 uppercase tracking-widest font-bold mb-2">{stat.label}</p>
                  <h3 className="text-4xl font-primary tracking-tighter mb-2 text-chalk-white">{stat.value}</h3>
                  <p className="text-xs font-medium text-track-red">{stat.trend}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Management Modules */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-primary uppercase tracking-widest text-chalk-white">Management Modules</h2>
            </div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div key={stat.label} variants={itemVariants} className="h-full">
                    <Link 
                      href={stat.href}
                      className="group flex flex-col bg-chalk-white/5 p-6 rounded-xl border border-chalk-white/10 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:border-track-red/30 transition-all duration-300 relative overflow-hidden h-full backdrop-blur-sm"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-chalk-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className={`p-3 rounded-lg ${stat.bg} ${stat.color} transition-colors border border-chalk-white/5`}>
                          <Icon size={24} />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-chalk-white/5 border border-chalk-white/10 flex items-center justify-center group-hover:bg-track-red group-hover:border-track-red group-hover:text-white text-chalk-white/40 transition-all duration-300 transform group-hover:rotate-45">
                          <ArrowUpRight size={16} />
                        </div>
                      </div>
                      
                      <div className="relative z-10 mt-auto">
                        <h3 className="text-lg font-bold text-chalk-white mb-1">{stat.label}</h3>
                        <p className="text-xs text-chalk-white/50 font-medium uppercase tracking-wider">{stat.value}</p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </section>
        </div>

        {/* Sidebar Area (Recent Activity) */}
        <div className="xl:col-span-1">
          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-chalk-white/5 rounded-2xl border border-chalk-white/10 p-6 shadow-sm h-full backdrop-blur-md"
          >
            <h2 className="text-xl font-primary uppercase tracking-widest text-chalk-white mb-8 border-b border-chalk-white/10 pb-4">
              Recent Activity
            </h2>
            
            <div className="flex flex-col gap-6">
              {RECENT_ACTIVITIES.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={activity.id} className="flex gap-4 relative">
                    {/* Connection Line */}
                    {index !== RECENT_ACTIVITIES.length - 1 && (
                      <div className="absolute left-5 top-10 bottom-[-24px] w-[1px] bg-chalk-white/10" />
                    )}
                    
                    <div className="relative z-10">
                      <div className={`w-10 h-10 rounded-full bg-carbon-black border border-chalk-white/10 shadow-lg flex items-center justify-center ${activity.color}`}>
                        <Icon size={16} />
                      </div>
                    </div>
                    
                    <div className="pt-2 flex-1 pb-2">
                      <p className="text-sm font-semibold text-chalk-white mb-1 leading-snug">{activity.title}</p>
                      <p className="text-xs text-chalk-white/50 font-medium">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <button className="w-full mt-8 py-3 text-xs font-bold text-track-red uppercase tracking-widest hover:bg-track-red/10 rounded-lg transition-colors border border-transparent hover:border-track-red/20">
              View All Activity
            </button>
          </motion.section>
        </div>

      </div>
    </div>
  );
}
