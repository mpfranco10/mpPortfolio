import React, { useCallback, useEffect, useRef, useState } from "react";
import "./navBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCode,
  faGears,
  faGraduationCap,
  faLaptopCode,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const themes = {
  dark: {
    name: "dark",
    icon: faSun,
    text: "Light Mode",
  },
  light: {
    name: "light",
    icon: faMoon,
    text: "Dark Mode",
  },
};

const navItems = [
  {
    section: "skills",
    label: "Skills",
    icon: faGears,
  },
  {
    section: "experience",
    label: "Experience",
    icon: faBriefcase,
  },
  {
    section: "education",
    label: "Education",
    icon: faGraduationCap,
  },
  {
    section: "projects",
    label: "Projects",
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
    <nav className="navbar" aria-label="Portfolio navigation">
      <ul className="navbar-nav">
        <li className="logo">
          <a
            href="#presentation"
            className={`nav-link${isPresentationActive ? " is-active" : ""}`}
            aria-label="MF — Introduction"
            aria-current={isPresentationActive ? "location" : undefined}
          >
            <FontAwesomeIcon icon={faCode} className="fa-primary" />
            <span className="logo-text">MF</span>
          </a>
        </li>

        {navItems.map((item) => (
          <NavLink key={item.section} {...item} activeSection={activeSection} />
        ))}

        <li className="nav-item" id="changeTheme">
          <button
            type="button"
            className="nav-link"
            onClick={changeTheme}
            aria-label={`Switch to ${theme.text.toLowerCase()}`}
          >
            <FontAwesomeIcon icon={theme.icon} className="fa-primary" />
            <span className="link-text">{theme.text}</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
