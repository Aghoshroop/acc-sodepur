import MobileTeamsPage from './mobile/MobileTeamsPage';

export default function TeamsPage() {
  return (
    <main className="w-full bg-[#0A0A0A] min-h-screen">
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block w-full">
        <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-widest text-acc-white mb-8">
            TEAMS
          </h1>
          <p className="text-acc-gray text-lg">
            This section is currently under construction.
          </p>
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full relative z-20">
        <MobileTeamsPage />
      </div>
    </main>
  );
}
