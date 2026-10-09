import React from "react";
import "./skills.css";

import jsImage from "../../assets/js.svg";
import tsImage from "../../assets/ts.svg";
import reactImage from "../../assets/react.svg";
import javaImage from "../../assets/java.svg";
import htmlImage from "../../assets/html.svg";
import cssImage from "../../assets/css.svg";
import sqlImage from "../../assets/sql.svg";
import angularImage from "../../assets/angular.svg";
import grailsImage from "../../assets/grails.svg";
import pythonImage from "../../assets/python.svg";
import gitImage from "../../assets/giticon.svg";
import muiImage from "../../assets/mui.svg";
import reactQueryImage from "../../assets/reactQuery.svg";
import reactRouterImage from "../../assets/reactRouter.svg";
import zustandImage from "../../assets/zustand.svg";
import jestImage from "../../assets/jest.svg";
import restImage from "../../assets/rest.svg";
import vueImage from "../../assets/vue.svg";
import githubImage from "../../assets/github.svg";
import jiraImage from "../../assets/Jira.svg";
import postmanImage from "../../assets/postman.svg";

const skillGroups = [
  {
    title: "Core Front-End",
    core: true,
    skills: [
      { name: "React", icon: reactImage, featured: true },
      {
        name: "TypeScript",
        icon: tsImage,
        featured: true,
      },
      { name: "JavaScript", icon: jsImage },
      { name: "HTML", icon: htmlImage },
      { name: "CSS", icon: cssImage },
    ],
  },
  {
    title: "Front-End Ecosystem",
    skills: [
      { name: "Material UI (MUI)", icon: muiImage },
      {
        name: "React Query",
        icon: reactQueryImage,
      },
      { name: "Zustand", icon: zustandImage, invertOnDark: true },
      { name: "React Router", icon: reactRouterImage, invertOnDark: true },
      { name: "Jest", icon: jestImage },
      { name: "REST APIs", icon: restImage, invertOnDark: true },
    ],
  },
  {
    title: "Additional Development Experience",
    skills: [
      { name: "Vue.js", icon: vueImage },
      { name: "Angular", icon: angularImage },
      { name: "Java", icon: javaImage },
      { name: "Grails / Groovy", icon: grailsImage },
      { name: "SQL", icon: sqlImage },
      { name: "Git", icon: gitImage },
    ],
  },
  {
    title: "Research & Tools",
    skills: [
      { name: "Python", icon: pythonImage },
      { name: "GitHub", icon: githubImage, invertOnDark: true },
      { name: "Jira", icon: jiraImage },
      { name: "Postman", icon: postmanImage },
    ],
  },
];

const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Fluent / TOEIC 990" },
  { name: "Japanese", level: "JLPT N2" },
];

const Skill = ({ name, icon, featured = false, invertOnDark = false }) => (
  <li className={`skill${featured ? " skill--featured" : ""}`}>
    <img
      src={icon}
      className={`skill-image${
        invertOnDark ? " skill-image--invert-dark" : ""
      }`}
      alt=""
      width="22"
      height="22"
      loading="lazy"
    />
    <span className="skill-text">{name}</span>
  </li>
);

const SkillGroup = ({ title, core = false, skills, id }) => (
  <section
    className={`skills-group${core ? " skills-group--core" : ""}`}
    aria-labelledby={id}
  >
    <h3 id={id}>{title}</h3>

    <ul className="skills-list">
      {skills.map((skill) => (
        <Skill key={skill.name} {...skill} />
      ))}
    </ul>
  </section>
);

const Languages = () => (
  <div className="skills-languages" id="languages">
    <h3>
      <span role="img" aria-label="Globe">
        🌎
      </span>{" "}
      Languages
    </h3>

    <ul>
      {languages.map(({ name, level }) => (
        <li key={name}>
          <strong>{name}</strong>
          <span>{level}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => (
  <section className="skills" id="skills" aria-labelledby="skills-heading">
    <h2 id="skills-heading" className="skills-heading">
      <span role="img" aria-label="Laptop">
        💻
      </span>{" "}
      Skills
    </h2>

    <div className="skills-groups">
      {skillGroups.map(({ title, core, skills }) => {
        const id = `skills-group-${title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "")}`;

        return (
          <SkillGroup
            key={title}
            id={id}
            title={title}
            core={core}
            skills={skills}
          />
        );
      })}
    </div>

    <Languages />
  </section>
);

export default Skills;
