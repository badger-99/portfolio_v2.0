import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './about.scss';
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
    </div>
  );
};
export default About;
