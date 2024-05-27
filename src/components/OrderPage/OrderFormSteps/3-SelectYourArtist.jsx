import React from "react";
import { useSelector } from "react-redux";

import ArtistDisplay from "./ArtistDisplay";
import SelectArtistAudioButton from "./SelectArtistAudioButton";

import { Button } from "@mui/material";

import "../../SongRequestPage/SongRequestPage.css";

export default function SelectYourArtist({ handleInput }) {
  // reducers
  const artists = useSelector((store) => store.allArtists);
  const requestData = useSelector((store) => store.requestData);
  const genres = useSelector(store => store.genres)
  let currentGenre
  if (requestData.genre){
    genres.map((genre) => {
      if (genre.id === Number(requestData.genre)){
        currentGenre = genre.name
      }
    })
  }

  return (
    <div className="main-checkout-select-artist">
      <h2>Select Your Artist!</h2>
      <h5>
        {requestData.genre ?
        `Showing All Artists who Specialize In ${currentGenre}`
        :
        ''
      }
      </h5>
      <div className="select-artist-container">
        <div className="select-artist-card">
          {artists.map((artist, i) => {
            if (
              artist.genres[0].id === Number(requestData.genre) ||
              (artist.genres[1] &&
                artist.genres[1].id === Number(requestData.genre)) ||
              requestData.genre === ""
            ) {
              return (
                <div className="select-artist-artist">
                  <h4>{artist.artist_name}</h4>
                  <img
                    onClick={() => handleInput("artist", Number(artist.id))}
                    className="select-artistSlide-img"
                    key={i}
                    src={artist.photo}
                    alt="Artist photos"
                  />
                  <SelectArtistAudioButton url={artist.sample_song_1} />
                </div>
              );
            }
          })}
        </div>
      </div>
      <Button
        variant="contained"
        onClick={() => handleInput("artist", "")}
        sx={{
          height: 35,
          backgroundColor: "#feaf17",
          color: "black",
          width: 500,
          ml: 20,
        }}
      >
        Click Here if you Would Like the Artist Selected For You
      </Button>
      {requestData.artist !== "" ? <ArtistDisplay /> : ""}
      {/* <div className="reqFormGroup">
        <div className="reqFormSelect">
          <label>Choose your Artist</label>
          <select
            value={requestData.artist}
            onChange={() => handleInput("artist", Number(event.target.value))}
          >
            <option disabled>Select Artist</option>
            <option value="" key={0}>
              I would like the artist selected for me
            </option>
            {artists.map((artist) => {
              if (
                artist.genres[0].id === Number(requestData.genre) ||
                (artist.genres[1] &&
                  artist.genres[1].id === Number(requestData.genre)) ||
                requestData.genre === ""
              ) {
                return (
                  <option key={artist.id} value={artist.id}>
                    {artist.artist_name}
                  </option>
                );
              }
            })}
          </select>
        </div>
      </div> */}
    </div>
  );
}
