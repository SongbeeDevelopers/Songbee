import React from "react";
import "./WI.css";

function WiHero() {
  return (
    <div className="wi-hero">
      <div className="wi-left">
        <h1>
     
          <span className="highlight-white">Music</span>-based Learning <br /> Programs
        </h1>
        <p>
          Songbee offers skillfully crafted <br />
          <span className="highlight">BEE</span> programs designed for:
        </p>
        <img src="/junior/MBLP/Schools Inspiration (7).png" alt="" />
        <button className="jr-landing-btn">Contact Us</button>
      </div>
      <div className="wi-right">
        <img src="/junior/MBLP/shutterstock_141409255.jpg" alt="" />
      </div>
      <img src="/junior/YellowLine.png" alt="" className="yellowLine wihero-yellowLine" />
    </div>
  );
}

export default WiHero;
