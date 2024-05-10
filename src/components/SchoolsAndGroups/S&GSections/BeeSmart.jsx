import React from "react";
import "../SchoolsAndGroups.css";

import { Link } from "react-router-dom";
function BeeSmart() {
  return (
    <div className="beeSmart">
      <div className="bs-left">
        <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073867/Songbee/beeser_zuazmb.webp" alt="" />
        <div className="bs-leftText">
          <h2>
         <span className="bs-highlight">Bee</span>    Smart! <br />
            Work <span className="bs-highlight">Together!</span>
          </h2>
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076528/Songbee/Bee_e8eelp.png" alt="" />
        </div>
      </div>
      <div className="bs-right">
        <div className="bs-rightCard">
          <div className="bs-rightImage">
            <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073946/Songbee/beeSmartHand_uxdjcu.png" alt="" />
          </div>
          <p>Motivates children to participate and engage. </p>
        </div>

        <div className="bs-rightCard">
          <div className="bs-rightImage">
            <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073977/Songbee/beesmartHead_rhk9pw.webp" alt="" />
          </div>
          <p>Build emotional intelligence with tools that work.</p>
        </div>

        <div className="bs-rightCard">
          <div className="bs-rightImage ">
            <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073923/Songbee/beeSmartBook_dn2uor.webp" alt="" />
          </div>
          <p>Carefully crafted with teachers in mind.</p>
        </div>
      </div>
    </div>
  );
}

export default BeeSmart;
