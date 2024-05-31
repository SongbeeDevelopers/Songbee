const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const cloudinaryUpload = require("../modules/cloudinary.config");
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
  "subscription"."id",
  "subscription"."user_id",
  "subscription"."age",
  "subscription"."name",
  "subscription"."is_active",
  "subscription"."created_at",
  "subscription"."last_delivery",
  "learning_packs"."title",
  "learning_packs"."description",
  "learning_packs"."image",
  "learning_packs"."song1",
  "learning_packs"."song1_name",
  "learning_packs"."song2",
  "learning_packs"."song2_name",
  "learning_packs"."song3",
  "learning_packs"."song3_name",
  "learning_packs"."song4",
  "learning_packs"."song4_name",
  "learning_packs"."song5",
  "learning_packs"."song5_name",
  "learning_packs"."song6",
  "learning_packs"."song6_name",
  "learning_packs"."song7",
  "learning_packs"."song7_name",
  "learning_packs"."song8",
  "learning_packs"."song8_name",
  "learning_packs"."song9",
  "learning_packs"."song9_name",
  "learning_packs"."song10",
  "learning_packs"."song10_name",
  "learning_packs"."song11",
  "learning_packs"."song11_name",
  "learning_packs"."song12",
  "learning_packs"."song12_name",
  "learning_packs"."song13",
  "learning_packs"."song13_name",
  "learning_packs"."play_guide",
  "learning_packs"."is_active"
  FROM "subscription"
  JOIN "learning_packs"
    ON "subscription"."pack_id" = "learning_packs"."id"
  WHERE "subscription"."user_id"=$1;
  `;
  pool
    .query(requestQuery, [userId])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.error(
        "Error in request router GET jr subs",
        error
      );
      res.sendStatus(500);
    });
});

router.get("/current/:id", (req, res) => {
  console.log('REQ:', req.params.id)
  const query = `
    SELECT 
    "subscription"."user_id",
    "subscription"."age",
    "subscription"."name",
    "subscription"."is_active",
    "subscription"."created_at",
    "subscription"."last_delivery",
    "learning_packs"."title",
    "learning_packs"."description",
    "learning_packs"."image",
    "learning_packs"."song1",
    "learning_packs"."song1_name",
    "learning_packs"."song2",
    "learning_packs"."song2_name",
    "learning_packs"."song3",
    "learning_packs"."song3_name",
    "learning_packs"."song4",
    "learning_packs"."song4_name",
    "learning_packs"."song5",
    "learning_packs"."song5_name",
    "learning_packs"."song6",
    "learning_packs"."song6_name",
    "learning_packs"."song7",
    "learning_packs"."song7_name",
    "learning_packs"."song8",
    "learning_packs"."song8_name",
    "learning_packs"."song9",
    "learning_packs"."song9_name",
    "learning_packs"."song10",
    "learning_packs"."song10_name",
    "learning_packs"."song11",
    "learning_packs"."song11_name",
    "learning_packs"."song12",
    "learning_packs"."song12_name",
    "learning_packs"."song13",
    "learning_packs"."song13_name",
    "learning_packs"."play_guide",
    "learning_packs"."is_active"
    FROM "subscription"
    JOIN "learning_packs"
    ON "subscription"."pack_id" = "learning_packs"."id"
    WHERE "subscription"."id"=$1;
    `;
  pool
    .query(query, [req.params.id])
    .then((result) => {
      res.send(result.rows[0]);
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
    SELECT * from "learning_packs"
    ORDER BY "min_age";
  `
  pool.query(query)
    .then((response) => {
      res.send(response.rows)
    })
    .catch((error) => {
      console.error('juniorRequest GET learning packs route failed:', error)
    })
});

router.get('/current-pack/:id', (req, res) => {
  const query = `
    SELECT * from "learning_packs"
    WHERE "id"=$1;
  `
  pool.query(query, [req.params.id])
    .then((response) => {
      res.send(response.rows[0])
    })
    .catch((error) => {
      console.error('juniorRequest GET current pack route failed:', error)
    })
});

router.post('/create', async (req, res) => {
  let connection
  try {
    connection = await pool.connect();

    connection.query("BEGIN;");
    const userId = req.user.id;
    const packId = req.body.pack_id;
    const age = req.body.age;
    const name = req.body.name;
    const pronunciation = req.body.pronunciation;
    const requestQuery = `
  INSERT INTO "subscription"
    ("user_id", "pack_id", "age", "name", "pronunciation", "is_active")
    VALUES
    ($1, $2, $3, $4, $5, TRUE)
    RETURNING "id";
  `
    const response = await connection.query(requestQuery, [userId, packId, age, name, pronunciation])

    connection.query("COMMIT;");
    connection.release();
    res.send({ id: response.rows[0].id })
  } catch (error) {
    console.error("Error in juniorRequest router POST create request", error);
    connection.query("ROLLBACK;");
    connection.release();
    res.sendStatus(500);
  }
});

router.delete("/:id", rejectUnauthenticated, (req, res) => {
  const requestId = req.params.id;
  const query = `
        DELETE FROM "subscription"
          WHERE "id"=$1;
    `;
  pool
    .query(query, [requestId])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("Error in junior request router delete subscription", err);
      res.sendStatus(500);
    });
});

router.get('/all', rejectUnauthenticated, async (req, res) => {
  let connection
  try {
    connection = await pool.connect();
    connection.query("BEGIN;");
    const activeSubscriptionQuery = `
  SELECT 
  "subscription"."id" AS "id",
  "subscription"."user_id",
  "subscription"."pack_id",
  "subscription"."age",
  "subscription"."is_active",
  "subscription"."created_at",
  "subscription"."last_delivery",
  "learning_packs"."title",
  "learning_packs"."min_age",
  "learning_packs"."max_age",
  "user"."email"
  FROM "subscription"
  JOIN "learning_packs"
  ON "subscription"."pack_id"="learning_packs"."id"
  JOIN "user"
  ON "subscription"."user_id"="user"."id"
  WHERE "subscription"."is_active"=TRUE;
  `
    const pendingResult = await connection.query(activeSubscriptionQuery);
    const pausedSubscriptionQuery = `
  SELECT 
  "subscription"."id" AS "id",
  "subscription"."user_id",
  "subscription"."pack_id",
  "subscription"."age",
  "subscription"."is_active",
  "subscription"."created_at",
  "subscription"."last_delivery",
  "learning_packs"."title",
  "learning_packs"."min_age",
  "learning_packs"."max_age",
  "user"."email"
  FROM "subscription"
  JOIN "learning_packs"
  ON "subscription"."pack_id"="learning_packs"."id"
  JOIN "user"
  ON "subscription"."user_id"="user"."id"
  WHERE "subscription"."is_active"=FALSE;
  `
    const completedResult = await connection.query(pausedSubscriptionQuery);
    connection.query("COMMIT;");
    connection.release();
    res.send([pendingResult.rows, completedResult.rows])
  } catch (error) {
    console.log("Error in junior request router GET all subscriptions:", error);
    connection.query("ROLLBACK;");
    connection.release();
    res.sendStatus(500);
  }
});

router.put("/learning-pack/:id", rejectUnauthenticated, cloudinaryUpload.single("file"), async (req, res) => {
  let connection
  try {
    connection = await pool.connect();

  connection.query("BEGIN;");
    let audioUrl
    // if(req.file){
    // audioUrl = req.file.path;
    // console.log(audioUrl);
    // } else {
    //   audioUrl = req.body.url
    //   console.log(audioUrl);
    // }
    const lyrics = req.body.lyrics;
    const title = req.body.title;
    const artist = req.body.artist_id;
    const streaming_link = req.body.streaming_link;
    const songRequestId = req.params.id;

    const detailsQuery = `
    UPDATE "learning_packs"
    SET  
      "title" = $1, 
      "description" = $2, 
      "title" = $3, 
      "artist_id" = $4, 
      "streaming_link" = $5
    WHERE "id" = $6;
    `;
    const detailsValues = [];
    const detailsResult = await connection.query(detailsQuery, detailsValues);
    connection.query("COMMIT;");
    connection.release();
    res.sendStatus(201);
  } catch (error) {
    console.log("Error in details router PUT:", error);
    connection.query("ROLLBACK;");
    connection.release();
    res.sendStatus(500);
  }
});

router.put('/active/:id', async (req, res) => {
  let connection
  try {
    connection = await pool.connect();

    connection.query("BEGIN;");
    const approvalQuery = `
  UPDATE "learning_packs"
  SET "is_active"=NOT "is_active"
  WHERE id=$1;
  `
    // console.log('req.params.id:', req.params.id)
    await connection.query(approvalQuery, [req.params.id])
    connection.query("COMMIT;");
    connection.release();
    res.sendStatus(200);
  } catch (error) {
    console.error("JR request router update active pack failed:", error)
    connection.query("ROLLBACK;");
    connection.release();
    res.sendStatus(500)
  }
})

module.exports = router;
