"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { 
  Lightbulb, 
  Target, 
  Code, 
  BarChart3, 
  Rocket, 
  CheckCircle,
  ArrowRight,
  Users,
  Zap,
  Shield
} from "lucide-react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function ApproachSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const x = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const xReverse = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const approaches = [
    {
      phase: "01",
      title: "The Discovery Phase",
      description: "Every successful project begins with a story - your story. I dive deep into understanding not just what you want to build, but why it matters to you and your users. Through detailed conversations and research, we uncover the heart of your vision and map out a journey that transforms ideas into reality.",
      icon: Lightbulb,
      features: [
        { icon: Target, text: "Understanding Your Vision" },
        { icon: Users, text: "User Story Mapping" },
        { icon: ArrowRight, text: "Strategic Roadmap" }
      ]
    },
    {
      phase: "02", 
      title: "The Creation Journey",
      description: "This is where the magic happens. Armed with a clear vision, I begin crafting your digital solution with passion and precision. Every line of code tells a part of your story, while regular check-ins ensure we're always aligned on the narrative we're building together.",
      icon: Code,
      features: [
        { icon: Code, text: "Thoughtful Development" },
        { icon: BarChart3, text: "Transparent Progress" },
        { icon: Zap, text: "Collaborative Updates" }
      ]
    },
    {
      phase: "03",
      title: "The Grand Reveal", 
      description: "The climax of our journey together - bringing your vision to life. Through rigorous testing and careful optimization, we ensure your story is told flawlessly. Then comes the exciting moment: launching your project into the world, with continued support to help it thrive.",
      icon: Rocket,
      features: [
        { icon: Shield, text: "Meticulous Testing" },
        { icon: Rocket, text: "Confident Launch" },
        { icon: CheckCircle, text: "Ongoing Partnership" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="approach" className="py-20 relative" ref={ref}>
      {/* Animated Skills Text */}
      <div className="relative overflow-hidden py-4 mb-2">
        <motion.div 
          className="flex items-center justify-center gap-8 text-7xl sm:text-8xl lg:text-9xl font-bold text-muted-foreground/20 whitespace-nowrap uppercase"
          style={{ x }}
        >
          <span>FULLSTACK DEVELOPER</span>
          <motion.div 
            className="w-4 h-4 bg-muted-foreground/30 rounded-full flex-shrink-0"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <span>PRODUCT DESIGNER</span>
          <motion.div 
            className="w-4 h-4 bg-muted-foreground/30 rounded-full flex-shrink-0"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <span>PRODUCT DESIGNER</span>
          <motion.div 
            className="w-4 h-4 bg-muted-foreground/30 rounded-full flex-shrink-0"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          {/* Duplicate for seamless loop */}
          <span>FULLSTACK DEVELOPER</span>
          <motion.div 
            className="w-4 h-4 bg-muted-foreground/30 rounded-full flex-shrink-0"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <span>PRODUCT DESIGNER</span>
        </motion.div>
      </div>

      {/* Second Animated Skills Text - Opposite Direction */}
      <div className="relative overflow-hidden py-4 mb-8">
        <motion.div 
          className="flex items-center justify-center gap-8 text-7xl sm:text-8xl lg:text-9xl font-bold text-muted-foreground/20 whitespace-nowrap uppercase"
          style={{ x: xReverse }}
        >
          <span>UI/UX DESIGN</span>
          <motion.div 
            className="w-4 h-4 bg-muted-foreground/30 rounded-full flex-shrink-0"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          />
          <span>MOBILE DEVELOPMENT</span>
          <motion.div 
            className="w-4 h-4 bg-muted-foreground/30 rounded-full flex-shrink-0"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
          />
          <span>FULLSTACK DEVELOPER</span>
          <motion.div 
            className="w-4 h-4 bg-muted-foreground/30 rounded-full flex-shrink-0"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.3
            }}
          />
          {/* Duplicate for seamless loop */}
          <span>UI/UX DESIGN</span>
          <motion.div 
            className="w-4 h-4 bg-muted-foreground/30 rounded-full flex-shrink-0"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          />
          <span>MOBILE DEVELOPMENT</span>
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-muted/50 px-4 py-2 text-sm text-muted-foreground mb-6">
            <Target className="w-4 h-4" />
            My Creative Process
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-4">
            Every Project Has <PointerHighlight><span className="text-primary">A Story</span></PointerHighlight>
          </h2>
          <p className="text-lg text-muted-foreground">
            Let me walk you through how I turn your vision into reality - a journey of collaboration, creativity, and careful craftsmanship that brings your digital dreams to life.
          </p>
        </motion.div>

        {/* Approach Cards */}
        <div className="relative">
          {/* Story Timeline */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20"></div>
          
          <motion.div 
            className="space-y-12 lg:space-y-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.3 }}
          >
            {approaches.map((approach, index) => {
              const IconComponent = approach.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={approach.phase}
                  variants={cardVariants}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col gap-8 lg:gap-16`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-primary/10 border-4 border-background shadow-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Card Content */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <motion.div
                      className="relative group"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Story Card */}
                      <div className="relative bg-gradient-to-br from-card via-card to-card/50 rounded-3xl p-8 border shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Phase Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 ${
                          isEven ? 'lg:ml-auto lg:mr-0' : ''
                        }`}>
                          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                          <span className="text-sm font-medium text-primary">Chapter {approach.phase}</span>
                        </div>

                        {/* Mobile Icon (visible on mobile only) */}
                        <div className="lg:hidden w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 space-y-6">
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {approach.title}
                          </h3>
                          
                          <p className="text-base text-muted-foreground leading-relaxed">
                            {approach.description}
                          </p>

                          {/* Story Elements */}
                          <div className={`space-y-3 ${isEven ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'} flex flex-col`}>
                            {approach.features.map((feature, featureIndex) => {
                              const FeatureIcon = feature.icon;
                              return (
                                <motion.div 
                                  key={featureIndex} 
                                  className={`flex items-center gap-3 ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                                    <FeatureIcon className="w-5 h-5 text-primary" />
                                  </div>
                                  <span className="text-sm font-medium text-foreground">
                                    {feature.text}
                                  </span>
                                </motion.div>
                              );
                            })}
                          </div>

                          {/* Story Accent */}
                          <div className={`pt-4 border-t border-border/30 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                            <span className="text-xs text-muted-foreground italic">
                              {index === 0 && "Where your vision takes shape..."}
                              {index === 1 && "Where dreams become reality..."}
                              {index === 2 && "Where your story comes alive..."}
                            </span>
                          </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-primary/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block w-5/12"></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
