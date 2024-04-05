import React from "react";
import { Link } from "react-router-dom";


function MichaelBioPage() {
    return (
     <>
     <div className="imgBox">
        <div className="content">
         <img src="michael-photo.jpeg" alt="Michael Leferve" /> 
        <div className="nameHeader">
            <h2>Michael LeFerve</h2>
            <p className="subHeader">Singer Songwriter</p>
            <div className="socialLinks">
             <div className="instagram">
                <a href="https://www.instagram.com/thefevaa/" >
                 <img src="/Social-images/instagram-link.png" alt="Michael insta" />
                </a>
             </div>
             <div className="spotify">
             <a href="https://open.spotify.com/artist/32SXond7qEk5OOXU9M8Sq7?si=MZ2frkvaR6OUOmIYwGKd5w&nd=1&dlsi=3dca887b59374406">
                <img src="/Social-images/spotify-img.png" alt="Michael spotify" />
             </a>
             </div>
            <div className="community-button">
                <Link to="/artist-process">Start a song with me</Link>
            </div>
         </div> 
        </div>
        
        <p className="bio">Michael LeFevre is the lead singer and songwriter of None The Younger and Sleepy Soul. <br/>
          While he has been writing music for well over a decade, he has been producing and recording out of his studio full time for the last 4 years.
          This has given him the experiences necessary to really perfect his craft. 
          Since his time as a full-time musician, he has been featured in Spotify and Youtube Editorial playlists, had many magazine write-ups, and accumulated millions of streams across all platforms.
          He looks forward to continuing to write and spread joy through music. 
        </p>
      </div>
     </div>
     <div className="songListWrapper">
    <div className="songTable">
        <div className="tableHeader">
            <div class="headerItem"> 
                <div className="title">
                    Title
                </div>
            </div>
            <div class="headerItem"> 
                <div className="genre">
                    Genre
                </div>
            </div>
        </div>
        <div className="songList">
            <div className="songItems">
                <div className="audioFiles">
                    <audio controls>
                        <source src="/Singer Songwriter Michael LeFevre (1).mp3" type="audio/mpeg" />
                    </audio>
                    <p>Singer songwriter</p>
                </div>
                <div className="audioFiles">
                    <audio controls>
                        <source src="/Singer Songwriter Michael LeFevre (1).mp3" type="audio/mpeg" />
                    </audio>
                    <p>Singer songwriter</p>
                </div>
            </div>
        </div>
    </div>
</div>
     
  </>
    )
}

export default MichaelBioPage;