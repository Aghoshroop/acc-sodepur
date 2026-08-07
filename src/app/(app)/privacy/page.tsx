import HeroStark from '@/components/ui/HeroStark';
import TextCanvas from '@/components/ui/TextCanvas';
import MobilePrivacyPage from './mobile/MobilePrivacyPage';

export const metadata = {
  title: 'Privacy Policy | Athletic Coaching Camp',
};

export default function PrivacyPage() {
  return (
    <main className="w-full bg-chalk-white min-h-screen">
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block relative w-full">
        <HeroStark 
          title={<>Privacy<br />Policy</>}
          subtitle="Data Protection"
          theme="light"
        />
        
        <TextCanvas title="Information We Collect" theme="light">
          <p>
            At Athletic Coaching Camp (ACC), we take the privacy of our athletes and applicants seriously. This policy outlines how we handle your personal and performance data.
          </p>
          
          <h2>Personal Data</h2>
          <p>
            During the admission process, we collect essential personal information including but not limited to: name, date of birth, medical history, and contact details. This information is strictly used for eligibility verification and emergency contact purposes.
          </p>
          
          <h2>Performance Metrics</h2>
          <p>
            As an elite athletic institution, we continuously monitor and record performance metrics, biomechanical data, and physiological markers. This data is the property of ACC and is used exclusively for training optimization and statistical analysis.
          </p>
          
          <h2>Data Security</h2>
          <p>
            All digital records are secured using industry-standard encryption protocols. Medical records are kept in strict confidence and are only accessible by our certified sports physicians and head coaching staff.
          </p>
          
          <h2>Contact</h2>
          <p>
            For any inquiries regarding your data or our privacy practices, please contact our administration via the Contact page.
          </p>
        </TextCanvas>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full relative z-20">
        <MobilePrivacyPage />
      </div>
    </main>
  );
}
