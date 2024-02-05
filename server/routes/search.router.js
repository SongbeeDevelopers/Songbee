const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route search
 */
router.get('/', async (req, res) => {
  console.log("here's req.query", req.query)
  try {
    if (req.query.type === 'pending'){
    console.log("inside pending query");
    const pendingQuery = `
    SELECT DISTINCT
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
    "genres"."name" AS "genre",
    "user"."email" AS "email"
    FROM "song_request"
    LEFT JOIN "genres"
    ON "song_request"."genre_id"="genres"."id"
    LEFT JOIN "song_details"
    ON "song_request"."id"="song_details"."song_request_id"
    JOIN "user"
    ON "song_request"."user_id"="user"."id"
    WHERE "song_request"."is_complete"=FALSE
    AND
    ("requester" ILIKE $1
    OR
    "recipient" ILIKE $1);
    `
    const pendingResponse = await pool.query(pendingQuery, [`%${req.query.q}%`])
    res.send(pendingResponse.rows)
    }
    else if (req.query.type === 'completed'){
    const completedQuery = `
    SELECT DISTINCT
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
    "genres"."name" AS "genre",
    "user"."email" AS "email"
    FROM "song_request"
    LEFT JOIN "genres"
    ON "song_request"."genre_id"="genres"."id"
    LEFT JOIN "song_details"
    ON "song_request"."id"="song_details"."song_request_id"
    JOIN "user"
    ON "song_request"."user_id"="user"."id"
    WHERE "song_request"."is_complete"=TRUE
    AND
    ("requester" ILIKE $1
    OR
    "recipient" ILIKE $1
    OR
    "email" ILIKE $1);
    `
    const completedResponse = await pool.query(completedQuery, [`%${req.query.q}%`])
    res.send(completedResponse.rows)
    }
    else if (req.query.type === 'user'){
    const userQuery = `
    SELECT *
    FROM "user"
    WHERE "email" ILIKE $1;
    `
    const userResponse = await pool.query(userQuery, [`%${req.query.q}%`])
    res.send(userResponse.rows)
    }
  } catch (error) {
    console.log("Error in search router query:", error);
    res.sendStatus(500);
  }
});

router.get('/class/:id', async (req, res) => {
   try {
    const query = `
    SELECT *
    FROM "user"
    WHERE "class"=$1;
    `
    const response = await pool.query(query, [req.params.id]);
    res.send(response.rows);
   } catch (error) {
    console.error("Error in search router class query", error);
    res.sendStatus(500);
   }
  });


module.exports = router;