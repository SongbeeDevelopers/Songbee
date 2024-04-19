import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AudioButton from "../JoinArtistPage/AudioButton";

import "./ArtistBioPages.css";

function ArtistBioPage() {

const { id } = useParams();
const dispatch = useDispatch();
const artist = useSelector(store => store.currentArtist);
// const [selectedSong, setSelectedSong] = useState(null);



useEffect(() => {
    // setSelectedSong(null);
    dispatch({
        type: 'FETCH_CURRENT_ARTIST',
        payload: id})
  }, [id])
  console.log("artist", artist)

//   function for handling song selection
    // const handleSongSelect = (artist) => {
    //     setSelectedSong(artist);
    //     setSelectedSong(null);
    // }
  

  

    return artist ?(
        <>
        <div className="imgBox">
           <div className="content">
            <img src={artist.photo} alt="Artists images" /> 
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
         </div>
        </div>
        <div className="songListWrapper">
       <div className="songTable">
           <div className="tableHeader">
               <div className="headerItem"> 
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
                 {[1, 2, 3].map((index) => {
                    const sampleSong = artist[`sample_song_${index}`];
                  return sampleSong && (

                   <div className="audioFiles" key={index}>  
                        <AudioButton url={sampleSong} />
                        {/* <AudioButton url={artist.sample_song_2}/> */}
                        {/* <AudioButton url={artist.sample_song_3}/> */}
                       {/* <audio controls onClick ={() => handleSongSelect(sampleSong)}>
                           <source src={sampleSong} type="audio/mpeg" />
                       </audio> */}
                       {console.log('Logging sampleSong:', sampleSong)}
                        {console.log('Logging the sample_song_1:',artist.sample_song_1)}


                       {/* 👇 We will need to map for genres and have it render here */}
                       <p>Singer songwriter</p>
                   </div>
                       );
                    })}
               </div>
           </div>
           <h2>Bio</h2>
           <h4 className="bio">{artist.bio}</h4>
       </div>
   </div>
        
     </>
     
    ) : null;
}

export default ArtistBioPage;