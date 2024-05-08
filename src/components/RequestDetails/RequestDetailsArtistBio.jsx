import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AudioButton from "../JoinArtistPage/AudioButton";


function RequestDetailsArtistBio() {

  const { id } = useParams();
  const dispatch = useDispatch();

  const request = useSelector((store) => store.currentRequest);

  useEffect(() => {
    dispatch({
      type: 'FETCH_CURRENT_ARTIST',
      payload: request.artist_id
    })
  }, [request])

  const artist = useSelector(store => store.currentArtist);

  const artistGenre = useSelector(store => store.fetchGenres);
  console.log("id", id)
  console.log("request", request)


  console.log("artist", artist)




  return artist ? (
    <>
      <div className="imgBox song-details-artist">
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
              <div className="community-button">
                <Link to="/artist-process">Start a song with me</Link>
              </div>
            </div>
          </div>
          <h4 className="bio">{artist.bio}</h4>
        </div>
      </div>
    </>

  ) : null;
}

export default RequestDetailsArtistBio;