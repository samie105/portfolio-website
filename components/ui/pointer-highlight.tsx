"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useRef, useEffect, useState } from "react";

export function PointerHighlight({
  children,
  rectangleClassName,
  pointerClassName,
  containerClassName,
}: {
  children: React.ReactNode;
  rectangleClassName?: string;
  pointerClassName?: string;
  containerClassName?: string;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    // Initial measurement
    updateDimensions();

    // Set up intersection observer for viewport detection
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Set up resize observer
    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <span
      className={cn("relative inline-block", containerClassName)}
      ref={containerRef}
    >
      {children}
      {dimensions.width > 0 && dimensions.height > 0 && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={cn(
              "absolute border-2 p-2 text-primary border-primary",
              rectangleClassName,
            )}
            initial={{
              width: 0,
              height: 0,
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
            }}
            animate={isInView ? {
              width: dimensions.width,
              height: dimensions.height,
              top: 0,
              left: 0,
              x: 0,
              y: 0,
            } : {
              width: 0,
              height: 0,
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: isInView ? 0.2 : 0,
            }}
          />
          <motion.div
            className="pointer-events-none absolute"
            initial={{ 
              opacity: 0,
              x: dimensions.width / 2,
              y: dimensions.height / 2,
            }}
            animate={isInView ? {
              opacity: 1,
              x: dimensions.width + 8,
              y: dimensions.height + 8,
            } : {
              opacity: 0,
              x: dimensions.width / 2,
              y: dimensions.height / 2,
            }}
            style={{
              rotate: -90,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: isInView ? 0.8 : 0,
            }}
          >
            <Pointer
              className={cn("h-6 w-6 text-primary", pointerClassName)}
            />
          </motion.div>
        </motion.div>
      )}
    </span>
  );
}

const Pointer = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
    </svg>
  );
};
