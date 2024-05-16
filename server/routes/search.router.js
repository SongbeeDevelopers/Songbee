const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const pool = require("../modules/pool");
const router = express.Router();

/* GET route search */
router.get('/', async (req, res) => {
  try {

    /***** search for pending requests *****/
    if (req.query.type === 'pending') {
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

    /***** search for completed queries *****/
    else if (req.query.type === 'completed') {
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

    /***** search for users *****/
    else if (req.query.type === 'user') {
      let userQuery
      let userValues

      // finds users matching query if no class selected
      if (req.query.q && !req.query.class) {
        userQuery = `
            SELECT *
            FROM "user"
            WHERE "email" ILIKE $1;
          `
        userValues = [`%${req.query.q}%`]
        const userResponse = await pool.query(userQuery, userValues)
        res.send(userResponse.rows)
      }

      // finds users matching class if no query made
      else if (!req.query.q && req.query.class) {
        userQuery = `
            SELECT *
            FROM "user"
            WHERE "class" = $1;
          `
        userValues = [`${req.query.class}`]
        const userResponse = await pool.query(userQuery, userValues)
        res.send(userResponse.rows)
      }

      // finds users matching both query and class
      else if (req.query.q && req.query.class) {
        userQuery = `
            SELECT *
            FROM "user"
            WHERE "email" ILIKE $1 AND "class" = $2;
          `
        userValues = [`%${req.query.q}%`, `${req.query.class}`]
        const userResponse = await pool.query(userQuery, userValues)
        res.send(userResponse.rows)
      }

      // returns all users if no selections
      else {
        const userResponse = await pool.query(`SELECT * FROM "user";`)
        res.send(userResponse.rows)
      }
    }

    /***** search for artists *****/
    else if (req.query.type === 'artist') {
      let artistQuery
      let artistValues

      // finds artists matching query if no genre selected
      if (req.query.q && !req.query.genre) {
        artistQuery = `
            SELECT *
            FROM "artist"
            WHERE "artist_name" ILIKE $1;
          `
        artistValues = [`%${req.query.q}%`]
        const artistResponse = await pool.query(artistQuery, artistValues)
        res.send(artistResponse.rows)
      }
      
      // finds users matching genre if no query made
      else if (!req.query.q && req.query.genre) {
        artistQuery = `
            SELECT *
            FROM "artist"
            JOIN "artist_genres" ON "artist"."id" = "artist_genres"."artist_id"
            WHERE "artist_genres"."genre_id" = $1;
          `
        artistValues = [`${req.query.genre}`]
        const artistResponse = await pool.query(artistQuery, artistValues)
        res.send(artistResponse.rows)
      }

      // finds artists matching both query and genre
      else if (req.query.q && req.query.genre) {
        artistQuery = `
            SELECT *
            FROM "artist"
            JOIN "artist_genres" ON "artist"."id" = "artist_genres"."artist_id"
            WHERE "artist_name" ILIKE $1 AND "artist_genres"."genre_id" = $2;
          `
        artistValues = [`%${req.query.q}%`, `${req.query.genre}`]
        const artistResponse = await pool.query(userQuery, userValues)
        res.send(artistResponse.rows)
      }
      
      else {
        const artistResponse = await pool.query(`SELECT * FROM "artist";`)
        res.send(artistResponse.rows)
      }
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
