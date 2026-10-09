import React from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Presentation from "./components/presentationCard/Presentation";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div className="Home">
      <NavBar></NavBar>
      <div className="App">
        <Presentation />
        <Skills />
        <Experience />
        <Education />
        <Projects />
      </div>
    </div>
  );
};

export default App;
