import React from "react";
import { Link } from "react-router-dom";
function OtherPacks() {
  return (
    <div className="lp-otherPacks">
      <img
        className="lp-hero-bee lp-otherBee"
        src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076557/Songbee/dancingBeee_zsnlif.png"
        alt=""
      />
      <img
        src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076677/Songbee/YellowLine_kbce6u.png"
        alt=""
        className="yellowLine other-yellowLine"
      />
      <img className="other-beehives" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076586/Songbee/honeypot_hpwors.png" alt="" />

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
            src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714072908/Songbee/babyTwo_wwwfns.jpg"
            alt=""
          />
          <img className="other-honey" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076586/Songbee/honeypot_hpwors.png" alt="" />
          <img className="other-music" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076545/Songbee/color-music-notes_ouootu.png" alt="" />
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
