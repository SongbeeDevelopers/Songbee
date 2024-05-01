import React from "react";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AudioButton from './AudioButton';

// import FaqArtistPage from '../InfoPages/FaqArtistPage';



import "./JoinArtistPage.css";


function ArtistCommunity() {

  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch({
      type: 'FETCH_ALL_ARTISTS',
      payload: id})
  }, [id])
  const artistCommunity = useSelector(store => store.allArtists)
  console.log(artistCommunity)






  return (
   
    artistCommunity &&
    <div className="communityPage">
        <div className="community-heading">
          <h2>Welcome to <span className="bee-color">Songbee</span></h2> <h3>Our Artist Community</h3>
        </div>
        <h3 className="sub-heading"> 
          Pick from one of our artists to record a custom made song just for you!
        </h3>
        <div className="artist-container">
              <div className="artist-card">
               {artistCommunity.map((artist, i) => (
                <><img className="artistSlide-img" key={i} onClick={() => history.push(`/ArtistBioPage/${artist.id}`)}
                   src={artist.photo} alt="Artist photos" />   
                   <div className="artistCommunityBtn">
                     <AudioButton  url={artist.sample_song_1} /> 
                   </div>
                   </>        
                             
               ))}  
              </div>     
        </div>
        {/* <div className="faq-section">
         <FaqArtistPage />
        </div> */}
     
   </div>
    
    );
    
  }

export default ArtistCommunity;
