const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

router.get('/pending', (req, res) => {
    const query = `
    SELECT * FROM "artist"
    WHERE "approved"=FALSE;
    `
    pool.query(query)
    .then((response) => {
        res.send(response.rows)
    })
    .catch((error) => {
        console.error('Error in artist router GET all pending:', error)
    })
  });

module.exports = router;
