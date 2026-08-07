import { getAdmissionsSettings } from '@/features/admissions/api';
import AdminAdmissionsClient from './AdminAdmissionsClient';

export const metadata = {
  title: 'Admissions Control Panel',
};

export const dynamic = 'force-dynamic';

export default async function AdminAdmissionsPage() {
  const initialSettings = await getAdmissionsSettings();
  
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <AdminAdmissionsClient initialSettings={initialSettings} />
    </div>
  );
}
