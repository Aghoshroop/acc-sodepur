import { adminDb } from '@/lib/firebase/admin';
import { ArchiveItem } from './types';

export async function getAllArchiveItems(): Promise<ArchiveItem[]> {
  try {
    const snapshot = await adminDb
      .collection('archive')
      .orderBy('year', 'desc')
      .get();
      
    if (snapshot.empty) {
      return [];
    }
      
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as ArchiveItem));
  } catch (error) {
    console.error('Error fetching archive items:', error);
    return [];
  }
}
