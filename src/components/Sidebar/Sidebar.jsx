import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
  faX,
  faBars,
  faClose
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import './sidebar.scss';
import { useState } from 'react';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="alfred" />
      </Link>
      <nav className={showNav? 'mobile-show' : ''}>
        <NavLink exact="true" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>

        <NavLink className="about-link" exact="true" to="/about">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>

        <NavLink className="portfolio-link" exact="true" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} />
        </NavLink>
        
        <NavLink className="contact-link" exact="true" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color='#ffd700'
          size='3x'
          className='close-icon'
        />
      </nav>
      <ul className='social-links'>
        <li>
          <a
            target="_blank"
            rel="noreferer"
            href="https://www.linkedin.com/in/alfredmkg"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferer"
            href="https://github.com/badger-99"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferer"
            href="https://twitter.com/AlfredMkg"
          >
            <FontAwesomeIcon icon={faXTwitter} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferer"
            href="https://medium.com/@alfred.mkg"
          >
            <FontAwesomeIcon icon={faMedium} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color='#ffd700'
        size='3x'
        className='hamburger-icon'
      />
    </div>
  );
};
export default Sidebar;
