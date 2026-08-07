import Image from 'next/image';

export default function MobileEligibilityCriteria() {
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
    <section className="relative w-full py-20 bg-chalk-white text-carbon-black border-b border-carbon-black/10 overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/campus/campus-hero-evolution.jpg" alt="Background" fill className="object-cover opacity-10 " />
        <div className="absolute inset-0 bg-gradient-to-b from-chalk-white/95 to-chalk-white/80" />
      </div>

      <div className="relative z-10 px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-primary uppercase tracking-wide">
            Eligibility<br />Criteria
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {criteria.map((item, index) => (
            <div key={index} className="relative border-t border-carbon-black/20 pt-6">
              <div className="absolute top-0 left-0 w-12 h-[2px] bg-track-red" />
              
              <div className="flex flex-col gap-4">
                <div className="text-3xl font-primary text-track-red">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-3">
                    {item.title}
                  </h3>
                  <p className="text-carbon-black/70 text-xs font-light leading-relaxed">
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
