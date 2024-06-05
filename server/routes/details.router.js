const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const pool = require("../modules/pool");
const router = express.Router();
const cloudinaryUpload = require("../modules/cloudinary.config");
const emailjs = require('../modules/emailjs.config')

emailjs.init({
  publicKey: process.env.EMAILJS_API_PUBLIC_KEY
})

router.post("/:id", rejectUnauthenticated, cloudinaryUpload.single("file"), async (req, res) => {
  let connection
  try {
    connection = await pool.connect();
    connection.query("BEGIN;");

    // mark request entry completed
    await connection.query(
      `
        UPDATE "song_request"
        SET "is_complete" = TRUE
        WHERE "id" = $1
      `,
      [req.params.id]
    )

    // create new details entry with entered data
    const audioUrl = req.file.path;
    const lyrics = req.body.lyrics;
    const title = req.body.title;
    const artist = req.body.artist_id;
    const streaming_link = req.body.streaming_link;
    const songRequestId = req.params.id;

    const detailsQuery = `
    INSERT INTO "song_details" 
      ("song_request_id", "url", "lyrics", "title", "artist_id", "streaming_link")
      VALUES
      ($1, $2, $3, $4, $5, $6);
    `;
    const detailsValues = [
      songRequestId, audioUrl, lyrics, title, artist, streaming_link
    ];
    await pool.query(detailsQuery, detailsValues);

    connection.query("COMMIT;");
    connection.release();
    res.sendStatus(201);
  } catch (error) {
    console.log("Error in details router POST:", error);
    connection.query("ROLLBACK;");
    connection.release();
    res.sendStatus(500);
  }
});

router.put("/:id", rejectUnauthenticated, cloudinaryUpload.single("file"), async (req, res) => {
  let connection
  try {
    connection = await pool.connect();

    connection.query("BEGIN;");
    let audioUrl
    if (req.file) {
      audioUrl = req.file.path;
    } else {
      audioUrl = req.body.url
    }
    const lyrics = req.body.lyrics;
    const title = req.body.title;
    const artist = req.body.artist_id;
    const streaming_link = req.body.streaming_link;
    const songRequestId = req.params.id;

    const detailsQuery = `
      UPDATE "song_details"
      SET  
        "url" = $1, 
        "lyrics" = $2, 
        "title" = $3, 
        "artist_id" = $4, 
        "streaming_link" = $5
      WHERE "song_request_id" = $6;
      `;
    const detailsValues = [
      audioUrl, lyrics, title, artist, streaming_link, songRequestId,
    ];
    const detailsResult = await connection.query(detailsQuery, detailsValues);
    const completeQuery = `
      UPDATE "song_request"
      SET
        "is_complete"=TRUE
      WHERE "id"=$1;
      `
    const completeResult = await connection.query(completeQuery, [songRequestId])
    connection.query("COMMIT;");
    connection.release();
    res.sendStatus(201);
  } catch (error) {
    console.log("Error in details router PUT:", error);
    connection.query("ROLLBACK;");
    connection.release();
    res.sendStatus(500);
  }
});


router.put("/jr_request/:id", rejectUnauthenticated, cloudinaryUpload.single("file"), async (req, res) => {
  let connection
  try {
    connection = await pool.connect();

    connection.query("BEGIN;");
    let audioUrl
    if (req.file) {
      audioUrl = req.file.path;
    } else {
      audioUrl = req.body.url
    }
    const lyrics = req.body.lyrics;
    const title = req.body.title;
    const artist = req.body.artist;
    const streaming_link = req.body.streaming_link;
    const songRequestId = req.params.id;

    const detailsQuery = `
      UPDATE "songbeejr_details"
      SET  
        "url" = $1, 
        "lyrics" = $2, 
        "title" = $3, 
        "artist_id" = $4, 
        "streaming_link" = $5
      WHERE "jr_request_id" = $6;
      `;
    const detailsValues = [
      audioUrl, lyrics, title, artist, streaming_link, songRequestId,
    ];
    const detailsResult = await connection.query(detailsQuery, detailsValues);
    const completeQuery = `
      UPDATE "jr_request"
      SET
        "is_complete"=TRUE
      WHERE "id"=$1;
      `
    const completeResult = await connection.query(completeQuery, [songRequestId])
    connection.query("COMMIT;");
    connection.release();
    res.sendStatus(201);
  } catch (error) {
    console.log("Error in details router PUT:", error);
    connection.query("ROLLBACK;");
    connection.release();
    res.sendStatus(500);
  }
});

router.put("/accept/:id", rejectUnauthenticated, (req, res) => {
  const queryText = `
      UPDATE "song_details"
      SET "accepted"=TRUE
      WHERE "id"=$1;
    `;
  pool.query(queryText, [req.params.id])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.error("Error accepting request in details router:", error);
      res.sendStatus(500);
    });
});

router.put("/deny/:id", rejectUnauthenticated, (req, res) => {
  const queryText = `
      UPDATE "song_details"
      SET "artist_id"=NULL
      WHERE "id"=$1;
    `;
  pool.query(queryText, [req.params.id])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.error("Error denying request in details router:", error);
      res.sendStatus(500);
    });
});

router.put("/assign/:id", rejectUnauthenticated, (req, res) => {
  console.log('req.body', req.body)
  console.log('req.params.id', req.params.id)
  const assignQuery = `
    UPDATE "song_details"
    SET "artist_id" = $1,
      "accepted" = TRUE
    WHERE "song_request_id" = $2;
  `
  pool.query(assignQuery, [req.body.artistId, req.params.id])  
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error("Error in details assign router:", error)
      res.sendStatus(500)
    })
})

module.exports = router;