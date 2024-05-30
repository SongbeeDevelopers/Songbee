import React from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AudioButton from "../ArtistPages/AudioButton";
import ArtistBioPage from "../ArtistPages/ArtistBioPage/ArtistBioPage";

import "../ArtistPages/ArtistBioPage/ArtistBioPage.css";
import "./RequestDetails.css"


function RequestDetailsArtistBio() {

  const dispatch = useDispatch();
  const history = useHistory();

  const requestData = useSelector((store) => store.currentRequest);
  const artist = useSelector(store => store.currentArtist);

  const handleArtist =(e) => {
    e.preventDefault();
    history.push('/order');
  
    dispatch({
      type: "SET_REQUEST_DATA",
      payload: { ...requestData, artist: artist.id},
    });
  }
  const handleTip = () => {
    dispatch({ type: "FETCH_TIP_CHECKOUT"})
  }

  return artist ?(
    <>
    <div className="tip-button-div" onClick={handleTip}>
      <button className="tip-button-button">Click Here to Tip Your Artist!</button>
    </div>
    <ArtistBioPage />
 </>
 
) : null;
}

export default RequestDetailsArtistBio;