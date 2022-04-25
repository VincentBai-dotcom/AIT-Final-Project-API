
const express = require('express'), 
    router = express.Router(),
    passport = require('passport'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    UserStats = mongoose.model('UserStats'),
    jwt = require('jsonwebtoken'),
    config = require('../config/database');
require('../config/passport')(passport);

const getToken = function (headers) {
  if (headers && headers.authorization) {
    const parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

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

router.get('/stats', passport.authenticate('jwt', { session: false}), (req,res)=>{
  const token = getToken(req.headers);
  if(token){
    const filter = {username: req.query.username};
    if(req.query.type){
      filter["type"] = req.query.type;
    }
    if(req.query.quality){
      filter["quality"] = req.query.quality;
    }
    UserStats.find(filter, function(err,userStats){
      if(err){
        console.log(err);
        res.json({success: false, msg: "No Stats Found"});
      }
      res.json(userStats);
    });
  }
  else{
    res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

router.post('/stats', passport.authenticate('jwt',{session: false}), (req,res)=>{
  const token = getToken(req.headers);
  if(token){
    UserStats.find({username: req.body.username, type: req.body.type, quality: req.body.quality}, function(err,stats){
      if(err){
        console.log(err);
        res.json({success: false, msg: "Read Error"});
      }
      else if(stats.length === 0){
          const newstats = new UserStats({
              username: req.body.username,
              type: req.body.type,
              quality: req.body.quality,
              total: 1,
              correct: req.body.correct ? 1:0
            });
            newstats.save( function(err){
              if(err){
                res.json({success: false, msg: "Saving Error"});
              }
              else{
                res.json({success: true, msg: "Saved"});
              }
            });
        }
      else{
        const userstats = stats[0];
        userstats.total = userstats.total+1;
        if(req.body.correct){
          userstats.correct = userstats.correct+1;
        }
        userstats.save(function(err){
          if(err){
            console.log(err);
            res.json({success: false, msg: "Saving Error"});
          }
          else{
            res.json({success: true, msg: "Saved"});
          }
        });
      }
    });
  }
  else{
    res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

// router.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });


router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
 res.render('register');
});

router.get('/question', (req,res) =>{
  Stats.findOne({
    username: 'guest',
  }, function(err,stats){
    if(!err){
      console.log(stats);
      res.render('question',{stats:stats});
    }
    else{
      console.log(err);
      res.render('question');
    }
  });
  
});

router.post('/question',(req,res)=>{
  Stats.findOne({
    username: "guest",
  },function(err,stats){
    if(err){
      console.log(err);
    }
    else{
      stats.total = stats.total+1;
      if(req.body.answer === "Major Seventh"){
        stats.correct = stats.correct+1;
      }
      stats.save();
    }
    res.redirect('/question');
  });
});

router.get('/test', (req,res) =>{
  res.json({sucess: true});
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
