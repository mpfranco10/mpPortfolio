import React from "react";

import "./Experience.css";

function Experience() {
  return (
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
        {/* Take Command Health */}
        <div>
          <article className="experience-card">
            <p className="experience-period">August 2023 - March 2026</p>

            <div className="experience-details">
              <header className="experience-header">
                <h3>Take Command Health</h3>
                <p className="experience-role">Software Engineer</p>
              </header>

              <div className="experience-description">
                <p>
                  Worked as a Front-End Software Engineer on a modern health
                  insurance platform for the U.S. market, contributing to the
                  redevelopment of a legacy application using React and
                  TypeScript.
                </p>

                <ul>
                  <li>
                    Built and maintained production features across multiple
                    stages of the health insurance enrollment experience,
                    translating complex requirements into intuitive user
                    interfaces.
                  </li>

                  <li>
                    Developed pixel-accurate, responsive interfaces from Figma
                    designs and contributed UI improvements focused on usability
                    and visual consistency.
                  </li>

                  <li>
                    Collaborated with product managers, designers, QA engineers,
                    and backend developers while improving component
                    maintainability and reusable front-end architecture.
                  </li>
                </ul>

                <ul
                  className="experience-technologies"
                  aria-label="Technologies"
                >
                  <li className="experience-tag">React</li>
                  <li className="experience-tag">TypeScript</li>
                  <li className="experience-tag">React Query</li>
                  <li className="experience-tag">Zustand</li>
                  <li className="experience-tag">Material UI</li>
                  <li className="experience-tag">Jest</li>
                  <li className="experience-tag">React Testing Library</li>
                  <li className="experience-tag">REST APIs</li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        {/* Anthology */}
        <div>
          <article className="experience-card">
            <p className="experience-period">January 2023 - June 2023</p>

            <div className="experience-details">
              <header className="experience-header">
                <h3>Anthology - Blackboard</h3>
                <p className="experience-role">Software Engineer</p>
              </header>

              <div className="experience-description">
                <p>
                  Contributed to new features for the Blackboard learning
                  management platform as part of an Agile development team.
                </p>

                <ul>
                  <li>
                    Delivered production-ready features for two major platform
                    initiatives while maintaining code quality through testing
                    and code reviews.
                  </li>

                  <li>
                    Identified frontend performance bottlenecks and implemented
                    optimizations to improve application performance.
                  </li>

                  <li>
                    Presented the implementation and performance results of a
                    key feature to stakeholders using data visualizations and
                    performance metrics.
                  </li>
                </ul>

                <ul
                  className="experience-technologies"
                  aria-label="Technologies"
                >
                  <li className="experience-tag">React</li>
                  <li className="experience-tag">TypeScript</li>
                  <li className="experience-tag">JavaScript</li>
                  <li className="experience-tag">Git</li>
                  <li className="experience-tag">Jenkins</li>
                  <li className="experience-tag">Docker</li>
                  <li className="experience-tag">Java</li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        {/* Consensus Cloud Solutions */}
        <div>
          <article className="experience-card">
            <p className="experience-period">July 2020 - January 2023</p>

            <div className="experience-details">
              <header className="experience-header">
                <h3>Consensus Cloud Solutions</h3>
                <p className="experience-role">Software Engineer</p>
              </header>

              <div className="experience-description">
                <p>
                  Contributed to the maintenance and continuous improvement of
                  eFax Corporate, a large-scale cloud-based fax management
                  platform for the U.S. market.
                </p>

                <ul>
                  <li>
                    Delivered 10+ feature enhancements based on business
                    requirements and customer needs.
                  </li>

                  <li>
                    Resolved 30+ production issues by investigating root causes
                    and deploying fixes that improved application stability,
                    usability, and reliability.
                  </li>

                  <li>
                    Worked across frontend and backend technologies within an
                    international, cross-functional development team.
                  </li>
                </ul>

                <ul
                  className="experience-technologies"
                  aria-label="Technologies"
                >
                  <li className="experience-tag">JavaScript</li>
                  <li className="experience-tag">React</li>
                  <li className="experience-tag">Angular</li>
                  <li className="experience-tag">Grails</li>
                  <li className="experience-tag">Groovy</li>
                  <li className="experience-tag">Java</li>
                  <li className="experience-tag">Spring</li>
                  <li className="experience-tag">Git</li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        {/* ICONOI */}
        <div>
          <article className="experience-card">
            <p className="experience-period">April 2019 - October 2019</p>

            <div className="experience-details">
              <header className="experience-header">
                <h3>ICONOI S.A.</h3>
                <p className="experience-role">Software Analyst</p>
              </header>

              <div className="experience-description">
                <p>
                  Supported database improvements, software architecture
                  documentation, and the development of a business intelligence
                  web application.
                </p>

                <ul
                  className="experience-technologies"
                  aria-label="Technologies"
                >
                  <li className="experience-tag">SQL</li>
                  <li className="experience-tag">Java</li>
                  <li className="experience-tag">HTML</li>
                  <li className="experience-tag">CSS</li>
                  <li className="experience-tag">
                    Microsoft Analysis Services
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        {/* Universidad de los Andes */}
        <div>
          <article className="experience-card">
            <p className="experience-period">2016 - 2020</p>

            <div className="experience-details">
              <header className="experience-header">
                <h3>Universidad de los Andes</h3>
                <p className="experience-role">
                  Undergraduate Teaching Assistant
                </p>
              </header>

              <div className="experience-description">
                <p>
                  Mentored 200+ undergraduate students across four computer
                  science courses, supporting them with programming, debugging,
                  and computational thinking.
                </p>

                <ul
                  className="experience-technologies"
                  aria-label="Technologies"
                >
                  <li className="experience-tag">Java</li>
                  <li className="experience-tag">Python</li>
                  <li className="experience-tag">C</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experience;
