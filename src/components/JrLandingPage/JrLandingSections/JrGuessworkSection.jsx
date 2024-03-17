import React from "react";
import GetStartedButton from "../GetStartedButton/GetStartedButton";

function JrGuessworkSection() {
  return (
    <div className="guesswork-bg">
      <div className="guesswork-text-container">
        <h2>Take all of the <br/> guess work out <br/> of playtime</h2>
        <img src="/junior/underline-white.png"/>
        <GetStartedButton />
      </div>

      <img className="guesswork-baby-saxophone" src="/junior/baby-saxophone.png"/>
      <img className="guesswork-honeycomb" src="/junior/empty-honeycomb.png"/>
    </div>
  )
}

export default JrGuessworkSection
