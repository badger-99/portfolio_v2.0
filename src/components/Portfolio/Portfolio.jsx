import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./portfolio.scss"
import portfolioData from "../../Data/portfolio.json";

const Portfolio = () => {
  const word = 'Portfolio'.split('');
  const [theClassName, setTheClassName] = useState('text-animate-hover');

  useEffect(() => {
    const timer = setTimeout(() => {
      setTheClassName('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer)
    }
  });

  const renderPortfolio = (portfolio) => { 
    return (
      <div className="images_container">
      {
        portfolio.map((project, idx) => {
          return (
            <div className="image_box" key={idx}>
              <img
                src={project.Cover}
                alt={project.Title}
                className="portfolio-image"
              />
              <div className="content">
                <p className="title">{project.Title}</p>
                <h4 className="description">{project.Description}</h4>
                <button className="btn" onClick={() => window.open(project.Demo)}>
                  View
                </button>
              </div>
            </div>
          );
        })
      }
      </div>
    )
  }
  
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
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
export default Portfolio