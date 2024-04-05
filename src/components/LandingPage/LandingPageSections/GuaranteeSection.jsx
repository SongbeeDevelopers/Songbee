import React from "react";
import { Link } from "react-router-dom";

import StartSongButton from "../../StartSongButton/StartSongButton";

import '../LandingPage.css'


function Guarantee() {

  return (
    <div className="guarantee-sky-bg">
        <div className="guarantee-img-container">
          <img className="guarantee-img" src="/guarantee-img.png"/>
          <img className="guarantee-img-bee" src="/bee-button.png"/>
        </div>
      <div className="guarantee-inner-bg">


        <h2>
          Song Guarantee
        </h2>

        <div className="guarantee-text-container">
          <p>
            With our <Link className="guarantee-link" to="/guarantee" > Songbee Quality Guarantee </Link>, you can be reassured that your
            song will be a hit! Feel empowered to rework, rewrite, and team up
            with your artist at no additional fee.
          </p>
          <p>
            Notify us via email of any edit requests or notes to your artist.
          </p>
          <p>Contact us at hello@songbee.com</p>
        </div>

        <StartSongButton />
        
      </div>
    </div>
  );
}

export default Guarantee;
