import React from "react";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import AudioButton from "./AudioButton";
import FilterBar from "../FilterBar/FilterBar";

import "./JoinArtistPage.css";

function ArtistCommunity() {

  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  // Use state for the pop up for artist name, song and genre when play button is clicked
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  // This is for the audio player in the popup
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

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
    // setShowPopUp(true)
    setSelectedSong(artist);
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };

  const playBtn = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true)
    } else {
      audioRef.current.pause();
      setIsPlaying(false)
    }
    // setIsPlaying(!isPlaying)
  }
  {console.log('playBtn:', playBtn)}

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds <10 ? '0' : ""}${seconds}`
  }



  const SongDisplay = () => {
    if (showPopUp === true) {
      console.log("selectedSong", selectedSong);
      return (
        <div className="popup">
          <div className="pop-up-content">
          <h3>{selectedSong.song_title_1}</h3>
          <p>Artist: {selectedSong.artist_name}</p>
          <p>Genre: {selectedSong.genres[0].genre}</p>
          <audio ref={audioRef} src={selectedSong.sample_song_1} />
          <div className="audio-controls">
            <button onClick={playBtn}>play/pause</button>
          </div>
          {isPlaying ? "playing" : "paused"} - 
          {audioRef.current && audioRef.current.duration ? `Duration: ${formatTime(audioRef.current.duration)}`: ""}
          <progress value={audioRef.current ? audioRef.current.currentTime : 0} max={audioRef.current ? audioRef.current.duration : 0}></progress>
          <button onClick={closePopUp}>Close</button>
          {console.log('audioRef:', audioRef)}
          </div>
        </div>
      );
    } else {
      return null;
    }
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
        <FilterBar type ="artist" />
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
                    artist={artist} 
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    /> 
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
