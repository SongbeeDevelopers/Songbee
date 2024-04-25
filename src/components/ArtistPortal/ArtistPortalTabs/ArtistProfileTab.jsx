import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ArtistBioPage from "../../ArtistBioPages/ArtistBioPage";
import EditArtistProfileDialog from "./EditArtistProfileDialog";

import { Button, Dialog } from "@mui/material";

import "../ArtistPortal.css";

function ArtistProfileTab() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "GET_ARTIST_PROFILE",
    });
  }, []);

  const artistProfile = useSelector((store) => store.artistProfile);
  console.log("artistProfile", artistProfile);

  // dialog logic
  const [openArtist, setOpenArtist] = useState(false);

  return (
    <div className="tab-body">
      {artistProfile ? (
        <>
          <ArtistBioPage />

          <Button sx={{ color: "black" }} onClick={() => setOpenArtist(true)}>
            Edit Artist Profile Info
          </Button>
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
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
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
