import Hero3DMarqueeDemo from "@/components/hero-3d-marquee-demo";
import ToolsAndTechnologies from "@/components/tools-and-technologies";
import ExperienceSection from "@/components/experience-section";
import ApproachSection from "@/components/approach-section";
import ContactFooter from "@/components/contact-footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Full Stack Developer & Designer",
  description: "Welcome to Thy Richfield's portfolio. Expert full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies. Creating innovative digital solutions and exceptional user experiences.",
  keywords: [
    "Thy Richfield portfolio",
    "Full stack developer portfolio",
    "React projects",
    "Next.js developer",
    "Web development services",
    "Custom web applications",
    "Frontend development",
    "Backend development",
    "UI/UX design",
    "TypeScript expert"
  ],
  openGraph: {
    title: "Thy Richfield - Full Stack Developer & Designer Portfolio",
    description: "Expert full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies. View my latest projects and get in touch for custom development solutions.",
    url: "https://thyrichfield.me",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Thy Richfield Portfolio Homepage",
      },
    ],
  },
  twitter: {
    title: "Thy Richfield - Full Stack Developer & Designer Portfolio",
    description: "Expert full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    images: ["/og-home.jpg"],
  },
  alternates: {
    canonical: "https://thyrichfield.me",
  },
};

export default function Home() {
  return (
    <main>
      <Hero3DMarqueeDemo />
      <ToolsAndTechnologies />
      <ExperienceSection />
      <ApproachSection />
      <ContactFooter />
    </main>
  );
}
