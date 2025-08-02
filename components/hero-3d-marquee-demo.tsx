"use client";
import React from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { Sparkles, Code, LayoutGrid } from "lucide-react";
import { motion } from "motion/react";

export default function Hero3DMarqueeDemo() {
  
  const images = [
    // CapitalNexus Project
    "/projects/capitalnexus/landingpage.png",
    "/projects/capitalnexus/dashboard-section.png",
    "/projects/capitalnexus/copytraders-section.png",
    "/projects/capitalnexus/perfomancestatistics.png",
    "/projects/capitalnexus/sponsors-testimonials.png",
    
    // DeliveryUno Project
    "/projects/deliveryuno/hero-section.png",
    "/projects/deliveryuno/services.png",
    "/projects/deliveryuno/tracking-section.png",
    "/projects/deliveryuno/testimonials.png",
    "/projects/deliveryuno/about-us-section.png",
    
    // NFT Project
    "/projects/nft-project/landingpage.png",
    "/projects/nft-project/nft-project-dashboard.png",
    "/projects/nft-project/nft-project-collection.png",
    "/projects/nft-project/nft-project-profile.png",
    "/projects/nft-project/nft-project-section.png",
    
    // TruBank Project
    "/projects/trubank/trubank-hero.png",
    "/projects/trubank/trubank-overview-dashboard.png",
    "/projects/trubank/trubank-customer dashboard.png",
    "/projects/trubank/trubank-feature-section.png",
    "/projects/trubank/trubank-testimonial-section.png",
    
    // WilsonBank Project
    "/projects/wilsonbank/hero-section.png",
    "/projects/wilsonbank/dashboard-page.png",
    "/projects/wilsonbank/features-section.png",
    "/projects/wilsonbank/services-section.png",
    "/projects/wilsonbank/testimonials-section.png",
    "/projects/wilsonbank/contact-page.png",
    "/projects/wilsonbank/settings-page-dashboard.png",
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
              Open for jobs
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
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 cursor-pointer hover:scale-110 transition-transform duration-300 group"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/50 bg-black/20 backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2 group-hover:bg-white/80"
          />
        </motion.div>
      </motion.button>
    </div>
  );
}
