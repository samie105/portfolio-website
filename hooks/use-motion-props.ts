"use client";

import { useAnimation } from "@/contexts/animation-context";

/**
 * Hook that returns motion props for components that should pause during page transitions
 * When page is transitioning, animations are paused to prevent interference
 */
export function useMotionProps(baseProps: any = {}) {
  const { shouldPauseAnimations } = useAnimation();
  
  if (shouldPauseAnimations) {
    // Return static props during page transitions
    return {
      ...baseProps,
      animate: false,
      transition: { duration: 0 },
      style: { 
        ...baseProps.style,
        animationPlayState: 'paused',
        transitionDuration: '0s'
      }
    };
  }
  
  return baseProps;
}

/**
 * Hook that returns whether animations should be running
 */
export function useShouldAnimate() {
  const { shouldPauseAnimations } = useAnimation();
  return !shouldPauseAnimations;
}
