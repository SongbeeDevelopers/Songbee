const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * GET route template
 */
router.get("/", (req, res) => {
  // GET route code here
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

module.exports = router;
