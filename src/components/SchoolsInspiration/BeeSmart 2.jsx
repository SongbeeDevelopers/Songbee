import React from "react";
import "./SI.css";
import { Link } from "react-router-dom";
function BeeSmart() {
  return (
    <div className="beeSmart">
      <div className="bs-left">
        <img src="/junior/beeSmart/beeser.png" alt="" />
        <div className="bs-leftText">
          <h2>
         <span className="bs-highlight">Bee</span>    Smart! <br />
            Work <span className="bs-highlight">Together!</span>
          </h2>
          <img src="/junior/Bee.png" alt="" />
        </div>
      </div>
      <div className="bs-right">
        <div className="bs-rightCard">
          <div className="bs-rightImage">
            <img src="public/junior/beeSmart/beeSmartHand.png" alt="" />
          </div>
          <p>Motivates children to participate and engage. </p>
        </div>

        <div className="bs-rightCard">
          <div className="bs-rightImage">
            <img src="/junior/beeSmart/beesmartHead.png" alt="" />
          </div>
          <p>Build emotional intelligence with tools that work.</p>
        </div>

        <div className="bs-rightCard">
          <div className="bs-rightImage ">
            <img src="/junior/beeSmart/beeSmartBook.png" alt="" />
          </div>
          <p>Carefully crafted with teachers in mind.</p>
        </div>
      </div>
    </div>
  );
}

export default BeeSmart;
