const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  const query = `
    SELECT * from "schools";
  `
  pool.query(query)
  .then((response) => {
    res.send(response.rows)
  })
  .catch((error) => {
    console.error('Genres GET router failed:', error)
  })
});

router.put('/', rejectUnauthenticated, (req, res) => {
  const query = `
  UPDATE "schools"
  SET
    "contact" = $1,
    "institution" = $2,
    "license_length" = $3,
    "agreement" = $4
  WHERE "id" = $5
  `
  pool.query(query, [
    req.body.contact,
    req.body.institution,
    req.body.license_length,
    req.body.agreement,
    req.body.id
  ])
  .then((result) => {
    res.sendStatus(200)
  })
  .catch((error) => {
    res.sendStatus(500)
    console.error('schools put router failed:', error)
  })
})

router.post('/', rejectUnauthenticated, (req, res) => {
  const query = `
  INSERT INTO "schools" ("contact", "institution", "license_length", "agreement")
  VALUES ($1, $2, $3, $4)
  `
  pool.query(query, [
    req.body.contact,
    req.body.institution,
    req.body.license_length,
    req.body.agreement
  ])
  .then((result) => {
    res.sendStatus(201)
  })
  .catch((error) => {
    res.sendStatus(500)
  })
})

router.delete('/', rejectUnauthenticated, (req, res) => {
  const query = `
  DELETE FROM "schools" WHERE "id" = $1
  `
  pool.query(query, [req.body.id])
  .then((result) => {
    res.sendStatus(200)
  })
  .catch((error) => {
    res.sendStatus(500)
  })
})

module.exports = router;
