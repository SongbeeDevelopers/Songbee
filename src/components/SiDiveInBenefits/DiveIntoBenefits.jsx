import React from "react";
import "./SiBenefits.css";
import JrFaq from "../JrFaq.jsx/JrFaq";
import JrFooter from "../JrFooter/JrFooter";
import BenefitsHero from "./BenefitsHero";
import BenefitsEmotional from "./BenefitsEmotional";
import BenefitsCognitive from "./BenefitsCognitive";
import BenefitsSocial from "./BenefitsSocial";
import BenefitsBehavioral from "./BenefitsBehavioral";

function DiveIntoBenefits() {
  return (
    <div>
      <BenefitsHero />
      <BenefitsEmotional />
      <BenefitsCognitive />
      <BenefitsSocial />
      <BenefitsBehavioral />
      <JrFaq />
      <JrFooter />
    </div>
  );
}

export default DiveIntoBenefits;
