const mongoose = require('mongoose'),
	URLSlugs = require('mongoose-url-slugs'),
  passportLocalMongoose = require('passport-local-mongoose'),

bcrypt = require('bcrypt-nodejs');  

const config = require('./config/database');


const User = new mongoose.Schema({
	username: {
        type: String,
        unique: true,
        required: true
    },
  	password: {
        type: String,
        required: true
    }
});

User.pre('save', function (next) {
    const user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

User.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

const PerformanceStats = new mongoose.Schema({
	username: String,
	type: String,
    correct: Number,
    total: Number,
});

const uri = process.env.MONGODB_URI;
console.log(uri);
mongoose.model('User', User);
mongoose.model('PerformanceStats', PerformanceStats);
mongoose.connect(uri || 'mongodb://localhost/earTrainerdb');
