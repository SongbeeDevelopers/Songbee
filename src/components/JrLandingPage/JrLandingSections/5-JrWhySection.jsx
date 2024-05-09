import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function WhyJunior() {

  const history = useHistory()

  return (
    <div className="why-junior">
      <div className="why-junior-text">
        <h2>Why SongbeeJr?</h2>

        <p>
          Join the world of music based learning. Music is one of the most effective teaching tools for children. 
          <br/><br/>
          It engages both sides of their brain and allows them to improve on their cognitive, communication and language, motor (fine and gross), and social and emotional skills
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
