import React from "react";
import "./JrBenefits.css";
import JrFaq from "../JrFaq.jsx/JrFaq";
import JrFooter from "../JrFooter/JrFooter";
import BenefitsHero from "./JrBenefitsSections/BenefitsHero";
import BenefitsEmotional from "./JrBenefitsSections/BenefitsEmotional";
import BenefitsCognitive from "./JrBenefitsSections/BenefitsCognitive";
import BenefitsSocial from "./JrBenefitsSections/BenefitsSocial";
import BenefitsBehavioral from "./JrBenefitsSections/BenefitsBehavioral";

function DiveIntoBenefits() {
  return (
    <div>
      <BenefitsHero />
      <BenefitsEmotional />
      <BenefitsCognitive />
      <BenefitsSocial />
      <BenefitsBehavioral />
      <JrFaq />
    </div>
  );
}

export default DiveIntoBenefits;
