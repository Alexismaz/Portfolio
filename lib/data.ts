import React from "react";
import { FaReact } from "react-icons/fa";
import { MdWork } from 'react-icons/md';
import { LuGraduationCap } from "react-icons/lu";
import imageLumApp from "../public/lumAppImage.jpeg"
import imageLumWeb from "../public/lumWebImage.jpeg"
import imagePadelinkWeb from "../public/padelinkWebImage.jpeg"
import imageWorkitfyWeb from "../public/workitfyWebImage.jpeg"
import imageMaylandWeb from "../public/maylandlabsWebImage.jpeg"
import { ProjectProps } from "@/components/project";
import { experienceProps } from "@/components/experience";
import { linksProps } from "@/components/header";

export const links = (t: (prop: string) => string): linksProps[] => [
  {
    name: t("navbar.home"),
    hash: "#home",
  },
  {
    name: t("navbar.about"),
    hash: "#about",
  },
  {
    name: t("navbar.projects"),
    hash: "#projects",
  },
  {
    name: t("navbar.skills"),
    hash: "#skills",
  },
  {
    name: t("navbar.experience"),
    hash: "#experience",
  },
  {
    name: t("navbar.contact"),
    hash: "#contact",
  },
];

export const experiencesData = (t: (prop: string) => string): experienceProps[] => [
  {
    title: "LumForSchool",
    location: "Guatemala, Gua",
    description: t("experience.lum"),
    icon: React.createElement(MdWork),
    date: "Sep 2024 - Present",
  },
  {
    title: "Maylandlabs",
    location: "Buenos Aires, Arg",
    description: t("experience.maylandLabs"),
    icon: React.createElement(MdWork),
    date: "Feb 2024 - Dic 2024",
  },
  {
    title: "HyperEvents",
    location: "Buenos Aires, Arg",
    description: t("experience.hyperEvents"),
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2023 - Feb 2024",
  },
  {
    title: "Graduated SoyHenry bootcamp",
    location: "Buenos Aires, Arg",
    description: t("experience.bootcamp"),
    icon: React.createElement(LuGraduationCap),
    date: "May 2023 - Sep 2023",
  },
  {
    title: "Manager at the CASI club restaurant",
    location: "San Isidro, Buenos Aires",
    description: t("experience.restaurant"),
    icon: React.createElement(FaReact),
    date: "Nov 2018, Nov 2022",
  },
];

export const projectsData = (t: (prop: string) => string): ProjectProps[] => [
  {
    title: "Lum's App",
    description: t("projects.description_lum_app"),
    tags: ["React Native", "Tailwind", "Open AI", "Web Socket"],
    imageUrl: imageLumApp,
    link: "https://play.google.com/store/apps/details?id=com.deploydevapp.lumforschool&hl=es_AR/"
  },
  {
    title: "Lum for school Web",
    description: t("projects.description_lum_web"),
    tags: ["React", "Tailwind", "Open AI", "Web Socket"],
    imageUrl: imageLumWeb,
    link: "https://lumforschool.com/"
  },
  {
    title: "Padelink Web",
    description: t("projects.description_padelink"),
    tags: ["React", "Typescript", "Tailwind", "Redux", "Docker"],
    imageUrl: imagePadelinkWeb,
    link: "https://www.padelink.com.ar/"
  },
  {
    title: "Workitfy Web",
    description: t("projects.description_workitfy"),
    tags: ["React", "Typescript", "Tailwind", "Redux", "Docker"],
    imageUrl: imageWorkitfyWeb,
    link: "https://workitfy.maylandlabs.com/"
  },
  {
    title: "Mayland labs Web",
    description: t("projects.description_maylandLabs"),
    tags: ["React", "Tailwind CSS", "Redux"],
    imageUrl: imageMaylandWeb,
    link: "https://maylandlabs.com/"
  },
];

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
