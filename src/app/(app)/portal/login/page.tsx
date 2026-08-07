'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MobilePortalLoginPage from './mobile/MobilePortalLoginPage';

export default function PortalLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/portal/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push('/performance');
        router.refresh(); // Refresh to ensure middleware/layout sees the new cookie
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full bg-carbon-black min-h-screen flex items-center justify-center p-6 pt-32">
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:flex w-full max-w-md bg-chalk-white text-carbon-black p-8 md:p-12 relative overflow-hidden group">
        <div className="absolute -right-10 -top-10 text-[10rem] font-primary opacity-5 select-none pointer-events-none group-hover:scale-110 transition-transform duration-1000">
          A
        </div>
        
        <div className="relative z-10 w-full">
          <h1 className="text-3xl font-primary uppercase tracking-widest mb-2">Student Portal</h1>
          <p className="text-sm uppercase tracking-widest text-carbon-black/50 mb-8 border-b-2 border-track-red pb-4">
            Authorized Access Only
          </p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded text-sm text-center font-bold"
              >
                {error}
              </motion.div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-carbon-black/70 mb-2">Access Code</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-chalk-white border border-carbon-black/20 rounded-none p-3 text-carbon-black focus:outline-none focus:border-track-red transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-track-red hover:bg-red-700 text-chalk-white font-bold uppercase tracking-widest py-3 transition-colors disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Enter Portal'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link href="/" className="text-xs font-bold uppercase tracking-widest text-carbon-black/50 hover:text-track-red transition-colors">
              Return Home
            </Link>
          </div>
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full relative z-20">
        <MobilePortalLoginPage />
      </div>
    </main>
  );
}
