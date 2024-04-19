import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function SchoolsInspirationHeader() {
  return (
    <>
      <div className="nav lp-header">
        <div className="nav-left">
          <Link to="/artists" className="nav-links">
            Subscription Packs
          </Link>

          <Link to="/artists" className="nav-links">
            Shop
          </Link>
          <Link to="/artists" className="nav-links">
            Gifting
          </Link>

          <Link to="/artists" className="nav-links">
            Schools & Groups
          </Link>
        </div>
        <Link to="/home">
          <img className="nav-title" src="junior/jr-logo.png" />
        </Link>
        <div className="nav-right">
          <button className="jr-landing-btn">Get Started</button>
        </div>
      </div>
    </>
  );
}

export default SchoolsInspirationHeader;
