const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * GET route template
 */
router.get("/:artistid", (req, res) => {
  const query = `
  SELECT 
  "artist"."id" AS "artistId",
  "artist"."artist_name" AS "artistName",
  "artist"."first_name" AS "firstName",
  "artist"."last_name" AS "lastName",
  "artist"."vocal_type" AS "vocalType",
  "artist"."website" AS "website",
  "artist"."bio" AS "bio",
  "artist"."photo" AS "photo",
  "artist"."streaming_link" AS "streamingLink",
  "artist"."approved" AS "approved",
"genres"."name" AS "genre"
  FROM "artist"
  LEFT JOIN "artist_genres"
  ON "artist"."id"="artist_genres"."artist_id"
  LEFT JOIN "genres"
  ON "artist_genres"."genre_id" ="genres"."id"
  WHERE "artist"."id"=$1;
  `;
  pool.query(query, [req.params.artistid])
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.error("Error in request router GET current request:", error)
    })
});



/**
 * POST route template
 */

router.post("/", rejectUnauthenticated, (req, res) => {
  const newArtist = req.body;
  const queryText = `INSERT INTO "artist"
 ("artist_name","user_id", "vocal_type", "first_name", "last_name")
  VALUES
  ($1, $2, $3, $4, $5) returning "id"; `;
  const queryGenre = `INSERT INTO "artist_genres"
  ("artist_id", "genre_id")
  VALUES
  ($1, $2);`;
  pool
    .query(queryText, [
      newArtist.artist_name,
      // newArtist.name,
      req.user.id, // access the id of the current logged in user
      newArtist.vocal_type,
      newArtist.first_name,
      newArtist.last_name,
    ])
    .then((result) => {
      console.log(result.rows);
      pool
        .query(queryGenre, [
          result.rows[0].id, // access the id of the created artist
          newArtist.genre_id,
        ])
        .then((result) => {
          console.log(result.rows);
          res.sendStatus(201);
        })
        .catch((err) => {
          console.log("Genre creation failed: ", err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.log("Artist registration failed: ", err);
      res.sendStatus(500);
    });
});

router.get('/pending', (req, res) => {
    const query = `
    SELECT * FROM "artist"
    WHERE "approved"=FALSE;
    `
    pool.query(query)
    .then((response) => {
        res.send(response.rows)
    })
    .catch((error) => {
        console.error('Error in artist router GET all pending:', error)
    })
  });

module.exports = router;
