
const express = require('express'), 
    router = express.Router(),
    passport = require('passport'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');
    jwt = require('jsonwebtoken');
    config = require('../config/database');
require('../config/passport')(passport);


router.post('/signup', function(req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg: 'Please pass username and password.'});
  } else {
    const newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});

router.post('/login', function(req, res) {
  
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) {
      throw err;
    }
    if (!user) {
      console.log("Start");
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          const token = jwt.sign(user.toJSON(), config.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

router.get('/', (req, res) => {
  res.render('home');
});

// router.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });


router.get('/login', (req, res) =>  {
  res.render('login');
});

router.get('/register', (req, res) => {
 res.render('register');
});

// router.post('/register', (req, res) =>  {
//   const {username, password} = req.body;
//   User.register(new User({username}), req.body.password, (err, user) => {
//     if (err) {
//       res.render('register',{message:'Your registration information is not valid'});
//     } else {
//       passport.authenticate('local')(req, res, function() {
//         res.redirect('/');
//       });
//     }
//   });   
// });



module.exports = router;
