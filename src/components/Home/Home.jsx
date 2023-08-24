import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './home.scss';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitle} alt="developer" />
          lobodan
          <br />
          Web developer
        </h1>
        <h2>Full-stack developer</h2>
        <Link className="flat-button" to="/contact">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};
export default Home;
