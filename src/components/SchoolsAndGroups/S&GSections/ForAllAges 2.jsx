import React from "react";
import "../SchoolsAndGroups.css";

import { Link } from "react-router-dom";
function ForAllAges() {
  return (
    <div className="faa">
      <h2>For All Ages</h2>
      <div className="faaCards">
        <div className="faaCard">
          <img src="/junior/2year/babyOne.jpg" alt="" />
          <p>0-5 years old</p>
        </div>

        <div className="faaCard">
          <img src="/junior/fAA/19-20 months.jpg" alt="" />
          <p>K-2nd grade</p>
        </div>

        <div className="faaCard">
          <img src="/junior/fAA/allAges3.jpg" alt="" />
          <p>3rd-5th grade</p>
        </div>

        <div className="faaCard">
          <img src="public/junior/fAA/FAA.jpg" alt="" />
          <p>6th-8th grade</p>
        </div>

        <div className="faaCard">
          <img src="/junior/fAA/AllAges9.jpg" alt="" />
          <p>9th & up!</p>
        </div>
      </div>
      <button className="jr-landing-btn">Get Started</button>
    </div>
  );
}

export default ForAllAges;
