import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import MainButton from "./Button";

function HowSongBeeWorks() {
  return (
    <div className="works">
      <h2>How Songbee works</h2>

      <div className="works-images">
        <div className="img-one">
          <img src="/img1.gif" alt="" />
          <span>1</span>
          <p>
            Click Start Your Song and follow the steps for a smooth journey to
            personalize your song.
          </p>
        </div>
        <div className="arrows-one">
          <img src="/arrows.png" alt="" />
        </div>
        <div className="img-two">
          <img src="/img2.gif" alt="" />
          <span>2</span>
          <p>
            Sit back and relax! Your artist will write, record, and produce your
            custom song.
          </p>
        </div>
        <div className="arrows-two">
          <img src="/arrows.png" alt="" />
        </div>
        <div className="img-three">
          <img src="/img3.gif" alt="" />
          <span>3</span>
          <p>Enjoy your studio-quality song delivered in 7 days or less.</p>
        </div>
      </div>
      <MainButton/>
      <div className="beesButton">
          <img src="/bee-button.png" alt="" />
        </div>
    </div>

  );
}

export default HowSongBeeWorks;
