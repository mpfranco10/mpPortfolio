import React from 'react';
import './Education.css';
import Bubble from '../Bubble';

function Education() {
    return (
        <div className='education' id='education'>
            <p className='title'>Education</p>
            <div>
                <Bubble>
                    <p> <i>2015 - 2020</i></p>
                    <p><strong>Univesidad de los Andes - Colombia</strong></p>
                    <p><strong>Systems and Computational Engineer</strong></p>
                    <p>Relevant courses: </p>
                    <ul>
                        <li>Software architecture</li>
                        <li>Enterprise architecture</li>
                        <li>Database administration and design</li>
                        <li>programming with web technologies</li>
                        <li>Design and analysis of algorithms</li>
                    </ul>
                </Bubble>
                <Bubble>
                    <p> <i>2015 - 2020</i></p>
                    <p><strong>Univesidad de los Andes - Colombia</strong></p>
                    <p><strong>Electronics engineer</strong></p>
                    <p>Relevant courses: </p>
                    <ul>
                        <li>Digital systems architecture and design</li>
                        <li>Control systems analysis</li>
                        <li>Robotics</li>
                        <li>Industrial automatization</li>
                        <li>Signal processing</li>
                    </ul>
                </Bubble>
            </div>

        </div>
    );
}

export default Education;