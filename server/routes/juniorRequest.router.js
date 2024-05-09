const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
/**
 * GET route template
 */
router.get("/user", rejectUnauthenticated, (req, res) => {
  const userId = req.user.id;
  const requestQuery = `
  SELECT 
  "id" AS "id",
  "user_id",
  "requester",
  "pronunciation",
  "vocal_type",
  "tempo",
  "created_at",
  "goals",
  "description",
  "emotion",
  "skill",
  "child",
  "age",
  "is_complete",
  "accepted"
  FROM "jr_request"
  WHERE "user_id"=$1;
  `;
  pool
    .query(requestQuery, [userId])
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
      // console.log("Request router GET all user requests", result.rows)
    })
    .catch((error) => {
      console.error(
        "Error in request router GET all user requestsAAAAA",
        error
      );
      res.sendStatus(500);
    });
});

router.get("/current/:id", (req, res) => {
  const query = `
    SELECT 
    "jr_request"."id" AS "id",
    "jr_request"."user_id",
    "jr_request"."requester",
    "jr_request"."pronunciation",
    "jr_request"."vocal_type",
    "jr_request"."tempo",
    "jr_request"."created_at",
    "jr_request"."goals",
    "jr_request"."description",
    "jr_request"."emotion",
    "jr_request"."skill",
    "jr_request"."child",
    "jr_request"."age",
    "jr_request"."is_complete",
    "jr_request"."accepted"
    FROM "jr_request"
    WHERE "jr_request"."id"=$1;
    `;
  pool
    .query(query, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.error("Error in request router GET current request:", error);
    });
});

router.put("/update/:id", rejectUnauthenticated, async (req, res) => {
  try {
    const requester = req.body.requester;
    const pronunciation = req.body.pronunciation;
    const vocalType = req.body.vocal_type;
    const tempo = req.body.tempo;
    const createdAt = req.body.created_at;
    const goals = req.body.goals;
    const description = req.body.description;
    const emotion = req.body.emotion;
    const skill = req.body.skill;
    const child = req.body.child;
    const age = req.body.age;
    const isComplete = req.body.is_complete;
    const accepted = req.body.accepted;
    const requestQuery = `
  UPDATE "jr_request"
  SET
    "requester"=$1, 
    "pronunciation"=$2, 
    "vocal_type"=$3, 
    "tempo"=$4, 
    "created_at"=$5, 
    "goals"=$6, 
    "description"=$7, 
    "emotion"=$8, 
    "skill"=$9, 
    "child"=$10, 
    "age"=$11, 
    "is_complete"=$12, 
    "accepted"=$13 
  WHERE "id"=$14
    ;
  `;
    const requestValues = [
      requester,
      pronunciation,
      vocalType,
      tempo,
      createdAt,
      goals,
      description,
      emotion,
      skill,
      child,
      age,
      isComplete,
      accepted,
      req.params.id,
    ];
    const requestResult = await pool.query(requestQuery, requestValues);
    res.sendStatus(201);
  } catch (error) {
    console.error("Error in request router POST", error);
  }
});

router.put("/accept/:id", async (req, res) => {
  let connection;
  try {
    connection = await pool.connect();

    connection.query("BEGIN;");
    const approvalQuery = `
  UPDATE "jr_request"
  SET "accepted"=TRUE
  WHERE id=$1;
  `;
    console.log("req.params.id:", req.params.id);
    await connection.query(approvalQuery, [req.params.id]);

    connection.query("COMMIT;");
    connection.release();
    res.sendStatus(200);
  } catch (error) {
    console.error("Artist router Update failed:", error);
    connection.query("ROLLBACK;");
    connection.release();
    res.sendStatus(500);
  }
});

router.get('/learning-packs', (req, res) => {
  const query = `
    SELECT * from "learning_packs";
  `
  pool.query(query)
  .then((response) => {
    res.send(response.rows)
  })
  .catch((error) => {
    console.error('juniorRequest GET learning packs route failed:', error)
  })
});

module.exports = router;
