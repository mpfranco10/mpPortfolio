import { useTranslation } from "react-i18next";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "./navBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCode,
  faGears,
  faGraduationCap,
  faLaptopCode,
  faLanguage,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const themes = {
  dark: {
    name: "dark",
    icon: faSun,
    text: "light",
  },
  light: {
    name: "light",
    icon: faMoon,
    text: "dark",
  },
};

const navItems = [
  {
    section: "skills",
    label: "skills",
    icon: faGears,
  },
  {
    section: "experience",
    label: "experience",
    icon: faBriefcase,
  },
  {
    section: "education",
    label: "education",
    icon: faGraduationCap,
  },
  {
    section: "projects",
    label: "projects",
    icon: faLaptopCode,
  },
];

const sections = [
  "presentation",
  "skills",
  "experience",
  "education",
  "projects",
];

const NavLink = ({ section, label, icon, activeSection }) => {
  const isActive = activeSection === section;

  return (
    <li className="nav-item">
      <a
        href={`#${section}`}
        className={`nav-link${isActive ? " is-active" : ""}`}
        aria-label={label}
        aria-current={isActive ? "location" : undefined}
      >
        <FontAwesomeIcon icon={icon} className="fa-primary" />
        <span className="link-text">{label}</span>
      </a>
    </li>
  );
};

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage;
  const [theme, setTheme] = useState(themes.dark);
  const [activeSection, setActiveSection] = useState("presentation");
  const scrollFrame = useRef(null);

  const updateActiveSection = useCallback(() => {
    let currentSection = "presentation";

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (
        section &&
        section.getBoundingClientRect().top <= window.innerHeight * 0.3
      ) {
        currentSection = id;
      }
    });

    const isAtBottom =
      window.scrollY > 0 &&
      window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

    if (isAtBottom) {
      currentSection = "projects";
    }

    setActiveSection((previousSection) =>
      previousSection === currentSection ? previousSection : currentSection
    );
  }, []);

  const scheduleActiveUpdate = useCallback(() => {
    if (scrollFrame.current) {
      return;
    }

    scrollFrame.current = requestAnimationFrame(() => {
      scrollFrame.current = null;
      updateActiveSection();
    });
  }, [updateActiveSection]);

  useEffect(() => {
    document.body.classList.add(theme.name);

    return () => {
      document.body.classList.remove(theme.name);
    };
  }, [theme.name]);

  useEffect(() => {
    updateActiveSection();

    window.addEventListener("scroll", scheduleActiveUpdate, {
      passive: true,
    });
    window.addEventListener("resize", scheduleActiveUpdate);
    window.addEventListener("hashchange", scheduleActiveUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleActiveUpdate);
      window.removeEventListener("resize", scheduleActiveUpdate);
      window.removeEventListener("hashchange", scheduleActiveUpdate);

      if (scrollFrame.current) {
        cancelAnimationFrame(scrollFrame.current);
      }
    };
  }, [scheduleActiveUpdate, updateActiveSection]);

  const changeTheme = () => {
    setTheme((currentTheme) =>
      currentTheme.name === "dark" ? themes.light : themes.dark
    );
  };

  const isPresentationActive = activeSection === "presentation";

  return (
    <nav className="navbar" aria-label={t("nav.navigation")}>
      <ul className="navbar-nav">
        <li className="logo">
          <a
            href="#presentation"
            className={`nav-link${isPresentationActive ? " is-active" : ""}`}
            aria-label={t("nav.introduction")}
            aria-current={isPresentationActive ? "location" : undefined}
          >
            <FontAwesomeIcon icon={faCode} className="fa-primary" />
            <span className="logo-text">{t("nav.logo")}</span>
          </a>
        </li>

        {navItems.map((item) => (
          <NavLink
            key={item.section}
            {...item}
            label={t(`nav.${item.label}`)}
            activeSection={activeSection}
          />
        ))}

        <li className="nav-item language-item">
          <button
            type="button"
            className="nav-link language-switcher"
            aria-label={t(language === "en" ? "nav.selectJa" : "nav.selectEn")}
            title={t(language === "en" ? "nav.selectJa" : "nav.selectEn")}
            onClick={() => i18n.changeLanguage(language === "en" ? "ja" : "en")}
          >
            <FontAwesomeIcon
              icon={faLanguage}
              className="fa-primary"
              aria-hidden="true"
            />
            <span className="link-text language-options" aria-hidden="true">
              <span
                lang="en"
                className={language === "en" ? "is-selected" : undefined}
              >
                {t("nav.en")}
              </span>
              <span className="language-divider">|</span>
              <span
                lang="ja"
                className={language === "ja" ? "is-selected" : undefined}
              >
                {t("nav.ja")}
              </span>
            </span>
          </button>
        </li>
        <li className="nav-item" id="changeTheme">
          <button
            type="button"
            className="nav-link"
            onClick={changeTheme}
            aria-label={t(
              theme.name === "dark" ? "nav.switchLight" : "nav.switchDark"
            )}
          >
            <FontAwesomeIcon icon={theme.icon} className="fa-primary" />
            <span className="link-text">{t(`nav.${theme.text}`)}</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
