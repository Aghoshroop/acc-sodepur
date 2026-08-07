import { getUpcomingEvents } from '@/features/calendar/api';
import MobileCalendarPage from './mobile/MobileCalendarPage';

export const metadata = {
  title: 'Competition Calendar | ACC',
  description: 'Upcoming competitions, matches, and events at Athletic Coaching Camp.',
};

export default async function CalendarPage() {
  const events = await getUpcomingEvents();

  return (
    <main className="w-full bg-carbon-black min-h-screen">
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block w-full">
        <div className="pt-32 pb-24 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 border-b border-chalk-white/10 pb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-primary font-black uppercase tracking-widest text-chalk-white">
                Competition <span className="text-track-red">Calendar</span>
              </h1>
              <p className="mt-4 text-chalk-white/60 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                Stay up to date with upcoming competitions, matches, and institutional events.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => {
                const eventDate = new Date(event.date);
                const month = eventDate.toLocaleString('default', { month: 'short' });
                const day = eventDate.getDate();
                const year = eventDate.getFullYear();

                return (
                  <div 
                    key={event.id}
                    className="group relative bg-chalk-white/5 border border-chalk-white/10 rounded-xl overflow-hidden hover:bg-chalk-white/10 transition-colors duration-300"
                  >
                    <div className="absolute top-0 left-0 w-[4px] h-full bg-track-red origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
                    
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div className="text-center bg-carbon-black rounded-lg p-3 border border-chalk-white/10 min-w-[80px]">
                          <span className="block text-track-red text-sm font-bold uppercase tracking-widest">{month}</span>
                          <span className="block text-chalk-white text-3xl font-black">{day}</span>
                          <span className="block text-chalk-white/40 text-xs mt-1">{year}</span>
                        </div>
                        
                        <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full
                          ${event.type === 'match' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 
                            event.type === 'training' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 
                            event.type === 'camp' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
                            'bg-gray-500/20 text-gray-400 border border-gray-500/30'}`}
                        >
                          {event.type}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-chalk-white mb-3 group-hover:text-track-red transition-colors">
                        {event.title}
                      </h3>
                      
                      {(event.time || event.location) && (
                        <div className="flex flex-col gap-2 mb-4 text-sm text-chalk-white/60 font-medium">
                          {event.time && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-track-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {event.time}
                            </div>
                          )}
                          {event.location && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-track-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {event.location}
                            </div>
                          )}
                        </div>
                      )}

                      <p className="text-chalk-white/70 text-sm leading-relaxed line-clamp-3">
                        {event.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {events.length === 0 && (
              <div className="text-center py-24 border border-chalk-white/10 rounded-xl bg-chalk-white/5">
                <h3 className="text-2xl text-chalk-white font-light mb-2">No Upcoming Events</h3>
                <p className="text-chalk-white/50">There are currently no events scheduled. Check back later.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full relative z-20">
        <MobileCalendarPage events={events} />
      </div>
    </main>
  );
}
