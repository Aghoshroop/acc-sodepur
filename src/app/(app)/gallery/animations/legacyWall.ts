import gsap from 'gsap';

export const animateLegacyWall = (sectionRef: React.RefObject<HTMLElement | null>) => {
  if (!sectionRef.current) return () => {};

  const ctx = gsap.context(() => {
    // Reveal text mask
    gsap.to('.legacy-text-mask', {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      duration: 1.5,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
      }
    });

    // Parallax images
    const images = gsap.utils.toArray('.legacy-image');
    images.forEach((img: any, i) => {
      const direction = i % 2 === 0 ? 1 : -1;
      gsap.fromTo(img, 
        { y: 100 * direction },
        {
          y: -100 * direction,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        }
      );
    });

  }, sectionRef);

  return () => ctx.revert();
};
