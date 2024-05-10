import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function WhyJunior() {

  const history = useHistory()

  return (
    <div className="why-junior">
      <div className="why-junior-text">
        <h2>Play to Learn</h2>

        <p>
          Join the world of music based learning and engage both sides of your child's brain promote development, and have a happy child.
          <br/><br/>
          Our learning packs help develop your child's cognitive, language, motor, and social skills with play.
        </p>

        <button id="try-it" className="jr-landing-btn" onClick={() => history.push('/learning-packs')}>
          Try It!
        </button>
      </div>
      <div className="why-junior-video">
        {/* video goes here */}
        <img src=""/>
      </div>
    </div>
  )
}

export default WhyJunior
