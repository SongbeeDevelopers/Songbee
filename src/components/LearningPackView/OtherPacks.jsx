import React from "react";
import { Link } from "react-router-dom";
function OtherPacks() {
  return (
    <div className="lp-otherPacks">
      <img
        className="lp-hero-bee lp-otherBee"
        src="/junior/dancingBeee.png"
        alt=""
      />
      <img
        src="/junior/YellowLine.png"
        alt=""
        className="yellowLine other-yellowLine"
      />
      <img className="other-beehives" src="public/junior/honeypot.png" alt="" />

      <div className="lp-packsOther">
        <h2>Other Learning Packs</h2>
        <div className="lp-dots dots-other"></div>
        <div className="lp-otherLinks">
          <Link to="/learning-packs">0-12 months</Link>
          <Link to="/learning-packs">2 Year</Link>
          <Link to="/learning-packs">3 Year</Link>
          <Link to="/learning-packs">4 Year</Link>
        </div>
        <div className="lp-otherImages">
          {" "}
          <img
            className="otherPacks-baby"
            src="public/junior/0-12/babyTwo.jpg"
            alt=""
          />
          <img className="other-honey" src="/junior/honeypot.png" alt="" />
          <img className="other-music" src="/junior/color-music-notes.png" alt="" />
        </div>

        <div>
          <button id="explore" className="jr-landing-btn">
            Explore!
          </button>
        </div>
      </div>
    </div>
  );
}

export default OtherPacks;
