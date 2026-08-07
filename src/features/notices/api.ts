import { adminDb } from '@/lib/firebase/admin';
import { Notice } from './types';

export async function getActiveNotices(): Promise<Notice[]> {
  try {
    const snapshot = await adminDb
      .collection('notices')
      .where('archiveStatus', '==', false)
      .get();
      
    const notices = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Notice));
    
    // Sort in memory to avoid needing a composite index in Firestore
    return notices.sort((a, b) => 
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
  } catch (error) {
    console.error('Error fetching active notices:', error);
    return [];
  }
}

export async function getAllNotices(): Promise<Notice[]> {
  try {
    const snapshot = await adminDb
      .collection('notices')
      .orderBy('publishDate', 'desc')
      .get();
      
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Notice));
  } catch (error) {
    console.error('Error fetching all notices:', error);
    return [];
  }
}
