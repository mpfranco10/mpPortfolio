import React from "react";
import "./Education.css";

function Education() {
  return (
    <section
      className="education"
      id="education"
      aria-labelledby="education-heading"
    >
      <h2 className="education-heading" id="education-heading">
        <span className="emoji" role="img" aria-label="graduation cap">
          🎓
        </span>
        Education
      </h2>

      <div className="education-list">
        {/* University of Tsukuba */}
        <article className="education-card">
          <p className="education-period">2025 - Present</p>

          <div className="education-details">
            <header className="education-header">
              <h3>University of Tsukuba - Japan</h3>
              <p className="education-degree">M.S. in Informatics</p>
            </header>

            <div className="education-description">
              <p className="education-highlight">MEXT Scholar</p>

              <p>
                Research focused on Kansei Engineering, User Experience (UX),
                and User-Centered Web Design, exploring how digital experiences
                can better respond to users' perceptions and needs.
              </p>
            </div>
          </div>
        </article>

        {/* Universidad de los Andes */}
        <article className="education-card">
          <p className="education-period">2015 - 2020</p>

          <div className="education-details">
            <header className="education-header">
              <h3>Universidad de los Andes - Colombia</h3>
              <p className="education-degree">Dual B.S. Degrees</p>
            </header>

            <div className="education-description">
              <ul className="education-degrees">
                <li>Systems and Computing Engineering</li>
                <li>Electronics Engineering</li>
              </ul>

              <p className="education-minor">Minor in Machine Learning</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Education;
