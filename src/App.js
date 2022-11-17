import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Presentation from './components/presentationCard/Presentation';

function App() {
  return (
    <div className='Home'>
      <NavBar></NavBar>
      <div className="App">

        <Presentation/>
      </div>
    </div>
  );
}

export default App;
