"use client";

import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useAnimation } from "@/contexts/animation-context";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const { setIsPageTransitioning } = useAnimation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isInitialLoad = useRef(true);

  // Track if this is the initial page load
  useEffect(() => {
    // After the component mounts, mark that initial load is complete
    const timer = setTimeout(() => {
      isInitialLoad.current = false;
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Add/remove CSS class for pausing animations
  useEffect(() => {
    const body = document.body;
    if (isTransitioning) {
      body.classList.add('page-transitioning');
    } else {
      body.classList.remove('page-transitioning');
    }
    
    return () => {
      body.classList.remove('page-transitioning');
    };
  }, [isTransitioning]);

  // Simple animation variants - always slide from right to left
  const pageVariants = {
    initial: isInitialLoad.current ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }, // No animation on initial load
    animate: { x: 0, opacity: 1 }, // Slide in and fade in
    exit: { x: "-100%", opacity: 0 }, // Slide out and fade out
  };

  // Transition configuration - no transition on initial load
  const transition = isInitialLoad.current ? 
    { duration: 0 } : // Instant on initial load
    {
      type: "tween" as const,
      ease: [0.25, 0.1, 0.25, 1] as const,
      duration: 1, // Slower for smoother feel
    };

  return (
    <div className="relative w-full overflow-x-hidden">
      <AnimatePresence 
        mode="wait" 
        onExitComplete={() => {
          setIsTransitioning(false);
          setIsPageTransitioning(false);
        }}
      >
        <motion.div
          key={pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          className="min-h-screen w-full relative"
          onAnimationStart={() => {
            // Only set transitioning state if not initial load
            if (!isInitialLoad.current) {
              setIsTransitioning(true);
              setIsPageTransitioning(true);
            }
          }}
          onAnimationComplete={() => {
            // Always clear transitioning state
            setIsTransitioning(false);
            setIsPageTransitioning(false);
          }}
          style={{
            willChange: isInitialLoad.current ? "auto" : "transform, opacity",
            backfaceVisibility: "hidden",
            perspective: 5000,
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
