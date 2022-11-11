import './Bar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo, faCode } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    return (
        <nav className="navbar">
            <ul className='navbar-nav'>
            <li className='logo'>
                    <a href='#' className='nav-link'>
                        <span className='link-text'>Maria Franco</span>
                        <FontAwesomeIcon icon={faCode} className="fa-primary"/>
                    </a>
                </li>

                <li className='nav-item'>
                    <a href='#' className='nav-link'>
                        <FontAwesomeIcon icon={faHippo} className="fa-primary"/>
                        <span className='link-text'>Cats</span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link'>
                        <FontAwesomeIcon icon={faHippo} className="fa-primary"/>
                        <span className='link-text'>Dogs</span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link'>
                        <FontAwesomeIcon icon={faHippo} className="fa-primary"/>
                        <span className='link-text'>Fish</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
