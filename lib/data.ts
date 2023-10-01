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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "HyperEvents Admin",
    description:
      "I worked as a full-stack developer on this project for 2 months. It's an admin dashboard for the HyperEvents platform. It was created in a separate repository to add more control and security.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Prisma"],
    imageUrl: imageHyperAdmin,
  },
  {
    title: "HyperEvents",
    description:
      "I worked as a full-stack developer on this project for 2 months. It's a platform for buying and selling tickets for all types of events. It's not finished yet.",
    tags: ["React", "Next.js", "Toaster", "Tailwind", "Redux"],
    imageUrl: imageHyperEvents,
  },
  {
    title: "PI Foods",
    description:
      "This is my second project, where I was able to implement everything I learned in the SoyHenry bootcamp individually. It's a Single Page Application (SPA) in which recipe data is consumed from an API to display and sort them, and you can also create recipes.",
    tags: ["React", "Node.js", "Redux", "CSS"],
    imageUrl: imagePI,
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
