import React from 'react';
import './Presentation.css';
import image1 from "../../assets/me.jpg";

function Presentation() {

    return (<div className='presentation'>
        <div className='flexbox-container'>
            <div className='flexbox-item'>
                <p className='name-h1'>Maria Franco</p>
            </div>
            <div className='flexbox-item'>
                <img className="profile-pic" src={image1} alt="Maria Franco Photo"/>
            </div>
        </div>
        <div className='flexbox-container'>
            <div className='flexbox-item'>
                <div className='bubble'>Full Stack Developer y falta agregar mas texto blablablablablabla blablablablablabla blablablablablabla blablablablablabla blablablablablabla blablablablablabla blablablablablabla blablablablablabla blablablablablabla blablablablablabla</div>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
    </div>);

}

export default Presentation;