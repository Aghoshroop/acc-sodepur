import gsap from 'gsap';

export const animateMemoryCorridor = (
  sectionRef: React.RefObject<HTMLElement | null>,
  scrollContainerRef: React.RefObject<HTMLDivElement | null>
) => {
  if (!sectionRef.current) return () => {};

  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    // Desktop: Pinned horizontal scroll
    mm.add("(min-width: 1024px)", () => {
      if (!scrollContainerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${scrollContainerRef.current?.scrollWidth || 2000}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true, // Recalculate on resize
        }
      });

      tl.to(scrollContainerRef.current, {
        x: () => -(scrollContainerRef.current!.scrollWidth - window.innerWidth),
        ease: 'none'
      });

      // Swinging effect
      const frames = gsap.utils.toArray('.corridor-frame');
      frames.forEach((frame: any, i) => {
        gsap.to(frame, {
          rotateZ: i % 2 === 0 ? 3 : -3,
          y: -20,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: frame,
            containerAnimation: tl,
            start: 'left center',
            end: 'right center',
            scrub: true,
          }
        });
      });
    });

    // Mobile: Simple vertical fade in
    mm.add("(max-width: 1023px)", () => {
      const frames = gsap.utils.toArray('.corridor-frame');
      frames.forEach((frame: any) => {
        gsap.from(frame, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: frame,
            start: 'top 80%',
          }
        });
      });
    });

  }, sectionRef);

  return () => ctx.revert();
};
