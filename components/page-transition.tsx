"use client";

import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevPathnameRef = useRef(pathname);

  // Update previous pathname after transition completes
  useEffect(() => {
    // Only update after the animation would be complete
    const timer = setTimeout(() => {
      prevPathnameRef.current = pathname;
    }, 800); // Slightly longer than animation duration
    
    return () => clearTimeout(timer);
  }, [pathname]);

  // Determine slide direction for entering page
  const getTransitionDirection = () => {
    const current = pathname;
    const previous = prevPathnameRef.current;
    
    // Going from home (/) to projects (/projects) = new page slides up from bottom
    if (current === "/projects" && previous === "/") {
      return 1; // Slide up from bottom
    }
    // Going from projects (/projects) to home (/) = new page slides down from top  
    if (current === "/" && previous === "/projects") {
      return -1; // Slide down from top
    }
    // Default to slide up
    return 1;
  };

  // Animation variants
  const pageVariants = {
    initial: {
      y: getTransitionDirection() > 0 ? "100%" : "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween" as const,
        ease: [0.25, 0.1, 0.25, 1] as const,
        duration: 0.6,
      },
    },
    exit: {
      y: "100%", // Always slide down when exiting
      opacity: 0,
      transition: {
        type: "tween" as const,
        ease: [0.25, 0.1, 0.25, 1] as const,
        duration: 0.6,
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait" onExitComplete={() => setIsTransitioning(false)}>
        <motion.div
          key={pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="min-h-screen"
          onAnimationStart={() => setIsTransitioning(true)}
          onAnimationComplete={() => setIsTransitioning(false)}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
