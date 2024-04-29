import React from "react";
import "./WhySongbee.css";
import WsFeatures from "./WS-Features";
import WsMusic from "./WS-Music";

function WsHowItWorks() {
  return (
    <div className="how-it-works">
      <img
        className="works-comb"
        src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714072106/Songbee/howitworks-honey_myehca.png"
        alt=""
      />
      <img
        className="works-honey"
        src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714075108/Songbee/Honeyjar_judyw5.png"
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
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714075119/Songbee/one-howitworks_nsuld7.png" alt="" />
          <p>Contact Us!</p>
        </div>

        <div className="works-card">
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714075130/Songbee/two-howitworks_s5uoe5.png" alt="" />
          <p>
            Speak with one of our experts to help select and design a program
            for your needs.
          </p>
        </div>

        <div className="works-card">
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714075125/Songbee/three-howitworks_lx3pyz.png" alt="" />
          <p>Motivate and Inspire with your new teaching tools!</p>
        </div>
      </div>
    </div>
  );
}

export default WsHowItWorks;
