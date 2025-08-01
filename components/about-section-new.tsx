"use client";
import React from "react";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-white dark:bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Rounded Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-6"
          >
            ✨ Get to know me better
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6"
          >
            Know More About{" "}
            <span className="bg-primary text-primary-foreground px-4 py-2 rounded-2xl">
              Me
            </span>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed"
          >
            Dive deeper into my journey as a developer, my passions, skills, and the experiences that shape who I am today.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]"
        >
          {/* Card 1 - About Me (Large 2x2) */}
          <div className="lg:col-span-2 lg:row-span-2 bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800 hover:scale-[1.02] transition-transform duration-300">
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">👨‍💻</span>
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">About Me</h3>
                <p className="text-neutral-600 dark:text-neutral-400">My journey as a developer and the experiences that shaped who I am today</p>
              </div>
            </div>
          </div>

          {/* Card 2 - Skills (1x1) */}
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-6 border border-neutral-200 dark:border-neutral-800 hover:scale-[1.02] transition-transform duration-300">
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Skills</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Tech stack & expertise</p>
              </div>
            </div>
          </div>

          {/* Card 3 - Projects (1x1) */}
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-6 border border-neutral-200 dark:border-neutral-800 hover:scale-[1.02] transition-transform duration-300">
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Projects</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Featured work & case studies</p>
              </div>
            </div>
          </div>

          {/* Card 4 - Contact (2x1 wide) */}
          <div className="lg:col-span-2 bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-6 border border-neutral-200 dark:border-neutral-800 hover:scale-[1.02] transition-transform duration-300">
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Let's Connect</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Ready to collaborate and build something amazing together</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
