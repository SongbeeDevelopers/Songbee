import React from "react";

import StartSongButton from "../../FilterBar/StartSongButton/StartSongButton";

import '../LandingPage.css'


function HowSongBeeWorks() {

  return (
    <div className="works-section">

      <h2>How Songbee Works</h2>

      <div className="works-arrows">
        <img className="arrows-one" src="/arrows.png"/>
        <img className="arrows-two" src="/arrows.png"/>
      </div>

      <div className="works-images">
        <div className="img-one">
          <img src="/img1.gif"/>
          <span>1</span>
          <p>
            Click Start Your Song and follow the steps for a smooth journey to
            personalize your song.
          </p>
        </div>

        <div className="img-two">
          <img src="/img2.gif"/>
          <span>2</span>
          <p>
            Sit back and relax! Your artist will write, record, and produce your
            custom song.
          </p>
        </div>
        
        <div className="img-three">
          <img src="/img3.gif"/>
          <span>3</span>
          <p>Enjoy your studio-quality song delivered in 7 days or less.</p>
        </div>
      </div>

      <StartSongButton />

      <div className="beesButton">
          <img src="/bee-button.png"/>
      </div>

    </div>

  );
}

export default HowSongBeeWorks;
