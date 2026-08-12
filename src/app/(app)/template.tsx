'use client';

import { motion } from 'framer-motion';

export default function AppTemplate({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="flex flex-col flex-grow w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
}
