import React from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import ArtistDisplay from "./ArtistDisplay";
import SelectArtistAudioButton from "./SelectArtistAudioButton";

import { Box, Button, Checkbox, ToggleButton } from "@mui/material";

import "../../SongRequestPage/SongRequestPage.css";

export default function SelectYourArtist({ handleInput }) {
  // reducers
  const artists = useSelector((store) => store.allArtists);
  const requestData = useSelector((store) => store.requestData);
  const genres = useSelector(store => store.genres)

  const isMobile = useMediaQuery( { query: `(max-width: 815px)`} )

  let currentGenre
  if (requestData.genre) {
    genres.map((genre) => {
      if (genre.id === Number(requestData.genre)) {
        currentGenre = genre.name
      }
    })
  }

  return (
    <div className="main-checkout-select-artist">
      <h2>Select Your Artist!</h2>
      <h5>
        {requestData.genre ?
          `Showing All Artists who Specialize in ${currentGenre}`
          :
          ''
        }
      </h5>
      <div className="select-artist-container">
      
          {artists.map((artist, i) => {
            if (
              artist.is_active
              && artist.vocal_type === requestData.vocal_type
              && artist.genres[0].id === Number(requestData.genre) ||
              artist.genres[1] && artist.genres[1].id === Number(requestData.genre) ||
              artist.genres[2] && artist.genres[2].id === Number(requestData.genre) ||
              requestData.genre === ""
            ) {
              return (
                <div className="select-artist-artist">
                  <Checkbox
                    disableRipple
                    checked={requestData.artist === artist.id}
                    sx={{mt: 10, mb: -10, ml: -10, mr: 8, backgroundColor: "#fff4df", border: 1 }}
                    onClick={() => handleInput("artist", Number(artist.id))}
                  />
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
      <div className="selectforme">
      <Checkbox
            checked={requestData.artist === ''}
            sx={{width: '45px', backgroundColor: "#fff4df", border: 1 }}
            onClick={() => handleInput("artist", '')}
          />
          <Button
            variant="contained"
            onClick={() => handleInput("artist", "")}
            sx={{
              height: 35,
              backgroundColor: "#feaf17",
              color: "black",
            }}
          >
            Click Here if you Would Like the Artist Selected For You
          </Button>
      </div>
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
