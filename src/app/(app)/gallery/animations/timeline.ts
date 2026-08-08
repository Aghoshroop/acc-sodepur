import gsap from 'gsap';

export const animateTimeline = (sectionRef: React.RefObject<HTMLElement | null>) => {
  if (!sectionRef.current) return () => {};

  const ctx = gsap.context(() => {
    // Fade in image cards as they scroll into view
    const cards = gsap.utils.toArray('.era-image-card');
    
    cards.forEach((card: any) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });

    // Fade in Era Headers
    const headers = gsap.utils.toArray('.era-section h3');
    headers.forEach((header: any) => {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: 'top 80%',
        },
        x: -40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });

  }, sectionRef);

  return () => ctx.revert();
};
