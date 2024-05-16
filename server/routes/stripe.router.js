const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_API_SECRET);

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/checkout', async (req, res) => {
      const order = req.body.orderDetails
      let lineitemArray = [{
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1P4PlQJoOrJf4ICWdNFf9Ebt',
        quantity: 1,
      }];
      if (order.streaming === true){
        lineitemArray.push({
            price: 'price_1Ohf5YJoOrJf4ICWTcOS5hjJ',
            quantity: 1,
          })
      }
      if (order.extra_verse === true){
        lineitemArray.push({
            price: 'price_1P4PhlJoOrJf4ICWe3kmugcl',
            quantity: 1,
          })
      }
      if (order.license === true){
        lineitemArray.push({
            price: 'price_1P4PTrJoOrJf4ICWnYmIY3E7',
            quantity: 1,
          })
      }
      if (order.backing_track === true){
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
        success_url: `https://www.songbee.com/#/finalquestions/${req.body.id}`,
        cancel_url: `https://www.songbee.com/#/cancel/${req.body.id}`,
        automatic_tax: {enabled: true},
      });
    
      res.send(session.url);
});

router.post('/addon', async (req, res) => {
  const order = req.body.orderDetails
  let lineitemArray = [];
  if (order.streaming === true){
    lineitemArray.push({
        price: 'price_1Ohf5YJoOrJf4ICWTcOS5hjJ',
        quantity: 1,
      })
  }
  if (order.extra_verse === true){
    lineitemArray.push({
        price: 'price_1P4PhlJoOrJf4ICWe3kmugcl',
        quantity: 1,
      })
  }
  if (order.license === true){
    lineitemArray.push({
        price: 'price_1P4PTrJoOrJf4ICWnYmIY3E7',
        quantity: 1,
      })
  }
  if (order.backing_track === true){
    lineitemArray.push({
        price: 'price_1P4PSZJoOrJf4ICW8C5NWDNW',
        quantity: 1,
      })
  }
  const session = await stripe.checkout.sessions.create({
    line_items: lineitemArray,
    mode: 'payment',
    success_url: `https://www.songbee.com/#/user`,
    cancel_url: `https://www.songbee.com/#/user`,
    automatic_tax: {enabled: true},
  });

  res.send(session.url);
});

router.post('/tip', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [{price: 'price_1PEw3kJoOrJf4ICWniRn0wre', quantity: 1}],
    mode: 'payment',
    success_url: `https://www.songbee.com/#/user`,
    cancel_url: `https://www.songbee.com/#/user`,
    automatic_tax: {enabled: true},
  });
  res.send(session.url);
});

module.exports = router;
