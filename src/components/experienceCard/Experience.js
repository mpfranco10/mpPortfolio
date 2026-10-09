import React from "react";
import "./experience.css";
import TimelineCard from "../common/TimelineCard";

const experienceData = [
  {
    id: "take-command-health",
    period: "August 2023 - March 2026",
    company: "Take Command Health",
    role: "Software Engineer",
    description:
      "Worked as a Front-End Software Engineer on a modern health insurance platform for the U.S. market, contributing to the redevelopment of a legacy application using React and TypeScript.",
    achievements: [
      "Built and maintained production features across multiple stages of the health insurance enrollment experience, translating complex requirements into intuitive user interfaces.",
      "Developed pixel-accurate, responsive interfaces from Figma designs and contributed UI improvements focused on usability and visual consistency.",
      "Collaborated with product managers, designers, QA engineers, and backend developers while improving component maintainability and reusable front-end architecture.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "React Query",
      "Zustand",
      "Material UI",
      "Jest",
      "React Testing Library",
      "REST APIs",
    ],
  },
  {
    id: "anthology",
    period: "January 2023 - June 2023",
    company: "Anthology - Blackboard",
    role: "Software Engineer",
    description:
      "Contributed to new features for the Blackboard learning management platform as part of an Agile development team.",
    achievements: [
      "Delivered production-ready features for two major platform initiatives while maintaining code quality through testing and code reviews.",
      "Identified frontend performance bottlenecks and implemented optimizations to improve application performance.",
      "Presented the implementation and performance results of a key feature to stakeholders using data visualizations and performance metrics.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Git",
      "Jenkins",
      "Docker",
      "Java",
    ],
  },
  {
    id: "consensus",
    period: "July 2020 - January 2023",
    company: "Consensus Cloud Solutions",
    role: "Software Engineer",
    description:
      "Contributed to the maintenance and continuous improvement of eFax Corporate, a large-scale cloud-based fax management platform for the U.S. market.",
    achievements: [
      "Delivered 10+ feature enhancements based on business requirements and customer needs.",
      "Resolved 30+ production issues by investigating root causes and deploying fixes that improved application stability, usability, and reliability.",
      "Worked across frontend and backend technologies within an international, cross-functional development team.",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Angular",
      "Grails",
      "Groovy",
      "Java",
      "Spring",
      "Git",
    ],
  },
  {
    id: "iconoi",
    period: "April 2019 - October 2019",
    company: "ICONOI S.A.",
    role: "Software Analyst",
    description:
      "Supported database improvements, software architecture documentation, and the development of a business intelligence web application.",
    technologies: ["SQL", "Java", "HTML", "CSS", "Microsoft Analysis Services"],
  },
  {
    id: "uniandes-ta",
    period: "2016 - 2020",
    company: "Universidad de los Andes",
    role: "Undergraduate Teaching Assistant",
    description:
      "Mentored 200+ undergraduate students across four computer science courses, supporting them with programming, debugging, and computational thinking.",
    technologies: ["Java", "Python", "C"],
  },
];

const Experience = () => (
  <section
    className="experience"
    id="experience"
    aria-labelledby="experience-heading"
  >
    <h2 className="experience-heading" id="experience-heading">
      <span className="emoji" role="img" aria-label="briefcase">
        💼
      </span>
      Work experience
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

export default Experience;
