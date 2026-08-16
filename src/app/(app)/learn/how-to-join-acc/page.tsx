import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Join Athletic Coaching Camp (ACC) | Admissions Guide',
  description: 'Learn the step-by-step process of how to join Athletic Coaching Camp (ACC) Sodepur, including age requirements, trial dates, and application procedures.',
  alternates: {
    canonical: '/learn/how-to-join-acc',
  }
};

export default function HowToJoinArticle() {
  return (
    <article className="max-w-3xl mx-auto flex flex-col gap-10">
      
      {/* Breadcrumb */}
      <nav className="text-sm font-bold tracking-widest uppercase text-chalk-white/60 mb-4">
        <ol className="flex gap-2">
          <li><Link href="/learn" className="hover:text-track-red transition-colors">Knowledge Center</Link></li>
          <li>/</li>
          <li className="text-track-red">How to Join ACC</li>
        </ol>
      </nav>

      <header>
        <h1 className="text-4xl md:text-5xl font-primary uppercase tracking-wide mb-6">
          How to Join Athletic Coaching Camp (ACC)
        </h1>
        {/* Direct Answer / Summary */}
        <p className="text-xl md:text-2xl font-light text-chalk-white leading-relaxed border-l-4 border-track-red pl-6">
          To join Athletic Coaching Camp (ACC) Sodepur, athletes must participate in our scheduled talent identification trials. Admissions are highly selective and based on physical fitness, athletic potential, and coach assessment.
        </p>
      </header>

      {/* Detailed Explanation */}
      <section className="flex flex-col gap-6 text-chalk-white/80 leading-relaxed text-lg">
        <h2 className="text-3xl font-primary uppercase tracking-wide text-chalk-white mt-8 mb-4">The Selection Process</h2>
        <p>
          We do not operate on a pay-to-play model. Admission into ACC is earned on the track. Prospective athletes must attend an open trial, which includes standard tests for speed, agility, endurance, and vertical leap. 
        </p>

        <h2 className="text-3xl font-primary uppercase tracking-wide text-chalk-white mt-8 mb-4">Eligibility Requirements</h2>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>Age groups typically range from Under-14 to Seniors.</li>
          <li>A baseline medical clearance is required before testing.</li>
          <li>Prior athletic experience is preferred but raw talent with no formal background is also evaluated and welcomed.</li>
        </ul>

        <h2 className="text-3xl font-primary uppercase tracking-wide text-chalk-white mt-8 mb-4">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold text-chalk-white">When are the admission trials held?</h3>
            <p>Trials are typically announced on our official notice board and social media channels at the beginning of the athletic season (usually early summer).</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-chalk-white">Where is the training located?</h3>
            <p>All core training sessions take place at our main facility in Sodepur, Kolkata, West Bengal.</p>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="mt-12 pt-12 border-t border-white/10">
        <h3 className="text-xl font-bold uppercase tracking-widest text-track-red mb-6">Related ACC Resources</h3>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/admissions" className="text-lg underline hover:text-track-red transition-colors">
              View Current Admission Notices and Apply
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg underline hover:text-track-red transition-colors">
              Contact Us for Admission Inquiries
            </Link>
          </li>
        </ul>
      </section>

    </article>
  );
}
