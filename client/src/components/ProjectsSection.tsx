import { useState } from "react";
import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

type ProjectFilter = "all" | "android" | "mern" | "ui";

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const [showAllProjects, setShowAllProjects] = useState(false);

  // 👉 NEW: embed modal state
  const [activeEmbed, setActiveEmbed] = useState<string | null>(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const displayedProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <>
      <section
        id="projects"
        ref={ref as React.RefObject<HTMLElement>}
        className={`py-20 bg-background dark:bg-slate-950 opacity-0 transform translate-y-5 transition-all duration-1000 ease-out relative overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : ""
          }`}
      >
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
            <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
              A showcase of large-scale Android, MERN, and UI projects developed as part of collaborative teams.
            </p>
          </div>

          {/* Filters */}
          <div className="flex justify-center mb-10">
            <div className="flex flex-wrap gap-2 justify-center">
              {["all", "android", "mern", "ui"].map((type) => (
                <Button
                  key={type}
                  className={`px-4 py-2 ${filter === type
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground"
                    }`}
                  onClick={() => {
                    setFilter(type as ProjectFilter);
                    setShowAllProjects(false);
                  }}
                >
                  {type.toUpperCase()}
                </Button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenEmbed={setActiveEmbed} // 👈 pass handler
              />
            ))}
          </div>

          {/* View All */}
          {filteredProjects.length > 3 && (
            <div className="text-center mt-12">
              <Button
                variant="outline"
                onClick={() => setShowAllProjects(!showAllProjects)}
              >
                {showAllProjects
                  ? "Show Less"
                  : `View All Projects (${filteredProjects.length})`}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* 👉 EMBED MODAL */}
      {activeEmbed && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-background rounded-xl p-4 max-w-3xl w-full relative">
            <button
              onClick={() => setActiveEmbed(null)}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>
            <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden">
              <iframe
                src={activeEmbed}
                className="w-full h-[70vh] min-h-[320px] max-h-[520px]"
                allowFullScreen
                title="Demo Video"
              />
            </div>

          </div>
        </div>
      )}
    </>
  );
}
