import React from "react";
import { useMediaQuery } from "react-responsive";

import StartSongButton from "../../StartSongButton/StartSongButton";

import '../LandingPage.css'


function HowSongBeeWorks() {

  const isMobile = useMediaQuery( { query: `(max-width: 815px)`} )

  return (
    <div className="works-section">

      <h2>How Songbee Works</h2>

      <div className="works-arrows">
        <img className="arrows-one" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070452/Songbee/arrows_haoewn.png"/>
        <img className="arrows-two" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070452/Songbee/arrows_haoewn.png"/>
      </div>

      <div className="works-images">
        <div className="img-one">
          {isMobile ? <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070497/Songbee/works-mobile-1_acfrf6.png"/> : <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070474/Songbee/img1_ruz58f.gif"/> } 
          <span>1</span>
          <p>
            Click Start Your Song and follow the steps for a smooth journey to
            personalize your song.
          </p>
        </div>

        <div className="img-two">
          {isMobile ? <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070499/Songbee/works-mobile-2_kaewb8.png"/> : <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070477/Songbee/img2_y2r4ec.gif"/> } 
          <span>2</span>
          <p>
            Sit back and relax! Your artist will write, record, and produce your
            custom song.
          </p>
        </div>
        
        <div className="img-three">
          {isMobile ? <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070501/Songbee/works-mobile-3_qmanl5.png"/> : <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070478/Songbee/img3_vrgagn.gif"/> } 
          <span>3</span>
          <p>Enjoy your studio-quality song delivered in 7 days or less.</p>
        </div>
      </div>

      <StartSongButton />

      <div className="beesButton">
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070457/Songbee/bee-button_iwlxrg.png"/>
      </div>

    </div>

  );
}

export default HowSongBeeWorks;
