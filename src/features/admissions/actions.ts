'use server';

import { adminDb } from '@/lib/firebase/admin';
import { AdmissionsSettings } from './types';
import { revalidatePath } from 'next/cache';
import { verifyAdminSession } from '@/lib/auth';

export async function updateAdmissionsSettings(data: AdmissionsSettings) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) {
    return { success: false, error: 'Unauthorized: Session expired or invalid.' };
  }
  
  try {
    await adminDb.collection('settings').doc('admissions').set(data, { merge: true });
    
    // Revalidate paths that use these settings
    revalidatePath('/admissions');
    revalidatePath('/admin/admissions');
    
    return { success: true };
  } catch (error) {
    console.error('Error updating admissions settings:', error);
    return { success: false, error: 'Failed to update admissions settings' };
  }
}
