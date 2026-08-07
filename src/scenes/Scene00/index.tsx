'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useHasMounted } from '@/hooks/useHasMounted';


interface Scene00Props {
  onAwaken: () => void;
}

// Configurable constant for hold duration
export const HOLD_DURATION_MS = 1500;

export default function Scene00({ onAwaken }: Scene00Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const holdTweenRef = useRef<gsap.core.Tween | null>(null);
  const [isHolding, setIsHolding] = useState(false);
  
  // Future proofing: Unlock AudioContext for subsequent scenes
  const unlockAudio = () => {
    const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    if (AudioContext) {
      const audioCtx = new AudioContext();
      audioCtx.resume();
    }
  };

  useEffect(() => {
    // Entrance animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.inOut", delay: 1 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleStart = () => {
    setIsHolding(true);
    
    // Accessibility: Reduced motion bypasses the physical hold tension
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      unlockAudio();
      triggerExit();
      return;
    }

    holdTweenRef.current = gsap.to(textRef.current, {
      scale: 1.05,
      letterSpacing: "0.5em", // Slightly expands
      duration: HOLD_DURATION_MS / 1000,
      ease: "power4.in",
      onComplete: () => {
        unlockAudio();
        triggerExit();
      }
    });
  };

  const handleEnd = () => {
    setIsHolding(false);
    
    // If released before completion, snap back aggressively
    if (holdTweenRef.current && holdTweenRef.current.progress() < 1) {
      holdTweenRef.current.reverse();
      holdTweenRef.current.timeScale(4); // Snap back 4x faster
    }
  };

  const triggerExit = () => {
    if (!containerRef.current || !textRef.current) return;
    
    // Visual flash and fade out to reveal the void
    gsap.to(containerRef.current, {
      backgroundColor: "var(--color-chalk-white)",
      duration: 0.1,
      onComplete: () => {
        // Hide the text instantly during the flash
        gsap.set(textRef.current, { opacity: 0 });
        
        // Fade the container to transparent/black
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: onAwaken
        });
      }
    });
  };

  return (
    <div 
      ref={containerRef}
      className="w-full h-full bg-[var(--color-carbon-black)] flex items-center justify-center select-none touch-none cursor-pointer"
      onPointerDown={handleStart}
      onPointerUp={handleEnd}
      onPointerLeave={handleEnd}
      onContextMenu={(e) => e.preventDefault()} // Prevent context menu on mobile long-press
      tabIndex={0}
      role="button"
      aria-label="Hold to awaken the experience"
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          if (!isHolding) handleStart();
        }
      }}
      onKeyUp={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          handleEnd();
        }
      }}
    >
      <span 
        ref={textRef}
        className="text-[var(--color-chalk-white)] font-primary text-xl md:text-3xl tracking-[0.4em] uppercase opacity-0"
      >
        [ HOLD TO AWAKEN ]
      </span>
    </div>
  );
}
