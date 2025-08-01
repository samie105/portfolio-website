"use client";

import { motion } from "motion/react";
import { 
  Sparkles,
  ArrowDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function ProjectsHero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects-section");
    if (element) {
      const navHeight = 64;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects-hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundBeamsWithCollision className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/30 mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Where Ideas Come to Life
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 font-geist"
          >
            Code That
            <span className="text-primary block">Captivates</span>
          </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-geist"
        >
          Step into my digital playground where wild ideas transform into 
          <span className="text-primary font-medium"> stunning realities</span>. 
          Each project tells a story of 
          <span className="text-primary font-medium"> innovation</span>, 
          <span className="text-primary font-medium"> creativity</span>, and 
          <span className="text-primary font-medium"> pure digital magic</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-32"
        >
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="px-8 py-4 text-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Let&apos;s Dive in
            <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </BackgroundBeamsWithCollision>
    
    {/* Scroll Indicator - Fixed at bottom of viewport */}
    <motion.button
      onClick={scrollToProjects}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 cursor-pointer hover:scale-110 transition-transform duration-300 group"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center group-hover:border-primary/50 bg-background/80 backdrop-blur-sm"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 h-3 bg-primary rounded-full mt-2 group-hover:bg-primary/80"
        />
      </motion.div>
    </motion.button>
  </section>
  );
}
