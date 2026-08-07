'use server';

import { adminDb } from '@/lib/firebase/admin';
import { Notice } from './types';
import { revalidatePath } from 'next/cache';
import { verifyAdminSession } from '@/lib/auth';

export async function createNotice(data: Omit<Notice, 'id'>) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) {
    return { success: false, error: 'Unauthorized: Session expired or invalid.' };
  }
  
  try {
    const docRef = await adminDb.collection('notices').add(data);
    revalidatePath('/');
    revalidatePath('/notices');
    revalidatePath('/admin/notices');
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error creating notice:', error);
    return { success: false, error: 'Failed to create notice' };
  }
}

export async function updateNotice(id: string, data: Partial<Notice>) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) {
    return { success: false, error: 'Unauthorized: Session expired or invalid.' };
  }
  
  try {
    await adminDb.collection('notices').doc(id).update(data);
    revalidatePath('/');
    revalidatePath('/notices');
    revalidatePath('/admin/notices');
    return { success: true };
  } catch (error) {
    console.error('Error updating notice:', error);
    return { success: false, error: 'Failed to update notice' };
  }
}

export async function deleteNotice(id: string) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) {
    return { success: false, error: 'Unauthorized: Session expired or invalid.' };
  }
  
  try {
    await adminDb.collection('notices').doc(id).delete();
    revalidatePath('/');
    revalidatePath('/notices');
    revalidatePath('/admin/notices');
    return { success: true };
  } catch (error) {
    console.error('Error deleting notice:', error);
    return { success: false, error: 'Failed to delete notice' };
  }
}
