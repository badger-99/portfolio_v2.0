import { Link, NavLink } from 'react-router-dom';
import './sidebar.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faHome,
  faUser,
  faX
} from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="alfred" />
      </Link>
      <nav>
        <NavLink exact="true" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>

        <NavLink className="about-link" exact="true" to="/about">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>

        <NavLink className="contact-link" exact="true" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>
    </div>
  );
};
export default Sidebar;
