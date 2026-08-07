'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MobilePortalLoginPage() {
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
        router.refresh();
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
    <div className="w-full bg-carbon-black min-h-screen flex flex-col pt-32 px-6 pb-12">
      <div className="w-full bg-chalk-white text-carbon-black p-8 relative overflow-hidden flex flex-col grow justify-center">
        <div className="absolute -right-10 -bottom-10 text-[10rem] font-primary opacity-5 select-none pointer-events-none">
          A
        </div>
        
        <div className="relative z-10 w-full">
          <h1 className="text-3xl font-primary uppercase tracking-widest mb-2 leading-none">Student Portal</h1>
          <p className="text-[10px] uppercase tracking-widest text-carbon-black/50 mb-8 border-b-2 border-track-red pb-4">
            Authorized Access Only
          </p>
          
          <form onSubmit={handleLogin} className="space-y-6 w-full flex flex-col">
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 text-xs text-center font-bold"
              >
                {error}
              </motion.div>
            )}

            <div className="w-full flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-carbon-black/70">Access Code</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-chalk-white border border-carbon-black/20 rounded-none p-3 text-carbon-black focus:outline-none focus:border-track-red transition-colors text-sm"
                placeholder="••••••••"
                required
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-track-red active:bg-red-700 text-chalk-white font-bold text-xs uppercase tracking-widest py-4 transition-colors disabled:opacity-50 mt-4"
            >
              {loading ? 'Authenticating...' : 'Enter Portal'}
            </button>
          </form>

          <div className="mt-12 text-center">
            <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-carbon-black/50 active:text-track-red transition-colors">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
