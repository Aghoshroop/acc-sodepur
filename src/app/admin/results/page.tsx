import { getAllResults } from '@/features/results/api';
import AdminResultsClient from './AdminResultsClient';

export default async function AdminResultsPage() {
  const results = await getAllResults();
  
  return (
    <div className="min-h-screen bg-carbon-black text-chalk-white py-8 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-8">
          <span className="text-xs font-black uppercase tracking-widest text-track-red">Live Broadcast & Firebase System</span>
          <h1 className="text-3xl sm:text-4xl font-primary uppercase tracking-tight text-chalk-white mt-1">
            Latest Results & Performances
          </h1>
          <p className="text-sm text-chalk-white/60 mt-1 max-w-2xl">
            Manage championship results, national podiums, and athlete performance rosters. Toggle or pin records to control what is broadcasted on the homepage top navigation strip.
          </p>
        </div>
        
        <AdminResultsClient initialResults={results} />
      </div>
    </div>
  );
}
