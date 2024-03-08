import React from "react";

import StartSongButton from "../StartSongButton/StartSongButton";

import './HeroSection.css'


function HeroSection() {

  return (
    <div className="hero">
      <h1>
        Custom Songs <br /> For <span className="every">Every</span> Moment
      </h1>

      <img src="/song.png" />

      <p>Studio-Quality Custom Songs For Any Occasion</p>

     <StartSongButton/>
    </div>
  );
}

export default HeroSection;