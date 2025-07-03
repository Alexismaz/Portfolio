"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I have completed 2 years of {" "}
        <span className="font-medium">Computer Science</span> studies. Due to personal reasons, I couldn't continue, but I plan to resume as soon as I can. I worked in the culinary field for 6 years until I returned to my passion, which is programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">semi-senior full-stack development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Redux, Next.js, TypeScript, Tailwind CSS, TypeORM, JWT, Node.js, NestJs and PostgreSQL
        </span>
        . I am also familiar with Open AI, Swagger, React Native and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my cat. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Cryptography</span>. I'm also studying blockchain to strengthen my knowledge of secure and decentralized technologies.
      </p>
    </motion.section>
  );
}
