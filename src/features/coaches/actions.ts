'use server';

import { adminDb } from '@/lib/firebase/admin';
import { Coach } from './types';
import { revalidatePath } from 'next/cache';
import { verifyAdminSession } from '@/lib/auth';

export async function createCoach(data: Omit<Coach, 'id'>) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) return { success: false, error: 'Unauthorized' };
  
  try {
    const docRef = await adminDb.collection('coaches').add(data);
    revalidatePath('/coaches');
    revalidatePath('/admin/coaches');
    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: 'Failed to create coach' };
  }
}

export async function updateCoach(id: string, data: Partial<Coach>) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) return { success: false, error: 'Unauthorized' };
  
  try {
    await adminDb.collection('coaches').doc(id).update(data);
    revalidatePath('/coaches');
    revalidatePath('/admin/coaches');
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to update coach' };
  }
}

export async function deleteCoach(id: string) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) return { success: false, error: 'Unauthorized' };
  
  try {
    await adminDb.collection('coaches').doc(id).delete();
    revalidatePath('/coaches');
    revalidatePath('/admin/coaches');
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to delete coach' };
  }
}
