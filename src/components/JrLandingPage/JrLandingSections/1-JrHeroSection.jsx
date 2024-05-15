import React from "react";

import '../JrLandingPage.css';


function HeroSectionJR() {

  return (
    <>
      <div className="hero-section">

        {/* page header */}
        <div className="hero-header-section">
          <div className="bee-animation">

          <div className="hero-header">
            <div className="header-flex">
              <h1 className="header-text-music">
                Music <span className="header-text-forEvery">For<br />Every</span> Milestone
              </h1>
              <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076528/Songbee/Bee_e8eelp.png" className="beeImg" />
            </div>
            
            <img className="underlineImg" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076671/Songbee/underline_t5mfyz.png"/>
            <p className="pTag">Reach your child's developmental <br />milestones with custom learning songs</p>
          </div>
          </div>
        </div>

        {/* get started box */}


      </div>
    </>
  )

}

export default HeroSectionJR;