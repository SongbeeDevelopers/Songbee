import React from "react";

import "../JrBenefits.css";


export default function BenefitsSocial() {
  return (
    <div className="beEmotional bcSocial">

      <div className="be-left">
        <h2>Social</h2>

        <div className="be-text">
          <p>
            The cognitive and neurological benefits to music learning are profound.
            Learning with music helps children develop many important skills one of
            which is executive function. Executive function includes: planning, list
            making, self control, self management, time management, and organization.
          </p>
        </div>

        <a className="be-link jr-landing-btn" target="_blank"
          href="https://nnpa.org/education/2022/08/04/how-music-education-benefits-early-childhood-mental-health-learning/"
        > References
        </a>
      </div>

      <div className="be-right">
        <img src="public/junior/SI-final/social-pic.png" alt="" />
      </div>

    </div>
  );
}
