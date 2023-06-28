import React from "react";
import "./Experience.css";
import Bubble from "../Bubble";

function Experience() {
  return (
    <div className="experience" id="experience">
      <p className="title">
        <span className="emoji" role="img" aria-label="bagEmoji">
          💼
        </span>
        Work experience
      </p>
      <div>
        <div>
          <Bubble className="exp-bubble">
            <p>
              {" "}
              <i>January 2023 - June 2023</i>
            </p>
            <p>
              <strong>Anthology - Blackboard</strong>
            </p>
            <p>
              <strong>Software Engineer</strong>
            </p>
            <p>
              Utilized React, TypeScript, and JavaScript to develop innovative
              features, contributing to the continuous improvement of the
              educational platform Blackboard.
            </p>
            <p>
              Ensured the utilization of cutting-edge technologies and adherence
              to high standards throughout the development process.{" "}
            </p>
            <p>
              Collaborated with cross-functional teams to aid in the design of
              new features, aligning them with platform requirements and
              enhancing the user experience.{" "}
            </p>
            <div className="skills-container">
              <div className="skill-bubble">React</div>
              <div className="skill-bubble">Javascript</div>
              <div className="skill-bubble">Git</div>
              <div className="skill-bubble">CSS</div>
              <div className="skill-bubble">TypeScript</div>
            </div>
          </Bubble>
        </div>
        <div>
          <Bubble className="exp-bubble">
            <p>
              {" "}
              <i>October 2020 - January 2023</i>
            </p>
            <p>
              <strong>Consensus Cloud Solutions</strong>
            </p>
            <p>
              <strong>Full Stack Developer</strong>
            </p>
            <p>
              Development of new features and maintenance support for{" "}
              <strong>eFax Corporate</strong>, a cloud faxing web project used
              by multiple clients around the world. Development and maintenance
              of endpoints that expose eFax Corporate functionality.
            </p>
            <p>
              Collaborated within an international team to ensure seamless
              integration and adherence to established code standards.{" "}
            </p>
            <p>
              Demonstrated a commitment to delivering a high-quality platform to
              clients by consistently upholding rigorous development practices.{" "}
            </p>
            <div className="skills-container">
              <div className="skill-bubble">Javascript</div>
              <div className="skill-bubble">Grails</div>
              <div className="skill-bubble">Groovy</div>
              <div className="skill-bubble">jQuery</div>
              <div className="skill-bubble">Angular</div>
              <div className="skill-bubble">IntelliJ</div>
              <div className="skill-bubble">SCRUM</div>
              <div className="skill-bubble">Jira</div>
              <div className="skill-bubble">Java</div>
              <div className="skill-bubble">Spring</div>
              <div className="skill-bubble">Git</div>
            </div>
          </Bubble>
        </div>
        <div>
          <Bubble className="exp-bubble">
            <p>
              {" "}
              <i>July 2020 - October 2020</i>
            </p>
            <p>
              <strong>ICONOI SAS</strong>
            </p>
            <p>
              <strong>Software Developer</strong>
            </p>
            <p>
              Front-end development for an application to report national level
              health events in Colombia, utilizing Vue.js and JavaScript.{" "}
            </p>
            <p>
              Assisted in the development of a laboratory module within the
              application, responsible for logging lab results for multiple
              patients across the country.{" "}
            </p>
            <div className="skills-container">
              <div className="skill-bubble">Javascript</div>
              <div className="skill-bubble">Vue.js</div>
              <div className="skill-bubble">Git</div>
            </div>
          </Bubble>
        </div>
        <div>
          <Bubble className="exp-bubble">
            <p>
              {" "}
              <i>April 2019 – October 2019</i>
            </p>
            <p>
              <strong>ICONOI SAS</strong>
            </p>
            <p>
              <strong>Software Analyst</strong>
            </p>
            <p>Developed improvements to the company's databases using SQL. </p>
            <p>
              Developed diagrams and corrections related to the software
              architecture of various company projects.{" "}
            </p>
            <p>
              Contributed to the development of a business intelligence website,
              utilizing tools such as Telerik, Microsoft SSAS (SQL Server
              Analysis Services), and SSIS (SQL Server Integration Services).{" "}
            </p>
            <p>
              Played a role in the business intelligence project, specifically
              in the development of a cube using Microsoft Analysis Services.{" "}
            </p>
            <div className="skills-container">
              <div className="skill-bubble">Javascript</div>
              <div className="skill-bubble">SQL</div>
              <div className="skill-bubble">Java</div>
              <div className="skill-bubble">Telerik</div>
              <div className="skill-bubble">Microsoft Analysis</div>
            </div>
          </Bubble>
        </div>
        <div>
          <Bubble className="exp-bubble">
            <p>
              {" "}
              <i>August 2016 – May 2020</i>
            </p>
            <p>
              <strong>Universidad de los Andes</strong>
            </p>
            <p>
              <strong>Teaching assistant</strong>
            </p>
            <p>
              Helped college freshmen to develop computational thinking skills
              through programming different applications. Graded students’
              performance in class during the semester and helped to solve their
              questions in class time. Helped students to identify the
              strategies to use depending on the type of the problem being
              considered.
            </p>
            <p>Assisted in the following subjects:</p>
            <ul>
              <li>
                Introduction to programming / <i>January 2020 – May 2020</i>
              </li>
              <li>
                Object oriented programming (Basic and intermediate) /{" "}
                <i>August 2016 – Dec 2019</i>
              </li>
              <li>
                Technologic infrastructure fundaments /{" "}
                <i>August 2017 – May 2018</i>
              </li>
            </ul>
            <div className="skills-container">
              <div className="skill-bubble">Python</div>
              <div className="skill-bubble">Java</div>
              <div className="skill-bubble">C</div>
              <div className="skill-bubble">Assembly</div>
            </div>
          </Bubble>
        </div>
      </div>
    </div>
  );
}

export default Experience;
