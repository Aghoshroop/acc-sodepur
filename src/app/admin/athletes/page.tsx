import { getAthletes } from '@/features/athletes/api';
import AdminAthletesClient from './AdminAthletesClient';

export const metadata = {
  title: 'Athletes Control Panel',
};

export const dynamic = 'force-dynamic';

export default async function AdminAthletesPage() {
  const athletes = await getAthletes();
  
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <AdminAthletesClient initialAthletes={athletes} />
    </div>
  );
}
