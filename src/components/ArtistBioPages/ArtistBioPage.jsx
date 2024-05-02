import React from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AudioButton from "../JoinArtistPage/AudioButton";

import "./ArtistBioPages.css";

function ArtistBioPage() {

const { id } = useParams();
const dispatch = useDispatch();
const history = useHistory();

useEffect(() => {
        dispatch({
            type: 'FETCH_CURRENT_ARTIST',
            payload: id})
      }, [id])

const artist = useSelector(store => store.currentArtist);
const requestData = useSelector((store) => store.requestData);

const artistGenre = useSelector(store => store.fetchGenres);
console.log("id", id)

console.log("artist", artist)

const handleArtist =(e) => {
  e.preventDefault();
  history.push('/order')

  dispatch({
    type: "SET_REQUEST_DATA",
    payload: { ...requestData, artist: artist.id},
  });
}
  

    return artist ?(
        <>
        <div className="imgBox">
           <div className="content">
            <img src={artist.photo} alt="Artists images" /> 
           <div className="nameHeader">
               <h2>{artist && artist.name}</h2>
               <h4 className="location">{artist.location}</h4>
               <div className="socialLinks">
                <div className="instagram">
                   <a href={artist.instagram_link} >
                    <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714071882/Songbee/instagram-link_f6urma.png" alt="Artist Instagram" />
                   </a>
                </div>
                <div className="spotify">
                <a href={artist.streaming_link}>
                   <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714071890/Songbee/spotify-img_nlukbm.png" alt="Artist Spotify" />
                </a>
                </div>
                <div className="website">
                <a href={artist.website}>
                   <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714071878/Songbee/artist-website_s1wuuu.png" alt="Artist Website" />
                </a>
                </div>
               <div onClick={handleArtist}>
                 <button className="community-button"> Start a song with me</button>
               </div>
            </div> 
           </div>
           <h4 className="bio">{artist.bio}</h4>
         </div>
        </div>
        <div className="songListWrapper">
           <div className="tableHeader">
               <div className="headerItem"> 
                   <div className="title">
                      Title
                       
                   </div>
               </div>
               <div className="headerItem"> 
                   <div className="genre">
                       Genre
                   </div>
               </div>
           </div>
           
           <div className="songList">
               <div className="songItems">
                 {[1, 2, 3].map((index) => {
                    const sampleSong = artist[`sample_song_${index}`];
                    const songTitle = artist[`song_title_${index}`];
                  return sampleSong && (

                   <div className="audioFiles" key={index}> 
                   <div className="songTitles">
                    <h3>{songTitle}</h3>
                      <div className="artistCommunityBtns">
                        <AudioButton url={sampleSong} />
                       {console.log('Logging sampleSong:', sampleSong)}
                      </div>
                   </div>
                   <div className="genres">
                       {artist.genres.map((genre) => (
                            <h3>{genre.genre}</h3>
                       ))} 
                     </div>    
                   </div>
                   
                       );
                    })}
                
               </div>
           </div>
   </div>
        
     </>
     
    ) : null;
}

export default ArtistBioPage;