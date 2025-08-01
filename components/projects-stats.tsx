"use client";

import { motion } from "motion/react";
import { 
  Code2, 
  Users, 
  Star, 
  Calendar,
  Trophy,
  Target,
  Zap,
  Heart
} from "lucide-react";

const statsData = [
  {
    icon: Target,
    value: "50+",
    label: "Projects Completed",
    description: "Successfully delivered projects across various industries",
    color: "text-blue-500"
  },
  {
    icon: Users,
    value: "25+",
    label: "Happy Clients",
    description: "Satisfied clients from startups to enterprises",
    color: "text-green-500"
  },
  {
    icon: Calendar,
    value: "5+",
    label: "Years Experience",
    description: "Building digital solutions with passion",
    color: "text-purple-500"
  },
  {
    icon: Star,
    value: "1.2k",
    label: "GitHub Stars",
    description: "Open source contributions and recognition",
    color: "text-yellow-500"
  },
  {
    icon: Trophy,
    value: "12",
    label: "Awards Won",
    description: "Recognition for design and development excellence",
    color: "text-orange-500"
  },
  {
    icon: Zap,
    value: "98%",
    label: "Performance Score",
    description: "Average lighthouse performance across projects",
    color: "text-red-500"
  },
  {
    icon: Code2,
    value: "500k+",
    label: "Lines of Code",
    description: "Written across various programming languages",
    color: "text-indigo-500"
  },
  {
    icon: Heart,
    value: "100%",
    label: "Client Satisfaction",
    description: "Commitment to delivering exceptional results",
    color: "text-pink-500"
  }
];

export default function ProjectsStats() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Impact by the
            <span className="text-primary"> Numbers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every project tells a story of innovation, dedication, and measurable results.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>

                {/* Value */}
                <div className="mb-2">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    className="text-3xl md:text-4xl font-bold text-foreground block"
                  >
                    {stat.value}
                  </motion.span>
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary border border-primary/30">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Ready to add your project to these numbers?</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
