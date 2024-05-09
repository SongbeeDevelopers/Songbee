import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import "../JrLandingPage.css";


function BenefitsSection() {

  const history = useHistory()

  return (
    <>
      <div className="jr-benefits-bg">
        <div className="jr-benefits">
          <h2>The Benefits</h2>
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076540/Songbee/benefits_r52ee9.png" />
        </div>
      </div>
    </>
  )
}

export default BenefitsSection;
