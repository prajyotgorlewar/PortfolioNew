import { motion } from "framer-motion";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="project-card bg-white dark:bg-darkbg rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-4 right-4 ${project.category === 'android' ? 'bg-primary' : 'bg-accent'} text-white text-xs font-bold px-2 py-1 rounded`}>
          {project.categoryLabel}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`${
                index === 0
                  ? "text-primary hover:text-primary-hover"
                  : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              } transition-colors text-sm font-medium flex items-center`}
            >
              <link.icon className="mr-1" /> {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
