"use client";

import { motion } from "motion/react";
import { 
  ExternalLink, 
  Github, 
  Calendar,
  Users,
  Star,
  Award,
  Smartphone,
  Globe,
  Brain,
  Palette,
  Code2,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projectCategories = [
  { id: "all", label: "All Projects", icon: Globe },
  { id: "web", label: "Web Apps", icon: Code2 },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone },
  { id: "ai", label: "AI/ML", icon: Brain },
  { id: "design", label: "UI/UX", icon: Palette },
  { id: "saas", label: "SaaS", icon: TrendingUp }
];

const projectsData = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description: "Revolutionary analytics platform with real-time AI insights, predictive modeling, and intuitive data visualization for enterprise clients.",
    category: "ai",
    image: "/api/placeholder/600/400",
    tech: ["Next.js", "TypeScript", "Python", "TensorFlow", "PostgreSQL", "Redis"],
    status: "Live",
    featured: true,
    metrics: {
      users: "10k+",
      performance: "98%",
      satisfaction: "4.9/5"
    },
    links: {
      live: "https://example.com",
      github: "https://github.com/example"
    },
    year: "2024",
    timeline: "6 months",
    client: "Fortune 500 Company"
  },
  {
    id: 2,
    title: "E-Commerce Mobile App",
    description: "Beautiful React Native app with seamless shopping experience, AR try-on features, and integrated payment solutions.",
    category: "mobile",
    image: "/api/placeholder/600/400",
    tech: ["React Native", "TypeScript", "Node.js", "MongoDB", "Stripe", "AWS"],
    status: "Live",
    featured: true,
    metrics: {
      downloads: "50k+",
      rating: "4.8/5",
      conversion: "12%"
    },
    links: {
      live: "https://example.com",
      github: "https://github.com/example"
    },
    year: "2024",
    timeline: "8 months",
    client: "Fashion Retailer"
  },
  {
    id: 3,
    title: "SaaS Project Management Platform",
    description: "Complete project management solution with team collaboration, time tracking, and advanced reporting features.",
    category: "saas",
    image: "/api/placeholder/600/400",
    tech: ["React", "Node.js", "GraphQL", "PostgreSQL", "Docker", "AWS"],
    status: "In Development",
    featured: false,
    metrics: {
      teams: "500+",
      projects: "5k+",
      uptime: "99.9%"
    },
    links: {
      live: "https://example.com",
      github: "https://github.com/example"
    },
    year: "2024",
    timeline: "4 months",
    client: "Startup"
  },
  {
    id: 4,
    title: "Healthcare Portal Redesign",
    description: "Modern healthcare portal with patient management, telemedicine integration, and HIPAA-compliant security features.",
    category: "web",
    image: "/api/placeholder/600/400",
    tech: ["Vue.js", "Python", "Django", "PostgreSQL", "WebRTC", "AWS"],
    status: "Completed",
    featured: false,
    metrics: {
      patients: "25k+",
      appointments: "100k+",
      satisfaction: "4.7/5"
    },
    links: {
      live: "https://example.com",
      case_study: "https://example.com/case-study"
    },
    year: "2023",
    timeline: "10 months",
    client: "Healthcare Provider"
  },
  {
    id: 5,
    title: "Design System & Component Library",
    description: "Comprehensive design system with 100+ components, dark mode support, and accessibility-first approach.",
    category: "design",
    image: "/api/placeholder/600/400",
    tech: ["Figma", "React", "Storybook", "TypeScript", "Tailwind CSS"],
    status: "Ongoing",
    featured: false,
    metrics: {
      components: "100+",
      downloads: "10k+",
      teams: "20+"
    },
    links: {
      live: "https://storybook.example.com",
      github: "https://github.com/example"
    },
    year: "2023",
    timeline: "Ongoing",
    client: "Internal Project"
  },
  {
    id: 6,
    title: "Fintech Trading Platform",
    description: "Real-time trading platform with advanced charting, portfolio management, and risk assessment tools.",
    category: "web",
    image: "/api/placeholder/600/400",
    tech: ["React", "WebSocket", "Node.js", "Redis", "PostgreSQL", "Docker"],
    status: "Live",
    featured: true,
    metrics: {
      trades: "1M+",
      users: "15k+",
      uptime: "99.95%"
    },
    links: {
      live: "https://example.com",
      case_study: "https://example.com/case-study"
    },
    year: "2023",
    timeline: "12 months",
    client: "Financial Services"
  }
];

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projectsData.filter(
    project => activeCategory === "all" || project.category === activeCategory
  );

  // Create bento grid layout based on category
  const getBentoLayout = (projects: typeof projectsData) => {
    if (projects.length === 0) return [];
    
    // Different layouts for different categories
    const layouts = {
      all: [
        { span: "md:col-span-2 md:row-span-2", size: "large" },
        { span: "md:col-span-1 md:row-span-1", size: "medium" },
        { span: "md:col-span-1 md:row-span-1", size: "medium" },
        { span: "md:col-span-1 md:row-span-2", size: "tall" },
        { span: "md:col-span-2 md:row-span-1", size: "wide" },
        { span: "md:col-span-1 md:row-span-1", size: "medium" }
      ],
      web: [
        { span: "md:col-span-2 md:row-span-1", size: "wide" },
        { span: "md:col-span-1 md:row-span-2", size: "tall" },
        { span: "md:col-span-1 md:row-span-1", size: "medium" },
        { span: "md:col-span-2 md:row-span-1", size: "wide" }
      ],
      mobile: [
        { span: "md:col-span-1 md:row-span-2", size: "tall" },
        { span: "md:col-span-1 md:row-span-1", size: "medium" },
        { span: "md:col-span-1 md:row-span-1", size: "medium" },
        { span: "md:col-span-1 md:row-span-2", size: "tall" }
      ],
      ai: [
        { span: "md:col-span-2 md:row-span-2", size: "large" },
        { span: "md:col-span-1 md:row-span-1", size: "medium" },
        { span: "md:col-span-1 md:row-span-1", size: "medium" }
      ],
      design: [
        { span: "md:col-span-1 md:row-span-1", size: "medium" },
        { span: "md:col-span-1 md:row-span-1", size: "medium" },
        { span: "md:col-span-2 md:row-span-1", size: "wide" },
        { span: "md:col-span-2 md:row-span-1", size: "wide" }
      ],
      saas: [
        { span: "md:col-span-2 md:row-span-1", size: "wide" },
        { span: "md:col-span-1 md:row-span-1", size: "medium" },
        { span: "md:col-span-1 md:row-span-1", size: "medium" }
      ]
    };

    const layout = layouts[activeCategory as keyof typeof layouts] || layouts.all;
    
    return projects.map((project, index) => ({
      ...project,
      layout: layout[index % layout.length]
    }));
  };

  const projectsWithLayout = getBentoLayout(filteredProjects);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "text-green-500 bg-green-500/10 border-green-500/30";
      case "In Development": return "text-blue-500 bg-blue-500/10 border-blue-500/30";
      case "Completed": return "text-purple-500 bg-purple-500/10 border-purple-500/30";
      case "Ongoing": return "text-orange-500 bg-orange-500/10 border-orange-500/30";
      default: return "text-gray-500 bg-gray-500/10 border-gray-500/30";
    }
  };

  return (
    <section id="projects-grid" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/30 mb-6">
            <Award className="w-4 h-4" />
            Digital Playground
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Wild Ideas
            <span className="text-primary block">Brought to Life</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive into my collection of digital adventures where creativity meets code and every pixel tells a story of innovation and pure awesomeness.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {projectCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "border-border/50 hover:border-primary/30 hover:bg-primary/5"
              }`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]"
        >
          {projectsWithLayout.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className={`group relative ${project.layout?.span || "md:col-span-1 md:row-span-1"}`}
            >
              <div className={`bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 h-full relative ${
                project.layout?.size === "large" ? "min-h-[600px]" :
                project.layout?.size === "tall" ? "min-h-[500px]" :
                project.layout?.size === "wide" ? "min-h-[350px]" : 
                "min-h-[300px]"
              }`}>
                {/* Text Content - Top Left */}
                <div className="absolute top-6 left-6 z-20 max-w-[60%]">
                  {/* Badges */}
                  <div className="flex flex-col gap-2 mb-4">
                    {project.featured && (
                      <div className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center gap-1 w-fit">
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    )}
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)} w-fit`}>
                      {project.status}
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div className="mb-4">
                    <h3 className={`font-bold text-foreground group-hover:text-primary transition-colors mb-2 ${
                      project.layout?.size === "large" ? "text-2xl" : "text-lg"
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-muted-foreground leading-relaxed ${
                      project.layout?.size === "large" ? "text-sm" : "text-xs"
                    }`}>
                      {project.description.length > 100 ? project.description.substring(0, 100) + "..." : project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, project.layout?.size === "large" ? 4 : 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground rounded-full border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > (project.layout?.size === "large" ? 4 : 3) && (
                      <span className="px-2 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground rounded-full border border-border/50">
                        +{project.tech.length - (project.layout?.size === "large" ? 4 : 3)}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.links.live && (
                      <Button size="sm" className="rounded-full text-xs">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View
                      </Button>
                    )}
                    {project.links.github && (
                      <Button size="sm" variant="outline" className="rounded-full text-xs">
                        <Github className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Hero Image - Bottom Right with 70% Cut Off */}
                <div className={`absolute bottom-0 right-0 transform translate-x-[70%] translate-y-[70%] z-10 ${
                  project.layout?.size === "large" ? "w-96 h-96" :
                  project.layout?.size === "tall" ? "w-80 h-80" :
                  project.layout?.size === "wide" ? "w-72 h-72" : 
                  "w-64 h-64"
                } rounded-2xl overflow-hidden border-4 border-background shadow-2xl`}>
                  <div className="relative w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`text-primary/40 ${
                        project.layout?.size === "large" ? "text-9xl" : "text-7xl"
                      }`}>
                        {project.category === "web" && <Globe className={project.layout?.size === "large" ? "w-40 h-40" : "w-28 h-28"} />}
                        {project.category === "mobile" && <Smartphone className={project.layout?.size === "large" ? "w-40 h-40" : "w-28 h-28"} />}
                        {project.category === "ai" && <Brain className={project.layout?.size === "large" ? "w-40 h-40" : "w-28 h-28"} />}
                        {project.category === "design" && <Palette className={project.layout?.size === "large" ? "w-40 h-40" : "w-28 h-28"} />}
                        {project.category === "saas" && <TrendingUp className={project.layout?.size === "large" ? "w-40 h-40" : "w-28 h-28"} />}
                        {!["web", "mobile", "ai", "design", "saas"].includes(project.category) && <Globe className={project.layout?.size === "large" ? "w-40 h-40" : "w-28 h-28"} />}
                      </div>
                    </div>
                    
                    {/* Gradient overlay for better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-tl from-black/20 to-transparent" />
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                </div>

                {/* Metrics - Bottom Left for larger cards */}
                {(project.layout?.size === "large" || project.layout?.size === "tall") && (
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center bg-background/80 backdrop-blur-sm rounded-lg p-2 border border-border/50">
                          <div className="text-sm font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Info - Bottom Left for smaller cards */}
                {project.layout?.size !== "large" && project.layout?.size !== "tall" && (
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-border/50">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                        <Calendar className="w-3 h-3" />
                        {project.year}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Users className="w-3 h-3" />
                        {project.client}
                      </div>
                    </div>
                  </div>
                )}

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 z-30"
                >
                  {project.links.live && (
                    <Button size="sm" className="rounded-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.links.github && (
                    <Button size="sm" variant="outline" className="rounded-full">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.links.case_study && (
                    <Button size="sm" variant="outline" className="rounded-full">
                      <Award className="w-4 h-4 mr-2" />
                      Case Study
                    </Button>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-4 rounded-full border-primary/30 hover:bg-primary/5 transition-all duration-300"
          >
            Load More Projects
            <TrendingUp className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
