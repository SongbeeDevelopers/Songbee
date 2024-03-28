import React from "react"

import "../JrLandingPage.css";


function HowSongbeeJrWorks() {
  return (
    <div className="how-jr-works-box">

      <div className="jr-works-header">
        <h2>How It Works</h2>
        <h5>Easy as 1.. 2.. Songbee!</h5>
      </div>

      <div className="jr-works-arrows-and-bees">
        <img src="/junior/Bee.png"/>
        <img src="/junior/Bee.png"/>
      </div>

      <div className="jr-works-arrows-and-bees">
        <img src="/junior/dotted-arrow.png"/>
        <img src="/junior/dotted-arrow.png"/>
      </div>

      <div className="jr-works">

        <div className="jr-works-item">

          <div className="jr-works-item-header">
            <div className="jr-works-number">
              <h2>1</h2>
            </div>
            <h3>Enter in your Child's Age</h3>
          </div>
        </div>

        <div className="jr-works-item">
          <div className="jr-works-item-header">
            <div className="jr-works-number">
              <h2>2</h2>
            </div>
            <h3>Select your Learning Pack</h3>
          </div>
        </div>

        <div className="jr-works-item">
          <div className="jr-works-item-header">
            <div className="jr-works-number">
              <h2>3</h2>
            </div>
            <h3>Learn!</h3>
          </div>
        </div>
        
      </div>

      <div className="jr-works">
        <p>Our learning packs are based on age and are created with your child's development in mind.</p>
        <p>We will provide recommendations for the best learning pack based on age. We know every child develops at different rates so you also have the option to select a different Learning Pack as well!</p>
        <p>Enjoy your new teaching tools! Check out our provided learning and play guides. </p>
      </div>
      <br/>
      <button className="jr-landing-btn">
        Get Started!
      </button>

      <img className="jr-works-beehive" src="/junior/beehive.png"/>

    </div>
  )
}

export default HowSongbeeJrWorks