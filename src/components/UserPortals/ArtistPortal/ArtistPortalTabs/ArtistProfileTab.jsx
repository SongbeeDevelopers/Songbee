import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ArtistPortalBioPage from "./ArtistPortalBioPage";
import EditArtistProfileDialog from "./EditArtistProfileDialog";

import { Button, Dialog } from "@mui/material";

import "../ArtistPortal.css";

function ArtistProfileTab({artistProfile}) {
  const dispatch = useDispatch();
  console.log("artistprofile", artistProfile)

  // dialog logic
  const [openArtist, setOpenArtist] = useState(false);
  const handleOpen = () => {
    const genresSimple = []
    for (let genre of artistProfile.genres) {
      genresSimple.push(genre.id)
    }
    dispatch({ type: 'SET_EDIT_DATA', payload: {...artistProfile, genres: genresSimple} })
    setOpenArtist(true)
  }

  return (
    <div className="tab-body">
      {artistProfile ? (
        <>
          <Button 
            sx={{m: 'auto', mt: 2, height: 35, width: 350, backgroundColor: "#feaf17", color: "black" }}
            onClick={handleOpen}>
            Edit Artist Profile Info
          </Button>
          <ArtistPortalBioPage />
        </>
      ) : (
        <p>You have no artist profile.</p>
      )}
      <Dialog
        open={openArtist}
        keepMounted
        onClose={() => setOpenArtist(false)}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        fullWidth 
        maxWidth="md"
      >
        <EditArtistProfileDialog
          artistProfile={artistProfile}
          openArtist={openArtist}
          setOpenArtist={setOpenArtist}
        />
      </Dialog>
    </div>
  );
}

export default ArtistProfileTab;
