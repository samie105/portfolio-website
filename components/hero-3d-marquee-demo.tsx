"use client";
import React from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { Sparkles, Code, LayoutGrid } from "lucide-react";
import { motion } from "motion/react";
import { useShouldAnimate } from "@/hooks/use-motion-props";

export default function Hero3DMarqueeDemo() {
  const shouldAnimate = useShouldAnimate();
  
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];

  const roles = ["FullStack Developer", "Product Designer", "Blendy Overthinker"];

  // Scroll to next section function
  const scrollToNextSection = () => {
    const element = document.getElementById("tools");
    if (element) {
      const navHeight = 64; // navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* 3D Marquee Background */}
      <div className="absolute inset-0 z-0">
        <ThreeDMarquee images={images} className="h-full w-full" />
      </div>
      
      {/* Primary Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      
      {/* Bottom Fade Overlay */}
      <div className="absolute hidden dark:block bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-30"></div>
      
      {/* Hero Content Overlay */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 w-full text-center">
          {/* Available Badge */}
          <div className="mb-6 animate-in slide-in-from-top-4 duration-1000 delay-200">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white border border-white/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Available for hire
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight animate-in slide-in-from-bottom-6 duration-1000 delay-300">
            Hi, I&apos;m Richfield <br /> 
            <span className="text-white inline-flex items-center gap-3 justify-center">
              <FlipWords words={roles} duration={2500} className="text-white font-bold" />
              <span className="hidden sm:inline-block">
                <Code className="w-8 h-8 md:w-12 md:h-12 text-white/80 animate-pulse" />
              </span>
            </span>
          </h1>
          
          {/* Description */}
          <p className="max-w-2xl mx-auto text-base sm:text-xl md:text-xl mt-3 md:mt-8 text-white/90 leading-relaxed font-medium animate-in slide-in-from-bottom-8 duration-1000 delay-500">
            I craft beautiful, functional web experiences using modern technologies. 
            Passionate about clean code, user experience, and turning ideas into reality.
          </p>
          
          {/* CTA Button */}
          <div className="mt-8 md:mt-12 flex justify-center animate-in slide-in-from-bottom-10 duration-1000 delay-700">
            <Button 
              size="lg"
              onClick={scrollToNextSection}
              className="text-base px-8 py-3 h-auto font-semibold w-fit rounded-full group transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white dark:bg-primary text-black hover:bg-primary/90"
            >
              <span className="flex items-center gap-2">
                Explore
                <LayoutGrid className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Only visible within hero section */}
      <motion.button
        onClick={scrollToNextSection}
        initial={{ opacity: 0 }}
        animate={shouldAnimate ? { opacity: 1 } : { opacity: 1 }}
        transition={shouldAnimate ? { duration: 1, delay: 1.5 } : { duration: 0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 cursor-pointer hover:scale-110 transition-transform duration-300 group"
      >
        <motion.div
          animate={shouldAnimate ? { y: [0, 8, 0] } : { y: 0 }}
          transition={shouldAnimate ? { duration: 2, repeat: Infinity } : { duration: 0 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/50 bg-black/20 backdrop-blur-sm"
        >
          <motion.div
            animate={shouldAnimate ? { y: [0, 12, 0] } : { y: 0 }}
            transition={shouldAnimate ? { duration: 2, repeat: Infinity } : { duration: 0 }}
            className="w-1 h-3 bg-white rounded-full mt-2 group-hover:bg-white/80"
          />
        </motion.div>
      </motion.button>
    </div>
  );
}
