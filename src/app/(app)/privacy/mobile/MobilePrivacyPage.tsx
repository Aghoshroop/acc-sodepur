'use client';

export default function MobilePrivacyPage() {
  return (
    <div className="w-full bg-chalk-white text-carbon-black flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-24 flex flex-col justify-center border-b border-carbon-black/10 px-6 bg-chalk-white">
        <div className="relative z-10 w-full text-center mt-12">
          <span className="text-[10px] tracking-[0.4em] uppercase text-track-red mb-4 block font-bold">
            Data Protection
          </span>
          <h1 className="text-5xl font-primary uppercase tracking-tighter leading-none mb-6">
            Privacy<br />Policy
          </h1>
          <div className="w-12 h-[1px] bg-track-red mx-auto mt-6" />
        </div>
      </section>

      {/* Privacy Content */}
      <section className="relative w-full py-16 px-6 bg-chalk-white">
        <div className="relative z-10 w-full flex flex-col gap-12">
          <div className="flex flex-col">
            <h2 className="text-2xl font-primary uppercase tracking-tight text-carbon-black mb-6 border-b border-carbon-black/10 pb-4">
              Information We Collect
            </h2>
            
            <div className="flex flex-col gap-8 text-sm font-light leading-relaxed text-carbon-black/80">
              <p>
                At Athletic Coaching Camp (ACC), we take the privacy of our athletes and applicants seriously. This policy outlines how we handle your personal and performance data.
              </p>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-primary uppercase tracking-tight text-carbon-black">Personal Data</h3>
                <p className="bg-carbon-black/5 border border-carbon-black/10 p-4">
                  During the admission process, we collect essential personal information including but not limited to: name, date of birth, medical history, and contact details. This information is strictly used for eligibility verification and emergency contact purposes.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-primary uppercase tracking-tight text-carbon-black">Performance Metrics</h3>
                <p className="bg-carbon-black/5 border border-carbon-black/10 p-4">
                  As an elite athletic institution, we continuously monitor and record performance metrics, biomechanical data, and physiological markers. This data is the property of ACC and is used exclusively for training optimization and statistical analysis.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-primary uppercase tracking-tight text-carbon-black">Data Security</h3>
                <p className="bg-carbon-black/5 border border-carbon-black/10 p-4">
                  All digital records are secured using industry-standard encryption protocols. Medical records are kept in strict confidence and are only accessible by our certified sports physicians and head coaching staff.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-primary uppercase tracking-tight text-carbon-black">Contact</h3>
                <p className="bg-carbon-black/5 border border-carbon-black/10 p-4">
                  For any inquiries regarding your data or our privacy practices, please contact our administration via the Contact page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
