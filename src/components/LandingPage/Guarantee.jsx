import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import MainButton from "./Button";
import { Link } from "react-router-dom";
function Guarantee() {
  return (
    <div className="bee-guarantee">
      <div className="bee-inner-background">
        <h2>
          Song <span className="guarantee">Guarantee</span>
        </h2>

        <div className="guarantee-text">
          <p>
            With our <Link className="guarantee-link" to="/guarantee" > Songbee Quality Guarantee </Link>, you can be reassured that your
            song will be a hit! Feel empowered to rework, rewrite, and team up
            with your artist at no additional fee.
          </p>
          <p>
            Notify us via email of any edit requests or notes to your artist.
          </p>
          <p>Contact us at hello@songbee.com</p>
        </div>
        <img className="guarantee-image" height={200} width={200} src="/guarantee-photo.jpeg" alt="" />
        <MainButton />
      </div>
    </div>
  );
}

export default Guarantee;