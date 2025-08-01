"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useTheme } from "next-themes";

const getDefaultColor = (theme: string | undefined) => {
  if (theme === "dark") {
    return "oklch(0.9220 0 0)"; // Light color for dark mode
  }
  return "oklch(0.2050 0 0)"; // Dark color for light mode
};

const colors = [
  { name: "Cosmic", value: "default" }, // Special value for theme-aware color
  { name: "Sunset Blaze", value: "oklch(0.6171 0.1375 39.0427)" },
  { name: "Ocean Deep", value: "oklch(0.6171 0.1375 239.0427)" },
  { name: "Forest Sage", value: "oklch(0.6171 0.1375 139.0427)" },
  { name: "Royal Violet", value: "oklch(0.6171 0.1375 299.0427)" },
  { name: "Rose Quartz", value: "oklch(0.6171 0.1375 329.0427)" },
  { name: "Cherry Fire", value: "oklch(0.6171 0.1375 19.0427)" },
  { name: "Mint Frost", value: "oklch(0.6171 0.1375 179.0427)" },
  { name: "Golden Hour", value: "oklch(0.6171 0.1375 79.0427)" },
  { name: "Arctic Blue", value: "oklch(0.6171 0.1375 199.0427)" },
//   { name: "Indigo", value: "oklch(0.6171 0.1375 269.0427)" },
];

interface ColorContextType {
  currentColor: string;
  setColor: (color: string) => void;
  colors: typeof colors;
  getDisplayColor: (colorValue: string) => string;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [currentColor, setCurrentColor] = useState("default");
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
    // Check if cookies are accepted before loading preferences
    const cookieConsent = localStorage.getItem("portfolio-cookie-consent");
    if (cookieConsent === "accepted") {
      // Load saved color from localStorage
      const savedColor = localStorage.getItem("portfolio-color");
      if (savedColor) {
        setCurrentColor(savedColor);
      }
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Get the actual color value (theme-aware for default)
    const actualColor = currentColor === "default" ? getDefaultColor(theme) : currentColor;
    
    // Apply color to CSS variables
    document.documentElement.style.setProperty("--primary", actualColor);
    
    // Only save to localStorage if cookies are accepted
    const cookieConsent = localStorage.getItem("portfolio-cookie-consent");
    if (cookieConsent === "accepted") {
      localStorage.setItem("portfolio-color", currentColor);
    }
  }, [currentColor, theme, mounted]);

  const setColor = (color: string) => {
    setCurrentColor(color);
  };

  const getDisplayColor = (colorValue: string) => {
    return colorValue === "default" ? getDefaultColor(theme) : colorValue;
  };

  return (
    <ColorContext.Provider value={{ currentColor, setColor, colors, getDisplayColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
}
