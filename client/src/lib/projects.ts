import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";
import moodstoryImg from "@/assets/moodstory.png";
import battleideImg from "@/assets/battleide.png";
import somaImg from "@/assets/soma.png";
import campusnavImg from "./client/src/assets/campusNav.jpg";

export interface ProjectLink {
  icon: IconType;
  label: string;
  url?: string;        // normal links (GitHub, website)
  embedUrl?: string;   // embedded demos (LinkedIn, YouTube)
}


export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "android" | "mern" | "ui";
  categoryLabel: string;
  tags: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Moodstory",
    description:
      "A complete web application that detects user emotions from facial expressions and voice inputs and generates personalized, emotion-aware narratives in real time using multimodal AI and LLMs.",
    image: moodstoryImg,
    category: "mern",
    categoryLabel: "MERN",
    tags: ["Python", "CNN", "LSTM", "LLM", "FastAPI", "React", "MongoDB", "Node.js", "Express"
      
    ],
    links: [
      {
        icon: FaExternalLinkAlt,
        label: "Demo",
        embedUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7401678911866331136?compact=1",
      },
      {
        icon: FaGithub,
        label: "Source Code",
        url: "https://github.com/prajyotgorlewar/moodstory",
      },
    ],
  },



  {
    id: 2,
    title: "BattleIDE",
    description: "A real-time 1v1 competitive coding web platform featuring Elo-based matchmaking, live code battles with Monaco Editor, and secure automated evaluation via Judge0 and WebSockets.",
    image: battleideImg,
    category: "mern",
    categoryLabel: "MERN",
    tags: ["React", "Node.js", "MongoDB", "WebSockets", "Judge0", "Monaco Editor"],
    links: [
      {
        icon: FaExternalLinkAlt,
        label: "Live App",
        url: "https://battle-ide.vercel.app/",
      },
    ]

  },
  {
    id: 3,
    title: "SOMA",
    description: "A high-fidelity meditation app UI prototype in Figma featuring guided audio session screens and a clean, intuitive progress-tracking interface.",
    image: somaImg,
    category: "ui",
    categoryLabel: "UI Design",
    tags: ["Figma", "Prototyping", "Wireframing", "User Flows", "Competitor Analysis"],
    links: [
      {
        icon: FaExternalLinkAlt,
        label: "Demo",
        embedUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7226208223391809537?compact=1",
      },
    ],
  },
  {
    id: 4,
    title: "CampusNav",
    description: "An Android application built in Unity that enables indoor campus navigation without GPS, featuring a 3D avatar–based interface and real-time teacher tracking within a virtual campus environment.",
    image: campusnavImg,
    category: "android",
    categoryLabel: "Android App",
    tags: ["Unity", "C#", "3D Modeling", "Networking", "Firebase", "n8n", "REST APIs", "Figma"],
    links: [
      {
        icon: FaExternalLinkAlt,
        label: "Live App",
        url: "https://play.google.com/store/apps/details?id=com.NavPoint1.CampusNav&hl=en",
      },
      {
        icon: FaExternalLinkAlt,
        label: "Demo",
        embedUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7337895467621449730?compact=1",
      },
    ]

  },

];
