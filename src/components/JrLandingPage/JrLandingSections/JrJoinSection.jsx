import React from "react";

import GetStartedButton from "../GetStartedButton/GetStartedButton";


function JrJoinSection() {

  return (
    <div className="hero-try-section">

      <div className="hero-try-contents">
        <div className="hero-try-text">
          <h2>Custom Learning Songs</h2>
          <p>Join the world of!</p>
          <GetStartedButton id='jr-hero-try-it' />
        </div>

        <img className="baby-maracas" src="/junior/baby-maracas.png" />
      </div>

      <img className="try-bee" src="/junior/Bee.png"/>
    </div >
  )
}

export default JrJoinSection
