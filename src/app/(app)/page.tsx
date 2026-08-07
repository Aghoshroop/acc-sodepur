import { cookies } from 'next/headers';
import InstitutionalHero from '@/features/home/components/InstitutionalHero';
import NoticeBoardPreview from '@/features/home/components/NoticeBoardPreview';
import AboutACC from '@/features/home/components/AboutACC';
import ExploreInstitution from '@/features/home/components/ExploreInstitution';
import PremierRelayTeaser from '@/features/home/components/PremierRelayTeaser';
import LatestResultsPreview from '@/features/home/components/LatestResultsPreview';

import FounderSection from '@/features/home/components/FounderSection';
import OlympiansSection from '@/features/home/components/OlympiansSection';
import TrainingProgrammes from '@/features/home/components/TrainingProgrammes';
import KnowledgeCentre from '@/features/home/components/KnowledgeCentre';
import AdmissionsCTA from '@/features/home/components/AdmissionsCTA';
import EntrySplashScreen from '@/components/ui/EntrySplashScreen';
import MobileHero from '@/features/home/components/mobile/MobileHero';
import MobileNoticeBoard from '@/features/home/components/mobile/MobileNoticeBoard';
import MobileAbout from '@/features/home/components/mobile/MobileAbout';
import MobileFounder from '@/features/home/components/mobile/MobileFounder';
import MobileOlympians from '@/features/home/components/mobile/MobileOlympians';

import MobilePerformance from '@/features/home/components/mobile/MobilePerformance';
import MobilePremierRelay from '@/features/home/components/mobile/MobilePremierRelay';
import MobileAdmissionsCTA from '@/features/home/components/mobile/MobileAdmissionsCTA';

export default async function InstitutionalHomepage() {
  const homepageContent = (
    <div className="w-full">
      <div className="relative w-full">
        {/* Sprint 1: Mobile Hero vs Desktop Hero */}
        <div className="hidden lg:block">
          <InstitutionalHero />
        </div>
        <div className="block lg:hidden">
          <MobileHero />
        </div>

        {/* Sprint 2: Mobile Notice Board vs Desktop Notice Board */}
        <div className="hidden lg:block">
          <NoticeBoardPreview />
        </div>
        <div className="block lg:hidden">
          <MobileNoticeBoard />
        </div>

        {/* Sprint 3: Founder */}
        <div className="hidden lg:block">
          <FounderSection />
        </div>
        <div className="block lg:hidden">
          <MobileFounder />
        </div>

        <div className="hidden lg:block">
          <OlympiansSection />
        </div>
        <div className="block lg:hidden">
          <MobileOlympians />
        </div>

        {/* Sprint 2: Mobile About vs Desktop About */}
        <div className="hidden lg:block">
          <AboutACC />
        </div>
        <div className="block lg:hidden">
          <MobileAbout />
        </div>
      </div>
      
      <div className="hidden lg:block">
        <ExploreInstitution />
      </div>
      
      {/* Desktop Only: Premier Relay usually appeared earlier on desktop? The existing architecture says so. */}
      <div className="hidden lg:block">
        <PremierRelayTeaser />
      </div>
      
      <div className="hidden lg:block">
        <LatestResultsPreview />
      </div>
      
      {/* Mobile Flow Corrected: Founder -> Successor -> Performance */}

      <div className="block lg:hidden">
        <MobilePerformance />
      </div>
      
      <div className="hidden lg:block">
        <TrainingProgrammes />
      </div>
      
      <div className="hidden lg:block">
        <KnowledgeCentre />
      </div>
      
      {/* Sprint 4: Premier Relay (Mobile climax) */}
      <div className="block lg:hidden">
        <MobilePremierRelay />
      </div>

      <div className="hidden lg:block">
        <AdmissionsCTA />
      </div>
      <div className="block lg:hidden">
        <MobileAdmissionsCTA />
      </div>
    </div>
  );

  return (
    <main className="w-full min-h-screen bg-acc-black flex flex-col selection:bg-acc-gray selection:text-acc-black">
      <EntrySplashScreen>
        {homepageContent}
      </EntrySplashScreen>
    </main>
  );
}

