import ContactFooter from "@/components/contact-footer";
import ProjectsCarousel from "@/components/projects-carousel";
import ProjectsHero from "@/components/projects-hero";

export const metadata = {
  title: "Projects - Ultimate Development Studio",
  description: "Explore my portfolio of innovative digital solutions, from AI-powered applications to stunning web experiences.",
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
