import useScrollAnimation from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: "work" | "internship" | "project";
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Developer Intern",
    company: "HHT Technologies",
    location: "Remote",
    duration: "May 2025 - Present",
    type: "internship",
    description: [
      "Design and engineer robust, reusable frontend modules to improve UI performance, responsiveness, and visual consistency.",
      "Collaborate within Agile teams on high-impact products, translating design requirements into polished, end-to-end user interfaces.",
      "Integrate AI-powered workflows into frontend experiences, transforming prototypes into production-ready, user-facing features.",
      "Refactor legacy UI components into modular, scalable structures, reducing code duplication by 70% and improving maintainability."
    ],
    technologies: ["React", "Figma", "Python", "MongoDB", "Git" ]
  },
  {
    id: 2,
    title: "UI/UX Design Intern",
    company: "ADM Education and welfare Society",
    location: "Remote",
    duration: "June 2025 - July 2024",
    type: "internship",
    description: [
      "Designed user interfaces for mobile applications and websites",
      "Conducted user research and created user personas",
      "Created wireframes, prototypes, and high-fidelity designs",
      "Collaborated with developers to ensure design implementation"
    ],
    technologies: ["Figma", "User Research", "Prototyping", "Wireframing", "User Flows" ]
  }
];

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "internship":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "project":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "work":
        return "Work";
      case "internship":
        return "Internship";
      case "project":
        return "Project";
      default:
        return "Experience";
    }
  };

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 opacity-0 transform translate-y-5 transition-all duration-1000 ease-out bg-muted/30 dark:bg-slate-900 ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            My journey in software development, game creation, and design
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-32 bg-primary/30 hidden md:block"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full hidden md:block border-4 border-background"></div>
              
              <div className="bg-card rounded-lg shadow-lg p-6 md:ml-16 border border-border hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold font-poppins text-foreground">
                        {experience.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(experience.type)}`}>
                        {getTypeLabel(experience.type)}
                      </span>
                    </div>
                    <p className="text-lg font-medium text-primary mb-1">
                      {experience.company}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-foreground/60">
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="text-xs" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-xs" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <ul className="space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="text-foreground/80 flex items-start">
                        <span className="text-primary mr-2 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}