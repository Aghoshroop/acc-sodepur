import gsap from 'gsap';

export const animateModernACC = (sectionRef: React.RefObject<HTMLElement | null>) => {
  if (!sectionRef.current) return () => {};

  const ctx = gsap.context(() => {
    // Background color transition from dark to slightly lighter to signify modern era
    gsap.to(sectionRef.current, {
      backgroundColor: '#0A0A0A',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      }
    });

    // Reveal images
    const images = gsap.utils.toArray('.modern-img');
    images.forEach((img: any) => {
      gsap.from(img, {
        scale: 0.8,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: img,
          start: 'top 85%',
        }
      });
    });

  }, sectionRef);

  return () => ctx.revert();
};
