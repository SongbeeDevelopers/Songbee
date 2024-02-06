const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const stripe = require('stripe')('sk_test_51NzMUGJoOrJf4ICWZBCtfzoOIggQO0HLoh7UKaNKxrWYaWbz6F8LGDJXRl0GCar5niPdeqMi69wxjs7UUoWFOivO00oIfWvYol');

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/create-checkout-session', async (req, res) => {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1OCT4RJoOrJf4ICWnv6bBFqq',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `http://localhost:5173/#checkout`,
        cancel_url: `http://localhost:5173/#checkout`,
        automatic_tax: {enabled: true},
      });
      console.log("sesion:", session)
    
      res.send(session.url);
});

module.exports = router;
