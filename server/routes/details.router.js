const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const pool = require("../modules/pool");
const router = express.Router();
const cloudinaryUpload = require("../modules/cloudinary.config");

router.post("/:id", cloudinaryUpload.single("file"), async (req, res) => {
  try {
    const audioUrl = req.file.path;
    const lyrics = req.body.lyrics;
    const title = req.body.title;
    const artist = req.body.artist;
    const streaming_link = req.body.streaming_link;
    const songRequestId = req.params.id;

    const detailsQuery = `
    INSERT INTO "song_details" 
      ("song_request_id", "url", "lyrics", "title", "artist", "streaming_link")
      VALUES
      ($1, $2, $3, $4, $5, $6);
    `;
    const detailsValues = [
      songRequestId, audioUrl, lyrics, title, artist, streaming_link
    ];

    const detailsResult = await pool.query(detailsQuery, detailsValues);
    res.sendStatus(201);
  } catch (error) {
    console.log("Error in details router POST:", error);
    res.sendStatus(500);
  }
});

router.put("/:id", rejectUnauthenticated, cloudinaryUpload.single("file"), async (req, res) => {
    try {
      let audioUrl
      if(req.file){
      audioUrl = req.file.path;
      } else {
        audioUrl = req.body.url
      }
      const lyrics = req.body.lyrics;
      const title = req.body.title;
      const artist = req.body.artist;
      const streaming_link = req.body.streaming_link;
      const songRequestId = req.params.id;
      const detailsId = req.body.id;
  
      const detailsQuery = `
      UPDATE "song_details"
      SET 
        "song_request_id" = $1, 
        "url" = $2, 
        "lyrics" = $3, 
        "title" = $4, 
        "artist" = $5, 
        "streaming_link" = $6
      WHERE "id" = $7;
      `;
      const detailsValues = [
        audioUrl, lyrics, title, artist, streaming_link, songRequestId
      ];
  
      const eventResult = await pool.query(detailsQuery, detailsValues);
      res.sendStatus(201);
    } catch (error) {
      console.log("Error in details router PUT:", error);
      res.sendStatus(500);
    }
  });

module.exports = router;