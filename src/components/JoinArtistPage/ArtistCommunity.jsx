import React from "react";
import { Link } from "react-router-dom";

import "./JoinArtistPage.css";

function ArtistCommunity() {
  return (
    <div className="artist-community">
      <div className="artist-left">
        <div className="community-heading">
        <h2>Join <span className="bee-color">Songbee</span></h2> <h3>Our Artist Community</h3></div>
        <p>
          Write, record, and produce custom songs. Get started now and earn a
          real income.
        </p>
        <div className="community-button">
          <Link to="/artist-process">Apply Now</Link>
        </div>
      </div>

      <div className="artist-right">

        <img src="/artist-right.jpeg" alt="" />
      </div>
    </div>
  );
}

export default ArtistCommunity;
