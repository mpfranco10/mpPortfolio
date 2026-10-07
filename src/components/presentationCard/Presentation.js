import React from "react";
import "./Presentation.css";
import profileImage from "../../assets/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Presentation() {
  return (
    <section
      className="presentation"
      id="presentation"
      aria-labelledby="presentation-name"
    >
      <img
        className="profile-pic"
        src={profileImage}
        alt="María Franco"
        width="200"
        height="200"
      />
      <div className="my-description">
        <p className="presentation-greeting">
          <span role="img" aria-label="Hello">
            👋
          </span>{" "}
          Hi, I'm
        </p>
        <h1 id="presentation-name">
          María Franco
          <span
            className="presentation-flower"
            role="img"
            aria-label="Sunflower"
          >
            🌻
          </span>
        </h1>
        <p className="presentation-role">
          Software Engineer · Front-End Development
        </p>
        <p className="presentation-bio">
          I create intuitive web experiences with React, TypeScript, and
          JavaScript. Currently a MEXT Scholar at the University of Tsukuba,
          exploring UX and Kansei Engineering through my Master's in Informatics
        </p>
        <p className="presentation-opportunities">
          <span role="img" aria-label="Growing">
            🌱
          </span>{" "}
          Open to engineering opportunities in Japan
        </p>
        <div className="presentation-contact">
          <span className="presentation-location">
            <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
            Based in Japan
          </span>
          <a href="mailto:mpfrancog@outlook.com">
            <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
            mpfrancog@outlook.com
          </a>
        </div>
        <div className="presentation-socials">
          <a
            href="https://www.linkedin.com/in/mariapaulafrancoguzman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
            LinkedIn<span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://github.com/mpfranco10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
            GitHub<span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
