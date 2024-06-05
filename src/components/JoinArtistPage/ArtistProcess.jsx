import React from "react";
import { Link } from "react-router-dom";  

import FaqArtistPage from '../InfoPages/FaqArtistPage';

import "./JoinArtistPage.css";

function ArtistProcess() {

  return (

    <><div className="artist-process">
      <div className="process-top">
        <h2>What is the process?</h2>
        <div className="process-cards">
          <div className="process-card">
            <div className="process-card-image">
              <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070488/Songbee/pointing_g8gccd.png" alt="" />{" "}
            </div>{" "}
            <h3>1. Claim an Order</h3>
            <p>
              You will be notified of any requests in your genre. Claim open requests through the artist portal.
            </p>
          </div>
          <div className="process-card">
            <div className="process-card-image">
              <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070485/Songbee/pencil_gmgebm.png" alt="" />{" "}
            </div>{" "}
            <h3>2. Create the Song</h3>
            <p>
              Write, record, and produce the song after carefully reviewing
              customer provided details. Once completed, submit via the artist portal for review.
            </p>{" "}
          </div>
          <div className="process-card">
            <div className="process-card-image">
              <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070481/Songbee/mula_pta28l.png" alt="" />
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
        <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070464/Songbee/dj_xigtxb.jpg" alt="" />

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
    </div><div className="faq-section">
        <FaqArtistPage />
      </div></>
  );
}

export default ArtistProcess;
