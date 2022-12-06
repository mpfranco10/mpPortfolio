import React from 'react';
import './Skills.css';
import jsImage from "../../assets/js.svg";
import reactImage from "../../assets/react.svg";
import javaImage from "../../assets/java.svg";
import htmlImage from "../../assets/html.svg";
import cssImage from "../../assets/css.svg";
import sqlImage from "../../assets/sql.svg";
import angularImage from "../../assets/angular.svg";
import performanceImage from "../../assets/performance.svg";
import grailsImage from "../../assets/grails.svg";
import pythonImage from "../../assets/python.svg";
import Bubble from '../Bubble';

function Skill(props) {
    return (<div className='skill'>
        <img src={props.icon} className='skill-image' alt={props.text}/>
        <p className='skill-text'>{props.text}</p>
    </div>);
}

function Skills() {
    return (
        <div className='skills' id='skills'>
            <p className='title'>Skills</p>
            <div className='skills-icon-container'>
                <Skill icon={jsImage} text='Javascript'></Skill>
                <Skill icon={reactImage} text='React'></Skill>
                <Skill icon={performanceImage} text='Web performance'></Skill>
                <Skill icon={javaImage} text='Java'></Skill>
                <Skill icon={htmlImage} text='HTML'></Skill>
                <Skill icon={cssImage} text='CSS'></Skill>
                <Skill icon={sqlImage} text='SQL'></Skill>
                <Skill icon={angularImage} text='Angular'></Skill>
                <Skill icon={grailsImage} text='Grails/Groovy'></Skill>
                <Skill icon={pythonImage} text='Python'></Skill>
            </div>
            <div id='languages'>
                <Bubble>
                    <p><strong>Languages</strong></p>
                    <ul>
                        <li><strong>English:</strong>&nbsp;  Advanced level (C1) – TOEFL iBT 110/120</li>
                        <li><strong>Spanish:</strong>&nbsp;  Native level</li>
                        <li><strong>Japanese:</strong>&nbsp;  Intermediate level</li>
                    </ul>
                </Bubble>
            </div>
        </div>
    );
}

export default Skills;