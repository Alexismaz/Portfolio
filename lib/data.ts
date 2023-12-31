import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import imageHyperAdmin from "../public/874e7a9a-b4ef-4830-a9c7-eb19394d2578.jpg"
import imageHyperEvents from "../public/641ee185-9e5b-4333-a7ab-3ffb685fc63a.jpg"
import imagePI from "../public/641ee185-9e5b-4333-a7ab-3ffb685fc63a.jpg"

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
    title: "HyperEvents",
    location: "Buenos Aires, Arg",
    description:
      "I work as a full-stack developer on this project. It's the final project of the bootcamp. I'm currently updating this project frequently.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2023 - Present",
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
    title: "HyperEvents Admin",
    description:
      "I worked as a full-stack developer on this project for 2 months. It's an admin dashboard for the HyperEvents platform. It was created in a separate repository to add more control and security.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Prisma"],
    imageUrl: imageHyperAdmin,
    link: "https://hyper-admin-sigma.vercel.app/"
  },
  {
    title: "HyperEvents",
    description:
      "I worked as a full-stack developer on this project for 2 months. It's a platform for buying and selling tickets for all types of events. It's not finished yet.",
    tags: ["React", "Next.js", "Toaster", "Tailwind", "Redux"],
    imageUrl: imageHyperEvents,
    link: "https://hyperevent-fe.vercel.app/"
  },
  {
    title: "PI Foods",
    description:
      "This is my second project, where I was able to implement everything I learned in the SoyHenry bootcamp individually. It's a Single Page Application (SPA) in which recipe data is consumed from an API to display and sort them, and you can also create recipes.",
    tags: ["React", "Node.js", "Redux", "CSS"],
    imageUrl: imagePI,
    link: "https://pi-food-main-woad.vercel.app"
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
  "PostgreSQL",
] as const;
