import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import "../JrBenefits.css";


export default function BenefitsHero() {
  const history = useHistory()
  return (
    <div className="benefits-hero">
      <div className="heroContents"> <h1>Dive Deeper into the Benefits</h1>
        <button onClick={() => history.push('/jrcheckout')} className="jr-landing-btn">Get Started</button>
        <img src="/junior/YellowLine.png" alt="" className="yellowLine" /></div>
    </div>
  );
}
