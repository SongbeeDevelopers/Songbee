import React from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import "../JrLandingPage.css";


function HowSongbeeJrWorks() {

  const history = useHistory()

  return (
    <div className="how-jr-works-box">

      <div className="jr-works-header">
        <h2>How It Works</h2>
        <h4>Easy as 1.. 2.. 3.. Songbee!</h4>
      </div>

      <div className="jr-works-arrows-and-bees">
        <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076528/Songbee/Bee_e8eelp.png" />
        <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076528/Songbee/Bee_e8eelp.png" />
      </div>

      <div className="jr-works-arrows-and-bees">
        <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076563/Songbee/dotted-arrow_ahzs2i.png" />
        <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076563/Songbee/dotted-arrow_ahzs2i.png" />
      </div>

      <div className="jr-works">

        <div className="jr-works-item">

          <div className="jr-works-item-header">
            <div className="jr-works-number">
              <h2>1</h2>
            </div>
            <div>
              <h3>Select Your Learning Pack</h3>
              <p className="jr-works-item">Our learning packs are based on age and are created with your child's development in mind.</p>
            </div>
          </div>
        </div>

        <div className="jr-works-item">
          <div className="jr-works-item-header">
            <div className="jr-works-number">
              <h2>2</h2>
            </div>
            <div>
              <h3>Listen and Absorb</h3>
              <p className="jr-works-item">Recieve your learning pack and review your play guide to make the most out of your pack.</p>
            </div>
          </div>
        </div>

        <div className="jr-works-item">
          <div className="jr-works-item-header">
            <div className="jr-works-number">
              <h2>3</h2>
            </div>
            <div>
              <h3>Play to Learn!</h3>
              <p className="jr-works-item">Enjoy your new teaching tools! Enjoy a happy baby and watch your child flourish and grow!</p>
            </div>
          </div>
        </div>
      </div>

      <button className="jr-landing-btn" onClick={() => history.push('/learning-packs')}>
        Get Started!
      </button>

      <img className="jr-works-beehive" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076534/Songbee/beehive_lzsfmu.png" />

    </div>
  )
}

export default HowSongbeeJrWorks