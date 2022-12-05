import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Presentation from './components/presentationCard/Presentation';
import Experience from './components/experienceCard/Experience';

function App() {
  return (
    <div className='Home'>
      <NavBar></NavBar>
      <div className="App">

        <Presentation/>
        <Experience/>
      </div>
    </div>
  );
}

export default App;
