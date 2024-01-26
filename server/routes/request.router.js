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
router.post('/', async (req, res) => {
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

module.exports = router;