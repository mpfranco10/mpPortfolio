import React from 'react';
import './Presentation.css';
import image1 from "../../assets/me.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Presentation() {

    return (<div className='presentation' id='presentation'>
        <div className='flexbox-container' id='presentation-div'>
            <div className='flexbox-item'>
                <img className="profile-pic" src={image1} alt="Maria Franco Photo"  loading="eager"/>
            </div>
            <div className='flexbox-item'>
                <div className='my-description'>
                    <p>Hi there! I'm</p>
                    <p className='name-h1'>María Franco</p>
                    <p>A <strong>Software Developer</strong> passionate about Front-End Development. I am enthusiastic about developing engaging user experiences, and I am eager to learn new things everyday.</p>
                    <p>I'm currently working at <a href='https://www.consensus.com/' target='_blank'>Consensus Cloud Solutions</a> as a Full Stack Developer.</p>
                </div>
            </div>
        </div>
        <div className='flexbox-container'>
            <div className='flexbox-item'>
                <p> <FontAwesomeIcon icon={faLocationDot} className="fa-primary" />&nbsp; Bogotá, Colombia &nbsp;&nbsp;&nbsp;&nbsp;</p>
            </div>
            <div className='flexbox-item'>
                <p> <FontAwesomeIcon icon={faEnvelope} className="fa-primary" />&nbsp; mpfrancog@outlook.com &nbsp;&nbsp;&nbsp;&nbsp;</p>
            </div>
            <div className='flexbox-item'>
                <a href='https://www.linkedin.com/in/mariapaulafrancoguzman/'  target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} className="fa-primary contact-icon" />
                </a>
                <a href='https://github.com/mpfranco10' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} className="fa-primary contact-icon" />
                </a>
            </div>

        </div>



    </div>);

}

export default Presentation;