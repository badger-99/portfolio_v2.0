import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./portfolio.scss"

const Portfolio = () => {
  const word = 'Portfolio'.split('');
  const [theClassName, setTheClassName] = useState('text-animate-hover');

  useEffect(() => {
    setTimeout(() => {
      setTheClassName('text-animate-hover');
    }, 3000);
  }, []);
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            charArray={word}
            charClassName={theClassName}
            idx={15}
          />
        </h1>
      </div>
      <Loader type="pacman" />
    </>
  );
}
export default Portfolio