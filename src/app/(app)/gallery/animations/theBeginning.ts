import gsap from 'gsap';

export const animateTheBeginning = (sectionRef: React.RefObject<HTMLElement | null>) => {
  if (!sectionRef.current) return () => {};

  const ctx = gsap.context(() => {
    // Title fade in
    gsap.from('.section-title', {
      scrollTrigger: {
        trigger: '.section-title',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    });

    // Darkroom effect for each photo
    const cards = gsap.utils.toArray('.darkroom-card');
    cards.forEach((card: any) => {
      const img = card.querySelector('.darkroom-img');
      const content = card.querySelector('.darkroom-content');
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 75%',
          end: 'bottom 40%',
          scrub: true,
        }
      });
      
      // Develop into full B&W contrast
      tl.to(img, {
        filter: 'grayscale(100%) contrast(120%) brightness(1)',
        opacity: 1,
        ease: 'none',
      })
      .to(content, {
        opacity: 1,
        x: 0,
        ease: 'power2.out',
      }, "<50%");
    });
  }, sectionRef);

  return () => ctx.revert();
};
