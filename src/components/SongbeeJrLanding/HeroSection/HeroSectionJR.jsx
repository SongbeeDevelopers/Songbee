import React from "react";

import GetStartedButton from "../GetStartedButton/GetStartedButton";

import './HeroSectionJR.css';


function HeroSectionJR() {

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
          <GetStartedButton />
        </div> 

        {/* section with try button */}
        <div className="hero-try-section">
          <div className="hero-try-contents">
            <div className="hero-try-text">
              <h2>Custom Learning Songs</h2>
              <p>Join the world of!</p>
              <GetStartedButton id='jr-hero-try-it' />
            </div>
            <img className="baby-maracas" src="/junior/baby-maracas.png"/>
          </div>
        </div>

      </div>
    </>
  )

}

export default HeroSectionJR;