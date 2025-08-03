"use client";

import { useState, useEffect } from 'react';

interface UseProgressiveImageProps {
  lowQualitySrc: string;
  highQualitySrc: string;
  placeholder?: string;
}

export const useProgressiveImage = ({ lowQualitySrc, highQualitySrc, placeholder }: UseProgressiveImageProps) => {
  const [src, setSrc] = useState(placeholder || lowQualitySrc);
  const [isLoading, setIsLoading] = useState(true);
  const [hasStartedHighRes, setHasStartedHighRes] = useState(false);

  useEffect(() => {
    // Load low quality image first
    const lowQualityImg = new Image();
    lowQualityImg.onload = () => {
      setSrc(lowQualitySrc);
      setHasStartedHighRes(true);
    };
    lowQualityImg.src = lowQualitySrc;

    return () => {
      lowQualityImg.onload = null;
    };
  }, [lowQualitySrc]);

  useEffect(() => {
    if (!hasStartedHighRes) return;

    // Load high quality image after low quality is loaded
    const highQualityImg = new Image();
    highQualityImg.onload = () => {
      setSrc(highQualitySrc);
      setIsLoading(false);
    };
    highQualityImg.src = highQualitySrc;

    return () => {
      highQualityImg.onload = null;
    };
  }, [highQualitySrc, hasStartedHighRes]);

  return { src, isLoading };
};

// Helper function to generate a low-quality image URL
export const generateLowQualityUrl = (originalUrl: string): string => {
  // For now, we'll assume a naming convention where low-quality images have -lq suffix
  // e.g., image.png -> image-lq.png
  const lastDotIndex = originalUrl.lastIndexOf('.');
  if (lastDotIndex === -1) return originalUrl;
  
  return originalUrl.slice(0, lastDotIndex) + '-lq' + originalUrl.slice(lastDotIndex);
};

// Base64 placeholder for immediate rendering
export const generateBase64Placeholder = (width: number = 970, height: number = 700): string => {
  // Create a simple gradient placeholder
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:rgb(229,231,235);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(209,213,219);stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial, sans-serif" font-size="14" fill="#9CA3AF">Loading...</text>
    </svg>
  `)}`;
};