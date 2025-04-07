export interface UiUxProject {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  caseStudyUrl: string;
}

export interface DesignProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const uiuxProjects: UiUxProject[] = [
  {
    id: 1,
    title: "E-commerce App Redesign",
    description: "A complete redesign of an e-commerce mobile application focusing on improving user experience, conversion rates, and visual appeal.",
    image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["UI Design", "UX Research", "Figma"],
    caseStudyUrl: "#"
  },
  {
    id: 2,
    title: "Game UI/UX Design",
    description: "Comprehensive UI/UX design for a mobile game, including menus, HUD elements, and interactive components that enhance gameplay.",
    image: "https://images.unsplash.com/photo-1616499370260-485b3e5ed3fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    tags: ["Game UI", "User Testing", "Adobe XD"],
    caseStudyUrl: "#"
  }
];

export const designProcessSteps: DesignProcessStep[] = [
  {
    id: 1,
    title: "Research",
    description: "Understanding user needs, market analysis, and competitive research",
    icon: "search"
  },
  {
    id: 2,
    title: "Wireframing",
    description: "Creating low-fidelity sketches and wireframes to establish information architecture",
    icon: "pencil-alt"
  },
  {
    id: 3,
    title: "Visual Design",
    description: "Developing high-fidelity mockups, color schemes, and visual elements",
    icon: "paint-brush"
  },
  {
    id: 4,
    title: "Testing & Iteration",
    description: "User testing, gathering feedback, and refining designs based on insights",
    icon: "flask"
  }
];
