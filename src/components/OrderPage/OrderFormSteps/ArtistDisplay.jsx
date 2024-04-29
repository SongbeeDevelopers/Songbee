import * as React from "react";
import { useSelector, } from "react-redux";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import '../OrderPage.css'


function ArtistDisplay() {

  const artist = useSelector((store) => store.currentArtist);

  return (
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
  );
}

export default ArtistDisplay;
