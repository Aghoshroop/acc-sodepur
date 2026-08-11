'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Newspaper, Loader2 } from 'lucide-react';
import mediaData from '@/data/media.json';
import { useState, useEffect } from 'react';

type SocialPost = {
  id: string;
  platform: string;
  author: string;
  handle: string;
  content: string;
  imageUrl: string;
  link: string;
  date: string;
};

function useLiveSocialPosts() {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      try {
        const [igRes, fbRes] = await Promise.allSettled([
          fetch('/api/social/instagram').then(r => r.json()),
          fetch('/api/social/facebook').then(r => r.json()),
        ]);

        const igPosts = igRes.status === 'fulfilled' ? (igRes.value.posts || []) : [];
        const fbPosts = fbRes.status === 'fulfilled' ? (fbRes.value.posts || []) : [];
        setPosts([...fbPosts, ...igPosts]);
      } catch {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchAll();
  }, []);

  return { posts, loading };
}


/* ─── Icons ─── */
const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
  </svg>
);
const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

/* ─── Press clipping card ─── */
function PressCard({ clip, priority = false }: { clip: typeof mediaData.press_clippings[0]; priority?: boolean }) {
  return (
    <div className="group flex flex-col cursor-pointer">
      {/* Image */}
      <div className="relative w-full overflow-hidden bg-[#111] border border-[#F6F2EA]/10 mb-4">
        <Image
          src={clip.imageUrl}
          alt={clip.title}
          width={800}
          height={1000}
          className="w-full h-auto block grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
          priority={priority}
          draggable={false}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#050505]/0 group-hover:bg-[#050505]/10 transition-colors duration-300 pointer-events-none" />
        {/* Publisher badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-[#050505]/80 backdrop-blur text-[#C8A96A] font-primary text-[10px] uppercase tracking-widest">
          {clip.publisher}
        </div>
      </div>
      {/* Meta */}
      <p className="text-[10px] uppercase tracking-widest text-[#C8A96A]/70 mb-2">
        {new Date(clip.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </p>
      <h3 className="font-primary uppercase text-[#F6F2EA] text-base leading-tight group-hover:text-[#C8A96A] transition-colors duration-300">
        {clip.title}
      </h3>
      <p className="text-[#F6F2EA]/40 text-xs mt-2 leading-relaxed line-clamp-2">{clip.description}</p>
    </div>
  );
}

/* ─── Social post card ─── */
function SocialCard({ post }: { post: SocialPost }) {
  const isFB = post.platform === 'facebook';
  return (
    <Link
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group border border-[#F6F2EA]/10 bg-[#0d0d0d] hover:border-[#C8A96A]/30 transition-all duration-300 p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-full flex items-center justify-center ${isFB ? 'bg-[#1877F2]/15 text-[#1877F2]' : 'bg-gradient-to-br from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#fcb045]/20 text-[#fd1d1d]'}`}>
            {isFB ? <FacebookIcon size={16} /> : <InstagramIcon size={16} />}
          </div>
          <div>
            <p className="text-[#F6F2EA] font-primary text-xs uppercase tracking-wider">{post.author}</p>
            <p className="text-[#F6F2EA]/30 text-[10px] mt-0.5">{post.handle}</p>
          </div>
        </div>
        <ExternalLink size={14} className="text-[#F6F2EA]/20 group-hover:text-[#C8A96A] transition-colors duration-300" />
      </div>

      {/* Content */}
      <p className="text-[#F6F2EA]/60 text-sm leading-relaxed mb-4 line-clamp-4 group-hover:text-[#F6F2EA]/80 transition-colors duration-300">
        {post.content}
      </p>

      {/* Date + platform */}
      <div className="flex items-center justify-between pt-4 border-t border-[#F6F2EA]/5">
        <span className="text-[#F6F2EA]/25 text-[10px] uppercase tracking-widest">
          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
        <span className={`text-[10px] uppercase tracking-widest font-primary ${isFB ? 'text-[#1877F2]/60' : 'text-[#fd1d1d]/60'}`}>
          {isFB ? 'Facebook' : 'Instagram'}
        </span>
      </div>
    </Link>
  );
}

/* ─── Social follow banner ─── */
function FollowBanner() {
  return (
    <div className="border border-[#C8A96A]/20 bg-[#0a0a0a] p-8 flex flex-col gap-4">
      <p className="text-[#F6F2EA]/40 font-primary text-xs uppercase tracking-widest mb-2">Follow us for live updates</p>
      <Link
        href={(mediaData as any).social_links.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 group py-3 border-b border-[#F6F2EA]/5 hover:border-[#1877F2]/30 transition-colors duration-300"
      >
        <div className="w-8 h-8 rounded-full bg-[#1877F2]/15 text-[#1877F2] flex items-center justify-center flex-shrink-0">
          <FacebookIcon size={16} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[#F6F2EA] font-primary text-xs uppercase tracking-wider">Facebook</p>
          <p className="text-[#F6F2EA]/30 text-[10px] truncate">Athletic Coaching Camp – Sodepur</p>
        </div>
        <ExternalLink size={12} className="text-[#F6F2EA]/20 group-hover:text-[#1877F2] transition-colors flex-shrink-0" />
      </Link>
      <Link
        href={(mediaData as any).social_links.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 group py-3 hover:opacity-100 opacity-90 transition-opacity duration-300"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#fcb045]/20 text-[#fd1d1d] flex items-center justify-center flex-shrink-0">
          <InstagramIcon size={16} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[#F6F2EA] font-primary text-xs uppercase tracking-wider">Instagram</p>
          <p className="text-[#F6F2EA]/30 text-[10px] truncate">@accsodepur</p>
        </div>
        <ExternalLink size={12} className="text-[#F6F2EA]/20 group-hover:text-[#fd1d1d] transition-colors flex-shrink-0" />
      </Link>
      <p className="text-[#F6F2EA]/20 text-[9px] uppercase tracking-widest pt-2 leading-relaxed">
        To feature your post here, tag us or message the ACC admin to add it to the social feed.
      </p>
    </div>
  );
}

/* ─── Page ─── */
export default function MediaPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const { posts: socialPosts, loading: socialLoading } = useLiveSocialPosts();

  function SocialFeedContent() {
    if (socialLoading || socialPosts.length === 0) return null;
    return (
      <div className="flex flex-col gap-4">
        {socialPosts.map((post) => <SocialCard key={post.id} post={post} />)}
      </div>
    );
  }


  return (
    <main className="min-h-screen bg-[#050505] text-[#F6F2EA] font-secondary">
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 px-6 lg:px-16 border-b border-[#F6F2EA]/10 overflow-hidden">
        {/* background watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[18vw] font-primary uppercase text-[#F6F2EA]/[0.025] leading-none whitespace-nowrap">
            Press
          </span>
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto">
          <p className="text-[#C8A96A] font-primary text-xs uppercase tracking-[0.4em] mb-6">Athletic Coaching Camp · Sodepur</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-primary uppercase tracking-tight text-[#F6F2EA] leading-none mb-6">
            Media &<br />
            <span className="text-[#C8A96A]">Press</span>
          </h1>
          <p className="text-[#F6F2EA]/40 max-w-xl text-base leading-relaxed">
            Decades of recognition. From national newspapers to social media — ACC's journey documented.
          </p>
        </div>
      </section>

      {/* ── Desktop layout ── */}
      <div className="hidden lg:block">
        <div className="max-w-[1600px] mx-auto px-16 py-20">
          <div className="grid grid-cols-12 gap-16">

            {/* ── Press Clippings (left, 8 cols) ── */}
            <div className="col-span-8">
              <div className="flex items-center gap-4 mb-12 pb-6 border-b border-[#F6F2EA]/10">
                <Newspaper size={20} className="text-[#C8A96A]" />
                <h2 className="font-primary uppercase text-2xl tracking-widest text-[#F6F2EA]">Press Clippings</h2>
                <span className="text-[#F6F2EA]/20 text-sm ml-auto font-primary">{mediaData.press_clippings.length} articles</span>
              </div>

              {/* Masonry grid of clippings */}
              <div className="columns-2 xl:columns-3 gap-8 space-y-8">
                {mediaData.press_clippings.map((clip, idx) => (
                  <div key={clip.id} className="break-inside-avoid" onClick={() => setLightbox(clip.imageUrl)}>
                    <PressCard clip={clip} priority={idx < 3} />
                  </div>
                ))}
              </div>
            </div>

            {/* ── Social Column (right, 4 cols) ── */}
            <div className="col-span-4">
              <div className="sticky top-28">
                {/* Follow links */}
                <FollowBanner />

                {/* Social posts */}
                <div className="mt-8">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F6F2EA]/10">
                    <h2 className="font-primary uppercase text-lg tracking-widest text-[#F6F2EA]">Social Feed</h2>
                    <span className="text-[#F6F2EA]/20 text-xs ml-auto font-primary">Recent posts</span>
                  </div>
                <div className="flex flex-col gap-4">
                    <SocialFeedContent />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Mobile layout ── */}
      <div className="block lg:hidden px-5 py-12">

        {/* Follow banner */}
        <FollowBanner />

        {/* Press clippings */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#F6F2EA]/10">
            <Newspaper size={18} className="text-[#C8A96A]" />
            <h2 className="font-primary uppercase text-xl tracking-widest">Press Clippings</h2>
          </div>
          <div className="columns-2 gap-4 space-y-4">
            {mediaData.press_clippings.map((clip, idx) => (
              <div key={clip.id} className="break-inside-avoid" onClick={() => setLightbox(clip.imageUrl)}>
                <PressCard clip={clip} priority={idx < 2} />
              </div>
            ))}
          </div>
        </div>

        {/* Social feed */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F6F2EA]/10">
            <h2 className="font-primary uppercase text-xl tracking-widest">Social Feed</h2>
          </div>
          <SocialFeedContent />
        </div>

      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] bg-[#050505]/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 text-[#F6F2EA]/40 hover:text-[#F6F2EA] font-primary text-xs uppercase tracking-widest"
              onClick={() => setLightbox(null)}
            >
              Close ✕
            </button>
            <Image
              src={lightbox}
              alt="Press clipping"
              width={1200}
              height={1600}
              className="w-full h-auto"
              draggable={false}
            />
          </div>
        </div>
      )}
    </main>
  );
}
