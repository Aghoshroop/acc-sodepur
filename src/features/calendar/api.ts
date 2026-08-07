import { adminDb } from '@/lib/firebase/admin';
import { CalendarEvent } from './types';

export async function getAllEvents(): Promise<CalendarEvent[]> {
  try {
    const snapshot = await adminDb
      .collection('calendar_events')
      .orderBy('date', 'asc')
      .get();
      
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as CalendarEvent));
  } catch (error) {
    console.error('Error fetching all events:', error);
    return [];
  }
}

export async function getUpcomingEvents(): Promise<CalendarEvent[]> {
  try {
    const today = new Date().toISOString().split('T')[0];
    
    const snapshot = await adminDb
      .collection('calendar_events')
      .where('date', '>=', today)
      .orderBy('date', 'asc')
      .get();
      
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as CalendarEvent));
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    return [];
  }
}
