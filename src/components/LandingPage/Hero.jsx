import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";

function HeroSection() {
  return (
    <div className="hero">
      <h1>Custom Songs <br /> For <span className="every">Every</span> Moment</h1>
      <img src="/song.png"/>
      <p>Studio-Quality Custom Songs For Any Occasion</p>
      <button>Start Your Song</button>
    </div>
  );
}

export default HeroSection;
