import React from "react";

import './HeroSectionJR.css';


function HeroSectionJR() {
  return (
    <>
      <div className="hero-section">

        {/* page header */}
        <div className="hero-header-section">
          <div className="hero-header">
            <div className="header-flex">
              <h1 className="music">
                Music <span className="forEvery">For<br />Every</span> Milestone
              </h1>
              <img src="/junior/Bee.png" className="beeImg" />
            </div>
            
            <img className="underlineImg" src="/junior/underline.png"/>
            <p className="pTag">Reach your child's developmental <br />milestones with custom learning songs</p>
          </div>
        </div>

        <div className="every-age-every-stage">
          <button className="button">Get Started</button>
        </div> 
        {/* <img src="/junior/every-age-every-stage.png" className="startSong" /> */}

        {/* <div className="hero-try-section">

        </div> */}

          {/* <img src="/junior/polygon-bg.png" /> */}



          {/* <img src="/junior/bee.gif" /> */}

      </div>
    </>



  )

}

export default HeroSectionJR;