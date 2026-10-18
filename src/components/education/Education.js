import { useTranslation } from "react-i18next";
import React from "react";
import "./education.css";
import TimelineCard from "../common/TimelineCard";

const Education = () => {
  const { t } = useTranslation();
  const educationData = t("education", { returnObjects: true });
  return (
    <section
      className="education"
      id="education"
      aria-labelledby="education-heading"
    >
      <h2 className="education-heading" id="education-heading">
        <span
          className="emoji"
          role="img"
          aria-label={t("headings.graduation")}
        >
          🎓
        </span>
        {t("headings.education")}
      </h2>

      <div className="education-list">
        {educationData.map((education) => (
          <TimelineCard
            key={education.id}
            period={education.period}
            title={education.institution}
            subtitle={education.degree}
            highlight={education.highlight}
            description={education.description}
            className="education-card"
          >
            {education.degrees && (
              <ul className="education-degrees">
                {education.degrees.map((degree) => (
                  <li key={degree}>{degree}</li>
                ))}
              </ul>
            )}

            {education.minor && (
              <p className="education-minor">{education.minor}</p>
            )}
          </TimelineCard>
        ))}
      </div>
    </section>
  );
};

export default Education;
