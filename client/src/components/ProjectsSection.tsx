import { useState } from "react";
import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

type ProjectFilter = "all" | "android" | "unity";

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
      className={`py-20 bg-gray-50 dark:bg-darkcard opacity-0 transform translate-y-5 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            A showcase of my Android applications and Unity game development projects
          </p>
        </div>
        
        {/* Project Filters */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              className={`px-4 py-2 ${
                filter === "all"
                  ? "bg-primary text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </Button>
            <Button
              className={`px-4 py-2 ${
                filter === "android"
                  ? "bg-primary text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
              onClick={() => setFilter("android")}
            >
              Android Apps
            </Button>
            <Button
              className={`px-4 py-2 ${
                filter === "unity"
                  ? "bg-primary text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
              onClick={() => setFilter("unity")}
            >
              Unity Games
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
            className="px-8 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors"
            asChild
          >
            <a href="#">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
