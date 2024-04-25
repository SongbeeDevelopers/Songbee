import React from "react";

import '../JrLandingPage.css'


function JrMoreThanMusicSection() {

  return (
    <div className="jr-mtjm-bg">
      <div className="jr-mtjm">
        <h2>More Than Just Music</h2>

        <div className="jr-mtjm-items">
          <div className="jr-mtjm-item">
            <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076610/Songbee/music-notes_meuusw.png"/>
            <div>
              <h3>Step by Step</h3>
              <p>A bi monthly learning pack delivery, designed by experts to help your baby with the skills they need most.</p>
            </div>
          </div>

          <div className="jr-mtjm-item">
            <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076610/Songbee/music-notes_meuusw.png"/>
            <div>
              <h3>Offer Support</h3>
              <p>Learning and Play guides provided to make the most of your learning pack and optimize your child's learning!</p>
            </div>
          </div>

          <div className="jr-mtjm-item">
            <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076610/Songbee/music-notes_meuusw.png"/>
            <div>
              <h3>Both</h3>
              <p>Learning Guides to supplement the custom songs.</p>
            </div>
          </div>
        </div>

        <button id="more-than-music-btn" className="jr-landing-btn">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default JrMoreThanMusicSection
