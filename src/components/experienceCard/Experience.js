import React from 'react';
import './Experience.css';
import Bubble from '../Bubble';

function Experience() {

    return (<div className='experience' id='experience'>
        <p className='title'>Work experience</p>
        <div>
            <div >
                <Bubble className='exp-bubble'>
                    <p> <i>October 2020 - Present</i></p>
                    <p><strong>Consensus Cloud Solutions</strong></p>
                    <p><strong>Full Stack Developer</strong></p>
                    <p>Development of new features and maintenance support for <strong>eFax Corporate</strong>, a cloud faxing web project used by multiple clients around the world.
                        Development and maintenance of endpoints that expose eFax Corporate functionality.
                    </p>
                    <p>Contract through ICONOI SAS (Colombia) and Looi Consulting (USA). </p>
                    <p>Remote work for Consensus Cloud Solutions (based in Los Angeles, California). </p>
                    <div className='skills-container'>
                        <div className='skill-bubble'>Javascript</div>
                        <div className='skill-bubble'>Grails</div>
                        <div className='skill-bubble'>Groovy</div>
                        <div className='skill-bubble'>jQuery</div>
                        <div className='skill-bubble'>Angular</div>
                        <div className='skill-bubble'>React</div>
                        <div className='skill-bubble'>IntelliJ</div>
                        <div className='skill-bubble'>SCRUM</div>
                        <div className='skill-bubble'>Jira</div>
                        <div className='skill-bubble'>Java</div>
                        <div className='skill-bubble'>Spring</div>
                        <div className='skill-bubble'>Git</div>
                    </div>
                    <p>For this job I use a different <a href='https://github.com/ne-mpfranco' target='_blank'>Github account</a>, feel free to check my contribution activity.</p>
                </Bubble>
            </div>
            <div>
                <Bubble className='exp-bubble'>
                    <p> <i>July 2020 - October 2020</i></p>
                    <p><strong>ICONOI SAS</strong></p>
                    <p><strong>Software Developer</strong></p>
                    <p>Front-end development for an application to report national level health events in Colombia. Helped to develop a laboratory module
                        to log lab results for several patients around the country.
                    </p>
                    <div className='skills-container'>
                        <div className='skill-bubble'>Javascript</div>
                        <div className='skill-bubble'>Vue.js</div>
                        <div className='skill-bubble'>React</div>
                        <div className='skill-bubble'>Git</div>
                    </div>
                </Bubble>
            </div>
            <div>
                <Bubble className='exp-bubble'>
                    <p> <i>April 2019 – October 2019</i></p>
                    <p><strong>ICONOI SAS</strong></p>
                    <p><strong>Software Analyst</strong></p>
                    <p>Developed improvements on the company’s databases.
                        Elaborated software architecture diagrams and corrections. Contributed
                        to the development of a business intelligence web site, using tools such
                        as Telerik, Microsoft SSAS and SSIS. Contributed to a business
                        intelligence Project (cube), using Microsoft Analysis Services.
                    </p>
                    <div className='skills-container'>
                        <div className='skill-bubble'>Javascript</div>
                        <div className='skill-bubble'>SQL</div>
                        <div className='skill-bubble'>Java</div>
                        <div className='skill-bubble'>Telerik</div>
                        <div className='skill-bubble'>Microsoft Analysis</div>
                    </div>
                </Bubble>
            </div>
            <div>
                <Bubble className='exp-bubble'>
                    <p> <i>August 2016 – May 2020</i></p>
                    <p><strong>Universidad de los Andes</strong></p>
                    <p><strong>Teaching assistant</strong></p>
                    <p>Helped college freshmen to develop computational thinking skills through
                        programming different applications. Graded students’ performance in
                        class during the semester and helped to solve their questions in class
                        time. Helped students to identify the strategies to use depending on the
                        type of the problem being considered.</p>
                    <p>Assisted in the following subjects:</p>
                    <ul>
                        <li>Introduction to programming / <i>January 2020 – May 2020</i></li>
                        <li>Object oriented programming (Basic and intermediate) / <i>August 2016 – Dec 2019</i></li>
                        <li>Technologic infrastructure fundaments / <i>August 2017 – May 2018</i></li>
                    </ul>
                    <div className='skills-container'>
                        <div className='skill-bubble'>Python</div>
                        <div className='skill-bubble'>Java</div>
                        <div className='skill-bubble'>C</div>
                        <div className='skill-bubble'>Assembly</div>
                    </div>
                </Bubble>
            </div>
        </div>
    </div>);

}

export default Experience;