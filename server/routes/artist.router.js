const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

const getArtistIdByUserId = (userId) => {
  return new Promise((resolve, reject) => {
    const queryText = `
      SELECT id FROM artist WHERE user_id = $1;
    `;
    pool.query(queryText, [userId], (error, result) => {
      if (error) {
        reject(error);
      } else {
        if (result.rows.length > 0) {
          resolve(result.rows[0].id);
        } else {
          resolve(null); // Return null if no artist found for the user ID
        }
      }
    });
  });
};

router.get("/get", async (req, res) => {
  // this is getting artist info with the genre
  // we use the sql join to link artist and genre tables
  let connection
  try {
  connection = await pool.connect();

  connection.query("BEGIN;");
  const artistId = await getArtistIdByUserId(req.user.id)
  // console.log("artist id", artistId);
  const query = `
  SELECT * FROM "artist"
  WHERE "id"=$1;
  `;
  const artistResponse = await connection.query(query, [artistId])

  const genreQuery = `
  SELECT
  "genres"."id" AS "id",
  "genres"."name" AS "genre"
  FROM "genres"
  LEFT JOIN "artist_genres"
  ON "genres"."id"="artist_genres"."genre_id"
  WHERE "artist_genres"."artist_id"=$1
  `
  const genreResponse = await connection.query(genreQuery, [artistId])
  connection.query("COMMIT;");
  connection.release();
  artistResponse.rows[0].genres = genreResponse.rows
  // console.log("artistResponse", artistResponse.rows[0]);
  // console.log("genreResponse", genreResponse.rows);
  res.send(artistResponse.rows[0]);
} catch (error){
  console.log('get artist profile failed:', error)
  connection.query("ROLLBACK;");
  connection.release();
  res.sendStatus(500)
}
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
 ("artist_name", "user_id", "name", "bio", "website", "vocal_type")
  VALUES
  ($1, $2, $3, $4, $5, $6) returning "id"; `;
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
      newArtist.name,
      newArtist.bio,
      newArtist.website,
      newArtist.vocal_type
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

router.post("/edit", rejectUnauthenticated, async (req, res) => {
  const editedArtistInfo = req.body;
  const queryText = `
    INSERT INTO "pendingartistedit" 
    ("artist_id", "edited_artistName","edited_name", "edited_bio", "edited_website", "edited_vocal_type")
    VALUES
    ($1, $2, $3, $4, $5, $6);
  `;
    const artistId = await getArtistIdByUserId(req.user.id)
console.log(artistId);
  pool
    .query(queryText, [
      artistId,
      editedArtistInfo.edited_artistName,
      editedArtistInfo.edited_name,
      editedArtistInfo.edited_bio,
      editedArtistInfo.edited_website,
      editedArtistInfo.edited_vocal_type,
    ])
    .then(() => {
      res.sendStatus(201); // Successfully requested edit
    })
    .catch((err) => {
      console.error("Error requesting edit: ", err);
      res.sendStatus(500);
    });
});


router.put("/approve/:artistId", rejectUnauthenticated, (req, res) => {
  const artistId = req.params.artistId;
  const queryText = `
    UPDATE "artist"
    SET
      "artist_name" = (SELECT "edited_artistName" FROM "pendingartistedit" WHERE "artist_id" = $1),
      "name" = (SELECT "edited_name" FROM "pendingartistedit" WHERE "artist_id" = $1),
      "bio" = (SELECT "edited_bio" FROM "pendingartistedit" WHERE "artist_id" = $1),
      "website" = (SELECT "edited_website" FROM "pendingartistedit" WHERE "artist_id" = $1),
      "vocal_type" = (SELECT "edited_vocal_type" FROM "pendingartistedit" WHERE "artist_id" = $1)
    WHERE "id" = $1;
  `;
  pool
    .query(queryText, [artistId])
    .then(() => {
      // After updating artist information, delete the pending edit
      const deleteQuery = `DELETE FROM "pendingartistedit" WHERE "artist_id" = $1;`;
      pool
        .query(deleteQuery, [artistId])
        .then(() => {
          res.sendStatus(200); // Successfully approved and applied edit
        })
        .catch((deleteErr) => {
          console.error("Error deleting pending edit: ", deleteErr);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.error("Error approving edit: ", err);
      res.sendStatus(500);
    });
});






router.get("/pending-edits", rejectUnauthenticated, (req, res) => {
  const queryText = `
    SELECT * FROM "pendingartistedit";
  `;
  pool.query(queryText)
    .then((result) => {
      res.json(result.rows);
    })
    .catch((error) => {
      console.error("Error fetching pending edits:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

router.delete("/deny/:artistId", rejectUnauthenticated, (req, res) => {
  const artistId = req.params.artistId;
  const queryText = `
    DELETE FROM "pendingartistedit" WHERE "artist_id" = $1;
  `;
  pool.query(queryText, [artistId])
    .then(() => {
      res.sendStatus(200); // Successfully denied edit
    })
    .catch((error) => {
      console.error("Error denying edit:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});



router.get('/pending', (req, res) => {
    const query = `
    SELECT * FROM "artist"
    WHERE "approved"=FALSE;
    `
    // console.log("Inside pending artist GET route");
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
    // console.log('req.params.id:', req.params.id)
    await connection.query(approvalQuery, [req.params.id])
    const classQuery = `
    UPDATE "user"
    SET "class"=$1
    WHERE "id"=$2;
    `
    // console.log('req.body.user_id', req.body.user_id);
    await connection.query(classQuery, [2, req.body.user_id])
    connection.query("COMMIT;");
    connection.release();
    res.sendStatus(200);
    } catch (error) {
        console.error("Artist router Update failed:", error)
        connection.query("ROLLBACK;");
        connection.release();
        res.sendStatus(500)
    }
})

  router.get('/all', async (req, res) => {
    let connection
    try {
    connection = await pool.connect();
  
    connection.query("BEGIN;");
    const query = `
    SELECT * FROM "artist"
    WHERE "approved"=TRUE;
    `;
    const artistResponse = await connection.query(query)
    for (let i=0; i<artistResponse.rows.length; i++){
      const genreQuery = `
      SELECT
      "genres"."id" AS "id",
      "genres"."name" AS "genre"
      FROM "genres"
      LEFT JOIN "artist_genres"
      ON "genres"."id"="artist_genres"."genre_id"
      WHERE "artist_genres"."artist_id"=$1
      `
      const genreResponse = await connection.query(genreQuery, [artistResponse.rows[i].id])
      // console.log('artist response id', artistResponse.rows[i].id)
      artistResponse.rows[i].genres = genreResponse.rows
      // console.log("genreResponse", genreResponse.rows);
    }

    connection.query("COMMIT;");
    connection.release();
    // console.log("artistResponse", artistResponse.rows);
    res.send(artistResponse.rows);
  } catch (error){
    console.log('get current artist failed:', error)
    connection.query("ROLLBACK;");
    connection.release();
    res.sendStatus(500)
  }
  })

router.get('/current/:id', async (req, res) => {
  let connection
  try {
  connection = await pool.connect();

  connection.query("BEGIN;");
  const query = `
  SELECT * FROM "artist"
  WHERE "id"=$1
  `
  const artistResponse = await connection.query(query, [req.params.id])
  // console.log("artistResponse", artistResponse.rows[0]);
  const genreQuery = `
  SELECT
  "genres"."id" AS "id",
  "genres"."name" AS "genre"
  FROM "genres"
  LEFT JOIN "artist_genres"
  ON "genres"."id"="artist_genres"."genre_id"
  WHERE "artist_genres"."artist_id"=$1
  `
  const genreResponse = await connection.query(genreQuery, [req.params.id])
  connection.query("COMMIT;");
  connection.release();
  artistResponse.rows[0].genres = genreResponse.rows
  // console.log("genreResponse", genreResponse.rows);
  res.send(artistResponse.rows[0]);
} catch (error){
  console.log('get current artist failed:', error)
  connection.query("ROLLBACK;");
  connection.release();
  res.sendStatus(500)
}
})

router.put('/active/:id', async (req, res) => {
  let connection
  try {
  connection = await pool.connect();

  connection.query("BEGIN;");
  const approvalQuery = `
  UPDATE "artist"
  SET "is_active"=NOT "is_active"
  WHERE id=$1;
  `
  // console.log('req.params.id:', req.params.id)
  await connection.query(approvalQuery, [req.params.id])
  connection.query("COMMIT;");
  connection.release();
  res.sendStatus(200);
  } catch (error) {
      console.error("Artist router is active Update failed:", error)
      connection.query("ROLLBACK;");
      connection.release();
      res.sendStatus(500)
  }
})

module.exports = router;
