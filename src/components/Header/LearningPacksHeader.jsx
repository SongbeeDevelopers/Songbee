import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


function LearningPacksHeader() {
  return (
    <>
      <div className="nav lp-header">
        <div className="nav-left">
          <Link to="/artists" className="nav-links">
            Subscription Kits
          </Link>

          <Link to="/artists" className="nav-links">
            Shop
          </Link>
        </div>
        <Link to="/home">
          <img className="nav-title" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076598/Songbee/jr-logo_f9dxxu.png" />
        </Link>
        <div className="nav-right">
          <button className="jr-landing-btn">Get Started</button>
        </div>
      </div>
    </>
  );
}

export default LearningPacksHeader;
