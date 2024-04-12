import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import { Button } from "@mui/material";

import "../ArtistPortal.css"
import EditArtistProfileDialog from "./EditArtistProfileDialog";


function ArtistProfileTab() {

  const artistProfile = useSelector((store) => store.artistProfile);

  // dialog logic
  const [openArtist, setOpenArtist] = useState(false);
  const handleOpenArtist = () => setOpenArtist(true);
  const handleCloseArtist = () => setOpenArtist(false);


  return (
    <div className="tab-body">
      {artistProfile ?
        <>

          <Button sx={{ color: "black" }} onClick={handleOpenArtist}>
            Edit Artist Profile Info
          </Button>
        </>
        :
        <p>You have no artist profile.</p>
      }

      <EditArtistProfileDialog
        artistProfile={artistProfile}
        openArtist={openArtist}
        handleCloseArtist={handleCloseArtist}
      />
    </div >
  )
}

export default ArtistProfileTab
