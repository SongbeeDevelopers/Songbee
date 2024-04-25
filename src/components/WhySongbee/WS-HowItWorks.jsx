import React from "react";
import "./WhySongbee.css";
import WsFeatures from "./WS-Features";
import WsMusic from "./WS-Music";

function WsHowItWorks() {
  return (
    <div className="how-it-works">
      <img
        className="works-comb"
        src="/junior/whySongbee/howitworks-honey.png"
        alt=""
      />
      <img
        className="works-honey"
        src="/junior/whySongbee/Honeyjar.png"
        alt=""
      />
      <div className="works-header">
        <h2>How it works</h2>
        <p>
          Easy as 1, 2, 3... <span className="highlight">Songbee</span> !
        </p>
      </div>
      <div className="works-cards">
        <div className="works-card">
          <img src="/junior/whySongbee/one-howitworks.png" alt="" />
          <p>Contact Us!</p>
        </div>

        <div className="works-card">
          <img src="/junior/whySongbee/two-howitworks.png" alt="" />
          <p>
            Speak with one of our experts to help select and design a program
            for your needs.
          </p>
        </div>

        <div className="works-card">
          <img src="/junior/whySongbee/three-howitworks.png" alt="" />
          <p>Motivate and Inspire with your new teaching tools!</p>
        </div>
      </div>
    </div>
  );
}

export default WsHowItWorks;
