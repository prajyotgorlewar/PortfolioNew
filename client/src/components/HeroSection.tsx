import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { FaAndroid, FaUnity, FaChevronDown } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="home"
      ref={ref as React.RefObject<HTMLElement>}
      className={`min-h-screen flex items-center pt-20 pb-16 opacity-0 transform translate-y-5 transition-all duration-1000 ease-out bg-background dark:bg-slate-950 relative overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <svg
                  className="w-full h-full text-muted-foreground"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 14.016c2.672 0 8.016 1.359 8.016 4.031v1.969h-16.031v-1.969c0-2.672 5.344-4.031 8.016-4.031zM12 12c-2.203 0-3.984-1.781-3.984-3.984s1.781-4.031 3.984-4.031 4.031 1.828 4.031 4.031-1.828 3.984-4.031 3.984z" />
                </svg>
              </div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-4 -right-4 bg-card p-3 rounded-full shadow-lg"
              >
                <FaAndroid className="text-3xl text-primary" />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
                className="absolute -top-4 -left-4 bg-card p-3 rounded-full shadow-lg"
              >
                <FaUnity className="text-3xl text-primary" />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, type: "spring" }}
                className="absolute -top-4 -right-4 bg-card p-3 rounded-full shadow-lg"
              >
                <SiFigma className="text-3xl text-primary" />
              </motion.div>
            </div>
          </div>
          
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4 text-foreground"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Hello, I'm{" "}
              </motion.span>
              <motion.span 
                className="text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Prajyot
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-foreground/70 mb-8 max-w-lg font-poppins"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              A passionate software developer specializing in Android development and Unity game creation with a strong eye for UI/UX design.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-hover text-white font-poppins"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted font-poppins"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-24 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaChevronDown className="text-2xl" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
