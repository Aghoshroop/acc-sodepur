'use client';

import { motion } from 'framer-motion';

export default function AppTemplate({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="flex flex-col flex-grow w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
}
