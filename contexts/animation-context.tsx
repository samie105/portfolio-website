"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AnimationContextType {
  isPageTransitioning: boolean;
  setIsPageTransitioning: (transitioning: boolean) => void;
  shouldPauseAnimations: boolean;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

interface AnimationProviderProps {
  children: ReactNode;
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);

  return (
    <AnimationContext.Provider 
      value={{ 
        isPageTransitioning, 
        setIsPageTransitioning,
        shouldPauseAnimations: isPageTransitioning
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
}
