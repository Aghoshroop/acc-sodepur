'use client';

import Scene01Arrival from './components/Scene01Arrival';
import Scene02TheGun from './components/Scene02TheGun';
import Scene03Exchange from './components/Scene03Exchange';
import Scene03Franchises from './components/Scene03Franchises';
import Scene04Legacy from './components/Scene04Legacy';
import MobilePremierRelayPage from './mobile/MobilePremierRelayPage';

export default function PremierRelayPage() {
  return (
    <main className="w-full bg-[#0A0A0A] min-h-dvh">
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block w-full">
        <Scene01Arrival />
        <Scene02TheGun />
        <Scene03Exchange />
        <Scene03Franchises />
        <Scene04Legacy />
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full relative z-20">
        <MobilePremierRelayPage />
      </div>
    </main>
  );
}
