import React from 'react';
import './Projects.css';
import test from '../../assets/reactMarvel.jpg';
import hero from '../../assets/hero.jpg';
import tictactoe from '../../assets/tictactoe.jpg';
import picker from '../../assets/picker.JPG';
import pickerSmall from '../../assets/pickerSmall.JPG';
import countdown from '../../assets/countdown.JPG';
import countdownSmall from '../../assets/countdownSmall.JPG';
import map from '../../assets/map.JPG';
import mapSmall from '../../assets/mapSmall.JPG';
import budget from '../../assets/budget.JPG';
import budgetSmall from '../../assets/budgetSmall.JPG';
import schedule from '../../assets/schedule.JPG';

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
                        <img width="300" height="300" border="0" align="center" src={hero} alt="" loading="lazy" />
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
                    <img width="221" height="325" border="0" align="center" src={tictactoe} alt="" loading="lazy" />
                </div>
            </div>
            <hr />
            <div className='project'>
                <p><strong>TriPlanner:</strong>&nbsp; Developed a web page using React to plan my personal trips. It is currently not live due to some changes to Heroku's policies, and I am making some improvements on it.</p>
                <p>It is currently in spanish as localization is still pending to be developed.</p>
                <p>Check the &nbsp;
                    <a href='https://github.com/mpfranco10/triplanner' target="_blank">Github repo</a>.
                </p>
                <p>A demo of the application will be available after improvements are complete.</p>
                <p>Some of its functionalities are:</p>
                <ul>
                    <li>
                        <p>Allow the user to create a trip plan by choosing dates and a city</p>
                        <picture className='link-container'>
                            <source media="(max-width:1250px)" width='300' height='632' srcSet={pickerSmall} />
                            <source media="(min-width:1250px)" srcSet={picker} />
                            <img src={picker} alt="Date Picker" loading="lazy" />
                        </picture>
                    </li>
                    <li>
                        <p>Provide a countdown for the trip</p>
                        <picture className='link-container'>
                            <source media="(max-width:1250px)" srcSet={countdownSmall} />
                            <source media="(min-width:1250px)" srcSet={countdown} />
                            <img src={picker} alt="Countdown" loading="lazy" />
                        </picture>
                    </li>
                    <li>
                        <p>Search places and show them in a map (used Google Maps API), allowing the user to organize them by color.
                            The organization by color was the idea to visit the places with the same color in the same day.
                        </p>
                        <picture className='link-container'>
                            <source media="(max-width:1250px)" width='300' height='610' srcSet={mapSmall} />
                            <source media="(min-width:1250px)" srcSet={map} />
                            <img src={picker} alt="Map" loading="lazy" />
                        </picture>
                    </li>
                    <li>
                        <p>Schedule the visit to the selected places in the map.  </p>
                        <p> Using the Google Maps API, the page shows the user the time of transporation between the selected places interactively.
                            This means that the user selects one point, and the times are updated taking into account that point as a the start point.
                            The user keeps selecting points until he is happy with the path, and the page shows the total time spent in transportation.
                        </p>
                        <p>After the path is created, an event can be created. It includes a small event including the time to get to that place,
                            so the user has a real and attainable plan for his trip.
                        </p>
                        <p>This section is bigger, so please <a href={schedule} target="_blank">
                            click here to see the screenshot of this section
                        </a>.
                        </p>
                    </li>
                    <li>
                        <p>Create a budget for the trip, including total budget, conversion to another currency, creation of items with cost and quantity.
                        </p>
                        <p>The budget is interactive, so it shows the user how much money he has left when he adds elements to the table.</p>
                        <picture className='link-container'>
                            <source media="(max-width:1250px)" width='300' height='654' srcSet={budgetSmall} />
                            <source media="(min-width:1250px)" srcSet={budget} />
                            <img src={picker} alt="Budget" loading="lazy" />
                        </picture>
                    </li>
                </ul>

            </div>

        </div >
    );
}

export default Projects;