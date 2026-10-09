import React from "react";
import "./skills.css";
import jsImage from "../../assets/js.svg";
import reactImage from "../../assets/react.svg";
import javaImage from "../../assets/java.svg";
import htmlImage from "../../assets/html.svg";
import cssImage from "../../assets/css.svg";
import sqlImage from "../../assets/sql.svg";
import angularImage from "../../assets/angular.svg";
import grailsImage from "../../assets/grails.svg";
import pythonImage from "../../assets/python.svg";
import gitImage from "../../assets/giticon.svg";

// Placeholder icons reuse existing assets. Replace each icon here when ready.
const skillGroups = [
  {
    title: "Core Front-End",
    core: true,
    skills: [
      { name: "React", icon: reactImage, featured: true },
      { name: "TypeScript", icon: jsImage, featured: true, placeholder: true },
      { name: "JavaScript", icon: jsImage },
      { name: "HTML", icon: htmlImage },
      { name: "CSS", icon: cssImage },
    ],
  },
  {
    title: "Front-End Ecosystem",
    skills: [
      { name: "Material UI (MUI)", icon: reactImage, placeholder: true },
      {
        name: "React Query / TanStack Query",
        icon: reactImage,
        placeholder: true,
      },
      { name: "Zustand", icon: jsImage, placeholder: true },
      { name: "React Router", icon: reactImage, placeholder: true },
      { name: "Jest", icon: jsImage, placeholder: true },
      { name: "React Testing Library", icon: reactImage, placeholder: true },
      { name: "REST APIs", icon: sqlImage, placeholder: true },
    ],
  },
  {
    title: "Additional Development Experience",
    skills: [
      { name: "Vue.js", icon: angularImage, placeholder: true },
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
      { name: "GitHub", icon: gitImage, placeholder: true },
      { name: "Jira", icon: gitImage, placeholder: true },
      { name: "Postman", icon: sqlImage, placeholder: true },
    ],
  },
];

function Skill({ name, icon, featured, placeholder }) {
  return (
    <li className={`skill${featured ? " skill--featured" : ""}`}>
      <img
        src={icon}
        className={`skill-image${
          placeholder ? " skill-image--placeholder" : ""
        }`}
        alt=""
        width="22"
        height="22"
        loading="lazy"
      />
      <span className="skill-text">{name}</span>
    </li>
  );
}

function Skills() {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="skills-heading">
        <span role="img" aria-label="Laptop">
          💻
        </span>{" "}
        Skills
      </h2>
      <div className="skills-groups">
        {skillGroups.map(({ title, core, skills }, index) => (
          <section
            className={`skills-group${core ? " skills-group--core" : ""}`}
            key={title}
            aria-labelledby={`skills-group-${index}`}
          >
            <h3 id={`skills-group-${index}`}>{title}</h3>
            <ul className="skills-list">
              {skills.map((skill) => (
                <Skill key={skill.name} {...skill} />
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="skills-languages" id="languages">
        <h3>
          <span role="img" aria-label="Globe">
            🌎
          </span>{" "}
          Languages
        </h3>
        <ul>
          <li>
            <strong>Spanish</strong>
            <span>Native</span>
          </li>
          <li>
            <strong>English</strong>
            <span>Fluent / TOEIC 990</span>
          </li>
          <li>
            <strong>Japanese</strong>
            <span>JLPT N2</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
