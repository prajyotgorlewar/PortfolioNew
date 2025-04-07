import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export interface ProjectLink {
  icon: typeof FaExternalLinkAlt;
  label: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "android" | "unity" | "ui";
  categoryLabel: string;
  tags: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "FitTrack Pro",
    description: "A comprehensive fitness tracking application with workout plans, nutrition tracking, and progress analysis.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: "android",
    categoryLabel: "Android App",
    tags: ["Kotlin", "MVVM", "Room DB"],
    links: [
      {
        icon: FaExternalLinkAlt,
        label: "Live Demo",
        url: "#"
      },
      {
        icon: FaGithub,
        label: "Source Code",
        url: "#"
      }
    ]
  },
  {
    id: 2,
    title: "E-commerce App Redesign",
    description: "A complete redesign of an e-commerce mobile application focusing on improving user experience, conversion rates, and visual appeal.",
    image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "ui",
    categoryLabel: "UI Design",
    tags: ["UI Design", "UX Research", "Figma"],
    links: [
      {
        icon: FaExternalLinkAlt,
        label: "Case Study",
        url: "#"
      }
    ]
  },
  {
    id: 3,
    title: "Adventure Quest",
    description: "An immersive 3D adventure game with challenging puzzles, dynamic environments, and engaging storyline.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "unity",
    categoryLabel: "Unity Game",
    tags: ["Unity 3D", "C#", "3D Modeling"],
    links: [
      {
        icon: FaExternalLinkAlt,
        label: "Play Game",
        url: "#"
      },
      {
        icon: FaGithub,
        label: "Source Code",
        url: "#"
      }
    ]
  },
  {
    id: 4,
    title: "Game UI/UX Design",
    description: "Comprehensive UI/UX design for a mobile game, including menus, HUD elements, and interactive components that enhance gameplay.",
    image: "https://images.unsplash.com/photo-1616499370260-485b3e5ed3fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    category: "ui",
    categoryLabel: "UI Design",
    tags: ["Game UI", "User Testing", "Adobe XD"],
    links: [
      {
        icon: FaExternalLinkAlt,
        label: "Case Study",
        url: "#"
      }
    ]
  },
  {
    id: 5,
    title: "HomeHub Connect",
    description: "A smart home control application that integrates with IoT devices to provide seamless home automation.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: "android",
    categoryLabel: "Android App",
    tags: ["Java", "Retrofit", "IoT APIs"],
    links: [
      {
        icon: FaExternalLinkAlt,
        label: "Live Demo",
        url: "#"
      },
      {
        icon: FaGithub,
        label: "Source Code",
        url: "#"
      }
    ]
  },
  {
    id: 6,
    title: "Space Voyager",
    description: "A space exploration game with stunning visuals, physics-based gameplay, and procedurally generated worlds.",
    image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: "unity",
    categoryLabel: "Unity Game",
    tags: ["Unity 3D", "C#", "Shader Graph"],
    links: [
      {
        icon: FaExternalLinkAlt,
        label: "Play Game",
        url: "#"
      },
      {
        icon: FaGithub,
        label: "Source Code",
        url: "#"
      }
    ]
  },
  {
    id: 7,
    title: "PropFinder",
    description: "A real estate application with property listings, virtual tours, and mortgage calculator.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "android",
    categoryLabel: "Android App",
    tags: ["Kotlin", "Firebase", "Maps API"],
    links: [
      {
        icon: FaExternalLinkAlt,
        label: "Live Demo",
        url: "#"
      },
      {
        icon: FaGithub,
        label: "Source Code",
        url: "#"
      }
    ]
  },
  {
    id: 8,
    title: "Mind Maze",
    description: "A challenging puzzle game with unique mechanics, beautiful art style, and brain-teasing levels.",
    image: "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: "unity",
    categoryLabel: "Unity Game",
    tags: ["Unity 2D", "C#", "Particle FX"],
    links: [
      {
        icon: FaExternalLinkAlt,
        label: "Play Game",
        url: "#"
      },
      {
        icon: FaGithub,
        label: "Source Code",
        url: "#"
      }
    ]
  }
];
