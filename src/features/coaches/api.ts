import { adminDb } from '@/lib/firebase/admin';
import { Coach } from './types';

export async function getAllCoaches(): Promise<Coach[]> {
  try {
    const snapshot = await adminDb
      .collection('coaches')
      .orderBy('order', 'asc')
      .get();
      
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Coach));
  } catch (error) {
    console.error('Error fetching all coaches:', error);
    return [];
  }
}
