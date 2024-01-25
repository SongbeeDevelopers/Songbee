const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const query = `
    SELECT * from "genres";
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
