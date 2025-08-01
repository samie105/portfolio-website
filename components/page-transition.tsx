"use client";

import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useAnimation } from "@/contexts/animation-context";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const { setIsPageTransitioning } = useAnimation();
  const [isTransitioning, setIsTransitioning] = useState(false);

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
    initial: { x: "100%", opacity: 0 }, // Start invisible and off-screen
    animate: { x: 0, opacity: 1 }, // Slide in and fade in
    exit: { x: "-100%", opacity: 0 }, // Slide out and fade out
  };

  // Transition configuration
  const transition = {
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
            setIsTransitioning(true);
            setIsPageTransitioning(true);
          }}
          onAnimationComplete={() => {
            setIsTransitioning(false);
            setIsPageTransitioning(false);
          }}
          style={{
            willChange: "transform, opacity",
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
