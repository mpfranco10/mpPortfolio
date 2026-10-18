import { useTranslation } from "react-i18next";
import "./projects.css";

import disney from "../../assets/disney.png";
import efaxCorporate from "../../assets/efax.png";
import kansei from "../../assets/kansei.png";
import mouset from "../../assets/mouset.png";
import tch from "../../assets/tch.webp";
import tictactoe from "../../assets/ticTacToe.png";

// Add or update projects here.
// Images, links, technologies, and status are optional.
const projects = [
  {
    id: "kansei-university-websites",
    image: kansei,
  },
  {
    id: "mouse-tracking",
    image: mouset,
    github: "https://github.com/mpfranco10/mouse-interaction-tracker",
  },
  {
    id: "take-command-hra",
    image: tch,
    productUrl: "https://www.takecommandhealth.com/hra-administration-software",
  },
  {
    id: "efax-corporate",
    image: efaxCorporate,
    productUrl: "https://enterprise.efax.com/",
  },
  {
    id: "tic-tac-toe",
    image: tictactoe,
    github: "https://github.com/mpfranco10/ticTacToe",
    demo: "https://mpfranco10.github.io/ticTacToe/",
  },
  {
    id: "disney-characters",
    image: disney,
    imageHref: disney,
    github: "https://github.com/mpfranco10/marvel-hooks",
    demo: "https://mpfranco10.github.io/marvel-hooks/",
  },
];

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
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
    note,
    productUrl,
  } = {
    ...project,
    ...t(`projects.items.${project.id}`, { returnObjects: true }),
  };

  const actions = [
    github && {
      href: github,
      label: t("projects.repo"),
      ariaLabel: t("projects.repoLabel", { title }),
    },
    demo && {
      href: demo,
      label: t("projects.demo"),
      ariaLabel: t("projects.demoLabel", { title }),
    },
    productUrl && {
      href: productUrl,
      label: t("projects.product"),
      ariaLabel: t("projects.productLabel", { title }),
    },
  ].filter(Boolean);

  const screenshot = image ? (
    <img
      className="project-image"
      src={image}
      alt={imageAlt || t("projects.screenshot", { title })}
      loading="lazy"
    />
  ) : null;

  let mediaContent;

  if (!screenshot) {
    mediaContent = (
      <div className="project-placeholder" aria-hidden="true">
        <span className="project-placeholder-symbol">＋</span>
        <span>{t("projects.comingSoon")}</span>
      </div>
    );
  } else if (imageHref) {
    mediaContent = (
      <a
        className="project-preview"
        href={imageHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("projects.viewScreenshot", { title })}
      >
        {screenshot}
      </a>
    );
  } else {
    mediaContent = screenshot;
  }

  return (
    <article
      className={`project-card${
        placeholder ? " project-card--placeholder" : ""
      }`}
      aria-labelledby={`project-${id}`}
    >
      <div className="project-media">{mediaContent}</div>

      <div className="project-content">
        <header className="project-header">
          <h3 id={`project-${id}`}>{title}</h3>

          {status && <span className="project-status">{status}</span>}
        </header>

        {description && <p className="project-description">{description}</p>}

        {note && <p className="project-note">{note}</p>}

        {technologies.length > 0 && (
          <ul
            className="project-technologies"
            aria-label={t("common.technologies", { title })}
          >
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        )}

        {actions.length > 0 && (
          <div className="project-actions">
            {actions.map(({ href, label, ariaLabel }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
              >
                {label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section
      className="projects"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <h2 className="projects-heading" id="projects-heading">
        <span role="img" aria-label={t("projects.emoji")}>
          📲
        </span>{" "}
        {t("projects.heading")}
      </h2>

      <p className="projects-intro">{t("projects.intro")}</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
