import React from 'react';
import MobileMediaPage from './mobile/MobileMediaPage';
import mediaData from '@/data/media.json';
import Image from 'next/image';
import { Newspaper, ExternalLink } from 'lucide-react';

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"></path>
  </svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-chalk-white text-carbon-black font-secondary">
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-primary uppercase tracking-tight mb-6">
              Media & Press
            </h1>
            <p className="opacity-70 text-lg max-w-2xl">
              A collection of our proudest moments captured by the press and shared across our community.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-12">
            {/* Press Clippings Column */}
            <div className="col-span-8">
              <div className="flex items-center gap-3 mb-8 border-b border-carbon-black/10 pb-4">
                <Newspaper className="w-6 h-6 text-athletic-red" />
                <h2 className="text-2xl font-primary uppercase tracking-wider">Press Cuttings</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                {mediaData.press_clippings.map((clip) => (
                  <div key={clip.id} className="group cursor-pointer">
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-carbon-black/5 mb-4">
                      <Image 
                        src={clip.imageUrl}
                        alt={clip.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-carbon-black/0 group-hover:bg-carbon-black/10 transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-athletic-red font-bold mb-2">
                        {clip.publisher} • {new Date(clip.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </p>
                      <h3 className="text-xl font-primary uppercase mb-2">{clip.title}</h3>
                      <p className="text-sm opacity-70">{clip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Column */}
            <div className="col-span-4">
              <div className="flex items-center gap-3 mb-8 border-b border-carbon-black/10 pb-4">
                <div className="text-[#1877F2]">
                  <FacebookIcon size={24} />
                </div>
                <h2 className="text-2xl font-primary uppercase tracking-wider">Social Feed</h2>
              </div>

              <div className="space-y-8">
                {mediaData.social_posts.map((post) => (
                  <a 
                    key={post.id}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group bg-white border border-carbon-black/10 p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-carbon-black/5 flex items-center justify-center text-carbon-black">
                          {post.platform === 'facebook' ? <FacebookIcon size={18} /> : <InstagramIcon size={18} />}
                        </div>
                        <div>
                          <p className="font-bold text-sm">{post.author}</p>
                          <p className="text-xs opacity-60">
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </p>
                        </div>
                      </div>
                      <ExternalLink size={16} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                    </div>

                    <p className="text-sm mb-4 leading-relaxed">
                      {post.content}
                    </p>

                    <div className="relative aspect-video w-full overflow-hidden bg-carbon-black/5 rounded-sm">
                      <Image 
                        src={post.imageUrl}
                        alt="Social post media"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full">
        <MobileMediaPage />
      </div>
    </main>
  );
}
