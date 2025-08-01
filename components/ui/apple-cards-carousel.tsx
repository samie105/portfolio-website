"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

interface CarouselProps {
  items: React.JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  url?: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl", // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                  },
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-muted disabled:opacity-50 border"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-6 w-6 text-muted-foreground" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-muted disabled:opacity-50 border"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  return (
    <div className="relative z-10 flex h-80 w-80 flex-col items-start justify-start border overflow-hidden rounded-3xl bg-card md:h-96 md:w-96">
      {/* Background Grid Pattern - Top Right */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-30 dark:opacity-30 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 128 128"
            className="text-black dark:text-muted-foreground"
          >
            <defs>
              <pattern
                id="grid-top-right"
                width="16"
                height="16"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="8" cy="8" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-top-right)" />
          </svg>
        </div>

        {/* Background Grid Pattern - Left Side */}
        <div className="absolute top-0 left-0 w-16 h-full opacity-30 dark:opacity-30 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 64 384"
            className="text-black dark:text-muted-foreground"
          >
            <defs>
              <pattern
                id="grid-left"
                width="16"
                height="16"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="8" cy="8" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-left)" />
          </svg>
        </div>
        
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left text-xs font-medium text-muted-foreground md:text-sm font-geist"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left text-lg font-bold text-foreground [text-wrap:balance] md:text-xl font-geist"
          >
            {card.title}
          </motion.p>
        </div>
        <div className="absolute -bottom-15 bg-muted md:bottom-2 border-2  rounded-lg left-40 md:left-65 z-10 w-100 md:w-120 h-74"/>
        <div className="absolute -bottom-16 md:bottom-[-13%] right-[-34.5%] z-10 w-100 md:w-120 h-auto">
          {/* Minimal MacBook Frame */}
          <div className="relative">
            {/* Thin Screen Bezel */}
            <div className="bg-background p-1 rounded-md shadow-xl">
              {/* Screen */}
              <div className="bg-background rounded-sm p-0.5">
                {/* Browser */}
                <div className="bg-card rounded-sm flex items-center flex-col overflow-hidden">
                  {/* Minimal Browser Header */}
                  <div className="flex items-center w-full bg-background px-1.5 py-1 border-b ">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 mx-1.5 bg-card rounded px-1.5 flex items-center h-5 border ">
                      <Link 
                        href={card.url || "https://trubank.vercel.app"} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[9px] font-medium text-foreground truncate hover:text-primary transition-colors cursor-pointer"
                      >
                        {card.url || "https://www.trubank.ng"}
                      </Link>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="aspect-video/ bg-background">
                    <BlurImage
                      src={card.src}
                      alt={card.title}
                      width={720}
                      height={540}
                      quality={100}
                      className="object-cover -mx-0.5 -mt-3/ w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Ultra-thin Base */}
            <div className="h-0.5 bg-muted-foreground/80 rounded-b-sm"></div>
          </div>
        </div>
      </div>
    );
  };

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
