'use client';

export default function TestPage() {
  return (
    <div className="flex flex-col min-h-screen text-white text-3xl font-bold font-sans">
      <main className="relative z-20 bg-blue-600 h-[200vh] p-10 flex items-start justify-center">
        Main Content (Scroll Down)
      </main>
      <footer className="sticky bottom-0 z-10 bg-red-600 h-[80vh] p-10 flex items-center justify-center">
        Footer Sticky Reveal?
      </footer>
    </div>
  );
}
