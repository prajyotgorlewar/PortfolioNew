import useScrollAnimation from "@/hooks/useScrollAnimation";
import SkillBar from "./SkillBar";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  const skills = [
    { skill: "Android Development", percentage: 90 },
    { skill: "Unity Game Development", percentage: 85 },
    { skill: "UI/UX Design", percentage: 88 },
    { skill: "Kotlin/Java", percentage: 92 },
    { skill: "C#", percentage: 80 },
    { skill: "Figma/Adobe XD", percentage: 85 },
  ];

  const techSkills = [
    "Android Studio",
    "Kotlin",
    "Java",
    "Unity 3D",
    "C#",
    "Figma",
    "UI/UX Design",
    "Git",
  ];

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 opacity-0 transform translate-y-5 transition-all duration-1000 ease-out bg-slate-50 dark:bg-slate-900 relative overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">
              Who I Am
            </h3>
            <p className="text-foreground/70 mb-4">
              I'm a 3rd-year university student passionate about creating beautiful, functional applications. I specialize in Android development, Unity game design, and UI/UX principles.
            </p>
            <p className="text-foreground/70 mb-6">
              With a strong foundation in both development and design, I bring a unique perspective to projects that balances technical requirements with exceptional user experiences.
            </p>
            
            <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">
              Education
            </h3>
            <div className="mb-4">
              <div className="font-medium text-foreground">
                Bachelor of Computer Science
              </div>
              <div className="text-primary">University Name, 2021 - Present</div>
              <p className="text-foreground/70 text-sm mt-1">
                Specializing in Mobile Application Development and Game Design
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-8">
              {techSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold font-poppins text-foreground mb-6">
              My Skills
            </h3>
            
            {skills.map((item, index) => (
              <SkillBar
                key={item.skill}
                skill={item.skill}
                percentage={item.percentage}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
