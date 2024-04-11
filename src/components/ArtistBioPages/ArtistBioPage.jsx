import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import "./ArtistBioPages.css";

function ArtistBioPage() {

const { id } = useParams();
const dispatch = useDispatch();
const artist = useSelector(store => store.currentArtist)

useEffect(() => {
    dispatch({
        type: 'FETCH_CURRENT_ARTIST',
        payload: id})
  }, [id])

  

  console.log("artist", artist)
  

    return (
        <>
        <div className="imgBox">
           <div className="content">
            <img src={artist.photo} alt="Berch" /> 
           <div className="nameHeader">
               <h2>{artist && artist.name}</h2>
               <h4 className="location">{artist.location}</h4>
               <p className="subHeader">Pop, Hip hop</p> 
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
                   <Link to="/artist-process">Start a song with me</Link>
               </div>
            </div> 
           </div>
           
           <p className="bio">{artist.bio}</p>
         </div>
        </div>
        <div className="songListWrapper">
       <div className="songTable">
           <div className="tableHeader">
               <div class="headerItem"> 
                   <div className="title">
                      Title
                       {artist.title}
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
                           <source src={artist.sample_song_1} type="audio/mpeg" />
                       </audio>
                        {console.log('Logging the sample_song_1:',artist.sample_song_1)}
                       {/* 👇 We will need to map for genres and have it render here */}
                       <p>Singer songwriter</p>
                   </div>
                   <div className="audioFiles">
                       <audio controls>
                           <source src={artist.sample_song_2} type="audio/mpeg" />
                       </audio>
                       {console.log('Logging sample_song_2:', artist.sample_song_2)}
                       <p>Singer songwriter</p>
                   </div>
                   <div className="audioFiles">
                       <audio controls>
                           <source src={artist.sample_song_3} type="audio/mpeg" />
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

export default ArtistBioPage;