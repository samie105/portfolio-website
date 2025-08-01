"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface GridLine {
  id: string;
  type: 'horizontal' | 'vertical';
  position: number;
  delay: number;
  duration: number;
}

interface ParticlePoint {
  id: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

export default function AnimatedGridBackground() {
  const { theme } = useTheme();
  const [gridLines, setGridLines] = useState<GridLine[]>([]);
  const [particles, setParticles] = useState<ParticlePoint[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Generate random grid lines
    const lines: GridLine[] = [];
    const particlePoints: ParticlePoint[] = [];
    const gridSize = 40; // 40px grid size to match our CSS
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;
    
    // Calculate number of grid lines
    const horizontalLines = Math.ceil(viewportHeight / gridSize);
    const verticalLines = Math.ceil(viewportWidth / gridSize);
    
    // Generate horizontal moving lines (fewer for performance)
    for (let i = 0; i < Math.min(6, horizontalLines); i++) {
      const randomRow = Math.floor(Math.random() * horizontalLines);
      lines.push({
        id: `h-${i}`,
        type: 'horizontal',
        position: randomRow * gridSize,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 6
      });
    }
    
    // Generate vertical moving lines (fewer for performance)
    for (let i = 0; i < Math.min(6, verticalLines); i++) {
      const randomCol = Math.floor(Math.random() * verticalLines);
      lines.push({
        id: `v-${i}`,
        type: 'vertical',
        position: randomCol * gridSize,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 6
      });
    }

    // Generate traveling particles
    for (let i = 0; i < 12; i++) {
      particlePoints.push({
        id: `particle-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 4
      });
    }
    
    setGridLines(lines);
    setParticles(particlePoints);
  }, []);

  if (!mounted) return null;

  const lineColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)';
  const shadowColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
  const accentColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.10)';

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Static Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-5" />
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0">
        {gridLines.map((line) => (
          <motion.div
            key={line.id}
            className="absolute"
            style={{
              [line.type === 'horizontal' ? 'top' : 'left']: line.position,
              [line.type === 'horizontal' ? 'left' : 'top']: 0,
              [line.type === 'horizontal' ? 'width' : 'height']: '100%',
              [line.type === 'horizontal' ? 'height' : 'width']: '1px',
              background: lineColor,
              boxShadow: `0 0 6px ${shadowColor}`,
            }}
            initial={{
              [line.type === 'horizontal' ? 'x' : 'y']: '-100%',
              opacity: 0
            }}
            animate={{
              [line.type === 'horizontal' ? 'x' : 'y']: '100%',
              opacity: [0, 0.6, 0.6, 0]
            }}
            transition={{
              duration: line.duration,
              delay: line.delay,
              repeat: Infinity,
              repeatDelay: 6 + Math.random() * 8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Pulsing Grid Intersections */}
      <div className="absolute inset-0">
        {Array.from({ length: 10 }, (_, i) => (
          <motion.div
            key={`intersection-${i}`}
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: accentColor,
              left: `${8 + (i * 9)}%`,
              top: `${15 + ((i * 8) % 65)}%`,
              boxShadow: `0 0 8px ${shadowColor}`,
            }}
            animate={{
              scale: [0.5, 1.2, 0.5],
              opacity: [0.2, 0.9, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: i * 0.4,
              repeat: Infinity,
              repeatDelay: 2 + Math.random() * 3
            }}
          />
        ))}
      </div>

      {/* Traveling Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: lineColor,
              boxShadow: `0 0 4px ${shadowColor}`,
            }}
            initial={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
              opacity: 0
            }}
            animate={{
              x: [`${particle.x}%`, `${(particle.x + 30) % 100}%`, `${(particle.x + 60) % 100}%`],
              y: [`${particle.y}%`, `${(particle.y + 20) % 100}%`, `${(particle.y + 40) % 100}%`],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatDelay: 4 + Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Flowing Data Streams */}
      {Array.from({ length: 4 }, (_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute"
          style={{
            width: '100%',
            height: '1px',
            top: `${20 + i * 20}%`,
            background: lineColor,
            boxShadow: `0 0 4px ${shadowColor}`,
          }}
          initial={{ x: '-100%', scaleX: 0 }}
          animate={{ 
            x: '100%',
            scaleX: [0, 0.5, 1, 0.5, 0]
          }}
          transition={{
            duration: 5 + i * 0.8,
            delay: i * 2,
            repeat: Infinity,
            repeatDelay: 4 + Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Network Connection Lines */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={`network-${i}`}
          className="absolute origin-center"
          style={{
            width: '30%',
            height: '1px',
            background: lineColor,
            left: `${10 + i * 15}%`,
            top: `${25 + (i * 12) % 50}%`,
            transform: `rotate(${45 + i * 30}deg)`,
            boxShadow: `0 0 6px ${shadowColor}`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 4 + i * 0.5,
            delay: i * 1.2,
            repeat: Infinity,
            repeatDelay: 6 + Math.random() * 4,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Energy Pulses */}
      {Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute rounded-full"
          style={{
            width: '4px',
            height: '4px',
            background: lineColor,
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            boxShadow: `0 0 6px ${shadowColor}`,
          }}
          animate={{
            scale: [1, 3, 1],
            opacity: [0.8, 0.2, 0.8]
          }}
          transition={{
            duration: 2 + i * 0.3,
            delay: i * 0.8,
            repeat: Infinity,
            repeatDelay: 3 + Math.random() * 2
          }}
        />
      ))}

      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/90" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/80" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-tl from-background/30 via-transparent to-background/30" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/10 to-background/40" />
    </div>
  );
}
