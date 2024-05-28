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
  pool.query(query, [req.user.id])
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
      "chat"."id" = $1
      ORDER BY "messages"."created_at";
    `
    pool.query(query, [req.params.id])
    .then((response) => {
      res.send(response.rows)
    })
    .catch((error) => {
      console.error('Chat router GET chat messages route failed:', error)
    })
  });

  router.post('/new-chat', (req, res) => {
    console.log("req.body:", req.body)
    const user1 = req.user.id;
    const user2 = req.body.user2;
    const query = `
      INSERT INTO "chat"
        ("user1_id", "user2_id")
      VALUES
        ($1, $2)
      RETURNING "id";
    `
    pool.query(query, [user1, user2])
    .then((response) => {
      res.send(response.rows[0])
    })
    .catch((error) => {
      console.error('Genres GET router failed:', error)
    })
  });

  router.post('/message', (req, res) => {
    const user = req.user.id;
    const chatId = req.body.chat_id;
    const text = req.body.text;
    const query = `
      INSERT INTO "messages"
        ("chat_id", "user_id", "text")
      VALUES
        ($1, $2, $3);
    `
    pool.query(query, [chatId, user, text])
    .then((response) => {
      res.sendStatus(201)
    })
    .catch((error) => {
      console.error('Genres GET router failed:', error)
    })
  });

  router.put(`/new-message/:id`, (req, res) => {
    const user = req.user.id;
    const chatId = req.params.id;
    const query = `
      UPDATE "chat"
      SET
        "unread_messages" = "unread_messages" + 1,
        "latest_sender" = $1
      WHERE "id"=$2;
    `
    pool.query(query, [user, chatId])
    .then((response) => {
      res.sendStatus(201)
    })
    .catch((error) => {
      console.error('Chat Router update new message failed:', error)
    })
  });

  router.put(`/read-message/:id`, (req, res) => {
    const chatId = req.params.id;
    const query = `
      UPDATE "chat"
      SET
        "unread_messages" = 0,
        "latest_sender" = NULL
      WHERE "id"=$1;
    `
    pool.query(query, [chatId])
    .then((response) => {
      res.sendStatus(201)
    })
    .catch((error) => {
      console.error('Chat Router mark read message failed:', error)
    })
  });
/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
