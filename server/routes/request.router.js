const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require("../modules/authentication-middleware");
/**
 * GET route template
 */
router.get('/user', rejectUnauthenticated, (req, res) => {
  const userId = req.user.id;
  const requestQuery = `
  SELECT 
  "song_request"."id" AS "id",
  "song_request"."user_id",
  "song_request"."requester",
  "song_request"."recipient",
  "song_request"."pronunciation",
  "song_request"."recipient_relationship",
  "song_request"."occasion",
  "song_request"."vocal_type",
  "song_request"."vibe",
  "song_request"."tempo",
  "song_request"."inspiration",
  "song_request"."story1",
  "song_request"."story2",
  "song_request"."important_what",
  "song_request"."important_why",
  "song_request"."additional_info",
  "song_request"."created_at",
  "song_request"."delivery_days",
  "song_request"."is_complete",
  "song_details"."url",
  "song_details"."lyrics",
  "song_details"."title",
  "song_details"."artist_id",
  "song_details"."streaming_link",
  "song_details"."accepted",
  "genres"."name" AS "genre"
  FROM "song_request"
  LEFT JOIN "genres"
  ON "song_request"."genre_id"="genres"."id"
  LEFT JOIN "song_details"
  ON "song_request"."id"="song_details"."song_request_id"
  WHERE "song_request"."user_id"=$1;
  `
  pool.query(requestQuery, [userId])
  .then((result) => {
    res.send(result.rows);
    // console.log("Request router GET all user requests", result.rows)
  })
  .catch((error) => {
    console.error("Error in request router GET all user requests", error);
    res.sendStatus(500);
  })
});

router.get('/all', rejectUnauthenticated, async (req, res) => {
    let connection
    try {
    connection = await pool.connect();
    connection.query("BEGIN;");
    const pendingRequestQuery = `
    SELECT 
    "song_request"."id" AS "id",
    "song_request"."user_id",
    "song_request"."requester",
    "song_request"."recipient",
    "song_request"."pronunciation",
    "song_request"."recipient_relationship",
    "song_request"."occasion",
    "song_request"."vocal_type",
    "song_request"."vibe",
    "song_request"."tempo",
    "song_request"."inspiration",
    "song_request"."story1",
    "song_request"."story2",
    "song_request"."important_what",
    "song_request"."important_why",
    "song_request"."additional_info",
    "song_request"."created_at",
    "song_request"."delivery_days",
    "song_request"."is_complete",
    "song_details"."url",
    "song_details"."lyrics",
    "song_details"."title",
    "song_details"."artist_id",
    "song_details"."streaming_link",
    "song_details"."accepted",
    "genres"."name" AS "genre",
    "user"."email"
    FROM "song_request"
    LEFT JOIN "genres"
    ON "song_request"."genre_id"="genres"."id"
    LEFT JOIN "song_details"
    ON "song_request"."id"="song_details"."song_request_id"
    LEFT JOIN "user"
    ON "song_request"."user_id"="user"."id"
    WHERE "song_request"."is_complete"=FALSE;
    `
    const pendingResult = await connection.query(pendingRequestQuery);
    const completedRequestQuery = `
    SELECT 
    "song_request"."id" AS "id",
    "song_request"."user_id",
    "song_request"."requester",
    "song_request"."recipient",
    "song_request"."pronunciation",
    "song_request"."recipient_relationship",
    "song_request"."occasion",
    "song_request"."vocal_type",
    "song_request"."vibe",
    "song_request"."tempo",
    "song_request"."inspiration",
    "song_request"."story1",
    "song_request"."story2",
    "song_request"."important_what",
    "song_request"."important_why",
    "song_request"."additional_info",
    "song_request"."created_at",
    "song_request"."delivery_days",
    "song_request"."is_complete",
    "song_details"."url",
    "song_details"."lyrics",
    "song_details"."title",
    "song_details"."artist_id",
    "song_details"."streaming_link",
    "song_details"."accepted",
    "genres"."name" AS "genre",
    "user"."email"
    FROM "song_request"
    LEFT JOIN "genres"
    ON "song_request"."genre_id"="genres"."id"
    LEFT JOIN "song_details"
    ON "song_request"."id"="song_details"."song_request_id"
    LEFT JOIN "user"
    ON "song_request"."user_id"="user"."id"
    WHERE "song_request"."is_complete"=TRUE;
    `
    const completedResult = await connection.query(completedRequestQuery);
    connection.query("COMMIT;");
    connection.release();
    res.send([pendingResult.rows, completedResult.rows])
    } catch (error) {
        console.log("Error in request router GET all:", error);
        connection.query("ROLLBACK;");
        connection.release();
        res.sendStatus(500);
    }
  });

router.get('/current/:id', (req, res) => {
    const query = `
    SELECT 
    "song_request"."id" AS "id",
    "song_request"."user_id",
    "song_request"."requester",
    "song_request"."recipient",
    "song_request"."pronunciation",
    "song_request"."recipient_relationship",
    "song_request"."occasion",
    "song_request"."vocal_type",
    "song_request"."vibe",
    "song_request"."tempo",
    "song_request"."inspiration",
    "song_request"."story1",
    "song_request"."story2",
    "song_request"."important_what",
    "song_request"."important_why",
    "song_request"."additional_info",
    "song_request"."created_at",
    "song_request"."delivery_days",
    "song_request"."is_complete",
    "song_details"."url",
    "song_details"."lyrics",
    "song_details"."title",
    "song_details"."streaming_link",
    "song_details"."accepted",
    "genres"."name" AS "genre",
    "artist"."artist_name",
    "artist"."website",
    "artist"."bio",
    "artist"."photo"
    FROM "song_request"
    LEFT JOIN "genres"
    ON "song_request"."genre_id"="genres"."id"
    LEFT JOIN "song_details"
    ON "song_request"."id"="song_details"."song_request_id"
    LEFT JOIN "artist"
    ON "song_details"."artist_id"="artist"."id"
    WHERE "song_request"."id"=$1;
    `
    pool.query(query, [req.params.id])
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

router.post('/create', async (req, res) => {
    let connection
    try {
    connection = await pool.connect();

    connection.query("BEGIN;");
    const userId = req.user.id;
    const requester = req.body.requester;
    const recipient = req.body.recipient;
    const pronunciation = req.body.pronunciation;
    const recipientRelationship = req.body.recipient_relationship;
    const occasion = req.body.occasion;
    const genreId = req.body.genre;
    const vocalType = req.body.vocal_type;
    const vibe = req.body.vibe;
    const tempo = req.body.tempo;
    const inspiration = req.body.inspiration;
    const artist = req.body.artist
    const deliveryDays = req.body.delivery_days;
    const streaming = req.body.streaming;
    const extraVerse = req.body.extra_verse;
    const license = req.body.license
    const backingTrack = req.body.backing_track
    const requestQuery = `
    INSERT INTO "song_request"
      ("user_id", "delivery_days", "streaming", "extra_verse")
      VALUES
      ($1, $2, $3, $4)
      RETURNING "id";
    `
    const response = await connection.query(requestQuery, [userId, deliveryDays, streaming, extraVerse])

    console.log("artist:", artist);
    console.log("req.body:", req.body)
    if (artist === ''){
    const detailsQuery = `
    INSERT INTO "song_details"
        ("song_request_id")
        VALUES
        ($1)
    `
    console.log('created id:', response.rows[0].id)
    const detailsResponse = await connection.query(detailsQuery, [response.rows[0].id])
    } else {
      const detailsQuery = `
      INSERT INTO "song_details"
          ("song_request_id", "artist_id")
          VALUES
          ($1, $2)
      `
      console.log('created id:', response.rows[0].id)
      const detailsResponse = await connection.query(detailsQuery, [response.rows[0].id, artist])
    }
    connection.query("COMMIT;");
    connection.release();
    res.send({id: response.rows[0].id})
    } catch (error) {
        console.error("Error in request router POST create request", error);
        connection.query("ROLLBACK;");
        connection.release();
        res.sendStatus(500);
    }
  });

router.put('/update/:id', rejectUnauthenticated, async (req, res) => {
try {
  const requester = req.body.requester;
  const recipient = req.body.recipient;
  const pronunciation = req.body.pronunciation;
  const recipientRelationship = req.body.recipient_relationship;
  const occasion = req.body.occasion;
  const genreId = req.body.genre;
  const vocalType = req.body.vocal_type;
  const vibe = req.body.vibe;
  const tempo = req.body.tempo;
  const inspiration = req.body.inspiration;
  const story1 = req.body.story1;
  const story2 = req.body.story2;
  const importantWhat = req.body.important_what;
  const importantWhy = req.body.important_why;
  const additionalInfo = req.body.additional_info;
  const requestId = req.params.id

  const requestQuery = `
  UPDATE "song_request"
  SET
    "requester"=$1, 
    "recipient"=$2, 
    "pronunciation"=$3, 
    "recipient_relationship"=$4, 
    "occasion"=$5, 
    "genre_id"=$6, 
    "vocal_type"=$7, 
    "vibe"=$8, 
    "tempo"=$9, 
    "inspiration"=$10, 
    "story1"=$11, 
    "story2"=$12, 
    "important_what"=$13, 
    "important_why"=$14, 
    "additional_info"=$15
  WHERE "id"=$16
    ;
  `
  const requestValues = [
    requester, recipient, pronunciation, recipientRelationship, occasion, genreId, vocalType, vibe, tempo, inspiration, story1, story2, importantWhat, importantWhy, additionalInfo, requestId
  ]
  const requestResult = await pool.query(requestQuery, requestValues);
  res.sendStatus(201);
} catch (error) {
    console.error("Error in request router POST", error)
}
});

router.delete("/:id", rejectUnauthenticated, (req, res) => {
    const requestId = req.params.id;
    const query = `
          DELETE FROM "song_request"
            WHERE "id"=$1;
      `;
    pool
      .query(query, [requestId])
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log("Error in event router DELETE attendance", err);
        res.sendStatus(500);
      });
  });

  router.get('/artist/:id', rejectUnauthenticated, (req, res) => {
    const requestQuery = `
    SELECT 
    "song_request"."id" AS "id",
    "song_request"."user_id",
    "song_request"."requester",
    "song_request"."recipient",
    "song_request"."pronunciation",
    "song_request"."recipient_relationship",
    "song_request"."occasion",
    "song_request"."vocal_type",
    "song_request"."vibe",
    "song_request"."tempo",
    "song_request"."inspiration",
    "song_request"."story1",
    "song_request"."story2",
    "song_request"."important_what",
    "song_request"."important_why",
    "song_request"."additional_info",
    "song_request"."created_at",
    "song_request"."delivery_days",
    "song_request"."is_complete",
    "song_details"."url",
    "song_details"."lyrics",
    "song_details"."title",
    "song_details"."streaming_link",
    "song_details"."accepted",
    "song_details"."id" AS "details_id",
    "genres"."name" AS "genre",
    "user"."email"
    FROM "song_request"
    LEFT JOIN "genres"
    ON "song_request"."genre_id"="genres"."id"
    LEFT JOIN "song_details"
    ON "song_request"."id"="song_details"."song_request_id"
    LEFT JOIN "user"
    ON "song_request"."user_id"="user"."id"
    WHERE "song_details"."artist_id"=$1
    AND
    "song_request"."is_complete"=FALSE;
    `
    pool.query(requestQuery, [req.params.id])
    .then((result) => {
      res.send(result.rows);
      // console.log("Request router GET all user requests", result.rows)
    })
    .catch((error) => {
      console.error("Error in request router GET all artist requests", error);
      res.sendStatus(500);
    })
  });

  router.get('/artist/complete/:id', rejectUnauthenticated, (req, res) => {
    const requestQuery = `
    SELECT 
    "song_request"."id" AS "id",
    "song_request"."user_id",
    "song_request"."requester",
    "song_request"."recipient",
    "song_request"."pronunciation",
    "song_request"."recipient_relationship",
    "song_request"."occasion",
    "song_request"."vocal_type",
    "song_request"."vibe",
    "song_request"."tempo",
    "song_request"."inspiration",
    "song_request"."story1",
    "song_request"."story2",
    "song_request"."important_what",
    "song_request"."important_why",
    "song_request"."additional_info",
    "song_request"."created_at",
    "song_request"."delivery_days",
    "song_request"."is_complete",
    "song_details"."url",
    "song_details"."lyrics",
    "song_details"."title",
    "song_details"."streaming_link",
    "song_details"."accepted",
    "song_details"."id" AS "details_id",
    "genres"."name" AS "genre",
    "user"."email"
    FROM "song_request"
    LEFT JOIN "genres"
    ON "song_request"."genre_id"="genres"."id"
    LEFT JOIN "song_details"
    ON "song_request"."id"="song_details"."song_request_id"
    LEFT JOIN "user"
    ON "song_request"."user_id"="user"."id"
    WHERE 
    "song_details"."artist_id"=$1
    AND
    "song_request"."is_complete"=TRUE;
    `
    pool.query(requestQuery, [req.params.id])
    .then((result) => {
      res.send(result.rows);
      // console.log("Request router GET all user requests", result.rows)
    })
    .catch((error) => {
      console.error("Error in request router GET all artist requests", error);
      res.sendStatus(500);
    })
  });

module.exports = router;