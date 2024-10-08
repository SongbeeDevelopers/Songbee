const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_API_SECRET);

router.post('/checkout', async (req, res) => {
  const order = req.body.orderDetails
  let lineitemArray = [{
    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
    price: 'price_1PvKBKJoOrJf4ICWQ2sN3nK4',
    quantity: 1,
  }];
  if (order.streaming === true) {
    lineitemArray.push({
      price: 'price_1Ohf5YJoOrJf4ICWTcOS5hjJ',
      quantity: 1,
    })
  }
  if (order.extra_verse === true) {
    lineitemArray.push({
      price: 'price_1P4PhlJoOrJf4ICWe3kmugcl',
      quantity: 1,
    })
  }
  if (order.license === true) {
    lineitemArray.push({
      price: 'price_1P4PTrJoOrJf4ICWnYmIY3E7',
      quantity: 1,
    })
  }
  if (order.backing_track === true) {
    lineitemArray.push({
      price: 'price_1P4PSZJoOrJf4ICW8C5NWDNW',
      quantity: 1,
    })
  }
  if (order.delivery_days === 5) {
    lineitemArray.push({
      price: 'price_1Ohf4WJoOrJf4ICWVvSZkHVH',
      quantity: 1,
    })
  }
  else if (order.delivery_days === 3) {
    lineitemArray.push({
      price: 'price_1P4PRCJoOrJf4ICW8lmdZoDQ',
      quantity: 1,
    })
  }
  const session = await stripe.checkout.sessions.create({
    line_items: lineitemArray,
    mode: 'payment',
    allow_promotion_codes: true,
    success_url: `https://www.songbee.com/#/create/${req.body.id}`,
    cancel_url: `https://www.songbee.com/#/cancel/${req.body.id}`,
    automatic_tax: { enabled: true },
  });

  res.send(session.url);
});

router.post('/addon', async (req, res) => {
  const order = req.body.orderDetails
  let lineitemArray = [];
  if (order.streaming === true) {
    lineitemArray.push({
      price: 'price_1Ohf5YJoOrJf4ICWTcOS5hjJ',
      quantity: 1,
    })
  }
  if (order.extra_verse === true) {
    lineitemArray.push({
      price: 'price_1P4PhlJoOrJf4ICWe3kmugcl',
      quantity: 1,
    })
  }
  if (order.license === true) {
    lineitemArray.push({
      price: 'price_1P4PTrJoOrJf4ICWnYmIY3E7',
      quantity: 1,
    })
  }
  if (order.backing_track === true) {
    lineitemArray.push({
      price: 'price_1P4PSZJoOrJf4ICW8C5NWDNW',
      quantity: 1,
    })
  }
  const session = await stripe.checkout.sessions.create({
    line_items: lineitemArray,
    mode: 'payment',
    allow_promotion_codes: true,
    success_url: `https://www.songbee.com/#/user`,
    cancel_url: `https://www.songbee.com/#/user`,
    automatic_tax: { enabled: true },
  });

  res.send(session.url);
});

router.post('/tip', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [{ price: 'price_1PEw3kJoOrJf4ICWniRn0wre', quantity: 1 }],
    mode: 'payment',
    success_url: `https://www.songbee.com/#/user`,
    cancel_url: `https://www.songbee.com/#/user`,
    automatic_tax: { enabled: true },
  });
  res.send(session.url);
});

router.post('/jrcheckout', async (req, res) => {
  const order = req.body.orderDetails
  let lineitemArray = [];

  if (order.pack_id > 0 && order.pack_id < 7) {
    lineitemArray.push({
      price: 'price_1P6GpBJoOrJf4ICWW7Yeg9Nq',
      quantity: 1,
    })
  }
  else if (order.pack_id >= 7) {
    lineitemArray.push({
      price: 'price_1P6GqGJoOrJf4ICWYIuezcxo',
      quantity: 1,
    })
  }
  const session = await stripe.checkout.sessions.create({
    line_items: lineitemArray,
    mode: 'subscription',
    allow_promotion_codes: true,
    success_url: `https://www.songbee.com/#/jrcreate/${req.body.id}`,
    cancel_url: `https://www.songbee.com/#/jrcancel/${req.body.id}`,
    automatic_tax: { enabled: true },
  });

  res.send(session.url);
});

module.exports = router;
