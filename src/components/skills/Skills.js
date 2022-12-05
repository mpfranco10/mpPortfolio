import React from 'react';
import './Skills.css';
import jsImage from "../../assets/js.png";

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
            </div>
        </div>
    );
}

export default Skills;