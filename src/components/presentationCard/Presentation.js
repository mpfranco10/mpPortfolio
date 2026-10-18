import { useTranslation } from "react-i18next";
import React from "react";
import "./presentation.css";
import profileImage from "../../assets/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Presentation = () => {
  const { t } = useTranslation();
  return (
    <section
      className="presentation"
      id="presentation"
      aria-labelledby="presentation-name"
    >
      <img
        className="profile-pic"
        src={profileImage}
        alt={t("presentation.name")}
        width="200"
        height="200"
      />
      <div className="my-description">
        <p className="presentation-greeting">
          <span role="img" aria-label={t("presentation.hello")}>
            👋
          </span>{" "}
          {t("presentation.greeting")}
        </p>
        <h1 id="presentation-name">
          {t("presentation.name")}
          <span
            className="presentation-flower"
            role="img"
            aria-label={t("presentation.sunflower")}
          >
            🌻
          </span>
        </h1>
        <p className="presentation-role">{t("presentation.role")}</p>
        <p className="presentation-bio">{t("presentation.bio")}</p>
        <p className="presentation-opportunities">
          <span role="img" aria-label={t("presentation.growing")}>
            🌱
          </span>{" "}
          {t("presentation.opportunities")}
        </p>
        <div className="presentation-contact">
          <span className="presentation-location">
            <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
            {t("presentation.location")}
          </span>
          <a href="mailto:mpfrancog@outlook.com">
            <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
            {t("presentation.email")}
          </a>
        </div>
        <div className="presentation-socials">
          <a
            href="https://www.linkedin.com/in/mariapaulafrancoguzman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
            {t("presentation.linkedin")}
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://github.com/mpfranco10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
            {t("presentation.github")}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
