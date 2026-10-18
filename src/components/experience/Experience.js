import { useTranslation } from "react-i18next";
import React from "react";
import "./experience.css";
import TimelineCard from "../common/TimelineCard";

const Experience = () => {
  const { t } = useTranslation();
  const experienceData = t("experience", { returnObjects: true });
  return (
    <section
      className="experience"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <h2 className="experience-heading" id="experience-heading">
        <span className="emoji" role="img" aria-label={t("headings.briefcase")}>
          💼
        </span>
        {t("headings.experience")}
      </h2>

      <div className="experience-list">
        {experienceData.map((experience) => (
          <TimelineCard
            key={experience.id}
            period={experience.period}
            title={experience.company}
            subtitle={experience.role}
            description={experience.description}
            items={experience.achievements}
            tags={experience.technologies}
            className="experience-card"
            tagClassName="experience-tag"
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
