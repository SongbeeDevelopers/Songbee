const express = require('express');
const router = express.Router();
require('dotenv').config

const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: 'us8',
});

const list_id = 'a4ea84c7c8'

// retrieve all audience members
router.get('/', async (req, res) => {
    const response = await mailchimp.lists.getListMembersInfo(list_id)
    .then((result) => {
        res.sendStatus(201)
    })
    .catch((error) => {
        console.error('Mailchimp GET route failed:', error)
        res.sendStatus(500)
    })
});

// add new email
router.post('/', async (req, res) => {
    console.log('req.body:', req.body)
    const response = await mailchimp.lists.addListMember(list_id, {
        email_address: req.body.email_address,
        status: "subscribed",
    })
    .then((result) => {
        res.sendStatus(201)
    })
    .catch((error) => {
        console.error('Mailchimp POST failed:', error)
        res.sendStatus(500)
    })
});



module.exports = router;
