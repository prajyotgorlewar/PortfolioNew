import useScrollAnimation from "@/hooks/useScrollAnimation";
import SkillBar from "./SkillBar";
import SkillBubble from "./SkillBubble";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  const skills = [
    { skill: "Full-Stack Product Delivery", percentage: 92 },
    { skill: "Java", percentage: 90 },
    { skill: "React", percentage: 88 },
    { skill: "Python", percentage: 86 },
    { skill: "AI-Assisted Development", percentage: 84 },
    { skill: "UI / UX Design", percentage: 80 },
  ];

  const techSkills = [
    "Java",
    "Python",
    "React",
    "MongoDB",
    "Figma",
    "Git",
    "AI Tools",
  ];

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 opacity-0 transform translate-y-5 transition-all duration-1000 ease-out 
        bg-slate-50 dark:bg-slate-900 relative overflow-hidden 
        ${isVisible ? "opacity-100 translate-y-0" : ""}`}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">
              Who I Am
            </h3>

            <p className="text-foreground/70 mb-4">
              I'm a recent 2026 graduate in Computer Science and Engineering
              (Data Science) who likes turning scoped ideas into shipped products.
              I build with Java, Python, and React, and I use AI tools
              throughout my workflow to prototype faster, debug smarter, and ship
              cleaner features.
            </p>

            <p className="text-foreground/70 mb-6">
              My sweet spot is product work where I can own the full loop:
              understand the problem, design the flow, implement the UI and
              backend, and polish the final release so it is easy to use and easy
              to maintain.
            </p>

            <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">
              Education
            </h3>

            <div className="mb-6">
              <div className="font-medium text-foreground">
                Bachelor of Computer Science and Engineering (Data Science)
              </div>
              <div className="text-primary">
                Ramdeobaba University, 2022 - 2026
              </div>
            </div>

            <div className="space-y-4">
              {skills.map((item, index) => (
                <SkillBar
                  key={item.skill}
                  skill={item.skill}
                  percentage={item.percentage}
                  delay={index * 100}
                />
              ))}
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

          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative w-[460px] h-[460px]">
              <SkillBubble
                skill="Full-Stack"
                percentage={92}
                size={180}
                position="top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2"
              />

              <SkillBubble
                skill="Java"
                percentage={90}
                size={120}
                position="top-[40px] left-1/2 -translate-x-1/2"
              />

              <SkillBubble
                skill="Python"
                percentage={86}
                size={100}
                position="top-1/3 left-[50px] -translate-y-1/2"
              />

              <SkillBubble
                skill="React"
                percentage={88}
                size={110}
                position="top-1/3 right-[0px] -translate-y-1/2"
              />

              <SkillBubble
                skill="AI Tools"
                percentage={84}
                size={100}
                position="bottom-[40px] left-[120px]"
              />

              <SkillBubble
                skill="Figma"
                percentage={80}
                size={90}
                position="bottom-[50px] right-[120px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
