const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;

// Middleware Includes
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route Includes
const userRouter = require('./routes/user.router');
const genreRouter = require('./routes/genre.router');
const detailsRouter = require('./routes/details.router');
const requestRouter = require('./routes/request.router');
const searchRouter = require('./routes/search.router')
const artistRouter = require('./routes/artist.router')
const mailchimpRouter = require('./routes/mailchimp.router')

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

// Passport Session Configuration
app.use(sessionMiddleware);

// Start Passport Sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/user', userRouter);
app.use('/api/genres', genreRouter);
app.use('/api/details', detailsRouter);
app.use('/api/request', requestRouter);
app.use('/api/search', searchRouter);
app.use('/api/artist', artistRouter);
app.use('/api/mailchimp', mailchimpRouter)

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
