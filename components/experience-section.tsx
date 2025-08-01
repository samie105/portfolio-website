import TimelineDemo from "./timeline-demo"
import AnimatedGridBackground from "./animated-grid-background"
import { Briefcase } from "lucide-react"
import { PointerHighlight } from "@/components/ui/pointer-highlight"

export default function ExperienceSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 -z-10">
        <AnimatedGridBackground />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-muted/50 px-4 py-2 text-sm text-muted-foreground mb-6">
            <Briefcase className="w-4 h-4" />
            Professional Journey
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            My Professional <PointerHighlight><span className="text-primary">Journey</span></PointerHighlight>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A timeline of my career milestones, projects, and growth as a Full-Stack Developer.
          </p>
        </div>
        <div className="mt-16/">
          <TimelineDemo />
        </div>
      </div>
    </section>
  )
}
