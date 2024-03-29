import React from "react";
import { Link } from "react-router-dom";  

import "./JoinArtistPage.css";

function ArtistProcess() {

  return (

    <div className="artist-process">
      <div className="process-top">
        <h2>What is the process?</h2>
        <div className="process-cards">
          <div className="process-card">
            <div className="process-card-image">
              <img src="/pointing.png" alt="" />{" "}
            </div>{" "}
            <h3>1. Claim an Order</h3>
            <p>
              Orders will be emailed to you, you have 24 hours to accept or deny
              an order request.
            </p>
          </div>
          <div className="process-card">
            <div className="process-card-image">
              <img src="/pencil.png" alt="" />{" "}
            </div>{" "}
            <h3>2. Create the Song</h3>
            <p>
              Write, record, and produce the song after carefully reviewing
              customer provided details. Once completed, submit via the provided
              dropbox link.
            </p>{" "}
          </div>
          <div className="process-card">
            <div className="process-card-image">
              <img src="/mula.png" alt="" />
            </div>{" "}
            <h3>3. Get Paid</h3>{" "}
            <p>
              The revision team reviews your submission, and when it is
              accepted, you get paid the same day. Many customers add gratuity
              as well.
            </p>
          </div>
        </div>
      </div>

      <div className="process-bottom">
        <img src="/dj.jpeg" alt="" />

        <div className="process-bottom-content">
          <h3>Create Your Schedule</h3>
          <p>
            Work on your time. Accept orders when you want to. Forget the
            starving artist days and put your artistry to work. Make a real
            income while you gain a fanbase and promote your music.
          </p>
<div className="process-bottom-button">
          <Link to="/join-artist">Apply Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistProcess;
