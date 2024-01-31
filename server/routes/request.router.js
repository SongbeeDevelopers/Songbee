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
  "song_details"."artist",
  "song_details"."streaming_link",
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
    "song_details"."artist",
    "song_details"."streaming_link",
    "genres"."name" AS "genre"
    FROM "song_request"
    LEFT JOIN "genres"
    ON "song_request"."genre_id"="genres"."id"
    LEFT JOIN "song_details"
    ON "song_request"."id"="song_details"."song_request_id"
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
    "song_details"."artist",
    "song_details"."streaming_link",
    "genres"."name" AS "genre"
    FROM "song_request"
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
    "song_details"."artist",
    "song_details"."streaming_link",
    "genres"."name" AS "genre"
    FROM "song_request"
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

router.post('/create', async (req, res) => {
    let connection
    try {
    connection = await pool.connect();

    connection.query("BEGIN;");
    const userId = req.user.id;
    const deliveryDays = req.body.delivery_days;
    const streaming = req.body.streaming;
    const extraVerse = req.body.extra_verse;
    const requestQuery = `
    INSERT INTO "song_request"
      ("user_id", "delivery_days", "streaming", "extra_verse")
      VALUES
      ($1, $2, $3, $4)
      RETURNING "id";
    `
    const response = await connection.query(requestQuery, [userId, deliveryDays, streaming, extraVerse])
    const detailsQuery = `
    INSERT INTO "song_details"
        ("song_request_id")
        VALUES
        ($1)
    `
    const detailsResponse = await connection.query(detailsQuery, [response.rows[0].id])
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
  const requestId = req.params.id

  const requestQuery = `
  UPDATE "song_request"
  SET
    "user_id"=$1, 
    "requester"=$2, 
    "recipient"=$3, 
    "pronunciation"=$4, 
    "recipient_relationship"=$5, 
    "occasion"=$6, 
    "genre_id"=$7, 
    "vocal_type"=$8, 
    "vibe"=$9, 
    "tempo"=$10, 
    "inspiration"=$11, 
    "story1"=$12, 
    "story2"=$13, 
    "important_what"=$14, 
    "important_why"=$15, 
    "additional_info"=$16, 
    "delivery_days"=$17, 
    "streaming"=$18, 
    "extra_verse"=$19
  WHERE "id"=$20
    ;
  `
  const requestValues = [
    userId, requester, recipient, pronunciation, recipientRelationship, occasion, genreId, vocalType, vibe, tempo, inspiration, story1, story2, importantWhat, importantWhy, additionalInfo, deliveryDays, streaming, extraVerse, requestId
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