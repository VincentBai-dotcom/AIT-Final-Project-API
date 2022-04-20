
require('./db');
require('./auth');
const morgan = require('morgan');


const passport = require('passport');
const express = require('express');
const path = require('path');

const routes = require('./routes/api');
cors = require("cors");


const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(cors());

// enable sessions
const session = require('express-session');
const sessionOptions = {
    secret: 'nodeauthsecret',
    resave: true,
      saveUninitialized: true
};
app.use(session(sessionOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



// passport setup
app.use(passport.initialize());
app.use(passport.session());

// make user data available to all templates
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.use('/', routes);

app.listen(process.env.PORT || 5000);
