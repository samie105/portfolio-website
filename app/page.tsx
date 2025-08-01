import Hero3DMarqueeDemo from "@/components/hero-3d-marquee-demo";
import ToolsAndTechnologies from "@/components/tools-and-technologies";
import ExperienceSection from "@/components/experience-section";
import ApproachSection from "@/components/approach-section";
import ContactFooter from "@/components/contact-footer";

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
