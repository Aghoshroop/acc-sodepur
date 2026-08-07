'use client';

type Event = {
  id?: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  type: string;
  description: string;
};

export default function MobileCalendarPage({ events }: { events: Event[] }) {
  return (
    <div className="w-full min-h-screen bg-carbon-black text-chalk-white flex flex-col pt-24 px-6 pb-12">
      <div className="mb-12 border-b border-chalk-white/10 pb-6">
        <h1 className="text-4xl font-primary font-black uppercase tracking-widest text-chalk-white leading-none">
          Competition <br/><span className="text-track-red">Calendar</span>
        </h1>
        <p className="mt-4 text-chalk-white/60 text-sm font-light leading-relaxed">
          Stay up to date with upcoming competitions, matches, and institutional events.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {events.length === 0 ? (
          <div className="text-center py-16 border border-chalk-white/10 bg-chalk-white/5">
            <h3 className="text-xl text-chalk-white font-light mb-2">No Upcoming Events</h3>
            <p className="text-chalk-white/50 text-sm">Check back later.</p>
          </div>
        ) : (
          events.map((event) => {
            const eventDate = new Date(event.date);
            const month = eventDate.toLocaleString('default', { month: 'short' });
            const day = eventDate.getDate();
            const year = eventDate.getFullYear();

            return (
              <div 
                key={event.id}
                className="relative bg-chalk-white/5 border border-chalk-white/10 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-track-red" />
                
                <div className="p-6 pl-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-center bg-carbon-black rounded-lg p-2 border border-chalk-white/10 min-w-[60px]">
                      <span className="block text-track-red text-[10px] font-bold uppercase tracking-widest">{month}</span>
                      <span className="block text-chalk-white text-2xl font-black">{day}</span>
                      <span className="block text-chalk-white/40 text-[10px] mt-1">{year}</span>
                    </div>
                    
                    <span className={`inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full
                      ${event.type === 'match' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 
                        event.type === 'training' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 
                        event.type === 'camp' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
                        'bg-gray-500/20 text-gray-400 border border-gray-500/30'}`}
                    >
                      {event.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-chalk-white mb-3">
                    {event.title}
                  </h3>
                  
                  {(event.time || event.location) && (
                    <div className="flex flex-col gap-2 mb-4 text-xs text-chalk-white/60 font-medium">
                      {event.time && (
                        <div className="flex items-center gap-2">
                          <svg className="w-3 h-3 text-track-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {event.time}
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center gap-2">
                          <svg className="w-3 h-3 text-track-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </div>
                      )}
                    </div>
                  )}

                  <p className="text-chalk-white/70 text-xs leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
