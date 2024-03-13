import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import './HeroSectionJR.css';



function HeroSectionJR() {

  const history = useHistory()

  const getStarted = () => {
    history.push('/songbeejr') // needs to change to the actual destination
  }

  return (
    <>
      <div className="hero-section">

        {/* page header */}
        <div className="hero-header-section">
          <div className="hero-header">
            <div className="header-flex">
              <h1 className="header-text-music">
                Music <span className="header-text-forEvery">For<br />Every</span> Milestone
              </h1>
              <img src="/junior/Bee.png" className="beeImg" />
            </div>
            
            <img className="underlineImg" src="/junior/underline.png"/>
            <p className="pTag">Reach your child's developmental <br />milestones with custom learning songs</p>
          </div>
        </div>

        {/* get started box */}
        <div className="every-age-every-stage">
          <button className="hero-button" onClick={getStarted}>Get Started</button>
        </div> 

        {/* section with try button */}
        <div className="hero-try-section">
          <div className="hero-try-contents">
            <div className="hero-try-text">
              <h2>Custom Learning Songs</h2>
              <p>Join the world of!</p>
              <button className="hero-button" id="hero-try-it" >Try It</button>
            </div>
            <img className="baby-maracas" src="/junior/baby-maracas.png"/>
          </div>
        </div>

      </div>
    </>
  )

}

export default HeroSectionJR;