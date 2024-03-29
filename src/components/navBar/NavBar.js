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
    };
    let theme = this.state.theme;
    const bodyClass = document.body.classList;
    bodyClass.add(theme.theme);
  }

  componentDidMount() {}

  changeTheme = () => {
    var current = this.state.theme.theme;
    var next = this.state.theme.theme === "dark" ? "light" : "dark";
    const bodyClass = document.body.classList;
    bodyClass.replace(current, next);
    this.setState({ theme: themes[next] });
  };

  render() {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faCode} className="fa-primary" />
              <span className="logo-text">MF</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              <FontAwesomeIcon icon={faGears} className="fa-primary" />
              <span className="link-text">Skills</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#experience" className="nav-link">
              <FontAwesomeIcon icon={faBriefcase} className="fa-primary" />
              <span className="link-text">Experience</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#education" className="nav-link">
              <FontAwesomeIcon icon={faGraduationCap} className="fa-primary" />
              <span className="link-text">Education</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">
              <FontAwesomeIcon icon={faLaptopCode} className="fa-primary" />
              <span className="link-text">Projects</span>
            </a>
          </li>
          <li className="nav-item" id="changeTheme" onClick={this.changeTheme}>
            <a href="#" className="nav-link">
              <FontAwesomeIcon
                icon={this.state.theme.icon}
                className="fa-primary"
              />
              <span className="link-text">{this.state.theme.text}</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
