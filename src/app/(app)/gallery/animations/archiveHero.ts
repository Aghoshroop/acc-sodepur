import gsap from 'gsap';

/**
 * Animates the Hero section with a full-screen pin and a smooth scrubbed transition.
 */
export const animateArchiveHero = (containerRef: React.RefObject<HTMLElement | null>) => {
  if (!containerRef.current) return () => {};

  const ctx = gsap.context(() => {
    // Cinematic Timeline for Hero
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
        pin: true,
        invalidateOnRefresh: true, // Recalculate if window resizes
      },
    });

    // Dark overlay fades out
    tl.to('.hero-overlay', {
      opacity: 0,
      ease: 'none',
      duration: 1,
    });

    // Image goes from B&W to Color
    tl.to('.hero-bg', {
      filter: 'grayscale(0%) sepia(0) brightness(1)',
      ease: 'none',
      duration: 1,
    }, "<");

    // Typographic elements parallax down and fade out
    tl.to('.hero-title-group', {
      y: 150,
      opacity: 0,
      ease: 'power1.in',
      duration: 1,
    }, "<0.2");

  }, containerRef);

  return () => ctx.revert();
};
