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
        price: 'price_1OiqZ0JoOrJf4ICWhDoRzwZI',
        quantity: 1,
      }];
    //   if (order.streaming === 'true'){
    //     lineitemArray.push({
    //         price: 'price_1Ohf5YJoOrJf4ICWTcOS5hjJ',
    //         quantity: 1,
    //       })
    //   }
    //   if (order.extra_verse === 'true'){
    //     lineitemArray.push({
    //         price: 'price_1Ohf1WJoOrJf4ICWVuPjtbGj',
    //         quantity: 1,
    //       })
    //   }
    //   if (order.delivery_days === '4') {
    //     lineitemArray.push({
    //         price: 'price_1Ohf4WJoOrJf4ICWVvSZkHVH',
    //         quantity: 1,
    //       })
    //   }
    //   else if (order.delivery_days === '3') {
    //     lineitemArray.push({
    //         price: 'price_1Ohf2lJoOrJf4ICW6WQBD9iE',
    //         quantity: 1,
    //       })
    //   }
      const session = await stripe.checkout.sessions.create({
        line_items: lineitemArray,
        mode: 'payment',
        success_url: `http://localhost:5173/#created`,
        cancel_url: `https://localhost:5173/#/order`,
        automatic_tax: {enabled: true},
      });
      console.log("sesion:", session)
      console.log("lineItemArray:", lineitemArray);
    
      res.send(session.url);
});

module.exports = router;
