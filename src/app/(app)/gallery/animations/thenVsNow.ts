import gsap from 'gsap';

export const animateThenVsNow = (sectionRef: React.RefObject<HTMLElement | null>) => {
  if (!sectionRef.current) return () => {};

  const ctx = gsap.context(() => {
    // Title fade in
    gsap.from('.then-vs-now-title', {
      scrollTrigger: {
        trigger: '.then-vs-now-title',
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

  }, sectionRef);

  return () => ctx.revert();
};
