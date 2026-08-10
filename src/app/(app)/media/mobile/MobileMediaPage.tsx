import React from 'react';
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

export default function MobileMediaPage() {
  return (
    <section className="relative w-full min-h-screen bg-chalk-white text-carbon-black font-secondary pt-24 pb-16">
      <div className="px-6 mb-12">
        <h1 className="text-4xl font-primary uppercase tracking-tight mb-4">
          Media & Press
        </h1>
        <p className="opacity-70 text-sm">
          A collection of our proudest moments captured by the press and shared across our community.
        </p>
      </div>

      {/* Press Clippings Section */}
      <div className="px-6 mb-16">
        <div className="flex items-center gap-3 mb-6 border-b border-carbon-black/10 pb-3">
          <Newspaper className="w-5 h-5 text-athletic-red" />
          <h2 className="text-xl font-primary uppercase tracking-wider">Press Cuttings</h2>
        </div>
        
        <div className="flex flex-col gap-8">
          {mediaData.press_clippings.map((clip) => (
            <div key={clip.id} className="w-full">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-carbon-black/5 mb-4">
                <Image 
                  src={clip.imageUrl}
                  alt={clip.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-athletic-red font-bold mb-1">
                  {clip.publisher} • {new Date(clip.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </p>
                <h3 className="text-lg font-primary uppercase mb-2 leading-tight">{clip.title}</h3>
                <p className="text-sm opacity-70">{clip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Feed Section */}
      <div className="px-6">
        <div className="flex items-center gap-3 mb-6 border-b border-carbon-black/10 pb-3">
          <div className="text-[#1877F2]">
            <FacebookIcon size={20} />
          </div>
          <h2 className="text-xl font-primary uppercase tracking-wider">Social Feed</h2>
        </div>

        <div className="flex flex-col gap-6">
          {mediaData.social_posts.map((post) => (
            <a 
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-carbon-black/10 p-5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-carbon-black/5 flex items-center justify-center text-carbon-black">
                    {post.platform === 'facebook' ? <FacebookIcon size={16} /> : <InstagramIcon size={16} />}
                  </div>
                  <div>
                    <p className="font-bold text-sm leading-none mb-1">{post.author}</p>
                    <p className="text-[10px] opacity-60 leading-none">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </div>
                <ExternalLink size={14} className="opacity-50" />
              </div>

              <p className="text-sm mb-4 leading-relaxed line-clamp-4">
                {post.content}
              </p>

              <div className="relative aspect-video w-full overflow-hidden bg-carbon-black/5 rounded-sm">
                <Image 
                  src={post.imageUrl}
                  alt="Social post media"
                  fill
                  className="object-cover"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
