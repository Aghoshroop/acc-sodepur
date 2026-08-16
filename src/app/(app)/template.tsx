'use client';

import { motion } from 'framer-motion';
import PageTransitionSplash from '@/components/ui/PageTransitionSplash';

export default function AppTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageTransitionSplash />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="flex flex-col flex-grow w-full min-h-screen"
      >
        {children}
      </motion.div>
    </>
  );
}
