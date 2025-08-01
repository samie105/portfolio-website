import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Smartphone, 
  Zap, 
  Database, 
  Archive, 
  Shield, 
  Users, 
  Palette, 
  Building, 
  Atom, 
  RotateCcw, 
  GraduationCap, 
  Wrench, 
  Globe, 
  Lightbulb 
} from "lucide-react";

export default function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <div className="mb-8">
            <div className="mb-6">
              <h3 className="text-foreground text-lg font-bold mb-3">
                Modern Full-Stack Developer
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Embracing cutting-edge technologies and modern development practices while building scalable applications.
              </p>
            </div>
            
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/expo.svg" alt="Expo" className="w-3 h-3" />
                  Expo
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/aws.svg" alt="AWS" className="w-3 h-3" />
                  AWS
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/typescript.svg" alt="TypeScript" className="w-3 h-3" />
                  TypeScript
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/supabase.svg" alt="Supabase" className="w-3 h-3" />
                  Supabase
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/prisma.svg" alt="Prisma" className="w-3 h-3" />
                  Prisma
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="border border-border/60 rounded-xl p-6 bg-card/70 hover:bg-card/50 transition-colors duration-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Current Focus</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Rocket className="w-5 h-5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Focused on modern development with cutting-edge tools</span>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Smartphone className="w-5 h-5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Started mobile app development with React Native & Expo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <div className="mb-8">
            <div className="mb-6">
              <h3 className="text-foreground text-lg font-bold mb-3">
                Backend & Database Architect
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Deep dive into backend technologies, mastering databases, APIs, and full-stack architecture.
              </p>
            </div>
            
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/supabase.svg" alt="Supabase" className="w-3 h-3" />
                  Supabase
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/mongodb.svg" alt="MongoDB" className="w-3 h-3" />
                  MongoDB
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/prisma.svg" alt="Prisma" className="w-3 h-3" />
                  Prisma
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/nextjs.svg" alt="Next.js" className="w-3 h-3" />
                  Next.js
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/typescript.svg" alt="TypeScript" className="w-3 h-3" />
                  TypeScript
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="border border-border/60 rounded-xl p-6 bg-card/70 hover:bg-card/50 transition-colors duration-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Achievements</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Database className="w-5 h-5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Integrated into backend development with Supabase</span>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Archive className="w-5 h-5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Mastered MongoDB with Prisma ORM</span>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Zap className="w-5 h-5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Built full-stack applications with real-time features</span>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Shield className="w-5 h-5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Implemented authentication and authorization systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="mb-8">
            <div className="mb-6">
              <h3 className="text-foreground text-lg font-bold mb-3">
                Advanced Frontend Developer
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Honing skills and exploring design collaboration, advancing to modern frameworks and team development.
              </p>
            </div>
            
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/nextjs.svg" alt="Next.js" className="w-3 h-3" />
                  Next.js
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/reactjs.svg" alt="React" className="w-3 h-3" />
                  React
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/javascript.svg" alt="JavaScript" className="w-3 h-3" />
                  JavaScript
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/figma.svg" alt="Figma" className="w-3 h-3" />
                  Figma
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/html.svg" alt="HTML5" className="w-3 h-3" />
                  HTML5
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/css.svg" alt="CSS3" className="w-3 h-3" />
                  CSS3
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="border border-border/60 rounded-xl p-6 bg-card/70 hover:bg-card/50 transition-colors duration-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Growth Milestones</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Zap className="w-5 h-5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Honed skills and advanced to Next.js framework</span>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Users className="w-5 h-5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Collaborated with fellow developers on team projects</span>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Palette className="w-5 h-5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Learned Figma for design-development collaboration</span>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Building className="w-5 h-5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Built more complex applications with better architecture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <div className="mb-8">
            <div className="mb-6">
              <h3 className="text-foreground text-lg font-bold mb-3">
                React & Database Explorer
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Overcoming setbacks and advancing to modern frameworks, venturing into dynamic applications and state management.
              </p>
            </div>
            
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/reactjs.svg" alt="React" className="w-3 h-3" />
                  React
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/mongodb.svg" alt="MongoDB" className="w-3 h-3" />
                  MongoDB
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/javascript.svg" alt="JavaScript" className="w-3 h-3" />
                  JavaScript
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/html.svg" alt="HTML5" className="w-3 h-3" />
                  HTML5
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/css.svg" alt="CSS3" className="w-3 h-3" />
                  CSS3
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="border border-border/60 rounded-xl p-6 bg-card/70 hover:bg-card/50 transition-colors duration-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Breakthrough Moment</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <RotateCcw className="w-5 h-5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">After a major setback, took skills to the next level</span>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Atom className="w-5 h-5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Mastered React.js and modern component architecture</span>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Database className="w-5 h-5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Ventured into the database world with MongoDB</span>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <RotateCcw className="w-5 h-5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Built first dynamic applications with state management</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <div className="mb-8">
            <div className="mb-6">
              <h3 className="text-foreground text-lg font-bold mb-3">
                The Beginning - Frontend Foundation
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Learning the fundamentals at Socasemp Initiative, discovering the passion for web development.
              </p>
            </div>
            
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/html.svg" alt="HTML5" className="w-3 h-3" />
                  HTML5
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/css.svg" alt="CSS3" className="w-3 h-3" />
                  CSS3
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1.5 px-3 py-1">
                  <img src="/tech-stack/javascript.svg" alt="JavaScript" className="w-3 h-3" />
                  JavaScript
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="border border-border/60 rounded-xl p-6 bg-card/70 hover:bg-card/50 transition-colors duration-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Foundation Journey</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <GraduationCap className="w-5 h-5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Learned frontend development at Socasemp Initiative</span>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Wrench className="w-5 h-5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Mastered HTML, CSS, and JavaScript fundamentals</span>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Globe className="w-5 h-5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Built first static websites and interactive elements</span>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Lightbulb className="w-5 h-5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Discovered passion for web development</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}