import gsap from 'gsap';

export const animateFilmStrip = (sectionRef: React.RefObject<HTMLElement | null>, stripRef: React.RefObject<HTMLDivElement | null>) => {
  if (!sectionRef.current || !stripRef.current) return () => {};

  const ctx = gsap.context(() => {
    // We want to translate left by exactly 1/4 of the total width
    // since we duplicated the items 4 times to create an infinite loop.
    const tl = gsap.to(stripRef.current, {
      xPercent: -25,
      ease: 'none',
      duration: 30, // 30 seconds for one full loop
      repeat: -1,
      // Use translation3d for hardware acceleration
      force3D: true,
    });

    // Pause on hover
    stripRef.current?.addEventListener('mouseenter', () => tl.pause());
    stripRef.current?.addEventListener('mouseleave', () => tl.play());
    
    return () => {
      stripRef.current?.removeEventListener('mouseenter', () => tl.pause());
      stripRef.current?.removeEventListener('mouseleave', () => tl.play());
    }
  }, sectionRef);

  return () => ctx.revert();
};
