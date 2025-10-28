"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Trans, useTranslation } from "react-i18next";

export default function About() {
  const { ref } = useSectionInView("About");
  const { t } = useTranslation("global")

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] sm:min-h-[464px] sm:max-h-[464px] leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t("about.title")}</SectionHeading>
      <p className="mb-3">
        <Trans
          i18nKey="about.description"
          ns="global"
          components={[
            <span key={"about.description"} className="font-medium" />,
            <span key={"about.description2"} className="font-medium" />,
            <span key={"about.description3"} />,
            <span key={"about.description4"} />,
            <span key={"about.description5"} className="font-medium" />,
            <span key={"about.description6"} className="font-medium" />,
          ]}
        />
      </p>

      <p>
      <Trans
        i18nKey="about.description_2"
        ns="global"
        components={[
          <span key={"about.description_2"} className="italic" />,
          <span key={"about.description_22"} className="font-medium" />,
          <span key={"about.description_23"} className="font-medium" />
        ]}
      />
      </p>
    </motion.section>
  );
}
