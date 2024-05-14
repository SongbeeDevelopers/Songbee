import React from "react";

import "../JrBenefits.css";


export default function BenefitsCognitive() {
  return (
    <div className="beEmotional bcCognitive">

      <div className="be-right bc-right">
        <h2>Cognitive</h2>

        <img src="/junior/3years/SI-final/cognitive-be.png" alt="" />

        <a className="be-link jr-landing-btn" target="_blank"
          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5618809/"
        > References
        </a>
      </div>

      <div className="be-left bc-left">
        <div className="be-text bc-text">
          <p>
            The cognitive and neurological benefits to music learning are
            profound. Learning with music helps children develop many important
            skills one of which is executive function. Executive function
            includes: planning, list making, self control, self management, time
            management, and organization.
          </p>
        </div>

        <button className="jr-landing-btn">Contact Us</button>
      </div>

    </div>
  );
}
