import AdmissionsHero from '@/features/admissions/components/AdmissionsHero';
import EligibilityCriteria from '@/features/admissions/components/EligibilityCriteria';
import SelectionProcess from '@/features/admissions/components/SelectionProcess';
import ApplicationCTA from '@/features/admissions/components/ApplicationCTA';

import MobileAdmissionsHero from '@/features/admissions/components/mobile/MobileAdmissionsHero';
import MobileEligibilityCriteria from '@/features/admissions/components/mobile/MobileEligibilityCriteria';
import MobileSelectionProcess from '@/features/admissions/components/mobile/MobileSelectionProcess';
import MobileApplicationCTA from '@/features/admissions/components/mobile/MobileApplicationCTA';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Join ACC | Athletics Admission & Selection',
  description: 'Join the next generation of elite athletes. Review the rigorous admissions criteria and selection process for Athletic Coaching Camp (ACC) Sodepur.',
  alternates: {
    canonical: '/admissions',
  }
};

export default function AdmissionsPage() {
  return (
    <main className="w-full bg-carbon-black min-h-screen">
      
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block">
        <div className="relative w-full">
          <AdmissionsHero />
          <EligibilityCriteria />
          <SelectionProcess />
        </div>
        <ApplicationCTA />
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full">
        <MobileAdmissionsHero />
        <MobileEligibilityCriteria />
        <MobileSelectionProcess />
        <MobileApplicationCTA />
      </div>

    </main>
  );
}
