import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Athletic Facilities at ACC Sodepur | Track & Field Infrastructure',
  description: 'Explore the high-performance athletic facilities at Athletic Coaching Camp (ACC) Sodepur. Featuring synthetic tracks, jump pits, and strength conditioning centers.',
  alternates: {
    canonical: '/learn/acc-facilities',
  }
};

export default function AccFacilitiesArticle() {
  return (
    <article className="max-w-3xl mx-auto flex flex-col gap-10">
      
      {/* Breadcrumb */}
      <nav className="text-sm font-bold tracking-widest uppercase text-chalk-white/60 mb-4">
        <ol className="flex gap-2">
          <li><Link href="/learn" className="hover:text-track-red transition-colors">Knowledge Center</Link></li>
          <li>/</li>
          <li className="text-track-red">ACC Facilities</li>
        </ol>
      </nav>

      <header>
        <h1 className="text-4xl md:text-5xl font-primary uppercase tracking-wide mb-6">
          ACC Athletics Facilities
        </h1>
        {/* Direct Answer / Summary */}
        <p className="text-xl md:text-2xl font-light text-chalk-white leading-relaxed border-l-4 border-track-red pl-6">
          Athletic Coaching Camp (ACC) Sodepur boasts a comprehensive, state-of-the-art training campus. Our facilities include a modern synthetic running track, professional long jump and high jump pits, dedicated throwing sectors, and a high-performance strength and conditioning center.
        </p>
      </header>

      {/* Detailed Explanation */}
      <section className="flex flex-col gap-6 text-chalk-white/80 leading-relaxed text-lg">
        <h2 className="text-3xl font-primary uppercase tracking-wide text-chalk-white mt-8 mb-4">The Synthetic Track</h2>
        <p>
          The core of our training ground is a professionally laid synthetic track designed for maximum speed, shock absorption, and all-weather resilience. It allows our sprinters and distance runners to train year-round under optimal conditions.
        </p>
        
        <h2 className="text-3xl font-primary uppercase tracking-wide text-chalk-white mt-8 mb-4">Jumping and Throwing Sectors</h2>
        <p>
          We maintain precision-engineered runways and landing pits for Long Jump, Triple Jump, and High Jump. Additionally, our campus features safe, concrete-laid throwing sectors for Shotput, Discus, and Javelin training, allowing athletes to maximize their rotational velocity safely.
        </p>

        <h2 className="text-3xl font-primary uppercase tracking-wide text-chalk-white mt-8 mb-4">Strength & Conditioning Center</h2>
        <p>
          Athletics is not just about running; it's about power output. Our indoor facility is equipped with Olympic lifting platforms, heavy free weights, and advanced fitness equipment designed specifically to build explosive athletic machines.
        </p>
      </section>

      {/* Related Resources */}
      <section className="mt-12 pt-12 border-t border-white/10">
        <h3 className="text-xl font-bold uppercase tracking-widest text-track-red mb-6">Related ACC Resources</h3>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/facilities" className="text-lg underline hover:text-track-red transition-colors">
              Take a Visual Tour of Our Facilities
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg underline hover:text-track-red transition-colors">
              Find Our Location in Sodepur, Kolkata
            </Link>
          </li>
        </ul>
      </section>

    </article>
  );
}
