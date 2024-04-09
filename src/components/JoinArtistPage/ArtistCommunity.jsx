import React from "react";
import { Link } from "react-router-dom";

import "./JoinArtistPage.css";

function ArtistCommunity() {
  return (
    <div className="artist-community">
      <div className="artist-left">
        <div className="community-heading">
          <h2>Welcome to <span className="bee-color">Songbee</span></h2> <h3>Our Artist Community</h3>
        </div>
        <h3 className="sub-heading"> 
          Pick from one of our artists to record a custom made song just for you!
        </h3>
        <div className="artist-container">
          <div className="artist-slider">
            <div className="artist-slide">
              <div className="artist-card">
              <img className="artistSlide-img" src="michael-photo.jpeg" alt="Michael Leferve" />
              <Link to="/michaelBio"><h3 className="artist-title">Michael LeFerve</h3></Link>
              <p className="artistSlide-description"> Singer Songwriter</p>
               <div className="audio-wrapper">
                <audio className="audio" controls>
                <source src="/Singer Songwriter Michael LeFevre (1).mp3" type="audio/mpeg" />
                </audio>
                </div>
                </div>
                <div className="artist-card">
                  <img className="artistSlide-img" src="berch.jpeg" alt="Berch" />
                  <Link to="/BerchBio"><h3 className="artist-title">Berch</h3></Link>
                  <p className="artistSlide-description"> Pop, Hip Hop</p>
                  <div className="audio-wrapper">
                  <audio className="audio" controls>
                <source src="/Berch.mp3" type="audio/mpeg" />
                </audio>
                </div>
                </div>
                {/* <div className="artist-card">
                  <img className="artistSlide-img" src="hannah_ruti.jpeg" alt="Hannah" />
                  <Link to="/HannahBio"><h3 className="artist-title">Hannah Ruti</h3></Link>
                  <p className="artistSlide-description">Pop, Singer Songwriter</p>
                  <div className="audio-wrapper">
                  <audio className="audio" controls>
                <source src="/01 Basics New Mix 3.mp3" type="audio/mpeg" />
                </audio>
                </div>
                </div> */}
                <div className="artist-card">
                  <img className="artistSlide-img" src="perrin_photo.jpeg" alt="Perrin" />
                  <Link to="/PerrinBio"><h3 className="artist-title">Perrin  Xthona </h3></Link>
                  <p className="artistSlide-description">Pop, Singer Songwriter</p>
                  <div className="audio-wrapper">
                  <audio className="audio" controls>
                <source src="/01 Basics New Mix 3.mp3" type="audio/mpeg" />
                </audio>
              </div>
            </div>
          </div>
         </div>
        </div>

         {/* Write, record, and produce custom songs. Get started now and earn a
          real income. */}   
        {/* <div className="community-button">
          <Link to="/artist-process">Start a song with me</Link>
        </div> */}
      </div> 
    </div>
    
    
  );
}

export default ArtistCommunity;
