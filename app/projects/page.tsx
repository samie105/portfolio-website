import ContactFooter from "@/components/contact-footer";
import ProjectsCarousel from "@/components/projects-carousel";
import ProjectsHero from "@/components/projects-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Innovative Web Development Portfolio",
  description: "Explore Thy Richfield's portfolio of cutting-edge web applications, AI-powered solutions, e-commerce platforms, and modern digital experiences. Featuring React, Next.js, TypeScript, and full-stack development projects.",
  keywords: [
    "web development projects",
    "React applications",
    "Next.js projects",
    "full stack portfolio",
    "TypeScript projects",
    "e-commerce development",
    "API development",
    "database design",
    "responsive web design",
    "modern web applications",
    "AI integration",
    "cloud solutions",
    "custom development",
    "digital solutions",
    "web app development"
  ],
  openGraph: {
    title: "Projects - Thy Richfield's Web Development Portfolio",
    description: "Discover innovative web applications, AI-powered solutions, and modern digital experiences created by Thy Richfield. Expert full-stack development with React, Next.js, and cutting-edge technologies.",
    url: "https://thyrichfield.me/projects",
    images: [
      {
        url: "/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Thy Richfield's Web Development Projects Portfolio",
      },
    ],
  },
  twitter: {
    title: "Projects - Thy Richfield's Web Development Portfolio",
    description: "Discover innovative web applications and modern digital experiences created with React, Next.js, and cutting-edge technologies.",
    images: ["/og-projects.jpg"],
  },
  alternates: {
    canonical: "https://thyrichfield.me/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsCarousel />
      <ContactFooter />
    </main>
  );
}
