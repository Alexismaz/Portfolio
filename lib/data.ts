import React from "react";
import { FaReact } from "react-icons/fa";
import { MdWork } from 'react-icons/md';
import { LuGraduationCap } from "react-icons/lu";
import imageLumApp from "../public/lumAppImage.jpeg"
import imageLumWeb from "../public/lumWebImage.jpeg"
import imagePadelinkWeb from "../public/padelinkWebImage.jpeg"
import imageWorkitfyWeb from "../public/workitfyWebImage.jpeg"
import imageMaylandWeb from "../public/maylandlabsWebImage.jpeg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "LumForSchool",
    location: "Guatemala, Gua",
    description:
      "Working as a Full Stack Developer, I am the sole developer on the team responsible for building a web platform and a mobile app for both Android and iOS. I developed both from scratch, and the project is still in progress.",
    icon: React.createElement(MdWork),
    date: "Sep 2024 - Present",
  },
  {
    title: "Maylandlabs",
    location: "Buenos Aires, Arg",
    description:
      "Worked for 11 months as a Full Stack Developer on various projects. This was my first professional experience. My role included developing and updating websites and mobile applications, as well as training new team members.",
    icon: React.createElement(MdWork),
    date: "Feb 2024 - Dic 2024",
  },
  {
    title: "HyperEvents",
    location: "Buenos Aires, Arg",
    description:
      "I work as a full-stack developer on this project. It's the final project of the bootcamp.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2023 - Feb 2024",
  },
  {
    title: "Graduated SoyHenry bootcamp",
    location: "Buenos Aires, Arg",
    description:
      "I graduated after 4 months of studying. I graduated as a full-stack web developer.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2023 - Sep 2023",
  },
  {
    title: "Manager at the CASI club restaurant",
    location: "San Isidro, Buenos Aires",
    description:
      "I worked as a restaurant manager. I had approximately 20 employees under my supervision.",
    icon: React.createElement(FaReact),
    date: "Nov 2018, Nov 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Lum's App",
    description:
      "A mobile app for students (iOS and Android) that uses AI to help them solve subject-related doubts, track class schedules, and manage homework submissions.",
    tags: ["React Native", "Tailwind", "Open AI", "Web Socket"],
    imageUrl: imageLumApp,
    link: "https://play.google.com/store/apps/details?id=com.deploydevapp.lumforschool&hl=es_AR/"
  },
  {
    title: "Lum for school Web",
    description:
      "An AI-powered platform that assists educational institutions by helping teachers assign tasks and students clarify doubts to enhance learning.",
    tags: ["React", "Tailwind", "Open AI", "Web Socket"],
    imageUrl: imageLumWeb,
    link: "https://lumforschool.com/"
  },
  {
    title: "Padelink Web",
    description:
      "The platform was created to improve how padel enthusiasts connect and manage court reservations, making it easier to organize matches",
    tags: ["React", "Typescript", "Tailwind", "Redux", "Docker"],
    imageUrl: imagePadelinkWeb,
    link: "https://www.padelink.com.ar/"
  },
  {
    title: "Workitfy Web",
    description:
      "A web platform for remote work that helps professionals find shared workspaces, connect with others, and boost productivity and project quality.",
    tags: ["React", "Typescript", "Tailwind", "Redux", "Docker"],
    imageUrl: imageWorkitfyWeb,
    link: "https://workitfy.maylandlabs.com/"
  },
  {
    title: "Mayland labs Web",
    description:
      "Collaborated with a teammate to develop a landing page over the course of one month, aimed at demonstrating the company's technical proficiency and attracting potential clients.",
    tags: ["React", "Tailwind CSS", "Redux"],
    imageUrl: imageMaylandWeb,
    link: "https://maylandlabs.com/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "Express",
  "TypeORM",
  "PostgreSQL",
  "Web Socket",
  "Firebase",
  "Open AI",
  "JWT",
  "Expo",
] as const;
