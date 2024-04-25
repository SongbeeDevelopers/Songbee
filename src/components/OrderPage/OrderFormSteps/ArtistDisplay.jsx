import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

function ArtistDisplay({ artists, artistId }) {
  const artist = useSelector((store) => store.currentArtist);
  console.log("artist", artist);
  return (
    <>
      <Box sx={{ minWidth: 800 }}>
        <Card>
          <CardContent className="cardContainer" sx={{ p: "5%" }}>
            <div className="songDetails">
              <Typography sx={{ fontSize: 4 }} variant="h2" gutterBottom>
                <p className="songTitle">Your Artist:</p>
              </Typography>
              <img src={artist.photo} />
              <Typography sx={{ fontSize: 5 }} variant="h2" gutterBottom>
                <p className="songTitle">{artist.artist_name}</p>
              </Typography>
              <Typography variant="h5" component="div">
                <p className="artistTitle">{artist.bio}</p>
              </Typography>
              <Typography variant="h5">
                <a href={artist.website}>{artist.artist_name}'s website</a>
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default ArtistDisplay;
