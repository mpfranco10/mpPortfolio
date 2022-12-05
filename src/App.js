import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Presentation from './components/presentationCard/Presentation';
import Experience from './components/experienceCard/Experience';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className='Home'>
      <NavBar></NavBar>
      <div className="App">

        <Presentation/>
        <Skills/>
        <Experience/>
      </div>
    </div>
  );
}

export default App;
