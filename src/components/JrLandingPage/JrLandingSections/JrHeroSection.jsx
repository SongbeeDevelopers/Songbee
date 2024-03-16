import React from "react";

import GetStartedButton from "../GetStartedButton/GetStartedButton";

import '../JrLandingPage.css';


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

      </div>
    </>
  )

}

export default HeroSectionJR;