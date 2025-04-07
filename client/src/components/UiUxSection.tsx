import useScrollAnimation from "@/hooks/useScrollAnimation";
import { uiuxProjects, designProcessSteps } from "@/lib/uiuxProjects";
import { FaArrowRight, FaSearch, FaPencilAlt, FaPaintBrush, FaFlask } from "react-icons/fa";

export default function UiUxSection() {
  const { ref, isVisible } = useScrollAnimation();

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "search":
        return <FaSearch className="text-primary text-2xl" />;
      case "pencil-alt":
        return <FaPencilAlt className="text-primary text-2xl" />;
      case "paint-brush":
        return <FaPaintBrush className="text-primary text-2xl" />;
      case "flask":
        return <FaFlask className="text-primary text-2xl" />;
      default:
        return <FaSearch className="text-primary text-2xl" />;
    }
  };

  return (
    <section
      id="uiux"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 opacity-0 transform translate-y-5 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter text-gray-900 dark:text-white mb-4">
            UI/UX Showcase
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            A collection of my UI/UX design work showcasing my approach to creating intuitive and aesthetically pleasing interfaces
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {uiuxProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-darkcard rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary bg-opacity-10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.caseStudyUrl}
                  className="text-primary hover:text-primary-hover transition-colors font-medium flex items-center"
                >
                  View Case Study <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Design Process */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold font-inter text-gray-900 dark:text-white mb-8 text-center">
            My Design Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {designProcessSteps.map((step) => (
              <div key={step.id} className="bg-white dark:bg-darkcard p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {getIconComponent(step.icon)}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
