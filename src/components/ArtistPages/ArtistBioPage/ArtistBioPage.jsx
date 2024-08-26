import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import AudioButton from "../AudioButton";

import { Button } from "@mui/material";
import "./ArtistBioPage.css";
import "../../App/App.css"


export default function ArtistBioPage() {

   const dispatch = useDispatch();
   const history = useHistory();

   const artist = useSelector(store => store.currentArtist);
   const requestData = useSelector((store) => store.requestData);

   const handleArtist = (e) => {
      e.preventDefault();
      history.push('/order');

      dispatch({
         type: "SET_REQUEST_DATA",
         payload: { ...requestData, artist: artist.id },
      });
   }


   return (
      <>
         <div className="imgBox flexCol">
            <div className="content flexRow">

               <img src={artist.photo} alt="Artists images" className="bio-photo" />
               <div className="nameHeader flexCol">
                  <h2>{artist && artist.artist_name}</h2>
                  <h4 className="location">{artist.location}</h4>

                  <div className="socialLinks">
                     <div className="instagram">
                        <a href={artist.instagram_link} target="_blank">
                           <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714071882/Songbee/instagram-link_f6urma.png" alt="Artist Instagram" />
                        </a>
                     </div>
                     <div className="spotify">
                        <a href={artist.streaming_link} target="_blank">
                           <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714071890/Songbee/spotify-img_nlukbm.png" alt="Artist Spotify" />
                        </a>
                     </div>
                     <div className="website">
                        <a href={artist.website} target="_blank">
                           <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714071878/Songbee/artist-website_s1wuuu.png" alt="Artist Website" />
                        </a>
                     </div>
                  </div>

                  <Button variant="contained"
                     onClick={handleArtist}
                     sx={{ height: 35, width: 200, backgroundColor: "#feaf17", color: "black" }}
                  >Start a song with me
                  </Button>
                  <p>
                     {artist.genres && artist.genres.map((genre) => (
                        <span>
                           {genre.genre}
                           {artist.genres.indexOf(genre) !== artist.genres.length-1 && `, `}
                        </span>
                     ))}
                  </p>
               </div>
            </div>
            <div className="bio">
               <h4>{artist.bio}</h4>
            </div>
         <div className="songListWrapper">
            <h3 className="title">Song Portfolio:</h3>

            <div className="songList">
               <div className="songItems">
                  {[1, 2, 3].map((index) => {
                     const sampleSong = artist[`sample_song_${index}`];
                     const songTitle = artist[`song_title_${index}`];

                     return sampleSong && (
                        <div className="audioFiles">
                           <div className="artistCommunityBtns">
                              <AudioButton url={sampleSong} />
                              <p className="songTitles" key={index}>{songTitle}</p>
                              {console.log('sampleSong', sampleSong)}
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
         </div>

      </>
   )
}
