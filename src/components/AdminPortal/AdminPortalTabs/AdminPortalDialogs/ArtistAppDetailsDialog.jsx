import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AudioButton from "../../../JoinArtistPage/AudioButton";

function ArtistBioPage({ artist }) {

const { id } = useParams();
const dispatch = useDispatch();
const artistGenre = useSelector(store => store.fetchGenres);
  
    return artist ?(
        <>
        <div className="imgBox">
           <div className="content">
            <img src={artist.photo} alt="Artists images" /> 
           <div className="nameHeader">
               <h2>{artist && artist.name}</h2>
               <h4 className="location">{artist.location}</h4>
               {/* <p className="subHeader">Pop, Hip hop</p>  */}
               <div className="socialLinks">
                <div className="instagram">
                   <a href={artist.instagram_link} >
                    <img src="/Social-images/instagram-link.png" alt="Artist Instagram" />
                   </a>
                </div>
                <div className="spotify">
                <a href={artist.streaming_link}>
                   <img src="/Social-images/spotify-img.png" alt="Artist Spotify" />
                </a>
                </div>
                <div className="website">
                <a href={artist.website}>
                   <img src="/Social-images/artist-website.png" alt="Artist Website" />
                </a>
                </div>
               <div className="community-button">
               </div>
            </div> 
           </div>
           {/* <h2>Bio</h2> */}
           <h4 className="bio">{artist.bio}</h4>
         </div>
        </div>
        <div className="songListWrapper">
       <div className="songTable">
           <div className="tableHeader">
               <div className="headerItem"> 
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
               {/* <div className="songItems">
                 {[1, 2, 3].map((index) => {
                    const sampleSong = artist[`sample_song_${index}`];
                  return sampleSong && (

                   <div className="audioFiles" key={index}>  
                        <AudioButton url={sampleSong} />
                       {console.log('Logging sampleSong:', sampleSong)}
                
                       {artist.genres.map((genre) => (
                            <p>{genre.genre}</p>
                       ))}
                      
                   </div>
                   
                       );
                    })}
                   
               </div> */}
           </div>
       </div>
   </div>
        
     </>
     
    ) : null;
}

export default ArtistBioPage;