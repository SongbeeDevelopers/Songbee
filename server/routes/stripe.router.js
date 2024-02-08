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
      console.log('orderDetails:', req.body.orderDetails)
      const order = req.body.orderDetails
      let lineitemArray = [{
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1OCT4RJoOrJf4ICWm5W7fop0',
        quantity: 1,
      }];
      if (order.streaming){
        lineitemArray.push({
            price: 'price_1Ohf5YJoOrJf4ICWTcOS5hjJ',
            quantity: 1,
          })
      }
      if (order.extra_verse){
        lineitemArray.push({
            price: 'price_1Ohf1WJoOrJf4ICWVuPjtbGj',
            quantity: 1,
          })
      }
      if (order.delivery_days === '4') {
        lineitemArray.push({
            price: 'price_1Ohf4WJoOrJf4ICWVvSZkHVH',
            quantity: 1,
          })
      }
      else if (order.delivery_days === '3') {
        lineitemArray.push({
            price: 'price_1Ohf2lJoOrJf4ICW6WQBD9iE',
            quantity: 1,
          })
      }
      const session = await stripe.checkout.sessions.create({
        line_items: lineitemArray,
        mode: 'payment',
        success_url: `https://songbee-cf8d644750db.herokuapp.com/#requestform/${req.body.id}`,
        cancel_url: `https://songbee-cf8d644750db.herokuapp.com/`,
        automatic_tax: {enabled: true},
      });
      console.log("sesion:", session)
    
      res.send(session.url);
});

module.exports = router;
