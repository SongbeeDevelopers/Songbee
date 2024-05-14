import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function JrGuessworkSection() {

  const history = useHistory()

  return (
    <div className="guesswork-bg">

      <div className="guesswork-flex">
        <div className="guesswork-text-container">
          <h2>Take all of the <br /> guess work out <br /> of playtime</h2>
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076666/Songbee/underline-white_q22rqi.png" />
        </div>

        <button
          id="guesswork-btn"
          className="jr-landing-btn guesswork-btn"
          onClick={() => history.push('/learning-packs')}
        > Get Started!
        </button>
      </div>

      <img className="guesswork-baby-saxophone" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076517/Songbee/baby-saxophone_n5nloc.png" />
      <img className="guesswork-honeycomb" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076575/Songbee/empty-honeycomb_ivocdn.png" />

    </div>
  )
}

export default JrGuessworkSection
