import React from 'react';
import './Presentation.css';

function Presentation() {
    const imageLink = 'https://media-exp1.licdn.com/dms/image/D4E03AQH1hmtxA4XFSw/profile-displayphoto-shrink_800_800/0/1666898242598?e=1674086400&v=beta&t=Xygz1rPcabfg3hyH98BONYu23jCGNwrVL7lgp3sK8_g';

    return (<div className='presentation'>
        <div className='flexbox-container'>
            <div className='flexbox-item'>
                <p className='name-h1'>Maria Franco</p>
            </div>
            <div className='flexbox-item'>
                <img className="profile-pic" src={imageLink} />
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