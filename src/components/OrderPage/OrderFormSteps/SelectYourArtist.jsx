import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import '../../SongRequestPage/SongRequestPage.css'

import ArtistDisplay from "./ArtistDisplay";


export default function SelectYourArtist({ handleInput }) {

  const artists = useSelector(store => store.allArtists);
  const requestData = useSelector((store) => store.requestData);

  return (
    <>
      <div className="reqFormGroup">
        <div className="reqFormSelect">
          <label>Choose your Artist</label>
          <select
            value={requestData.genre}
            onChange={() => handleInput("artist", event.target.value)}
          >
            <option selected>
              Select Artist
            </option>
            <option key={artists.length} value=''>
              I would like the artist selected for me
            </option>
            {artists.map((artist) => {
              if (artist.genres[0].id === Number(requestData.genre) || artist.genres[1] && artist.genres[1].id === Number(requestData.genre) || requestData.genre === '') {
                return (
                  <option key={artist.id} value={artist.id}>
                    {artist.artist_name}
                  </option>
                )
              }
            })}
          </select>
        </div>
      </div>
      <ArtistDisplay />
    </>
  )
}
