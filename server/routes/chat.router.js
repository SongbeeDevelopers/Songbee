const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/user-chats', (req, res) => {
  const query = `
    SELECT
    "chat"."id" AS "id",
    "chat"."user1_id",
    "chat"."user2_id",
    "user"."email"
    from "genres";
  `
  pool.query(query)
  .then((response) => {
    res.send(response.rows)
  })
  .catch((error) => {
    console.error('Genres GET router failed:', error)
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
