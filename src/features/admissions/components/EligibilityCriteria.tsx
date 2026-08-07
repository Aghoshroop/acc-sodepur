import Image from 'next/image';

export default function EligibilityCriteria() {
  const criteria = [
    {
      title: "Age Categories",
      description: "Admission is open to candidates starting from 6 years of age up to the U-18 bracket as of January 1st of the admission year. Verification requires original birth certificates.",
      icon: "01"
    },
    {
      title: "Medical Clearance",
      description: "A comprehensive medical examination certificate from a certified sports physician is mandatory, ensuring the candidate is fit for rigorous high-performance training.",
      icon: "02"
    },
    {
      title: "Performance Baselines",
      description: "Applicants must meet or exceed the minimum performance standards in their respective disciplines during the physical assessment phase.",
      icon: "03"
    },
    {
      title: "Academic Standing",
      description: "We believe in student-athletes. Candidates must demonstrate satisfactory academic performance and a commitment to maintaining their education alongside training.",
      icon: "04"
    }
  ];

  return (
    <section className="sticky top-0 z-20 w-full min-h-screen flex flex-col justify-center bg-chalk-white text-carbon-black py-24 md:py-48 border-b border-carbon-black/10 overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/campus/campus-hero-evolution.jpg" alt="Background" fill className="object-cover opacity-10 " />
        <div className="absolute inset-0 bg-gradient-to-b from-chalk-white/95 to-chalk-white/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="mb-20 md:mb-32">
          <h2 className="text-4xl md:text-6xl font-primary uppercase tracking-wide">
            Eligibility<br />Criteria
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24">
          {criteria.map((item, index) => (
            <div key={index} className="group relative border-t border-carbon-black/20 pt-8">
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-track-red transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:w-full" />
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="text-4xl font-primary text-carbon-black/20 group-hover:text-track-red transition-colors duration-500">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-widest mb-4">
                    {item.title}
                  </h3>
                  <p className="text-carbon-black/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
