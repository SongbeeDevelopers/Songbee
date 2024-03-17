import React from "react";

import '../JrLandingPage.css'

function JrOfferSection() {

  return (
    <div className="jr-offer-bg">
      <div className="jr-offer">
        <h2>What do we offer?</h2>

        <div className="jr-offer-items">
          <div className="jr-offer-item">
            <img src="/junior/music-notes.png"/>
            <div>
              <h3>Subscription</h3>
              <p>A monthly subscription with custom learning songs based on your child's provided needs.</p>
            </div>
          </div>

          <div className="jr-offer-item">
            <img src="/junior/music-notes.png"/>
            <div>
              <h3>Custom Song</h3>
              <p>Individual custom songs.</p>
            </div>
          </div>

          <div className="jr-offer-item">
            <img src="/junior/music-notes.png"/>
            <div>
              <h3>Both</h3>
              <p>Learning Guides to supplement the custom songs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JrOfferSection
