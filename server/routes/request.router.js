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
  SELECT * FROM "song_request"
  LEFT JOIN "genres"
  ON "song_request"."genre_id"="genres"."id"
  LEFT JOIN "song_details"
  ON "song_request"."id"="song_details"."song_request_id"
  WHERE "song_request"."user_id"=$1;
  `
  pool.query(requestQuery, [userId])
  .then((result) => {
    res.send(result.rows);
    console.log("Request router GET all user requests", result.rows)
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
    SELECT * FROM "song_request"
    LEFT JOIN "genres"
    ON "song_request"."genre_id"="genres"."id"
    LEFT JOIN "song_details"
    ON "song_request"."id"="song_details"."song_request_id"
    WHERE "song_request"."is_complete"=FALSE;
    `
    const pendingResult = await connection.query(pendingRequestQuery);
    const completedRequestQuery = `
    SELECT * FROM "song_request"
    LEFT JOIN "genres"
    ON "song_request"."genre_id"="genres"."id"
    LEFT JOIN "song_details"
    ON "song_request"."id"="song_details"."song_request_id"
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
    SELECT * FROM "song_request"
    LEFT JOIN "genres"
    ON "song_request"."genre_id"="genres"."id"
    LEFT JOIN "song_details"
    ON "song_request"."id"="song_details"."song_request_id"
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
router.post('/', rejectUnauthenticated, async (req, res) => {
try {
  const userId = req.user.id;
  const requester = req.body.requester;
  const recipient = req.body.recipient;
  const pronunciation = req.body.pronunciation;
  const recipientRelationship = req.body.recipient_relationship;
  const occasion = req.body.occasion;
  const genreId = req.body.genre_id;
  const vocalType = req.body.vocal_type;
  const vibe = req.body.vibe;
  const tempo = req.body.tempo;
  const inspiration = req.body.inspiration;
  const story1 = req.body.story1;
  const story2 = req.body.story2;
  const importantWhat = req.body.important_what;
  const importantWhy = req.body.important_why;
  const additionalInfo = req.body.additional_info;
  const deliveryDays = req.body.delivery_days;
  const streaming = req.body.streaming;
  const extraVerse = req.body.extra_verse;

  const requestQuery = `
  INSERT INTO "song_request"
    ("user_id", "requester", "recipient", "pronunciation", "recipient_relationship", "occasion", "genre_id", "vocal_type", "vibe", "tempo", "inspiration", "story1", "story2", "important_what", "important_why", "additional_info", "delivery_days", "streaming", "extra_verse")
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19);
  `
  const requestValues = [
    userId, requester, recipient, pronunciation, recipientRelationship, occasion, genreId, vocalType, vibe, tempo, inspiration, story1, story2, importantWhat, importantWhy, additionalInfo, deliveryDays, streaming, extraVerse
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

module.exports = router;