import React from "react";
import "./projects.css";

import marvelScreenshot from "../../assets/reactMarvel.jpg";
import hero from "../../assets/hero.jpg";
import tictactoe from "../../assets/tictactoe.jpg";

// Add or update projects here.
// Images, links, technologies, and status are optional.
const projects = [
  {
    id: "kansei-university-websites",
    title: "Kansei Engineering for University Websites",
    description:
      "Master's research exploring how Kansei Engineering and user-centered methods can be applied to university websites to better understand users' perceptions, behaviors, and overall experience.",
    image: null, // TODO: Add research visualization or university website study image
    imageAlt: "Kansei Engineering university website research",
    technologies: [
      "Kansei Engineering",
      "UX Research",
      "User-Centered Design",
      "Data Analysis",
    ],
    status: "Master's Research",
  },
  {
    id: "mouse-tracking",
    title: "Behavioral Mouse Tracking Tool",
    description:
      "Developed a Python-based research tool to capture user interaction data during web browsing sessions, including mouse movement, clicks, scrolling, time, and screen boundaries. The collected data supports behavioral analysis as part of my UX research.",
    image: null, // TODO: Add screenshot or visualization from the tracking tool
    imageAlt: "Behavioral mouse tracking research tool",
    technologies: [
      "Python",
      "UX Research",
      "Behavioral Data",
      "Data Collection",
    ],
    status: "Research Tool",
  },
  {
    id: "ux-research-platform",
    title: "UX Research Experiment Platform",
    description:
      "Developed a web-based research environment to collect user evaluations of university websites and support the analysis of subjective impressions and interaction behavior.",
    image: null, // TODO: Add screenshot of the research platform
    imageAlt: "Web-based UX research experiment platform",
    technologies: ["React", "UX Research", "Data Collection"],
    status: "Research Tool",
    // TODO: Add GitHub or demo link if this project can be shared publicly
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    description:
      "Built an interactive Tic Tac Toe game using React and TypeScript, featuring game-state management, winner detection, turn tracking, and board reset functionality.",
    image: tictactoe,
    imageAlt:
      "Tic Tac Toe interface showing the game board and player information",
    technologies: ["React", "TypeScript"],
    github: "https://github.com/mpfranco10/ticTacToe",
    demo: "https://mpfranco10.github.io/ticTacToe/",
    status: "Personal Project",
  },
  {
    id: "marvel-hooks",
    title: "Marvel Character Search",
    description:
      "Built a React application for searching Marvel characters through the Marvel API, including debounced search input to reduce unnecessary API requests and improve the user experience.",
    image: hero,
    imageAlt: "Iron Man artwork used in the Marvel character search project",
    imageHref: marvelScreenshot,
    technologies: ["React", "Marvel API", "REST API"],
    github: "https://github.com/mpfranco10/marvel-hooks",
    demo: "https://mpfranco10.github.io/marvel-hooks/",
    status: "Personal Project",
  },
];

const ProjectCard = ({ project }) => {
  const {
    id,
    title,
    description,
    image,
    imageAlt,
    imageHref,
    technologies = [],
    github,
    demo,
    status,
    placeholder,
  } = project;

  const screenshot = image ? (
    <img
      className="project-image"
      src={image}
      alt={imageAlt || `${title} screenshot`}
      loading="lazy"
    />
  ) : null;

  return (
    <article
      className={`project-card${
        placeholder ? " project-card--placeholder" : ""
      }`}
      aria-labelledby={`project-${id}`}
    >
      <div className="project-media">
        {screenshot ? (
          imageHref ? (
            <a
              className="project-preview"
              href={imageHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} screenshot (opens in a new tab)`}
            >
              {screenshot}
            </a>
          ) : (
            screenshot
          )
        ) : (
          <div className="project-placeholder" aria-hidden="true">
            <span className="project-placeholder-symbol">＋</span>
            <span>Image coming soon</span>
          </div>
        )}
      </div>

      <div className="project-content">
        <header className="project-header">
          <h3 id={`project-${id}`}>{title}</h3>

          {status && <span className="project-status">{status}</span>}
        </header>

        {description && <p className="project-description">{description}</p>}

        {technologies.length > 0 && (
          <ul
            className="project-technologies"
            aria-label={`${title} technologies`}
          >
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        )}

        {(github || demo) && (
          <div className="project-actions">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} GitHub repository (opens in a new tab)`}
              >
                GitHub repo <span aria-hidden="true">↗</span>
              </a>
            )}

            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo (opens in a new tab)`}
              >
                Live demo <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section
      className="projects"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <h2 className="projects-heading" id="projects-heading">
        <span role="img" aria-label="Projects">
          📲
        </span>{" "}
        Projects & Research
      </h2>

      <p className="projects-intro">
        A selection of development and research projects combining software
        engineering, user experience, and human-centered technology.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
