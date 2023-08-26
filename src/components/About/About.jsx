import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact, faSass } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const [theClassName, setTheClassName] = useState('text-animate-hover');

  useEffect(() => {
    setTimeout(() => {
      setTheClassName('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            charArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            charClassName={theClassName}
            idx={15}
          />
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim debitis
          adipisci nemo. Vitae deserunt odit omnis quam nesciunt, voluptatem
          fugit.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim debitis
          adipisci nemo. Vitae deserunt odit omnis quam nesciunt, voluptatem
          fugit.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim debitis
          adipisci nemo. Vitae deserunt odit omnis quam nesciunt, voluptatem
          fugit.
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cube-spinner">
          <div className="face1">
            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
          </div>

          <div className="face2">
            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
          </div>

          <div className="face3">
            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
          </div>

          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
          </div>

          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
          </div>

          <div className="face6">
            <FontAwesomeIcon icon={faSass} color="#c69" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
