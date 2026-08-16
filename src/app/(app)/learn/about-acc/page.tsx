import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What is Athletic Coaching Camp (ACC)? | History & Information',
  description: 'Athletic Coaching Camp (ACC) is a premier track and field club located in Sodepur, Kolkata. Learn about our history, mission, and athletic achievements.',
  alternates: {
    canonical: '/learn/about-acc',
  }
};

export default function AboutAccArticle() {
  return (
    <article className="max-w-3xl mx-auto flex flex-col gap-10">
      
      {/* Breadcrumb */}
      <nav className="text-sm font-bold tracking-widest uppercase text-chalk-white/60 mb-4">
        <ol className="flex gap-2">
          <li><Link href="/learn" className="hover:text-track-red transition-colors">Knowledge Center</Link></li>
          <li>/</li>
          <li className="text-track-red">About ACC</li>
        </ol>
      </nav>

      <header>
        <h1 className="text-4xl md:text-5xl font-primary uppercase tracking-wide mb-6">
          What is Athletic Coaching Camp (ACC)?
        </h1>
        {/* Direct Answer / Summary */}
        <p className="text-xl md:text-2xl font-light text-chalk-white leading-relaxed border-l-4 border-track-red pl-6">
          Athletic Coaching Camp (ACC) is a premier track and field club and athletics training institution located in Sodepur, Kolkata, West Bengal. Established in 1969, it provides world-class facilities and professional coaching to develop elite athletes.
        </p>
      </header>

      {/* Detailed Explanation */}
      <section className="flex flex-col gap-6 text-chalk-white/80 leading-relaxed text-lg">
        <h2 className="text-3xl font-primary uppercase tracking-wide text-chalk-white mt-8 mb-4">Our History and Legacy</h2>
        <p>
          Founded in 1969 by the visionary coach Rudra Pratim Chowdhury, Athletic Coaching Camp was established to foster raw athletic talent in West Bengal. What began as a modest training ground has evolved into one of the most prominent non-government athletics institutions in India.
        </p>
        <p>
          Over the decades, ACC has produced numerous national and international champions, including Olympians like Sanjay Kumar Rai (Sydney 2000). The club is officially recognized by the Athletics Federation of India and the Bengal Olympic Association.
        </p>

        <h2 className="text-3xl font-primary uppercase tracking-wide text-chalk-white mt-8 mb-4">Our Mission</h2>
        <p>
          Our mission is to provide Olympic-level coaching, state-of-the-art facilities, and comprehensive athlete development programs to athletes regardless of their background. We focus on discipline, performance, and scientifically-backed training methodologies.
        </p>
      </section>

      {/* Related Resources */}
      <section className="mt-12 pt-12 border-t border-white/10">
        <h3 className="text-xl font-bold uppercase tracking-widest text-track-red mb-6">Related ACC Resources</h3>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/about" className="text-lg underline hover:text-track-red transition-colors">
              Read the Full ACC Story
            </Link>
          </li>
          <li>
            <Link href="/founder" className="text-lg underline hover:text-track-red transition-colors">
              Learn about our Founder, Rudra Pratim Chowdhury
            </Link>
          </li>
          <li>
            <Link href="/athletes" className="text-lg underline hover:text-track-red transition-colors">
              View our Athletes and Champions
            </Link>
          </li>
        </ul>
      </section>

    </article>
  );
}
