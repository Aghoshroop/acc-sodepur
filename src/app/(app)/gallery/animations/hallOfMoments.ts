import gsap from 'gsap';

export const animateHallOfMoments = (sectionRef: React.RefObject<HTMLElement | null>) => {
  if (!sectionRef.current) return () => {};

  const ctx = gsap.context(() => {
    const cards = gsap.utils.toArray('.moment-card');
    cards.forEach((card: any) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        }
      });
    });
  }, sectionRef);

  return () => ctx.revert();
};
