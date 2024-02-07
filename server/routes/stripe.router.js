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
router.post('/', async (req, res) => {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1OhDbKJoOrJf4ICWBsvVBVgC',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `https://songbee-cf8d644750db.herokuapp.com/#requestform/${req.body.id}`,
        cancel_url: `https://songbee-cf8d644750db.herokuapp.com/`,
        automatic_tax: {enabled: true},
      });
      // console.log("sesion:", session)
    
      res.send(session.url);
});

module.exports = router;
