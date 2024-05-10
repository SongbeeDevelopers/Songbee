import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function EveryAgeSection() {

  const history = useHistory()

  return (
    <div className="every-age-every-stage">

      <h2>Every Age, Every Stage</h2>

      <img className="everyagesinglenote" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1715296594/Songbee/singlenote_rcohvc.png" />
      <img className="everyagenotegroup" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1715296594/Songbee/notegroup_w9e1dg.png" />
      <img className="everyagelooparrow" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1715296594/Songbee/looparrow_ksr0j2.png" />

      <button id="explore" className="jr-landing-btn" onClick={() => history.push('/learning-packs')}>
        Explore!
      </button>
    </div>
  )
}

export default EveryAgeSection
