import React from 'react';
import './Projects.css';
import test from '../../assets/reactMarvel.jpg';
import hero from '../../assets/hero.jpg';
import tictactoe from '../../assets/tictactoe.jpg';

function Projects() {
    return (
        <div className='projects' id='projects'>
            <p className='title'>Projects</p>
            <p>I'm currently in the process of developing more personal projects. Here are some projects that I have worked on:</p>
            <hr />
            <div className='project'>
                <p><strong>React Marvel Hooks:</strong>&nbsp; Developed a small web page with React hooks,
                    that allows the user to search a hero by his name.
                    It uses a hook to debounce the input, and shows the
                    result provided by the Marvel API.</p>
                <p>Check the &nbsp;
                    <a href='https://github.com/mpfranco10/marvel-hooks' target="_blank">Github repo</a>
                    &nbsp; or the &nbsp;
                    <a href='https://mpfranco10.github.io/marvel-hooks/' target="_blank">live page</a>
                </p>
                <div className='link-container'>
                    <a href={test} target="_blank">
                        <p>Click the image to see a screenshot of the project</p>
                        <img width="300" height="300" border="0" align="center" src={hero} alt="" />
                    </a>
                </div>
            </div>
            <hr />
            <div className='project'>
                <p><strong>React Tic Tac Toe:</strong>&nbsp; Developed a small web page with React hooks,
                    that allows the user to play Tic Tac Toe.</p>
                <p>Check the &nbsp;
                    <a href='https://github.com/mpfranco10/ticTacToe' target="_blank">Github repo</a>
                    &nbsp; or the &nbsp;
                    <a href='https://mpfranco10.github.io/ticTacToe/' target="_blank">live page</a>
                </p>
                <p>Screenshot of the project:</p>
                <div className='link-container'>
                    <img width="221" height="325" border="0" align="center" src={tictactoe} alt="" />
                </div>
            </div>
            <hr />
            <div className='project'>
                <p><strong>Tripplaner:</strong>&nbsp; Developed a web page using React to plan my personal trips. It is currently not live due to some changes to Heroku.</p>
                <p>Some of its functionalities are:</p>
                <ul>
                    <li></li>
                </ul>
                <p>Check the &nbsp;
                    <a href='https://github.com/mpfranco10/triplanner' target="_blank">Github repo</a>.
                </p>
                <p>Screenshot of the project:</p>
                <div className='link-container'>
                    <img width="221" height="325" border="0" align="center" src={tictactoe} alt="" />
                </div>
            </div>

        </div >
    );
}

export default Projects;