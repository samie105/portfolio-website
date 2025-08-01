"use client";
import React from "react";
import { motion } from "motion/react";
import { 
  Code2, 
  Palette, 
  Globe, 
  TrendingUp, 
  Users, 
  Star,
  ExternalLink,
  Github,
  Calendar,
  Target,
  Zap,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolioData = {
  projects: [
    {
      title: "AI-Powered SaaS Platform",
      description: "Full-stack application with Next.js, TypeScript, and AI integration",
      image: "/api/placeholder/400/250",
      tech: ["Next.js", "TypeScript", "OpenAI", "Supabase"],
      status: "Live",
      link: "#"
    },
    {
      title: "E-commerce Dashboard",
      description: "Modern dashboard for managing online stores with real-time analytics",
      image: "/api/placeholder/400/250", 
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "In Progress",
      link: "#"
    },
    {
      title: "Mobile App Design System",
      description: "Complete design system with 50+ components and dark mode support",
      image: "/api/placeholder/400/250",
      tech: ["Figma", "React Native", "Storybook"],
      status: "Completed",
      link: "#"
    }
  ],
  stats: [
    { label: "Projects Completed", value: "50+", icon: Target },
    { label: "Happy Clients", value: "25+", icon: Users },
    { label: "Years Experience", value: "5+", icon: Calendar },
    { label: "GitHub Stars", value: "1.2k", icon: Star }
  ],
  skills: [
    { name: "Frontend Development", level: 95, icon: Code2 },
    { name: "UI/UX Design", level: 88, icon: Palette },
    { name: "Full-Stack Development", level: 92, icon: Globe },
    { name: "Performance Optimization", level: 85, icon: Zap }
  ]
};

export default function PortfolioSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/30 mb-6">
            <Award className="w-4 h-4" />
            Portfolio Showcase
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Crafting Digital
            <span className="text-primary block">Experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my passion for building beautiful, functional, and user-centered digital solutions.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {portfolioData.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Projects - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-foreground">Featured Projects</h3>
                <Button variant="outline" size="sm" className="rounded-xl">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View All
                </Button>
              </div>
              
              <div className="space-y-6">
                {portfolioData.projects.map((project, index) => (
                  <div
                    key={project.title}
                    className="group p-6 rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-300 hover:bg-muted/20"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-32 h-20 bg-muted/50 rounded-xl flex items-center justify-center">
                        <Code2 className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h4>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              project.status === 'Live' 
                                ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                                : project.status === 'In Progress'
                                ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                                : 'bg-blue-500/10 text-blue-500 border border-blue-500/20'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-3">
                          <Button variant="ghost" size="sm" className="p-2 h-auto">
                            <Github className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="p-2 h-auto">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills & Analytics - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Skills Chart */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Skills Overview</h3>
              </div>
              
              <div className="space-y-6">
                {portfolioData.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Card */}
            <div className="bg-gradient-to-br from-primary/10 via-card/50 to-card/30 backdrop-blur-sm border border-primary/20 rounded-3xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Top Performer</h3>
                <p className="text-muted-foreground mb-6">
                  Recognized for excellence in web development and design innovation
                </p>
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">5.0 average rating from clients</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project and create digital experiences that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8">
                <span className="flex items-center gap-2">
                  Start a Project
                  <ExternalLink className="w-5 h-5" />
                </span>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8">
                <span className="flex items-center gap-2">
                  View Resume
                  <Github className="w-5 h-5" />
                </span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
