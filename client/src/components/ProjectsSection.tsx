import { useState } from "react";
import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";
import AnimatedBackground from "./BackgroundAnimation";

type ProjectFilter = "all" | "android" | "unity" | "ui";

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const filteredProjects = 
    filter === "all" 
      ? projects 
      : projects.filter(project => project.category === filter);

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-background dark:bg-slate-950 opacity-0 transform translate-y-5 transition-all duration-1000 ease-out relative overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
    >
      <AnimatedBackground type="grid" color="primary" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter text-foreground mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            A showcase of my Android applications, Unity games, and UI/UX designs
          </p>
        </div>
        
        {/* Project Filters */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              className={`px-4 py-2 ${
                filter === "all"
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </Button>
            <Button
              className={`px-4 py-2 ${
                filter === "android"
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              onClick={() => setFilter("android")}
            >
              Android Apps
            </Button>
            <Button
              className={`px-4 py-2 ${
                filter === "unity"
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              onClick={() => setFilter("unity")}
            >
              Unity Games
            </Button>
            <Button
              className={`px-4 py-2 ${
                filter === "ui"
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              onClick={() => setFilter("ui")}
            >
              UI Designs
            </Button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="px-8 py-3 border text-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors"
            asChild
          >
            <a href="#">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
