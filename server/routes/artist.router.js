const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * GET route template
 */
router.get("/get/:artistid", (req, res) => {
  // this is getting artist info with the genre
  // we use the sql join to link artist and genre tables
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

// This endpoint is used when an artist is applying to join 
// We receive the artist information and the genre.
router.post("/", rejectUnauthenticated, (req, res) => {
  const newArtist = req.body;
  // this query is creating the artist 
  const queryText = `INSERT INTO "artist"
 ("artist_name","user_id", "vocal_type", "first_name", "last_name")
  VALUES
  ($1, $2, $3, $4, $5) returning "id"; `;
  // this query is creating the artist genre 
  const queryGenre = `INSERT INTO "artist_genres"
  ("artist_id", "genre_id")
  VALUES
  ($1, $2);`;
  // we first create the artist 
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
      // after creating artist we take artist id and create genre
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
    console.log("Inside pending artist GET route");
    pool.query(query)
    .then((response) => {
        res.send(response.rows)
    })
    .catch((error) => {
        console.error('Error in artist router GET all pending:', error)
    })
  });

router.delete('/:id', (req, res) => {
    const query = `
    DELETE FROM "artist"
    WHERE id=$1;
    `
    pool.query(query, [req.params.id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Delete artist failed: ', err);
      res.sendStatus(500);
    })
})

router.put('/:id', async (req, res) => {
    let connection
    try {
    connection = await pool.connect();

    connection.query("BEGIN;");
    const approvalQuery = `
    UPDATE "artist"
    SET "approved"=TRUE
    WHERE id=$1;
    `
    await connection.query(approvalQuery, [req.params.id])
    const classQuery = `
    UPDATE "user"
    SET "class"=2
    WHERE "id"=$1;
    `
    await connection.query(classQuery, [req.user.id])
    connection.query("COMMIT;");
    connection.release();
    } catch (error) {
        console.error("Artist router Update failed:", error)
        connection.query("ROLLBACK;");
        connection.release();
        res.sendStatus(500)
    }
})

module.exports = router;
