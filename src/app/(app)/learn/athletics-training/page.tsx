import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Athletics Training & Programs | Sprints, Jumps, Throws',
  description: 'Learn about the professional athletics training programs offered at ACC Sodepur, covering sprints, middle distance, hurdles, jumps, throws, and combined events.',
  alternates: {
    canonical: '/learn/athletics-training',
  }
};

export default function AthleticsTrainingArticle() {
  return (
    <article className="max-w-3xl mx-auto flex flex-col gap-10">
      
      {/* Breadcrumb */}
      <nav className="text-sm font-bold tracking-widest uppercase text-chalk-white/60 mb-4">
        <ol className="flex gap-2">
          <li><Link href="/learn" className="hover:text-track-red transition-colors">Knowledge Center</Link></li>
          <li>/</li>
          <li className="text-track-red">Athletics Training</li>
        </ol>
      </nav>

      <header>
        <h1 className="text-4xl md:text-5xl font-primary uppercase tracking-wide mb-6">
          Athletics Training Programs
        </h1>
        {/* Direct Answer / Summary */}
        <p className="text-xl md:text-2xl font-light text-chalk-white leading-relaxed border-l-4 border-track-red pl-6">
          Athletic Coaching Camp (ACC) offers comprehensive, scientifically structured training programs in track and field. We specialize in Sprints, Hurdles, Middle and Long Distance running, Jumps (Long, High, Triple, Pole Vault), Throws (Shotput, Discus, Javelin), and Combined Events like the Decathlon and Heptathlon.
        </p>
      </header>

      {/* Detailed Explanation */}
      <section className="flex flex-col gap-6 text-chalk-white/80 leading-relaxed text-lg">
        <h2 className="text-3xl font-primary uppercase tracking-wide text-chalk-white mt-8 mb-4">Training Methodology</h2>
        <p>
          Our training philosophy centers on long-term athlete development. We employ a periodized training structure that blends biomechanical analysis, strength and conditioning, sports nutrition, and rigorous technical drilling.
        </p>
        
        <h3 className="text-2xl font-primary uppercase tracking-wide text-chalk-white mt-6 mb-2">Track Events</h3>
        <p>
          From the explosive 100m sprint to the endurance-testing 10,000m, our track coaching focuses on velocity profiling, stride mechanics, and aerobic/anaerobic conditioning. We have specialized coaches for hurdle events, ensuring optimal clearance techniques.
        </p>

        <h3 className="text-2xl font-primary uppercase tracking-wide text-chalk-white mt-6 mb-2">Field Events</h3>
        <p>
          Our jumps training (Long Jump, High Jump, Triple Jump) focuses on approach velocity, take-off mechanics, and aerial control. For throws, athletes drill rotational and glide techniques utilizing heavy implements in our dedicated throwing sectors.
        </p>
      </section>

      {/* Related Resources */}
      <section className="mt-12 pt-12 border-t border-white/10">
        <h3 className="text-xl font-bold uppercase tracking-widest text-track-red mb-6">Related ACC Resources</h3>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/training/methodology" className="text-lg underline hover:text-track-red transition-colors">
              Explore Our Training Methodology in Detail
            </Link>
          </li>
          <li>
            <Link href="/coaches" className="text-lg underline hover:text-track-red transition-colors">
              Meet Our Expert Coaching Staff
            </Link>
          </li>
        </ul>
      </section>

    </article>
  );
}
