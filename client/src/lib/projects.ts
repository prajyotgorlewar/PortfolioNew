import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";
import moodstoryImg from "@/assets/moodstory.png";
import battleideImg from "@/assets/battleide.png";
import somaImg from "@/assets/soma.png";
import campusnavImg from "@/assets/campusnav.jpg";

export interface ProjectLink {
  icon: IconType;
  label: string;
  url?: string;
  embedUrl?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "android" | "fullstack" | "ui";
  categoryLabel: string;
  tags: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Moodstory",
    description:
      "A full-stack web app that combines facial-expression and voice analysis with multimodal AI to generate personalized, emotion-aware stories in real time. Built with a Python FastAPI backend and a React frontend for an end-to-end product experience.",
    image: moodstoryImg,
    category: "fullstack",
    categoryLabel: "Full Stack",
    tags: ["Python", "FastAPI", "React", "MongoDB", "CNN", "LSTM", "LLM"],
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
    description:
      "A real-time 1v1 competitive coding platform built to own the full product loop, from Elo-based matchmaking and live code battles to secure automated evaluation with Judge0 and WebSockets.",
    image: battleideImg,
    category: "fullstack",
    categoryLabel: "Full Stack",
    tags: ["React", "Node.js", "MongoDB", "WebSockets", "Judge0", "Monaco Editor"],
    links: [
      {
        icon: FaExternalLinkAlt,
        label: "Live App",
        url: "https://battle-ide.vercel.app/",
      },
    ],
  },
  {
    id: 3,
    title: "SOMA",
    description:
      "A high-fidelity meditation app UI prototype in Figma designed with guided audio sessions, a clean onboarding flow, and simple progress tracking.",
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
    description:
      "An Android application built in Unity that enables indoor campus navigation without GPS, featuring a 3D avatar-based interface and real-time teacher tracking inside a virtual campus environment.",
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
    ],
  },
];
