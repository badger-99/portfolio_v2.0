import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './home.scss';

const Home = () => {
  const [theClassName, setTheClassName] = useState('text-animate');
  const nameArray = ['l', 'f', 'r', 'e', 'd'];
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.'
  ];

  useEffect(() => {
    setTimeout(() => {
      setTheClassName('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={theClassName}>H</span>
          <span className={`${theClassName} _12`}>i</span>
          <span className={`${theClassName} _13`}>,</span>
          <br />
          <span className={`${theClassName} _14`}>I</span>
          <span className={`${theClassName} _15`}>'</span>
          <span className={`${theClassName} _16`}>m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            charClassName={theClassName}
            charArray={nameArray}
            idx={17}
          />
          <br />
          <AnimatedLetters
            charClassName={theClassName}
            charArray={jobArray}
            idx={24}
          />
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
