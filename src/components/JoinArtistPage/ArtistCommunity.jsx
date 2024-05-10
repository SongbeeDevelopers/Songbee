import React from "react";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import AudioButton from "./AudioButton";

import "./JoinArtistPage.css";

function ArtistCommunity() {

  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  // Use state for the pop up for artist name, song and genre when play button is clicked
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    dispatch({
      type: "FETCH_ALL_ARTISTS",
      payload: id,
    });
  }, [id]);
  const artistCommunity = useSelector((store) => store.allArtists);
  console.log(artistCommunity);

  const handleSong = (artist) => {
    console.log('sup')
    // const {song_title_1, artist_name, genres} = artist;
    setShowPopUp(!showPopUp);
    setSelectedSong(artist);
  };

  const SongDisplay = () => {
    if (showPopUp === true) {
      console.log("selectedSong", selectedSong);
      return (
        <div className="popup">
          <div className="pop-up-content">
          <h3>{selectedSong.song_title_1}</h3>
          <p>Artist: {selectedSong.artist_name}</p>
          <p>Genre: {selectedSong.genres[0].genre}</p>
          <button onClick={closePopUp}>Close</button>
          </div>
        </div>
      );
    } else {
      return false;
    }
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };

  return (
    artistCommunity && (
      <div className="communityPage">
        <div className="community-heading">
          <h3>Our Artist Community</h3>
        </div>
        <h3 className="sub-heading">
          Pick from one of our artists to record a custom made song just for
          you!
        </h3>
        <div className="artist-container">
          <div className="artist-card">
            {artistCommunity.map((artist, i) => (
              <>
                <img
                  className="artistSlide-img"
                  key={i}
                  onClick={() => history.push(`/ArtistBioPage/${artist.id}`)}
                  src={artist.photo}
                  alt="Artist photos"
                />
                <div className="artistCommunityBtn">
                  <AudioButton 
                    url={artist.sample_song_1}
                    popup={true}
                    setShowPopUp={setShowPopUp}
                    setSelectedSong={setSelectedSong}
                    artist={artist} /> 
                </div>
              </>
            ))}
          </div>

          <SongDisplay/>
        </div>
      </div>
    )
  );
}

export default ArtistCommunity;
