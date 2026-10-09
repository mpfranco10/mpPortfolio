import React from "react";
import "./education.css";
import TimelineCard from "../common/TimelineCard";

const educationData = [
  {
    id: "tsukuba",
    period: "2025 - Present",
    institution: "University of Tsukuba - Japan",
    degree: "M.S. in Informatics",
    highlight: "MEXT Scholar",
    description:
      "Research focused on Kansei Engineering, User Experience (UX), and User-Centered Web Design, exploring how digital experiences can better respond to users' perceptions and needs.",
  },
  {
    id: "uniandes",
    period: "2015 - 2020",
    institution: "Universidad de los Andes - Colombia",
    degree: "Dual B.S. Degrees",
    degrees: ["Systems and Computing Engineering", "Electronics Engineering"],
    minor: "Minor in Machine Learning",
  },
];

const Education = () => (
  <section
    className="education"
    id="education"
    aria-labelledby="education-heading"
  >
    <h2 className="education-heading" id="education-heading">
      <span className="emoji" role="img" aria-label="graduation cap">
        🎓
      </span>
      Education
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

export default Education;
