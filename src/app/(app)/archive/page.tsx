import { getAllArchiveItems } from '@/features/archive/api';
import ArchiveClient from './ArchiveClient';

export const metadata = {
  title: 'Digital Museum & Archive | ACC',
  description: 'Explore the history, documents, and legacy of Athletic Coaching Camp.',
};

export default async function ArchivePage() {
  const items = await getAllArchiveItems();
  
  return <ArchiveClient initialItems={items} />;
}
