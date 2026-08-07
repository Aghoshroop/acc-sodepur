'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ImageRevealProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export default function ImageReveal({
  src,
  alt,
  width,
  height,
  fill,
  priority,
  className,
  imageClassName,
  direction = 'up',
  delay = 0
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Determine starting clip-path based on direction
      let startClip = 'inset(100% 0% 0% 0%)'; // up
      if (direction === 'down') startClip = 'inset(0% 0% 100% 0%)';
      if (direction === 'left') startClip = 'inset(0% 0% 0% 100%)';
      if (direction === 'right') startClip = 'inset(0% 100% 0% 0%)';

      gsap.set(containerRef.current, { clipPath: startClip });
      gsap.set(imageRef.current, { scale: 1.2 });

      gsap.to(containerRef.current, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.5,
        ease: 'power4.inOut',
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        }
      });

      gsap.to(imageRef.current, {
        scale: 1,
        duration: 2,
        ease: 'power3.out',
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [direction, delay]);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        className={cn("object-cover", imageClassName, fill && "absolute inset-0 w-full h-full")}
      />
    </div>
  );
}
