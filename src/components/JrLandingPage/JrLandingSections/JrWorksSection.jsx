import React from "react"

import GetStartedButton from "../GetStartedButton/GetStartedButton";

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
            <h3>Pick the age</h3>
          </div>
          {/* <p>Choose your child's age group.</p> */}
        </div>

        <div className="jr-works-item">
          <div className="jr-works-item-header">
            <div className="jr-works-number">
              <h2>2</h2>
            </div>
            <h3>Choose Your Goals</h3>
          </div>
          {/* <p>Determine your child's custom milestones or choose from our learning options.</p> */}
        </div>

        <div className="jr-works-item">
          <div className="jr-works-item-header">
            <div className="jr-works-number">
              <h2>3</h2>
            </div>
            <h3>Enjoy!</h3>
          </div>
          {/* <p>Enjoy your new teaching tools! Check out our provided song guides.</p> */}
        </div>
        
      </div>

      <div className="jr-works">
        <p>Choose your child's age group.</p>
        <p>Determine your child's custom milestones or choose from our learning options.</p>
        <p>Enjoy your new teaching tools! Check out our provided song guides.</p>
      </div>
      <br/>
      <GetStartedButton />

      <img className="jr-works-beehive" src="/junior/beehive.png"/>

    </div>
  )
}

export default HowSongbeeJrWorks