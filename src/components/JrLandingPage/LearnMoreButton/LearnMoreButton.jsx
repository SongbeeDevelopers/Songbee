import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import './LearnMoreButton.css'

function LearnMoreButton() {

  const history = useHistory()

  const learnMore = () => {
    history.push('/songbeejr') // needs to change to the actual destination
  }

  return (
    <button className="jr-learn-more-btn" onClick={learnMore}>Learn More</button>
  )

}

export default LearnMoreButton
