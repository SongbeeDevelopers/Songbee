const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const pool = require("../modules/pool");
const router = express.Router();
const cloudinaryUpload = require("../modules/cloudinary.config");

router.post("/:id", rejectUnauthenticated, cloudinaryUpload.single("image"), async (req, res) => {
  let connection;
  try {
    const audioUrl = req.file.path;
    const lyrics = req.body.lyrics;
    const title = req.body.title;
    const artist = req.body.artist;
    const streaming_link = req.body.streaming_link;
    const songRequestId = req.params.id;

    connection = await pool.connect();

    connection.query("BEGIN;");

    const detailsQuery = `
    INSERT INTO "events" 
      ("song_request_id", "url", "lyrics", "title", "artist", "streaming_link")
      VALUES
      ($1, $2, $3, $4, $5, $6);
    `;
    const detailsValues = [
      audioUrl, lyrics, title, artist, streaming_link, songRequestId
    ];

    const eventResult = await connection.query(detailsQuery, detailsValues);
    connection.query("COMMIT;");
    connection.release();
    res.sendStatus(201);
  } catch (error) {
    console.log("Error in upload router POST:", error);
    connection.query("ROLLBACK;");
    connection.release();
    res.sendStatus(500);
  }
});

module.exports = router;