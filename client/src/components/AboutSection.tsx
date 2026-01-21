import useScrollAnimation from "@/hooks/useScrollAnimation";
import SkillBar from "./SkillBar";
import SkillBubble from "./SkillBubble";


export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  const skills = [
    { skill: "UI Design & Development", percentage: 90 },
    { skill: "MERN", percentage: 88 },
    { skill: "Figma", percentage: 85 },
    { skill: "Android Development", percentage: 80 },
    { skill: "Unity Game Development", percentage: 82 },
    { skill: "Java", percentage: 80 },
  ];

  const techSkills = [
    "Figma",
    "Wireframing",
    "Prototyping",
    "Java",
    "C#",
    "MERN",
    "UI Design",
    "Git",
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
          {/* LEFT */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">
              Who I Am
            </h3>

            <p className="text-foreground/70 mb-4">
              I’m a 4th-year university student passionate about creating beautiful,
              functional applications. I specialize in UI design and development,
              with hands-on experience in Android development and Unity game design.
            </p>

            <p className="text-foreground/70 mb-6">
              With a strong foundation in both development and design, I bring a
              unique perspective to projects that balances technical requirements
              with visually refined and intuitive interfaces.
            </p>

            <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">
              Education
            </h3>

            <div className="mb-4">
              <div className="font-medium text-foreground">
                Bachelor of Computer Science and Engineering (Data Science)
              </div>
              <div className="text-primary">
                Ramdeobaba University, 2022 – Present
              </div>
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

          {/* RIGHT */}

          {/* RIGHT */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative w-[460px] h-[460px]">

              {/* CENTER */}
              <SkillBubble
                skill="UI Design & Dev"
                percentage={90}
                size={180}
                position="top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2"
              />

              {/* TOP */}
              <SkillBubble
                skill="MERN"
                percentage={88}
                size={110}
                position="top-[40px] left-1/2 -translate-x-1/2"
              />

              {/* LEFT */}
              <SkillBubble
                skill="Unity"
                percentage={82}
                size={100}
                position="top-1/3 left-[50px] -translate-y-1/2"
              />

              {/* RIGHT */}
              <SkillBubble
                skill="Figma"
                percentage={85}
                size={125}
                position="top-1/3 right-[0px] -translate-y-1/2"
              />

              {/* BOTTOM LEFT */}
              <SkillBubble
                skill="Android"
                percentage={80}
                size={100}
                position="bottom-[40px] left-[120px]"
              />

              {/* BOTTOM RIGHT */}
              <SkillBubble
                skill="Java"
                percentage={78}
                size={80}
                position="bottom-[50px] right-[120px]"
              />
            </div>
          </div>




        </div>
      </div>
    </section>
  );
}
