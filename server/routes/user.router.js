const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText = `INSERT INTO "user" (email, password)
    VALUES ($1, $2) RETURNING id`;
  pool
    .query(queryText, [username, password])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

router.put('/update', (req, res, next) => {
  let email;
  if (req.body.email !== ''){
    email = req.body.email;
  }
  else {
    email = req.user.email
  }
  let password;
  if (req.body.password !== ''){
    password = encryptLib.encryptPassword(req.body.password)
  }
  else {
    password = req.user.password;
  }

  const queryText = `
  UPDATE "user" 
  SET
    email=$1, 
    password=$2
  WHERE id=$3`;
  pool
    .query(queryText, [email, password, req.user.id])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

router.delete('/delete', (req, res) => {
  const query = `
  DELETE FROM "user"
  WHERE id=$1;
  `
  pool.query(query, [req.body.id])
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log('Delete user failed: ', err);
    res.sendStatus(500);
  })
})

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.get('/all', (req, res) => {
  const query = `
  SELECT * FROM "user"
  `
  pool.query(query)
  .then((response) => {
    res.send(response.rows)
  })
  .catch((error) => {
    console.error("Error in User router GET all:", error)
    res.sendStatus(500);
  })
});

router.put('/admin/:id', rejectUnauthenticated, (req, res) => {
  const query = `
  UPDATE "user"
    SET "class" = $1
    WHERE "id"=$2;
  `
  pool.query(query, [req.body.data, req.params.id])
  .then((response) => {
    res.sendStatus(201);
  })
  .catch((error) => {
    console.error("Error in User router update admin", error)
    res.sendStatus(500);
  })
})

module.exports = router;
