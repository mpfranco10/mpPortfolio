import { useTranslation } from "react-i18next";
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
    core: true,
    skills: [
      {
        icon: reactImage,
        featured: true,
        nameKey: 0,
      },
      {
        icon: tsImage,
        featured: true,
        nameKey: 1,
      },
      {
        icon: jsImage,
        nameKey: 2,
      },
      {
        icon: htmlImage,
        nameKey: 3,
      },
      {
        icon: cssImage,
        nameKey: 4,
      },
    ],
    titleKey: 0,
  },
  {
    skills: [
      {
        icon: muiImage,
        nameKey: 0,
      },
      {
        icon: reactQueryImage,
        nameKey: 1,
      },
      {
        icon: zustandImage,
        invertOnDark: true,
        nameKey: 2,
      },
      {
        icon: reactRouterImage,
        invertOnDark: true,
        nameKey: 3,
      },
      {
        icon: jestImage,
        nameKey: 4,
      },
      {
        icon: restImage,
        invertOnDark: true,
        nameKey: 5,
      },
    ],
    titleKey: 1,
  },
  {
    skills: [
      {
        icon: vueImage,
        nameKey: 0,
      },
      {
        icon: angularImage,
        nameKey: 1,
      },
      {
        icon: javaImage,
        nameKey: 2,
      },
      {
        icon: grailsImage,
        nameKey: 3,
      },
      {
        icon: sqlImage,
        nameKey: 4,
      },
      {
        icon: gitImage,
        nameKey: 5,
      },
    ],
    titleKey: 2,
  },
  {
    skills: [
      {
        icon: pythonImage,
        nameKey: 0,
      },
      {
        icon: githubImage,
        invertOnDark: true,
        nameKey: 1,
      },
      {
        icon: jiraImage,
        nameKey: 2,
      },
      {
        icon: postmanImage,
        nameKey: 3,
      },
    ],
    titleKey: 3,
  },
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

const Languages = () => {
  const { t } = useTranslation();
  const languages = t("skills.languages", { returnObjects: true });
  return (
    <div className="skills-languages" id="languages">
      <h3>
        <span role="img" aria-label={t("skills.globe")}>
          🌎
        </span>{" "}
        {t("skills.languagesHeading")}
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
};

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section className="skills" id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="skills-heading">
        <span role="img" aria-label={t("skills.laptop")}>
          💻
        </span>{" "}
        {t("skills.heading")}
      </h2>

      <div className="skills-groups">
        {skillGroups.map(({ titleKey, core, skills }) => {
          const title = t(`skillGroups.${titleKey}.title`);
          const id = `skills-group-${titleKey}`;

          return (
            <SkillGroup
              key={title}
              id={id}
              title={title}
              core={core}
              skills={skills.map((skill) => ({
                ...skill,
                name: t(`skillGroups.${titleKey}.skills.${skill.nameKey}`),
              }))}
            />
          );
        })}
      </div>

      <Languages />
    </section>
  );
};

export default Skills;
