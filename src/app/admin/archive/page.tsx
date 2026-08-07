import { getAllArchiveItems } from '@/features/archive/api';
import AdminArchiveClient from './AdminArchiveClient';

export default async function AdminArchivePage() {
  const items = await getAllArchiveItems();
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Archive & Gallery</h1>
          <p className="text-gray-500 mt-2">Manage historical items, documents, and gallery images.</p>
        </div>
        
        <AdminArchiveClient initialItems={items} />
      </div>
    </div>
  );
}
