"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useProgressiveImage, generateBase64Placeholder } from "@/hooks/use-progressive-image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
}

export const OptimizedImage = ({
  src,
  alt,
  width = 970,
  height = 700,
  className,
  priority = false,
  placeholder = 'blur'
}: OptimizedImageProps) => {
  const [imageError, setImageError] = useState(false);
  
  // Generate base64 placeholder
  const base64Placeholder = generateBase64Placeholder(width, height);
  
  // For now, we'll use a simple blur effect and rely on browser loading
  // In production, you'd want to implement actual low-quality image generation
  const lowQualitySrc = src; // Would be replaced with actual low-quality version
  
  const { src: currentSrc, isLoading } = useProgressiveImage({
    lowQualitySrc,
    highQualitySrc: src,
    placeholder: placeholder === 'blur' ? base64Placeholder : undefined
  });

  if (imageError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-lg",
          className
        )}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <motion.img
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setImageError(true)}
      className={cn(
        "transition-all duration-500 ease-in-out",
        isLoading ? "blur-sm opacity-70" : "blur-0 opacity-100",
        className
      )}
      style={{
        filter: isLoading ? 'blur(4px) brightness(1.1)' : 'none',
      }}
    />
  );
};

// Component specifically for the 3D marquee with optimized settings
export const MarqueeImage = ({ 
  src, 
  alt, 
  index 
}: { 
  src: string; 
  alt: string; 
  index: number;
}) => {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={970}
      height={700}
      priority={index < 4} // Load first 4 images with priority
      className="aspect-[970/700] rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl"
    />
  );
};
