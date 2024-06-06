const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const cloudinaryUpload = require("../modules/cloudinary.config");

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
    res.send(artistResponse.rows[0]);
  } catch (error) {
    console.log('get artist profile failed:', error)
    connection.query("ROLLBACK;");
    connection.release();
    res.sendStatus(500)
  }
});


// This endpoint is used when an artist is applying to join 
// We receive the artist information and the genre.
router.post("/", rejectUnauthenticated, async (req, res) => {

  let connection
  try {
    connection = await pool.connect();
    const artistQuery =
      `INSERT INTO "artist"
    (
    "artist_name",
    "name", 
    "user_id", 
    "vocal_type",
    "website",
    "instagram_link",
    "sample_song_1",
    "song_title_1",
    "sample_song_2",
    "song_title_2",
    "sample_song_3",
    "song_title_3",
    "bio",
    "location",
    "photo",
    "streaming_link",
    "paypal"
    )
     VALUES
     ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) returning "id"; `;

    const artistValues = [
      req.body.artist_name,    // $1
      req.body.name,           // $2
      req.user.id,             // $3
      req.body.vocal_type,     // $4
      req.body.website,        // $5
      req.body.instagram_link, // $6
      req.body.sample_song_1,  // $7
      req.body.song_title_1,   // $8
      req.body.sample_song_2,  // $9
      req.body.song_title_2,   // $10
      req.body.sample_song_3,  // $11
      req.body.song_title_3,   // $12
      req.body.bio,            // $13
      req.body.location,       // $14
      req.body.photo,          // $15
      req.body.streaming_link, // $16
      req.body.paypal          // $17
    ]
    const artistResponse = await connection.query(artistQuery, artistValues)

    for (let genre of req.body.genres) {
      const genreQuery = `
        INSERT INTO "artist_genres" ("artist_id", "genre_id")
        VALUES ($1, $2);
      `
      const genreValues = [artistResponse.rows[0].id, genre]
      await connection.query(genreQuery, genreValues)
    }
    connection.query("COMMIT;");
    connection.release();
    res.sendStatus(200);
  } catch (error) {
    console.error("create artist route failed:", error)
    connection.query("ROLLBACK;");
    connection.release();
    res.sendStatus(500)
  }
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


// router.put("/approve", rejectUnauthenticated, (req, res) => {
//   const artistId = req.params.artistId;
//   const queryText = `
//     UPDATE "artist"
//     SET
//       "artist_name" = (SELECT "edited_artistName" FROM "pendingartistedit" WHERE "artist_id" = $1),
//       "name" = (SELECT "edited_name" FROM "pendingartistedit" WHERE "artist_id" = $1),
//       "bio" = (SELECT "edited_bio" FROM "pendingartistedit" WHERE "artist_id" = $1),
//       "website" = (SELECT "edited_website" FROM "pendingartistedit" WHERE "artist_id" = $1),
//       "vocal_type" = (SELECT "edited_vocal_type" FROM "pendingartistedit" WHERE "artist_id" = $1)
//     WHERE "id" = $1;
//   `;
//   pool
//     .query(queryText, [artistId])
//     .then(() => {
//       // After updating artist information, delete the pending edit
//       const deleteQuery = `DELETE FROM "pendingartistedit" WHERE "artist_id" = $1;`;
//       pool
//         .query(deleteQuery, [artistId])
//         .then(() => {
//           res.sendStatus(200); // Successfully approved and applied edit
//         })
//         .catch((deleteErr) => {
//           console.error("Error deleting pending edit: ", deleteErr);
//           res.sendStatus(500);
//         });
//     })
//     .catch((err) => {
//       console.error("Error approving edit: ", err);
//       res.sendStatus(500);
//     });
// });

router.put('/deactivate', rejectUnauthenticated, (req, res) => {
  const queryText = `
  UPDATE "artist"
    SET "is_active"=FALSE
    WHERE id=$1;
  `
  pool.query(queryText, [req.body.id])
    .then((result) => {
      res.sendStatus(200)
    })
    .catch((error) => {
      console.error('Artist deactivate route error:', error)
    })
})

router.put('/activate', rejectUnauthenticated, (req, res) => {
  const queryText = `
  UPDATE "artist"
    SET "is_active"=TRUE
    WHERE id=$1;
  `
  pool.query(queryText, [req.body.id])
    .then((result) => {
      res.sendStatus(200)
    })
    .catch((error) => {
      console.error('Artist activate route error:', error)
    })
})

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

router.put('/adminedit', rejectUnauthenticated, async (req, res) => {
  let connection
  try {
    connection = await pool.connect();
    const artistQuery = `
    UPDATE "artist"
      SET "artist_name" = $1,
      "name" = $2,
      "vocal_type" = $3,
      "website" = $4,
      "instagram_link" = $5,
      "sample_song_1" = $6,
      "song_title_1" = $7,
      "sample_song_2" = $8,
      "song_title_2" = $9,
      "sample_song_3" = $10,
      "song_title_3" = $11,
      "bio" = $12,
      "location" = $13,
      "streaming_link" = $14,
      "w9" = $15,
      "paypal" = $16
    WHERE "artist"."id" = $17;
    `
    const artistValues = [
      req.body.artist_name,    // $1
      req.body.name,           // $2
      req.body.vocal_type,     // $3
      req.body.website,        // $4
      req.body.instagram_link, // $5
      req.body.sample_song_1,  // $6
      req.body.song_title_1,   // $7
      req.body.sample_song_2,  // $8
      req.body.song_title_2,   // $9
      req.body.sample_song_3,  // $10
      req.body.song_title_3,   // $11
      req.body.bio,            // $12
      req.body.location,       // $13
      req.body.streaming_link, // $14
      req.body.w9,             // $15
      req.body.paypal,         // $16
      req.body.id              // $17
    ]
    await connection.query(artistQuery, artistValues)
    await connection.query(
      `DELETE FROM "artist_genres" WHERE "artist_id" = $1`,
      [req.body.id]
    )
    for (let genre of req.body.genres) {
      const genreQuery = `
        INSERT INTO "artist_genres" ("artist_id", "genre_id")
        VALUES ($1, $2);
      `
      const genreValues = [req.body.id, genre]
      await connection.query(genreQuery, genreValues)
    }
    connection.query("COMMIT;");
    connection.release();
    res.sendStatus(200);
  } catch (error) {
    console.error("adminedit router failed:", error)
    connection.query("ROLLBACK;");
    connection.release();
    res.sendStatus(500)
  }
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
    SET "class"=$1
    WHERE "id"=$2;
    `
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

    // retrieves all artists
    const query = `
    SELECT * FROM "artist"
    WHERE "approved"=TRUE;
    `;
    const artistResponse = await connection.query(query)

    // loops through artists and finds their genres
    for (let i = 0; i < artistResponse.rows.length; i++) {
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
      // adds those genres to the result
      artistResponse.rows[i].genres = genreResponse.rows

      // adds email as well
      const emailResponse = await connection.query(
        `
        SELECT "user"."email"
        FROM "artist"
        LEFT JOIN "user"
        ON "user"."id" = "artist"."user_id"
        WHERE "artist"."id" = $1
        `,
        [artistResponse.rows[i].id]
      )
      artistResponse.rows[i].email = emailResponse.rows[0].email
    }
    connection.query("COMMIT;");
    connection.release();
    res.send(artistResponse.rows);
  } catch (error) {
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
    const genreQuery = `
  SELECT
  "genres"."id" AS "id",
  "genres"."name" AS "genre"
  FROM "genres"
  LEFT JOIN "artist_genres"
  ON "genres"."id"="artist_genres"."genre_id"
  WHERE "artist_genres"."artist_id"=$1;
  `
    const genreResponse = await connection.query(genreQuery, [req.params.id])
    connection.query("COMMIT;");
    connection.release();
    artistResponse.rows[0].genres = genreResponse.rows
    res.send(artistResponse.rows[0]);
  } catch (error) {
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

router.put('/uploads/:id', rejectUnauthenticated, cloudinaryUpload.single("file"), (req, res) => {
  let editQuery
  if (req.params.id === '1') {
    editQuery = `
    UPDATE "artist"
      SET "sample_song_1" = $1
    WHERE "artist"."id" = $2;
    `
  }
  else if (req.params.id === '2') {
    editQuery = `
    UPDATE "artist"
      SET "sample_song_2" = $1
    WHERE "artist"."id" = $2;
    `
  }
  else if (req.params.id === '3') {
    editQuery = `
    UPDATE "artist"
      SET "sample_song_3" = $1
    WHERE "artist"."id" = $2;
    `
  }
  else if (req.params.id === '4') {
    editQuery = `
    UPDATE "artist"
      SET "photo" = $1
    WHERE "artist"."id" = $2;
    `
  }
  else if (req.params.id === '5') {
    editQuery = `
    UPDATE "artist"
      SET "w9" = $1
    WHERE "artist"."id" = $2;
    `
  }
  pool.query(editQuery, [req.file.path, req.body.artist])
    .then(() => {
      res.sendStatus(200)
    })
    .catch((error) => {
      console.error('route adminedit failed:', error)
      res.sendStatus(500)
    })
})

router.put('/application-uploads/:id', rejectUnauthenticated, cloudinaryUpload.single("file"), (req, res) => {
  if (req.params.id === '1') {
    res.send({ key: 'sample_song_1', value: req.file.path })
  }
  else if (req.params.id === '2') {
    res.send({ key: 'sample_song_2', value: req.file.path })
  }
  else if (req.params.id === '3') {
    res.send({ key: 'sample_song_3', value: req.file.path })
  }
  else if (req.params.id === '4') {
    res.send({ key: 'photo', value: req.file.path })
  }
})

module.exports = router;
