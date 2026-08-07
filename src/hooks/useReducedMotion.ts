import { useSyncExternalStore } from 'react';

const subscribeMq = (callback: () => void) => {
  if (typeof window === 'undefined') return () => {};
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
};

const getSnapshot = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return false;
};

const getServerSnapshot = () => false;

export function useReducedMotion() {
  return useSyncExternalStore(subscribeMq, getSnapshot, getServerSnapshot);
}
