import React from "react";

import "../JrLandingPage.css";


function BenefitsSection() {

  return (
    <>
      <div className="every-age-every-stage">
        <button id="explore" className="jr-landing-btn">
          Explore!
        </button>
      </div>
      <div className="jr-benefits-bg">


        <div className="jr-benefits">
          <h2>The Benefits</h2>

          <img src="/junior/benefits.png" />
        </div>
      </div>
    </>
  )
}

export default BenefitsSection;
