const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

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
  "song_request"."is_approved",
  "song_request"."is_paid",
  "song_request"."streaming",
  "song_request"."backing_track",
  "song_request"."license",
  "song_request"."extra_verse",
  "song_request"."total_price",
  "song_request"."artist_payout",
  "song_request"."due_date",
  "song_request"."draft_date",
  "song_details"."url",
  "song_details"."lyrics",
  "song_details"."title",
  "song_details"."artist_id",
  "song_details"."streaming_link",
  "song_details"."accepted",
  "song_details"."artist_id",
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
    "song_request"."is_approved",
    "song_request"."is_paid",
    "song_request"."streaming",
    "song_request"."backing_track",
    "song_request"."license",
    "song_request"."extra_verse",
    "song_request"."total_price",
    "song_request"."artist_payout",
    "song_request"."due_date",
    "song_request"."draft_date",
    "song_details"."url",
    "song_details"."lyrics",
    "song_details"."title",
    "song_details"."artist_id",
    "song_details"."streaming_link",
    "song_details"."accepted",
    "song_details"."artist_id",
    "genres"."name" AS "genre",
    t1."email",
    t2."email" AS "artist_email"
    FROM "song_request"
    LEFT JOIN "genres"
    ON "song_request"."genre_id"="genres"."id"
    LEFT JOIN "song_details"
    ON "song_request"."id"="song_details"."song_request_id"
    LEFT JOIN "user" t1
    ON "song_request"."user_id"=t1."id"
    LEFT JOIN "artist"
    ON "song_details"."artist_id" = "artist"."id"
    LEFT JOIN "user" t2
    ON "artist"."user_id" = t2."id"
    WHERE 
    "song_request"."is_complete"=FALSE
    AND
    "song_request"."is_paid"=TRUE;
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
    "song_request"."is_approved",
    "song_request"."is_paid",
    "song_request"."streaming",
    "song_request"."backing_track",
    "song_request"."license",
    "song_request"."extra_verse",
    "song_request"."total_price",
    "song_request"."artist_payout",
    "song_request"."due_date",
    "song_request"."draft_date",
    "song_details"."url",
    "song_details"."lyrics",
    "song_details"."title",
    "song_details"."artist_id",
    "song_details"."streaming_link",
    "song_details"."accepted",
    "song_details"."artist_id",
    "genres"."name" AS "genre",
    t1."email",
    t2."email" AS "artist_email"
    FROM "song_request"
    LEFT JOIN "genres"
    ON "song_request"."genre_id"="genres"."id"
    LEFT JOIN "song_details"
    ON "song_request"."id"="song_details"."song_request_id"
    LEFT JOIN "user" t1
    ON "song_request"."user_id"=t1."id"
    LEFT JOIN "artist"
    ON "song_details"."artist_id" = "artist"."id"
    LEFT JOIN "user" t2
    ON "artist"."user_id" = t2."id"
    WHERE "song_request"."is_complete"=TRUE
    AND "song_request"."is_approved" = TRUE;
    `
    const completedResult = await connection.query(completedRequestQuery);

    const needsApprovalQuery = `
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
    "song_request"."is_approved",
    "song_request"."is_paid",
    "song_request"."streaming",
    "song_request"."backing_track",
    "song_request"."license",
    "song_request"."extra_verse",
    "song_request"."total_price",
    "song_request"."artist_payout",
    "song_request"."due_date",
    "song_request"."draft_date",
    "song_details"."url",
    "song_details"."lyrics",
    "song_details"."title",
    "song_details"."artist_id",
    "song_details"."streaming_link",
    "song_details"."accepted",
    "song_details"."artist_id",
    "genres"."name" AS "genre",
    t1."email",
    t2."email" AS "artist_email"
    FROM "song_request"
    LEFT JOIN "genres"
    ON "song_request"."genre_id"="genres"."id"
    LEFT JOIN "song_details"
    ON "song_request"."id"="song_details"."song_request_id"
    LEFT JOIN "user" t1
    ON "song_request"."user_id"=t1."id"
    LEFT JOIN "artist"
    ON "song_details"."artist_id" = "artist"."id"
    LEFT JOIN "user" t2
    ON "artist"."user_id" = t2."id"
    WHERE "song_request"."is_complete"=TRUE
    AND "song_request"."is_approved" = FALSE;
    `
    const needsApproval = await connection.query(needsApprovalQuery);

    connection.query("COMMIT;");
    connection.release();
    res.send([pendingResult.rows, completedResult.rows, needsApproval.rows])

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
    "song_request"."is_approved",
    "song_request"."is_paid",
    "song_request"."streaming",
    "song_request"."backing_track",
    "song_request"."license",
    "song_request"."extra_verse",
    "song_request"."total_price",
    "song_request"."artist_payout",
    "song_request"."due_date",
    "song_request"."draft_date",
    "song_details"."url",
    "song_details"."artist_id",
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

function getDueDate(deliveryDays) {
  const msPerDay = 24 * 60 * 60 * 1000;
  const due = new Date().getTime() + msPerDay * deliveryDays
  return new Date(due)
}

router.post('/create', async (req, res) => {
  let connection
  try {
    connection = await pool.connect();

    connection.query("BEGIN;");
    const userId = req.user.id;
    const genreId = req.body.genre;
    const requester = req.body.requester;
    const recipient = req.body.recipient;
    const pronunciation = req.body.pronunciation;
    const recipientRelationship = req.body.recipient_relationship;
    const occasion = req.body.occasion;
    const vocalType = req.body.vocal_type;
    const vibe = req.body.vibe;
    const tempo = req.body.tempo;
    const inspiration = req.body.inspiration;
    const artist = req.body.artist
    const deliveryDays = req.body.delivery_days;
    const streaming = req.body.streaming;
    const extraVerse = req.body.extra_verse;
    const license = req.body.license;
    const backingTrack = req.body.backing_track;
    const totalPrice = req.body.total_price;
    const artistPayout = req.body.artist_payout;
    const dueDate = getDueDate(Number(deliveryDays))
    const draftDate = getDueDate((Number(deliveryDays)-2))
    const requestQuery = `
    INSERT INTO "song_request"
      ("user_id", "genre_id", "requester", "recipient", "pronunciation", "recipient_relationship", "occasion", "vocal_type", "vibe", "tempo", "inspiration", "delivery_days", "streaming", "extra_verse", "license", "backing_track", "total_price", "artist_payout", "due_date", "draft_date")
      VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
      RETURNING "id";
    `
    const response = await connection.query(
      requestQuery, [
      userId,
      genreId,
      requester,
      recipient,
      pronunciation,
      recipientRelationship,
      occasion,
      vocalType,
      vibe,
      tempo,
      inspiration,
      deliveryDays,
      streaming,
      extraVerse,
      license,
      backingTrack,
      totalPrice,
      artistPayout,
      dueDate,
      draftDate
    ]
    )
    if (artist === '') {
      const detailsQuery = `
    INSERT INTO "song_details"
        ("song_request_id")
        VALUES
        ($1)
    `
      const detailsResponse = await connection.query(detailsQuery, [response.rows[0].id])
    } else {
      const detailsQuery = `
      INSERT INTO "song_details"
          ("song_request_id", "artist_id")
          VALUES
          ($1, $2)
      `
      const detailsResponse = await connection.query(detailsQuery, [response.rows[0].id, artist])
    }
    connection.query("COMMIT;");
    connection.release();
    res.send({ id: response.rows[0].id })
  } catch (error) {
    console.error("Error in request router POST create request", error);
    connection.query("ROLLBACK;");
    connection.release();
    res.sendStatus(500);
  }
});

router.put('/finish/:id', async (req, res) => {
  let connection
  try {
    connection = await pool.connect();
    connection.query("BEGIN;");

    const story1 = req.body.story1
    const story2 = req.body.story2
    const important_what = req.body.important_what
    const important_why = req.body.important_why
    const additional_info = req.body.additional_info

    const requestQuery = `
    UPDATE "song_request"
    SET
    "story1"=$1,
    "story2"=$2,
    "important_what"=$3,
    "important_why"=$4,
    "additional_info"=$5
    WHERE "id"=$6
    `
    const response = await connection.query(
      requestQuery, [
      story1,
      story2,
      important_what,
      important_why,
      additional_info,
      req.params.id
    ]
    )
    connection.query("COMMIT;");
    connection.release();
    res.sendStatus(201);
  } catch (error) {
    console.error("Error in request router PUT final questions", error);
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
    WHERE "id"=$16;
    `
    const requestValues = [
      requester,
      recipient,
      pronunciation,
      recipientRelationship,
      occasion,
      genreId,
      vocalType,
      vibe,
      tempo,
      inspiration,
      story1,
      story2,
      importantWhat,
      importantWhy,
      additionalInfo,
      requestId
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
      console.log("Error in request router DELETE request", err);
      res.sendStatus(500);
    });
});

router.get('/artist/pending/:id/:type', rejectUnauthenticated, async (req, res) => {
  let connection
  let response = []
  try {
    connection = await pool.connect();
    connection.query("BEGIN;");
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
    "song_request"."is_approved",
    "song_request"."is_paid",
    "song_request"."total_price",
    "song_request"."artist_payout",
    "song_request"."genre_id",
    "song_request"."backing_track",
    "song_request"."extra_verse",
    "song_request"."license",
    "song_request"."due_date",
    "song_request"."draft_date",
    "song_request"."notes",
    "song_details"."url",
    "song_details"."lyrics",
    "song_details"."title",
    "song_details"."streaming_link",
    "song_details"."accepted",
    "song_details"."id" AS "details_id",
    "song_details"."artist_id",
    "genres"."name" AS "genre",
    "user"."email"
    FROM "song_request"
    JOIN "genres"
    ON "song_request"."genre_id"="genres"."id"
    JOIN "song_details"
    ON "song_request"."id"="song_details"."song_request_id"
    JOIN "user"
    ON "song_request"."user_id"="user"."id"
    WHERE 
    "song_request"."vocal_type" ILIKE $1
    AND
    "song_request"."is_complete"=FALSE
    AND
    "song_details"."artist_id" IS NULL
    AND
    "song_request"."is_paid" = TRUE;
    `
  const requestResult = await connection.query(requestQuery, [`%${req.params.type}%`])
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
  for(let genre of genreResponse.rows){
    for(let request of requestResult.rows){
      if(genre.id === request.genre_id){
        response.push(request);
      }
    }
  }
  const artistQuery = `
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
    "song_request"."is_approved",
    "song_request"."is_paid",
    "song_request"."total_price",
    "song_request"."artist_payout",
    "song_request"."genre_id",
    "song_request"."backing_track",
    "song_request"."extra_verse",
    "song_request"."license",
    "song_request"."due_date",
    "song_request"."draft_date",
    "song_request"."notes",
    "song_details"."url",
    "song_details"."lyrics",
    "song_details"."title",
    "song_details"."streaming_link",
    "song_details"."accepted",
    "song_details"."id" AS "details_id",
    "song_details"."artist_id",
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
    "song_details"."artist_id" = $1
    AND
    "song_request"."is_complete"=FALSE
    AND
    "song_request"."is_paid" = TRUE;
    `
  const artistResult = await connection.query(artistQuery, [req.params.id])
  response = [...response, ...artistResult.rows]
    connection.query("COMMIT;");
    connection.release();
    res.send(response);
  } catch (error) {
    console.log("Error in request router GET all artist requests", error);
    connection.query("ROLLBACK;");
    connection.release();
    res.sendStatus(500);
  }
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
    "song_request"."is_approved",
    "song_request"."is_paid",
    "song_request"."total_price",
    "song_request"."artist_payout",
    "song_request"."genre_id",
    "song_request"."backing_track",
    "song_request"."extra_verse",
    "song_request"."license",
    "song_request"."due_date",
    "song_request"."draft_date",
    "song_request"."notes",
    "song_details"."url",
    "song_details"."lyrics",
    "song_details"."title",
    "song_details"."streaming_link",
    "song_details"."accepted",
    "song_details"."id" AS "details_id",
    "song_details"."artist_id",
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
    })
    .catch((error) => {
      console.error("Error in request router GET complete artist requests", error);
      res.sendStatus(500);
    })
});

router.put('/confirm/:id', async (req, res) => {
  let connection
  try {
    connection = await pool.connect();

    connection.query("BEGIN;");
    const updateQuery = `
    UPDATE "song_request"
    SET 
      "is_paid" = TRUE
    WHERE id=$1;
    `
    await connection.query(updateQuery, [req.params.id])
    connection.query("COMMIT;");
    connection.release();
    res.sendStatus(200);
  } catch (error) {
    console.error("Request router confirm payment failed:", error)
    connection.query("ROLLBACK;");
    connection.release();
    res.sendStatus(500)
  }
})

router.put('/approve/:id', rejectUnauthenticated, (req, res) => {
  const approveQuery = `
    UPDATE "song_request"
    SET "is_approved" = $1
    WHERE "id" = $2
    `
  pool.query(approveQuery, [req.body.approved, req.params.id])
    .then((result) => {
      res.sendStatus(200)
    })
    .catch((error) => {
      console.error('request router /approve failed:', error)
    })
})

module.exports = router;
