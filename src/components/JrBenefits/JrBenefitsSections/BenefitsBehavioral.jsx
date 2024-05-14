import React from "react";

import "../JrBenefits.css";


export default function BenefitsBehavioral() {
  return (
    <div className="beEmotional bcCognitive">

      <div className="be-right bc-right">
        <h2>Behavioral</h2>

        <img src="/junior/SI-final/behavioral-be.png" alt="" />

        <a className="be-link jr-landing-btn" target="_blank"
          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5618809/"
        > References
        </a>
      </div>

      <div className="be-left bc-left">
        <div className="be-text bc-text">
          <p>
            The cognitive and neurological benefits to music learning are profound. Learning with
            music helps children develop many important skills one of which is executive function.
            Executive function includes: planning, list making, self control, self management, time
            management, and organization.
          </p>
        </div>

        <button className="jr-landing-btn">Get Started</button>
      </div>

      <div className="ws-yellowLine benefits-yellowLine">
        <img src="/junior/YellowLine.png" alt="" className="yellowLine" />{" "}
        <img className="whysong-Bee" src="/junior/Bee.png" alt="" />
      </div>

    </div>
  );
}
