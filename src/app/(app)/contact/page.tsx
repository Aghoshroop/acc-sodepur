import Image from 'next/image';
import MobileContactPage from './mobile/MobileContactPage';

export const metadata = {
  title: 'Contact | Athletic Coaching Camp',
  description: 'Get in touch with the Athletic Coaching Camp administration for admission inquiries, trial schedules, and general questions.',
};

export default function ContactPage() {
  return (
    <main className="w-full bg-chalk-white min-h-screen text-carbon-black relative overflow-hidden">
      
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block border-t-8 border-track-red h-full w-full relative">
        {/* Background element */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-10 " />
          <div className="absolute inset-0 bg-gradient-to-b from-chalk-white/95 to-chalk-white/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 w-full pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-primary uppercase tracking-tight leading-[0.9] mb-8">
              Contact
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-80 max-w-2xl">
              For admission inquiries, trial schedules, or any questions regarding our high-performance program.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            {/* Contact Details */}
            <div className="space-y-16">
              <div>
                <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-track-red mb-6 border-b border-carbon-black/10 pb-4">
                  Headquarters
                </h2>
                <div className="text-2xl md:text-3xl font-light leading-relaxed">
                  <p>Athletic Coaching Camp</p>
                  <p>Sodepur High School Ground</p>
                  <p>Sodepur, Kolkata</p>
                  <p>West Bengal 700114</p>
                </div>
              </div>

              <div>
                <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-track-red mb-6 border-b border-carbon-black/10 pb-4">
                  Direct Lines
                </h2>
                <div className="text-2xl md:text-3xl font-light leading-relaxed space-y-4">
                  <p>
                    <span className="block text-sm uppercase tracking-widest text-carbon-black/50 mb-1">Admissions & General</span>
                    <a href="tel:+919830098300" className="hover:text-track-red transition-colors">+91 98300 98300</a>
                  </p>
                  <p>
                    <span className="block text-sm uppercase tracking-widest text-carbon-black/50 mb-1">Email</span>
                    <a href="mailto:info@athleticcoachingcamp.com" className="hover:text-track-red transition-colors">info@athleticcoachingcamp.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-carbon-black text-chalk-white p-8 md:p-12 relative overflow-hidden group">
              {/* Decorative background element */}
              <div className="absolute -right-20 -top-20 text-[20rem] font-primary opacity-5 select-none pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                C
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-primary uppercase tracking-wide mb-8">Send a Message</h2>
                
                <form className="space-y-8">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold uppercase tracking-widest opacity-70">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b-2 border-chalk-white/20 px-0 py-3 focus:outline-none focus:border-track-red transition-colors text-lg"
                      placeholder="ENTER YOUR NAME"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold uppercase tracking-widest opacity-70">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border-b-2 border-chalk-white/20 px-0 py-3 focus:outline-none focus:border-track-red transition-colors text-lg"
                      placeholder="ENTER YOUR EMAIL"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold uppercase tracking-widest opacity-70">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full bg-transparent border-b-2 border-chalk-white/20 px-0 py-3 focus:outline-none focus:border-track-red transition-colors text-lg resize-none"
                      placeholder="HOW CAN WE HELP YOU?"
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full py-5 bg-track-red text-chalk-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-chalk-white hover:text-carbon-black transition-colors duration-300"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full">
        <MobileContactPage />
      </div>

    </main>
  );
}
