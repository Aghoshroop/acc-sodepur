import Link from 'next/link';

export default function LearnPage() {
  const articles = [
    {
      title: 'About ACC',
      description: 'History, legacy, and the mission of Athletic Coaching Camp.',
      href: '/learn/about-acc',
      category: 'Institution'
    },
    {
      title: 'Athletics Training',
      description: 'Details on our training programs, sprints, jumps, and throws.',
      href: '/learn/athletics-training',
      category: 'Training'
    },
    {
      title: 'How to Join ACC',
      description: 'Complete guide to our admissions and selection process.',
      href: '/learn/how-to-join-acc',
      category: 'Admissions'
    },
    {
      title: 'ACC Facilities',
      description: 'Information about our synthetic track, gym, and jump pits.',
      href: '/learn/acc-facilities',
      category: 'Facilities'
    }
  ];

  return (
    <div className="flex flex-col gap-12">
      <header className="border-b border-white/10 pb-12">
        <h1 className="text-4xl md:text-6xl font-primary uppercase tracking-wide mb-6">
          ACC <span className="text-track-red">Knowledge Center</span>
        </h1>
        <p className="text-xl text-chalk-white/70 max-w-2xl">
          Factual information, guides, and details regarding Athletic Coaching Camp, our programs, and how to become an athlete here.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Link 
            key={article.href} 
            href={article.href}
            className="group border border-white/10 bg-white/5 p-8 hover:bg-white/10 hover:border-track-red/50 transition-all"
          >
            <div className="text-xs font-bold text-track-red uppercase tracking-widest mb-4">
              {article.category}
            </div>
            <h2 className="text-2xl font-primary uppercase tracking-wide mb-4 group-hover:text-track-red transition-colors">
              {article.title}
            </h2>
            <p className="text-chalk-white/60">
              {article.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
