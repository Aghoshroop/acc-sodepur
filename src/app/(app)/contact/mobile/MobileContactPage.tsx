import React from 'react';
import Image from 'next/image';

export default function MobileContactPage() {
  return (
    <div className="w-full bg-chalk-white text-carbon-black min-h-screen relative overflow-hidden flex flex-col">
      {/* Background element */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-10 " />
        <div className="absolute inset-0 bg-gradient-to-b from-chalk-white/95 to-chalk-white/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 w-full pt-32 pb-24 px-6 flex flex-col flex-grow">
        <div className="mb-16">
          <h1 className="text-6xl sm:text-7xl font-primary uppercase tracking-tight leading-[0.9] mb-8">
            Contact
          </h1>
          <p className="text-xl font-light opacity-80 max-w-2xl leading-relaxed">
            For admission inquiries, trial schedules, or any questions regarding our high-performance program.
          </p>
        </div>

        <div className="flex flex-col gap-16 flex-grow">
          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-track-red mb-4 border-b border-carbon-black/10 pb-3">
                Headquarters
              </h2>
              <div className="text-2xl font-light leading-relaxed">
                <p>Athletic Coaching Camp</p>
                <p>Sodepur High School Ground</p>
                <p>Sodepur, Kolkata</p>
                <p>West Bengal 700114</p>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-track-red mb-4 border-b border-carbon-black/10 pb-3">
                Direct Lines
              </h2>
              <div className="text-2xl font-light leading-relaxed space-y-6">
                <p className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-carbon-black/50 mb-1">Admissions & General</span>
                  <a href="tel:+919830098300" className="hover:text-track-red transition-colors active:text-track-red">+91 98300 98300</a>
                </p>
                <p className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-carbon-black/50 mb-1">Email</span>
                  <a href="mailto:info@athleticcoachingcamp.com" className="hover:text-track-red transition-colors text-[20px] break-all active:text-track-red">info@athleticcoachingcamp.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-carbon-black text-chalk-white p-8 relative overflow-hidden mt-8 -mx-6">
            {/* Decorative background element */}
            <div className="absolute -right-10 -top-10 text-[10rem] font-primary opacity-5 select-none pointer-events-none">
              C
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-primary uppercase tracking-wide mb-8">Send a Message</h2>
              
              <form className="space-y-8">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest opacity-70">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-chalk-white/20 px-0 py-3 focus:outline-none focus:border-track-red transition-colors text-base"
                    placeholder="ENTER YOUR NAME"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest opacity-70">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-chalk-white/20 px-0 py-3 focus:outline-none focus:border-track-red transition-colors text-base"
                    placeholder="ENTER YOUR EMAIL"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest opacity-70">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-chalk-white/20 px-0 py-3 focus:outline-none focus:border-track-red transition-colors text-base resize-none"
                    placeholder="HOW CAN WE HELP YOU?"
                  />
                </div>

                <button
                  type="button"
                  className="w-full py-5 mt-4 bg-track-red text-chalk-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-chalk-white hover:text-carbon-black transition-colors duration-300 active:bg-chalk-white active:text-carbon-black"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
