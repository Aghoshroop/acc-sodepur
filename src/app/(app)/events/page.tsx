import Image from 'next/image';
import HeroStark from '@/components/ui/HeroStark';
import BrutalistGrid from '@/components/ui/BrutalistGrid';
import MobileEventsPage from './mobile/MobileEventsPage';

export const metadata = {
  title: 'Events | Athletic Coaching Camp',
};

export default function EventsPage() {
  const events = [
    {
      title: "Netaji's Birthday",
      subtitle: "January 23",
      description: "Celebrating the birth anniversary of Netaji Subhas Chandra Bose with patriotic vigor and athletic drills.",
    },
    {
      title: "Republic Day",
      subtitle: "January 26",
      description: "Flag hoisting ceremony and special morning training sessions to honor the nation.",
    },
    {
      title: "Admission Trial",
      subtitle: "Annual Intake",
      description: "The official intake trials for the upcoming athletic season. Identifying the next generation of elite talent.",
    },
    {
      title: "Foundation Day",
      subtitle: "Annual Commemoration",
      description: "Marking the establishment of the Athletic Coaching Camp with cultural events and alumni meets.",
    },
    {
      title: "Independence Day",
      subtitle: "August 15",
      description: "Commemorating our nation's freedom with a grand parade and exhibition sports events.",
    },
    {
      title: "Biswakarma Puja",
      subtitle: "September 17",
      description: "A day of reverence and celebration, honoring the tools, tracks, and equipment that build our athletes.",
    },
    {
      title: "Annual Sports Meet",
      subtitle: "Winter Event",
      description: "Our premier internal competitive meet where current athletes battle for the title of Camp Champion.",
    },
    {
      title: "Grand Picnic",
      subtitle: "Winter Retreat",
      description: "An annual gathering for athletes, coaches, and families to bond, relax, and celebrate the year's achievements.",
    }
  ];

  return (
    <main className="w-full bg-carbon-black min-h-screen">
      
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block relative w-full">
        <section className="sticky top-0 z-10 w-full min-h-screen flex flex-col justify-center border-b border-chalk-white/10 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/473379031_8722792124495871_1880928105700214232_n.jpg" 
              alt="Events Hero" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="relative z-10 w-full">
            <HeroStark 
              title={<>The<br />Calendar</>}
              subtitle="Fixed Annual Events"
              theme="transparent"
            />
          </div>
        </section>

        <section className="relative z-20 w-full min-h-screen pt-32 pb-16">
          <div className="absolute inset-0 z-0">
            <Image src="/images/legacy/legacy-timeline-2002.jpg" alt="Background" fill className="object-cover opacity-20 " />
            <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
          </div>
          <div className="relative z-10 w-full max-w-[1800px] mx-auto">
            <BrutalistGrid items={events} columns={2} theme="dark" />
          </div>
        </section>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full">
        <MobileEventsPage events={events} />
      </div>

    </main>
  );
}
