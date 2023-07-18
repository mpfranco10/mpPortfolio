import React from "react";
import "./Projects.css";
import test from "../../assets/reactMarvel.jpg";
import hero from "../../assets/hero.jpg";
import tictactoe from "../../assets/tictactoe.jpg";

function Projects() {
  return (
    <div className="projects" id="projects">
      <p className="title">
        <span className="emoji" role="img" aria-label="catEmoji">
          📲
        </span>
        Projects
      </p>
      <p>
        I'm currently in the process of developing more personal projects. Here
        are some projects that I have worked on:
      </p>
      <hr />
      <div className="projectsContainer">
        <div className="project">
          <p>
            <strong>Tic Tac Toe:</strong>&nbsp; Developed a web page using React
            hooks and Typescript, allowing the user to play Tic Tac Toe. The
            board announces the next player, the winner of the game, and allows
            resetting the board to start a new game.
          </p>

          <div className="link-container">
            <img
              className="projectImg"
              width="492"
              height="658"
              border="0"
              align="center"
              src={tictactoe}
              alt=""
            />
          </div>

          <p>
            Check the &nbsp;
            <a
              href="https://github.com/mpfranco10/ticTacToe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github repo
            </a>
            &nbsp; or the &nbsp;
            <a
              href="https://mpfranco10.github.io/ticTacToe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              live page
            </a>
          </p>
        </div>
        <div className="project">
          <p>
            <strong>React Marvel Hooks:</strong>&nbsp; Developed a web page
            using React hooks, that allows the user to search a hero by his
            name. It uses a hook to debounce the input, and shows the result
            provided by the Marvel API.{" "}
            <strong>Currently refactoring it</strong>
          </p>

          <div className="link-container">
            <a href={test} target="_blank" rel="noopener noreferrer">
              <img
                className="projectImg"
                border="0"
                align="center"
                src={hero}
                alt=""
              />
            </a>
          </div>

          <p>
            Check the &nbsp;
            <a
              href="https://github.com/mpfranco10/marvel-hooks"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github repo
            </a>
            &nbsp; or the &nbsp;
            <a
              href="https://mpfranco10.github.io/marvel-hooks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              live page
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
