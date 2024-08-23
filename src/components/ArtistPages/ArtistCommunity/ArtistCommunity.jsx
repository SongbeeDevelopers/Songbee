import React from "react";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useMediaQuery } from "react-responsive";

import AudioButton from "../AudioButton";
import FilterBar from "../../FilterBar/FilterBar";

import './ArtistCommunity.css'


export default function ArtistCommunity() {

  // hooks
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const isMobile = useMediaQuery( { query: `(max-width: 815px)`} )

  // reducers
  const artistCommunity = useSelector((store) => store.allArtists);

  // Use state for the pop up for artist name, song and genre when play button is clicked
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  // This is for the audio player in the popup
  const [isPlaying, setIsPlaying] = useState(false);

  // on mount
  useEffect(() => {
    dispatch({
      type: "FETCH_ALL_ARTISTS",
      payload: id,
    });
    dispatch({
      type: 'FETCH_GENRES',
      // payload: id,
    })
  }, [id]);

  const handleSong = (artist) => {
    setShowPopUp(!showPopUp);
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

  }


  // song player popup
  const SongDisplay = () => {
    if (showPopUp === true) {
      return (
        <div className="popup">
          <div className="pop-up-content">
            <h3>{selectedSong.artist_name}</h3>
            <div className="song-title">
              <p>{selectedSong.song_title_1}</p>
            </div>
            <p className="genre">Genre: {selectedSong.genres[0].genre}</p>
            <audio className="audio-btn" controls ref={audioRef} src={selectedSong.sample_song_1} />
            <div className="close-btn">
              <button onClick={closePopUp}>X</button>
            </div>
          </div>
        </div>
      );
    }
  };

  const seeArtist = (id) => {
    dispatch({
      type: 'FETCH_CURRENT_ARTIST',
      payload: id
    })
    history.push(`/ArtistBioPage/${id}`)
  }


  return (
    artistCommunity && (
      <div className="communityPage">

        {/* page heading */}
        <h3 className="community-heading">
          Our Artist Community
        </h3>
        <h3 className="sub-heading">
          Pick from one of our artists to record a custom made song just for you!
        </h3>

        {/* filter options */}
        <FilterBar type="artist" />

        {/* display of all artists */}
        <div className={!isMobile ? "artist-container" : "artist-container-mobile"}>
          {artistCommunity.map((artist, i) => {
            if (artist.is_active) {
              return (
                <div className={!isMobile ? "artist-card": "artist-card-mobile"} key={i}>
                  <h3>{artist.artist_name}</h3>
                  <img
                    className={!isMobile ? "artistSlide-img" : "artistSlide-mobile"}
                    onClick={() => seeArtist(artist.id)}
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
                </div>
              )
            }
          })}

          <SongDisplay />
        </div>
      </div>
    )
  );
}
