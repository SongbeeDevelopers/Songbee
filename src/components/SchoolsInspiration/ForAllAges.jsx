import React from "react";
import "./SI.css";
import { Link } from "react-router-dom";
function ForAllAges() {
  return (
    <div className="faa">
      <h2>For All Ages</h2>
      <div className="faaCards">
        <div className="faaCard">
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073509/Songbee/babyOne_qtdodv.jpg" alt="" />
          <p>0-5 years old</p>
        </div>

        <div className="faaCard">
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074253/Songbee/19-20_months_guoogw.jpg" alt="" />
          <p>K-2nd grade</p>
        </div>

        <div className="faaCard">
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074259/Songbee/allAges3_wmmjfx.jpg" alt="" />
          <p>3rd-5th grade</p>
        </div>

        <div className="faaCard">
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074273/Songbee/FAA_yhsjyu.jpg" alt="" />
          <p>6th-8th grade</p>
        </div>

        <div className="faaCard">
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074265/Songbee/AllAges9_bn3fm5.jpg" alt="" />
          <p>9th & up!</p>
        </div>
      </div>
      <button className="jr-landing-btn">Get Started</button>
    </div>
  );
}

export default ForAllAges;