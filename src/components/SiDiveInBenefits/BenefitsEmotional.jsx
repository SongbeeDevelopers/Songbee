import React from "react";
import "./SiBenefits.css";

function BenefitsEmotional() {
  return (
    <div className="beEmotional">
      <div className="be-left">
        <h2>Emotional</h2>

        <div className="be-text">
          <p>
            Music builds mental acuity in children and helps children build an
            understanding of how to process, identify, navigate, and express
            emotions leading to healthy informed choices.
          </p>
          <p>
            When a child is able to understand the emotions they feel they are
            less likely to act out, feel misunderstood, which can lead to a
            plethora of unwanted behaviors from drug use to chronic depression.
            With music based learning, a child is taught the right, kind, and
            productive way to navigate their feelings and in turn the best way
            to understand others’ as well.{" "}
          </p>
        </div>
        <a
        className="be-link jr-landing-btn"
          target="_blank"
          href="https://nnpa.org/education/2022/08/04/how-music-education-benefits-early-childhood-mental-health-learning/"
        >
          References
        </a>
      </div>

      <div className="be-right">
        <img src="/junior/SI-final/first-pic.png" alt="" />
      </div>
    </div>
  );
}

export default BenefitsEmotional;
