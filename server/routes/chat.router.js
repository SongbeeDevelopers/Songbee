const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/user-chats', (req, res) => {
  const query = `
    SELECT
    t1."id" AS "id",
    t1."user1_id",
    t1."user2_id",
    t2."email" AS "user1_email",
    t3."email" AS "user2_email"
    FROM "chat" t1
    JOIN "user" t2
    ON t1."user1_id" = t2."id"
    JOIN "user" t3
    ON t1."user2_id" = t3."id"
    WHERE 
    t2."id" = $1
    OR
    t3."id" = $1;
  `
  pool.query(query, [10])
  .then((response) => {
    res.send(response.rows)
  })
  .catch((error) => {
    console.error('Chat router GET all chats route failed:', error)
  })
});

router.get('/user-chat/:id', (req, res) => {
    const query = `
      SELECT
      "messages"."id" as "id",
      "messages"."created_at",
      "messages"."text",
      "messages"."user_id",
      "user"."email"
      FROM "messages"
      JOIN "user"
      ON "messages"."user_id" = "user"."id"
      JOIN "chat"
      ON "messages"."chat_id" = "chat"."id"
      WHERE 
      "chat"."id" = $1;
    `
    pool.query(query, [req.params.id])
    .then((response) => {
      res.send(response.rows)
    })
    .catch((error) => {
      console.error('Chat router GET chat messages route failed:', error)
    })
  });

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
