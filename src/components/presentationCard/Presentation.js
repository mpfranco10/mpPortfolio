import React from "react";
import "./Presentation.css";
import image1 from "../../assets/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Presentation() {
  return (
    <div className="presentation" id="presentation">
      <div className="flexbox-container" id="presentation-div">
        <div className="flexbox-item">
          <img className="profile-pic" src={image1} alt="Maria Franco" />
        </div>
        <div className="flexbox-item">
          <div className="my-description">
            <p>
              {" "}
              <span className="emoji wave" role="img" aria-label="waveEmoji">
                👋
              </span>
              Hi there! I'm
            </p>
            <p className="name-h1">
              María Franco{" "}
              <span className="emoji" role="img" aria-label="sunflowerEmoji">
                🌻
              </span>
            </p>
            <p>
              A{" "}
              <strong>
                Software Developer{" "}
                <span className="emoji" role="img" aria-label="programmerEmoji">
                  👩‍💻
                </span>
              </strong>{" "}
              passionate about Front-End Development. I am enthusiastic about
              developing engaging user experiences, and I am eager to learn new
              things everyday.
            </p>
          </div>
        </div>
      </div>
      <div className="flexbox-container">
        <div className="flexbox-item">
          <p>
            {" "}
            <FontAwesomeIcon icon={faLocationDot} className="fa-primary" />
            &nbsp; Bogotá, Colombia &nbsp;&nbsp;&nbsp;&nbsp;
          </p>
        </div>
        <div className="flexbox-item">
          <p>
            {" "}
            <FontAwesomeIcon icon={faEnvelope} className="fa-primary" />
            &nbsp; mpfrancog@outlook.com &nbsp;&nbsp;&nbsp;&nbsp;
          </p>
        </div>
        <div className="flexbox-item">
          <a
            href="https://www.linkedin.com/in/mariapaulafrancoguzman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="fa-primary contact-icon"
            />
          </a>
          <a
            href="https://github.com/mpfranco10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="fa-primary contact-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
