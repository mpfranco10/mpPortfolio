import React from "react";
import "./Bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faSun,
  faBriefcase,
  faGraduationCap,
  faMoon,
  faLaptopCode,
  faGears,
} from "@fortawesome/free-solid-svg-icons";

const themes = {
  dark: { theme: "dark", icon: faSun, text: "Light Mode" },
  light: { theme: "light", icon: faMoon, text: "Dark Mode" },
};
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.dark,
      activeSection: "presentation",
    };
    let theme = this.state.theme;
    const bodyClass = document.body.classList;
    bodyClass.add(theme.theme);
  }

  componentDidMount() {
    this.updateActiveSection();
    window.addEventListener("scroll", this.scheduleActiveUpdate, {
      passive: true,
    });
    window.addEventListener("resize", this.scheduleActiveUpdate);
    window.addEventListener("hashchange", this.scheduleActiveUpdate);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scheduleActiveUpdate);
    window.removeEventListener("resize", this.scheduleActiveUpdate);
    window.removeEventListener("hashchange", this.scheduleActiveUpdate);
    cancelAnimationFrame(this.scrollFrame);
  }

  scheduleActiveUpdate = () => {
    if (this.scrollFrame) return;
    this.scrollFrame = requestAnimationFrame(() => {
      this.scrollFrame = null;
      this.updateActiveSection();
    });
  };

  updateActiveSection = () => {
    const sections = [
      "presentation",
      "skills",
      "experience",
      "education",
      "projects",
    ];
    let activeSection = "presentation";
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (
        section &&
        section.getBoundingClientRect().top <= window.innerHeight * 0.3
      ) {
        activeSection = id;
      }
    });
    if (
      window.scrollY > 0 &&
      window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
    ) {
      activeSection = "projects";
    }
    if (activeSection !== this.state.activeSection)
      this.setState({ activeSection });
  };

  linkProps = (section, label) => ({
    className: `nav-link${
      this.state.activeSection === section ? " is-active" : ""
    }`,
    "aria-label": label,
    "aria-current":
      this.state.activeSection === section ? "location" : undefined,
  });

  changeTheme = () => {
    var current = this.state.theme.theme;
    var next = this.state.theme.theme === "dark" ? "light" : "dark";
    const bodyClass = document.body.classList;
    bodyClass.replace(current, next);
    this.setState({ theme: themes[next] });
  };

  render() {
    return (
      <nav className="navbar" aria-label="Portfolio navigation">
        <ul className="navbar-nav">
          <li className="logo">
            <a
              href="#presentation"
              {...this.linkProps("presentation", "MF — Introduction")}
            >
              <FontAwesomeIcon icon={faCode} className="fa-primary" />
              <span className="logo-text">MF</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" {...this.linkProps("skills", "Skills")}>
              <FontAwesomeIcon icon={faGears} className="fa-primary" />
              <span className="link-text">Skills</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#experience"
              {...this.linkProps("experience", "Experience")}
            >
              <FontAwesomeIcon icon={faBriefcase} className="fa-primary" />
              <span className="link-text">Experience</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#education" {...this.linkProps("education", "Education")}>
              <FontAwesomeIcon icon={faGraduationCap} className="fa-primary" />
              <span className="link-text">Education</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" {...this.linkProps("projects", "Projects")}>
              <FontAwesomeIcon icon={faLaptopCode} className="fa-primary" />
              <span className="link-text">Projects</span>
            </a>
          </li>
          <li className="nav-item" id="changeTheme">
            <button
              type="button"
              className="nav-link"
              onClick={this.changeTheme}
              aria-label={`Switch to ${this.state.theme.text.toLowerCase()}`}
            >
              <FontAwesomeIcon
                icon={this.state.theme.icon}
                className="fa-primary"
              />
              <span className="link-text">{this.state.theme.text}</span>
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
