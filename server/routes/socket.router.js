const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const http = require('http').Server(router);
const cors = require('cors');

// router.use(cors());

// // Socket
// const socketIO = require('socket.io')(http, {
//     cors: {
//         origin: "http://localhost:5001"
//     }
//   });
  
//   socketIO.on('connection', (socket) => {
//     console.log(`⚡: ${socket.id} user just connected!`);
  
//     //sends the message to all the users on the server
//     socket.on('message', (data) => {
//       socketIO.emit('messageResponse', data);
//     });
  
//     socket.on('disconnect', () => {
//       console.log('🔥: A user disconnected');
//     });
//   });
/**
 * GET route template
 */
router.get('/', (req, res) => {
  const query = `
    SELECT * from "genres";
  `
  pool.query(query)
  .then((response) => {
    res.send(response.rows)
  })
  .catch((error) => {
    console.error('Genres GET router failed:', error)
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
