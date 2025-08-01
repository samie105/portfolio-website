"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "TruBank",
    tagline: "Cloud-based core banking platform designed to revolutionize financial institutions across Africa and beyond",
    description: "A comprehensive digital banking solution that modernizes traditional banking operations with cutting-edge technology, providing seamless user experiences for both customers and banking staff.",
    image: "/projects/trubank/trubank-hero.png",
    tech: [
      { name: "Next.js", icon: "/tech-stack/nextjs.svg" },
      { name: "React", icon: "/tech-stack/reactjs.svg" },
      { name: "TypeScript", icon: "/tech-stack/typescript.svg" },
      { name: "Tailwind CSS", icon: "/tech-stack/tailwind.svg" },
      { name: "Node.js", icon: "/tech-stack/nodejs.svg" }
    ],
    role: "Frontend Developer",
    status: "Live",
    links: {
      live: "https://trubank.ng",
      github: "https://github.com/trubank"
    },
    year: "2024",
    timeline: "8 months",
    client: "Financial Technology Company",
    details: [
      {
        title: "Landing Page",
        category: "Home Section",
        description: "Comprehensive banking platform showcasing the modern interface and core banking capabilities designed for African financial institutions.",
        image: "/projects/trubank/trubank-hero.png",
        features: ["Modern UI design", "Core banking features", "Multi-language support", "Mobile responsiveness"]
      },
      {
        title: "Customer Dashboard",
        category: "Dashboard Section",
        description: "Intuitive customer dashboard providing comprehensive account overview, transaction history, and financial insights with modern design principles.",
        image: "/projects/trubank/trubank-customer dashboard.png",
        features: ["Account overview", "Transaction history", "Financial insights", "Real-time updates"]
      },
      {
        title: "Features Section",
        category: "Home Section",
        description: "Complete suite of banking features including transfers, payments, loan management, and investment tracking.",
        image: "/projects/trubank/trubank-feature-section.png",
        features: ["Money transfers", "Bill payments", "Loan management", "Investment tracking"]
      },
      {
        title: "Overview Dashboard",
        category: "Dashboard Section",
        description: "Comprehensive administrative dashboard for banking staff with analytics, user management, and system monitoring.",
        image: "/projects/trubank/trubank-overview-dashboard.png",
        features: ["User analytics", "System monitoring", "Performance metrics", "Administrative tools"]
      },
      {
        title: "Customer Testimonials",
        category: "Home Section",
        description: "Dedicated section showcasing customer feedback and testimonials, highlighting the platform's impact and user satisfaction.",
        image: "/projects/trubank/trubank-testimonial-section.png",
        features: ["Customer feedback", "Success stories", "Trust indicators", "Social proof"]
      }
    ]
  },
  {
    id: 2,
    title: "Acronium",
    tagline: "Global NFT marketplace where creativity meets commerce - buy, sell, and discover unique digital assets worldwide",
    description: "A comprehensive NFT platform that connects creators and collectors globally, featuring seamless trading, creator discovery, and community building tools for the digital art revolution.",
    image: "/projects/nft-project/nft-project-section.png",
    tech: [
      { name: "Next.js", icon: "/tech-stack/nextjs.svg" },
      { name: "React", icon: "/tech-stack/reactjs.svg" },
      { name: "TypeScript", icon: "/tech-stack/typescript.svg" },
      { name: "Tailwind CSS", icon: "/tech-stack/tailwind.svg" },
      { name: "Supabase", icon: "/tech-stack/supabase.svg" },
      { name: "Node.js", icon: "/tech-stack/nodejs.svg" }
    ],
    role: "Full Stack Developer",
    status: "Live",
    links: {
      live: "https://nft-acronium.vercel.app/",
      github: "https://github.com/acronium"
    },
    year: "2025",
    timeline: "6 months",
    client: "NFT Marketplace Startup",
    details: [
      {
        title: "Landing Page",
        category: "Home Section",
        description: "Modern NFT marketplace landing page showcasing featured collections, trending artists, and seamless discovery experience for digital art enthusiasts worldwide.",
        image: "/projects/nft-project/landingpage.png",
        features: ["Featured collections", "Artist discovery", "Trending marketplace", "Advanced search & filters"]
      },
      {
        title: "Creator Dashboard",
        category: "Creator Tools",
        description: "Comprehensive dashboard for NFT creators to manage their collections, track sales analytics, and engage with their growing community of followers.",
        image: "/projects/nft-project/nft-project-dashboard.png",
        features: ["Collection management", "Sales analytics", "Creator insights", "Community engagement tools"]
      },
      {
        title: "NFT Collections",
        category: "Digital Assets",
        description: "Beautifully designed collection pages showcasing NFT artworks with detailed metadata, rarity information, and complete trading history.",
        image: "/projects/nft-project/nft-project-collection.png",
        features: ["Collection showcase", "Rarity indicators", "Trading history", "Detailed metadata display"]
      },
      {
        title: "User Profiles",
        category: "Social Features",
        description: "Rich user profiles enabling creators and collectors to showcase their portfolios, follow other users, and build their reputation in the NFT community.",
        image: "/projects/nft-project/nft-project-profile.png",
        features: ["Portfolio showcase", "Follow system", "Reputation building", "Social networking features"]
      }
    ]
  },
  {
    id: 3,
    title: "Capital Nexus",
    tagline: "Advanced trading and investment platform for cryptocurrency enthusiasts - invest, trade, and copy successful traders worldwide",
    description: "A comprehensive crypto trading platform that empowers users to invest in cryptocurrencies, execute trades, and replicate strategies from top-performing traders to maximize their investment potential.",
    image: "/projects/capitalnexus/landingpage.png",
    tech: [
      { name: "Next.js", icon: "/tech-stack/nextjs.svg" },
      { name: "React", icon: "/tech-stack/reactjs.svg" },
      { name: "JavaScript", icon: "/tech-stack/javascript.svg" },
      { name: "Tailwind CSS", icon: "/tech-stack/tailwind.svg" },
      { name: "Node.js", icon: "/tech-stack/nodejs.svg" },
      { name: "MongoDB", icon: "/tech-stack/mongodb.svg" }
    ],
    role: "Full Stack Developer",
    status: "Live",
    links: {
      live: "https://capitalnexus.vercel.app",
      github: "https://github.com/capitalnexus"
    },
    year: "2023",
    timeline: "3 months",
    client: "Cryptocurrency Trading Platform",
    details: [
      {
        title: "Landing Page",
        category: "Home Section",
        description: "Professional trading platform landing page showcasing investment opportunities, trading features, and platform benefits for cryptocurrency enthusiasts.",
        image: "/projects/capitalnexus/landingpage.png",
        features: ["Investment opportunities", "Trading interface", "Platform overview", "User onboarding"]
      },
      {
        title: "Trading Dashboard",
        category: "Trading Tools",
        description: "Advanced trading dashboard with real-time market data, portfolio management, and comprehensive trading tools for cryptocurrency investments.",
        image: "/projects/capitalnexus/dashboard-section.png",
        features: ["Real-time market data", "Portfolio tracking", "Trading interface", "Analytics dashboard"]
      },
      {
        title: "Copy Trading",
        category: "Social Trading",
        description: "Innovative copy trading feature allowing users to follow and replicate strategies from successful traders to optimize their investment returns.",
        image: "/projects/capitalnexus/copytraders-section.png",
        features: ["Trader profiles", "Strategy replication", "Performance tracking", "Risk management"]
      },
      {
        title: "Performance Analytics",
        category: "Analytics",
        description: "Comprehensive performance statistics and analytics dashboard providing detailed insights into trading performance and investment growth.",
        image: "/projects/capitalnexus/perfomancestatistics.png",
        features: ["Performance metrics", "Growth analytics", "Risk assessment", "Historical data"]
      },
      {
        title: "Testimonials & Sponsors",
        category: "Trust Indicators",
        description: "Dedicated section showcasing user testimonials and platform sponsors, building trust and credibility in the cryptocurrency trading community.",
        image: "/projects/capitalnexus/sponsors-testimonials.png",
        features: ["User testimonials", "Platform sponsors", "Success stories", "Community feedback"]
      }
    ]
  },
  {
    id: 4,
    title: "Delivery Uno",
    tagline: "Complete delivery management platform for seamless product tracking and shipping - connecting customers with reliable delivery services",
    description: "A comprehensive delivery platform that enables users to track shipments in real-time, manage delivery services, and ensure secure product shipping with an intuitive interface and powerful logistics management system.",
    image: "/projects/deliveryuno/hero-section.png",
    tech: [
      { name: "Next.js", icon: "/tech-stack/nextjs.svg" },
      { name: "React", icon: "/tech-stack/reactjs.svg" },
      { name: "TypeScript", icon: "/tech-stack/typescript.svg" },
      { name: "Tailwind CSS", icon: "/tech-stack/tailwind.svg" },
      { name: "Supabase", icon: "/tech-stack/supabase.svg" },
      { name: "Node.js", icon: "/tech-stack/nodejs.svg" }
    ],
    role: "Full Stack Developer",
    status: "Live",
    links: {
      live: "https://v0-deliveryuno.vercel.app",
      github: "https://github.com/deliveryuno"
    },
    year: "2024",
    timeline: "1 month",
    client: "Logistics & Delivery Platform",
    details: [
      {
        title: "Landing Page",
        category: "Home Section",
        description: "Modern delivery platform landing page showcasing comprehensive shipping solutions, tracking capabilities, and seamless delivery management for businesses and individuals.",
        image: "/projects/deliveryuno/hero-section.png",
        features: ["Delivery solutions", "Service overview", "User onboarding", "Platform introduction"]
      },
      {
        title: "Tracking System",
        category: "Logistics Tools",
        description: "Advanced real-time tracking system allowing customers to monitor their shipments from pickup to delivery with detailed status updates and location information.",
        image: "/projects/deliveryuno/tracking-section.png",
        features: ["Real-time tracking", "Shipment status", "Location updates", "Delivery notifications"]
      },
      {
        title: "Services Overview",
        category: "Service Features",
        description: "Comprehensive delivery services section highlighting various shipping options, delivery types, and logistics solutions tailored to different customer needs.",
        image: "/projects/deliveryuno/services.png",
        features: ["Shipping options", "Delivery types", "Service categories", "Logistics solutions"]
      },
      {
        title: "Customer Testimonials",
        category: "Social Proof",
        description: "Dedicated testimonials section showcasing customer experiences, success stories, and feedback to build trust and credibility in the delivery platform.",
        image: "/projects/deliveryuno/testimonials.png",
        features: ["Customer reviews", "Success stories", "Trust indicators", "User feedback"]
      },
      {
        title: "About Us",
        category: "Company Info",
        description: "Professional about section highlighting the company mission, team expertise, and commitment to providing reliable delivery services and customer satisfaction.",
        image: "/projects/deliveryuno/about-us-section.png",
        features: ["Company mission", "Team showcase", "Service commitment", "Business values"]
      }
    ]
  },
  {
    id: 5,
    title: "WilsonBank",
    tagline: "Modern digital banking platform offering comprehensive financial services - from everyday transactions to premium credit and debit cards",
    description: "A full-featured online banking solution that provides users with seamless transaction management, digital card services, account management, and modern banking tools for personal and business financial needs.",
    image: "/projects/wilsonbank/hero-section.png",
    tech: [
      { name: "Next.js", icon: "/tech-stack/nextjs.svg" },
      { name: "React", icon: "/tech-stack/reactjs.svg" },
      { name: "TypeScript", icon: "/tech-stack/typescript.svg" },
      { name: "Tailwind CSS", icon: "/tech-stack/tailwind.svg" },
      { name: "Node.js", icon: "/tech-stack/nodejs.svg" },
      { name: "MongoDB", icon: "/tech-stack/mongodb.svg" }
    ],
    role: "Full Stack Developer",
    status: "Live",
    links: {
      live: "https://wilsonbank.vercel.app",
      github: "https://github.com/wilsonbank"
    },
    year: "2024",
    timeline: "3 months",
    client: "Digital Banking Platform",
    details: [
      {
        title: "Landing Page",
        category: "Home Section",
        description: "Professional banking platform landing page showcasing modern financial services, digital banking features, and comprehensive account management solutions.",
        image: "/projects/wilsonbank/hero-section.png",
        features: ["Digital banking overview", "Account services", "Modern interface", "Service highlights"]
      },
      {
        title: "User Dashboard",
        category: "Account Management",
        description: "Comprehensive banking dashboard providing users with complete account overview, transaction history, balance management, and financial insights.",
        image: "/projects/wilsonbank/dashboard-page.png",
        features: ["Account overview", "Transaction history", "Balance tracking", "Financial analytics"]
      },
      {
        title: "Banking Features",
        category: "Core Services",
        description: "Complete suite of banking features including money transfers, bill payments, card management, and loan services with modern user interface.",
        image: "/projects/wilsonbank/features-section.png",
        features: ["Money transfers", "Bill payments", "Card management", "Loan services"]
      },
      {
        title: "Banking Services",
        category: "Service Portfolio",
        description: "Comprehensive banking services section highlighting credit cards, debit cards, savings accounts, and premium banking solutions for all customer needs.",
        image: "/projects/wilsonbank/services-section.png",
        features: ["Credit cards", "Debit cards", "Savings accounts", "Premium banking"]
      },
      {
        title: "Account Settings",
        category: "User Management",
        description: "Advanced account settings dashboard allowing users to manage personal information, security preferences, notification settings, and banking preferences.",
        image: "/projects/wilsonbank/settings-page-dashboard.png",
        features: ["Profile management", "Security settings", "Notifications", "Banking preferences"]
      },
      {
        title: "Customer Testimonials",
        category: "Social Proof",
        description: "Dedicated testimonials section showcasing customer satisfaction, success stories, and positive feedback to build trust and credibility in banking services.",
        image: "/projects/wilsonbank/testimonials-section.png",
        features: ["Customer reviews", "Success stories", "Trust indicators", "User satisfaction"]
      }
    ]
  }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectDetailContent = ({ detail }: { detail: any }) => {
  return (
    <div className="bg-muted/30 p-8 md:p-14 rounded-3xl mb-4">
      <div className="max-w-3xl mx-auto">
        <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed font-geist">
          {detail.description}
        </p>

        <div className="mb-6">
          <h4 className="font-semibold text-foreground mb-3 font-geist">Key Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {detail.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground font-geist">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <img
            src={detail.image}
            alt={detail.title}
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

const ProjectSection = ({ project }: { project: typeof projectsData[0] }) => {
  const cards = project.details.map((detail, index) => (
    <Card 
      key={index} 
      card={{
        src: detail.image,
        title: detail.title,
        category: detail.category,
        content: <ProjectDetailContent detail={detail} />,
        url: project.links.live
      }} 
      index={index} 
    />
  ));

  return (
    <section id="projects-section" className="w-full py-20 border-b border-border last:border-b-0">
      <div className="max-w-7xl mx-auto px-4">
        {/* Project Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-geist">
              {project.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-4 font-geist">
              {project.tagline}
            </p>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-medium text-muted-foreground font-geist">
                Role: {project.role}
              </span>
              <span className="text-sm text-muted-foreground/60">•</span>
              <span className="text-sm text-muted-foreground font-geist">
                {project.year} • {project.timeline}
              </span>
            </div>
            <div className="w-full mb-4">
              <div className="flex items-center gap-2 flex-wrap">
                {project.tech.map((tech) => (
                  <div 
                    key={tech.name} 
                    className="flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded-full border"
                  >
                    <img 
                      src={tech.icon}
                      alt={tech.name}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-foreground font-geist">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Button 
            size="lg" 
            className="flex items-center gap-2 shrink-0 rounded-full"
            onClick={() => project.links.live && window.open(project.links.live, '_blank')}
          >
            <ExternalLink className="w-4 h-4" />
            View Project
          </Button>
        </div>

        {/* Project Details Carousel */}
        <Carousel items={cards} />
      </div>
    </section>
  );
};

export default function ProjectsCarousel() {
  return (
    <div className="w-full">
      {projectsData.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
    </div>
  );
}
