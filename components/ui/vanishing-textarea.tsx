"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface VanishingTextareaProps {
  placeholders: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: () => void;
  className?: string;
  rows?: number;
  name?: string;
  id?: string;
  required?: boolean;
}

export function VanishingTextarea({
  placeholders,
  value,
  onChange,
  onSubmit,
  className,
  rows = 4,
  name,
  id,
  required,
}: VanishingTextareaProps) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [animating, setAnimating] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const newDataRef = useRef<any[]>([]);

  const startAnimation = useCallback(() => {
    // Clear any existing timeouts
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }

    const currentText = placeholders[currentPlaceholder];
    const wordCount = currentText.split(' ').filter(word => word.length > 0).length;
    
    // Calculate exact timing for current placeholder
    const containerDelay = 200; // 0.2s
    const wordStartDelay = 400; // 0.4s  
    const wordInterval = 50; // 0.05s between words
    const wordDuration = 300; // 0.3s for each word
    const displayTime = 3000; // 3s to read
    const exitDuration = 500; // 0.5s exit
    
    const totalAnimationTime = containerDelay + wordStartDelay + (wordCount * wordInterval) + wordDuration + displayTime + exitDuration;

    // Set next transition after current animation completes
    animationTimeoutRef.current = setTimeout(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
      startAnimation(); // Recursively start next animation
    }, totalAnimationTime);
  }, [placeholders, currentPlaceholder]);

  const handleVisibilityChange = useCallback(() => {
    if (document.visibilityState !== "visible") {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
        animationTimeoutRef.current = null;
      }
    } else if (document.visibilityState === "visible") {
      startAnimation();
    }
  }, [startAnimation]);

  useEffect(() => {
    startAnimation();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [placeholders, handleVisibilityChange, startAnimation]);

  const draw = useCallback(() => {
    if (!textareaRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 600;
    canvas.height = 200;
    ctx.clearRect(0, 0, 600, 200);
    const computedStyles = getComputedStyle(textareaRef.current);

    const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
    ctx.font = `${fontSize * 1.5}px ${computedStyles.fontFamily}`;
    ctx.fillStyle = "#FFF";
    
    // Split text into lines and draw them
    const lines = value.split('\n');
    lines.forEach((line, index) => {
      ctx.fillText(line, 16, 30 + (index * fontSize * 1.5));
    });

    const imageData = ctx.getImageData(0, 0, 600, 200);
    const pixelData = imageData.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newData: any[] = [];

    for (let t = 0; t < 200; t++) {
      const i = 4 * t * 600;
      for (let n = 0; n < 600; n++) {
        const e = i + 4 * n;
        if (
          pixelData[e] !== 0 &&
          pixelData[e + 1] !== 0 &&
          pixelData[e + 2] !== 0
        ) {
          newData.push({
            x: n,
            y: t,
            color: [
              pixelData[e],
              pixelData[e + 1],
              pixelData[e + 2],
              pixelData[e + 3],
            ],
          });
        }
      }
    }

    newDataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 1,
      color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
    }));
  }, [value]);

  useEffect(() => {
    draw();
  }, [value, draw]);

  const animate = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr = [];
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current = newDataRef.current[i];
          if (current.x < pos) {
            newArr.push(current);
          } else {
            if (current.r <= 0) {
              current.r = 0;
              continue;
            }
            current.x += Math.random() > 0.5 ? 1 : -1;
            current.y += Math.random() > 0.5 ? 1 : -1;
            current.r -= 0.05 * Math.random();
            newArr.push(current);
          }
        }
        newDataRef.current = newArr;
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          ctx.clearRect(pos, 0, 600, 200);
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color: color } = t;
            if (n > pos) {
              ctx.beginPath();
              ctx.rect(n, i, s, s);
              ctx.fillStyle = color;
              ctx.strokeStyle = color;
              ctx.stroke();
            }
          });
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8);
        } else {
          setAnimating(false);
          if (onSubmit) {
            onSubmit();
          }
        }
      });
    };
    animateFrame(start);
  };

  const vanishAndSubmit = () => {
    if (!value.trim()) return;
    
    setAnimating(true);
    draw();

    if (value && textareaRef.current) {
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0
      );
      animate(maxX);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && e.metaKey && !animating) {
      e.preventDefault();
      vanishAndSubmit();
    }
  };

  return (
    <div className="relative">
      <div className={cn(
        "relative rounded-xl bg-background/50 border border-border/50 focus-within:border-primary transition-colors overflow-hidden",
        className
      )}>
        <canvas
          className={cn(
            "absolute pointer-events-none text-base transform scale-75 top-2 left-2 origin-top-left filter invert dark:invert-0",
            !animating ? "opacity-0" : "opacity-100"
          )}
          ref={canvasRef}
        />
        
        <textarea
          ref={textareaRef}
          id={id}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          required={required}
          className={cn(
            "w-full p-4 bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none text-sm relative z-10",
            animating && "text-transparent"
          )}
        />

        <div className="absolute inset-0 flex items-start pt-4 pl-4 pointer-events-none">
          <AnimatePresence mode="wait">
            {!value && (
              <motion.div
                key={`current-placeholder-${currentPlaceholder}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ 
                  opacity: 0,
                  transition: { duration: 0.5, ease: "easeInOut" }
                }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-muted-foreground text-sm font-normal text-left w-[calc(100%-2rem)]"
              >
                {placeholders[currentPlaceholder].split('\n').map((line, lineIndex) => (
                  <div key={lineIndex} className="block">
                    {line.split(' ').map((word, wordIndex) => {
                      const globalIndex = placeholders[currentPlaceholder]
                        .split('\n')
                        .slice(0, lineIndex)
                        .join(' ')
                        .split(' ')
                        .filter(w => w.length > 0).length + wordIndex;
                      
                      return (
                        <motion.span
                          key={`${currentPlaceholder}-${lineIndex}-${wordIndex}`}
                          initial={{ 
                            opacity: 0, 
                            y: 10,
                            scale: 0.9,
                            filter: "blur(3px)"
                          }}
                          animate={{ 
                            opacity: 1, 
                            y: 0,
                            scale: 1,
                            filter: "blur(0px)"
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.95,
                            transition: { duration: 0.2, delay: 0 }
                          }}
                          transition={{
                            duration: 0.3,
                            delay: 0.4 + (globalIndex * 0.05),
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 100,
                            damping: 12
                          }}
                          className="inline-block mr-1"
                        >
                          {word}
                        </motion.span>
                      );
                    })}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {value && !animating && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-muted-foreground mt-2 text-center"
        >
          Press ⌘ + Enter to view with style ✨
        </motion.p>
      )}
    </div>
  );
}
