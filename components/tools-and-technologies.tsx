"use client";
import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Sparkle } from "lucide-react";
import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import Image from "next/image";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

export default function ToolsAndTechnologies() {
  
  // Globe configuration
  const globeConfigDark = {
    pointSize: 4,
    globeColor: "#111111",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#111111",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#222222",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 0,
    maxRings: 0,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const globeConfigLight = {
    pointSize: 1,
    globeColor: "#ffffff",
    showAtmosphere: true,
    atmosphereColor: "#111111",
    atmosphereAltitude: 0.1,
    emissive: "#ffffff",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(0,0,0,0.7)",
    ambientLight: "#f1f1f1",
    directionalLeftLight: "#111111",
    directionalTopLight: "#111111",
    pointLight: "#111111",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 0,
    maxRings: 0,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#555555", "#555555", "#555555"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    // {
    //   order: 2,
    //   startLat: 28.6139,
    //   startLng: 77.209,
    //   endLat: 3.139,
    //   endLng: 101.6869,
    //   arcAlt: 0.2,
    //   color: colors[Math.floor(Math.random() * (colors.length - 1))],
    // },
    // {
    //   order: 3,
    //   startLat: 51.5072,
    //   startLng: -0.1276,
    //   endLat: 48.8566,
    //   endLng: -2.3522,
    //   arcAlt: 0.1,
    //   color: colors[Math.floor(Math.random() * (colors.length - 1))],
    // },
  ];

  return (
    <section id="tools" className="min-h-screen py-20 px-4 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Rounded Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-6 border"
          >
            ⚡ Explore my toolkit
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
          >
            Tools &{" "}
            <PointerHighlight>
              <span className="text-primary">Technologies</span>
            </PointerHighlight>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Crafting digital experiences with cutting-edge technologies and creative flair
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Card 1 - Development Tools (Large 2x2) */}
          <div className="lg:col-span-2 lg:row-span-2 bg-card backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-border hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-xl min-h-[450px] md:min-h-[400px] relative overflow-hidden">
            {/* Text content positioned at top-left */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10">
              <h3 className="text-xl md:text-3xl font-bold text-card-foreground mb-3 md:mb-6">Code Crafting Studio</h3>
              <p className="text-sm md:text-lg text-muted-foreground max-w-xs md:max-w-md leading-relaxed">
                Where brilliant ideas transform into digital reality! My arsenal of cutting-edge tools helps bring creative visions to life across the globe.
              </p>
            </div>
            
            {/* Globe positioned at bottom-right, responsive sizing and positioning */}
            <div className="absolute hidden dark:block -bottom-60 -right-40 w-150 h-150 md:-bottom-60 md:-right-50 md:w-110 md:h-110 lg:w-190 lg:h-190 opacity-60 md:opacity-80 pointer-events-none z-0">
              <World data={sampleArcs} globeConfig={globeConfigDark} />
            </div>
            <div className="absolute dark:hidden -bottom-60 -right-40 w-150 h-150 md:-bottom-60 md:-right-50 md:w-110 md:h-110 lg:w-190 lg:h-190 opacity-60 md:opacity-80 pointer-events-none z-0">
              <World data={sampleArcs} globeConfig={globeConfigLight} />
            </div>
          </div>

          {/* Card 2 - Projects (Merged Frameworks & Databases) */}
          <div className="lg:col-span-2 bg-card p-4 backdrop-blur-sm rounded-3xl  border border-border hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-xl min-h-[420px] md:min-h-[280px] relative overflow-hidden">
            {/* Projects Text & Button positioned at top-left */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10 max-w-xs md:max-w-sm">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-3 md:mb-4">Projects</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    A showcase of my work, featuring a variety of projects that demonstrate my skills and creativity.
                  </p>
                </div>

                <Link 
                  href="/projects"
                  className="inline-flex items-center px-4 py-2 rounded-xl border border-primary/10 text-primary text-sm hover:bg-primary/10 transition-all duration-300 group font-medium w-fit"
                >
                  <span>View Projects</span>
                  <svg 
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Code Block positioned at bottom-right with 20% overflow */}
            <div className="absolute -bottom-12 md:-bottom-31 -right-7 md:-right-12 w-80 md:w-90 h-64 opacity-80 pointer-events-none z-10">
              <GlowingStarsBackgroundCard className="w-full h-full scale-125" />
            </div>
          </div>

          {/* Card 3 - Tech Stack (2x1 wide) */}
          <div className="lg:col-span-2 bg-card backdrop-blur-sm rounded-3xl p-8 border border-border hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-xl min-h-[280px]">
            <div className="h-full flex flex-col">
              {/* Header Row */}
              <div className="flex justify-between items-start mb-8">
                {/* Left: Title and Description */}
                <div className="text-left flex-1">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">Tech Stack</h3>
                  <p className="text-sm text-muted-foreground">Core technologies I work with daily</p>
                </div>
                
                {/* Right: Simple Icon */}
                <div className="ml-4">
                 <Sparkle className="w-8 h-8 text-primary/40" />
                </div>
              </div>

              {/* Tech Stack Grid */}
              <div className="flex-1 flex items-center justify-center">
                <div className="grid grid-cols-6 gap-3 w-full max-w-2xl">
                  {/* Row 1 */}
                  <div className="group w-full aspect-square bg-muted/50 backdrop-blur-sm rounded-xl p-2.5 border border-border hover:scale-110 hover:rotate-1 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                    <Image src="/tech-stack/reactjs.svg" alt="React" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="group w-full aspect-square bg-muted/50 backdrop-blur-sm rounded-xl p-2.5 border border-border hover:scale-110 hover:-rotate-1 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                    <Image src="/tech-stack/nextjs.svg" alt="Next.js" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="group w-full aspect-square bg-muted/50 backdrop-blur-sm rounded-xl p-2.5 border border-border hover:scale-110 hover:rotate-2 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                    <Image src="/tech-stack/typescript.svg" alt="TypeScript" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="group w-full aspect-square bg-muted/50 backdrop-blur-sm rounded-xl p-2.5 border border-border hover:scale-110 hover:-rotate-2 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                    <Image src="/tech-stack/javascript.svg" alt="JavaScript" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="group w-full aspect-square bg-muted/50 backdrop-blur-sm rounded-xl p-2.5 border border-border hover:scale-110 hover:rotate-1 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                    <Image src="/tech-stack/nodejs.svg" alt="Node.js" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="group w-full aspect-square bg-muted/50 backdrop-blur-sm rounded-xl p-2.5 border border-border hover:scale-110 hover:-rotate-1 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                    <Image src="/tech-stack/expo.svg" alt="Expo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Row 2 */}
                  <div className="group w-full aspect-square bg-muted/50 backdrop-blur-sm rounded-xl p-2.5 border border-border hover:scale-110 hover:rotate-2 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                    <Image src="/tech-stack/supabase.svg" alt="Supabase" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="group w-full aspect-square bg-muted/50 backdrop-blur-sm rounded-xl p-2.5 border border-border hover:scale-110 hover:-rotate-2 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                    <Image src="/tech-stack/mongodb.svg" alt="MongoDB" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="group w-full aspect-square bg-muted/50 backdrop-blur-sm rounded-xl p-2.5 border border-border hover:scale-110 hover:rotate-1 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                    <Image src="/tech-stack/prisma.svg" alt="Prisma" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="group w-full aspect-square bg-muted/50 backdrop-blur-sm rounded-xl p-2.5 border border-border hover:scale-110 hover:-rotate-1 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                    <Image src="/tech-stack/aws.svg" alt="AWS" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="group w-full aspect-square bg-muted/50 backdrop-blur-sm rounded-xl p-2.5 border border-border hover:scale-110 hover:rotate-2 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                    <Image src="/tech-stack/tailwind.svg" alt="Tailwind CSS" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="group w-full aspect-square bg-muted/50 backdrop-blur-sm rounded-xl p-2.5 border border-border hover:scale-110 hover:-rotate-2 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                    <Image src="/tech-stack/figma.svg" alt="Figma" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}