'use server';

import { adminDb } from '@/lib/firebase/admin';
import { CalendarEvent } from './types';
import { revalidatePath } from 'next/cache';

import { verifyAdminSession } from '@/lib/auth';

export async function createEvent(data: Omit<CalendarEvent, 'id'>) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) {
    return { success: false, error: 'Unauthorized: Session expired or invalid.' };
  }
  
  try {
    const docRef = await adminDb.collection('calendar_events').add(data);
    revalidatePath('/');
    revalidatePath('/training/calendar');
    revalidatePath('/admin/calendar');
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error creating event:', error);
    return { success: false, error: 'Failed to create event' };
  }
}

export async function updateEvent(id: string, data: Partial<CalendarEvent>) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) {
    return { success: false, error: 'Unauthorized: Session expired or invalid.' };
  }
  
  try {
    await adminDb.collection('calendar_events').doc(id).update(data);
    revalidatePath('/');
    revalidatePath('/training/calendar');
    revalidatePath('/admin/calendar');
    return { success: true };
  } catch (error) {
    console.error('Error updating event:', error);
    return { success: false, error: 'Failed to update event' };
  }
}

export async function deleteEvent(id: string) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) {
    return { success: false, error: 'Unauthorized: Session expired or invalid.' };
  }
  
  try {
    await adminDb.collection('calendar_events').doc(id).delete();
    revalidatePath('/');
    revalidatePath('/training/calendar');
    revalidatePath('/admin/calendar');
    return { success: true };
  } catch (error) {
    console.error('Error deleting event:', error);
    return { success: false, error: 'Failed to delete event' };
  }
}
