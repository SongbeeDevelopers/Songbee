import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import './GetStartedButton.css'

function GetStartedButton() {

  const history = useHistory()

  const getStarted = () => {
    history.push('/songbeejr') // needs to change to the actual destination
  }

  return (
    <button className="jr-get-started-btn" onClick={getStarted}>Get Started</button>
  )

}

export default GetStartedButton
